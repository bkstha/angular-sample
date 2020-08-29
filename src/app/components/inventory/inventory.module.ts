import { NgModule } from '@angular/core';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    InventoryComponent,
    ListComponent,
    NewComponent,
  ],
  imports: [
    InventoryRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class InventoryModule { }

