// Service Worker

console.log("service worker is inthahouse!");

// After install, fetch event is triggered for every page request
self.addEventListener("fetch", function(event) {
  // console.log("Requesat -->", event.request.url);

  //To tell browser to evaluate the result of event
  event.respondWith(
    caches
      .match(event.request) //To match current request with cached request it
      .then(function(response) {
        //If response found return it, else fetch again.
        return response || fetch(event.request);
      })
      .catch(function(error) {
        console.error("Error: ", error);
      })
  );
});

// https://gist.github.com/gokulkrishh/1b47bad975eed2f50f66
