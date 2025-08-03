// Hover-Based Mega Menu JavaScript Component 
class MegaMenu {
    constructor() {
        this.megaMenu = document.getElementById('megaMenu');
        this.megaMenuContent = document.getElementById('megaMenuContent');
        this.navLinks = document.querySelectorAll('[data-menu]');
        this.closeMegaMenuBtn = document.getElementById('closeMegaMenuBtn');
        this.navbar = document.querySelector('.navbar');

        // Delay timer için
        this.closeTimer = null;
        this.closeDelay = 300; // 300ms delay

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Mouse navbar linklerine geldiğinde
        this.navLinks.forEach(link => {
            link.addEventListener('mouseenter', (event) => {
                // Varsa kapanma timer'ını iptal et
                this.cancelCloseTimer();

                const menuType = link.getAttribute('data-menu');
                console.log('Mouse menü üzerinde:', menuType);
                this.openMegaMenu(menuType);
            });
        });

        // Mouse navbar'dan çıktığında - DELAY ile kapat
        this.navbar.addEventListener('mouseleave', () => {
            console.log('Mouse navbar\'dan çıktı - 300ms sonra kapanacak');
            this.startCloseTimer();
        });

        // Mouse mega menu üzerine geldiğinde - timer'ı iptal et
        this.megaMenu.addEventListener('mouseenter', () => {
            console.log('Mouse mega menu üzerinde - timer iptal edildi');
            this.cancelCloseTimer();
        });

        // Mouse mega menu'dan çıktığında - DELAY ile kapat
        this.megaMenu.addEventListener('mouseleave', () => {
            console.log('Mouse mega menu\'dan çıktı - 300ms sonra kapanacak');
            this.startCloseTimer();
        });

        // Kapatma butonu (immediate close)
        this.closeMegaMenuBtn.addEventListener('click', () => {
            console.log('X butonuna tıklandı - hemen kapanıyor');
            this.cancelCloseTimer();
            this.closeMegaMenu();
        });

        // ESC tuşu (immediate close)
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !this.megaMenu.classList.contains('d-none')) {
                console.log('ESC tuşu - hemen kapanıyor');
                this.cancelCloseTimer();
                this.closeMegaMenu();
            }
        });
    }

    startCloseTimer() {
        // Varsa eski timer'ı temizle
        this.cancelCloseTimer();

        // Yeni timer başlat
        this.closeTimer = setTimeout(() => {
            console.log('Timer tamamlandı - mega menu kapatılıyor');
            this.closeMegaMenu();
        }, this.closeDelay);
    }

    cancelCloseTimer() {
        if (this.closeTimer) {
            console.log('Close timer iptal edildi');
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }

    openMegaMenu(menuType) {
        console.log('Mega menu hover ile açılıyor');

        const contentHTML = this.generateMegaMenuContent();
        this.megaMenuContent.innerHTML = contentHTML;
        this.megaMenu.classList.remove('d-none');
    }

    closeMegaMenu() {
        console.log('Mega menu kapatılıyor');
        this.megaMenu.classList.add('d-none');
        this.cancelCloseTimer(); // Timer'ı temizle
    }

    generateMegaMenuContent() {
        return `
            <div class="row">
                <!-- Kurumsal Bölümü -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h4 class="text-primary fw-bold mb-3 border-bottom pb-2">📋 Kurumsal</h4>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Hakkımızda</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Tarihçemiz</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Misyonumuz</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Vizyonumuz</a></li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Yönetim</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Yönetim Kurulu</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Üst Düzey Yönetim</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Hizmetler Bölümü -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h4 class="text-success fw-bold mb-3 border-bottom pb-2">⚙️ Hizmetler</h4>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Yazılım Geliştirme</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Web Uygulamaları</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Mobil Uygulamalar</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Masaüstü Yazılımlar</a></li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Danışmanlık</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Teknoloji Danışmanlığı</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Dijital Dönüşüm</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Projeler Bölümü -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h4 class="text-warning fw-bold mb-3 border-bottom pb-2">💼 Projeler</h4>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Web Projeleri</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">E-Ticaret Siteleri</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Kurumsal Web Siteleri</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Portal Projeleri</a></li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Mobil Projeler</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">iOS Uygulamaları</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Android Uygulamaları</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- İletişim Bölümü -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h4 class="text-info fw-bold mb-3 border-bottom pb-2">📞 İletişim</h4>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">İletişim Bilgileri</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Adresimiz</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Telefon</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">E-posta</a></li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Sosyal Medya</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">LinkedIn</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Twitter</a></li>
                            <li class="mb-1"><a href="#" class="text-decoration-none text-muted">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}

// Sayfa yüklendiğinde MegaMenu'yu başlat
document.addEventListener('DOMContentLoaded', function () {
    new MegaMenu();
});