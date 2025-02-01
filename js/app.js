document.addEventListener("DOMContentLoaded", () => {
    console.log("SPA cargada correctamente");

    document.addEventListener("click", (event) => {
        if (event.target.matches(".cta-button")) {
            event.preventDefault();
            alert("¡Gracias por tu interés en ser un Partner!");
        }
    });

    const observer = new MutationObserver(() => {
        console.log("Contenido actualizado en #app");
    });

    observer.observe(document.getElementById("app"), { childList: true, subtree: true });
});
