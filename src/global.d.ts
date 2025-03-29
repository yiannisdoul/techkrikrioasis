export {};

declare global {
  interface Window {
    __resetTypewriter__?: () => void;
  }
}
