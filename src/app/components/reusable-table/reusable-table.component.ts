import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html'
})
export class ReusableTableComponent implements OnInit {

  @Input() gridData: any;
  @Input() colData: any;
  @Input() edit: boolean = false;
  @Input() delete: boolean = false;
  @Input() editRoute: string = '';
  @Input() deleteCallbackFunction: Function;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public editItem(id: any): void {
    console.log(id);
    console.log(this.editRoute);
    this.router.navigate([this.editRoute, { id: id }]);
    // this.router.navigate([this.editRoute, { id: id }], { relativeTo: this.activatedRoute });

  }

  public deleteItem(id: any): void {
    this.deleteCallbackFunction(id);
  }

}
