import axios from 'axios'   
import { useEffect, useState } from 'react'

function AboutPage() {
    const [text, setText] = useState('')
    useEffect(() => {
        axios.get('http://103.252.136.203:8083/hello', {
            headers: {
            }
        })
        .then(res => {
            setText(res.data)
        })
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold underline py-96">
                {text}
            </h1>
        </div>
    )
}

export default AboutPage