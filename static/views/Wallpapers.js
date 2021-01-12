import AbstractView from "./AbstractView.js";

export default class Wallpapers extends AbstractView {
    constructor(params) {
        super(params);
        this.name = "wallpapers"
        this.path = '/';
    }

    async getHtml(views) {
        return `
        <section>
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>

            <div class="box">
                <div class="container">
                    <h1>WallPapers</h1>
                    <div class="content">

                    <a href="./ButtonAnimation1" data-link>Button Animation</a>
                    <a href="./LiquidButton" data-link>Liquid Button</a>
                    <a href="./NeonLightButton" data-link>Neon Light Button</a>
                    <a href="./PencilStroke" data-link>Pencil Stroke</a>
                    <a href="./IconHoverEffect3D" data-link>Icon Hover Effect3D</a>
                    </div>
                </div>
            </div>

        </section>
        `;
    }

    scripts = () => {
        const section = document.querySelector('section');
        const colors = document.querySelectorAll('.color');
        section.addEventListener('mousemove', (e)=>{
            const ratioX = e.clientX / window.innerWidth;
            const ratioY = e.clientY / window.innerHeight;
            colors.forEach(color => {
                color.style.transform = `translate(${ratioX*30}%, ${ratioY*30}%)`
                color.style.transform = `translate(${ratioX*30}%, ${ratioY*30}%)`
            })
        })

    }
}