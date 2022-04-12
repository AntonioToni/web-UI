function curry(func) {
    let res = 1;
    return function inner(x) {
        if (!x) {return res;}
        if(x > 0 && x < 20){res = func(res, x); }
        return inner;
    };
}

const multiply = curry((a, b) => a * b);

console.log(multiply(3)(4)(2)(-2)(5)());