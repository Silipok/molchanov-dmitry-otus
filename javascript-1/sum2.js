"use strict"
function currySum(arg) {
        let total=arg;

        let resultFunc = function curryFunc(...args) {
            if(args[0]!=undefined) {
                args.forEach(function (el) {
                    total=total+el;
                });
                return curryFunc;
            }else return resultFunc;
        };

        resultFunc[Symbol.toPrimitive] = function () {                //can usage toString or valueOf
            return total;
        };

        return resultFunc;
}

console.log( +currySum(10)(20, 30)());