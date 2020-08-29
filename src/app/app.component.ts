import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly title = 'my-app';

  constructor(private readonly router: Router) {}

  public redirectTothisPage(route: string): void {
    this.router.navigate([route]);
  }
}
