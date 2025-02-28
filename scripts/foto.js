// Elementler
const uploadedItems = document.getElementById('uploadedItems');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Yüklenen Makineleri Ekrana Render Etme
function renderUploadedItems() {
  // Örnek makineleri ekrana render et
  const makineler = [
    {
      description: "Makine 1 Açıklaması",
      photos: ["images/globallogo.png", "images/trakyalogo.png"]
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

    // WhatsApp İkonu Ekle
    const whatsappIcon = document.createElement('div');
    whatsappIcon.className = 'whatsapp-icon';
    whatsappIcon.innerHTML = `<img src="images/WhatsApp.svg" alt="WhatsApp">`;
    whatsappIcon.addEventListener('click', () => {
      shareOnWhatsApp(item);
    });

    container.appendChild(desc);
    container.appendChild(photoContainer);
    container.appendChild(whatsappIcon); // WhatsApp ikonunu ekle
    uploadedItems.appendChild(container);
  });
}

// WhatsApp Paylaşım Fonksiyonu
function shareOnWhatsApp(item) {
  const description = item.description;
  const photos = item.photos;

  // Açıklama ve fotoğraf linklerini birleştir
  let message = `Açıklama: ${description}\n\nFotoğraflar:\n`;
  photos.forEach((photoUrl, index) => {
    message += `${index + 1}. ${photoUrl}\n`;
  });

  // WhatsApp paylaşım linki
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  // Yeni sekmede WhatsApp'ı aç
  window.open(whatsappUrl, '_blank');
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
function renderUploadedItem(item) {
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
  
    // WhatsApp İkonu Ekle
    const whatsappIcon = document.createElement('div');
    whatsappIcon.className = 'whatsapp-icon';
    whatsappIcon.innerHTML = `<img src="images/WhatsApp.svg" alt="WhatsApp">`;
    whatsappIcon.addEventListener('click', () => {
      shareOnWhatsApp(item);
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
    container.appendChild(whatsappIcon); // WhatsApp ikonunu ekle
    container.appendChild(downloadButton); // İndirme butonunu ekle
    uploadedItems.appendChild(container);
  }