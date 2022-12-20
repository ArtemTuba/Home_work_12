const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
    const element = array.indexOf(item);
    if(item !== -1){
        array.splice(element, 1);
        console.log(array);
    } else {
        console.log('Tакого елемента немає в масиві');
    }
    return array;
}

removeElement(array, 5);
