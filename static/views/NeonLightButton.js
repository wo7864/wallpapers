import AbstractView from "./AbstractView.js";

export default class NeonLightButton extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "neonLightButton"
        this.path = this.name;
    }

    async getHtml() {
        return `
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Neon Button
        </a>
        `;
    }


}