// Animasi Fade-in saat tab diganti (paket-list-grid)
document.querySelectorAll('.tab-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(function(tc){ tc.style.display='none'; });
    const target = document.getElementById(btn.getAttribute('data-tab'));
    target.style.display='grid';
    // animasi ulang card
    target.querySelectorAll('.paket-card').forEach(function(card, i){
      card.style.opacity = 0;
      card.style.animation = 'none';
      setTimeout(function(){
        card.style.opacity = 1;
        card.style.animation = `fadeInUp .8s cubic-bezier(.4,0,.2,1) forwards`;
        card.style.animationDelay = (i * 0.07) + 's';
      }, 50);
    });
  });
});

// Drawer logic tetap
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');
menuBtn.onclick = function() {
  drawer.classList.add('open');
  drawerOverlay.style.display = 'block';
}
drawerClose.onclick = function() {
  drawer.classList.remove('open');
  drawerOverlay.style.display = 'none';
}
drawerOverlay.onclick = function() {
  drawer.classList.remove('open');
  drawerOverlay.style.display = 'none';
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.style.display = 'none';
}
window.closeDrawer = closeDrawer;

// WA Order logic tetap
const nomorWA = "6281234567890";
document.querySelectorAll('.order-btn-gradient').forEach(function(btn){
  btn.onclick = function(){
    const card = btn.closest('.paket-card');
    const title = card.querySelector('.paket-title').innerText;
    const specItems = card.querySelectorAll('.paket-spec-item');
    let specs = '';
    specItems.forEach(function(el){
      specs += el.innerText + "%0A";
    });
    const harga = card.querySelector('.paket-price-highlight').innerText;
    const pesan = `Halo admin BranynHost Store,%0ASaya ingin order paket:%0A` +
      `Paket: ${title}%0A` +
      `Spesifikasi:%0A${specs}` +
      `Harga: IDR ${harga}%0AMohon info detail pembayaran dan aktivasi.`;
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
  }
});