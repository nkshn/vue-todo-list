import constants from "../constants/index";

function generateUniqueId() {
  return Math.random().toString(16).slice(2);
}

function saveLocalStorage(data) {
  window.localStorage.setItem(constants.LOCAL_STORAGE_KEY, JSON.stringify(data));
}

module.exports = {
  genUniqueId: generateUniqueId(),
  saveToLocalStorage: saveLocalStorage()
}