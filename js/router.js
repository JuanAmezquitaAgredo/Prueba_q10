const routes = {
    "/": "pages/home.html",
    "/partners": "pages/partners.html",
    "/contact": "pages/contact.html"
};

function navigateTo(event, path) {
    event.preventDefault();
    window.history.pushState({}, "", path);
    loadContent(path);
}

function loadContent(path) {
    const contentPath = routes[path] || routes["/"];
    fetch(contentPath)
        .then(response => response.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
        })
        .catch(error => console.error("Error cargando la página:", error));
}

window.onpopstate = () => {
    loadContent(window.location.pathname);
};

document.addEventListener("DOMContentLoaded", () => {
    loadContent(window.location.pathname);
});
