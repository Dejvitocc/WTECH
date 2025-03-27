//Po načítaná stránky sa vyberajú všetky prvky s triedou .carousel-item vnútri .carousel
//a pomocou premennej slide definujeme koľko ďalších položiek sa má pridať
document.addEventListener('DOMContentLoaded', function () { 
    var items = document.querySelectorAll('.carousel .carousel-item');
    items.forEach((e) => {
        const slide = 4;
        let next = e.nextElementSibling;
        for (var i = 0; i < slide; i++) {
            if (!next) {
                next = items[0]; //Ak neexistuje ďalší súrodenec (next), vráti sa na prvý prvok (items[0])
            }
            let cloneChild = next.cloneNode(true);
            e.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling; //Posunie sa na nasledujúceho súrodenca
        }
    });

    //pre každý carousel sa spočíta počet itemov vnútri
    //Ak je iba jeden carousel-item (totalItems === 1), pridá sa trieda single-item na carousel-inner. 
    // Toto slúži na špeciálnu úpravu štýlu pre karusel s jednou položkou.
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const totalItems = carouselInner.querySelectorAll('.carousel-item').length;
        if (totalItems === 1) {
            carouselInner.classList.add('single-item');
        }
    });
});
//Funkcia presmeruje používateľa na stránku vyber_produktov.html
function openCategory(category) {
    window.location.href = `vyber_produktov.html?kategoria=${category}`;
}