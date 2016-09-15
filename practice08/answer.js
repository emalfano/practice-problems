/*Given the following function call:
- character_convert('the cat in the hat');

And the resulting output:
    - "11610410132999711632105110321161041013210497116";

Create a function definition that achieves the output with the given input.

- <a href="https://www.google.com/search?q=ascii&oq=ascii&aqs=chrome..69i57j69i60j69i59j69i60j0l2.1319j1j9&sourceid=chrome&es_sm=91&ie=UTF-8" target="_blank">hint</a>
    - Optimization: How would you speed up the processing if you already encountered a value?

<a href="" target="_blank">Solution Set</a>
*/

var s = 'the cat in the hat';
console.log(s.charCodeAt(0));
var output = "";

$(document).ready(function(){
    $('.display').click(function(){
        // getUserInput();
        $('.answer1').append(character_convert('the cat in the hat'));
    })
})
//end of dom load
function character_convert(str){
    for (var i=0; i<str.length;i++){
        console.log('str = '+ str[i] +'charCodeAt '+i+ " " + str.charCodeAt(i) + "typeof ");
        var outputCharString = str.charCodeAt(i).toString();
        console.log("outputCharString " + outputCharString);
        output += str.charCodeAt(i);
        console.log("output "+output);
    }
    console.log(output);
    return output;


    //console.log(output);
    //return output;
}















