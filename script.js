'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClassModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Open Modal function
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Close Modal function
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<btnsOpenModal.length; i++) {
    // Open modal in click button
    btnsOpenModal[i].addEventListener('click', openModal);

    // Close modal click with close icon
    btnClassModal.addEventListener('click', closeModal);
    
    // Close modal click with overlay
    overlay.addEventListener('click', closeModal);
}

// Close modal with Ese key press
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});