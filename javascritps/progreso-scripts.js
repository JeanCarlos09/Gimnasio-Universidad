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


// Código JavaScript para inicializar la gráfica
document.getElementById('new-goal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const goalName = document.getElementById('goal-name').value;
    const goalTarget = document.getElementById('goal-target').value;
    if (goalName && goalTarget) {
        const newGoal = document.createElement('li');
        newGoal.innerHTML = `${goalName} - ${goalTarget} - <span class="not-started">No iniciado</span>
        <button onclick="iniciarMeta(this)">Iniciar</button>
        <button onclick="completarMeta(this)">Completar</button>
        <button onclick="cancelarMeta(this)">Cancelar</button>`;
        document.getElementById('nuevas-metas').appendChild(newGoal);
        document.getElementById('goal-name').value = '';
        document.getElementById('goal-target').value = '';
    }
});

function iniciarMeta(button) {
    const li = button.parentNode;
    li.querySelector('span').className = 'in-progress';
    li.querySelector('span').textContent = 'En progreso';
}

function completarMeta(button) {
    const li = button.parentNode;
    li.querySelector('span').className = 'completed';
    li.querySelector('span').textContent = 'Completada';
    li.querySelectorAll('button').forEach(btn => btn.remove()); // Eliminar los botones
    document.getElementById('metas-alcanzadas').appendChild(li);
    actualizarMetasCompletadas();
}

function cancelarMeta(button) {
    const li = button.parentNode;
    li.remove();
}

function actualizarMetasCompletadas() {
    const metasCompletadas = document.getElementById('metas-completadas');
    const metasAlcanzadas = document.getElementById('metas-alcanzadas').children.length;
    metasCompletadas.textContent = metasAlcanzadas;
}

document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const activityName = document.getElementById('activity-name').value;
    const activityDuration = document.getElementById('activity-duration').value;
    const activityCalories = document.getElementById('activity-calories').value;
    if (activityName && activityDuration && activityCalories) {
        const newActivity = document.createElement('li');
        const now = new Date();
        newActivity.innerHTML = `
            <div>
                <strong>${activityName}</strong>
                <p>${now.toLocaleString()}</p>
            </div>
            <div>
                <span>${activityDuration} minutos</span>
                <span>${activityCalories} calorías</span>
            </div>
        `;
        document.getElementById('registro-actividades').appendChild(newActivity);
        document.getElementById('activity-name').value = '';
        document.getElementById('activity-duration').value = '';
        document.getElementById('activity-calories').value = '';

        // Actualizar estadísticas
        actualizarEstadisticas(parseInt(activityDuration), parseInt(activityCalories));
    }
});

function actualizarEstadisticas(duracion, calorias) {
    const tiempoEjercicio = document.getElementById('tiempo-ejercicio');
    const caloriasQuemadas = document.getElementById('calorias-quemadas');
    const [horas, minutos] = tiempoEjercicio.textContent.split(' ');
    let totalMinutos = parseInt(horas) * 60 + parseInt(minutos.replace('m', '')) + duracion;
    let nuevasHoras = Math.floor(totalMinutos / 60);
    let nuevosMinutos = totalMinutos % 60;
    tiempoEjercicio.textContent = `${nuevasHoras}h ${nuevosMinutos}m`;
    caloriasQuemadas.textContent = parseInt(caloriasQuemadas.textContent) + calorias;
}
