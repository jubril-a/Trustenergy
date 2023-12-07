//Creating the Navigation bar dynamically
const navigation =()=>{
    const nav = document.querySelector('.top-bar');
    nav.innerHTML = `<nav class="nav-bar constraint">
    <div class="logo">
        <img id="logo" src="./assets/images/logo.png" alt="TrustEnergy">
    </div>
    <div class="mobile-nav" data-state="collapsed">
        <i class="fa-solid fa-bars"></i>
    </div>
    <div class="primary-navigation">
        <a href="/index.html" class="active nav-item">Home</a>
        <a href="/about.html" class="nav-item">About Us</a>
        <a href="#" class="nav-item">Our Services</a>
        <a href="/OurTeam.html" class="nav-item">Our Team</a>
        <a href="#" class="nav-item">Career</a>
        <a href="/SUSTAINABILITY.html" class="nav-item">Sustainability</a>
        <a href="contact.html" class="nav-item mobile-contact">Contact Us</a>
    </div>
    <a href="contact.html" class="nav-item button">Contact Us</a>
</nav>`
}

navigation();

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

//Creating the Footer dynamically
const footer = ()=>{
    const footerContent = document.querySelector('footer')
    footerContent.innerHTML = ` <div class="top-foot constraint">
    <img id="logo" src="/assets/images/logo.png" alt="TrustEnergy logo">
    <div class="quick-links">
        <p class="h3-l">Quick Links</p>
        <nav class="">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="/OurTeam.html">Team</a>
            <a href="">Career</a>
            <a href="">Sustainability</a>
        </nav>
    </div>
    <div class="other-links">
        <p class="h3-l">Other Links</p>
        <nav class="">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Consitions</a>
        </nav>
    </div>
    <div class="main-info">
        <div class="info">
            <span class="h3">ADDRESS:</span>
            <p>Sicap sacré-Coeur villa, villa 8569, Dakar, Senegal</p>
        </div>
        <div class="info">
            <span class="h3">TELEPHONE:</span>
            <p>+221 33 825 11 70</p>
        </div>
        <div class="info">
            <span class="h3">EMAIL:</span>
            <p>info@trustenergygroup.com</p>
        </div>
        <a class="button" href="contact.html">SEND US A MESSAGE</a>
    </div>
</div>
<div class="bottom-foot">
    <p class="text-center">&copy; 2023 TrustEnergy Group. All rights reserved.</p>
</div>`
}
footer()