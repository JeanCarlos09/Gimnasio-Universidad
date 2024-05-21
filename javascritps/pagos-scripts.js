// Función para alternar la visibilidad de la barra lateral
function toggleSidebar() {
    // Obtener el elemento de la barra lateral por su ID
    const sidebar = document.getElementById('sidebar');
    // Verificar si la barra lateral está visible o no
    if (sidebar.style.display === 'block') {
        // Si está visible, ocultarla
        sidebar.style.display = 'none';
    } else {
        // Si no está visible, mostrarla
        sidebar.style.display = 'block';
    }
}

// Función para navegar a una URL específica
function navigateTo(url) {
    // Redirigir a la URL especificada
    window.location.href = url;
}

// Función para mostrar información de pago según el método seleccionado
function mostrarPagos() {
    // Obtener el elemento que mostrará la información de pago
    const paymentInfo = document.getElementById('payment-info');
    // Obtener el valor del método de pago seleccionado
    const paymentType = document.querySelector('input[name="payment-method"]:checked').value;
    // Variable para almacenar la información a mostrar
    let info = '';

    // Evaluar el tipo de método de pago seleccionado
    switch (paymentType) {
        case 'credit-card':
            // Construir el formulario para pago con tarjeta de crédito/débito
            info = `
            <div class="form-group">
                <label class="tarj" for="tarjeta">Número de Tarjeta:</label>
                <input type="text" id="tarjeta" name="tarjeta" placeholder="Número de Tarjeta" oninput="validarNumero(this)">
                <span class="error-message" style="font-size: 12px; color: red;"></span>
            </div>
            <div class="form-group">
                <label class="tarj" for="Titular">Nombre del Titular:</label>
                <input type="text" id="Titular" name="Titular" placeholder="Nombre del Titular">
                <span class="error-message" style="font-size: 12px; color: red;"></span>
            </div>
            <div class="form-group">
                <label class="tarj" for="Expira">Expira:</label>
                <input type="month" id="Expira" name="Expira" placeholder="MM/YY">
                <span class="error-message" style="font-size: 12px; color: red;"></span>
            </div>
            <div class="form-group">
                <label class="tarj" for="Codigo">Código de control:</label>
                <input type="text" id="Codigo" name="Codigo" placeholder="Código de control" oninput="validarNumero(this)">
                <span class="error-message" style="font-size: 12px; color: red;"></span>
            </div>
            <button onclick="validarFormulario()">Comprar</button>
            `;
            break;
        case 'paypal':
            // Construir el formulario para pago con PayPal
            info = `
            <div class="form-group">
                <label class="tarj" for="Correo">Correo Electrónico:</label>
                <input type="email" id="Correo" name="Correo" placeholder="Correo Electrónico">
                <span class="error-message" style="font-size: 12px; color: red;"></span>
            </div>
            <div class="form-group">
                <label class="tarj" for="Contraseña">Contraseña:</label>
                <input type="password" id="Contraseña" name="Contraseña" placeholder="Contraseña">
                <span class="error-message" style="font-size: 12px; color: red;"></span>
            </div>
            <button onclick="validarFormulario()">Comprar</button>
            `;
            break;
        default:
            // Mensaje para cuando no se ha seleccionado ningún método de pago
            info = '<p>Seleccione un método de pago para ver los detalles.</p>';
    }

    // Mostrar la información de pago en el contenedor correspondiente
    paymentInfo.innerHTML = info;
}


