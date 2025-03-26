function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('kategoria');
}

document.addEventListener("DOMContentLoaded", function () {
    const category = getCategoryFromURL();
    const categoryMap = {
        "muzi": "Muži",
        "zeny": "Ženy",
        "deti": "Deti",
        "sporty": "Športy"
    };

    if (category && categoryMap[category]) {
        document.getElementById("current-category").textContent = categoryMap[category];
    }
});

function openCategory(category) {
    window.location.href = `vyber_produktov.html?kategoria=${category}`;
}

// Funkcia na zmenu hlavného obrázka
function changeImage(imageSrc, thumbnail) {
    document.getElementById('mainImage').src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}