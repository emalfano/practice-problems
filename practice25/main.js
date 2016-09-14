/*
 Create a function, add_arrays(), that does the following:

 #### Input: 2 arrays of equal size
 - first_array, an array of numbers
 - needle array, an array of numbers

 #### Output:
 - output array, which has all values from the first array added to the values from the second array

 #### Example:
 var first_array = [3,-5,15,4];
 var second_array = [3,18,-5,-4]


 output = add_arrays(first_array,second_array);
 console.log(output); //outputs [6,13,10,0];

 #### Put your solution in answer.js
 */
var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4];
var result = [];
$(document).ready(function(){
    $('.display').click(function(){
        // getUserInput();
        $('.answer1').append(add_arrays([3,-5,15,4],[3,18,-5,-4]));
    })
})
//end of dom load
function add_arrays(first_array,second_array){
     for (var i=0; i<first_array.length;i++){
         result[i] = first_array[i] + second_array[i];
     }
    console.log(result);
    return result;
}