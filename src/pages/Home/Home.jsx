import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services/api";
import Characters from "../Characters/Characters";



const Home = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getAllCharacters();
      setPersonajes(data);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
  <h1>Personajes de Dragon Ball</h1>
  <Characters personajes={personajes} />
    </div>
  );
};

export default Home;
