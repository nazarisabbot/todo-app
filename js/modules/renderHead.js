import {createEl} from './services/createElements.js';

export const renderHead = (parent, nameUser) => {
  /* Add class for the main container */
  parent.classList.add(
    'vh-100',
    'w-100',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'flex-column'
  );
  //

  /* Create title */
  const h3 = createEl('h3', {textContent: `Todo App for ${nameUser}`});
  //

  /* Create form */
  const form = createEl('form', {
    className:
      'form-task d-flex align-items-center justify-content-space-between mb-3',
  });
  //

  /* Create drop menu */
  const select = createEl('select', {
    className: 'form-select form-select-sm me-3',
    style: 'width: initial !important;',
    name: 'Important',
  });

  const option = createEl('option', {
    value: 'label',
    textContent: 'Уровень важности',
  });

  option.setAttribute('selected', true);
  option.setAttribute('disabled', true);

  const optionOrdinary = createEl('option', {
    value: 'Обычный',
    textContent: 'Обычный',
  });

  const optionImportant = createEl('option', {
    value: 'Важный',
    textContent: 'Важный',
  });

  const optionUrgent = createEl('option', {
    value: 'Срочный',
    textContent: 'Срочный',
  });
  //

  select.append(option);
  select.append(optionOrdinary);
  select.append(optionImportant);
  select.append(optionUrgent);

  /* Create elements for form */
  const label = createEl('label', {
    className: 'form-group me-3 mb-0',
  });

  const input = createEl('input', {
    type: 'text',
    className: 'form-control form-control_input',
    name: 'nameTask',
    placeholder: 'ввести задачу',
  });

  const buttonSave = createEl('button', {
    type: 'submit',
    className: 'btn-submit btn btn-primary me-3',
    textContent: 'Сохранить',
    disabled: 'disabled',
  });

  const buttonClear = createEl('button', {
    type: 'reset',
    className: 'btn-reset btn btn-warning',
    textContent: 'Очистить',
  });
  //

  parent.append(h3);
  parent.append(form);
  form.append(label);
  label.append(input);
  form.append(select);
  form.append(buttonSave);
  form.append(buttonClear);
};
