import {ChangeDetectorRef, Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild} from '@angular/core';

import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

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

  displayedColumns: string[] = ['id', 'username', 'email', 'createdAt', 'userid'];

  isLoading: boolean;

  isTotalReached: boolean;

  page: number;

  pageEvent: PageEvent;

  pageSize: number;

  resultsLength: number;

  search: string;

  totalItems: number;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    // public dialog: MatDialog,
    // public snack: MatSnackBar,
    public userService: UserService
  ) {
    super();
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getData();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // this.getData();
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  getData(): void {
    console.log('getData');
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.isLoading = true;

    this.userService.getList().subscribe(
      data => {
        this.isLoading = false;
        this.dataSource.data = data?.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(id: number): void {
  }

  edit(data: User): void {
  }

  save(): void {
  }

}
