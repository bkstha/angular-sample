import { NgModule } from '@angular/core';

import { ResultComponent } from './result/result.component';
import { NewComponent } from './new/new.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { FootballComponent } from './football.component';
import { SharedModule } from '../../shared/shared.module';
import { FootballRoutingModule } from './football-routing.module';

@NgModule({
  declarations: [
    ResultComponent,
    NewComponent,
    LeagueTableComponent,
    FootballComponent,
  ],
  imports: [
    FootballRoutingModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class FootballModule { }
