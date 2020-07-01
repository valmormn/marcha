// Array.js
// https://stackoverflow.com/questions/948358/adding-custom-functions-into-array-prototype

export let array = {
  id: "array",
  src: "./src/sys/array/array.js",
  afterLoad: afterLoad(),
}

function afterLoad() {
  document.addEventListener("app-loaded", function() {
    // odp(window, 'range', range);
    // Object.defineProperty(window, 'range', {
    //   value: (start, end, step = 1) => {
    //     const length = Math.floor(Math.abs((end - start) / step)) + 1;
    //     return Array.from(Array(length), (x, index) => start + index * step);
    //   },
    //   writable: false,
    //   enumerable: true
    // });
  })
}

Object.defineProperty(window, "range", {
  value: (start, end, step = 1) => {
    const length = Math.floor(Math.abs((end - start) / step)) + 1
    return Array.from(Array(length), (x, index) => start + index * step)
  },
  writable: false,
  enumerable: true,
})

Object.defineProperty(window, "seq", {
  value: (start, step, n) => {
    return Array(n)
      .fill(0)
      .map((x, i) => start + i * step)
  },
  writable: false,
  enumerable: true,
})

Object.defineProperty(window, "seqn", {
  value: (start, step, n) => {
    return Array(n)
      .fill(0)
      .map((x, i) => start - i * step)
  },
  writable: false,
  enumerable: true,
})

Object.defineProperty(window, "seqr", {
  // return
  value: n => {
    return Array(n).fill(Math.random())
  },
  writable: false,
  enumerable: true,
})

Object.defineProperty(Array.prototype, "sum", {
  value: function() {
    return this.reduce((a, c) => {
      return a + c
    })
  },
})

// Weighted average
Object.defineProperty(Array.prototype, "w-average", {
  value: function() {
    return (
      this.reduce((a, c) => {
        return a + c
      }) / this.length
    )
  },
})

// Stats
// Object.defineProperty(Array.prototype, 'stats', {
//   value: function () {
//     return this.reduce((a, c) => {
//       return a + c
//     }) / this.length;
//   }
// });

// export var foo = ()=>{ Array.prototype.foo = 33; };

// export var range = (start, end, step = 1)=>{
//   const length = Math.floor(Math.abs((end - start) / step)) + 1;
//   return Array.from(Array(length), (x, index) => start + index * step);
// };

// export var rangeb = (size, step)=>{
//   return Array(size).fill(0).map((x,i)=>x+i*step);
// };

// (function () {
//   if (window.v===true) {
//     // exportart();
//     console.log('range aeee a');
//   } else {
//     document.addEventListener('vLoaded', function () {
//       console.log('range aeee b');
//       // exportart();
//       // odp(window, 'range', range);
//     });
//   }

// })()

// (()=>{
//   console.log('ta foda');
//   // window.odp(window, 'range', range);
// })()

// var range = (start, end, step = 1) => {
//   const length = Math.floor(Math.abs((end - start) / step)) + 1;
//   return Array.from(Array(length), (x, index) => start + index * step);
// }
