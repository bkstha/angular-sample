import { Component } from '@angular/core';
import { FootballService } from 'src/app/services/football/football.service';
@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html'
})
export class LeagueTableComponent {
  constructor(private footballService: FootballService) { }

  public colData = [
    { field: 'pos', header: 'Pos' },
    { field: 'teamName', header: 'Team' },
    { field: 'played', header: 'Pld' },
    { field: 'won', header: 'W' },
    { field: 'draw', header: 'D' },
    { field: 'lost', header: 'L' },
    { field: 'points', header: 'Pts' }
  ];

  public getLeagueData() {
    console.log(this.footballService.getLeagueTables());
    return this.footballService.getLeagueTables();
  }
}
