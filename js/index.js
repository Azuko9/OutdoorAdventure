const links = document.querySelectorAll("nav li");

navB.addEventListener("click", () => {
    nav.classList.toggle("activeburger");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("activeburger");
    });
});