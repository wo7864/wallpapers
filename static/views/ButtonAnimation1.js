import AbstractView from "./AbstractView.js";

export default class ButtonAnimation1 extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "buttonAnimation1"
        this.path = this.name;
    }

    async getHtml() {
        return `
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Button
            </a>
        `;
    }


}