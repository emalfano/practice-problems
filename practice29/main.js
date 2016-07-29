/*
 ## do math

 Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)

 - it uses the operator to determine what math to do to the numbers
 - if '+', it adds them
 - if '-', it subtracts them
 - if '*' or 'x' or 'X', it multiplies them
 - if '/', it divides them
 - if then returns the result
 - Example:
 - do_math(5,2,'*')
 - Return: 10
 */
var num1;
var num2;
var operator;
$(document).ready(function(){
    $('.display').click(function(){
        getUserInput();
        $('.answer').append(doMath(num1,num2,operator));
    })
})
//end of dom load
function doMath(num1,num2,operator){

    var result;
    var displayDiv;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
        case 'x':
        case 'X':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            result = "enter a valid operator";
    }
    console.log(result);

    displayDiv = $('<div>').text(num1 + operator + num2 + "="+result);
    return displayDiv;
}
function getUserInput(){
    num1 = prompt("enter first operand");
    num2 = prompt("enter second operand");
    operator = prompt("enter operator");
}