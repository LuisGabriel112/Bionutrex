'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.grid1');

    const iso = new Isotope(grid, {
      itemSelector: '.element-item',
      layoutMode: 'fitRows' // O 'masonry', 'cellsByRow', etc.
    });

    // Opcional: Lógica para los botones de filtro
    const filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });

        // Opcional: Añadir clase 'activo' al botón seleccionado
        filterButtons.forEach(btn => btn.classList.remove('activo'));
        this.classList.add('activo');
      });
    });
  });