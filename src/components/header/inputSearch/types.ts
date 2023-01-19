import { Movie } from '@interfaces';

interface InputSearchProps {
    searchValue: string;
    searchMovies: Movie[];
    handleChange: () => void;
    redirectToSearchPage: () => void;
    isFetching: boolean;
    type: string;
    placeholder: string;
}

export type { InputSearchProps };
