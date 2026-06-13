// Shared modal state between use-auth and login-modal
let _openLoginModal: (() => void) | null = null;

export function registerLoginModal(fn: () => void) {
  _openLoginModal = fn;
}

export function triggerLoginModal() {
  _openLoginModal?.();
}
