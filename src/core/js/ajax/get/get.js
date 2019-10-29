// get.js

export let get = async (path, str, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback();
    }
  };

  xhr.open("GET", path + "?q=" + str, true);
  xhr.send();

  return xhr;
};

Object.defineProperty(window, "get", {
  value: get,
  writable: false,
  enumerable: true
});

// export let ajaxGet = {
//   id: "get",
//   get: get
// };
