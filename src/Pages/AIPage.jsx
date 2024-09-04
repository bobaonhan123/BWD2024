import { AIServerURL } from "../configurations/AxiosConfigurations"

export default function AIPage() {
    return (
        <div className=" w-screen h-screen bg-purple mx-0 my-0">
            <iframe src={AIServerURL} frameborder="0"
            allow="microphone; camera; geolocation; midi; encrypted-media"
            className="w-screen h-screen"></iframe>
        </div>
    )
}