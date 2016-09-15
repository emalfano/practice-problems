/* 
 # array factors

 Build a function that takes one array and finds all other elements of the array that are factors of its an element

 - Write a function that takes one parameter
 - Parameter 1 - an array of numbers
 - The function should return an object with multiple arrays in it, one for each non-repeating number in the input array
 - repeated numbers should not be added twice
 - Example:
 - `arrayFactors([4,2,8,6,3,9]);`
 - Output - {
 4: [2],
 2: [],
 8: [4,2],
 6: [2,3],
 3: [],
 9: [3]
 }

*/
var arrayInput = [4,2,8,6,3,9];
var output = {};

$(document).ready(function(){
    $('.display').click(function(){
        // getUserInput();
        $('.answer1').append(arrayFactors(arrayInput));
    })
})
//end of dom load
function arrayFactors(array){
    for (var i=0; i<array.length;i++){
        output[array[i]] = [];
         for (var j=0; j<array.length;j++){
             if (i==j){
                continue;                
             } else if(array[i] % array[j] == 0){
                 console.log(array[j] +' is a factor of '+ array[i]);
                  output[array[i]].push(array[j]);
                 }
             }
        console.log('for array element ', array[i] + ' the output is ', output[array[i]]);
         }

    var displayOutput = output.toString();
    console.log(output);
    return displayOutput;
}