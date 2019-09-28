var bind = function(fn, context) {
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
      var fnArgs = [].slice.call(arguments);
      return fn.apply(context, bindArgs.concat(fnArgs));
    };
  };

  var a=function(j){
      console.log(j)
  }

for(var i=0;i<10;i++){
    setTimeout(
        bind(a,this,i),
        1000
    )
}

function mult(a,b){
  return a*b;
}
let double =bind(mult,null,2);
console.log(double(3));
console.log(typeof double)