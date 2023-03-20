'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClassModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for(let i=0; i<btnsOpenModal.length; i++) {
    // Open modal in click button
    btnsOpenModal[i].addEventListener(
        'click',
        function() {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
    );

    // Close modal click with close icon
    btnClassModal.addEventListener(
        'click', 
        function() {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    );
    
    // Close modal click with overlay
    overlay.addEventListener(
        'click',
        function() {    
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    );
}