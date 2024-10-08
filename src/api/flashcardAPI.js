import {server} from "../configurations/AxiosConfigurations";

export const createFlashcardSet = async (flashcardSet) => {

  try {
    const token = localStorage.getItem("token");
    return await server.post("/flashcard", flashcardSet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    // console.error("Error creating flashcard set:", error);
    throw error;
  }
};

export const getUserFlashcardSet = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await server.get("/flashcard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // console.error("Error getting flashcard set:", error);
    throw error;
  }
};

export const getGlobalFlashcardSet = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await server.get("/flashcard/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // console.error("Error getting flashcard set:", error);
    throw error;
  }
};

export const getDetailCardSet = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await server.get(`/flashcard/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // console.error("Error getting detail flashcard set:", error);
    throw error;
  }
};
