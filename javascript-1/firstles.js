"use strict";
/*Dmitry Molchanov*/
/*my first homework*/
var sum = function (a=0) {

        let total = a;

        function func(b=0) {
            total += b;
            return func;
        }

        func.toString = function () {
            console.log(total);
            return total;
        };
        return func;
};

console.log(sum(1)(2)(3)() == 6);
console.log(sum(1)(2)(3)() == 3);
console.log(+sum(1)(-4)(7)());
