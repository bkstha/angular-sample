import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './components/football/result/result.component';
import { NewComponent } from './components/football/new/new.component';
import { LeagueTableComponent } from './components/football/league-table/league-table.component';

const routes: Routes = [

  { path: 'football', redirectTo: 'football/results', pathMatch: 'full' },
  { path: 'football/results', component: ResultComponent },
  { path: 'football/new', component: NewComponent },
  { path: 'football/edit/:id', component: NewComponent },
  { path: 'football/league-table', component: LeagueTableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
