import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';
import { Game } from '../new/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  games;

  constructor(private footballService: FootballService,
    private router: Router,) {
    // let gameArray = this.footballService.getGames().sort((a, b)=> b.date-a.date);
    let gameArray = this.footballService.getGames().reduce((groups, game) => {
      // const date = game.time.split('T')[0];
      if (!groups[game.date]) {
        groups[game.date] = [];
      }
      groups[game.date].push(game);
      return groups;
    }, {})
    // gameArray;
    // .sort((a, b) => b.date - a.date)
    console.log("gamearray", gameArray);
    this.games = Object.keys(gameArray).map((date) => {
      return {
        date,
        games: gameArray[date]
      };
    });
    this.games.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    console.log(this.games);
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  isWinnerA(a, b) {
    console.log(a, b);
    return (a > b) ? "alert-success" : '';
  }

  isWinnerB(a, b) {
    console.log(a, b);
    return (a < b) ? "alert-success" : '';
  }
  edit(id) {
    console.log(id);
    this.router.navigate(['football/edit', {id: id}]);
  }
}
