import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory/inventory.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  constructor(private inventoryService: InventoryService) { }
  public editRoute: string = "inventory/edit";

  public colData = [
    { field: 'index', header: '#' },
    { field: 'name', header: 'Name' },
    { field: 'stock', header: 'Stock' }
  ];

  public getInventoryList() {
    console.log(this.inventoryService.getInventoryList());
    return this.inventoryService.getInventoryList();
  }

  public deleteInventory = (id: any) => {
    console.log("deleting item with id: " + id);
    this.inventoryService.deleteInventory(id);
  }

}
