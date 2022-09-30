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
const myCertDescription = document.getElementById('cert-description');

myCarousel.addEventListener('slide.bs.carousel', Event =>{
    
    myCertDescription.textContent = ""
});