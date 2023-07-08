const walk = document.getElementById('walk');
const swim = document.getElementById('swim');

const dateInfo = document.getElementById('dateInfo');

walk.addEventListener('click', function() {
    dateInfo.textContent = "8/5 -- 9AM-12AM Walk for treats. Bring your pets for a walk and they will get a treat! Volunteer to help walk some of the animals in the shelter!"
})

swim.addEventListener('click', function() {
    dateInfo.textContent = "8/12 -- 11AM-4PM SWIMMING LESSONS! Bring your pets or volunteer to help with the shelter animals!"
})

swimsun.addEventListener('click', function() {
    dateInfo.textContent = "8/13 -- 12AM-3PM SWIMMING LESSONS! Bring your pets or volunteer to help with the shelter animals!"
})

groom.addEventListener('click', function() {
    dateInfo.textContent = "8/26 -- 9AM-4PM SPA DAY! Bring your animals or volnteer to take a shelter pet to our pet spa day!"
})

