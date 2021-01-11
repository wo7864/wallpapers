import AbstractView from "./AbstractView.js";

export default class LiquidButton extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "liquidButton"
        this.path = this.name;
    }

    async getHtml() {
        return `
        <a href="#">
            <span>Button</span>
            <div class="liquid"></div>
        </a>
        `;
    }


}