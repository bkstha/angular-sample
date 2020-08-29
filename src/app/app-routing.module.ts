import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'football', loadChildren: () => import('./components/football/football.module').then(m => m.FootballModule) },
  { path: 'inventory', loadChildren: () => import('./components/inventory/inventory.module').then(m => m.InventoryModule) },
  { path: '**', redirectTo: 'football' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
