var num1 = 3, num2 = 5;  // 1) Addition
var result = num1 + num2;
document.write("Sum of "+num1+" and "+num2+" is "+result);

var num1 = 3, num2 = 5;  // 2) Subtraction
var result = num1 - num2;
document.write("<br>Subtraction of "+num1+" and "+num2+" is "+result);

var num1 = 3, num2 = 5;  // Division
var result = num1 / num2;
document.write("<br>Division of "+num1+" and "+num2+" is "+result);

var num1 = 3, num2 = 5;  //  Multiplication
var result = num1 * num2;
document.write("<br>Multiplication of "+num1+" and "+num2+" is "+result);

var num1 = 3, num2 = 5;  // Modulas
var result = num1 % num2;
document.write("<br>Modulas of "+num1+" and "+num2+" is "+result);

var val;   // 3)
document.write("<br><br>Value after variable declaration is: "+val);
val = 5;
document.write("<br>Initial value: "+val);
val++;
document.write("<br>Value after increment is: "+val);
val+=7;
document.write("<br>Value after addition is: "+val);
val--;
document.write("<br>Value after decrement is: "+val);
document.write("<br>The remainder is : "+val%3);

var ticket = 600;  // 4)
document.write("<br><br>Total cost to buying 5 tickets to a movie is "+ticket*5+"PKR");

var n = 4;     //  5)
document.write("<br><br>Table of"+n) ;  
for(var i=1 ; i<=10 ; i++){    
    document.write("<br>4 x "+i+" = "+n*i);
}

var celsius = 25;  //  6)
document.write("<br><br>"+celsius+"°C is "+((celsius * 9 / 5) + 32)+"°F") ; 
var Fahrenheit = 70;
document.write("<br>"+Fahrenheit+"°F is "+(Fahrenheit - 32) * 5 / 9+"°C") ; 

 // Shopping Cart
var item1 = 650, item2 = 100, Qty1 = 3, Qty2 = 7, ShippingCharges = 100;   //  7)
document.write("<h1>Shopping Cart</h1> Price of Item 1 is "+item1+"<br>QTY of item 1 is "+Qty1+"<br>Price of Item 2 is "+item2+"<br>QTY of item 2 is "+Qty2);
document.write("<br>Total cost of your order is "+((item1*Qty1)+(item2*Qty2)+ShippingCharges));

// 8) Marksheet
Math = +prompt("Enter Math marks");
English = +prompt("Enter English marks");
Urdu = +prompt("Enter Urdu marks");
Computer = +prompt("Enter Computer marks");
Physics = +prompt("Enter Physics marks");
var totMarks = 980;
var ObtMarks = (Math+English+Urdu+Computer+Physics);
alert("Marksheet\n\nTotal Marks: "+totMarks+"\nMarks Obtained: "+ObtMarks+"\nPercentage: "+ObtMarks*100/totMarks);

// 9) Currancy in PKR
doller = +prompt("Enter Dollers ");
Riyals = +prompt("Enter Riyals ");
alert("Total Currancy in PKR is: "+(doller*104.80)+(Riyals*28));

// 10)
var x = 1;
alert("Expression value is: "+((x + 5) * 10) / 2);

// 11) calculate Age
var CurrentYear = 2023, BirthYear = 2003;
document.write("<h1>Age Calculator</h1>Current Year "+CurrentYear+"<br>Birth Year "+BirthYear+"<br>Your age is: "+(CurrentYear-BirthYear));

// 12) 
var radius = 20;
document.write("<h1>The Geometrizer</h1>The circumference is "+2*3.142*radius);
document.write("<br>The Area is "+3.142*radius*radius);

// 13)
var cake = 'Brownie', CurrentAge = 15, maxAge = 65, cakePerday = 3;
document.write("<h1>The Lifetime Supply Calculator</h1> Favourite cake: "+cake+"<br>Current Age "+CurrentAge+"<br>Estimated Maximum Age: "+maxAge+"<br>Amount of cake per day : "+cakePerday+"<br>You will need "+(maxAge-CurrentAge)*cakePerday+" "+cake+" to last you until the ripe old age of "+maxAge);