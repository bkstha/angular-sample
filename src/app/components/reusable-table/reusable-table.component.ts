import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
})
export class ReusableTableComponent implements OnInit {
  @Input() public gridData: any;
  @Input() public colData: any;
  @Input() public edit = false;
  @Input() public delete = false;

  @Output() public editActionClicked: EventEmitter<any> = new EventEmitter<
    any
  >();
  @Output() public deleteActionClicked: EventEmitter<any> = new EventEmitter<
    any
  >();

  constructor() {}

  ngOnInit(): void {}

  public editItem(id: any): void {
    this.editActionClicked.emit(id);
  }

  public deleteItem(id: any): void {
    this.deleteActionClicked.emit(id);
  }
}
