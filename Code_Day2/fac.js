
let num = 5;

factorial(num)

function factorial(num) {
    if (num == 2) {   // base-condition
        return num * 1;
    }

    return num * factorial(num - 1);
}