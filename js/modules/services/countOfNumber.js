export const countOfNumber = (colection) => {
  const arr = colection;
  const count = 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = count + i;
  }
};
