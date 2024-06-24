import { renderEditForm } from '../render/words';
import { confirmEditWord, cancelEditWord, confirmDeleteWord, expandAdvancedForm, submitWordForm } from '../wordManagement';
// import { goToNextPage, goToPreviousPage, goToPage } from '../pagination';
import { setupIPAFields } from '.';

const wordForm = document.getElementById('wordForm');
const mobileButton = document.getElementById('mobileWordFormShow');

/**
 * Identify selector strings and handlers
 * @param {Function} when Passed from setupListeners, which listens to clicks on document.body
 */
export function handleWordFormClicks(when) {
  when('#expandAdvancedForm', expandAdvancedForm);
  when('#addWordButton', submitWordForm);
  when('#mobileWordFormShow', mobileToggleWordForm);
}

export function setupWordForm() {
  wordForm.addEventListener('submit', event => {
    // Allow semantic form and prevent it from getting submitted
    event.preventDefault();
    return false;
  });

  setupIPAFields(wordForm);
}

function mobileToggleWordForm() {
  if (mobileButton.innerText === '+') {
    wordForm.style.display = 'block';
    mobileButton.innerHTML = '&times;&#xFE0E;';
  } else {
    wordForm.style.display = '';
    mobileButton.innerHTML = '+';
  }
}

function showWordOptions(event) {
  event.target.parentElement.querySelector('.word-option-list').style.display = '';
}

function hideWordOptions(event) {
  if (!event.target.classList.contains('word-option-button')) {
    const allWordOptions = document.querySelectorAll('.word-option-list');
    Array.from(allWordOptions).forEach(wordOptionList => {
      wordOptionList.style.display = 'none';
    });
  }
}

export function handleWordOptionClicks(when) {
  when('.word-option-button', showWordOptions);
  when('*', hideWordOptions);
  when('.word-option-edit', renderEditForm);
  when('.word-option-delete', confirmDeleteWord);
}

export function handleWordEditFormButtonClicks(when) {
  when('.expand-advanced-form', expandAdvancedForm);
  when('.edit-save-changes', confirmEditWord);
  when('.edit-cancel', cancelEditWord);
}

// export function setupPagination() {
//   const nextButtons = document.getElementsByClassName('next-button'),
//     prevButtons = document.getElementsByClassName('prev-button'),
//     pageSelectors = document.getElementsByClassName('page-selector');

//   Array.from(nextButtons).forEach(nextButton => {
//     nextButton.removeEventListener('click', goToNextPage);
//     nextButton.addEventListener('click', goToNextPage);
//   });
//   Array.from(prevButtons).forEach(prevButton => {
//     prevButton.removeEventListener('click', goToPreviousPage);
//     prevButton.addEventListener('click', goToPreviousPage);
//   });

//   Array.from(pageSelectors).forEach(pageSelector => {
//     pageSelector.removeEventListener('change', goToPage);
//     pageSelector.addEventListener('change', goToPage);
//   });
// }
