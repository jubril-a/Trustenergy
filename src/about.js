import '../src/assets/css/about.css'
import vid from '../src/assets/images/video1.mp4'
import footer from './footer'
import navigation from './navigation'
import support from '../src/assets/images/support.png'
import reliability from '../src/assets/images/reliability.png'
import key from '../src/assets/images/key.png'
import unity from '../src/assets/images/social.png'
import security from '../src/assets/images/security.png'


const body = document.querySelector('body')
const video = document.querySelector('.about-header')
 video.innerHTML =`   <video autoplay muted loop class="video-bg">
 <source src=${vid}>
</video> 
<h1>About Us</h1>
`
const valueContent = document.querySelector('.value-content')
 valueContent.innerHTML = ` <ul class="values">
<li><div class="list-values">
    <p class="text5">Teamwork</p>
    <img class="img1" src=${support} alt="Teamwork">
</div></li>
<li><div class="list-values">
    <p class="text5">Reliability</p>
    <img class="img1" src=${reliability} alt="reliability">
</div></li>
<li><div class="list-values">
    <p class="text5">Selflessness</p>
    <img class="img1" src=${key} alt="selflessness">
</div></li>
<li><div class="list-values">
    <p class="text5">Unity</p>
    <img class="img1" src=${unity} alt="Unity">
</div></li>
<li><div class="list-values">
    <p class="text5">Transparency</p>
    <img class="img1" src=${security} alt="">
</div></li>
</ul>`
navigation()
footer()
