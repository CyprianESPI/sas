export interface ISearchable {
  searchText: string;
  search(searchText: string): boolean;
}
