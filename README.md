# DİDA — didatasarim.com

Dut Interdisciplinary Design Agency web sitesi. Tek dosyalık statik site (Three.js 3B dut, TR/AR/EN).

## Yapı
- `index.html` — sitenin tamamı
- `videos/aflam-1.mp4 … aflam-4.mp4` — Aflam bölümünde dönen filmler (dosya başına 25 MB altı tutun, Cloudflare Pages sınırı)

## Video ekleme
`index.html` içindeki `aflamVideos` listesine yeni dosya yolunu ekleyin; oynatıcı, noktalar ve sayaç otomatik güncellenir.

## Yayınlama
İki yol var; ikisi de aynı Cloudflare Pages projesine çıkar.

1. **Cloudflare Git bağlantısı** — Cloudflare Pages → bu repoyu bağlayın, build komutu yok, output: `/`.
   Panelde "disconnected from your Git account" uyarısı görürseniz Settings → Builds → Manage ile GitHub yetkisini yenileyin.
2. **GitHub Actions** (`.github/workflows/deploy.yml`) — Git bağlantısından bağımsız çalışır; her `main` push'unda `index.html` + `videos/` klasörünü wrangler ile doğrudan Pages'e yükler.
   Çalışması için repo Settings → Secrets and variables → Actions altında iki secret gerekir:
   - `CLOUDFLARE_API_TOKEN` — Cloudflare → My Profile → API Tokens → "Edit Cloudflare Workers" şablonu
   - `CLOUDFLARE_ACCOUNT_ID` — Cloudflare panelinin sağ sütunundaki Account ID
   Pages proje adı `dida-website` değilse Variables sekmesine `CLOUDFLARE_PAGES_PROJECT` ekleyin.
   Secret'lar yoksa iş atlanır, CI kırmızıya dönmez. Actions sekmesinden "Run workflow" ile elle de tetiklenebilir.

Deploy sonrası kontrol: `didatasarim.com/videos/aflam-1.mp4` açılıyor mu, ana sayfada kuruluş tarihi ve Ürünlerimiz görünüyor mu?
