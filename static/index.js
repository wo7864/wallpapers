import Wallpapers from "./views/Wallpapers.js";
import ButtonAnimation1 from "./views/ButtonAnimation1.js";
import LiquidButton from "./views/LiquidButton.js";
import NeonLightButton from "./views/NeonLightButton.js";
import PencilStroke from "./views/PencilStroke.js";
import IconHoverEffect3D from './views/IconHoverEffect3D.js'
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const router = async () => {
    const routes = [
        { path: "/", view: Wallpapers },
        { path: "/ButtonAnimation1", view: ButtonAnimation1 },
        { path: "/LiquidButton", view: LiquidButton },
        { path: "/NeonLightButton", view: NeonLightButton },
        { path: "/PencilStroke", view: PencilStroke },
        { path: "/IconHoverEffect3D", view: IconHoverEffect3D },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    /* Route not found - return first route OR a specific "not-found" route */
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }
    const view = new match.route.view(getParams(match));
    const link = document.querySelector("#detail-css");

    document.querySelector("#detail-css").href = `/static/style/${view.name}.css`;
    document.querySelector("#app").innerHTML = await view.getHtml();
}

const routeAnimation = () => {
    const box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
    setTimeout(()=> {
        box.style.opacity=1;
    },100)
    setTimeout(()=> {
        box.style.opacity=0;
    },700)
    setTimeout(()=> {
        document.body.removeChild(box);
    },1300)
}


const navigateTo = (url) => {
    console.log(url);
    history.pushState(null, null, url);
    routeAnimation();
    setTimeout(()=> {
        router();
    },600)
};
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});

window.addEventListener("popstate", (e) => {
    routeAnimation();
    setTimeout(()=> {
        router();
    },500)});

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};


