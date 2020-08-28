import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public games: any;

  constructor(
    private readonly footballService: FootballService,
  ) {
  }

  ngOnInit(): void {
    this.games = this.footballService.getGamesResult();
  }

  public isWinnerA(a: number, b: number) {
    return (a > b) ? "alert-success" : '';
  }

  public isWinnerB(a: number, b: number) {
    return (a < b) ? "alert-success" : '';
  }

}
