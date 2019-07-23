// TODO: Autocomplete the input with AJAX calls.


////////////////////////////////////////////////////////////////////////////////////
// var input = new XMLHttpRequest();
// var ids = document.getElementById("search");

// xhr.onload = function (){
//   if (this.status === 200){
//     ids = ids.responseText;
//   }
// }

// xhr.open("GET", "https://recode-dictionary.herokuapp.com/autocomplete/", true);
// xhr.send();

var userInput = document.querySelector("#search");
userInput.addEventListener("keyup", function() {
  const url =
    `https://recode-dictionary.herokuapp.com/autocomplete/` + userInput.value;

  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // console.log(data.words);

      for(const i in data.words)
        var x = document.createElement("LI"); 
      var textnode = document.createTextNode("");                       
      textnode.appendChild(x).innerHTML = i;                              
    });
});
