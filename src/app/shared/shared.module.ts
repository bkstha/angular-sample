import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReusableTableComponent } from '../components/reusable-table/reusable-table.component';

@NgModule({
  declarations: [
    ReusableTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ReusableTableComponent
  ]
})
export class SharedModule { }
