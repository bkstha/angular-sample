import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result/result.component';
import { NewComponent } from 'src/app/components/football/new/new.component';
import { LeagueTableComponent } from 'src/app/components/football/league-table/league-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FootballComponent } from './football.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';

@NgModule({
  declarations: [
    ResultComponent,
    NewComponent,
    LeagueTableComponent,
    FootballComponent,
    ReusableTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    // FootballComponent
  ]
})
export class FootballModule { }
