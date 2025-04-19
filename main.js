const filterButtons = document.querySelectorAll('.filter-button-group button');
const gridContainer = document.querySelector('.grid1');
const items = document.querySelectorAll('.element-item');
const activeClass = 'active';

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');

        // Remover la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove(activeClass));
        // Agregar la clase 'active' al botón clickeado
        this.classList.add(activeClass);

        items.forEach(item => {
            if (filterValue === 'all' || item.dataset.category === filterValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Mostrar todos los elementos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    items.forEach(item => item.classList.remove('hidden'));
});