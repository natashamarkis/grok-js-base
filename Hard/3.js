/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (str) => {
    /* Тут код*/
    arrayOfStrings = str.split('_');
    for (let i = 1; i < arrayOfStrings.length; i++) {
        arrayOfStrings[i] = arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1);
    }
    return arrayOfStrings.join('');
}

module.exports = camelCase