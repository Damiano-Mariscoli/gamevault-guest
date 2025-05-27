// src/pages/Detail.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/games/${id}`
        );
        console.log(response.data);
        setGame(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGame();
  }, [id]);

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/img/elden.webp"
            alt={game.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 font-bold mb-4 text-lime">{game.title}</h1>
          <p className="text-white">{game.description}</p>
          <div className="row">
            <div className="col-md-6">
              <p className="text-white">Release Date: {game.releaseDate}</p>
              <p className="text-white">
                Categories:{" "}
                {game.categories
                  ? game.categories.map((c) => c.name).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
          <a href="/" className="btn btn-secondary mt-4">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
