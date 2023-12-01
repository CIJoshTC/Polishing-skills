var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;

}
//1.) User clicks increment button 
//2.) counter increases by 1
function increment() {
  count++
  setCounterText()
  console.log("working for increment")
}
//3.) we update the page to show new count
//4.) the user clicks decrement button
function decrement(){
  if(count>=0){
  count--
  setCounterText()
  console.log("working for decrement")
}
}
//5.) the count decreases by 1
//6.) we update the page to show new count



// TODO: Add event listener to increment button
incrementEl.addEventListener("click",increment)

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click",decrement)