// Nav bar
const navButton = document.querySelector('.mobile-nav');
const navLinks = document.querySelector('.primary-navigation');

navButton.addEventListener('click', () => {
    let state = navButton.getAttribute('data-state');

    if (state === "collapsed") {
        navButton.setAttribute("data-state", "expanded");
        navButton.children[0].classList.remove('fa-bars')
        navButton.children[0].classList.add('fa-xmark')
        navLinks.classList.add("visible");
        
    } else {
        navButton.setAttribute("data-state", "collapsed");
        navButton.children[0].classList.remove('fa-xmark')
        navButton.children[0].classList.add('fa-bars')
        navLinks.classList.remove("visible");
    }
})

// Hero Section
const hero = document.querySelector('.hero');
const bgNavItems = document.querySelectorAll('.bg-nav-item');

bgNavItems.forEach((item) => {
    item.addEventListener('click', () => {
        hero.style.backgroundImage = `url('assets/images/hero-${item.id}.jpg')`;
        hero.style.backgroundPosition = 'center';
    })
})