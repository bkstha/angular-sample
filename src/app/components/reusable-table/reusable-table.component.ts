import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
})
export class ReusableTableComponent implements OnInit {
  @Input() gridData: any;
  @Input() colData: any;
  @Input() edit = false;
  @Input() delete = false;

  @Output() public editActionClicked: EventEmitter<any> = new EventEmitter<
    any
  >();
  @Output() public deleteActionClicked: EventEmitter<any> = new EventEmitter<
    any
  >();

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public editItem(id: any): void {
    this.editActionClicked.emit(id);
  }

  public deleteItem(id: any): void {
    this.deleteActionClicked.emit(id);
  }
}
