var range = (start, end, step = 1)=>{
  const length = Math.floor(Math.abs((end - start) / step)) + 1;
  return Array.from(Array(length), (x, index) => start + index * step);
};



function F(start, end, step = 1) {
  this.id = 'functional function';
  this.range = (()=>{
    const length = Math.floor(Math.abs((end - start) / step)) + 1;
    return Array.from(Array(length), (x, index) => start + index * step);
  })();
  this.m = (()=>{
    // var expression = ;
    var m = 3;
    var b = 4;
    // console.log(this.range);
    return this.range;
    // return this.range.map((value, index)=>{m*value + b});
  })();
}
