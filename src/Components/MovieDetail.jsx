import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { FaPlay } from "react-icons/fa6";
import "../Style/MovieDetail.css";

const MovieDetail = () => {
  const { id, movies } = useParams();
  const [singleMovieData, setSingleMovieData] = useState([]);

  const BASE_URL = `https://api.tvmaze.com/shows/${id}`;
  const getSingleMovies = async (url) => {
    try {
      const { data } = await axios.get(url);
      // console.log(data);
      setSingleMovieData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleMovies(BASE_URL);
  }, []);

  return (
    <>
      <div className="movie-detail-container">
        <div className="result-container">
          <div className="result-grid" id="result-grid">
            <div className="movie-poster">
              <img src={singleMovieData.image?.original} alt="movie poster" />
              
              <div className="play">
                <NavLink to={singleMovieData.officialSite}>
                  <FaPlay />
                </NavLink>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">{singleMovieData.name}</h3>

              <p className="summary">
                <b>Summary: </b>
                {singleMovieData.summary}
              </p>

              <p className="genre">
                <b>Genre: </b>
                {singleMovieData.genres?.map((val, index) => (
                  <span key={index}>
                    {val}
                    {" | "}
                  </span>
                ))}
              </p>

              <ul className="movie-misc-info">
                <li className="rated">
                  Ratings: {singleMovieData.rating?.average}
                </li>
              </ul>

              <p className="show-info">
                {singleMovieData?.network
                  ? `Network: ${singleMovieData?.network.country.code}, ${singleMovieData.network.country.name}`
                  : ""}
              </p>
              <p className="schedule">
              {singleMovieData?.schedule
                  ? ` schedule: ${singleMovieData?.schedule.days} at ${singleMovieData.schedule.time} (${singleMovieData.averageRuntime}:00)`
                  : ""}
              </p>

              
             
              <p className="status">
                <b>status:</b> {singleMovieData.status}
              </p>
              
             
              <p className="language">
                <b>Language:</b> {singleMovieData.language}
              </p>


            <div className="goBack">
              <NavLink to={"/"}>
                Go back
              </NavLink>
            </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
};

export default MovieDetail;
// Network: United States NBC (1999 - now)
// Schedule: Thursdays at 21:00 (60 min)
// Status: Running
// Show Type: Scripted
// Genres: DramaCrimeLegal
// Episodes ordered: 13 episodes
// Created by: Dick Wolf
// Official site: www.nbc.com
