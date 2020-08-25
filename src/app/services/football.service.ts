import { Injectable } from '@angular/core';
import { Game } from '../components/football/new/form';
import { StorageService } from 'src/app/services/storage.service';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private games;
  private counter;
  constructor(private storageService: StorageService) {
    console.log("service constructor");
    this.games = this.storageService.getLocalItem('games') ? JSON.parse(this.storageService.getLocalItem('games')) : [];
    console.log(this.games);
    this.counter = this.storageService.getLocalItem('counter') ? parseInt(this.storageService.getLocalItem('counter')) : 0;
  }


  addNewGame(form: Game) {
    let game: Game = new Game();
    game.gameId = this.getCounter();
    game.teamName1 = form.teamName1;
    game.teamName2 = form.teamName2;
    game.teamScore1 = form.teamScore1;
    game.teamScore2 = form.teamScore2;
    game.date = form.date;
    this.games.push(game);
    console.log(this.games);
    this.storageService.saveToLocal('games', JSON.stringify(this.games));

    return game;
  }

  updateGame(form: Game) {
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
    console.log("get games by id");
    console.log(this.games.filter(data => data.gameId == id));
    return this.games.filter(data => data.gameId == id);
  }

  private getCounter() {
    this.counter += 1;
    this.storageService.saveToLocal('counter', this.counter);
    return this.counter;
  }
}
