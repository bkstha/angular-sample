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
  private activeId: number;
  private inventory: Inventory;
  public inventoryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    stock: [
      0,
      [Validators.required, Validators.min(0)],
    ],
    id: [''],
  });

  ngOnInit(): void {
    this.initializeInventory();
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
    console.log("active id: ", this.activeId)
    if (this.activeId) {
      this.inventoryService.getInventoryList().subscribe(result => {
        this.inventory = result.filter(data => data.id == this.activeId)[0];
        console.log(this.inventory);
        this.resetForm();
      });
    } else {
      this.inventory = new Inventory();
      this.resetForm();
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
