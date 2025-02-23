document.addEventListener('DOMContentLoaded', function () {
    const motorSpeedInput = document.getElementById('motorSpeed');
    const motorPulleyDiameterInput = document.getElementById('motorPulleyDiameter');
    const screwPulleyDiameterInput = document.getElementById('screwPulleyDiameter');
    const calculateButton = document.getElementById('calculateButton');
    const resultText = document.getElementById('resultText');

    calculateButton.addEventListener('click', function () {
        const motorSpeed = parseFloat(motorSpeedInput.value);
        const motorPulleyDiameter = parseFloat(motorPulleyDiameterInput.value);
        const screwPulleyDiameter = parseFloat(screwPulleyDiameterInput.value);

        if (isNaN(motorSpeed) || isNaN(motorPulleyDiameter) || isNaN(screwPulleyDiameter)) {
            resultText.textContent = 'Lütfen tüm alanları doldurunuz.';
            resultText.classList.add('error'); // Hata durumunda kırmızı renk
            return;
        }

        if (motorPulleyDiameter === 0 || screwPulleyDiameter === 0) {
            resultText.textContent = 'Kasnak çapları sıfır olamaz.';
            resultText.classList.add('error'); // Hata durumunda kırmızı renk
            return;
        }

        const ratio = motorPulleyDiameter / screwPulleyDiameter;
        const screwSpeed = motorSpeed * ratio;

        resultText.textContent = `${screwSpeed.toFixed(2)} d/dk`;
        resultText.classList.remove('error'); // Hata sınıfını kaldır
    });
});