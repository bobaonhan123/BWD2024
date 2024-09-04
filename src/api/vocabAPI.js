import { server } from "../configurations/AxiosConfigurations";

export const Vocabs = async () => {
    try {
        const response = await server.get("/vocab" , { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        if (response.status === 204) {
            return [];
        }
        return response.data;
    } catch (error) {
        return error;
    }
};
