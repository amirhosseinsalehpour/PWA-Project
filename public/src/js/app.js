// check => in browser service worker Is it or isn't it?
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(console.log("Success"));
}
