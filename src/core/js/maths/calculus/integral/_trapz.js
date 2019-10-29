// Trapezio
export function int_trap(a, b, dx, f) {

	// calculate the number of trapezoids
	n = (b - a) / dx;

	// define the variable for area
	Area = 0;

	//loop to calculate the area of each trapezoid and sum.
	for (i = 1; i <= n; i++) {
		//the x locations of the left and right side of each trapezpoid
		x0 = a + (i-1)*dx;
		x1 = a + i*dx;

		// the area of each trapezoid
		Ai = dx * (f(x0) + f(x1))/ 2.;

		// cumulatively sum the areas
		Area = Area + Ai

	}
	return Area;
}

// //define function to be integrated
// function f(x){
// 	return -0.25*Math.pow(x,2) + x + 4;
// }

// // define variables
// a = 1;		// left boundary of area
// b = 5;		// right boundary of area
// dx = 0.001;		// width of the trapezoids

// // print out output
// // alert("Area = "+ numerically_integrate(a, b, dx, f));

// var area = numerically_integrate(a, b, dx, f);
// area

// // (17.667-area)/17.667

export function int_trapB(a, b, f) {

	// calculate the number of trapezoids
	n = (b - a) / dx;

	// define the variable for area
	Area = 0;

	//loop to calculate the area of each trapezoid and sum.
	for (i = 1; i <= n; i++) {
		//the x locations of the left and right side of each trapezpoid
		x0 = a + (i-1)*dx;
		x1 = a + i*dx;

		// the area of each trapezoid
		Ai = dx * (f(x0) + f(x1))/ 2.;

		// cumulatively sum the areas
		Area = Area + Ai

	}
	return Area;
}

export function int_trapC(a, b) {

	// calculate the number of trapezoids
	let n = a.length;
	

	// define the variable for area
	let Area = 0;

	// loop to calculate the area of each trapezoid and sum.
	for (let i = 0; i <= n-2; i++) {
		// the x locations of the left and right side of each trapezpoid
		let x0 = a[i];
		let x1 = a[i+1];

        let f_x0 = b[i];
        let f_x1 = b[i+1];

		// the area of each trapezoid
		let Ai = (x1 - x0) * (f_x0 + f_x1)/ 2.;

		// cumulatively sum the areas
		Area += Ai

	}
	return Area;
}

export function trap(a, b) {

	// calculate the number of trapezoids
	let n = a.length;
	

	// define the variable for area
	let Area = 0;

	// loop to calculate the area of each trapezoid and sum.
	for (let i = 0; i <= n-2; i++) {
		// the x locations of the left and right side of each trapezpoid
		let x0 = a[i];
		let x1 = a[i+1];

        let f_x0 = b[i];
        let f_x1 = b[i+1];

		// the area of each trapezoid
		let Ai = (x1 - x0) * (f_x0 + f_x1)/ 2.;

		// cumulatively sum the areas
		Area += Ai

	}
	return Area;
}

