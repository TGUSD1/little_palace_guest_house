function makeReservation() {
  window.location.href = 'mailto:luetiasirleaf21@yahoo.com?subject=Reservation Inquiry';
}

// Existing Parallax Effect for Hero Image
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY / 2}px`;
});
