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
        setGame(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGame();
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row g-4 align-items-center">
        {/* Immagine gioco */}
        <div className="col-lg-5 text-center">
          <img
            src="/img/elden.webp"
            alt={game.title}
            className="img-fluid rounded shadow border border-lime"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Info gioco */}
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold text-lime">{game.title}</h1>
          <p className="text-white-50 fs-5">{game.description}</p>

          <ul className="list-unstyled mt-3">
            <li>
              <strong className="text-lime">Publisher:</strong>{" "}
              <span className="text-light">{game.publisher}</span>
            </li>
            <li>
              <strong className="text-lime">Release Date:</strong>{" "}
              <span className="text-light">{game.releaseDate}</span>
            </li>
            {game.categories && game.categories.length > 0 && (
              <li>
                <strong className="text-lime">Categories:</strong>{" "}
                <span className="text-light">
                  {game.categories.map((c) => c.name).join(", ")}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Pulsante di ritorno */}
      <div className="mt-5 ">
        <a href="/" className="btn btn-outline-lime px-4 text-lime">
          Torna alla Home
        </a>
      </div>
    </div>
  );
};

export default Detail;
