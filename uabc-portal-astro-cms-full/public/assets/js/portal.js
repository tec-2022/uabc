// JS separado; usa window.CMS_CONTENT y respeta tu diseño
document.addEventListener('DOMContentLoaded', ()=>{
  if (window.feather) window.feather.replace();
  if (window.AOS) window.AOS.init({ duration: 600, once: true });
});
