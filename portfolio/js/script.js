/* ===== SCROLL REVEAL ANIMATION ===== */
const cards = document.querySelectorAll('.project-card');

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerPoint) {
            card.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ===== SMOOTH PAGE TRANSITION EFFECT ===== */
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.href.includes(window.location.origin)) {
            e.preventDefault();
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = link.href;
            }, 300);
        }
    });
});

document.body.style.transition = 'opacity 0.4s ease';
