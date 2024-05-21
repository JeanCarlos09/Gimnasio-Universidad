// Seleccionar el formulario de inicio de sesión
const loginForm = document.getElementById('login-form');

// Agregar un evento de "submit" al formulario
loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

      // Validar los campos del formulario
      let isValid = true;

      // Validar correo electrónico

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
      // Si todos los campos son válidos es redirijido a la interfaz pricipal
      if (isValid) {
        window.location.href = 'principal-index.html'; // Redirigir a principal-index.html
      }
    }
);


