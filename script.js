document.querySelectorAll('.skill, .hero-card, .quest-card, .project-card, .mini-card, .big-card').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(700px) rotateX(${y * -3}deg) rotateY(${x * 3}deg) translateY(-3px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});

const marquee = document.querySelector('.marquee-track');
marquee.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
marquee.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
