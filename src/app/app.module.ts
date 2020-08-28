import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ReactiveFormsModule } from '@angular/forms';
// import { ReusableTableComponent } from './components/reusable-table/reusable-table.component';
import { InventoryModule } from './components/inventory/inventory.module';
import { FootballModule } from './components/football/football.module';

@NgModule({
  declarations: [
    AppComponent,
    // ReusableTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InventoryModule,
    FootballModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
