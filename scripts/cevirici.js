document.addEventListener('DOMContentLoaded', function () {
    // Debi Birim Çevirici Elementleri
    const m3PerMinuteInput = document.getElementById('m3PerMinute');
    const cfmInput = document.getElementById('cfm');
    const ltPerMinuteInput = document.getElementById('ltPerMinute');
    const m3PerHourInput = document.getElementById('m3PerHour');
    const m3PerSecondInput = document.getElementById('m3PerSecond');

    // Basınç Birim Çevirici Elementleri
    const barInput = document.getElementById('bar');
    const psiInput = document.getElementById('psi');
    const atmInput = document.getElementById('atm');
    const kgCm2Input = document.getElementById('kgCm2');
    const mpaInput = document.getElementById('mpa');

    // Debi Hesaplama Fonksiyonu
    function calculateFlowRate(sourceInput) {
        const value = parseFloat(sourceInput.value);

        if (isNaN(value)) {
            // Eğer değer boşsa veya geçersizse, tüm alanları temizle
            m3PerMinuteInput.value = '';
            cfmInput.value = '';
            ltPerMinuteInput.value = '';
            m3PerHourInput.value = '';
            m3PerSecondInput.value = '';
            return;
        }

        if (sourceInput === m3PerMinuteInput) {
            cfmInput.value = (value * 35.3146667).toFixed(6);
            ltPerMinuteInput.value = (value * 1000).toFixed(6);
            m3PerHourInput.value = (value * 60).toFixed(6);
            m3PerSecondInput.value = (value * 0.0166666667).toFixed(6);
        } else if (sourceInput === cfmInput) {
            m3PerMinuteInput.value = (value * 0.0283168466).toFixed(6);
            ltPerMinuteInput.value = (value * 28.3168466).toFixed(6);
            m3PerHourInput.value = (value * 1.69901082).toFixed(6);
            m3PerSecondInput.value = (value * 0.000471947443).toFixed(6);
        } else if (sourceInput === ltPerMinuteInput) {
            m3PerMinuteInput.value = (value * 0.001).toFixed(6);
            cfmInput.value = (value * 0.0353146667).toFixed(6);
            m3PerHourInput.value = (value * 0.06).toFixed(6);
            m3PerSecondInput.value = (value * 1.66666666666667E-05).toFixed(6);
        } else if (sourceInput === m3PerHourInput) {
            m3PerMinuteInput.value = (value * 0.0166666667).toFixed(6);
            cfmInput.value = (value * 0.588577771).toFixed(6);
            ltPerMinuteInput.value = (value * 16.6666667).toFixed(6);
            m3PerSecondInput.value = (value * 0.000277777778).toFixed(6);
        } else if (sourceInput === m3PerSecondInput) {
            m3PerMinuteInput.value = (value * 60).toFixed(6);
            cfmInput.value = (value * 2118.87997).toFixed(6);
            ltPerMinuteInput.value = (value * 60000).toFixed(6);
            m3PerHourInput.value = (value * 3600).toFixed(6);
        }
    }

    // Basınç Hesaplama Fonksiyonu
    function calculatePressure(sourceInput) {
        const value = parseFloat(sourceInput.value);

        if (isNaN(value)) {
            // Eğer değer boşsa veya geçersizse, tüm alanları temizle
            barInput.value = '';
            psiInput.value = '';
            atmInput.value = '';
            kgCm2Input.value = '';
            mpaInput.value = '';
            return;
        }

        if (sourceInput === barInput) {
            psiInput.value = (value * 14.50377).toFixed(6);
            atmInput.value = (value * 0.986).toFixed(6);
            kgCm2Input.value = (value * 1.019).toFixed(6);
            mpaInput.value = (value * 0.1).toFixed(6);
        } else if (sourceInput === psiInput) {
            barInput.value = (value * 0.0689476).toFixed(6);
            atmInput.value = (value * 0.068046).toFixed(6);
            kgCm2Input.value = (value * 0.07030697).toFixed(6);
            mpaInput.value = (value * 0.00689476).toFixed(6);
        } else if (sourceInput === atmInput) {
            barInput.value = (value * 1.01325).toFixed(6);
            psiInput.value = (value * 14.69594).toFixed(6);
            kgCm2Input.value = (value * 1.03322745).toFixed(6);
            mpaInput.value = (value * 0.101325).toFixed(6);
        } else if (sourceInput === kgCm2Input) {
            barInput.value = (value * 0.980665).toFixed(6);
            psiInput.value = (value * 14.22334).toFixed(6);
            atmInput.value = (value * 0.9678411).toFixed(6);
            mpaInput.value = (value * 0.0980665).toFixed(6);
        } else if (sourceInput === mpaInput) {
            barInput.value = (value * 10).toFixed(6);
            psiInput.value = (value * 145.037737797).toFixed(6);
            atmInput.value = (value * 9.869232667160128).toFixed(6);
            kgCm2Input.value = (value * 10.1972).toFixed(6);
        }
    }

    // Debi Birim Çevirici için Input Event'leri
    m3PerMinuteInput.addEventListener('input', () => calculateFlowRate(m3PerMinuteInput));
    cfmInput.addEventListener('input', () => calculateFlowRate(cfmInput));
    ltPerMinuteInput.addEventListener('input', () => calculateFlowRate(ltPerMinuteInput));
    m3PerHourInput.addEventListener('input', () => calculateFlowRate(m3PerHourInput));
    m3PerSecondInput.addEventListener('input', () => calculateFlowRate(m3PerSecondInput));

    // Basınç Birim Çevirici için Input Event'leri
    barInput.addEventListener('input', () => calculatePressure(barInput));
    psiInput.addEventListener('input', () => calculatePressure(psiInput));
    atmInput.addEventListener('input', () => calculatePressure(atmInput));
    kgCm2Input.addEventListener('input', () => calculatePressure(kgCm2Input));
    mpaInput.addEventListener('input', () => calculatePressure(mpaInput));
});