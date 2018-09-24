let strings = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''];

let searchstring = 'ball';

for (let i = 0; i < strings.length; i++) {
    if (strings[i] === searchstring) {
        console.log(i);
        break;
    }
}


let binarySearch = function(searchstring, stringset) {
    let pivot = Math.round(stringset.length/2);
    let originalpivot = pivot;
    while (!stringset[pivot] && pivot < stringset.length) {
        pivot++;
    }
    if (stringset[pivot] === searchstring) {
        console.log(pivot)
        return;
    }
    if (pivot < stringset.length) {
        
    }
    

    //  go to the middle
    //  if blank go right until non-blank
    //  if you get to the end go left
    //  if you get to the end not found
    //  compare and choose left or right chunk to check next
};