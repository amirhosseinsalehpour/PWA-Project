self.addEventListener("install", function (event) {
  console.log("installing service worker....", event);
});

self.addEventListener("activate", function (event) {
  console.log("activating service worker....", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});
