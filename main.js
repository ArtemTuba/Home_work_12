const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
    const element = array.indexOf(item);
    if(array.indexOf(item) === -1){
        console.log('Tакого елемента немає в масиві');
    } else {
        array.splice(element, 1);
        console.log(array);
    }
    return array;
}

removeElement(array, 5);

