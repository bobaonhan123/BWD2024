import { useEffect, useState } from 'react'

function AboutPage() {
    const [text, setText] = useState('')
    

    return (
        <div>
            <h1 className="text-3xl font-bold underline py-96">
                {text}
            </h1>
        </div>
    )
}

export default AboutPage