const CACHE = 'garage-bestellijst-enkel-20261111';
const ASSETS = ["./", "index.html", "style.css", "app.js", "products.js", "assets/icon.svg", "assets/leuning.svg", "assets/plug.svg", "assets/product-10185457.jpg", "assets/product-10247433.jpg", "assets/product-10399251.jpg", "assets/product-10434139.jpg", "assets/product-10434632.jpg", "assets/product-10660052.jpg", "assets/product-10676392.jpg", "assets/product-10700474.jpg", "assets/product-3291972.jpg", "assets/product-3830369.jpg", "assets/product-4049508.jpg", "assets/product-4049510.jpg", "assets/product-4118477.jpg", "assets/product-4118508.jpg", "assets/product-5185890.jpg", "assets/product-5185918.jpg", "assets/product-5217549.jpg", "assets/product-6541415.jpg", "assets/product-6800343.jpg", "assets/product-6800344.jpg", "assets/product-7473069.jpg", "assets/product-7473074.jpg", "assets/product-7753725.jpg", "assets/product-7849017.jpg", "assets/product-8378881.jpg", "assets/product-8502907.jpg", "assets/product-ts-66383.jpg", "assets/s416.svg"];
ASSETS.push(...["assets/product-10000081.jpg", "assets/product-10185455.jpg", "assets/product-10222931.jpg", "assets/product-10434655.jpg", "assets/product-10664272.jpg", "assets/product-12203083.jpg", "assets/product-5185918.jpg", "assets/product-6800343.jpg", "assets/product-7473069.jpg", "assets/product-7473072.jpg", "assets/product-7473073.jpg", "assets/product-7473074.jpg"].filter(asset => !ASSETS.includes(asset)));
ASSETS.push(...["assets/product-12575690.jpg", "assets/product-12085860.jpg", "assets/product-12183618.jpg"].filter(asset => !ASSETS.includes(asset)));
ASSETS.push(...["assets/product-7023160.jpg", "assets/product-7023183.jpg", "assets/product-7023185.jpg"].filter(asset => !ASSETS.includes(asset)));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('garage-bestellijst-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.registration.scope)) return;
  event.respondWith(caches.open(CACHE).then(cache => cache.match(event.request).then(cached => cached || fetch(event.request))));
});
