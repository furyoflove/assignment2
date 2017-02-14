/*
Author: Francis Keith Mangornong
CS 1520 Web Programming Languages
Spring 2017

Assignment 2 -- scripting
*/

function checkInput() {

  var message = documents.forms["submissions"]["message"].value;

  var text = "";

  if(message == "") {
    text.concat("Please include a message. \n");
  }
  else {
    text.concat("Thanks for submitting a message, I'll get back to you soon! ");
  }
  document.getElementById('status').innerHTML = text;

}
