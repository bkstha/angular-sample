import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Inventory } from './Inventory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _jsonUrl = 'assets/inventories.json';
  private _inventoryList: Array<Inventory>;

  constructor(private httpClient: HttpClient,) {
    this._init();
  }

  private _init(): void {
    this.httpClient.get<Array<Inventory>>(this._jsonUrl)
      .subscribe(data => {
        console.log("initializing default inventory list");
        this._inventoryList = data;
      });
  }

  getInventoryList(): Observable<Array<Inventory>> {
    if (this._inventoryList) {
      return new Observable(observer => {
        observer.next(this._inventoryList);
      })
    } else {
      return this.httpClient.get<Array<Inventory>>(this._jsonUrl);
    }
  }

  public addNewInventory(form: Inventory) {
    let inventory: Inventory = new Inventory();
    inventory.id = this._inventoryList.length + 1;
    inventory.name = form.name;
    inventory.stock = form.stock;
    this._inventoryList.push(inventory);
    return inventory;
  }

  public updateInventory(form: Inventory) {
    this._inventoryList.filter(data => data.id == form.id).map(Inventory => {
      Inventory.name = form.name;
      Inventory.stock = form.stock;
    });
    return form;
  }

  public deleteInventory(id: any) {
    this._inventoryList = this._inventoryList.filter(data => data.id != id);
  }

}
