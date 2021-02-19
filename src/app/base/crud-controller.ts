import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export abstract class CrudController<T> {

  protected constructor() {
  }

  /**
   * String list of columns to display in mat-table.
   */
  abstract displayedColumns: string[];

  /**
   * Numbers of rows per page show on page size select at the bottom of mat-table.
   */
  readonly pageSizeOptions: number[] = [5, 10, 20, 40, 100];

  /**
   * Save the selected value of the pageSizeOptions.
   */
  abstract pageSize = 20;

  /**
   * Contains the fetched data, used to fill mat-table.
   */
  abstract dataSource: MatTableDataSource<T>;

  abstract pageEvent: PageEvent;

  abstract resultsLength = 0;

  /**
   * Current page number
   */
  abstract page = 1;

  /**
   * Is mat-table loading the data?
   */
  abstract isLoading = false;

  abstract isTotalReached = false;

  abstract totalItems = 0;

  abstract search = '';

  /**
   * Get paginated data from api for mat-table
   */
  abstract callGetData(): void;

  abstract callEdit(data: T): void;

  abstract callSave(): void;

  abstract callDelete(id: number): void;

  public onPaginateChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.callGetData();
  }

  public applyFilter(filterValue: string): void{
    filterValue = filterValue.trim().toLowerCase();
    this.callGetData();
  }

}
