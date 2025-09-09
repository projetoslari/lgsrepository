// Filtro da barra de pesquisa
document.getElementById('searchBar').addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let images = document.querySelectorAll('.image');

    images.forEach(img => {
        let tag = img.getAttribute('data-tag').toLowerCase();
        img.style.display = tag.includes(query) ? "block" : "none";
    });
});

