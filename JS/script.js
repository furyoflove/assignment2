/*
  Author: Francis Keith Mangornong
  CS 1520 Web Programming Languages
  Spring 2017

  Assignment 2 -- scripting
*/


/*
  Validate form by checking if fields have been filled out
  ...Not too crazy on the checking...As long as the field is filled out it's ok
*/
function validateForm() {

  var name      =    document.forms["myform"]["name"].value,
      email     =    document.forms["myform"]["email"].value,
      message   =    document.forms["myform"]["message"].value;

  //  Used to for error checking
  var array   =   [name, email, message],
      fields  =   ["name", "email", "message"];

  //  Used for error printing
  var err_msg     =   "",
      err_disp    =   "",
      err_count   =   0;

  //  Check to make sure all fields are filled out
  for (var i = 0; i < array.length; i++) {
    if(array[i] == "" || array[i] == null) {
      err_msg = err_msg + "Your " + fields[i] + " is missing. \n"; // displays as a pop-up alert 
      err_disp = err_disp + "Your " + fields[i] + " is missing. <br>"; // displays on screen
      err_disp = err_disp.fontcolor("red"); // display the error message in red
      err_count++;
    }
  }

  //  Display error messages if any
  if(err_count > 0) {
      alert(err_msg);
      document.getElementById("formStatus").innerHTML = err_disp;
  }
  else {
    alert("Thanks " + name + " for your message! \n I'll respond shortly (but not really) at your email " + email);
    document.getElementById("formStatus").innerHTML = "Thanks for submitting a message! ";
    document.getElementById("SectionThree").style.display = 'none'; // hide form;
  }

  return false;

}
