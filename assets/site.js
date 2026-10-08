(() => {
const root = document.querySelector('.personaverse');
if (!root) return;
const year = root.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
const english = document.documentElement.lang === 'en';
const btn = root.querySelector('.menu-toggle');
const nav = root.querySelector('#nav');
btn?.addEventListener('click', () => { const open = btn.getAttribute('aria-expanded') !== 'true'; btn.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
const config = window.PERSONAVERSE_CONFIG || {};
for (const a of root.querySelectorAll('[data-social]')) {
  const url = config[a.dataset.social];
  if (typeof url === 'string' && /^https:\/\//i.test(url)) { a.href = url; a.querySelector('.pending')?.remove(); }
  else { a.removeAttribute('target'); a.removeAttribute('rel'); a.setAttribute('aria-disabled', 'true'); a.title = english ? 'Link coming soon' : 'リンク準備中'; }
}

// Explicit language on internal links also works when storage is blocked.
for (const a of root.querySelectorAll('a[href]')) {
  if (a.closest('.language-switch')) continue;
  const href = a.getAttribute('href');
  if (!/^(?:index|about|guidelines|copyright)\.html(?:[?#]|$)/.test(href)) continue;
  const target = new URL(href, window.location.href);
  target.searchParams.set('lang', english ? 'en' : 'ja');
  a.setAttribute('href', target.href);
}
})();
