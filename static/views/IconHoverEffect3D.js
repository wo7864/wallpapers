import AbstractView from "./AbstractView.js";

export default class IconHoverEffect3D extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "IconHoverEffect3D"
        this.path = this.name;
    }

    async getHtml() {
        return `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" >
        <ul>
            <li>
                <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
        `;
    }


}