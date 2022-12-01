'use strict'

// const profileElement = document.getElementById("profile-element"); 
const profile = document.querySelectorAll(".profile-container"); 






// When you click on profile 

profile.forEach(function(i) { 
    i.addEventListener('click', () => {
        profile.classlist.remove('active'); 
        console.log(profileElement); 
    }) 
}); 