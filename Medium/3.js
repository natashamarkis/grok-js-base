/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    /* Тут код*/
    let a, b;
    
    if ( start > end) {
        a = end;
        b = start;
    } else {
        a = start;
        b = end;
    }
    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumOfIntegers
