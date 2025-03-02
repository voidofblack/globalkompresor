// Elementler
const uploadedItems = document.getElementById('uploadedItems');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Örnek Makine Verileri
const makineler = [
  {
    description: "Dalgakıran Inversys 90| 7,5 Bar| 90kW| Bakımları yapıldı, Ekran yenilendi. ",
    photos: [ "images/inv90/makina (1).jpg", "images/inv90/makina (2).jpg",
        "images/inv90/makina (3).jpg","images/inv90/makina (4).jpg",
        "images/inv90/makina (5).jpg","images/inv90/makina (6).jpg",
        "images/inv90/makina (7).jpg"]
  },
  {
    description: "Dalgakıran Inversys 60| 7,5 Bar| 60kW| Revizyonu ve Bakımları yapıldı, Ekran yenilendi.",
    photos: [ "images/inv60/makine (1).jpg","images/inv60/makine (2).jpg",
        "images/inv60/makine (3).jpg","images/inv60/makine (4).jpg",
        "images/inv60/makine (5).jpg","images/inv60/makine (6).jpg",
        "images/inv60/makine (7).jpg","images/inv60/makine (8).jpg"
    ]
  },
  {
    description: "Inversys 160+ Plus| 7,5 Bar| 160kW| 40821 saatte| Bakımları yapıldı.",
    photos: [ "images/inv160+/makine (1).jpg","images/inv160+/makine (2).jpg",
        "images/inv160+/makine (3).jpg","images/inv160+/makine (4).jpg",
        "images/inv160+/makine (5).jpg","images/inv160+/makine (6).jpg",
        "images/inv160+/makine (7).jpg"]
  },
  {
    description: "Ekomak Eko110 QDVST| 8 Bar| 110kW| 60000 saatte| Revizyonu ve Bakımları yapıldı.",
    photos: [ "images/110qdvst/makine (1).jpg","images/110qdvst/makine (2).jpg",
        "images/110qdvst/makine (3).jpg","images/110qdvst/makine (4).jpg",
        "images/110qdvst/makine (5).jpg","images/110qdvst/makine (6).jpg",
    "images/110qdvst/makine (7).jpg"
    ]
  },
  {
    description: "Dvk 100| 7,5 Bar| 75kW| Revizyonu ve Bakımları yapıldı. Pano Revizyonu yapıldı ekran yenilendi",
    photos: [ "images/dvk100kırmızı/makine (1).jpg","images/dvk100kırmızı/makine (2).jpg",
        "images/dvk100kırmızı/makine (3).jpg","images/dvk100kırmızı/makine (4).jpg",
        "images/dvk100kırmızı/makine (5).jpg","images/dvk100kırmızı/makine (6).jpg",
        "images/dvk100kırmızı/makine (7).jpg"]
  },
  {
    description: "Dvk 75| 7,5 Bar| 55kW| Revizyonu ve Bakımları yapıldı. Ekran yenilendi, Kasa boyandı ",
    photos: [ "images/dvk75gri/makine (1).jpg","images/dvk75gri/makine (2).jpg",
        "images/dvk75gri/makine (3).jpg","images/dvk75gri/makine (4).jpg",
        "images/dvk75gri/makine (5).jpg","images/dvk75gri/makine (6).jpg",
        ]
  },
  {
    description: "Dvk 75| 7,5 Bar| 55kW| 44000 saatte| Revizyonu ve Bakımları yapıldı.",
    photos: [ "images/dvk75beyaz/makine (1).jpg","images/dvk75beyaz/makine (2).jpg",
        "images/dvk75beyaz/makine (3).jpg","images/dvk75beyaz/makine (4).jpg",
        "images/dvk75beyaz/makine (5).jpg","images/dvk75beyaz/makine (6).jpg",
    "images/dvk75beyaz/makine (7).jpg"
    ]
  },
  {
    description: "Dvk 60| 10 Bar| 45kW| Revizyonu ve Bakımları yapıldı, Ekran yenilendi.",
    photos: [ "images/dvk60/makine (1).jpg","images/dvk60/makine (2).jpg",
        "images/dvk60/makine (3).jpg","images/dvk60/makine (4).jpg",
        "images/dvk60/makine (5).jpg","images/dvk60/makine (6).jpg",
    "images/dvk60/makine (7).jpg","images/dvk60/makine (8).jpg"
    ]
  },
  {
    description: "Dvk 50| 8 Bar| 37kW| Revizyonu ve Bakımları yapıldı",
    photos: [ "images/dvk50gri/makine (1).jpg","images/dvk50gri/makine (2).jpg",
        "images/dvk50gri/makine (3).jpg","images/dvk50gri/makine (4).jpg",
        "images/dvk50gri/makine (5).jpg"
    ]
  },
  {
    description: "Tahaş RSN125E| 8 Bar| 90kW| Revizyonu ve Bakımları yapıldı.",
    photos: [ "images/tahas90/makine (1).jpg","images/tahas90/makine (2).jpg",
        "images/tahas90/makine (3).jpg","images/tahas90/makine (4).jpg",
        "images/tahas90/makine (5).jpg","images/tahas90/makine (6).jpg",
    "images/tahas90/makine (7).jpg"
    ]
  },
  {
    description: "Vidkom 11| 8 Bar| 11kW| 42000 saatte| Bakımları yapıldı.",
    photos: [ "images/vidkom/makine (1).jpg","images/vidkom/makine (2).jpg",
        "images/vidkom/makine (3).jpg","images/vidkom/makine (4).jpg",
    ]
  },
  {
    description: "Dalgakıran Tidy 10| 9 Bar| 7,5kW| Bakımları yapıldı.",
    photos: [ "images/tidy10/makine (1).jpg","images/tidy10/makine (2).jpg",
        "images/tidy10/makine (3).jpg","images/tidy10/makine (4).jpg",
    ]
  },
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