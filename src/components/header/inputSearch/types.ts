import { Movie } from '@interfaces';

interface InputSearchProps {
    searchValue: string;
    searchMovies: Movie[] | null;
    handleChange: (e?: any) => void;
    redirectToSearchPage: (e?: any) => void;
    isFetching: boolean;
    type: string;
    placeholder: string;
}

export type { InputSearchProps };
