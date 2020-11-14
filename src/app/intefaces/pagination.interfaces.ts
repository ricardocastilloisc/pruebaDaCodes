
  export interface Links {
      first?: any;
      last?: any;
      next?: any;
      prev?: any;
  }

  export interface Pagination {
      total_rows: number;
      per_page: number;
      current_page: number;
      links: Links;
  }

  // tslint:disable-next-line: class-name
  export interface paginationDataInterface {
      pagination: Pagination;
  }

