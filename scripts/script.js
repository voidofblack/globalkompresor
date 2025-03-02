document.getElementById("loginButton").addEventListener("click", function() {
    // Giriş butonuna tıklandığında içerik sayfasına yönlendir
    window.location.href = "content.html"; // İleride bu sayfayı oluşturacağız
});

function showPage(pageId) {
    // Tüm sayfaları gizle
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Seçilen sayfayı göster
    document.getElementById(pageId).style.display = 'block';
}

// Sayfa yüklendiğinde ilk sayfayı göster
window.onload = () => {
    showPage('button1Page');
};