# DİDA — didatasarim.com

Dut Interdisciplinary Design Agency web sitesi. Tek dosyalık statik site (Three.js 3B dut, TR/AR/EN).

## Yapı
- `index.html` — sitenin tamamı
- `videos/aflam-1.mp4 … aflam-4.mp4` — Aflam bölümünde dönen filmler (dosya başına 25 MB altı tutun, Cloudflare Pages sınırı)

## Video ekleme
`index.html` içindeki `aflamVideos` listesine yeni dosya yolunu ekleyin; oynatıcı, noktalar ve sayaç otomatik güncellenir.

## Yayınlama
Site Cloudflare'de **Workers Builds** ile yayınlanır: proje (`dida-website`) bu repoya bağlıdır, `main` dalına gelen her push otomatik derlenip canlıya alınır. Build komutu yoktur; `index.html` ve `videos/` olduğu gibi statik asset olarak sunulur.

Panelde "disconnected from your Git account" uyarısı görürseniz Settings → Builds → Manage ile GitHub yetkisini yenileyin; sonrasında bir push build'i yeniden tetikler.

Deploy sonrası kontrol: `didatasarim.com/videos/aflam-1.mp4` açılıyor mu, ana sayfada kuruluş tarihi ve Ürünlerimiz görünüyor mu?
