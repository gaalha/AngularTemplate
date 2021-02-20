export interface TableBtn {
  styleClass: string;
  icon: string;
  payload: (payload: any) => string;
  action: string;
}
