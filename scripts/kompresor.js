document.addEventListener('DOMContentLoaded', function () {
    let stopwatchInterval;
    let stopwatchTime = 0;
    let isStopwatchRunning = false;
  
    // Butonlara event listener ekleme
    document.getElementById('startButton').addEventListener('click', startStopwatch);
    document.getElementById('stopButton').addEventListener('click', stopStopwatch);
    document.getElementById('resetButton').addEventListener('click', resetStopwatch);
    document.getElementById('addButton').addEventListener('click', addToTextField);
    document.getElementById('calculateButton').addEventListener('click', calculateFAD);
  
    // Kronometreyi başlatma fonksiyonu
    function startStopwatch() {
      if (!isStopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        isStopwatchRunning = true;
      }
    }
  
    // Kronometreyi durdurma fonksiyonu
    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      isStopwatchRunning = false;
    }
  
    // Kronometreyi sıfırlama fonksiyonu
    function resetStopwatch() {
      stopStopwatch();
      stopwatchTime = 0;
      updateStopwatchDisplay();
    }
  
    // Kronometreyi güncelleme fonksiyonu
    function updateStopwatch() {
      stopwatchTime++;
      updateStopwatchDisplay();
    }
  
    // Kronometre ekranını güncelleme fonksiyonu
    function updateStopwatchDisplay() {
      const hours = Math.floor(stopwatchTime / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((stopwatchTime % 3600) / 60).toString().padStart(2, '0');
      const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
      document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    // Kronometre değerini input alanına ekleme fonksiyonu
    function addToTextField() {
      document.getElementById('exitTime').value = stopwatchTime;
    }
  
    // Debi hesaplama fonksiyonu
    function calculateFAD() {
        const tankCapacity = parseFloat(document.getElementById('tankCapacity').value);
        const lowerPressure = parseFloat(document.getElementById('lowerPressure').value);
        const upperPressure = parseFloat(document.getElementById('upperPressure').value);
        const exitTime = parseFloat(document.getElementById('exitTime').value);
      
        const resultElement = document.getElementById('result');
      
        // Hata kontrolü
        if (isNaN(tankCapacity)) {
          resultElement.textContent = "Hava Tankı Kapasitesi boş bırakılamaz!";
          resultElement.classList.add('error');
          return;
        }
        if (isNaN(lowerPressure)) {
          resultElement.textContent = "Alt Basınç Değeri boş bırakılamaz!";
          resultElement.classList.add('error');
          return;
        }
        if (isNaN(upperPressure)) {
          resultElement.textContent = "Üst Basınç Değeri boş bırakılamaz!";
          resultElement.classList.add('error');
          return;
        }
        if (isNaN(exitTime)) {
          resultElement.textContent = "Çıkış Süresi boş bırakılamaz!";
          resultElement.classList.add('error');
          return;
        }
      
        // Hesaplama
        const resultLtPerMin = (tankCapacity * (upperPressure - lowerPressure) * 60) / exitTime;
        const resultM3PerMin = resultLtPerMin / 1000; // lt/dk'yı m³/dk'ya çevirme
      
        // Sonucu göster
        resultElement.textContent = `SONUÇ: ${resultLtPerMin.toFixed(2)} lt/dk (${resultM3PerMin.toFixed(2)} m³/dk)`;
        resultElement.classList.remove('error'); // Hata sınıfını kaldır
      }
  });