document.addEventListener('DOMContentLoaded', function() {
    // Manejar clic en botones de ciudades
    const cityButtons = document.querySelectorAll('.city-tabs button');
    cityButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Loading weather report...");
        });
    });

    // Manejar clic en 'I Accept' de la cookie banner
    const acceptButton = document.querySelector('.cookie-banner button');
    acceptButton.addEventListener('click', function() {
        document.querySelector('.cookie-banner').style.display = 'none';
    });

    // Convertir temperaturas cuando cambie el selector
    const temperatureSelect = document.getElementById('temperature');
    temperatureSelect.addEventListener('change', function() {
        const isCelsius = temperatureSelect.value === 'celsius';
        const temperatures = document.querySelectorAll('.day-forecast p:last-child');
        temperatures.forEach(temp => {
            const maxSpan = temp.querySelector('.max');
            const minSpan = temp.querySelector('.min');
            let maxTemp = parseInt(maxSpan.textContent);
            let minTemp = parseInt(minSpan.textContent);
            if (isCelsius) {
                maxTemp = Math.round((maxTemp - 32) * 5 / 9);
                minTemp = Math.round((minTemp - 32) * 5 / 9);
            } else {
                maxTemp = Math.round(maxTemp * 9 / 5 + 32);
                minTemp = Math.round(minTemp * 9 / 5 + 32);
            }
            maxSpan.textContent = maxTemp;
            minSpan.textContent = minTemp;
        });
    });
});
