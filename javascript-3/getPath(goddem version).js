let elem2 = document.querySelector('.container');
console.log(elem2);

function getPathV1(el){
    if(el.id && document.querySelectorAll(`#${el.id}`).length==1){
        console.log(`best path=#${el.id}`);
        return `#${el.id}`
    }
    if(el.className && (document.querySelectorAll(`.${el.className}`).length==1)){
        console.log(`optimal path=.${el.className}`);
        return `.${el.className}`;
    }
    let path="";
    let flag=true;
    while(flag){
        let i=0;
        let el2=el;
        while(el2.previousElementSibling){
            el2=el2.previousElementSibling;
            ++i;
        }
        path= i!=0 ? el.localName+`:nth-child(${i+1})`+path : el.localName+path;
        el=el.parentNode;
        if (document.querySelectorAll(path).length==1){flag=false}else{path=">"+path;}
    }
    return path;
}

console.log(document.querySelectorAll(getPathV1(elem2)));