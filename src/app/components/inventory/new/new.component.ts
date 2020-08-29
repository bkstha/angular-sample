import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Inventory } from 'src/app/services/inventory/Inventory';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private readonly inventoryService: InventoryService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) { }
  private activeId = '';
  private inventory: Inventory;
  public inventoryForm: FormGroup;

  ngOnInit(): void {
    this.initializeInventory();
    this.resetForm();
  }
  resetForm() {
    this.inventoryForm = this.fb.group({
      name: [this.inventory.name, Validators.required],
      stock: [
        this.inventory.stock,
        [Validators.required, Validators.min(0)],
      ],
      id: [this.inventory.id],
    });
  }
  private initializeInventory() {
    this.activeId = this.route.snapshot.params.id;
    if (this.activeId) {
      this.inventory = this.inventoryService.getInventoryById(this.activeId)[0];
    } else {
      this.inventory = new Inventory();
    }
  }


  public onSubmit(): void {
    const inventoryData: Inventory = this.inventoryForm.value;
    if (inventoryData.id != null) {
      this.inventoryService.updateInventory(inventoryData);
    } else {
      this.inventoryService.addNewInventory(inventoryData);
    }
    this.router.navigate(['inventory/list']);
  }

  clearForm() {
    this.inventoryForm.reset();
  }

}
