// 1) 
input = +prompt("Enter a number or string:");
if(input<=90 && input>=65)
  alert("Given input is UpperCase letter");
else if(input<=122 && input>=97)
  alert("Given input is LowerCase letter");
else
  alert("Given input is number");

// 2) Display the larger number
num1 = +prompt("Enter first number: ");  
num2 = +prompt("Enter second number: ");
if(num1>num2)
  alert("First number is larger than Second number");
else if(num1<num2)
  alert("Second number is larger than First number");
else
  alert("Both numbers are same");  

// 3) check whether the number is positive, negative or zero
num = +prompt("Enter first number: ");  
if(num>0)
  alert("Number is Positive");
else if(num<0)
  alert("Number is Negative");
else
  alert("Number is Zero"); 
  
// 4) check vowel
var char = prompt("Enter a character:").toLowerCase();
if(char=='i'||char=='o'||char=='a'||char=='e'||char=='u')
  alert(true);
else
  alert(false);  

// 5)  Password validity
password = 'qwerty';
pswd = prompt("Enter your password");
if(pswd=='')
  alert("Please enter your password");
else if(pswd==password)
  alert("“Correct! The password you entered matches the original password");
else
  alert("Incorrect password");

// 6) Fix error
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}