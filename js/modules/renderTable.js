import {createEl} from './services/createElements.js';
import {createRow} from './services/createRow.js';

export const createTable = (parent, data) => {
  /* Create div for table */
  const divTab = createEl('div', {
    className: 'table-wrapper',
  });
  //

  /* Create table for tasks */
  const table = createEl('table', {
    className: 'table table-hover table-bordered',
  });
  //

  /* Create thead for tasks */
  const thead = createEl('thead');
  const tr = `
    <tr>
    <th>№</th>
    <th>Задача</th>
    <th>Статус</th>
    <th>Уровень важности</th>
    <th>Действия</th>
    </tr>
    `;
  //

  /* Create tbody */
  const tbody = createEl('tbody');
  //

  parent.append(divTab);
  divTab.append(table);
  table.append(thead);
  thead.insertAdjacentHTML('afterbegin', tr);
  table.append(tbody);

  /* Create row for tbody */
  data.map((elem, index) => {
    tbody.append(createRow(elem, index));
  });
};
