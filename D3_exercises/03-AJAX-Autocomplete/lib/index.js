// TODO: Autocomplete the input with AJAX calls.
// var input = new XMLHttpRequest();
// var ids = document.getElementById("search");

// xhr.onload = function (){
//   if (this.status === 200){
//     ids = ids.responseText;
//   }
// }

// xhr.open("GET", "https://recode-dictionary.herokuapp.com/autocomplete/", true);
// xhr.send();
var autoComplete = document.getElementById("results");
var userInput = document.querySelector("#search");
userInput.addEventListener("keyup", function() {
  const url ="https://recode-dictionary.herokuapp.com/autocomplete/" + userInput.value;

  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
                            
      var words = data.words;
      var stri = "";  
      words.forEach((word)=>{
        var x = document.createElement("LI");
        var texts = document.createTextNode(`${word}`);
        x.appendChild(texts);
        autoComplete.appendChild(x);
      });   
      autoComplete.insertAdjacentHTML("beforeend", stri);     
      // console.log(data.words);

      // for( i in data.words)
      //   // var htmlString = "";
      // var x = document.createElement("LI"); 
      // var textnode = document.createTextNode(i);
      // x.appendChild(textnode);                        
    });
    
});
