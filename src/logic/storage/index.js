export const cleanLocalStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};

export const recoverFromLocalStorage = (key, defaultValue) => {
  const item = window.localStorage.getItem(key);
  if (item) return JSON.parse(item);
  return defaultValue;
};
