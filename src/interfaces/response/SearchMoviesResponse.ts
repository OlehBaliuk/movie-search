import { Movie } from "@interfaces";

interface SearchMoviesResponse {
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}

export type { SearchMoviesResponse };
