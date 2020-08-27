import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResultComponent } from './components/football/result/result.component';
import { NewComponent } from './components/football/new/new.component';
import { LeagueTableComponent } from './components/football/league-table/league-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReusableTableComponent } from './components/reusable-table/reusable-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    NewComponent,
    LeagueTableComponent,
    ReusableTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
