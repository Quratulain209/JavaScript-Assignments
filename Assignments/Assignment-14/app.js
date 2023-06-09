// 1) a function that displays current date & time
function dateTime(){
    var current = new Date();
    document.write(current)
}
dateTime();

// 2) Greeting to user
function greeting(firstName,LastName){
alert("Hello "+ firstName+" "+LastName);
}
firstName = prompt("Enter First name: ");
LastName = prompt("Enter Last name:");
greeting(firstName,LastName);

// 3)  Add two Number
function Add(num1,num2){
    return num1 + num2;
}
var num1 = +prompt("Enter 1st number: ");
var num2 = +prompt("Enter 2nd number: ");
alert("Your addition is: "+Add(num1,num2));

// 4) Simple Calculator
function calculator(num1,num2,operator){
if(operator=='+')
  return num1+num2;
else if(operator=='-')  
  return num1-num2;
else if(operator=='*')  
  return num1*num2;
else if(operator=='/') 
  return num1/num2;
else if(operator=='%') 
  return num1%num2;
}
num1 = +prompt("Enter first number: ");
num2 = +prompt("Enter second number: ");
operator = prompt("Select operation you want to perform: \n1) +\n2) -\n3) *\n4) / \n5) %");
var result = calculator(num1,num2,operator);

alert("Your calculation Result is: "+result);

// 5) square of Number
function square(num) {
    return num * num;
  }
  num1 = +prompt("Enter number: ");
    var squaredNumber = square(num1);
  alert("Square is:"+squaredNumber); // Output: 25
    
// 6) Factorial
function factorial(n){
    let i,f = 1;
    for(i=n;i>=1;i--){
        f = f*i;
    }
    return f;
}
val = +prompt("Enter number to calculate factorial: ");
alert("Factorial of "+val+" is "+factorial(val)+"!");

// 7)
function counting(strt,end){
    for(var i=strt ; i<=end;i++){
        document.write("<br>"+i);
    }
}
var strt = +prompt("Enter start value: ");
var end = +prompt("Enter end value: ");
var display = counting(strt,end);

// 8) computes hypotenuse of a right angle triangle
function calculateHypotenuse(base,perpendicular){
return calculateSquare(base) + calculateSquare(perpendicular);
}
function calculateSquare(value){
    return value * value;
}
var base = +prompt("Enter base value: ");
var perpendicular = +prompt("Enter perpendicular value: ");
alert("Calculated Hypotenuse is:  "+ calculateHypotenuse(base,perpendicular));

// 9)calculates the area of a rectangle.
function area(width , height){
    return width * height;
}
alert("Area is:  "+area(12,23));

// 10) Ckeck Palindrom
function palindromeFunc(str) {
  var reversedStr = "";
  
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  if (str === reversedStr) {
    alert("String is a Palindrome");
  } else {
    alert("String is not a Palindrome");
  }
}

var str = prompt("Enter String to check palindrome: ");
palindromeFunc(str);

// 11) converts the first letter of each word of the string in upper case. 
function capital1stletter(usersInput){
    var splitstr = usersInput.split(" ");
    document.write("<br><br>User Input: " + usersInput+"<br>");
    for(var i = 0 ; i<splitstr.length ; i++){
        document.write(" "+splitstr[i].slice(0,1).toUpperCase()+splitstr[i].slice(1,splitstr[i].length));
        
    }    
}
var usersInput = prompt("Enter some text For Convert in UpperCase :");
capital1stletter(usersInput);

// 12) longest word
function longestword(usersInput){
    var longest = '';
    var splitstr = usersInput.split(" ");
    for(var i = 0 ; i<splitstr.length ; i++){
        if(splitstr[i].length>longest.length)
        longest = splitstr[i];
    }
    return longest;
}
var usersInput = prompt("Enter string :");
document.write("Longest word: " + longestword(usersInput));

// 13) find no of occurance of letter
function findoccurance(str,char){
    var count = 0;
    for(var i = 0 ; i<str.length ; i++){
        if(str[i] === char)
          count++;
    }
    return count;
}
var str = prompt("Enter any string: ");
var char = prompt("Enter any char to find no of occurance: ");
 document.write("Number of occurrences of the specified letter :  "+findoccurance(str,char));

// 14) calculate area and circumference
function calcCircumference(radius){
    document.write("<br><br>The circumference is  "+(2 * Math.PI * radius).toFixed(2));
}
function calcArea(radius){
    document.write("<br><br>The Area is  "+ (Math.PI * radius * radius).toFixed(2));
}
calcCircumference(3);
calcArea(3);