// 0, 1, 1, 2, 3, 5, 8, ...

// find 5th fib no

let f = 7;

console.log(f + "th value -> ", fib(f))

function fib(f) {
    // base condition
    if (f <= 2) {
        return f - 1;
    }

    return fib(f - 1) + fib(f - 2);         // recurrence relation
}



