/*
 ## math combo

 Build a function, cocococombomath, that takes 5 numbers as parameters.
 It:
 - multiplies the 1st number x the 2nd number
 - the result of that, it adds the 3rd number
 - the result of that, it divides by the 4th number
 - the result of that, it subtracts the 5th number
 - it returns that result

 - example:
 - cocococombomath(3,2,6,3,5)
 - Returns -1
 */

$(document).ready(function(){
    $('.display').click(function(){
        // getUserInput();
        $('.answer1').append(cocococombomath(3,2,6,3,5));
    })
})
//end of dom load
function cocococombomath(p1,p2,p3,p4,p5){
     var result = (p1 * p2 + p3)/p4 -p5; 
    return result;
}