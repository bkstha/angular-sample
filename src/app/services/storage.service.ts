import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalItem(key) {
    return localStorage.getItem(key);
  }

  saveToLocal(key, value) {
    localStorage.setItem(key, value);
  }

  clearLocalData(key) {
    (key) ? localStorage.removeItem(key) : localStorage.clear();
  }

}
