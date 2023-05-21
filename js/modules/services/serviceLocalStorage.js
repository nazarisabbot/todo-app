const getItemFromLocalStorag = (key) => {
  if (key.trim() !== '') {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
};

const setItemToLocalStorag = (key, obj) => {
  const tasks = getItemFromLocalStorag(key);
  tasks.unshift(obj);
  localStorage.setItem(key, JSON.stringify(tasks));
};

export default {
  getItemFromLocalStorag,
  setItemToLocalStorag,
};
