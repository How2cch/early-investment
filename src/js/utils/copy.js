export const copyText = (text) => {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => resolve())
        .catch(() => reject("Copy failed, please try again or copy manually."));
    } else {
      const container = document.createElement('div');
      document.body.parentNode.insertBefore(container, document.body);
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.opacity = '0';
      textarea.style.pointerEvents = 'none';
      textarea.style.zIndex = '-1';
      container.appendChild(textarea);

      textarea.select();

      const isCopySupported = document.queryCommandSupported('copy');
      let isCopyActive = false;

      if (isCopySupported) {
        try {
          isCopyActive = document.execCommand('copy');
        } catch (e) {
          reject(e);
        }
      }

      container.removeChild(textarea);

      if (isCopySupported && isCopyActive) {
        resolve();
      } else {
        reject('The copy feature is not supported on your device.');
      }
    }
  });
};