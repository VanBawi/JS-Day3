const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  var x = document.getElementsByClassName("btn");
  // TODO: Bind the `click` event to the button
  // TODO: On click, display `Thank you!` in a JavaScript alert!
  
  x.addEventListener("click", displayAlertOnButtonClick);
  alert("Thank you");

};

displayAlertOnButtonClick(); // Do not remove!
