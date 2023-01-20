import React, { useEffect, useState } from "react";
import { api } from "@api";
import { Movie } from "@interfaces";
import { SearchMoviesResponse } from "@interfaces";

export const useSearchMovies = (
    searchValue: string | null,
    setSearchMovies: (arg: Movie[]) => void
) => {
    const [isFetching, setIsFetching] = useState(true);

    async function getSearchMovies(
        searchValue: string | null,
        setSearchMovies: (arg: Movie[]) => void
    ) {
        if (!searchValue) return;
        try {
            const response = (await api.getSearchMovies(
                searchValue
            )) as SearchMoviesResponse;
            setSearchMovies(response.results);
            setIsFetching(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSearchMovies(searchValue, setSearchMovies);
    }, [searchValue]);

    return { isFetching };
};
