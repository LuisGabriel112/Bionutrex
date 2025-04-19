const activoTipo = document.getElementById('activo-tipo');
const hijoTipo = document.getElementById('hijo-tipo');
const activoFuncion = document.getElementById('activo-funcion');
const hijoFuncion = document.getElementById('hijo-funcion');
const activoObjetivo = document.getElementById('activo-objetivo');
const hijoObjetivo = document.getElementById('hijo-objetivo');

function toggleMenu(activo, hijo) {
    activo.addEventListener('click', () => {
        const isHidden = hijo.classList.contains('hidden');
        if (isHidden) {
            hijo.classList.remove('hidden');
            activo.querySelector('span b').textContent = '-';
        } else {
            hijo.classList.add('hidden');
            activo.querySelector('span b').textContent = '+';
        }
    });
}

toggleMenu(activoTipo, hijoTipo);
toggleMenu(activoFuncion, hijoFuncion);
toggleMenu(activoObjetivo, hijoObjetivo);