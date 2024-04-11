(function main() {
  new Worker(new URL('./worker', import.meta.url));
})()
