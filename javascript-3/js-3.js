let elem = document.querySelector('#find');
console.log(elem);


function getPath(el){
    let path="";
     while(el.localName!="body"){
         path=el.localName+path;
         let el2=el;
         while(el2.previousElementSibling){
             el2=el2.previousElementSibling;
             path=el2.localName+"+"+path;
         }
         path=">"+path;
         el=el.parentNode;
     }
     return path='body'+path;
}

console.log(getPath(elem));