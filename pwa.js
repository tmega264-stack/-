const installButton = document.getElementById("installButton");
const installHint = document.getElementById("installHint");
const appBanner = document.getElementById("appBanner");

let deferredInstallPrompt = null;
let bannerTimeoutId = null;

const isLocalhost = ["localhost", "127.0.0.1"].includes(location.hostname);
const isFileProtocol = location.protocol === "file:";
const needsSecureHost = !window.isSecureContext && !isLocalhost && !isFileProtocol;
const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function showBanner(message, tone = "success", timeoutMs = 0) {
  if (!appBanner) {
    return;
  }

  appBanner.textContent = message;
  appBanner.dataset.tone = tone;
  appBanner.hidden = false;

  if (bannerTimeoutId) {
    clearTimeout(bannerTimeoutId);
    bannerTimeoutId = null;
  }

  if (timeoutMs > 0) {
    bannerTimeoutId = window.setTimeout(() => {
      appBanner.hidden = true;
      bannerTimeoutId = null;
    }, timeoutMs);
  }
}

function hideBanner() {
  if (!appBanner) {
    return;
  }

  if (bannerTimeoutId) {
    clearTimeout(bannerTimeoutId);
    bannerTimeoutId = null;
  }

  appBanner.hidden = true;
}

function setInstallButtonVisible(visible) {
  if (!installButton) {
    return;
  }

  installButton.classList.toggle("is-hidden", !visible);
}

function getInstallHintText() {
  if (!navigator.onLine) {
    return "Офлайн: кешовані сторінки доступні";
  }

  if (isStandaloneApp()) {
    return "Працює як встановлений додаток";
  }

  if (isFileProtocol) {
    return "Для встановлення відкрий через localhost або HTTPS";
  }

  if (needsSecureHost) {
    return "Для встановлення потрібен HTTPS, наприклад GitHub Pages";
  }

  if (deferredInstallPrompt) {
    return "Можна встановити на головний екран";
  }

  if (isIos) {
    return "На iPhone: Поділитися -> На екран Домівки";
  }

  return "Відкрий у Chrome або Edge на смартфоні для встановлення";
}

function refreshInstallUi() {
  if (installHint) {
    installHint.textContent = getInstallHintText();
  }

  setInstallButtonVisible(!isStandaloneApp());
}

function updateNetworkState() {
  refreshInstallUi();

  if (!navigator.onLine) {
    showBanner("Немає інтернету, але основні функції доступні з кешу.", "warning");
    return;
  }

  if (isFileProtocol) {
    showBanner(
      "Щоб кнопка встановлення реально працювала на телефоні, відкрий застосунок через localhost або розмісти сайт на GitHub Pages через HTTPS.",
      "warning"
    );
    return;
  }

  if (needsSecureHost) {
    showBanner("Для реального встановлення на смартфон потрібен HTTPS. GitHub Pages підійде.", "warning");
    return;
  }

  hideBanner();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    if (installHint) {
      installHint.textContent = "Цей браузер не підтримує service worker";
    }
    return;
  }

  if (isFileProtocol || needsSecureHost) {
    refreshInstallUi();
    return;
  }

  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      await navigator.serviceWorker.ready;
      refreshInstallUi();
    } catch (error) {
      if (installHint) {
        installHint.textContent = "Service worker не зареєстровано";
      }

      showBanner("Не вдалося зареєструвати service worker. Перевір запуск через localhost або HTTPS.", "warning");
    }
  });
}

function bindInstallPrompt() {
  if (!installButton) {
    return;
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    refreshInstallUi();
    showBanner("Додаток готовий до встановлення на телефон.", "success", 4000);
  });

  installButton.addEventListener("click", async () => {
    if (isStandaloneApp()) {
      showBanner("Додаток уже встановлено на пристрій.", "success", 3500);
      return;
    }

    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;

      if (choice.outcome === "accepted") {
        showBanner("Встановлення запущено. Після підтвердження додаток з’явиться на головному екрані.", "success", 5000);
      }

      deferredInstallPrompt = null;
      refreshInstallUi();
      return;
    }

    if (isFileProtocol || needsSecureHost) {
      showBanner(
        "Кнопка запрацює як справжнє встановлення після публікації сайту через HTTPS. Найпростіше рішення: GitHub Pages.",
        "warning",
        6500
      );
      return;
    }

    if (isIos) {
      showBanner("На iPhone відкрий меню 'Поділитися' і вибери 'На екран Домівки'.", "success", 6500);
      return;
    }

    showBanner("Відкрий цей сайт у Chrome або Edge на Android і дочекайся системної пропозиції встановлення.", "warning", 5500);
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    refreshInstallUi();

    if (installHint) {
      installHint.textContent = "Додаток встановлено на пристрій";
    }

    showBanner("Цифровий гід першокурсника встановлено.", "success", 5000);
  });
}

window.addEventListener("online", updateNetworkState);
window.addEventListener("offline", updateNetworkState);

registerServiceWorker();
bindInstallPrompt();
updateNetworkState();
