// Extra touch feedback so buttons feel alive on phones and desktops.
document.querySelectorAll('.link-btn, .social').forEach((el) => {
  el.addEventListener('pointerdown', () => el.classList.add('pressed'));
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((eventName) => {
    el.addEventListener(eventName, () => el.classList.remove('pressed'));
  });
});
