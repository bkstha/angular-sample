import { Component, OnInit } from '@angular/core';
import { Game } from './form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FootballService } from '../../../services/football.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private readonly footballService: FootballService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {}

  private activeId = '';
  public errorMessage: string = '';
  public successMessage: string = '';
  private game: Game;

  public gameForm: FormGroup;

  ngOnInit(): void {
    this.initializeGame();
    this.resetForm();
  }

  private initializeGame() {
    this.activeId = this.route.snapshot.params.id;
    if (this.activeId) {
      this.game = this.footballService.getGameById(this.activeId)[0];
    } else {
      this.game = new Game();
    }
  }

  private resetForm() {
    this.gameForm = this.fb.group({
      teamName1: [this.game.teamName1, Validators.required],
      teamName2: [this.game.teamName2, Validators.required],
      teamScore1: [
        this.game.teamScore1,
        [Validators.required, Validators.min(0)],
      ],
      teamScore2: [
        this.game.teamScore2,
        [Validators.required, Validators.min(0)],
      ],
      date: [this.game.date, Validators.required],
      gameId: [this.game.gameId],
    });
  }

  public onSubmit(): void {
    const gameData: Game = this.gameForm.value;
    if (gameData.gameId != null) {
      this.footballService.updateGame(gameData);
    } else {
      this.footballService.addNewGame(gameData);
    }
    this.router.navigate(['football/results']);
  }

  clearForm() {
    this.gameForm.reset();
  }
}
