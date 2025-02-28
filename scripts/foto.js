// Elementler
const addMachineButton = document.getElementById('addMachineButton');
const uploadForm = document.getElementById('uploadForm');
const photoUpload = document.getElementById('photoUpload');
const description = document.getElementById('description');
const uploadPhotosButton = document.getElementById('uploadPhotosButton');
const confirmButton = document.getElementById('confirmButton');
const photoPreview = document.getElementById('photoPreview');
const uploadedItems = document.getElementById('uploadedItems');

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Yüklenen fotoğrafları ve açıklamayı saklamak için geçici değişkenler
let uploadedPhotos = [];
let currentDescription = '';

// Makine Ekle Butonu
addMachineButton.addEventListener('click', () => {
  uploadForm.classList.remove('hidden'); // Formu göster
});

// Fotoğrafları Yükle Butonu
uploadPhotosButton.addEventListener('click', async () => {
  const files = photoUpload.files;

  if (files.length === 0) {
    alert('Lütfen en az bir fotoğraf seçin.');
    return;
  }

  // Tüm fotoğrafları yükle
  for (const file of files) {
    const photoUrl = await uploadPhoto(file);
    if (photoUrl) {
      uploadedPhotos.push(photoUrl); // Yüklenen fotoğrafı sakla
      addPhotoPreview(photoUrl); // Fotoğrafı önizleme alanına ekle
    }
  }

  alert('Fotoğraflar başarıyla yüklendi!');
});

// Onayla Butonu
confirmButton.addEventListener('click', () => {
  currentDescription = description.value.trim();

  if (uploadedPhotos.length === 0 || !currentDescription) {
    alert('Lütfen açıklama yazın ve en az bir fotoğraf yükleyin.');
    return;
  }

  // Yüklenen fotoğrafları ve açıklamayı ekrana ekle
  addUploadedItem(currentDescription, uploadedPhotos);

  // Formu temizle ve gizle
  uploadForm.reset();
  uploadForm.classList.add('hidden');
  photoPreview.innerHTML = ''; // Önizleme alanını temizle
  uploadedPhotos = []; // Yüklenen fotoğrafları temizle
  currentDescription = ''; // Açıklamayı temizle
});

// Fotoğrafı Cloudinary'e Yükleme
async function uploadPhoto(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'my_unsigned_preset'); // Unsigned Upload Preset

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/dy7pj8jpv/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.secure_url) {
      return data.secure_url; // Yüklenen fotoğrafın URL'sini döndür
    } else {
      throw new Error('Fotoğraf yüklenirken bir hata oluştu.');
    }
  } catch (error) {
    console.error('Hata:', error);
    alert('Fotoğraf yüklenirken bir hata oluştu.');
    return null;
  }
}

// Fotoğraf Önizleme Alanına Ekleme
function addPhotoPreview(photoUrl) {
  const photoItem = document.createElement('div');
  photoItem.className = 'photo-preview-item';

  const img = document.createElement('img');
  img.src = photoUrl;
  img.alt = 'Yüklenen Fotoğraf';

  const removeButton = document.createElement('button');
  removeButton.className = 'remove-photo';
  removeButton.textContent = '×';
  removeButton.addEventListener('click', () => {
    removePhotoPreview(photoUrl); // Fotoğrafı önizleme alanından kaldır
  });

  photoItem.appendChild(img);
  photoItem.appendChild(removeButton);
  photoPreview.appendChild(photoItem);
}

// Fotoğrafı Önizleme Alanından Kaldırma
function removePhotoPreview(photoUrl) {
  uploadedPhotos = uploadedPhotos.filter((url) => url !== photoUrl); // Fotoğrafı listeden kaldır
  const photoItem = document.querySelector(`.photo-preview-item img[src="${photoUrl}"]`).parentElement;
  photoPreview.removeChild(photoItem); // Fotoğrafı önizleme alanından kaldır
}

// Yüklenen Makineyi Ekrana Ekleme
function addUploadedItem(description, photos) {
  const item = document.createElement('div');
  item.className = 'uploaded-item';

  const desc = document.createElement('p');
  desc.textContent = description;

  const photoContainer = document.createElement('div');
  photoContainer.className = 'photo-container';

  photos.forEach((photoUrl) => {
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

  item.appendChild(desc);
  item.appendChild(photoContainer);
  uploadedItems.appendChild(item);
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