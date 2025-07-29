import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services/dragonBallApi";


const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getAllCharacters();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Personajes:</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
