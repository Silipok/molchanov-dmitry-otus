import {html,LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'

class treeElement extends LitElement{
    static get properties(){ return {prop: {type: String}}}

    constructor(){
        super();
        this.prop='{}'
    }

    parcer() {
        //парсим json в obj
        let obj = JSON.parse(this.prop);
        let templ = [];//store for DOM nodes
        templ.push(html`<div class=el-${obj.id}>Hi I'm ${obj.id} component and i'm general parent</div>`);
        while (obj.hasOwnProperty('items')) {//do parcing while tree obj has nodes with items props, search in deep
            let i = 0;
            while (obj.items.length - i) {//find all children, search in width
                templ.push(this.createChildren(obj.items[i], obj.id));
                i++
            }
            i = 0;
            obj.items.forEach((el) => {//go to next node with children
                if (el.hasOwnProperty('items') && i == 0) {
                    obj = el;
                    i++
                }
                if (i == 0) obj = obj.items[0];//guard for recursion call
            });

        }
        return templ;
    }
    createChildren=(obj,id) =>
        html`<div class=el-${obj.id}>Hi I'm ${obj.id} component my parent is ${id}-element</div>`;

    render(){
        return html`<div>${this.parcer(this.prop)}</div>`
    }
}

customElements.define('create-tree',treeElement);