import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledMovieWrapper } from "./Movie.style";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { CardList } from "../../components/CardList/CardList";

const apiKey = "Enter API key";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("Star Wars");

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          query: searchKeyword,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, [searchKeyword]);
  
  return (
    <StyledMovieWrapper>
      <SearchBox
        setSearchKeyword={setSearchKeyword}
        placeholder="Enter a movie name..."
      />
      <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
    </StyledMovieWrapper>
  );
}

export default Movie;
