const key = document.getElementById("key");
const code = document.getElementById("code");
// retrieve the elemnts from dom
// when the user does an action for keydown or keyup the evnt happens
// set the innerHTML to the event object value

function keyPressed(){

};


function keydownAction(event) {
  //1.) When a user pressses a keydown i want it to have an event status of KEYDOWN Event
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML= "KEYDOWN Event";
  
};

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
};

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);



