let amazon = document.querySelector('.amazon');
let disney=document.querySelector('.disney')
let fx=document.querySelector('.fx')
console.log(amazon); // Vérifie que l'élément est bien trouvé
let imageParalax=document.querySelector('.imageChange');
console.log(imageParalax)
// Ajout de l'événement hover
amazon.addEventListener("mouseenter", () => {
     imageParalax.src = "images/n4.png"; 
});
fx.addEventListener("mouseenter", () => {
     imageParalax.src = "images/n8.png"; 
});
disney.addEventListener("mouseenter", () => {
     imageParalax.src = "images/n5.png"; 
});

amazon.addEventListener("mouseleave", () => {
 imageParalax.src = "images/n3.png"; 
});
var observer = new IntersectionObserver((entrie)=>{
    for(entry of entrie){
 
if(entry.isIntersecting&& entry.target.classList.contains("textRight2")){

entry.target.animate([
 {opacity:0},
 {opacity:1}

],{
    duration:1000,
      fill: "forwards"
})
}

 if(entry.isIntersecting&& entry.target.classList.contains("zoneImagefooter1")){

entry.target.animate([
 {opacity:0},
 {opacity:1}

],{
    duration:1000,
      fill: "forwards"
})
}
    }
 

});

let titreWatson=document.querySelector(".titreWatson")
// let letterW=document.querySelector(".letterW")
// letterW.style.transform="scale(2)";

observer.observe(document.querySelector('.zoneImagefooter1'))
document.querySelectorAll('.textRight2').forEach(el => observer.observe(el));