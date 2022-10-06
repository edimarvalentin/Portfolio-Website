// Edimar Valentín Kery <edimar.valentin@upr.edu>

// Navbar fades up on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById('navbar').style.top = "0";
    }else{
        document.getElementById('navbar').style.top = '-60px';
    }
    prevScrollpos = currentScrollPos;
}

// Updates the description of the certificate section
const myCarousel = document.getElementById('carousel');
const certDescription = document.getElementById('cert-description');

myCarousel.addEventListener('slide.bs.carousel', Event =>{
    console.log(Event.to);
    switch(Event.to){
        case 0:
            certDescription.textContent = "Awarded after completing the CodePath Android Development Course in which different Android apps were built in Android Studio using Java.";
            break;

        case 1:
            certDescription.textContent = "Awarded after finishing the course about client-side UI frameworks, grids and responsive design. Tackled CSS preprocessors, the basics of Node.js and NPM.";
            break;
        
        case 2:
            certDescription.textContent = "Awarded after completing a 3-year study program in the occupation of electronics. Learned the basics of electronic circuits, fortified math solving skills and developed a broader understanding of modern-day computers.";
            break;

        case 3:
            certDescription.textContent = "Awarded by the Puerto Rican League of Robotics my participation in Team 2328A on the 2015 VEX Robotics competitions.";
            break;
    }
});