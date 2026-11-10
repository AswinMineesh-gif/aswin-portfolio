const stage = document.getElementById('portraitStage');
const wrap = document.getElementById('portraitWrap');
const pupils = document.querySelectorAll('.pupil');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (stage && !reduceMotion) {
  stage.addEventListener('pointermove', (event) => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const dx = (x - .5);
    const dy = (y - .5);
    wrap.style.transform = `rotateY(${dx * 7}deg) rotateX(${-dy * 5}deg) translate3d(${dx * 7}px, ${dy * 4}px, 0)`;
    pupils.forEach((pupil) => {
      pupil.style.transform = `translate(${dx * 7}px, ${dy * 5}px)`;
    });
  });
  stage.addEventListener('pointerleave', () => {
    wrap.style.transform = 'rotateY(0deg) rotateX(0deg) translate3d(0,0,0)';
    pupils.forEach((pupil) => pupil.style.transform = 'translate(0,0)');
  });
}
const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');
menuButton?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
