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


// Open SideMenu
document.getElementById('hamburger').addEventListener('click', function(event) {
    event.stopPropagation(); 
    sideMenu.classList.toggle('open');
});

// Close sideMenu when the user clicks
document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('sideMenu');
    const hamburger = document.getElementById('hamburger');
    
    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});

// Close sideMenu when select
const menuLinks = document.querySelectorAll('#sideMenu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.classList.remove('open');
    });
});

