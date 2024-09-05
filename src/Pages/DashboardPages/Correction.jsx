import { useState } from "react"

import { generateContent } from "../../api/geminiAPI"

export default function Correction() {
    const [input, setInput] = useState("")
    const [content, setContent] = useState("")

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }
    const handleClick = async () => {
        const res = await generateContent(`Correct grammar and spelling errors, recognize the text and respond only to the correct sentence in quotation marks, without saying anything else: "${input}"`)
        const response = res.split("\"")[1]
        setContent(response)
    }

    console.log("env:",import.meta.env.VITE_GEMINI_API_KEY)
    return (
        <div className="w-3/5 mx-auto pt-8 h-screen">
            <textarea className="w-full h-2/5
            p-4 rounded-3xl shadow-lg" value={input}
            onChange={handleInputChange}></textarea>
            <button onClick={handleClick}
            className="p-4 py-2
             m-2 text-white rounded-full bg-gradient-to-r
            from-[#00F2FE] from-21%
            to-[#4FACFE]">Generate</button>
            <textarea className="w-full h-2/5
            p-4 rounded-3xl shadow-lg" value={content}
            onChange={handleContentChange}></textarea>
        </div>
    )
}