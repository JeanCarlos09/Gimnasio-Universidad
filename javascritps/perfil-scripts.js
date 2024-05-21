function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

function navigateTo(url) {
    window.location.href = url;
}



function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function changeProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm('profile-form');
});

document.getElementById('phone-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm('phone-form');
});

document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm('address-form');
});

function validateForm(formId) {
    const form = document.getElementById(formId);
    let isValid = true;

    form.querySelectorAll('input').forEach(input => {
        const errorElement = input.nextElementSibling;
        if (input.value.trim() === '') {
            errorElement.textContent = 'Este campo es obligatorio.';
            errorElement.style.display = 'block';
            isValid = false;
        } else {
            errorElement.style.display = 'none';
        }
    });

    if (isValid) {
        alert('Formulario guardado exitosamente');
    }
}

window.onload = function() {
    showSection('info-section'); // Muestra la sección de información personal por defecto
};
