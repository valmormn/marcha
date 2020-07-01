// import { gf } from "./functions/_gaussian";
// import { int_trap, int_trapC } from "./calculus/integral/integral";

import { int_trapC } from "./calculus/integral/_trapz.js";
// import { int_Simp } from "./calculus/integral/_simp";
import { integral } from "./calculus/integral/integral.js";

export let maths = {
  id: 'maths',
  path: './src/sys/maths/maths.js',
  // gf,
  // int_trap,
  int_trapC: int_trapC,
  // int_Simp: int_Simp
  
};

// foo();

Object.defineProperty(window, 'maths', {
  value: maths
});
