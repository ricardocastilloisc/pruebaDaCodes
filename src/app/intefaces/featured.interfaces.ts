import { paginationDataInterface } from './pagination.interfaces';

export interface Datum {
  id: number;
  name: string;
  video: string;
}

// tslint:disable-next-line: class-name
export interface featuredDataInterface {
  data: Datum[];
  pagination: paginationDataInterface;
}
