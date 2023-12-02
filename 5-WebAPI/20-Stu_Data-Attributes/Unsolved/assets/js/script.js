var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  if(event.target.matches(".box")){
    // ik a box was clicked
    // get the attribute data number
    let number= event.target.getAttribute("data-number");
    // get the attribute data state
    let state= event.target.getAttribute("data-state");
    if(state==="hidden"){
      event.target.textContent=number;
      event.target.setAttribute("data-state", "visible" )
     } else {
      event.target.textContent=" ";
      event.target.setAttribute("data-state", "hidden");
     }
  }


  // TODO: Complete function
});
