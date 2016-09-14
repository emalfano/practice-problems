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
        // getUserInput();
        $('.answer1').append(random_range(1,100));
        $('.answer2').append(random_range(['a','b','c','d','e']));
    })
})
//end of dom load
function random_range(start_num,end_num){
    if (!end_num){
        var arrayIndex = Math.floor((Math.random() * start_num.length));
        console.log('random '+ arrayIndex);
        displayDiv = $('<div>').text("random number in the array is " + start_num[arrayIndex]);
        return displayDiv;
    } else {
        var displayDiv;
        var result = Math.floor((Math.random() * end_num) + start_num);
        console.log(result);
        displayDiv = $('<div>').text("random number between " + start_num + " and " + end_num + " is " + result);
        return displayDiv;
    }
}