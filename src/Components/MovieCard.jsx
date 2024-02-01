import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import "../Style/MovieCard.css";
import { NavLink } from "react-router-dom";
import { FaStar, FaAngleUp } from "react-icons/fa";
import Loading from "./Loading";

const MovieCard = () => {
  const { movies, isLoading } = useGlobalContext();
  // console.log(movies);
  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading}/>
      ) : (
        <div className="container">
          {movies.map((movie) => (
            <NavLink to={`movie/${movie.show.id}`} key={movie.show.id}>
              <div className="movie-card">
                <div className="content-card">
                  <img src={movie.show.image?.original} alt="image" />
                  <span className="shadow"></span>
                  <div className="content">
                    <h1>{movie.show.name}</h1>
                    <p className="date">
                      {movie.show.premiered}. {movie.show.network?.name}
                    </p>
                    <b>{movie.show.averageRuntime} Min</b>
                    <div className="stars">
                      {movie.show.rating?.average ? (
                        <span>
                          {movie.show.rating?.average}
                          <span>
                            <FaStar />
                          </span>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="hex-tag">
                      {movie.show.genres.map((val, index) => (
                        <div key={index} className="tag">
                          {val}
                        </div>
                      ))}
                    </div>
                    <div className="angle-up">
                      <FaAngleUp />
                    </div>
                  </div>
                </div>

                <div className="watch-card">
                  <button>watch now</button>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieCard;
