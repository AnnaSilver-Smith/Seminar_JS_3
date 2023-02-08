/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */

const degreeNumber = (arg) => {
    return Math.pow(arg, 3);
}
let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));
console.log(`Сумма чисел ${num1} и ${num2} в 3 степени = ${degreeNumber(num1) + degreeNumber(num2)}`);