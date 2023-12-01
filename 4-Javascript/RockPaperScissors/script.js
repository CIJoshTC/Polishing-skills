//Suedo Code
// Have the user choose bewtween R, S or P
// Have the Computer choose S
// if the user chooses "R" then they win and console log you win
// if the user chooses "P" then they lose and console log you lose
// if the user chooses "S" then they tie  and console log you tie
// alert the user if they win lose or tie
 let userChoice= prompt("Please choose R, P or S");
 console.log(userChoice);

 let computerChoice= "P";

 if(userChoice=="P" &&computerChoice=="P"){
    alert("you tie")
 }
 if(userChoice=="P" &&computerChoice=="S"){
    alert("you lose")
 }
 if(userChoice=="P" &&computerChoice=="R"){
    alert("you win")
 }
