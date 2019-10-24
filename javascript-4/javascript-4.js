import {html, render} from 'https://unpkg.com/lit-html?module'
//ф-ция для парсинга и отрисовки дерева
function parcer(str=`{}`) {
    //парсим json в obj
    let obj=str;
    try {
        obj = JSON.parse(str);
    }catch (e) {
        return render(html`<h1>Oops</h1><h2>${e.value}</h2>`)
    }
    let templ = [];//store for DOM nodes
    templ.push(html`<div class=el-${obj.id}>Hi I'm ${obj.id} component and i'm general parent</div>`);
    while(obj.hasOwnProperty('items')){//do parcing while tree obj has nodes with items props, search in deep
        let i=0;
        while(obj.items.length-i) {//find all children, search in width
            templ.push(createChildren(obj.items[i], obj.id));
            i++
        }
        i=0;
        obj.items.forEach((el)=>{//go to next node with children
            if (el.hasOwnProperty('items') && i==0){ obj=el;i++}
            if(i==0) obj=obj.items[0];//guard for recursion call
        });

    }
 render(html`${templ}`,document.querySelector('.root'));
}
let createChildren=(obj,id) =>
    html`<div class=el-${obj.id}>Hi I'm ${obj.id} component my parent is ${id}-element</div>`;
let data=`{
"id": 1,
"items": [{
"id": 2,
"items": [{ "id": 3, "items": [{"id": 6}]},
        { "id": 4 },
        { "id": 5 }]
}]
}`;
parcer(data);
