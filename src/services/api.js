const CHARACTERS_URL = "https://dragonball-api.com/api/characters";
const PLANETS_URL = "https://dragonball-api.com/api/planets"

export const getAllCharacters = async () => {
  try {
    const response = await fetch(CHARACTERS_URL);
    if (!response.ok) throw new Error("Error al obtener los personajes");
    const charactersData = await response.json();
    //return console.log(charactersData.items); 
    return charactersData.items;
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
    //return console.log(planetsData.items)
    return planetsData.items;
  } catch (error) {
    console.error ("Error en getAllPlanets", error);
    return [];
  }

}