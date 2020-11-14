import { paginationDataInterface } from './pagination.interfaces';
export interface Status {
  long: string;
  short: string;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
  season: number;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
}

export interface Teams {
  home: Home;
  away: Away;
}

export interface Innings {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  extra?: any;
}

export interface Home2 {
  hits: number;
  errors: number;
  innings: Innings;
  total: number;
}

export interface Innings2 {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  extra?: any;
}

export interface Away2 {
  hits: number;
  errors: number;
  innings: Innings2;
  total: number;
}

export interface Scores {
  home: Home2;
  away: Away2;
}

export interface Game {
  id: number;
  date: Date;
  time: string;
  timestamp: number;
  timezone: string;
  week?: any;
  status: Status;
  country: Country;
  league: League;
  teams: Teams;
  scores: Scores;
}

export interface DataGames {
  data: Game[];
  pagination: paginationDataInterface;
}
