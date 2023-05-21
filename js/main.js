/* Imports */
import {getEl} from './modules/services/getElement.js';
import {renderHead} from './modules/renderHead.js';
import {createTable} from './modules/renderTable.js';
import {authorWindow} from './modules/authorWindow.js';
import serviceLocalStorage from './modules/services/serviceLocalStorage.js';
import formControl from './modules/services/formControl.js';
import buttonsHandler from './modules/services/buttonsHandler.js';

/* Distructuring */
const {getItemFromLocalStorag} = serviceLocalStorage;
const {activateMainButton, deactivationMainButton, resetMainInput, addNewTask} =
  formControl;
const {editTaskHandler, lostFocus, changeStatusTask, deleteTask} =
  buttonsHandler;

export const initApp = () => {
  const app = getEl('.app-container', true);
  /* Render window author */
  app.append(authorWindow(app));
  //

  /* Get input form authorizations */
  const formAuthor = getEl('.form-author', true);
  //

  /* Launching the application in case of authorization */
  formAuthor.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;

    if (target.closest('.btn-author')) {
      const formData = new FormData(formAuthor);
      const formObj = Object.fromEntries(formData);
      let keyUser = formObj.nameAuthor;
      const arrOfTask = getItemFromLocalStorag(keyUser);

      if (arrOfTask === undefined) {
        alert('Введите пожалуйста хотябы один символ');
        formAuthor.remove();
        initApp();
      }

      if (arrOfTask) {
        formAuthor.remove();
        renderHead(app, keyUser);
        createTable(app, arrOfTask);
        app.addEventListener('click', addNewTask(keyUser));
        app.addEventListener('click', editTaskHandler(keyUser));
        app.addEventListener('focusout', lostFocus(keyUser));
        app.addEventListener('click', changeStatusTask(keyUser));
        app.addEventListener('click', deleteTask(keyUser));
      }
    }
    formAuthor.reset();
  });
  //

  /* Control disabled attribute at mainButton and reset unput */
  app.addEventListener('input', activateMainButton);
  app.addEventListener('change', deactivationMainButton);
  app.addEventListener('click', resetMainInput);
  //
};
initApp();
