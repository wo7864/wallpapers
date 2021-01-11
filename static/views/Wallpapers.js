import AbstractView from "./AbstractView.js";

export default class Wallpapers extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "wallpapers"
        this.path = '/';
    }

    async getHtml(views) {
        return `
            <h1>자 css 해보자~</h1>
            <ul>
                <li>
                    <a href="./ButtonAnimation1" data-link>ButtonAnimation1</a>
                </li>
                <li>
                    <a href="./LiquidButton" data-link>LiquidButton</a>
                </li>
                <li>
                    <a href="./NeonLightButton" data-link>NeonLightButton</a>
                </li>
                <li>
                    <a href="./PencilStroke" data-link>PencilStroke</a>
                </li>

            </ul>
        `;
    }
}