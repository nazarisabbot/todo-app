import serviceLocalStorage from './serviceLocalStorage.js';
import {getEl} from './getElement.js';
import {countOfNumber} from './countOfNumber.js';

/* Distructuring */
const {getItemFromLocalStorag, setItemToLocalStorag} = serviceLocalStorage;

const editTaskHandler = (keyUser) => (e) => {
  const target = e.target;

  if (target.closest('.btn-edit')) {
    const parentCell = target.closest('.table-light');
    const taskCell = parentCell.querySelector('.task');

    if (taskCell.hasAttribute('edit')) {
      taskCell.setAttribute('contenteditable', false);
      taskCell.removeAttribute('edit');
      taskCell.classList.remove('text-danger');
      target.classList.remove('bg-danger');

      //
      const modifiedTask = taskCell.textContent;
      const task = parentCell.querySelector('.task');
      const idOfTask = task.getAttribute('id');
      const tasks = getItemFromLocalStorag(keyUser);

      for (let item of tasks) {
        if (item.id === idOfTask) {
          item.task = modifiedTask;
        }
      }

      localStorage.setItem(keyUser, JSON.stringify(tasks));
      //
    } else {
      taskCell.setAttribute('contenteditable', true);
      taskCell.setAttribute('edit', 1);
      taskCell.classList.add('text-danger');
      target.classList.add('bg-danger');
    }
  }
};

const lostFocus = (keyUser) => (e) => {
  const target = e.target;

  if (target.closest('.task')) {
    target.setAttribute('contenteditable', false);
    target.classList.remove('text-danger');

    const btnParent = target.closest('.table-light');
    const btnEdit = btnParent.querySelector('.btn-edit');
    btnEdit.classList.remove('bg-danger');
    btnEdit.removeAttribute('edit');

    //
    const modifiedTask = target.textContent;
    const idOfTask = target.getAttribute('id');
    const tasks = getItemFromLocalStorag(keyUser);

    for (let item of tasks) {
      if (item.id === idOfTask) {
        item.task = modifiedTask;
      }
    }

    localStorage.setItem(keyUser, JSON.stringify(tasks));
    //
  }
};

const changeStatusTask = (keyUser) => (e) => {
  const target = e.target;

  if (target.closest('.btn-success')) {
    const parentCell = target.closest('.table-light');
    const taskCell = parentCell.querySelector('.task');
    const newStatus = taskCell.nextElementSibling;
    parentCell.classList.replace('table-light', 'table-success');
    taskCell.classList.replace('task', 'text-decoration-line-through');
    newStatus.textContent = 'Выполнена';

    //
    const idOfTask = taskCell.getAttribute('id');
    const tasks = getItemFromLocalStorag(keyUser);

    for (let item of tasks) {
      if (item.id === idOfTask) {
        item.state = 'table-success';
        item.decaration = 'text-decoration-line-through';
        item.status = 'Выполнена';
      }
    }

    localStorage.setItem(keyUser, JSON.stringify(tasks));
    //
  }
};

const deleteTask = (keyUser) => (e) => {
  const target = e.target;

  if (target.closest('.btn-danger')) {
    const parentCell =
      target.closest('.table-light') || target.closest('.table-success');
    const taskCell =
      parentCell.querySelector('.task') ||
      parentCell.querySelector('.text-decoration-line-through');

    //
    const idOfTask = taskCell.getAttribute('id');
    const tasks = getItemFromLocalStorag(keyUser);

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === idOfTask) {
        tasks.splice(i, 1);
      }
    }

    localStorage.setItem(keyUser, JSON.stringify(tasks));
    //

    parentCell.remove();
    const numOftasks = getEl('.td-num', false);
    console.log(numOftasks);
    countOfNumber(numOftasks);
  }
};

export default {
  editTaskHandler,
  lostFocus,
  changeStatusTask,
  deleteTask,
};
