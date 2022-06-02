function numPar(array){
    let num = [];

    for(let i =0; i < array.length; i++)
    {
        if(array[i] % 2 === 0){
            num.push(array[i]);
        }
    }
    console.log(num)
}

let numeros = [1, 2, 3, 4, 6, 7, 8, 9, 10];
numPar(numeros);