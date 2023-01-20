interface Genre {
    id: number;
    name: string;
}

interface Movie {
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    savedTimestamp: number;
    title: string;
    vote_average: number;
    genres: Genre[];
}

export type { Movie, Genre };
