export const countOfNumber = (colection) => {
  const arr = colection;
  const count = 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = count + i;
  }
};

/* export const ascendingOfNumber = (colection) => {
  const arr = colection;
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = i + 1;
  }
}; */
