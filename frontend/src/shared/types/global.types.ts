export interface IResponse<R extends object> {
  count: number;
  next: boolean;
  previous: boolean;
  results: R;
}
