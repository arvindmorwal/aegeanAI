/**
 * aegeanAI — Hero Animation
 * Concept: AI "Draft & Refine" — types two wrong drafts (deleted),
 * then locks in the final headline. Tells the product story through motion.
 *
 * Respects prefers-reduced-motion — falls back to instant reveal.
 */

(function () {
  'use strict';

  const DRAFTS = [
    "Stop Hiring Freelancers for Every Project",
    "Stop Wasting Time on Business Writing",
  ];
  const FINAL  = "Stop Paying Agency Prices for Work You Could Automate";

  const SPEEDS = {
    type:      38,   // ms per character (typing)
    backspace: 22,   // ms per character (deleting)
    pauseEnd:  640,  // pause after finishing a draft
    pauseGap:  280,  // pause between delete and next draft
    pauseFinal:520,  // pause after final headline before locking
  };

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function typeText(el, text, speed) {
    for (let i = 0; i < text.length; i++) {
      el.textContent = text.slice(0, i + 1);
      await wait(speed + (Math.random() * 14 - 7)); // tiny jitter
    }
  }

  async function deleteText(el, speed) {
    const text = el.textContent;
    for (let i = text.length; i > 0; i--) {
      el.textContent = text.slice(0, i - 1);
      await wait(speed + (Math.random() * 8 - 4));
    }
  }

  async function runAnimation() {
    const streamEl  = document.getElementById('hero-stream');
    const cursorEl  = document.getElementById('hero-cursor');
    const subEl     = document.getElementById('hero-sub');
    const actionsEl = document.getElementById('hero-actions');

    if (!streamEl || !cursorEl) return;

    // Draft phase — muted color, orange cursor = "not right yet"
    for (const draft of DRAFTS) {
      streamEl.classList.add('is-draft');
      cursorEl.classList.add('cursor--draft');
      cursorEl.classList.remove('cursor--final');

      await typeText(streamEl, draft, SPEEDS.type);
      await wait(SPEEDS.pauseEnd);
      await deleteText(streamEl, SPEEDS.backspace);
      await wait(SPEEDS.pauseGap);
    }

    // Final phase — full white, accent cursor = "this is it"
    streamEl.classList.remove('is-draft');
    cursorEl.classList.remove('cursor--draft');
    cursorEl.classList.add('cursor--final');

    await typeText(streamEl, FINAL, SPEEDS.type - 6);
    await wait(SPEEDS.pauseFinal);

    // Lock in — cursor blinks twice then disappears, headline glows
    cursorEl.classList.add('cursor--lock');
    await wait(700);
    cursorEl.style.opacity = '0';
    cursorEl.style.transition = 'opacity 0.3s';

    streamEl.classList.add('is-locked');

    // Reveal sub and CTAs
    await wait(220);
    if (subEl)     { subEl.classList.add('is-visible'); }
    await wait(160);
    if (actionsEl) { actionsEl.classList.add('is-visible'); }
  }

  function instantReveal() {
    const streamEl  = document.getElementById('hero-stream');
    const cursorEl  = document.getElementById('hero-cursor');
    const subEl     = document.getElementById('hero-sub');
    const actionsEl = document.getElementById('hero-actions');

    if (streamEl)  { streamEl.textContent = FINAL; streamEl.classList.add('is-locked'); }
    if (cursorEl)  { cursorEl.style.display = 'none'; }
    if (subEl)     { subEl.classList.add('is-visible'); }
    if (actionsEl) { actionsEl.classList.add('is-visible'); }
  }

  // Boot
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', prefersReduced ? instantReveal : runAnimation);
  } else {
    if (prefersReduced) { instantReveal(); } else { runAnimation(); }
  }
})();
