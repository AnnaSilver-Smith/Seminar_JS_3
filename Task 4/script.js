/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

const sumNumber = (arg1, arg2) => {
    return arg1 + arg2;
}
const differenceNumber = (arg1, arg2) => {
    if (arg1 > arg2) {
        return arg1 - arg2;
    }
    else {
        return arg2 - arg1;
    }
}
const multiplicationNumber = (arg1, arg2) => {
    return arg1 * arg2;
}
const divNumber = (arg1, arg2) => {
    return arg1 / arg2;
}
let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));
console.log(`Сумма чисел ${num1} и ${num2} равна ${sumNumber(num1, num2)}`);
console.log(`Разность чисел ${num1} и ${num2} равна ${differenceNumber(num1, num2)}`);
console.log(`Умножение чисел ${num1} и ${num2} равно ${multiplicationNumber(num1, num2)}`);
console.log(`Деление чисел ${num1} и ${num2} равно ${divNumber(num1, num2)}`);