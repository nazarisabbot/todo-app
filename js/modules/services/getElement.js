export const getEl = (select, single = true) =>
  single
    ? document.querySelector(select)
    : [...document.querySelectorAll(select)];
