// 1) show current date
document.write(Date());

// 2) Show current month in words
var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

var currentdate = new Date();
var monthinwords = months[currentdate.getMonth()]

alert("Current month is: "+monthinwords);

// 3) show day 
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
var currentdate = new Date();
var dayinwords = days[currentdate.getDay()];
alert("Today is: "+dayinwords);

// 4) 
var currentdate = new Date();
var dayinwords = currentdate.getDay();
if(dayinwords == 0 ||dayinwords == 6){
    alert("It's Fun Day ")
}

// 5) t shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
var currentdate = new Date();
var mydate = currentdate.getDate();
if(mydate < 16){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}

// 6)
var currentdate = new Date();
var mydate = currentdate.setDate(Jan, 1, 1970);
var newdate = currentdate - mydate;
document.newdate(newdate);

// 13) calculate age
function CalculateAge(current, DOB){
    var age = current - DOB
    alert("Your Age is: "+Math.floor(age/(1000*60*60*24*365)))
}
var current = new Date();
var DOB = new Date(prompt("Enter Your Age: ",'Jan 1,2002'))
CalculateAge(current,DOB);

// 14) K-Electric Bill
function calculate(){
    var Customername = document.getElementById("myname").value;
    var Month = document.getElementById('month').value;
    var unit = document.getElementById('unit').value;
    var chrgperunit = 7.74;
    var netAmountPayable = unit * chrgperunit;
    var latePayCharge = (netAmountPayable * 10 / 100).toFixed(2);
    var GrossAmountPayable = parseFloat(netAmountPayable) + parseFloat(latePayCharge);

    document.getElementById('NameDisplay').innerHTML = "<br><b>Customer Name: </b>" + Customername;
    document.getElementById('MonthDisplay').innerHTML = "<b>Month: <b> " + Month;
    document.getElementById('unitsDisplay').innerHTML = "<b>Number of units: </b> " + unit;
    document.getElementById('chrgperunitDisplay').innerHTML = "<b>Charges per unit: </b> " + chrgperunit;
    document.getElementById('netAmountPayableDisplay').innerHTML = "<b>Net Amount Payabe(within Due Date): </b>  " + netAmountPayable;
    document.getElementById('latePayChargeDisplay').innerHTML = "<b>Late Payment surcharge: </b> " + latePayCharge;
    document.getElementById('GrossAmountPayableDisplay').innerHTML = "<b>Gross Amount Payable(After Due Date): </b> " +GrossAmountPayable;
}