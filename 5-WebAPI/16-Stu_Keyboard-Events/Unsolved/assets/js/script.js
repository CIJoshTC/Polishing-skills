
// retrieve the elemnts from dom
// when the user does an action for keydown or keyup the evnt happens
// set the innerHTML to the event object value
function keydownAction(event) {
  const key = document.getElementById("key");
  const code = document.getElementById("code");
  const keyPress= event.key
  const keyCode= event.code
  key.textContent=keyPress
  code.textContent=keyCode
  //1.) When a user pressses a keydown i want it to have an event status of KEYDOWN Event
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML= "KEYDOWN Event";
};
function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
};
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
document.addEventListener("keyup", keyupAction);





