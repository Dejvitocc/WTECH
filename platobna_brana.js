document.addEventListener("DOMContentLoaded", function() {
    const monthSelect = document.getElementById("expMonth");
    const yearSelect = document.getElementById("expYear");
    const currentYear = new Date().getFullYear();

    for (let i = 1; i <= 12; i++) {
        let month = i.toString().padStart(2, "0"); 
        let option = document.createElement("option");
        option.value = month;
        option.textContent = month;
        monthSelect.appendChild(option);
    }

    for (let i = 0; i < 10; i++) {
        let year = (i+ currentYear)%100;
        let option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});

document.getElementById("cardNumber").addEventListener("input", function (event) {
    let value = event.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1 ").trim();   
    event.target.value = value;
});