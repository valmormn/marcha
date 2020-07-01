// signupFormSubmit


export let signupFormSubmit = async (inputform, processor) => {
  const url = processor;
  await fetch(url, {
    method: "POST",
    body: new FormData(document.getElementById(inputform)),
    // -- or --
    // body : JSON.stringify({
    // user : document.getElementById('user').value,
    // ...
    // })
  }).then(
    response => response.text() // .json(), etc.
    // same as function(response) {return response.text();}
  ).then(
    // html => console.log(html)
    (html) => {
      console.log("Response: ");
      console.log(html);
      // return html;
    }
  ).then(
    (e) => {
      // console.log(e);
      // console.log('wtf');
    }
  ).catch(function (error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    // 
  }).finally(()=>{
    // 
  });

};
