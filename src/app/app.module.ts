import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// import { FootballModule } from './components/football/football.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { ResultComponent } from './components/football/result/result.component';
import { NewComponent } from './components/football/new/new.component';
import { LeagueTableComponent } from './components/football/league-table/league-table.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ResultComponent } from './result/result.component';
// import { NewComponent } from './new/new.component';
// import { LeagueTableComponent } from './league-table/league-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResultComponent,
    NewComponent,
    LeagueTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    // FootballModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
