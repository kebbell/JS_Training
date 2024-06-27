'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');


// BELOW FUNCTION WORKS WITH THE EVENT LISTENERS BELOW (BTNSOPENMODAL) //
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// BELOW FUNCTION WORKS WITH THE EVENT LISTENERS BELOW (BTNCLOSEMODAL & OVERLAY) //
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// BELOW FUNCTION WORKS WITH THE FUNCTIONS ABOVE //
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener ('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// USING A KEY WITH EVENT LISTENER TO DO AN ACTION
document.addEventListener('keydown', function(event) {

  if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });