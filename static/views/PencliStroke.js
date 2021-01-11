import AbstractView from "./AbstractView.js";

export default class PencliStroke extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "buttonAnimation1"
        this.path = this.name;
    }

    async getHtml() {
        return `
        <div class="stroke">
        
        </div>
        
        `;
    }


}