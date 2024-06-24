import { usePhondueDigraphs } from '../KeyboardFire/phondue/ipaField';
import { enableHotKeys } from '../hotkeys';
import { dismiss } from '../announcements';
import { handleDetailClicks, setupEditFormInteractions } from './details';
import { setupWordForm, handleWordFormClicks, handleWordOptionClicks, handleWordEditFormButtonClicks } from './words';
import { setupInfoButtons, handleIPAButtonClicks, handleMaximizeButtonClicks, handleInfoButtonClicks, handleHeaderButtonClicks } from './buttons';
import { setupTemplateChangeEvents, setupTemplateSelectOptions } from './settings';
import { setupSearchBarEvents } from './search';

export default function setupListeners() {
  document.body.addEventListener('click', handleClickEvents);

  setupEditFormInteractions();
  setupTemplateChangeEvents();
  setupSearchBarEvents();
  setupWordForm();

  setupInfoButtons();
  setupTemplateSelectOptions();
  if (window.settings.useHotkeys) {
    enableHotKeys();
  }
}

function handleClickEvents(event) {
  const when = (selector, cb) => {
    if (event.target.matches(selector)) {
      cb(event);
    }
  };

  handleClickAccouncementClose(when);
  handleHeaderButtonClicks(when);
  handleDetailClicks(when);
  handleWordFormClicks(when);
  handleWordOptionClicks(when);
  handleWordEditFormButtonClicks(when);
  handleIPAButtonClicks(when);
  handleMaximizeButtonClicks(when);
  handleInfoButtonClicks(when);
}

/**
 * Identify selector strings and handlers
 * @param {Function} when Passed from setupListeners, which listens to clicks on document.body
 */
function handleClickAccouncementClose(when) {
  when('.announcement .close-button', event => {
    dismiss(event.target.parentElement);
  });
}

export function setupIPAFields(parent) {
  if (window.settings.useIPAPronunciationField) {
    const ipaFields = (parent ?? document).querySelectorAll('.ipa-field');
    Array.from(ipaFields).forEach(field => {
      field.removeEventListener('keypress', usePhondueDigraphs);
      field.addEventListener('keypress', usePhondueDigraphs);
    });
  }
}
