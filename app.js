'use strict';
const data = window.SHOPPING;
const labels = { fase1: 'Fase 1', tools: 'Gereedschap', fase2: 'Fase 2' };
const storageKey = 'garage-bestellijst-v1';
let checked;
try { checked = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch { checked = {}; }
let phase = 'fase1';
const euro = n => n.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function aisle(item) {
  if (item.store === 'Toolstation Zoetermeer') return 103;
  const match = item.location.match(/gang (\d+)/);
  return match ? Number(match[1]) : item.v === 'elders' ? 102 : item.location.startsWith('Op bestelling') ? 100 : 101;
}
function render() {
  const selected = data.items.filter(i => phase === 'all' || i.phase === phase);
  const done = selected.filter(i => checked[i.id]).length;
  const budget = selected.filter(i => !i.opt).reduce((sum, i) => sum + i.q * i.pr, 0);
  document.querySelector('#progress').textContent = `${done} van ${selected.length} afgevinkt`;
  document.querySelector('#budget').textContent = `Indicatie ${euro(budget)}`;
  document.querySelector('#bar').max = selected.length || 1;
  document.querySelector('#bar').value = done;
  const query = document.querySelector('#search').value.trim().toLocaleLowerCase('nl');
  const remaining = document.querySelector('#remaining').checked;
  const filtered = selected.filter(i => (!remaining || !checked[i.id]) && `${i.a} ${i.s} ${i.art || ''} ${i.location} ${i.store || ''}`.toLocaleLowerCase('nl').includes(query)).sort((a, b) => aisle(a) - aisle(b));
  const groups = new Map();
  for (const i of filtered) {
    const key = aisle(i);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(i);
  }
  let html = '';
  for (const [key, items] of groups) {
    const heading = key < 100 ? `Gang ${key}` : key === 100 ? 'Bestellen in de vestiging' : key === 102 ? 'Elders kopen' : key === 103 ? 'Toolstation Zoetermeer' : 'Gang nog controleren';
    html += `<section><h2 class="aisle"><span class="number">${key < 100 ? key : '·'}</span>${heading}<span class="count">${items.length} ${items.length === 1 ? 'artikel' : 'artikelen'}</span></h2><div class="cards">`;
    for (const i of items) {
      html += `<article class="product${checked[i.id] ? ' checked' : ''}" data-id="${esc(i.id)}"><div class="product-top"><img class="photo" src="${esc(i.image)}" alt="${esc(i.a)}" width="86" height="92"><div><h3>${esc(i.a)}</h3><p class="spec">${esc(i.s)}</p></div><label class="check"><span class="sr-only">${esc(i.a)} afvinken</span><input type="checkbox" data-id="${esc(i.id)}" ${checked[i.id] ? 'checked' : ''}></label></div><div class="product-meta"><span class="quantity">${i.q} ${esc(i.u)}</span><span class="price"><strong>${euro(i.q * i.pr)}</strong> · ${euro(i.pr)}/${esc(i.u)}</span></div><p class="where${key >= 100 && key !== 103 ? ' special' : ''}">${esc(i.location)}${i.opt ? ' · optioneel, buiten totaal' : ''}</p><div class="product-bottom"><span class="phase">${labels[i.phase]}</span>${i.art ? `<a href="${esc(i.url)}" target="_blank" rel="noopener">Art. ${esc(i.art)} ↗</a>` : i.url ? `<a href="${esc(i.url)}" target="_blank" rel="noopener">Voorbeeld bekijken ↗</a>` : '<span>Uitvoering nog kiezen</span>'}</div>${i.imageNote ? `<p class="image-note">${esc(i.imageNote)}</p>` : ''}${i.availability ? `<p class="stock${i.availabilityStatus === 'unresolved' ? ' uncertain' : ''}">${esc(i.availability)}</p>` : ''}${i.alternatives ? `<details class="alternatives"><summary>Alternatieven en voorraad</summary><ul>${i.alternatives.map(a => `<li><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.title)} ↗</a><p>${esc(a.note)}</p></li>`).join('')}</ul></details>` : ''}</article>`;
    }
    html += '</div></section>';
  }
  document.querySelector('#list').innerHTML = html;
  document.querySelector('#empty').hidden = filtered.length > 0;
}
document.querySelectorAll('[data-phase]').forEach(button => button.addEventListener('click', () => {
  phase = button.dataset.phase;
  document.querySelectorAll('[data-phase]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  render();
}));
document.querySelector('#search').addEventListener('input', render);
document.querySelector('#remaining').addEventListener('change', render);
document.querySelector('#list').addEventListener('change', e => {
  if (!e.target.matches('input[type=checkbox]')) return;
  const input = e.target;
  checked[input.dataset.id] = input.checked;
  try { localStorage.setItem(storageKey, JSON.stringify(checked)); } catch {
    document.querySelector('#offline').textContent = 'Deze browser kan je vinkjes niet bewaren.';
  }
  if (document.querySelector('#remaining').checked) render();
  else {
    input.closest('.product').classList.toggle('checked', input.checked);
    const selected = data.items.filter(i => phase === 'all' || i.phase === phase);
    const done = selected.filter(i => checked[i.id]).length;
    document.querySelector('#progress').textContent = `${done} van ${selected.length} afgevinkt`;
    document.querySelector('#bar').value = done;
  }
});
render();
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./sw.js').then(() => navigator.serviceWorker.ready).then(() => {
    const status = document.querySelector('#offline');
    status.textContent = 'Offline beschikbaar · vinkjes blijven op dit toestel';
    status.classList.add('ready');
  }).catch(() => { document.querySelector('#offline').textContent = 'Open de lijst met internet; offline opslaan is niet gelukt.'; });
} else document.querySelector('#offline').textContent = 'Open via het webadres om de lijst offline te bewaren.';
