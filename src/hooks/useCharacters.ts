import { useEffect, useState } from "react";
import characterService, { type ApiCharacterObject, type Character } from "../services/character-service"
import { CanceledError } from "axios";
function useCharacters() {

const [characters, setCharacters] = useState<Character[]>([]);
const [isLoading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    const {request, cancel} = characterService.getAll<ApiCharacterObject>();
    request
        .then( (response) => { setLoading(false); setCharacters(response.data.results)})
        .catch( err => {
            if(err instanceof CanceledError) return
            setLoading(false);
            setError(err.message)
        });
    return () => cancel();
},[])
    
return {characters, isLoading, error, setCharacters, setError};
}

export default useCharacters;