const hero = document.querySelector('.hero');
const bgNavItems = document.querySelectorAll('.bg-nav-item');

bgNavItems.forEach((item) => {
    item.addEventListener('click', () => {
        hero.style.backgroundImage = `url('assets/images/hero-${item.id}.jpg')`;
    })
})