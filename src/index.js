//Creating the Navigation bar dynamically
import '../src/assets/css/home.css'
import '../src/assets/css/about.css'
import footer from './footer';
import navigation from './navigation';
import well from '../src/assets/images/well.jpg'
import studies from '../src/assets/images/studies.jpg'
import drilling from '../src/assets/images/drilling.jpg'
import equipment from '../src/assets/images/equipment.jpg'
import training from '../src/assets/images/training.jpg'
import cham from '../src/assets/images/chams.jpg'
import daniel from '../src/assets/images/daniel.jpeg'


document.addEventListener('DOMContentLoaded', function() {
    navigation();
    footer()
})

const serviceWrapper = document.querySelector('.services-wrapper')
serviceWrapper.innerHTML = `<div class="services constraint">
<div class="section-content">
    <h2 class="h2 text-center">Discover Our Services</h2>
    <p class="body-text text-center">Trust Energy Group SAS provides project management services for oil and gas drilling, completion, well intervention, production and procurement & rentals of drilling types of equipment, and renewable energy services.</p>
</div>
<div class="service-container">
    <div class="service">
        <div class="img-container">
            <img src=${studies} alt="studies">
        </div>
        <div class="service__content">
            <p class="service__text">Subsurface Studies & Development</p>
            <p class="service__description">Reservoir Studies, Field Planning, Development, Management…</p>
            <a href="">Learn More</a>
        </div>
    </div>
    <div class="service">
        <div class="img-container">
            <img src=${well} alt="well">
        </div>
        <div class="service__content">
            <p class="service__text">Well Engineering</p>
            <p class="service__description">Well Engineering, Designs, Assessments, Project Management…</p>
            <a href="">Learn More</a>
        </div>
    </div>
    <div class="service">
        <div class="img-container">
            <img src=${drilling} alt="drilling">
        </div>
        <div class="service__content">
            <p class="service__text">Drilling & Production Operations</p>
            <p class="service__description">Drilling Personnel and Petroleum Engineering Consultants and Management…</p>
            <a href="">Learn More</a>
        </div>
    </div>
    <div class="service">
        <div class="img-container">
            <img src=${equipment} alt="equipment">
        </div>
        <div class="service__content">
            <p class="service__text">Equipment Supply</p>
            <p class="service__description">Procurement and Supply of engineering equipment…</p>
            <a href="">Learn More</a>
        </div>
    </div>
    <div class="service">
        <div class="img-container">
            <img src=${training} alt="training">
        </div>
        <div class="service__content">
            <p class="service__text">Training & Representation</p>
            <p class="service__description">Well Engineering, Petroleum Engineering, Engineering Production Operations, Health, Safety and Environment (HSE)…</p>
            <a href="">Learn More</a>
        </div>
    </div>
</div>
<a href="" class="button">Learn More</a>
</div>`

const teamWrapper = document.querySelector('.team-wrapper')
teamWrapper.innerHTML =`<div class="team constraint">
    <div class="team-intro">
    <h2 class="h2">Meet the Founders</h2>
    <p class="constraint-40">Meet our driving forces, Chams and Daniel, visionary leaders shaping the path to success.</p>
    <a href="" class="button mbk-100">See Team</a>   
</div>
<div class="members">
    <div class="member">
        <img src=${cham} alt="">
        <div class="info">
            <h3>Chams <span class="text-primary-1">Diagne</span></h3>
            <span class="position">Chairman</span>
        </div>
    </div>
    <div class="member">
        <img src=${daniel} alt="daniel">
        <div class="info">
            <h3>Daniel <span class="text-primary-1">Adedayo</span></h3>
            <span class="position">MD/CEO</span>
        </div>
    </div>
</div>   
</div>`