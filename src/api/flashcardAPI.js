import { server } from '../configurations/AxiosConfigurations';
export const createFlashcardSet = async (flashcardSet) => {
    try {
        const token = localStorage.getItem('token');
        console.log(token)
        const response = await server.post("/flashcard", flashcardSet, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating flashcard set:', error);
        throw error;
    }
};
