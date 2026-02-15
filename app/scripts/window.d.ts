declare global {
  interface Window {
    startConfetti?: () => void;
    stopConfetti?: () => void;
    toggleConfetti?: () => void;
    removeConfetti?: () => void;
  }
}
export {};
