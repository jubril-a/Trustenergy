
import '../src/assets/css/home.css'
import logo from '../src/assets/images/logo.png'
const footer = ()=>{
    const footerContent = document.querySelector('footer')
    footerContent.innerHTML = ` <div class="top-foot constraint">
    <img id="logo" src=${logo} alt="TrustEnergy logo">
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

export default footer