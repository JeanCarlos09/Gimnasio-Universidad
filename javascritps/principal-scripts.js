function toggleSidebar() {
    // Función para mostrar u ocultar la barra lateral
    const sidebar = document.getElementById('sidebar');
    // Obtiene el elemento con el ID 'sidebar'
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        // Si la barra lateral está visible, la oculta
    } else {
        sidebar.style.display = 'block';
        // Si la barra lateral está oculta, la muestra
    }
}

function navigateTo(url) {
    // Función para navegar a una nueva URL
    window.location.href = url;
    // Cambia la ubicación actual a la URL proporcionada
}
