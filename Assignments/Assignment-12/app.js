// 1)
var num = prompt("Please enter a positive integer:");

if (num > 0)
  document.write("The number is: " + num);
 else 
  alert("Please enter a positive integer.");

  document.write("<br>The rounded-off value is: " + Math.round(num));
  document.write("<br>The floor value is: " +  Math.floor(num));
  document.write("<br>The ceil value is: "+ Math.ceil(num));

// 2)
var num = prompt("Please enter a negative number:");

if (num < 0)
  document.write("The number is: " + num);
 else 
  alert("Please enter a positive integer.");

  document.write("<br>The rounded-off value is: " + Math.round(num));
  document.write("<br>The floor value is: " +  Math.floor(num));
  document.write("<br>The ceil value is: "+ Math.ceil(num));

// 3) absolute value
var Num = prompt("Please enter a number:");
document.write("<br><br>The absolute value of " + Num + " is: " + Math.abs(Num));

// 4) Random dice value
document.write("<br><br>The value of the dice is: " + Math.floor(Math.random() * 6) + 1);

// 5) Coin toss
var coinToss = Math.floor(Math.random() * 2);
if (coinToss === 0) {
    document.write("<br><br>" + coinToss+": Random coin value: Head ");
} else {
    document.write("<br><br>"+coinToss+": Random coin value: Tails");
}

// 6) Random no between 1 to 100
document.write("Random number between 1 to 100 : "+Math.floor(Math.random()*100));

// 7) ask user about weight
var userInput = prompt("Enter your weight in kilograms:"); 
var weight = parseFloat(userInput.replace(/[^\d.]/g, ""));
document.write("<br><br>Your weight is: " + weight + " kilograms");

// 8) Guess secret no
var secretNumber = 5;
var userInput = prompt("Guess a Secret Number between 1 to 10: ");
if(userInput == secretNumber)
        alert("Congratulations! You guessed the secret number");
else if(userInput > secretNumber)
        alert("Entered number is too high, Guess Again")
else
        alert("Entered number is too low, Guess Again")