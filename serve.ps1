param(
  [int]$Port = 4173
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)

function Get-ContentType($path) {
  switch ([System.IO.Path]::GetExtension($path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "application/javascript; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    ".svg" { "image/svg+xml" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".webp" { "image/webp" }
    ".sql" { "text/plain; charset=utf-8" }
    default { "application/octet-stream" }
  }
}

$listener.Start()

Write-Host "Static server started on http://localhost:$Port/" -ForegroundColor Green
Write-Host "Open http://localhost:$Port/ in your browser to test the PWA." -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()

    try {
      $stream = $client.GetStream()
      $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()

      if ([string]::IsNullOrWhiteSpace($requestLine)) {
        continue
      }

      while (($line = $reader.ReadLine()) -ne $null) {
        if ($line -eq "") {
          break
        }
      }

      $parts = $requestLine.Split(" ")
      $rawPath = if ($parts.Length -ge 2) { $parts[1] } else { "/" }
      $requestPath = [Uri]::UnescapeDataString(($rawPath.Split("?")[0]).TrimStart("/"))

      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "index.html"
      }

      if ($requestPath.Contains("..")) {
        $requestPath = "offline.html"
      }

      $localPath = Join-Path $root $requestPath

      if ((Test-Path $localPath) -and -not (Get-Item $localPath).PSIsContainer) {
        $status = "200 OK"
        $contentType = Get-ContentType $localPath
        $body = [System.IO.File]::ReadAllBytes($localPath)
      } else {
        $status = "404 Not Found"
        $contentType = "text/html; charset=utf-8"
        $body = [System.IO.File]::ReadAllBytes((Join-Path $root "offline.html"))
      }

      $headers = "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
      $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
      $stream.Write($headerBytes, 0, $headerBytes.Length)
      $stream.Write($body, 0, $body.Length)
      $stream.Flush()
    }
    finally {
      if ($reader) {
        $reader.Dispose()
      }
      if ($stream) {
        $stream.Dispose()
      }
      $client.Close()
    }
  }
}
finally {
  $listener.Stop()
}
