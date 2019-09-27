/*Dmitry Molchanov*/
/*my first homework*/
sum = function (a) {
    let total=a;

    function func(b) {
        total+=b;
        return func;
    }
    
    func.toString = function () {
        console.log(total);
        return total;
    };

     return func;
};