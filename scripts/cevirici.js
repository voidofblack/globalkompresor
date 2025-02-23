document.addEventListener('DOMContentLoaded', function () {
    // Debi Birim Çevirici Elementleri
    const m3PerMinuteInput = document.getElementById('m3PerMinute');
    const cfmInput = document.getElementById('cfm');
    const ltPerMinuteInput = document.getElementById('ltPerMinute');
    const m3PerHourInput = document.getElementById('m3PerHour');
    const m3PerSecondInput = document.getElementById('m3PerSecond');
    const calculateFlowRateButton = document.getElementById('calculateFlowRate');
    const clearFlowRateButton = document.getElementById('clearFlowRate');

    // Basınç Birim Çevirici Elementleri
    const barInput = document.getElementById('bar');
    const psiInput = document.getElementById('psi');
    const atmInput = document.getElementById('atm');
    const kgCm2Input = document.getElementById('kgCm2');
    const mpaInput = document.getElementById('mpa');
    const calculatePressureButton = document.getElementById('calculatePressure');
    const clearPressureButton = document.getElementById('clearPressure');

    // Debi Hesapla Fonksiyonu
    calculateFlowRateButton.addEventListener('click', function () {
        const m3PerMinute = parseFloat(m3PerMinuteInput.value);
        const cfm = parseFloat(cfmInput.value);
        const ltPerMinute = parseFloat(ltPerMinuteInput.value);
        const m3PerHour = parseFloat(m3PerHourInput.value);
        const m3PerSecond = parseFloat(m3PerSecondInput.value);

        if (!isNaN(m3PerMinute)) {
            cfmInput.value = (m3PerMinute * 35.3146667).toFixed(6);
            ltPerMinuteInput.value = (m3PerMinute * 1000).toFixed(6);
            m3PerHourInput.value = (m3PerMinute * 60).toFixed(6);
            m3PerSecondInput.value = (m3PerMinute * 0.0166666667).toFixed(6);
        } else if (!isNaN(cfm)) {
            m3PerMinuteInput.value = (cfm * 0.0283168466).toFixed(6);
            ltPerMinuteInput.value = (cfm * 28.3168466).toFixed(6);
            m3PerHourInput.value = (cfm * 1.69901082).toFixed(6);
            m3PerSecondInput.value = (cfm * 0.000471947443).toFixed(6);
        } else if (!isNaN(ltPerMinute)) {
            m3PerMinuteInput.value = (ltPerMinute * 0.001).toFixed(6);
            cfmInput.value = (ltPerMinute * 0.0353146667).toFixed(6);
            m3PerHourInput.value = (ltPerMinute * 0.06).toFixed(6);
            m3PerSecondInput.value = (ltPerMinute * 1.66666666666667E-05).toFixed(6);
        } else if (!isNaN(m3PerHour)) {
            m3PerMinuteInput.value = (m3PerHour * 0.0166666667).toFixed(6);
            cfmInput.value = (m3PerHour * 0.588577771).toFixed(6);
            ltPerMinuteInput.value = (m3PerHour * 16.6666667).toFixed(6);
            m3PerSecondInput.value = (m3PerHour * 0.000277777778).toFixed(6);
        } else if (!isNaN(m3PerSecond)) {
            m3PerMinuteInput.value = (m3PerSecond * 60).toFixed(6);
            cfmInput.value = (m3PerSecond * 2118.87997).toFixed(6);
            ltPerMinuteInput.value = (m3PerSecond * 60000).toFixed(6);
            m3PerHourInput.value = (m3PerSecond * 3600).toFixed(6);
        }
    });

    // Debi Temizle Fonksiyonu
    clearFlowRateButton.addEventListener('click', function () {
        m3PerMinuteInput.value = '';
        cfmInput.value = '';
        ltPerMinuteInput.value = '';
        m3PerHourInput.value = '';
        m3PerSecondInput.value = '';
    });

    // Basınç Hesapla Fonksiyonu
    calculatePressureButton.addEventListener('click', function () {
        const bar = parseFloat(barInput.value);
        const psi = parseFloat(psiInput.value);
        const atm = parseFloat(atmInput.value);
        const kgCm2 = parseFloat(kgCm2Input.value);
        const mpa = parseFloat(mpaInput.value);

        if (!isNaN(bar)) {
            psiInput.value = (bar * 14.50377).toFixed(6);
            atmInput.value = (bar * 0.986).toFixed(6);
            kgCm2Input.value = (bar * 1.019).toFixed(6);
            mpaInput.value = (bar * 0.1).toFixed(6);
        } else if (!isNaN(psi)) {
            barInput.value = (psi * 0.0689476).toFixed(6);
            atmInput.value = (psi * 0.068046).toFixed(6);
            kgCm2Input.value = (psi * 0.07030697).toFixed(6);
            mpaInput.value = (psi * 0.00689476).toFixed(6);
        } else if (!isNaN(atm)) {
            barInput.value = (atm * 1.01325).toFixed(6);
            psiInput.value = (atm * 14.69594).toFixed(6);
            kgCm2Input.value = (atm * 1.03322745).toFixed(6);
            mpaInput.value = (atm * 0.101325).toFixed(6);
        } else if (!isNaN(kgCm2)) {
            barInput.value = (kgCm2 * 0.980665).toFixed(6);
            psiInput.value = (kgCm2 * 14.22334).toFixed(6);
            atmInput.value = (kgCm2 * 0.9678411).toFixed(6);
            mpaInput.value = (kgCm2 * 0.0980665).toFixed(6);
        } else if (!isNaN(mpa)) {
            barInput.value = (mpa * 10).toFixed(6);
            psiInput.value = (mpa * 145.037737797).toFixed(6);
            atmInput.value = (mpa * 9.869232667160128).toFixed(6);
            kgCm2Input.value = (mpa * 10.1972).toFixed(6);
        }
    });

    // Basınç Temizle Fonksiyonu
    clearPressureButton.addEventListener('click', function () {
        barInput.value = '';
        psiInput.value = '';
        atmInput.value = '';
        kgCm2Input.value = '';
        mpaInput.value = '';
    });
});