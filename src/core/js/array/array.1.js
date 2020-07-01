// Array.js
// https://stackoverflow.com/questions/948358/adding-custom-functions-into-array-prototype

// export var foo = ()=>{ Array.prototype.foo = 33; };

// export var range = (start, end, step = 1)=>{
//   const length = Math.floor(Math.abs((end - start) / step)) + 1;
//   return Array.from(Array(length), (x, index) => start + index * step);
// };

// export var rangeb = (size, step)=>{
//   return Array(size).fill(0).map((x,i)=>x+i*step);
// };

export function redPill() {
  document.addEventListener('vLoaded', function () {
    Object.defineProperty(window, 'range', {
        value: (start, end, step = 1)=>{
          const length = Math.floor(Math.abs((end - start) / step)) + 1;
          return Array.from(Array(length), (x, index) => start + index * step);
        },
        writable: false,
        enumerable: true
      } 
    );
    Object.defineProperty(window, 'seq', {
      value: (start, step, n)=>{
        return Array(n).fill(0).map((x,i)=>start+i*step);
      },
      writable: false,
      enumerable: true
    });
    Object.defineProperty(window, 'seqn', {
      value: (start, step, n)=>{
        return Array(n).fill(0).map((x,i)=>start-i*step);
      },
      writable: false,
      enumerable: true
    });
    Object.defineProperty(window, 'seqr', {
      // return 
      value: (n)=>{
        return Array(n).fill(Math.random());
      },
      writable: false,
      enumerable: true
    });
    Object.defineProperty(Array.prototype, 'soma', {
      value: function() {
          return this.reduce((a,c)=>{return a + c})
        }
    });
    Object.defineProperty(Array.prototype, 'media', {
      value: function() {
          return this.reduce((a,c)=>{return a + c})/this.length;
        }
    });
  });
}



export let array = {
  id: 'array',
  src: './src/sys/array/array.js',
  // afterLoad: afterLoad()
  redPill: redPill()
};
