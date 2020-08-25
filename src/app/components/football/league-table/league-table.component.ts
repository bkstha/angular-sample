import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';
import { Game } from 'src/app/components/football/new/form';
@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  games = [];
  leagueData = [];

  constructor(private footballService: FootballService) {
    this.games = this.footballService.getGames();
    console.log(this.games);
    this.getLeagueData();
  }

  ngOnInit(): void {
  }

  getLeagueData() {
    const teamA = this.getTeam(this.games, "teamName1");
    const teamB = this.getTeam(this.games, "teamName2");
    const combinedTeam = [...teamA, ...teamB];
    console.log("combined team ", combinedTeam);
    const uniqueTeam = this.getUniqueTeam(combinedTeam);
    console.log("unique team ", uniqueTeam);
    this.leagueData =[];
    uniqueTeam.forEach(teamName => {
      let teamData = {};
      teamData["teamName"] = teamName
      teamData["played"] = this.numberOfGamePlayed(teamName);
      teamData["won"] = this.numberOfGameWon(teamName);
      teamData["lost"] = this.numberOfGameLost(teamName);
      teamData["draw"] = this.numberOfGameDraw(teamName);
      teamData["points"] = this.getPoints(teamData["won"], teamData["draw"]);
      console.log("----------------");
      console.log("teamData", teamData);
      console.log(this.games);
      this.leagueData.push(teamData);
      console.log(this.leagueData);
    })

    this.leagueData = this.leagueData.sort((a, b) => b.points - a.points)
  }

  getPoints(won, draw) {
    return (won * 3) + (draw * 1);
  }

  getTeam = (arrayResults, key) => {
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

  // code from https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
  getUniqueTeam(arr) {
    let a = [];
    console.log("getUniqueTeam");
    arr.forEach(element => {
      console.log(element)
      if (a.indexOf(element) == -1) {
        a.push(element);
      }

      // if (!a.indexOf(element)) {
      //   a.push(element);
      // }
    });
    return a;
  }

  numberOfGamePlayed(teamName) {
    return this.games.filter(game => {
      return game.teamName1 === teamName || game.teamName2 === teamName;
    }).length;
  }


  numberOfGameWon(teamName) {
    return this.games.filter(game => {
      return ((game.teamName1 === teamName && game.teamScore1 > game.teamScore2) || (game.teamName2 === teamName && game.teamScore2 > game.teamScore1));
    }).length;
  }

  numberOfGameLost(teamName) {
    return this.games.filter(game => {
      return ((game.teamName1 === teamName && game.teamScore1 < game.teamScore2) || (game.teamName2 === teamName && game.teamScore2 < game.teamScore1));
    }).length;
  }


  numberOfGameDraw(teamName) {
    return this.games.filter(game => {
      return ((game.teamName1 === teamName && game.teamScore1 === game.teamScore2) || (game.teamName2 === teamName && game.teamScore2 === game.teamScore1));
    }).length;
  }



}
