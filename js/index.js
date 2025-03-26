document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.carousel .carousel-item');
    items.forEach((e) => {
        const slide = 4;
        let next = e.nextElementSibling;
        for (var i = 0; i < slide; i++) {
            if (!next) {
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            e.appendChild(cloneChild.children[0]); // Append the col-md-3 div
            next = next.nextElementSibling;
        }
    });


    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const totalItems = carouselInner.querySelectorAll('.carousel-item').length;
        if (totalItems === 1) {
            carouselInner.classList.add('single-item');
        }
    });
});
function openCategory(category) {
    window.location.href = `vyber_produktov.html?kategoria=${category}`;
}