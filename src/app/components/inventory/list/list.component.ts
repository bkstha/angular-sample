import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  constructor(
    private inventoryService: InventoryService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getInventoryList();
  }
  public editRoute: string = 'edit';
  public inventoryList: any;

  public colData = [
    { field: 'index', header: '#' },
    { field: 'name', header: 'Name' },
    { field: 'stock', header: 'Stock' },
  ];

  public getInventoryList() {
    this.inventoryService.getInventoryList().subscribe(result => {
      this.inventoryList = result.map((obj, index) => ({ ...obj, index: (index + 1) }));
    });
  }

  public deleteInventory(id: any): void {
    console.log('deleting item with id: ' + id);
    this.inventoryService.deleteInventory(id);
    this.getInventoryList();
  }

  public editActionClicked(id: any): void {
    this.router.navigate(['../edit', { id }], {
      relativeTo: this.activatedRoute,
    });
  }
}
