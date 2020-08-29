import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { NewComponent } from './new/new.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { FootballComponent } from './football.component';

const routes: Routes = [
  {
    path: '', component: FootballComponent,
    children: [
      { path: 'results', component: ResultComponent },
      { path: 'new', component: NewComponent },
      { path: 'edit/:id', component: NewComponent },
      { path: 'league-table', component: LeagueTableComponent },
      { path: '**', redirectTo: 'results' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootballRoutingModule { }
