// // 1) show alert msg
function msg() {
    alert('It is my Github account');
}
// 2) mobile alert
function mobile() {
    alert("Thanks for purshasing a phone from us");
}
// 3)  Delete student record table
function deleteRecord(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// 4) Value increase decrease
var countElement = document.getElementById("count");
var count = parseInt(countElement.textContent);

function main(change) {
    if (change == '+') {
        Increase();
    } else {
        Decrease();
    }
}
function Increase() {
    countElement.textContent = ++count;
}

function Decrease() {
    countElement.textContent = --count;
}