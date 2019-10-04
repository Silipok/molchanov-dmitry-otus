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

async function reducerPromice(asynFunctions,reducerFunc,initialValue) {
    let accumulator=initialValue;
    for(let i=0;i<asynFunctions.length;i++){
        let el=await asynFunctions[i];
        accumulator=accumulator+el;
    }
    return accumulator;
}

p=reducerPromice([fn1(3),fn2(4),fn3(2,2000)],reduc2,0);
p.then(v=>console.log(`result=${v}`));


let res=reducerPromice([fn1(5),fn2(7),fn3(6,5500)],reducer,1);
console.log(res);
//res.then(((val)=>console.log(val));