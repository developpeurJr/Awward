
// Sélection des éléments
const footerImage = document.querySelector('.zoneImagefooter1');
const textopacity = document.querySelectorAll('.textRight2');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            console.log("hello"); // affiché quand l'élément entre dans le viewport

            // Animation de l'élément observé
            entry.target.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 1000,
                fill: "forwards"
            });
        }
    });
});

// Observer le footer
if (footerImage) observer.observe(footerImage);

// Observer chaque texte
textopacity.forEach(el => observer.observe(el));


// ----------------------------
// Sélection des éléments
// ----------------------------
const amazon = document.querySelector('.amazon');
const disney = document.querySelector('.disney');
const fx = document.querySelector('.fx');
const imageParalax = document.querySelector('.imageChange');

const textRightElements = document.querySelectorAll('.textRight2');

console.log(footerImage)

// ----------------------------
// Fonction pour remettre l'image initiale
// ----------------------------
const resetImage = () => {
    imageParalax.src = "images/n3.png"; // Image par défaut
};

// ----------------------------
// Hover pour changer les images
// ----------------------------
amazon.addEventListener("mouseenter", () => imageParalax.src = "images/n4.png");
disney.addEventListener("mouseenter", () => imageParalax.src = "images/n5.png");
fx.addEventListener("mouseenter", () => imageParalax.src = "images/n8.png");

// Retour à l'image initiale au mouseleave
amazon.addEventListener("mouseleave", resetImage);
disney.addEventListener("mouseleave", resetImage);
fx.addEventListener("mouseleave", resetImage);

// ----------------------------
// IntersectionObserver pour les animations
// ----------------------------



