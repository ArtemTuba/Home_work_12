const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
    const element = array.indexOf(item);
    array.splice(element,1);
    return array;
}

removeElement(array, 5);
console.log(array)