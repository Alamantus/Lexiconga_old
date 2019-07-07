import md from 'marked';
import { removeTags, slugify } from '../helpers';
import { getWordsStats, getHomonymnNumber, hasToken } from './utilities';
import { getMatchingSearchWords, highlightSearchTerm, getSearchFilters, getSearchTerm } from './search';
import { showSection } from './displayToggles';
import {
  setupSearchFilters,
  setupWordOptionButtons,
  setupPagination,
  setupWordOptionSelections,
  setupWordEditFormButtons,
  setupMaximizeModal,
  setupInfoModal,
  setupIPATable,
  setupIPAFields
} from './setupListeners';
import { getPaginationData } from './pagination';
import { getOpenEditForms, translateOrthography, parseReferences } from './wordManagement';
import { renderAd } from './ads';
import ipaTableFile from './KeyboardFire/phondue/ipa-table.html';
import { getPublicLink } from './account/utilities';

export function renderAll() {
  renderTheme();
  renderDictionaryDetails();
  renderPartsOfSpeech();
  renderWords();
}

export function renderTheme() {
  const { theme } = window.currentDictionary.settings;
  document.body.id = theme + 'Theme';
}

export function renderDictionaryDetails() {
  renderName();

  const tabs = document.querySelectorAll('#detailsSection nav li');
  const shownTab = Array.from(tabs).find(tab => tab.classList.contains('active'));
  if (shownTab) {
    const tabName = shownTab.innerText.toLowerCase();
    showSection(tabName);
  }
}

export function renderName() {
  const dictionaryName = removeTags(window.currentDictionary.name) + ' ' + removeTags(window.currentDictionary.specification);
  const name = document.getElementById('dictionaryName');
  name.innerHTML = dictionaryName;
  const isPublic = hasToken() && window.currentDictionary.settings.isPublic;
  const shareLinkElement = document.getElementById('dictionaryShare');

  if (isPublic && !shareLinkElement) {
    const shareLink = document.createElement('a');
    shareLink.id = 'dictionaryShare';
    shareLink.classList.add('button');
    shareLink.style.float = 'right';
    shareLink.href = getPublicLink();
    shareLink.target = '_blank';
    shareLink.title = 'Public Link to Dictionary';
    shareLink.innerHTML = '&#10150;';
    name.parentElement.insertBefore(shareLink, name);
  } else if (isPublic && shareLinkElement) {
    shareLinkElement.href = getPublicLink();
  } else if (!isPublic && shareLinkElement) {
    shareLinkElement.parentElement.removeChild(shareLinkElement);
  }
}

export function renderDescription() {
  const descriptionHTML = md(parseReferences(removeTags(window.currentDictionary.description)));

  document.getElementById('detailsPanel').innerHTML = '<div class="content">' + descriptionHTML + '</div>';
}

