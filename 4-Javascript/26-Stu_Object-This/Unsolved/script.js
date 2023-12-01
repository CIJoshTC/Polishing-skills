// TODO: What does 'this' refer to?
console.log(this);
//this refers to the window

// TODO: What does 'this' refer to?
//tis refers to the window object
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
//It will log 20 it refers to the child object age
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
//It will log 5750 because this refers to the investment object
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
