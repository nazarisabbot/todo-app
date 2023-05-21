import {createRow} from './createRow.js';
import {getEl} from './getElement.js';
import {countOfNumber} from './countOfNumber.js';
import serviceLocalStorage from './serviceLocalStorage.js';

/* Distructuring */
const {setItemToLocalStorag} = serviceLocalStorage;

const activateMainButton = (e) => {
  const target = e.target;

  if (target.closest('.form-control_input')) {
    const mainButton = getEl('.btn-submit', true);
    mainButton.removeAttribute('disabled');
  }
};

const deactivationMainButton = (e) => {
  const target = e.target;

  if (target.closest('.form-control_input')) {
    const mainButton = getEl('.btn-submit', true);

    if (target.value === '') {
      mainButton.setAttribute('disabled', 'disabled');
    }
  }
};

const resetMainInput = (e) => {
  const target = e.target;

  if (target.closest('.btn-reset')) {
    const mainInput = getEl('.form-control_input', true);
    const mainButton = getEl('.btn-submit', true);
    mainInput.value = '';
    mainButton.setAttribute('disabled', 'disabled');
  }
};

const addNewTask = (key) => (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.closest('.btn-submit')) {
    const tbody = getEl('tbody');

    const form = getEl('.form-task', true);
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData);

    const newObj = {
      id: Math.random().toString().substring(2, 10),
      numOftask: 1,
      task: newTask.nameTask,
      importance: newTask.Important || 'Уровень не выбран',
      status: 'В процессе',
      state: 'table-light',
      decaration: 'task',
    };

    tbody.prepend(createRow(newObj));

    setItemToLocalStorag(key, newObj);

    form.reset();

    const numOftasks = getEl('.td-num', false);
    countOfNumber(numOftasks);
  }
};

export default {
  activateMainButton,
  deactivationMainButton,
  resetMainInput,
  addNewTask,
};
