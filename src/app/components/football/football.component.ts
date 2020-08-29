import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
})
export class FootballComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public redirectTothisPage(route: string): void {
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }
}
