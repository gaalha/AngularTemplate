import {ChangeDetectorRef, Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import {UserService} from '~providers/user.service';
import {CrudController} from '~app/base/controller';
import {User} from '~models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends CrudController<User> implements OnInit, AfterViewInit, AfterViewChecked {

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  displayedColumns: string[] = ['id', 'username', 'email', 'created_at', 'userid'];

  isLoading: boolean;

  isTotalReached: boolean;

  page: number;

  pageEvent: PageEvent;

  pageSize: number;

  resultsLength: number;

  search: string;

  totalItems: number;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
    public snack: MatSnackBar,
    public userService: UserService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getData();
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  delete(id: number): void {
  }

  edit(data: User): void {
  }

  getData(): void {
  }

  save(): void {
  }

}
