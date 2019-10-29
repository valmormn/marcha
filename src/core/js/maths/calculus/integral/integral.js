import {
    trap
} from "./_trapz.js";
// import { int_Simp } from "./calculus/integral/_simp";

export let integral = {
    id: 'integral',
    path: './src/sys/maths/integral/integral.js',
    // gf,
    // int_trap,
    trap: trap,
    // int_Simp: int_Simp

};

// foo();

// Object.defineProperty(window.math, 'int', {
//   value: integral
// });
