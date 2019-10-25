import {html, LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'

class superTreeElement extends LitElement {
    static get properties() {
        return {prop: {type: String}}
    }

    constructor() {
        super();
        this.prop = '{}'
    }

    createTree= (obj, lngth = 1) => {
        debugger
        let i = 0;
        while (obj[i]) {
            debugger
            if(obj[i].hasOwnProperty('items')){
            for (; i < lngth; i++) {
                //if(obj[i].hasOwnProperty('items')) this.creteTree(obj[i].items,obj.items.length);
                return html`<div>Hi I'm el with id=${obj[i].id} ${obj[i].hasOwnProperty('items') ? this.createTree(obj[i].items, obj[i].items.length) : this.createTree(obj[i].items)} </div>`;
                //this.createTree(obj[i].items, obj[i].items.length);
                debugger
            }}else{return html`<div>Hi i'm last element in my branch my id=${obj[0].id}</div>`}
        }
    };

    render() {
        let el = JSON.parse(this.prop);
        //this.createTree([el]);
        debugger
        return html`${this.createTree([el])}`
    }
}

customElements.define('create-super-tree',superTreeElement)