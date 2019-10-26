// pdf
// js

// import jsPDF from 'jspdf';
// import * as jsPDF from 'jspdf'


var doc = new jsPDF({
  orientation: 'landscape',
  unit: 'cm',
  format: 'letter',
  // format: [4, 2]

});

doc.text('Hello world!', 10, 10);
doc.save('a4.pdf');
doc.setFontSize(40);
// doc.text(35, 25, "Artigo para o iMasters");
// doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
doc.text('Hello world!', 10, 10)
// doc.save('a4.pdf')


// export let js = {
//   id: "js"
// }


export let pdf = { id: "pdf"}
