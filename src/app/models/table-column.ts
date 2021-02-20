export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (cell: any) => string;
}
