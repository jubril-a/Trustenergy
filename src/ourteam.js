import '../src/assets/css/ourteam.css'
import navigation from './navigation';
import footer from './footer';
import team1 from '../src/assets/images/team-1.jpg'
import team2 from '../src/assets/images/team-2.jpg'
import team3 from '../src/assets/images/team-3.jpg'

document.addEventListener('DOMContentLoaded', function() {
    navigation();
    footer()
})

const founder = document.querySelector('.founders')
founder.innerHTML = `  <div class="text-founders">
<h3>Meet the Founders</h3>
<p class="text1">Meet our driving forces, Chams and Daniel, 
    Visionary leaders shaping the path to sucess</p>
</div>
<div class="chairman">
<div class="founders-1">
    <img class="img1" src=${team1} alt=""></img>
    <div class="founders-text1">
        <h4 class="text-founder">Chams <span class="span-1">Diagne</span></h4>
        <p class="text2">Chairman</p>
        <p class="text4">Mr Diagne, a founder of Trust Energy Group, is a 
            seasoned entrepreneur with over 20 years of top management and
             entrepreneurial experience across Africa and Europe. He is 
             currently the founder and CEO of Talent2Africa (the first
              African social network, allowing the linkage between the
               talents of the Diaspora and African businesses). He holds
                a Master’s Degree from StaSanford University Graduate 
                School of Business.</p>
    </div>
</div>
<div class="founders-1">
    <img class="img1" src=${team2} alt="">
    <div class="founders-text1">
        <h4 class="text-founder">Daniel <span class="span-1">Adebayo</span></h4>
        <p class="text2">MD/CEO</p>
        <p class="text4">Mr Adedayo, a founder of Trust Energy Group,
             is an EDM-OpenWells and Cost Tracking Engineer with over
              14 years of Executive experience in the oil and gas 
              industry. He was most recently a General Manager at 
              Heftan Energy Services Limited, an oil and gas servicing
              company that provides integrated project management 
              services for oil and gas well drilling, completion, 
              well intervention, and production, Procurement, 
              Equipment Supply, Logistics, and Manpower Supply. 
              Also, he has worked for Oil and Gas Servicing and 
              Exploration and Production Companies in Nigeria. He 
              holds a Bachelor’s Degree in Economics from Lagos State University. 
              He also has certifications in Drilling and Completions Essentials,
               Managing Wellsite Operations, Administrative and Human Resources Management.</p>
    </div>
</div>
</div>`

const ourteam = document.querySelector('.ourteam')

const teamCard = ()=> {
    const ourInformation = document.createElement('div')
    ourInformation.className = 'ourteam-information'
    for(let i =0 ; i< 6 ; i++){
        const card = document.createElement('div');
        card.className ='ourteam-info'
        card.innerHTML = ` <img class="img2" src=${team3} alt="">
        <div class="personal-info">
            <h4 class="ourteam-name">Alice Andres</h4>
            <p class="text3">Acting Managing Director</p>`
        ourInformation.appendChild(card)
    }
  return ourInformation
}

ourteam.innerHTML =`<h2>OUR TEAM!</h2>`
ourteam.append(teamCard())

