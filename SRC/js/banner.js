const modal = document.getElementById('modal-banner');
const closeButton = document.querySelector('.close-button');


window.addEventListener('load', () => {
    modal.style.display = 'flex'; 
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});