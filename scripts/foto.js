// Elementler
const uploadedItems = document.getElementById('uploadedItems');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Örnek Makine Verileri
const makineler = [
  {
    description: "Makine 1 Açıklaması",
    photos: [ "images/trakyalogo.png"]
  },
  {
    description: "Makine 2 Açıklaması",
    photos: ["images/makine3.jpg"]
  },
  {
    description: "Makine 3 Açıklaması",
    photos: ["images/makine4.jpg", "images/makine5.jpg"]
  }
];

// Yüklenen Makineleri Ekrana Render Etme
function renderUploadedItems() {
  uploadedItems.innerHTML = ''; // Önceki içeriği temizle

  makineler.forEach((item) => {
    const container = document.createElement('div');
    container.className = 'uploaded-item';

    const desc = document.createElement('p');
    desc.textContent = item.description;

    const photoContainer = document.createElement('div');
    photoContainer.className = 'photo-container';

    item.photos.forEach((photoUrl) => {
      const img = document.createElement('img');
      img.src = photoUrl;
      img.alt = 'Yüklenen Fotoğraf';

      // Fotoğrafa tıklandığında büyük boyutta göster
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = photoUrl;
      });

      photoContainer.appendChild(img);
    });

    // İndirme Butonu Ekle
    const downloadButton = document.createElement('button');
    downloadButton.className = 'download-button';
    downloadButton.textContent = 'Tüm Fotoğrafları İndir';
    downloadButton.addEventListener('click', () => {
      downloadAllPhotos(item.photos);
    });

    container.appendChild(desc);
    container.appendChild(photoContainer);
    container.appendChild(downloadButton); // İndirme butonunu ekle
    uploadedItems.appendChild(container);
  });
}

// Tüm Fotoğrafları İndirme Fonksiyonu
async function downloadAllPhotos(photoUrls) {
  try {
    for (let i = 0; i < photoUrls.length; i++) {
      const response = await fetch(photoUrls[i]);
      const blob = await response.blob();
      saveAs(blob, `makine-foto${i + 1}.jpg`);
    }
    alert("Tüm fotoğraflar başarıyla indirildi!");
  } catch (error) {
    console.error("Fotoğraflar indirilirken hata oluştu:", error);
    alert("Fotoğraflar indirilirken bir hata oluştu.");
  }
}

// Modal'ı Kapatma
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Modal dışına tıklandığında kapat
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Sayfa yüklendiğinde makineleri render et
document.addEventListener('DOMContentLoaded', () => {
  renderUploadedItems();
});