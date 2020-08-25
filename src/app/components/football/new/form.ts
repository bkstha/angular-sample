import { NumberLiteralType } from "typescript";

interface IGame {
    gameId: Number;
    teamName1 : string;
    teamName2 : string;
    teamScore1 : number;
    teamScore2 : number;
    date: Date;

    setGame(game:IGame);
}

export class Game implements IGame {
    gameId: Number ;
    teamName1: string = '';
    teamName2: string = '';
    teamScore1: number = 0;
    teamScore2: number = 0;
    date: Date;


    constructor(){}
    setGame(game: IGame) {
        this.gameId = game.gameId;
        this.teamName1 = game.teamName1;
        this.teamName2 = game.teamName2;
        this.teamScore1 = game.teamScore1;
        this.teamScore2 = game.teamScore2;
        this.date = game.date;
    }

    getGame() {
        return this;
    }

}