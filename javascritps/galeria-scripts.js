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



function openModal(imgElement) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    modalCaption.textContent = imgElement.alt;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

