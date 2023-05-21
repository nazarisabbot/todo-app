import {createEl} from './services/createElements.js';

export const authorWindow = (parent) => {
  /* Add class for main container */
  parent.classList.add(
    'vh-100',
    'w-100',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'flex-column'
  );
  //

  const formAuthor = createEl('form', {
    className: 'form-author row g-3 border border-primary rounded',
  });

  const divAuthor = createEl('div', {
    className: 'col-auto mx-auto',
  });

  formAuthor.append(divAuthor);

  const labelAuthor = createEl('labale', {
    className: 'visually-hidden',
    for: 'inputAuthor',
    textContent: 'NameAuthor',
  });

  divAuthor.append(labelAuthor);

  const inputAuthor = createEl('input', {
    className: 'form-control',
    name: 'nameAuthor',
    type: 'text',
    id: 'inputAuthor',
    placeholder: 'Имя пользователя',
  });

  divAuthor.append(inputAuthor);

  const divButtonAuthor = createEl('button', {
    type: 'submit',
    className: 'btn-author btn btn-primary mb-3 col-6 mx-auto',
    textContent: 'Подтвердить',
  });

  formAuthor.append(divButtonAuthor);

  return formAuthor;
};
