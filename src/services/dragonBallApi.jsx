const API_URL = "https://dragonball-api.com/api/characters";

export const getAllCharacters = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los personajes");
    const data = await response.json();
    return data.items; // Ajustá según cómo venga la data exacta
  } catch (error) {
    console.error("Error en getAllCharacters:", error);
    return [];
  }
};
