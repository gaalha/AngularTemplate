import {ChangeDetectorRef, Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import {UserService} from '~providers/user.service';
import {CrudController} from '~app/base/crud-controller';
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
  }

  ngAfterViewInit() {
    this.callGetData();
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  callGetData(): void {
    // TODO: Buscar la forma de hacer toda esta lógica reutilizable.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading = true;
          return this.userService.list();
        }),
        map(data => {
          this.isLoading = false;
          this.isTotalReached = false;
          this.totalItems = data.total;
          return data.data;
        }),
        catchError(() => {
          this.isLoading = false;
          this.isTotalReached = true;
          return of([]);
        })
      ).subscribe(
        (data: User[]) => this.dataSource.data = data,
      error => console.log(error)
    );
  }

  callDelete(id: number): void {
  }

  callEdit(data: User): void {
  }

  callSave(): void {
  }

}
