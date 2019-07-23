// TODO: Autocomplete the input with AJAX calls.
// function clear() {
//   document.getElementsByTagName("li").innerHTML = "";
// }

// document.getElementById("results").onclick = function() { 
//   clear(); 
// } 
// var ourRequest = new XMLHttpRequest();
// ourRequest.open("GET", "https://recode-dictionary.herokuapp.com/autocomplete/:stem");
// ourRequest.onload = function(){
//   var ourData = JSON.parse(ourRequest.responseText);
//   renderHTML(ourData);
// };
// ourRequest.send();

// function renderHTML(data){

// }
var ourRequest = new XMLHttpRequest();
var ids = document.getElementById("results");

xhr.onload = function (){
  if (this.status === 200){
    ids = ids.responseText;
  }
}

xhr.open("GET", "https://recode-dictionary.herokuapp.com/autocomplete/", true);
xhr.send();
