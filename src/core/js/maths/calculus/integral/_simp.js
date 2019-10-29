// Simpson

export function int_Simp(a, b) {

	// calculate the number of trapezoids
    var n = a.length;
    console.log('ta foda');
    
    if (n%2===0) {
        console.log('# par de intervalos')
    } else {
        console.log('# ímpar de intervalos');
        
    }

	// // define the variable for area
	// let Area = 0;

	// //loop to calculate the area of each trapezoid and sum.
	// for (let i = 0; i <= n-2; i++) {
	// 	//the x locations of the left and right side of each trapezpoid
	// 	var x0 = a[i];
	// 	var x1 = a[i]+1;

    //     var f_x0 = b[i];
    //     var f_x1 = b[i+1];

	// 	// the area of each trapezoid
	// 	var Ai = (x1-x0) * (f_x0 + f_x1)/ 2.;

	// 	// cumulatively sum the areas
	// 	Area = Area + Ai

	// }
	// return true;
}


// js, py, c++
// php
// c#
