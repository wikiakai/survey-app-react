export default {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key, value) => localStorage.getItem(key, value),
  clear: () => localStorage.clear(),
}
