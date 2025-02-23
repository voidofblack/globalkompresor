document.addEventListener('DOMContentLoaded', function () {
    const powerSelect = document.getElementById('power');
    const cableLengthSelect = document.getElementById('cableLength');
    const calculateButton = document.getElementById('calculateButton');
    const resultText = document.getElementById('resultText');

    const results = {
        '15 Kw': { '50 metrenin altında': '4x6mm', '50 metrenin üstünde': '4x10mm' },
        '18 Kw': { '50 metrenin altında': '4x10mm', '50 metrenin üstünde': '4x16mm' },
        '22 Kw': { '50 metrenin altında': '4x10mm', '50 metrenin üstünde': '4x16mm' },
        '30 Kw': { '50 metrenin altında': '4x16mm', '50 metrenin üstünde': '4x25mm' },
        '37 Kw': { '50 metrenin altında': '4x16mm', '50 metrenin üstünde': '4x25mm' },
        '45 Kw': { '50 metrenin altında': '4x25mm', '50 metrenin üstünde': '4x35mm' },
        '55 Kw': { '50 metrenin altında': '4x35mm', '50 metrenin üstünde': '4x50mm' },
        '75 Kw': { '50 metrenin altında': '4x50mm', '50 metrenin üstünde': '4x70mm' },
        '90 Kw': { '50 metrenin altında': '4x70mm', '50 metrenin üstünde': '4x95mm' },
        '110 Kw': { '50 metrenin altında': '4x95mm', '50 metrenin üstünde': '4x120mm' },
        '132 Kw': { '50 metrenin altında': '4x120mm', '50 metrenin üstünde': '4x150mm' },
        '160 Kw': { '50 metrenin altında': '4x150mm', '50 metrenin üstünde': '4x185mm' },
        '200 Kw': { '50 metrenin altında': '4x185mm', '50 metrenin üstünde': '4x300mm' },
        '250 Kw': { '50 metrenin altında': '4x300mm', '50 metrenin üstünde': '4x400mm' },
        '315 Kw': { '50 metrenin altında': '4x400mm', '50 metrenin üstünde': '4x500mm' }
    };

    calculateButton.addEventListener('click', function () {
        const selectedPower = powerSelect.value;
        const selectedCableLength = cableLengthSelect.value;

        if (selectedPower === 'Seçiniz' || selectedCableLength === 'Seçiniz') {
            resultText.textContent = 'Lütfen tüm seçimleri yapınız.';
            resultText.classList.add('error'); // Hata durumunda kırmızı renk
            return;
        }

        const result = results[selectedPower]?.[selectedCableLength] || 'Seçimlerinizi kontrol ediniz.';
        resultText.textContent = result;
        resultText.classList.remove('error'); // Hata sınıfını kaldır
    });
});