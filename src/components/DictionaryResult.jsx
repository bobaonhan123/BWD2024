import {
    faCircle,
    faStar,
    faVolumeHigh,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useEffect, useState } from "react";
  
  import Spinner from "./Spinner";
  
  function DictionaryResult({ query }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
  
    // const playAudio = () => {
    //   if (data[0].phonetics[0].audio) {
    //     // Convert the relative URL to an absolute URL
    //     const audioUrl = data[0].phonetics[0].audio.startsWith("//")
    //       ? `https:${data[0].phonetics[0].audio}`
    //       : data[0].phonetics[0].audio;
  
    //     const audio = new Audio(audioUrl);
    //     audio.play();
    //   } else {
    //     console.log("No audio file available.");
    //   }
    // };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setError(null);
          setLoading(true);
  
          const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
          );
  
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          const result = await response.json();
  
          setData(result);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [query]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    if (!data) {
      return <Spinner />;
    }
  
    const word = data[0].word;
    const partOfSpeech = data[0].meanings[0].partOfSpeech;
    const phonetics = data[0].phonetics[0].text;
    const definitions = data[0].meanings[0].definitions;
  
    console.log(definitions);
  
    return (
      <div className="transition-max-height duration-500 ease-in-out text-gray-main ">
        <hr className="my-5" />
        <div className="space-y-2">
          <div className="flex items-center font-semibold mb-1">
            <p className="bg-word-bg w-fit py-1 px-2 rounded-full bg-opacity-20 mr-2">
              {word} :
            </p>
            <p>meaning</p>
          </div>
          <div className="flex items-center text-main-start">
            <FontAwesomeIcon icon={faCircle} className="size-3  mx-3" />
            <p>{partOfSpeech}</p>
          </div>
          <div className="flex items-center text-gray-normal">
            <FontAwesomeIcon icon={faVolumeHigh} className="mx-3" />
            <p>{phonetics}</p>
          </div>
  
          {definitions.map((def, index) => (
            <div key={index}>
              <div className="flex items-center justify-start text-left">
                <FontAwesomeIcon icon={faStar} className="mx-3" />
                <p className="font-semibold">{def.definition}</p>
              </div>
              {def.example && (
                <p className="font-light italic mx-3
                text-left ml-10">{def.example}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default DictionaryResult;