// 1)
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);

// 2)
var phoneModel = prompt("What is your favorite mobile phone model?");
document.write("MY Favorit Mobiles is : " + phoneModel);
document.write("<br>The length of String: " + phoneModel.length);

// // 3) find index of character
var word = "Pakistani";
document.write("<br><br>String : "+word+"<br>The index of 'n' is: " + word.indexOf("n"));

// 4) last index
var word = "Hello World";
document.write("<br><br>String : "+word+"<br>The last index of 'l' is: " + word.lastIndexOf("l"));

// 5) find the character at 3rd index
var word = "Pakistani";
document.write("<br><br>String : "+word+"<br>charecter of inder 3 is: " + word.charAt(3));

// 6) concate method
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
alert("Hello, " +firstName.concat(" "+lastName) );

// 7) Replace word
var city = "Hyderabad";
document.write("<br><br>City: " + city);
document.write("<br>After Replacement: " + city.replace('Hyder','Islam'));

// 8) Replace all place
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<br><br>Message: " + message);
document.write("<br>After Replacement: " + message.replace(/and/g,'&'));

// 9) Convert string to number
var str = "472";
var num = parseInt(str);
document.write("<br><br>String value: " + str + "<br>");
document.write("String type: " + typeof str + "<br>");
document.write("Number value: " + parseInt(str) + "<br>");
document.write("Number type: " + typeof parseInt(str) + "<br>");

// 10) convert in uppercase
var usersInput = prompt("Enter some text For Convert in UpperCase :");
document.write("<br><br>Uppercase Input: " + usersInput.toUpperCase());

// 11) make 1st letter capital
var usersInput = prompt("Enter some text For Convert in UpperCase :");
document.write("<br><br>User Input: " + usersInput);
document.write("<br>Title case: "+usersInput.slice(0,1).toUpperCase()+usersInput.slice(1,usersInput.length));

// 12) convert num to string
var Num = 35.36;
document.write("<br><br>Number: "+Num+"<br>Result: "+Num.toString().replace(".", ""));

// 13)
var username = prompt("Please enter your username:");

if (/[!@.,]/.test(username))
  alert("Your username contains a special character. Please enter a valid username.");
else 
  alert("Welcome, " + username + "!");

// 14)
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search=prompt("Welcome  to Pune Bakery. what do you want to order sir/mam");
var indx= A.indexOf(search.toLowerCase());
{
    if(indx==-1){
        alert("We are sorry "+search+" is  NOT availabe in our bakery ");
    }
    else
    alert(search+" is availabe at index "+ indx + " in our bakery");
}

// 15) Password Validation
var password = prompt("Enter a password:\n a)It should contain alphabets and numbers \n b)It should not start with a number\n c) It must at least 6 characters long");
function isLetter(character) {
  return /[a-zA-Z]/.test(character);
}
function isDigit(character) {
  return /\d/.test(character);
}
if (password.length >= 6 && isLetter(password[0]) && isLetter(password) && isDigit(password)) {
  document.write("Password is valid.");
} 
else {
  document.write("Please enter a valid password.");
}

// 16) Split String
var university = "University of Karachi";
var split = university.split("");
for(var i = 0 ; i<split.length ; i++){
    document.write("<br> "+split[i]);
}

// 17) show last character of input
var str = prompt("Enter a string for last character: ");
document.write("<br><br>User Input: "+ str+ "<br>Last Character of Input: " + str.slice(str.length-1,str.length));

// 18)
var strg = "The quick brown fox jumps over the lazy dog";
let count = 0;
let words = strg.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "the") {
    count++;
  }
}
document.write("<br><br>Text: " +strg);
document.write("<br>There are " + count + " occurrences of word “the”");