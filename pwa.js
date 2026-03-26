const installButton = document.getElementById("installButton");
const installHint = document.getElementById("installHint");
const appBanner = document.getElementById("appBanner");
const installModal = document.getElementById("installModal");
const installModalTitle = document.getElementById("installModalTitle");
const installModalText = document.getElementById("installModalText");
const installModalSteps = document.getElementById("installModalSteps");
const installModalClose = document.getElementById("installModalClose");

let deferredInstallPrompt = null;
let bannerTimeoutId = null;

const isLocalhost = ["localhost", "127.0.0.1"].includes(location.hostname);
const isFileProtocol = location.protocol === "file:";
const needsSecureHost = !window.isSecureContext && !isLocalhost && !isFileProtocol;
const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
const isAndroid = /android/i.test(navigator.userAgent);

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

  if (deferredInstallPrompt) {
    return "Можна встановити прямо зараз";
  }

  if (isFileProtocol) {
    return "Для справжнього встановлення відкрий через localhost або HTTPS";
  }

  if (needsSecureHost) {
    return "Для встановлення потрібен HTTPS, наприклад GitHub Pages";
  }

  if (isIos) {
    return "Кнопка покаже кроки для iPhone";
  }

  if (isAndroid) {
    return "Кнопка покаже кроки для Android";
  }

  return "Кнопка покаже кроки для встановлення";
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

  hideBanner();
}

function openInstallModal(config) {
  if (!installModal || !installModalTitle || !installModalText || !installModalSteps) {
    showBanner(config.text, "warning", 6000);
    return;
  }

  installModalTitle.textContent = config.title;
  installModalText.textContent = config.text;
  installModalSteps.innerHTML = config.steps.map((step) => `<li>${step}</li>`).join("");
  installModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeInstallModal() {
  if (!installModal) {
    return;
  }

  installModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function getInstallGuide() {
  if (isFileProtocol || needsSecureHost) {
    return {
      title: "Щоб кнопка реально встановлювала додаток",
      text: "Зараз сайт відкритий без HTTPS, тому браузер не може показати нативне встановлення як у справжнього PWA.",
      steps: [
        "Опублікуй проєкт на GitHub Pages або іншому HTTPS-хостингу.",
        "Відкрий отримане https-посилання на смартфоні.",
        "На Android підтвердь Install app, а на iPhone додай через меню Поділитися."
      ]
    };
  }

  if (isIos) {
    return {
      title: "Встановлення на iPhone",
      text: "Safari не показує системний install prompt, але додаток можна додати на головний екран вручну.",
      steps: [
        "Відкрий сайт у Safari.",
        "Натисни кнопку Поділитися.",
        "Вибери На екран Домівки і підтвердь додавання."
      ]
    };
  }

  if (isAndroid) {
    return {
      title: "Встановлення на Android",
      text: "Якщо автоматичне вікно ще не з’явилось, додаток все одно можна встановити через меню браузера.",
      steps: [
        "Відкрий сайт у Chrome або Edge.",
        "Натисни меню браузера у правому верхньому куті.",
        "Вибери Install app або Додати на головний екран."
      ]
    };
  }

  return {
    title: "Встановлення в браузері",
    text: "На комп’ютері або в окремих браузерах встановлення залежить від підтримки PWA саме цим браузером.",
    steps: [
      "Використай Chrome або Edge.",
      "Відкрий сайт через localhost або HTTPS.",
      "Знайди пункт Install app або Apps у меню браузера."
    ]
  };
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

    openInstallModal(getInstallGuide());
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    closeInstallModal();
    refreshInstallUi();

    if (installHint) {
      installHint.textContent = "Додаток встановлено на пристрій";
    }

    showBanner("Цифровий гід першокурсника встановлено.", "success", 5000);
  });
}

function bindInstallModal() {
  if (!installModal) {
    return;
  }

  if (installModalClose) {
    installModalClose.addEventListener("click", closeInstallModal);
  }

  installModal.querySelectorAll("[data-close-install]").forEach((element) => {
    element.addEventListener("click", closeInstallModal);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !installModal.hidden) {
      closeInstallModal();
    }
  });
}

window.addEventListener("online", updateNetworkState);
window.addEventListener("offline", updateNetworkState);

registerServiceWorker();
bindInstallPrompt();
bindInstallModal();
closeInstallModal();
updateNetworkState();
