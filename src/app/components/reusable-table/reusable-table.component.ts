import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html'
})
export class ReusableTableComponent implements OnInit {

  @Input() gridData: any;
  @Input() colData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
