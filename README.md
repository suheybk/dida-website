# DİDA — didatasarim.com

Dut Interdisciplinary Design Agency web sitesi. Tek dosyalık statik site (Three.js 3B dut, TR/AR/EN).

## Yapı
- `index.html` — sitenin tamamı
- `videos/aflam-1.mp4 … aflam-4.mp4` — Aflam bölümünde dönen filmler (dosya başına 25 MB altı tutun, Cloudflare Pages sınırı)

## Video ekleme
`index.html` içindeki `aflamVideos` listesine yeni dosya yolunu ekleyin; oynatıcı, noktalar ve sayaç otomatik güncellenir.

## Yayınlama
Cloudflare Pages → bu repoyu bağlayın, build komutu yok, output: `/`
