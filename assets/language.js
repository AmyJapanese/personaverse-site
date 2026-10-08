// Run before rendering to honor a saved language without showing the wrong page.
(() => {
  const url = new URL(window.location.href);
  const inEnglish = /\/en\/(?:[^/]*\.html)?$/.test(url.pathname);
  const current = inEnglish ? 'en' : 'ja';
  const explicit = url.searchParams.get('lang');
  let preferred = current;
  try {
    const saved = localStorage.getItem('personaverse-language');
    if (saved === 'ja' || saved === 'en') preferred = saved;
  } catch { /* Storage may be unavailable for local files or private browsing. */ }
  if (explicit === 'ja' || explicit === 'en') {
    preferred = explicit;
    try { localStorage.setItem('personaverse-language', preferred); } catch { /* Links still work. */ }
  }
  if (preferred === current) return;
  const file = url.pathname.split('/').pop() || 'index.html';
  if (!['index.html', 'about.html', 'guidelines.html', 'copyright.html'].includes(file)) return;
  const target = new URL(inEnglish ? '../' + file : 'en/' + file, url);
  target.search = url.search;
  target.hash = url.hash;
  window.location.replace(target.href);
})();
