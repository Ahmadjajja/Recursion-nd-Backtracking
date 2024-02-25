let num = 1;

print1(num);

function print1(n) {
    console.log("num1 -> ", n); // 1
    print2(n + 1);
    return
}

function print2(n) {
    console.log("num2 -> ", n); // 2
    print3(n + 1);
    return
}

function print3(n) {
    console.log("num3 -> ", n); // 3
    print4(n + 1);
    return
}

function print4(n) {
    console.log("num4 -> ", n); // 4
    print5(n + 1);
    return
}

function print5(n) {
    console.log("num5 -> ", n); // 5
    return
}
