// post.js

// function post(path, params, method='post') {
async function post(path, args, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback();
    }
  };

  xhr.open("POST", path, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(args);

  return xhr;
}

Object.defineProperty(window, "post", {
  value: post,
  writable: false,
  enumerable: true
});

export let postx = { id: "post" };
