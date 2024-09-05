import { geminiServer } from "../configurations/AxiosConfigurations";

export const generateContent = async (data) => {
    try {
        const response = await geminiServer.post('', {"contents":[{"parts":[{"text":data}]}]})
        console.log(response.data.candidates[0].content.parts[0].text)
        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.log(error)
        return null
    }
}