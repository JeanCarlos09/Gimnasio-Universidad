// Función para alternar la visibilidad de la barra lateral
function toggleSidebar() {
  // Obtener el elemento de la barra lateral por su ID
  const sidebar = document.getElementById('sidebar');
  // Verificar si la barra lateral está visible o no
  if (sidebar.style.display === 'block') {
    // Si está visible, ocultarla
    sidebar.style.display = 'none';
  } else {
    // Si está oculta, mostrarla
    sidebar.style.display = 'block';
  }
}

// Función para navegar a una URL específica
function navigateTo(url) {
  // Redirigir a la URL proporcionada
  window.location.href = url;
}

// Función para realizar una compra de membresía
function comprar(membresia) {
  // Almacenar el tipo de membresía seleccionado en el almacenamiento local
  localStorage.setItem('membresiaSeleccionada', membresia);
  // Redirigir a la página de pagos
  window.location.href = 'pagos-index.html';
}
