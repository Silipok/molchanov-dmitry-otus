"use strict"
const Curry = (fn, seed) => {
    const reduceValue = (args, seedValue) =>
        args.reduce((acc, a) => {
            return fn.call(fn, acc, a);
        }, seedValue);
    const next = (...args) => {
        return (...x) => {
            if (!x.length) {
                return reduceValue(args, seed);
            }
            return next(...args, reduceValue(x, seed));
        };
    };
    return next();
};

const _Sum = Curry((x, y) => x + y, 0);
console.log(_Sum(1)(3)(6)(9)());
