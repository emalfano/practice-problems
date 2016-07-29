/*
 ## Bigger words

 Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.

 - Write a function that takes two parameters
 - Parameter 1 - A string
 - Parameter 2 - An array of strings
 - The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
 - Example:
 - `var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];`
 - `biggerWords('whales', myArray);`
 - Output - `['reptile', 'mammoth', 'turtles']`
 */
var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
var bigWords;
function biggerWords(aString,arrayOfStrings){
    var stringLength = aString.length;
    var biggerWordsArray = [];
    var arrayLength =  arrayOfStrings.length;
    for (var i=0; i < arrayLength; i++){
        if (arrayOfStrings[i].length > aString.length){
          biggerWordsArray.push(arrayOfStrings[i]);
        }
    }
    bigWords = "<p> The bigger Words array contains "+ biggerWordsArray+"</p>";
    console.log("big words ",bigWords);
}
biggerWords('whales', myArray);
$(document).ready(function(){
    $('.display').click(function(){
        $('body').append(bigWords);
    })
})