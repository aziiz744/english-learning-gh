// Service Worker لتطبيق Owlio — تخزين مؤقّت ذكي للأداء و offline
const CACHE = 'owlio-v1';
const CORE = ['/', '/index.html', '/logo.png', '/manifest.json'];

// التثبيت: خزّن الملفات الأساسية
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

// التفعيل: احذف الكاش القديم
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// الجلب: شبكة أولاً، وإن فشلت استخدم الكاش (للعمل offline)
self.addEventListener('fetch', (e) => {
  const { request } = e;
  // تجاهل طلبات غير GET وطلبات Supabase/API (تحتاج بيانات حيّة)
  if (request.method !== 'GET') return;
  if (request.url.includes('supabase') || request.url.includes('/api/')) return;

  e.respondWith(
    fetch(request)
      .then((res) => {
        // خزّن نسخة من الردّ الناجح
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(request, clone));
        }
        return res;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match('/')))
  );
});
