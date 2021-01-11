import AbstractView from "./AbstractView.js";

export default class PencilStroke extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "PencilStroke"
        this.path = this.name;
    }

    async getHtml() {
        return `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
        >
        <div class="stroke">
        
        </div>
        
        `;
    }


}