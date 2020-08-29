import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './components/football/result/result.component';
import { NewComponent } from './components/football/new/new.component';
import { LeagueTableComponent } from './components/football/league-table/league-table.component';
import { AppComponent } from './app.component';
import { FootballComponent } from './components/football/football.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  {
    path: 'football',
    component: FootballComponent,
    children: [
      {
        path: 'results',
        component: ResultComponent,
      },
      { path: 'new', component: NewComponent },
      { path: 'edit/:id', component: NewComponent },
      {
        path: 'league-table',
        component: LeagueTableComponent,
      },
      { path: '**', redirectTo: 'results' },
    ],
  },
  { path: '**', redirectTo: 'football' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