export function renderDetails() {
  const { partsOfSpeech, alphabeticalOrder } = window.currentDictionary;
  const { phonology, phonotactics, orthography, grammar } = window.currentDictionary.details;
  const partsOfSpeechHTML = `<p><strong>Parts of Speech</strong><br>${partsOfSpeech.map(partOfSpeech => '<span class="tag">' + partOfSpeech + '</span>').join(' ')}</div>`;
  const alphabeticalOrderHTML = `<p><strong>Alphabetical Order</strong><br>${
    (alphabeticalOrder.length > 0 ? alphabeticalOrder : ['English Alphabet']).map(letter => `<span class="tag">${letter}</span>`).join(' ')
    }</div>`;
  const generalHTML = `<h3>General</h3>${partsOfSpeechHTML}${alphabeticalOrderHTML}`;

  const { consonants, vowels, blends } = phonology
  const consonantHTML = `<p><strong>Consonants</strong><br>${consonants.map(letter => `<span class="tag">${letter}</span>`).join(' ')}</p>`;
  const vowelHTML = `<p><strong>Vowels</strong><br>${vowels.map(letter => `<span class="tag">${letter}</span>`).join(' ')}</p>`;
  const blendHTML = blends.length > 0 ? `<p><strong>Polyphthongs&nbsp;/&nbsp;Blends</strong><br>${blends.map(letter => `<span class="tag">${letter}</span>`).join(' ')}</p>` : '';
  const phonologyHTML = `<h3>Phonology</h3>
  <div class="split two">
    <div>${consonantHTML}</div>
    <div>${vowelHTML}</div>
  </div>
  ${blendHTML}`;

  const { onset, nucleus, coda } = phonotactics;
  const onsetHTML = `<p><strong>Onset</strong><br>${onset.map(letter => `<span class="tag">${letter}</span>`).join(' ')}</p>`;
  const nucleusHTML = `<p><strong>Nucleus</strong><br>${nucleus.map(letter => `<span class="tag">${letter}</span>`).join(' ')}</p>`;
  const codaHTML = `<p><strong>Coda</strong><br>${coda.map(letter => `<span class="tag">${letter}</span>`).join(' ')}</p>`;
  const phonotacticsNotesHTML = phonotactics.notes.trim().length > 0 ? '<p><strong>Notes</strong></p><div>' + md(removeTags(phonotactics.notes)) + '</div>' : '';
  const phonotacticsHTML = onset.length + nucleus.length + coda.length + phonotacticsNotesHTML.length > 0
    ? `<h3>Phonotactics</h3>
  <div class="split three">
    <div>${onsetHTML}</div>
    <div>${nucleusHTML}</div>
    <div>${codaHTML}</div>
  </div>
  ${phonotacticsNotesHTML}`
    : '';

  const { translations } = orthography;
  const translationsHTML = `<p><strong>Translations</strong><br>${translations.map(translation => {
    translation = translation.split('=').map(value => value.trim());
    if (translation.length > 1 && translation[0] !== '' && translation[1] !== '') {
      return `<span><span class="tag">${translation[0]}</span><span class="tag orthographic-translation">${translation[1]}</span></span>`;
    }
    return false;
  }).filter(html => html !== false).join(' ')}</p>`;
  const orthographyNotesHTML = orthography.notes.trim().length > 0 ? '<p><strong>Notes</strong><br>' + md(removeTags(orthography.notes)) + '</div>' : '';
  const orthographyHTML = translations.length > 0 && orthographyNotesHTML.length > 0
    ? `<h3>Orthography</h3>
  ${translations.length > 0 ? translationsHTML : ''}
  ${orthographyNotesHTML}`
    : '';
  const grammarHTML = '<h3>Grammar</h3><div>' + md(removeTags(grammar.notes)) + '</div>';

  detailsPanel.innerHTML = generalHTML + phonologyHTML + phonotacticsHTML + orthographyHTML + grammarHTML;
}

export function renderStats() {
  const wordStats = getWordsStats();
  const numberOfWordsHTML = `<p><strong>Number of Words</strong><br>${wordStats.numberOfWords.map(stat => `<span><span class="tag">${stat.name}</span><span class="tag">${stat.value}</span></span>`).join(' ')}</p>`;
  const wordLengthHTML = `<p><strong>Word Length</strong><br><span><span class="tag">Shortest</span><span class="tag">${wordStats.wordLength.shortest}</span></span>
  <span><span class="tag">Longest</span><span class="tag">${wordStats.wordLength.longest}</span></span>
  <span><span class="tag">Average</span><span class="tag">${wordStats.wordLength.average}</span></span></p>`;
  const letterDistributionHTML = `<p><strong>Letter Distribution</strong><br>${wordStats.letterDistribution.map(stat => `<span title="${stat.number} ${stat.letter}'s total"><span class="tag">${stat.letter}</span><span class="tag">${stat.percentage.toFixed(2)}</span></span>`).join(' ')}</p>`;
  const totalLettersHTML = `<p><strong>${wordStats.totalLetters} Total Letters</strong></p>`;

  detailsPanel.innerHTML = numberOfWordsHTML + wordLengthHTML + letterDistributionHTML + totalLettersHTML;
}

export function renderPartsOfSpeech(onlyOptions = false) {
  let optionsHTML = '<option value=""></option>',
    searchHTML = '<label>Unclassified <input type="checkbox" checked id="searchPartOfSpeech__None"></label>';
  window.currentDictionary.partsOfSpeech.forEach(partOfSpeech => {
    partOfSpeech = removeTags(partOfSpeech);
    optionsHTML += `<option value="${partOfSpeech}">${partOfSpeech}</option>`;
    searchHTML += `<label>${partOfSpeech} <input type="checkbox" checked id="searchPartOfSpeech_${slugify(partOfSpeech)}"></label>`;
  });
  searchHTML += `<a class="small button" id="checkAllFilters">Check All</a> <a class="small button" id="uncheckAllFilters">Uncheck All</a>`;
  
  Array.from(document.getElementsByClassName('part-of-speech-select')).forEach(select => {
    const selectedValue = select.value;
    select.innerHTML = optionsHTML;
    select.value = selectedValue;
  });
  if (!onlyOptions) {
    document.getElementById('searchPartsOfSpeech').innerHTML = searchHTML;
  }

  setupSearchFilters();
}

