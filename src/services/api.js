const CHARACTERS_URL = "https://dragonball-api.com/api/characters";
const PLANETS_URL = "https://dragonball-api.com/api/planets"

export const getAllCharacters = async () => {
  try {
    const response = await fetch(CHARACTERS_URL);
    if (!response.ok) throw new Error("Error al obtener los personajes");
    const data = await response.json();
    //return console.log(data.items); // Ajustá según cómo venga la data exacta
    return data.items;
  } catch (error) {
    console.error("Error en getAllCharacters:", error);
    return [];
  }
};


export const getAllPlanets = async () => {
  try {
    const response = await fetch (PLANETS_URL);
    if (!response.ok) throw new Error ("Error al obtener los planetas");
    const planetsData = await response.json();
    return console.log(planetsData)
  } catch (error) {
    console.error ("Error en getAllPlanets", error);
    return [];
  }

}