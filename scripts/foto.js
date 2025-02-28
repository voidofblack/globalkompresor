// Firebase yapılandırması
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDL4xwqE7Sg3_gMP3L7dIF9rzvZ0gDMxcc",
  authDomain: "ikinci-el-makineler.firebaseapp.com",
  projectId: "ikinci-el-makineler",
  storageBucket: "ikinci-el-makineler.firebasestorage.app",
  messagingSenderId: "696909090670",
  appId: "1:696909090670:web:a8ec79ffdca6b06ffdfb7f",
  measurementId: "G-XJSW1CB922"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

// Sayfa yüklendiğinde Firestore'dan verileri çek
document.addEventListener('DOMContentLoaded', () => {
  loadUploadedItems();
});

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

// Onayla Butonu
confirmButton.addEventListener('click', async (e) => {
  e.preventDefault(); // Formun submit olayını engelle

  currentDescription = description.value.trim();

  if (uploadedPhotos.length === 0 || !currentDescription) {
    alert('Lütfen açıklama yazın ve en az bir fotoğraf yükleyin.');
    return;
  }

  // Yüklenen fotoğrafları ve açıklamayı Firestore'a kaydet
  await addUploadedItem(currentDescription, uploadedPhotos);

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
    console.log("Cloudinary Response:", data); // Bu satırı ekleyin
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

// Makineyi Firestore'a Kaydetme
async function addUploadedItem(description, photos) {
  try {
    const docRef = await addDoc(collection(db, "machines"), {
      description: description,
      photos: photos,
      timestamp: new Date()
    });
    console.log("Makine başarıyla eklendi, ID:", docRef.id); // Bu satırı ekleyin
    loadUploadedItems(); // Yüklenen makineleri yeniden yükle
  } catch (error) {
    console.error("Hata:", error);
    alert('Makine eklenirken bir hata oluştu.');
  }
}

// Firestore'dan Makineleri Çekme
async function loadUploadedItems() {
  uploadedItems.innerHTML = ''; // Önceki içeriği temizle
  const querySnapshot = await getDocs(collection(db, "machines"));
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    renderUploadedItem(item);
  });
}

// Yüklenen Makineyi Ekrana Render Etme
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

  container.appendChild(desc);
  container.appendChild(photoContainer);
  uploadedItems.appendChild(container);
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