import axios from "axios";
import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

function Home() {
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    console.log("Fetching Games...");

    axios
      .get(`${import.meta.env.VITE_API_URL}/games`)
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        setGames(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(fetchGames, []);

  const [search, setSearch] = useState("");
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    const filtered = games.filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [search, games]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="my-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a game..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <hr style={{ borderColor: "#a4ff00" }} />
      <div className="row">
        <p className="text-lime">
          Giochi presenti nel catalogo: {filteredGames.length}
        </p>
        {filteredGames.map((game, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 gy-3">
            <GameCard
              id={game.id}
              title={game.title}
              gameImg={game.gameImg}
              publisher={game.publisher}
              releaseDate={game.releaseDate}
              description={game.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
