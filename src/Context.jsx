import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export const AppContext = React.createContext();

const URL = `https://api.tvmaze.com/search/shows?`;

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("kill");

  const getMovies = async (url) => {
    try {
      const { data } = await axios.get(url);
      setIsLoading(false);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      getMovies(`${URL}q=${query}`);
    }, 800);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider
      value={{ isError, isLoading, movies, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom global hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
