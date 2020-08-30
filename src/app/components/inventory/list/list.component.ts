import { Component } from '@angular/core';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  constructor(
    private inventoryService: InventoryService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  public editRoute: string = 'edit';

  public colData = [
    { field: 'index', header: '#' },
    { field: 'name', header: 'Name' },
    { field: 'stock', header: 'Stock' },
  ];

  public getInventoryList() {
    console.log(this.inventoryService.getInventoryList());
    return this.inventoryService.getInventoryList();
  }

  public deleteInventory(id: any): void {
    console.log('deleting item with id: ' + id);
    this.inventoryService.deleteInventory(id);
  }

  public editActionClicked(id: any): void {
    this.router.navigate(['../edit', { id }], {
      relativeTo: this.activatedRoute,
    });
  }
}
