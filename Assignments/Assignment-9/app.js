var stdname =[];  // 1)
var studentNames = new Array();  // 2)
var arrstr = ['muskan','fatima'];  // 3)
var arrnum = [43,46,67,22];  //  4)
var booleanarr = [true,true,false,true,false];  // 5)
var mixarr = ['Alina',54,true]; // 6)

// 7) education qualifications in Pakistan
var education = ['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
document.write("<h2>Qualifications</h2>")
for(var i=0 ; i<education.length ; i++){
    document.write("<br> "+education[i]);   
}

// 8)  Calculate percentage using array
stdname = ['Khizer','Ayesha','Horria'];
var score = [234,332,467];
for(var i = 0 ; i<stdname.length ; i++){
document.write("<br>Score of "+stdname[i]+" is "+score[i]+". Percentage: "+score[i]*100/500+"%<br>");
}

// 9) 
var color = ['pink','yellow','red','green','blue'];
document.write("<br>Colours before updation in start : "+color);
var addcolor = prompt("what color you wants to add to the beginning");
color.unshift(addcolor);
document.write("<br>Colours after updation in start : "+color);

document.write("<br>Colours before updation in end : "+color);
var addcolor = prompt("what color you wants to add to the end");
color.push(addcolor);
document.write("<br>Colours after updation in end : "+color);

document.write("<br>Colours before Add two more color in start : "+color);
var addcolor = prompt("Add two more color in beginning");
color.unshift(addcolor);
document.write("<br>Colours after Add two more color in start : "+color);

color.shift(addcolor);
document.write("<br>After delete 1st color : "+color);

color.pop(addcolor);
document.write("<br>After delete last color : "+color);

var index = prompt("At which index you wants to add a color: ");
var addcolor = prompt("Name color you wants to add: ");
color.splice(index,0,addcolor);
document.write("<br>Colors after insert on desiresd places: "+color);
var index = prompt("At which index you wants to delete color(s)  ");
var qty = prompt("How much colour you want to delete");
color.splice(index,qty);
document.write("Updated colours: "+color);

// 10) Sort array
const score = ["88", "78", "98", "72"];
document.write("<br><br>Score pf students: "+score);
score.sort();
document.write("<br>Ordered Score pf students: "+score);

// 11) select 3 array elements
var cities = ["New York" , "London" , "Tokyo" , "Paris"  , "Sydney" , "Mumbai"];
var selectedCities = [cities.slice(2 , 5)];
document.write("<h2>Cities:</h2> " + cities + "<h2>Selected cities:</h2> " + selectedCities);

// 12) array join
var arr = ["This" , " is ", " my ", " cat"];
document.write("<h2>Array:</h2>"+arr);
document.write("<h2>String:</h2>"+arr.join(''));

// 13)
var fifoArray = [];
for(var i = 0 ; i<5 ; i++){
    fifoArray.push(prompt("Enter "+i+" device name:"));
}
document.write("Device <br>" + fifoArray+" <br>");
for(var i = 0 ; i<fifoArray.length ; i++){
    document.write("<br>OUT: <br>" + fifoArray[i]);
}

// 14)
var lifoArray = [];
for(var i = 0 ; i<5 ; i++){
    lifoArray.push(prompt("Enter "+i+" device name:"));
}
document.write("Device <br>" + lifoArray+" <br>");
for(var i = lifoArray.length-1 ; i>=0 ; i--){
    document.write("<br>OUT: <br>" + lifoArray[i]);
}

// 15) Dropdown menu
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for(var i = 0 ; i<manufacturers.length ; i++)
    document.write("<option > "+manufacturers[i]+"  </option>")

document.write("</select>");

