function reducer(a,b) {
    return a*b;
}
function fn1(a){
    return new Promise(resolve => {
        console.log("starting function 1");
        setTimeout(()=>{
            console.log("end fn1");
            resolve(a);
        },5000)
    })
}
function fn2(a){
    console.log("Start func2");
    console.log("end func2");
    return Promise.resolve(a);
}
function fn3(a,delay=1000){
    return new Promise(resolve => {
        console.log("starting function 3");
        setTimeout(()=>{
            console.log("end fn3");
            resolve(a);
        },delay)
    })
}
function reduc2(a,b) {
    console.log(`res=${a+b}`);
    return a+b;
}

function reducerPromice(asynFunctions,reducerFunc,initialValue) {
    let accumulator=initialValue;
    asynFunctions.forEach((el)=>el.then((res)=>{
            return Promise.resolve( accumulator=reducerFunc(res,accumulator));
          }
      )
    );
}

reducerPromice([fn1(3), fn2(5), fn3(7, 3000)], reduc2, 0);