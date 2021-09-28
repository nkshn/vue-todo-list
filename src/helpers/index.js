import { LOCAL_STORAGE_KEY } from "../constants";

// generate unique id for todo
export function generateUniqueId() {
  return Math.random().toString(16).slice(2);
}

// get todo's from localStorage
export function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
}

// save data to localStorage
export function saveLocalStorage(data) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}