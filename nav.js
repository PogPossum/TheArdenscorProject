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
      nav.hidden = false;
    }
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      setExpanded(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if(!nav.classList.contains('open')) return;
    const target = e.target;
    if(target === nav || nav.contains(target) || target === toggle) return;
    setExpanded(false);
  });
})();
