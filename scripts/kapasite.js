document.addEventListener('DOMContentLoaded', function () {
    const pressureSelect = document.getElementById('pressure');
    const powerSelect = document.getElementById('power');
    const calculateButton = document.getElementById('calculateButton');
    const resultText = document.getElementById('resultText');

    const results = {
        '11 Kw': { '7.5 Bar': '1.7 m3/dk', '10 Bar': '1.4 m3/dk', '13 Bar': '1.1 m3/dk' },
        '15 Kw': { '7.5 Bar': '2.85 m3/dk', '10 Bar': '2.4 m3/dk', '13 Bar': '2.1 m3/dk' },
        '18 Kw': { '7.5 Bar': '3.5 m3/dk', '10 Bar': '3 m3/dk', '13 Bar': '2.65 m3/dk' },
        '22 Kw': { '7.5 Bar': '3.9 m3/dk', '10 Bar': '3.7 m3/dk', '13 Bar': '3.2 m3/dk' },
        '30 Kw': { '7.5 Bar': '5.3 m3/dk', '10 Bar': '4.6 m3/dk', '13 Bar': '4 m3/dk' },
        '37 Kw': { '7.5 Bar': '6.6 m3/dk', '10 Bar': '5.8 m3/dk', '13 Bar': '4.9 m3/dk' },
        '45 Kw': { '7.5 Bar': '7.2 m3/dk', '10 Bar': '6.6 m3/dk', '13 Bar': '5.9 m3/dk' },
        '55 Kw': { '7.5 Bar': '10 m3/dk', '10 Bar': '9.8 m3/dk', '13 Bar': '7.3 m3/dk' },
        '75 Kw': { '7.5 Bar': '13.1 m3/dk', '10 Bar': '11 m3/dk', '13 Bar': '9.7 m3/dk' },
        '90 Kw': { '7.5 Bar': '16.5 m3/dk', '10 Bar': '14.2 m3/dk', '13 Bar': '12.2 m3/dk' },
        '110 Kw': { '7.5 Bar': '19.5 m3/dk', '10 Bar': '17.2 m3/dk', '13 Bar': '15 m3/dk' },
        '132 Kw': { '7.5 Bar': '24 m3/dk', '10 Bar': '20.5 m3/dk', '13 Bar': '18 m3/dk' },
        '160 Kw': { '7.5 Bar': '28.2 m3/dk', '10 Bar': '24.5 m3/dk', '13 Bar': '21.5 m3/dk' },
        '200 Kw': { '7.5 Bar': '37 m3/dk', '10 Bar': '32 m3/dk', '13 Bar': '28.5 m3/dk' },
        '250 Kw': { '7.5 Bar': '45 m3/dk', '10 Bar': '38.1 m3/dk', '13 Bar': '33.1 m3/dk' },
        '315 Kw': { '7.5 Bar': '54 m3/dk', '10 Bar': '44 m3/dk', '13 Bar': '37.5 m3/dk' }
    };

    calculateButton.addEventListener('click', function () {
        const selectedPressure = pressureSelect.value;
        const selectedPower = powerSelect.value;

        if (selectedPressure === 'Seçiniz' || selectedPower === 'Seçiniz') {
            resultText.textContent = 'Lütfen tüm seçimleri yapınız.';
            return;
        }

        const result = results[selectedPower]?.[selectedPressure] || 'Seçimlerinizi kontrol ediniz.';
        resultText.textContent = result;
    });
});