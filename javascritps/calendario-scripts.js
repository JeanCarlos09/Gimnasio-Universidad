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


let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.addEventListener('DOMContentLoaded', function() {
    showCalendar(currentMonth, currentYear);
    document.getElementById('event-form').addEventListener('submit', addEvent);
});

function showCalendar(month, year) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    document.getElementById('current-month-year').textContent = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        calendar.appendChild(createEmptyCell());
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendar.appendChild(createDayCell(day, month, year));
    }
}

function createEmptyCell() {
    const cell = document.createElement('div');
    cell.classList.add('empty');
    return cell;
}

function createDayCell(day, month, year) {
    const cell = document.createElement('div');
    cell.classList.add('day');
    cell.textContent = day;

    const events = getEventsForDate(day, month, year);
    if (events.length) {
        const eventList = document.createElement('ul');
        events.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.textContent = event.name;
            eventList.appendChild(eventItem);
        });
        cell.appendChild(eventList);
    }

    cell.addEventListener('click', function() {
        showEventDetails(day, month, year);
    });

    return cell;
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    showCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    showCalendar(currentMonth, currentYear);
}

function addEvent(event) {
    event.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const eventDatetime = document.getElementById('event-datetime').value;
    const eventDescription = document.getElementById('event-description').value;

    if (eventName && eventDatetime && eventDescription) {
        const eventDate = new Date(eventDatetime);
        const newEvent = {
            name: eventName,
            datetime: eventDatetime,
            description: eventDescription
        };

        const events = getEvents();
        events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(events));

        document.getElementById('event-name').value = '';
        document.getElementById('event-datetime').value = '';
        document.getElementById('event-description').value = '';

        showCalendar(currentMonth, currentYear);
        updateEventList();
    }
}

function getEvents() {
    return JSON.parse(localStorage.getItem('events')) || [];
}

function getEventsForDate(day, month, year) {
    const events = getEvents();
    return events.filter(event => {
        const eventDate = new Date(event.datetime);
        return eventDate.getDate() === day && eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
}

function showEventDetails(day, month, year) {
    const events = getEventsForDate(day, month, year);
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${event.name}</strong>
            <p>${new Date(event.datetime).toLocaleString()}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(listItem);
    });
}

function updateEventList() {
    const events = getEvents();
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${event.name}</strong>
            <p>${new Date(event.datetime).toLocaleString()}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(listItem);
    });
}

function deleteEvent(index) {
    const events = getEvents();
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    showCalendar(currentMonth, currentYear);
    updateEventList();
}

function showEventDetails(day, month, year) {
    const events = getEventsForDate(day, month, year);
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    events.forEach((event, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${event.name}</strong>
            <p>${new Date(event.datetime).toLocaleString()}</p>
            <p>${event.description}</p>
            <button onclick="deleteEvent(${index})">Eliminar</button>
        `;
        eventList.appendChild(listItem);
    });
}