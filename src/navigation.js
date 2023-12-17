
import '../src/assets/css/home.css'
import logo from '../src/assets/images/logo.png'
const navigation =()=>{
    const nav = document.querySelector('.top-bar');
    nav.innerHTML = `<nav class="nav-bar constraint">
    <div class="logo">
        <img id="logo" src=${logo} alt="TrustEnergy">
    </div>
    <div class="mobile-nav" data-state="collapsed">
        <i class="fa-solid fa-bars"></i>
    </div>
    <div class="primary-navigation">
        <a href="/index.html" class="active nav-item">Home</a>
        <a href="/about.html" class="nav-item">About Us</a>
        <a href="#" class="nav-item">Our Services</a>
        <a href="/ourteam.html" class="nav-item">Our Team</a>
        <a href="/career.html" class="nav-item">Career</a>
        <a href="/sustainability.html" class="nav-item">Sustainability</a>
        <a href="contact.html" class="nav-item mobile-contact">Contact Us</a>
    </div>
    <a href="contact.html" class="nav-item button">Contact Us</a>
</nav>`


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
}


export default navigation