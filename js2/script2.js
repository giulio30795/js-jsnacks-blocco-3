// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array2 = array1.map( element => element*element
);
console.log(array2, array1);