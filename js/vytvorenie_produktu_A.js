document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    // Referencie na polia
    const nameInput = document.getElementById('name');
    const popisTextarea = document.getElementById('popis');
    const cenaInput = document.getElementById('cena');
    const createButton = document.querySelector('.btn-success');
    const deleteButtonContainer = document.getElementById('delete-button-container');

    // Predvyplnenie polí v edit móde
    if (mode === 'edit') {
        createButton.textContent = 'Upraviť';
        nameInput.value = 'Príklad produktu';
        popisTextarea.value = 'Toto je príklad popisu produktu.';
        cenaInput.value = '99,99';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm','w-100');
        deleteButton.textContent = 'Zmazať produkt';
        deleteButton.onclick = function () {
            if (confirm('Naozaj chcete zmazať tento produkt?')) {
                alert('Produkt bol zmazaný.');
                window.location.href = 'sprava_produktov_A.html';
            }
        };
        deleteButtonContainer.appendChild(deleteButton);
    } else {
        createButton.textContent = 'Vytvoriť';
        nameInput.value = '';
        popisTextarea.value = '';
        cenaInput.value = '';
    }

    // Funkcionalita na odstraňovanie obrázkov
    const imageContainer = document.getElementById('image-container');
    imageContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-icon')) {
            const imageWrapper = e.target.closest('.image-wrapper');
            imageWrapper.remove(); // Odstráni celý wrapper s obrázkom
        }
    });
});