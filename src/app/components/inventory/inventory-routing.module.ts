import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '', component: InventoryComponent,
    children: [
      { path: 'lists', component: ListComponent },
      { path: 'new', component: NewComponent },
      { path: 'edit/:id', component: NewComponent },
      { path: '**', redirectTo: 'lists' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
