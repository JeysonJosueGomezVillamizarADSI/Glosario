addEventListener('DOMContentLoaded', (e) => {
    let arr = [3, 4, 5, 6];
    let modificarArreglo = arr.map(function(element){
        return element *3;
    });
    
    console.log(modificarArreglo); // [9, 12, 15, 18]

});