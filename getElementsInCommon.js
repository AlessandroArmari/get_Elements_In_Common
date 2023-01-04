/* 
Function getElementsInCommon takes 2 Arrays and returns an Array
made by the elements in commond between them.
If the function finds the same element in common more than once
it won't duplicate it
*/

var array1 = [1, 2, 3, 4, 5, true];
var array2 = [true, 5, 4, 3, 2, 1, 5, 5, 5];

function getElementsInCommon(first, second) {
  var arrayCreated = [];

  //I use a double cycle here to compare all of the elements of
  //the first array with the second's:

  for (i = 0; i < first.length; i++) {
    for (y = 0; y < second.length; y++) {
      if (first[i] == second[y] && arrayCreated.includes(first[i]) != true) {
        //I check if the elements are the same AND that that elements isn't in my Created Array yet.
        arrayCreated.push(second[y]);
      }
    }
  }
  if (arrayCreated.length == 0) {
    return "There is no element in common!";
  } else {
    return arrayCreated;
  }
}

console.log(getElementsInCommon(array1, array2));
