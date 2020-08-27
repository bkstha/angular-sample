import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public games: any;

  constructor(
    private readonly footballService: FootballService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
    this.games = this.footballService.getGamesResult();
  }

  public isWinnerA(a, b) {
    return (a > b) ? "alert-success" : '';
  }

  public isWinnerB(a, b) {
    return (a < b) ? "alert-success" : '';
  }

}
