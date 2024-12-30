'use strict';

// Variables
const popup = document.querySelector('.popup');

const btnClosePopup = document.querySelector('.popup__close-btn');
const tourSection = document.querySelector('.section-tours');

// Functions
const togglePopup = function () {
  popup.classList.toggle('active');
};

// Event loop

tourSection.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (!target.classList.contains('btn-toggle-popup')) return;
  togglePopup();
});

btnClosePopup.addEventListener('click', togglePopup);
