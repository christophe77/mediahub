export interface Movie {
  id: number;
  Title: string;
  'US Gross'?: number;
  'US DVD Sales'?: number;
  'Worldwide Gross'?: number;
  'Production Budget'?: number;
  'Release Date'?: string;
  Distributor?: string;
  'IMDB Rating'?: number;
  'IMDB Votes'?: number;
  'Major Genre'?: string;
  Director?: string;
  'Rotten Tomatoes Rating'?: string;
}
export type OrderBy = "Title" | "Rotten Tomatoes Rating" | "IMDB Rating" | "IMDB Votes"