export function renderWords() {
  let wordsHTML = '';
  let openEditForms = getOpenEditForms();
  let words = false;
  const isPublic = hasToken() && window.currentDictionary.settings.isPublic;

  if (window.currentDictionary.words.length === 0) {
    wordsHTML = `<article class="entry">
      <header>
        <h4 class="word">No Words Created</h4>
      </header>
      <dl>
        <dt class="definition">Use the Word Form to create words or click the Help button below!</dt>
      </dl>
    </article>`;
  } else {
    words = getMatchingSearchWords();

    if (words.length === 0) {
      wordsHTML = `<article class="entry">
        <header>
          <h4 class="word">No Search Results</h4>
        </header>
        <dl>
          <dt class="definition">Edit your search or filter to show words.</dt>
        </dl>
      </article>`;
    }

    if (openEditForms.length > 0) {
      // Clone the dom nodes
      openEditForms.forEach((wordFormId, index) => {
        openEditForms[index] = document.getElementById(wordFormId.toString()).cloneNode(true);
      });
    }

    // const { pageStart, pageEnd } = getPaginationData(words);

    // words.slice(pageStart, pageEnd).forEach(originalWord => {
    words.forEach((originalWord, displayIndex) => {
      const word = highlightSearchTerm({
        name: removeTags(originalWord.name),
        pronunciation: removeTags(originalWord.pronunciation),
        partOfSpeech: removeTags(originalWord.partOfSpeech),
        definition: removeTags(originalWord.definition),
        details: parseReferences(removeTags(originalWord.details)),
        wordId: originalWord.wordId,
      });
      const homonymnNumber = getHomonymnNumber(originalWord);
      const shareLink = window.currentDictionary.hasOwnProperty('externalID') ? getPublicLink() + '/' + word.wordId : '';

      wordsHTML += renderAd(displayIndex);

      let wordNameDisplay = translateOrthography(word.name);

      wordsHTML += `<article class="entry" id="${word.wordId}">
        <header>
          <h4 class="word"><span class="orthographic-translation">${wordNameDisplay}</span>${homonymnNumber > 0 ? ' <sub>' + homonymnNumber.toString() + '</sub>' : ''}</h4>
          <span class="pronunciation">${word.pronunciation}</span>
          <span class="part-of-speech">${word.partOfSpeech}</span>
          ${isPublic ? `<a class="small button share-link" href="${shareLink}" target="_blank" title="Public Link to Word">&#10150;</a>` : ''}
          <span class="small button word-option-button">Options</span>
          <div class="word-option-list" style="display:none;">
            <div class="word-option" id="edit_${word.wordId}">Edit</div>
            <div class="word-option" id="delete_${word.wordId}">Delete</div>
          </div>
        </header>
        <dl>
          <dt class="definition">${word.definition}</dt>
          <dd class="details">
            ${md(word.details)}
          </dd>
        </dl>
      </article>`;
    });
  }

  document.getElementById('entries').innerHTML = wordsHTML;

  if (openEditForms.length > 0) {
    // Clone the dom nodes
    openEditForms.forEach(editForm => {
      const entryElement = document.getElementById(editForm.id);
      entryElement.parentNode.replaceChild(editForm, entryElement);
    });
    setupWordEditFormButtons();
  }
  
  setupWordOptionButtons();
  setupWordOptionSelections();
  
  // Show Search Results
  const searchTerm = getSearchTerm();
  const filters = getSearchFilters();
  let resultsText = searchTerm !== '' || !filters.allPartsOfSpeechChecked ? (words ? words.length : 0).toString() + ' Results' : '';
  resultsText += !filters.allPartsOfSpeechChecked ? ' (Filtered)' : '';
  document.getElementById('searchResults').innerHTML = resultsText;

  // renderPagination(words);
}

export function renderPagination(filteredWords) {
  const paginationData = getPaginationData(filteredWords);

  if (paginationData.pages > 0) {
    let paginationHTML = (paginationData.currentPage > 0 ? '<span class="button prev-button">&laquo; Previous</span>' : '')
      + '<select class="page-selector">';
    for (let i = 0; i < paginationData.pages; i++) {
      paginationHTML += `<option value="${i}"${paginationData.currentPage === i ? ' selected' : ''}>Page ${i + 1}</option>`;
    }
    paginationHTML += '</select>'
      + (paginationData.currentPage < paginationData.pages - 1 ? '<span class="button next-button">Next &raquo;</span>' : '');
    
    Array.from(document.getElementsByClassName('pagination')).forEach(pagination => {
      pagination.innerHTML = paginationHTML;
    });

    setupPagination();
  }
}

export function renderEditForm(wordId = false) {
  wordId = typeof wordId.target === 'undefined' ? wordId : parseInt(this.id.replace('edit_', ''));
  const word = window.currentDictionary.words.find(w => w.wordId === wordId);
  if (word) {
    const ipaPronunciationField = `<input id="wordPronunciation_${wordId}" class="ipa-field" maxlength="200" value="${word.pronunciation}"><br>
      <a class="label-help-button ipa-field-help-button">Field Help</a>`;
    const plainPronunciationField = `<input id="wordPronunciation_${wordId}" maxlength="200" value="${word.pronunciation}">`;
    const editForm = `<form id="editForm_${wordId}" class="edit-form">
      <label>Word<span class="red">*</span><br>
        <input id="wordName_${wordId}" maxlength="200" value="${word.name}">
      </label>
      <label>Pronunciation<a class="label-button ipa-table-button">IPA Chart</a><br>
        ${window.settings.useIPAPronunciationField ? ipaPronunciationField : plainPronunciationField}
      </label>
      <label>Part of Speech<br>
        <select id="wordPartOfSpeech_${wordId}" class="part-of-speech-select">
          <option value="${word.partOfSpeech}" selected>${word.partOfSpeech}</option>
        </select>
      </label>
      <label>Definition<span class="red">*</span><br>
        <input id="wordDefinition_${wordId}" maxlength="2500" value="${word.definition}" placeholder="Equivalent words">
      </label>
      <label>Details<span class="red">*</span><a class="label-button maximize-button">Maximize</a><br>
        <textarea id="wordDetails_${wordId}" placeholder="Markdown formatting allowed">${word.details}</textarea>
      </label>
      <div id="wordErrorMessage_${wordId}"></div>
      <a class="button edit-save-changes" id="editWordButton_${wordId}">Save Changes</a>
      <a class="button edit-cancel">Cancel Edit</a>
    </form>`;

    document.getElementById(wordId.toString()).innerHTML = editForm;
    setupWordEditFormButtons();
    renderPartsOfSpeech(true);
  }
}

export function renderIPAHelp() {
  import('./KeyboardFire/phondue/usage.html').then(html => {
    renderInfoModal(html);
  });
}

export function renderIPATable(ipaTableButton) {
  ipaTableButton = typeof ipaTableButton.target === 'undefined' || ipaTableButton.target === '' ? ipaTableButton : ipaTableButton.target;
  const label = ipaTableButton.parentElement.innerText.replace(/(Field Help|IPA Chart)/g, '').trim();
  const textBox = ipaTableButton.parentElement.querySelector('input');
  const modalElement = document.createElement('section');
  modalElement.classList.add('modal', 'ipa-table-modal');
  modalElement.innerHTML = `<div class="modal-background"></div>
  <div class="modal-content">
    <a class="close-button">&times;&#xFE0E;</a>
    <header><label>${label} <input value="${textBox.value}" class="ipa-field"></label></header>
    <section>
      ${ipaTableFile}
    </section>
    <footer><a class="button done-button">Done</a></footer>
  </div>`;

  document.body.appendChild(modalElement);
  
  setupIPAFields();
  setupIPATable(modalElement, textBox);
}

export function renderMaximizedTextbox(maximizeButton) {
  maximizeButton = typeof maximizeButton.target === 'undefined' || maximizeButton.target === '' ? maximizeButton : maximizeButton.target;
  const label = maximizeButton.parentElement.innerText.replace(/(\*|Maximize)/g, '').trim();
  const textBox = maximizeButton.parentElement.querySelector('textarea');
  const modalElement = document.createElement('section');
  modalElement.classList.add('modal', 'maximize-modal');
  modalElement.innerHTML = `<div class="modal-background"></div>
  <div class="modal-content">
    <a class="close-button">&times;&#xFE0E;</a>
    <header><h3>${label}</h3></header>
    <section>
      <textarea>${textBox.value}</textarea>
    </section>
    <footer><a class="button done-button">Done</a></footer>
  </div>`;

  document.body.appendChild(modalElement);
  
  setupMaximizeModal(modalElement, textBox);
}

export function renderInfoModal(content) {
  const modalElement = document.createElement('section');
  modalElement.classList.add('modal', 'info-modal');
  modalElement.innerHTML = `<div class="modal-background"></div>
  <div class="modal-content">
    <a class="close-button">&times;&#xFE0E;</a>
    <section class="info-modal">
      <div class="content">
        ${content}
      </div>
    </section>
  </div>`;

  document.body.appendChild(modalElement);

  setupInfoModal(modalElement);
}
