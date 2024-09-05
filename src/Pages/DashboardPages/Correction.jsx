import { useState } from "react"

import { generateContent } from "../../api/geminiAPI"

export default function Correction() {
    const [content, setContent] = useState("")
    const handleClick = async () => {
        const res = await generateContent("how are yu")
        setContent(res)
    }
    console.log("env:",import.meta.env.VITE_GEMINI_API_KEY)
    return (
        <div className="w-3/5 mx-auto pt-8 h-screen">
            {content}
            <button onClick={handleClick}>Generate</button>
        </div>
    )
}