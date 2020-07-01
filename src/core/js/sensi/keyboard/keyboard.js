// keyboard.js

Object.defineProperty(window, "shortcutKey", {
  value: function shortcut(key, callback) {
    document.addEventListener("keyup", event => {
      if (event.keyCode === key) {
        callback(event);
      }
    });
  }
});

// export let keyboard = {
//     id: "keyboard",
//     path: "./src/sys/sensi/keyboard/keyboard.js",
//     // getKeyPressed: getKeyPressed()
// };

class Keyboard {
  constructor() {
    this.id = "keyboard";
  }
}

// class Id extends Keyboard {
//   constructor() {
//     this.path = "./src/sys/sensi/keyboard/keyboard.js";
//   }
//   // let path = "./src/sys/sensi/keyboard/keyboard.js"
// }

export let keyboard = new Keyboard();
