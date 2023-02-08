/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

const maxNumber = (arg1, arg2, arg3) => {
    let max = arg1;
    if (arg2 > max) {
        max = arg2;
    }
    if (arg3 > max) {
        max = arg3;
    }
    return max;
}
let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));
let num3 = Number(prompt(`Введите третье число`));
alert(`Наибольшим числом из ${num1}, ${num2}, ${num3} является ${maxNumber(num1, num2, num3)}`);