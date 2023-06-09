// 1)
var a=10;
document.write("Result <br>The value of a is: "+a+"<hr>");
++a;
document.write("<br>The value of ++a is: "+a);
document.write("<br>The value of a is: "+a);

document.write("<br><br>The value of a++ is: "+a);
a++;
document.write("<br>The value of a is: "+a);
--a;
document.write("<br><br>The value of --a is: "+a);
document.write("<br>The value of a is: "+a);

document.write("<br><br>The value of a-- is: "+a);
a--;
document.write("<br>The value of a is: "+a);

// 2)
var a = 2, b = 1;
document.write("<br><br>a = "+a+"<br>b = "+b)
var result = --a - --b + ++b + b--;
document.write("<br>Result is = "+result+"<br>");

// 3)
alert("Hello "+prompt("Enter your name: "));

// 4)
num = +prompt("Enter a number for table: ",5);
for(var i = 1 ; i<=10 ; i++){
    document.write("<br>"+num+"x"+i+"="+num*i);
}

// 5)  Marksheet
var sub1 ='Math';
var sub2 ='Chemistry';
var sub3 ='Computer';
var totmarks1 = 100, totmarks2 = 100, totmarks3 = 100;
 mathMarks  = +prompt("Enter Math marks: ");
 chemMarks  = +prompt("Enter Chemistry marks: ");
 compMarks  = +prompt("Enter Computer marks: ");

 document.getElementById("Subjname").innerHTML = "Subject";
 document.getElementById("TotMarks").innerHTML = "Total Marks";
 document.getElementById("ObtainMarks").innerHTML = "Obtained Marks";
 document.getElementById("Percentage").innerHTML = "Percentage";

 document.getElementById("Math").innerHTML = sub1;
 document.getElementById("totmarks1").innerHTML = totmarks1;
 document.getElementById("mathMarks").innerHTML = mathMarks;
 document.getElementById("mathPer").innerHTML = ((mathMarks*100)/totmarks1)+"%";

 document.getElementById("chem").innerHTML = sub2;
 document.getElementById("totmarks2").innerHTML = totmarks1;
 document.getElementById("chemMarks").innerHTML = chemMarks;
 document.getElementById("chemPer").innerHTML = ((chemMarks*100)/totmarks2)+"%";
 
 document.getElementById("comp").innerHTML = sub3;
 document.getElementById("totmarks3").innerHTML = totmarks3;
 document.getElementById("compMarks").innerHTML = compMarks;
 document.getElementById("compPer").innerHTML = ((compMarks*100)/totmarks3)+"%";

 document.getElementById("total").innerHTML = "Total";
 var tot = document.getElementById("totalMarks").innerHTML = (totmarks1+totmarks2+totmarks3);
 var totObt = document.getElementById("totObtainedMarks").innerHTML = (mathMarks+chemMarks+compMarks);
 document.getElementById("totPer").innerHTML = ((totObt*100)/tot).toFixed(2)+"%";