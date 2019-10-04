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
    return a+b;
}


function reducerPromice(asynFunctions,reducerFunc,initialValue) {
    let accumulator=initialValue;
    return Promise.all(asynFunctions).then(value => {
        value.forEach((el)=>accumulator=reducerFunc(el,accumulator));
        console.log("All promises is ready");
        console.log(`Result=${accumulator}`);
    })
}
let res=reducerPromice([fn1(5),fn2(7),fn3(6,5500)],reduc2,0);
console.log(res);
//res.then(((val)=>console.log(val));