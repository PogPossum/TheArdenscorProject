// nav.js - toggles right-side nav panel and manages accessibility
(function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if(!toggle || !nav) return;

  function setExpanded(state){
    toggle.setAttribute('aria-expanded', String(state));
    if(state){
      nav.classList.add('open');
      nav.hidden = false;
    } else {
      nav.classList.remove('open');
      // keep nav present but collapsed; setting hidden isn't strictly necessary
      nav.hidden = false;
    }
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      setExpanded(false);
      toggle.focus();
    }
  });

  // Close when clicking outside the nav on mobile
  document.addEventListener('click', (e) => {
    if(!nav.classList.contains('open')) return;
    const target = e.target;
    if(target === nav || nav.contains(target) || target === toggle) return;
    setExpanded(false);
  });
})();
