// Gaussian function

// https://en.wikipedia.org/wiki/Gaussian_function?oldformat=true

// var tau = 1
// var mu = 1
// var x

export var gf = (tau, mu, x)=>{
  var a = 1/(tau*Math.sqrt(2*Math.PI))
//   console.log('aa => ' + aa)

  var b = Math.pow(
    Math.exp(
      -Math.pow( (x-mu)/tau, 2 )/2
    ), 2
  );
//   console.log('b => ' + b)

  return a*b
}

// gf(Math.sqrt(5.0), 0, 0)
