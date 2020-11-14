import { paginationDataInterface } from './pagination.interfaces';
export interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  nationnal: boolean;
  country: Country;
}

export interface DataTeam {
  data: Team[];
  pagination: paginationDataInterface;
}
