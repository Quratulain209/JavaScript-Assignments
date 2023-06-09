// 1)
city = prompt("Enter your city name: ").toLowerCase();
if(city=='karachi')
   alert("Welcome to city of lights");
else
   alert("Not welcome");   
   
// 2)
gender = prompt("Enter your gender name: ").toLowerCase();
if(gender=='male')
   alert("Good Morning Sir");
else if(gender=='female')
   alert("Good Morning Ma’am"); 
else
   alert("INvalid Input");   

// 3)
color = prompt("Enter Traffic Light color: ").toLowerCase();
if(color=='red')
   alert("Must Stop");  
else if(color=='yellow')
   alert("Ready to move");     
else if(color=='green')
   alert("Move now");    

// 4)
fuel = prompt("How many fuel is remaining in your car ").toLowerCase();
if(fuel<0.25)
   alert("Please refill the fuel in your car");
else
   alert("No need to refill fuel");    

// 5)
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// 6)
Math = +prompt("Enter Math marks");
English = +prompt("Enter English marks");
Urdu = +prompt("Enter Urdu marks");
Computer = +prompt("Enter Computer marks");
Physics = +prompt("Enter Physics marks");
var totMarks = 500;
var ObtMarks = (Math+English+Urdu+Computer+Physics);
var Percentage = (ObtMarks*100/totMarks.toFixed(2));
document.write("<h1>Marksheet</h1><br>Total Marks: "+totMarks+"<br>Marks Obtained: "+ObtMarks+"<br>Percentage: "+Percentage);
if(Percentage>=80){
  document.write("<br>Grade : A-one");
  document.write("<br>Remarks : Excellent");
}
else if(Percentage>=70){
  document.write("<br>Grade : A");
  document.write("<br>Remarks : Good");
}
else if(Percentage>=60){
  document.write("<br>Grade : B"); 
  document.write("<br>Remarks : You need to improve");
} 
else{
  document.write("<br>Grade : Fail");
  document.write("<br>Remarks : Sorry");
}    

// 7) Guess secret number 
var  secretNum = 5;
 guess = +prompt("Enter a num between 1 to 10");
if(guess==secretNum)
  alert("Bingo! Correct answer");
else if(secretNum==guess+1)  
  alert("Close enough to the correct answer");

// 8) check whether the given number is divisible by 3
num = +prompt("Enter a number: ");
if(num%3==0)
  alert("Given number is divisible by 3");
else
  alert("Given number is not divisible by 3");

// 9) check whether the given number is even or odd
num = +prompt("Enter a number: ");
if(num%2==0)
  alert("Given number is EVEN");
else
  alert("Given number is  ODD");
 
// 10) Guess secret number 
 temp = +prompt("Enter Today's Temperature ");
if(temp>40)
  alert("It is too hot outside.");
else if(temp>30)  
  alert("The Weather today is Normal.");
else if(temp>20)  
  alert("Today’s Weather is cool."); 
else 
  alert("OMG! Today’s weather is so Cool.");

// 11) mini calculator
var result;
num1 = +prompt("Enter first number: ");
num2 = +prompt("Enter second number: ");
operator = prompt("Select operation you want to perform: \n1) +\n2) -\n3) *\n4) / \n5) %");
if(operator=='+')
  result=num1+num2;
else if(operator=='-')  
  result=num1-num2;
else if(operator=='*')  
  result=num1*num2;
else if(operator=='/') 
  result=num1/num2;
else if(operator=='%') 
  result=num1%num2;
alert("Your calculation Result is: "+result);