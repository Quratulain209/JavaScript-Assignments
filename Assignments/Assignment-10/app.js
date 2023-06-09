// 1) Declare and initialize an empty multidimensional array.
var multidimension = [];

// 2)
for (var a = 0; a <= 2; a++) {
  multidimension[a] = [];
}
multidimension[0][0] = 0;
multidimension[0][1] = 1;
multidimension[0][2] = 2;
multidimension[0][3] = 3;
multidimension[1][0] = 1;
multidimension[1][1] = 0;
multidimension[1][2] = 1;
multidimension[1][3] = 2;
multidimension[2][0] = 2;
multidimension[2][1] = 1;
multidimension[2][2] = 0;
multidimension[2][3] = 1;

for (var i = 0; i < multidimension.length; i++) {
  for (var j = 0; j < multidimension[i].length; j++) {
    document.write(multidimension[i][j] + " ");
  }
  document.write("<br>");
}
document.write("<br>");

// 3) Print counting 
for(var i=1;i<=10;i++){
    document.write(i+"<br>")
}

// 4) Print table
var table = prompt("Enter a number for table ");
var length=prompt("Enter length multiplication of table")
document.write("Multiplication table of "+table+"<br> Length "+length+"<br>");
for(i=1;i<=length;i++)
{
document.write("<br>" +table + "x" +i+ "=" +i*table);
}
document.write("<br>");

// 5)
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0 ; i < fruits.length; i++)
    document.write("<br>"+fruits[i]);
for (var i = 0; i < fruits.length; i++) {
  document.write ( "<br>Element at index " +i +" is "+ fruits[i]);
}

// 6)
document.write("<br><br>Counting<br>");
for (var i = 1; i <= 15; i++) {
      document.write(i+",");
  }
document.write("<br><br>"+"reverse counting<br>")
for (var i = 10; i >= 1; i--    ) {
    document.write(i+",");
}
document.write("<br><br>Even numbers:<br>");
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) 
    document.write(i+",");
}
document.write("<br><br>Odd numbers:<br>");
for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) 
    document.write(i+",");
}
document.write("<br><br>Series<br>");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) 
      document.write(i+"k,");
}

// 7)  Search item
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search=prompt("Welcome  to Pune Bakery. what do you want to order sir/mam");
var indx= A.indexOf(search);
{
    if(indx==-1){
        alert("We are sorry "+search+" is  NOT availabe in our bakery ");
    }
    else
    alert(search+" is availabe at index "+ indx + " in our bakery");
}

// 8)  Find largest element in array
var arr = [24, 53, 78, 91, 12,762];
var largest = 0;
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > largest) 
    largest = arr[i];
}
document.write("<br><br>Array Element <br>"+arr);
document.write("<br><br>The largest number in the array is:<br> " + largest);

// 9)  Find smallest element in array
var arr = [24, 53, 78, 91, 12,762];
var smallest = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) 
     smallest = arr[i];
}
document.write("<br><br>Array Element <br>"+arr);
document.write("<br><br>The smallest number in the array is:<br> " + smallest);

// 10) multiples of 5
document.write("<br><h2>Multiples of 5</h2>")
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i +" , ");
    }
  }