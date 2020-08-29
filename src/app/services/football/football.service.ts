import { Injectable } from '@angular/core';
import { Game } from './form';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private games = [];
  private counter: number = 0;

  constructor(private storageService: StorageService) {
    this._init();
  }

  private _init(): void {
    this.games = this.storageService.getLocalItem('games') ? JSON.parse(this.storageService.getLocalItem('games')) : [];
    this.counter = this.storageService.getLocalItem('counter') ? Number(this.storageService.getLocalItem('counter')) : 0;
  }


  public addNewGame(form: Game) {
    let game: Game = new Game();
    game.gameId = this.getCounter();
    game.teamName1 = form.teamName1;
    game.teamName2 = form.teamName2;
    game.teamScore1 = form.teamScore1;
    game.teamScore2 = form.teamScore2;
    game.date = form.date;
    this.games.push(game);
    this.storageService.saveToLocal('games', JSON.stringify(this.games));

    return game;
  }

  public updateGame(form: Game) {
    this.games.filter(data => data.gameId == form.gameId).map(game => {
      game.teamName1 = form.teamName1;
      game.teamName2 = form.teamName2;
      game.teamScore1 = form.teamScore1;
      game.teamScore2 = form.teamScore2;
      game.date = form.date;
    });
    this.storageService.saveToLocal('games', JSON.stringify(this.games));
    return form;
  }

  public getGames() {
    return this.games;
  }

  public getGameById(id) {
    return this.games.filter(data => data.gameId == id);
  }

  private getCounter() {
    this.counter += 1;
    this.storageService.saveToLocal('counter', Number(this.counter));
    return this.counter;
  }

  private leagueData = [];
  public getLeagueTables() {
    const teamA = this.getTeam(this.games, "teamName1");
    const teamB = this.getTeam(this.games, "teamName2");
    const combinedTeam = [...teamA, ...teamB];
    const uniqueTeam = this.getUniqueTeam(combinedTeam);
    this.leagueData = [];
    uniqueTeam.forEach(teamName => {
      let teamData = {};
      teamData["teamName"] = teamName
      teamData["played"] = this.numberOfGamePlayed(teamName);
      teamData["won"] = this.numberOfGameWon(teamName);
      teamData["lost"] = this.numberOfGameLost(teamName);
      teamData["draw"] = this.numberOfGameDraw(teamName);
      teamData["points"] = this.getPoints(teamData["won"], teamData["draw"]);
      this.leagueData.push(teamData);
    })

    return this.leagueData.sort((a, b) => b.points - a.points).map((obj, index) => ({ ...obj, pos: (index + 1) }));
  }

  private getTeam = (arrayResults, key) => {
    if (arrayResults.length > 0) {
      return arrayResults.reduce(function (carry, item) {
        if (item[key] && !~carry.indexOf(item[key]))
          carry.push(item[key]);
        return carry;
      }, []);
    } else {
      return [];
    }
  };

  private getPoints(won, draw) {
    return (won * 3) + (draw * 1);
  }

  // code from https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
  private getUniqueTeam(arr) {
    let a = [];
    arr.forEach(element => {
      if (a.indexOf(element) == -1) {
        a.push(element);
      }
    });
    return a;
  }

  private numberOfGamePlayed(teamName) {
    return this.games.filter(game => {
      return game.teamName1 === teamName || game.teamName2 === teamName;
    }).length;
  }


  private numberOfGameWon(teamName) {
    return this.games.filter(game => {
      return ((game.teamName1 === teamName && game.teamScore1 > game.teamScore2) || (game.teamName2 === teamName && game.teamScore2 > game.teamScore1));
    }).length;
  }

  private numberOfGameLost(teamName) {
    return this.games.filter(game => {
      return ((game.teamName1 === teamName && game.teamScore1 < game.teamScore2) || (game.teamName2 === teamName && game.teamScore2 < game.teamScore1));
    }).length;
  }


  private numberOfGameDraw(teamName) {
    return this.games.filter(game => {
      return ((game.teamName1 === teamName && game.teamScore1 === game.teamScore2) || (game.teamName2 === teamName && game.teamScore2 === game.teamScore1));
    }).length;
  }

  public getGamesResult() {
    let gameArray = this.getGames().reduce((groups, game) => {

      if (!groups[game.date]) {
        groups[game.date] = [];
      }
      groups[game.date].push(game);
      return groups;
    }, {});


    const gameResult = Object.keys(gameArray).map((date) => {
      return {
        date,
        games: gameArray[date]
      };
    });
    return gameResult.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  }

}
