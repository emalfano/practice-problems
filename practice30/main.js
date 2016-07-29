/*
 ## random number or array element

 Build a function, random_range, that takes 2 parameters, start_num and end_num.  OPTIONALLY: If start_num is an array instead (and end_num isn't specified), then it returns a random element from the array

 -
 - Example:
 - random_range(2,15)
 - returns 7
 - random_range(1,100)
 - returns 85
 - random_range(['a','b','c','d','e'])
 - returns 'b'
 */

$(document).ready(function(){
    $('.display').click(function(){
        getUserInput();
        $('.answer').append(random_range(num1,num2));
    })
})
//end of dom load
function random_range(start_num,end_num){

    var displayDiv;
    var result = Math.floor((Math.random() * end_num) + start_num);

    console.log(result);

    displayDiv = $('<div>').text("random number between " + start_num + " and " + end_num + " is " + result);
    return displayDiv;
}
function getUserInput(){
    num1 = prompt("enter start of range");
    num2 = prompt("enter end of range");
}