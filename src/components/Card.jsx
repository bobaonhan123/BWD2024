export default function Card({ word, ipa, type, en_term, vi_term, image, examples }) {
    const WORD_TYPE_MAPPING = {
        "verb": "v",
        "noun": "n",
        "adjective": "adj",
        "adverb": "adv",
    }
    return (
        <div className="mx-6 my-8
     bg-[#f6f7fb]
    rounded-lg
    flex
    py-6 pr-6 pl-10">
            <div className="w-full rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="font-bold">{word} ({WORD_TYPE_MAPPING[type]})</div>
                        <div className="ml-4">{`/${ipa}/`}</div>
                    </div>
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="mt-4
                flex flex-col items-start">
                    <div className="">Term:</div>
                    <div className="text-[#6C7580]">{en_term}</div>
                    <div className="mt-2 text-[#6C7580]
                    font-montserrat font-medium">{vi_term}</div>
                </div>
                <div className="mt-4 text-[#4B5563]
                flex flex-col items-start">
                    <div className="text-[#000000]">Examples:</div>
                    <ul className="mt-2 pl-6">
                        {examples.map((example, index) => (
                            <li key={index} className="text-left 
                            list-disc">{example}</li>
                        ))}
                    </ul>
                </div>
                

            </div>
            <div className="rounded-lg">
                    <img src={image} alt="word" className="w-80 
                    h-36 object-cover
                    rounded-lg
                    " />
                </div>
        </div>)
}