// Función para validar el formulario de pago
function validarFormulario() {
    // Obtener el tipo de método de pago seleccionado
    const paymentType = document.querySelector('input[name="payment-method"]:checked').value;
    // Variable para indicar si el formulario es válido
    let isValid = true;

    // Validar el formulario según el tipo de método de pago
    if (paymentType === 'credit-card') {
        // Obtener los campos del formulario para pago con tarjeta de crédito/débito
        const tarjeta = document.getElementById('tarjeta');
        const titular = document.getElementById('Titular');
        const expira = document.getElementById('Expira');
        const codigo = document.getElementById('Codigo');

        // Validación de campos obligatorios y formato
        if (tarjeta.value.trim() === '') {
            mostrarError(tarjeta, 'Este campo es obligatorio.');
            isValid = false;
        } else if (!/^\d{16}$/.test(tarjeta.value)) {
            mostrarError(tarjeta, 'Número de tarjeta inválido. Deben ser 16 dígitos.');
            isValid = false;
        } else {
            limpiarError(tarjeta);
        }

        if (titular.value.trim() === '') {
            mostrarError(titular, 'Este campo es obligatorio.');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(titular.value)) {
            mostrarError(titular, 'El nombre del titular solo debe contener letras.');
            isValid = false;
        } else {
            limpiarError(titular);
        }

        if (expira.value.trim() === '') {
            mostrarError(expira, 'Este campo es obligatorio.');
            isValid = false;
        } else {
            limpiarError(expira);
        }

        if (codigo.value.trim() === '') {
            mostrarError(codigo, 'Este campo es obligatorio.');
            isValid = false;
        } else if (!/^\d{3,4}$/.test(codigo.value)) {
            mostrarError(codigo, 'Código de control inválido. Deben ser 3 o 4 dígitos.');
            isValid = false;
        } else {
            limpiarError(codigo);
        }

    } else if (paymentType === 'paypal') {
        // Obtener los campos del formulario para pago con PayPal
        const correo = document.getElementById('Correo');
        const contraseña = document.getElementById('Contraseña');

        // Validación de campos obligatorios y formato
        if (correo.value.trim() === '') {
            mostrarError(correo, 'Este campo es obligatorio.');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
            mostrarError(correo, 'Correo electrónico inválido.');
            isValid = false;
        } else {
            limpiarError(correo);
        }

        if (contraseña.value.trim() === '') {
            mostrarError(contraseña, 'Este campo es obligatorio.');
            isValid = false;
        } else {
            limpiarError(contraseña);
        }
    }

    // Si el formulario es válido, enviarlo
    if (isValid) {
        form.submit(); // Enviar el formulario
    }
}


// Función para mostrar un mensaje de error junto al elemento dado
function mostrarError(element, message) {
    // Obtener el elemento siguiente al elemento dado
    const errorMessage = element.nextElementSibling;
    // Establecer el mensaje de error
    errorMessage.textContent = message;
}

// Función para limpiar el mensaje de error junto al elemento dado
function limpiarError(element) {
    // Obtener el elemento siguiente al elemento dado
    const errorMessage = element.nextElementSibling;
    // Limpiar el mensaje de error
    errorMessage.textContent = '';
}

