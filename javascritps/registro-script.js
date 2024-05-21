// Seleccionar el formulario
const form = document.getElementById('register-form');

// Agregar un evento de "submit" al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  // Validar los campos del formulario
  let isValid = true;

// Nombre
const nameInput = document.getElementById('name');
const nameError = document.querySelector('#name + .error-message');
const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/; // Expresión regular para validar que solo contenga letras y espacios
if (nameInput.value.trim() === '') {
  nameError.textContent = 'El nombre es obligatorio.';
  isValid = false;
} else if (!nameRegex.test(nameInput.value.trim())) { // Verificar si el nombre contiene números
  nameError.textContent = 'El nombre no puede contener números.';
  isValid = false;
} else {
  nameError.textContent = '';
}

// Apellido
const surnameInput = document.getElementById('surname');
const surnameError = document.querySelector('#surname + .error-message');
const surnameRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/; // Expresión regular para validar que solo contenga letras y espacios
if (surnameInput.value.trim() === '') {
  surnameError.textContent = 'El apellido es obligatorio.';
  isValid = false;
} else if (!surnameRegex.test(surnameInput.value.trim())) { // Verificar si el apellido contiene números
  surnameError.textContent = 'El apellido no puede contener números.';
  isValid = false;
} else {
  surnameError.textContent = '';
}

// Correo
// Seleccionar el input del correo electrónico
const emailInput = document.getElementById('email');
// Seleccionar el mensaje de error para el correo electrónico
const emailError = document.querySelector('#email + .error-message');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Expresión regular para validar el formato del correo electrónico
if (emailInput.value.trim() === '') { // Verificar si el campo está vacío
  emailError.textContent = 'El correo electrónico es obligatorio.'; // Mostrar mensaje de error
  isValid = false; // Marcar como no válido
} else if (!emailRegex.test(emailInput.value.trim())) { // Verificar si el correo electrónico sigue el formato correcto
  emailError.textContent = 'El correo electrónico no es válido.'; // Mostrar mensaje de error
  isValid = false; // Marcar como no válido
} else {
  emailError.textContent = ''; // Borrar mensaje de error
}

// Contraseña
// Seleccionar el input de la contraseña
const passwordInput = document.getElementById('password');
// Seleccionar el mensaje de error para la contraseña
const passwordError = document.querySelector('#password + .error-message');
if (passwordInput.value.trim() === '') { // Verificar si el campo está vacío
  passwordError.textContent = 'La contraseña es obligatoria.'; // Mostrar mensaje de error
  isValid = false; // Marcar como no válido
} else {
  passwordError.textContent = ''; // Borrar mensaje de error
}

// Confirmar contraseña
// Seleccionar el input para confirmar la contraseña
const confirmPasswordInput = document.getElementById('confirm-password');
// Seleccionar el mensaje de error para confirmar la contraseña
const confirmPasswordError = document.querySelector('#confirm-password + .error-message');
if (confirmPasswordInput.value.trim() === '') { // Verificar si el campo está vacío
  confirmPasswordError.textContent = 'Confirmar contraseña es obligatorio.'; // Mostrar mensaje de error
  isValid = false; // Marcar como no válido
} else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) { // Verificar si las contraseñas coinciden
  confirmPasswordError.textContent = 'Las contraseñas no coinciden.'; // Mostrar mensaje de error
  isValid = false; // Marcar como no válido
} else {
  confirmPasswordError.textContent = ''; // Borrar mensaje de error
}
  // Si todos los campos son válidos, enviar el formulario
  if (isValid) {
    form.submit(); // Enviar el formulario
    window.location.href = 'inicio-index.html';
  }
});
