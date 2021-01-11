import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }

    async getHtml() {
        return `
            <h1>This is Posts</h1>
            <p>Hi there, this is your Dashboard.</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }

    async getCss(){

    }
}