// Función para validar un campo de entrada numérica
function validarNumero(input) {
    // Obtener el valor del campo y eliminar todos los caracteres que no sean dígitos
    const value = input.value.replace(/\D/g, '');
    // Establecer el valor limpio en el campo de entrada
    input.value = value;
}














  function mostrarInfoMembresia() {
    const membershipInfo = document.getElementById('membership-info');
    const membershipType = document.getElementById('membership-type').value;
    let info = '';

    switch (membershipType) {
        case 'day':
            info = `
                <img src="../imagenes/membresia-img/DIA.png" alt="Membresía por Día">
                <ul>
                    <h6 class="text"><b>Beneficios </b></h6>
                    <h6><b>- Acceso Ilimitado a Equipos de Gimnasio</b></h6>
                    <h6><b>- Sin acceso a inscribirse a clases Grupales</b></h6>
                    <hr class="divider">
                    <h6 class="text"><b>Descripción</b></h6>
                    <h6><b>Ideal para aquellos que desean acceso temporal y flexible a las instalaciones. Perfecta para visitantes ocasionales o personas que desean probar los servicios antes de comprometerse a un plan a largo plazo.</b></h6>
                    <hr class="divider">
                    <h4 class="text1"><b>Costo: $5</b></h4>
                </ul>
            `;
            break;
        case 'month':
            info = `
                <img src="../imagenes/membresia-img/mensual.png" alt="Membresía por Mes">
                <ul>
                    <h6 class="text"><b>Beneficios </b></h6>
                    <h6><b>- Acceso Ilimitado a Equipos de Gimnasio</b></h6>
                    <h6><b>- Acceso a inscribirse a Clases Grupales</b></h6>
                    <h6><b>- Uso de la Piscina y Sauna</b></h6>
                    <h6><b>- Descuento en Eventos Especiales (5%)</b></h6>
                    <hr class="divider">
                    <h6 class="text"><b>Descripción</b></h6>
                    <h6><b>Una opción conveniente para aquellos que buscan un compromiso a corto plazo. Ideal para personas que prefieren evaluar su uso mes a mes.</b></h6>
                    <hr class="divider">
                    <h4 class="text1"><b>Costo: $20</b></h4>
                </ul>
            `;
            break;
        case 'quarter':
            info = `
                <img src="../imagenes/membresia-img/trimestral.png" alt="Membresía Trimestral">
                <ul>
                    <h6 class="text"><b>Beneficios </b></h6>
                    <h6><b>- Acceso Ilimitado a Equipos de Gimnasio</b></h6>
                    <h6><b>- Acceso a inscribirse a Clases Grupales</b></h6>
                    <h6><b>- Uso de la Piscina y Sauna</b></h6>
                    <h6><b>- Descuento en Eventos Especiales (10%)</b></h6>
                    <h6><b>- Una Sesión Gratuita con un Entrenador Personal</b></h6>
                    <hr class="divider">
                    <h6 class="text"><b>Descripción</b></h6>
                    <h6><b>Un plan intermedio que ofrece un equilibrio entre compromiso y flexibilidad. Excelente para aquellos que buscan mantener un régimen de ejercicios durante un período más largo.</b></h6>
                    <hr class="divider">
                    <h4 class="text1"><b>Costo: $50</b></h4>
                </ul>
            `;
            break;
        case 'semester':
            info = `
                <img src="../imagenes/membresia-img/semestral.png" alt="Membresía Semestral">
                <ul>
                    <h6 class="text"><b>Beneficios </b></h6>
                    <h6><b>- Acceso Ilimitado a Equipos de Gimnasio</b></h6>
                    <h6><b>- Acceso a inscribirse a Clases Grupales</b></h6>
                    <h6><b>- Uso de la Piscina y Sauna</b></h6>
                    <h6><b>- Descuento en Eventos Especiales (15%)</b></h6>
                    <h6><b>- Tres Sesiones Gratuitas con un Entrenador Personal</b></h6>
                    <h6><b>- Acceso Prioritario a Nuevas Clases</b></h6>
                    <hr class="divider">
                    <h6 class="text"><b>Descripción</b></h6>
                    <h6><b>Ideal para usuarios dedicados que desean un plan a mediano plazo. Ofrece beneficios adicionales y mayor valor en comparación con las opciones a corto plazo.</b></h6>
                    <hr class="divider">
                    <h4 class="text1"><b>Costo: $60</b></h4>
                </ul>
            `;
            break;
        case 'year':
            info = `
                <img src="../imagenes/membresia-img/anual.png" alt="Membresía Anual">
                <ul>
                    <h6 class="text"><b>Beneficios </b></h6>
                    <h6><b>- Acceso Ilimitado a Equipos de Gimnasio</b></h6>
                    <h6><b>- Acceso a inscribirse a Clases Grupales</b></h6>
                    <h6><b>- Uso de la Piscina y Sauna</b></h6>
                    <h6><b>- Descuento en Eventos Especiales (20%)</b></h6>
                    <h6><b>- Seis Sesiones Gratuitas con un Entrenador Personal</b></h6>
                    <h6><b>- Acceso Prioritario a Nuevas Clases</b></h6>
                    <h6><b>- Descuento del 10% en Productos de la Tienda del Gimnasio</b></h6>
                    <hr class="divider">
                    <h6 class="text"><b>Descripción</b></h6>
                    <h6><b>Ideal para usuarios dedicados que desean un plan a largo plazo. Ofrece beneficios adicionales y mayor valor en comparación con las opciones a corto plazo.</b></h6>
                    <hr class="divider">
                    <h4 class="text1"><b>Costo: $350</b></h4>
                </ul>
            `;
            break;
        default:
            info = '<p>Seleccione un tipo de membresía para ver los detalles.</p>';
    }

    membershipInfo.innerHTML = info;
}

function guardarSeleccion() {
    const membershipSelect = document.getElementById('membership-type');
    const membershipType = membershipSelect.value;
    localStorage.setItem('membresiaSeleccionada', membershipType);
    mostrarInfoMembresia(membershipType);
}

window.onload = function() {
    const membershipSelect = document.getElementById('membership-type');
    const membershipType = localStorage.getItem('membresiaSeleccionada');

    // Mostrar la información de la membresía seleccionada previamente, si existe
    if (membershipType) {
        membershipSelect.value = membershipType; // Selecciona la opción en el select
        mostrarInfoMembresia(membershipType);
    } else {
        mostrarInfoMembresia('');
    }
};
