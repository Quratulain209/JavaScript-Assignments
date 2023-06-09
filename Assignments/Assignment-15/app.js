// 1) Userdefine power function
function power(a,b){
   return a**b;
}
alert(power(2,4));

// 2) check for leap year
function checkLeap(current) {
    if(current%4==0){
        alert("Entered Year "+current+" is a Leap Year")
    }
    else{
        alert("Entered Year "+current+" is not a Leap Year")
    } 
}
var current = +prompt("Enter a year to check it is leap or not: ");
checkLeap(current);

// 3) Area of triangle
function area(a,b,c){
    var S = forS(a,b,c);
     return S*(S - a)*(S - b)*(S - c);
}
function forS(a,b,c){
    return ( a + b + c ) / 2;
}
var a=4, b=5, c=8;
document.write("<br><br>Area of triangle is:  "+area(a,b,c));

// 4) multifunction for average and percentage
function mainFunction(math,phy,comp){
    var totmarks = 300 ;
    var obtainmarks = math+phy+comp;
    document.write("<br>Average marks is: "+average(obtainmarks) );
    document.write("<br>Percentage is: "+ percentage(totmarks,obtainmarks));
}
function average(totmarks){
    return (totmarks) / 3;
}
function percentage(totmarks,obtainmarks){
    return obtainmarks *  100 / totmarks;
}
mainFunction(56,86,44);

// 6) delete all vowels from a sentence.
function removevowl(str){
    str = str.replace(/[aeiou]/gi, '');
    document.write("<br>After:  "+str);
}
var str = prompt("Enter a sentence");
document.write("before:  "+str);
removevowl(str);

// 8) distance between two cities
function inmeter(distance){
    return distance * 1000;
}
function infeet(distance){
    return distance * 3281;
}
function ininches(distance){
    return distance *  39370;
}
function incentimeters(distance){
    return distance * 100000;
}
var distance = +prompt("Enter distance between two cities:");
document.write("<br>Distance in meters:  "+inmeter(distance));
document.write("<br>istance in feet:  "+infeet(distance));
document.write("<br>Distance in inches:  "+ininches(distance));
document.write("<br>Distance in centimeters:  "+incentimeters(distance));

// 9) overtime pay of employees
var overtimeRate = 12;
var regularhours = 40;
var hoursworked = +prompt("Enter number of hours you worked");
if (hoursworked > regularhours) {
    var overtimeHours = hoursworked - regularhours;
    var overtimePay = overtimeHours * overtimeRate;
}
else{
    overtimePay = 0;
}
document.write("<br>Overtime pay of employee is :  " + overtimePay+"Rs.");

// 10) currency notes
  var amount = +prompt("Enter the amount to be withdrawn in hundreds: ");
  const denomination100 = Math.floor(amount / 100);
    amount %= 100;
    const denomination50 = Math.floor(amount / 50);
    amount %= 50;
    const denomination10 = Math.floor(amount / 10);
  document.write("<br>Number of 100 notes: " + denomination100);
  document.write("<br>Number of 50 notes: " + denomination50);
  document.write("<br>Number of 10 notes: " + denomination10);
  