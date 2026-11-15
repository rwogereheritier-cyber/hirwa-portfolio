import { animate, scroll, stagger } from "motion";

const motionOk = document.documentElement.classList.contains("motion-ok");
const ease = [0.22, 1, 0.36, 1] as const;

// 1. Hero: the name rises letter by letter, then the intro fades in.
if (motionOk) {
  const chars = document.querySelectorAll<HTMLElement>("[data-hero-char]");
  const fades = document.querySelectorAll<HTMLElement>("[data-hero-fade]");

  if (chars.length) {
    animate(
      chars,
      { y: ["105%", "0%"], opacity: [0, 1] },
      { duration: 1.1, ease, delay: stagger(0.045, { startDelay: 0.1 }) }
    );
  }
  if (fades.length) {
    animate(
      fades,
      { y: [16, 0], opacity: [0, 1] },
      { duration: 0.9, ease, delay: stagger(0.1, { startDelay: 0.75 }) }
    );
  }

  // 2. Work tiles: the preview grows into place as it scrolls into view.
  document.querySelectorAll<HTMLElement>("[data-tile-media]").forEach((media) => {
    scroll(animate(media, { scale: [0.9, 1] }, { ease: "linear" }), {
      target: media,
      offset: ["start end", "center center"],
    });
  });
}

// Copy email to clipboard
document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
  const label = btn.querySelector<HTMLElement>("[data-copy-label]");
  const original = label?.textContent ?? "";
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? "");
      if (label) label.textContent = "Email copied";
    } catch {
      window.location.href = `mailto:${btn.dataset.copy}`;
      return;
    }
    setTimeout(() => label && (label.textContent = original), 1800);
  });
});
