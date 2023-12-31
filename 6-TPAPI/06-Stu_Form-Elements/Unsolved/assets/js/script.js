var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');



// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleForm(event){
    event.preventDefault();
    let shoppingInputEl = $('#shopping-input').val();
    let listItem = $('<li>');
    listItem.text(shoppingInputEl);
    shoppingListEl.append(listItem);
    $('#shopping-input').val('')
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit",handleForm)


///event.preventDefault();
///let userInput= $(shoppingInputEl);
///$("button").on("submit", userInput ).val();
///shoppingListEl.append()
///shoppingFormEl.val(" ")


