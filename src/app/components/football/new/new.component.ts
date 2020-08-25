import { Component, OnInit } from '@angular/core';
import { Game } from './form'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FootballService } from '../../../services/football.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private footballService: FootballService,
    private router: Router,
    private route: ActivatedRoute) { }

  activeId = '';
  errorMessage: string = '';
  successMessage: string = '';
  game;

  gameForm: FormGroup;



  // get aliases() {
  //   return this.gameForm.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }


  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.activeId = params['id'];
    //   console.log("active id: ", this.activeId);
    //   if(this.activeId) {
    //     this.game = this.footballService.getGameById(this.activeId)[0];
    //   }
    // });
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.activeId = params.get('id');
    //     if (this.activeId) {
    //       this.game = this.footballService.getGameById(this.activeId)[0];
    //     }
    //     return this.game
    //     // this.service.getHero(params.get('id')))
    //   }));

    this.activeId = this.route.snapshot.params.id;
    console.log("active id: ", this.activeId);
    if (this.activeId) {
      this.game = this.footballService.getGameById(this.activeId)[0];
    } else {
      this.game = new Game();
    }
    console.log(this.game);

    this.gameForm = this.fb.group({
      teamName1: [this.game.teamName1, Validators.required],
      teamName2: [this.game.teamName2, Validators.required],
      teamScore1: [this.game.teamScore1, [Validators.required, Validators.min(0)]],
      teamScore2: [this.game.teamScore2, [Validators.required, Validators.min(0)]],
      date: [this.game.date, Validators.required],
      gameId: [this.game.gameId],
    });
  }

  onSubmit(): void {
    console.log(this.gameForm.value);
    const gameData: Game = this.gameForm.value;
    let newGame;
    if (gameData.gameId != null) {
      newGame = this.footballService.updateGame(gameData);

      // if (newGame.gameId != null) {
      //   this.successMessage = 'Game added successfully';
      //   this.errorMessage = '';
      //   this.clearForm();
      // } else {
      //   this.successMessage = '';
      //   this.errorMessage = 'Error add new Game';
      // }
    } else {
      newGame = this.footballService.addNewGame(gameData);


    }
    if (newGame.gameId != null) {
      this.successMessage = 'Game added successfully';
      this.errorMessage = '';
      this.clearForm();
      this.router.navigate(['football/results']);
    } else {
      this.successMessage = '';
      this.errorMessage = 'Error add new Game';
    }
  }


  clearForm() {
    this.gameForm.reset();
  }

}
