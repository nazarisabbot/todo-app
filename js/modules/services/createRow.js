import {createEl} from './createElements.js';

export const createRow = (obj, index) => {
  const trow = createEl('tr', {
    className: obj.state,
  });

  const tdNum = createEl('td', {
    className: 'td-num',
    textContent: index + 1,
  });

  const tdTask = createEl('td', {
    className: obj.decaration,
    textContent: obj.task,
    id: obj.id,
  });

  const tdStatus = createEl('td', {
    textContent: obj.status,
  });

  const tdImportance = createEl('td', {
    textContent: obj.importance,
  });

  const tdForButton = createEl('td');

  const buttonTaskDelete = createEl('button', {
    className: 'btn btn-danger me-3',
    textContent: 'Удалить',
  });

  const buttonTaskComplete = createEl('button', {
    className: 'btn btn-success me-3',
    textContent: 'Завершить',
    disabled: obj.editBtn,
  });

  const buttonTaskEdit = createEl('button', {
    className: 'btn-edit btn btn-primary',
    textContent: 'Редактировать',
    disabled: obj.editBtn,
  });

  tdForButton.append(buttonTaskDelete);
  tdForButton.append(buttonTaskComplete);
  tdForButton.append(buttonTaskEdit);

  trow.append(tdNum);
  trow.append(tdTask);
  trow.append(tdStatus);
  trow.append(tdImportance);
  trow.append(tdForButton);

  return trow;
};
