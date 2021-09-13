const KEY = "LAYOUT";

export const setLayoutCache = (value = {}) => {
  return localStorage.setItem(KEY, JSON.stringify(value));
};

export const getLayoutCache = () => {
  return JSON.parse(localStorage.getItem(KEY) || '{}');
};

export const removeLayoutCache = () => {
  return localStorage.removeItem(KEY);
};
