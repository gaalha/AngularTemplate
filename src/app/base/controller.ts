import { PageEvent } from '@angular/material/paginator';

export abstract class CrudController {

  protected constructor() {
  }

  /**
   * String listo of columns to display in mat-table.
   */
  abstract displayedColumns: string[];

  /**
   * Numbers of rows per page show on page size select at the bottom of mat-table.
   */
  readonly pageSizeOptions: number[] = [5, 10, 20, 40, 100];

  /**
   * Save the selected value of the pageSizeOptions.
   */
  abstract pageSize: number;

  /**
   * Contains the fetched data, used to fill mat-table.
   */
  abstract dataSource: any;

  abstract pageEvent: PageEvent;

  abstract resultsLength: number;

  /**
   * Current page number
   */
  abstract page: number;

  /**
   * Is mat-table loading the data?
   */
  abstract isLoading: boolean;

  abstract isTotalReached: boolean;

  abstract totalItems: number;

  abstract search: string;

  /**
   * Get paginated data from api for mat-table
   */
  abstract getData(): void;

  abstract edit(data: any): void;

  abstract save(): void;

  abstract delete(data: any): void;

  abstract onPaginateChange(event: any): void;

  abstract applyFilter(filterValue: string): void;
}
