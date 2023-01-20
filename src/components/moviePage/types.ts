import { Actor } from '@interfaces';

interface CastByMovieResponse {
    id: number;
    cast: Actor[];
    crew: Array<any>;
}

export type { CastByMovieResponse };
