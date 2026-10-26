function showPage(pageId) {

    // Nascondi tutte le pagine
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Mostra la pagina selezionata
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Torna all'inizio della pagina
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
