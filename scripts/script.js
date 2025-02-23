document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun gönderilmesini engelle

    // Kullanıcı adı ve şifre değerlerini al
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Doğru kullanıcı adı ve şifre (sizin belirlediğiniz)
    const correctUsername = "admin";
    const correctPassword = "12345";

    // Kontrol et
    if (username === correctUsername && password === correctPassword) {
        // Giriş başarılıysa içerik sayfasına yönlendir
        window.location.href = "content.html"; // İleride bu sayfayı oluşturacağız
    } else {
        // Hatalı giriş mesajını göster
        document.getElementById("error-message").classList.remove("hidden");
    }
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

