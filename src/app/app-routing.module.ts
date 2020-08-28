import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './components/football/result/result.component';
import { NewComponent } from './components/football/new/new.component';
import { LeagueTableComponent } from './components/football/league-table/league-table.component';
import { AppComponent } from './app.component';
import { FootballComponent } from './components/football/football.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [

  { path: '', component: AppComponent, pathMatch: 'full' },
  {
    path: 'football', component: FootballComponent, pathMatch: 'full',
    children: [
      { path: '', redirectTo: 'results', pathMatch: 'full' },
      { path: 'results', component: ResultComponent, outlet: 'football' },
      { path: 'football/results', component: ResultComponent, outlet: 'football' },
      { path: 'new', component: NewComponent, outlet: 'football' },
      { path: 'edit/:id', component: NewComponent, outlet: 'football' },
      { path: 'league-table', component: LeagueTableComponent, outlet: 'football' },
    ]
  },
  { path: 'inventory', component: InventoryComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
