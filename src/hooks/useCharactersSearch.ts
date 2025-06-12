import { useEffect, useState } from "react";
import characterService, { type ApiCharacterObject, type Character } from "../services/character-service"
import { CanceledError } from "axios";
function useCharactersSearch(name: string, status: string, page: number) {

const [characters, setCharacters] = useState<Character[]>([]);
const [isLoading, setLoading] = useState(true);
const [error, setError] = useState("");
const [hasMore, setHasMore] = useState(false);

useEffect(() => {
    setCharacters([])
}, [name, status])

useEffect(() => {
    setLoading(true)
    setError("")
    const {request, cancel} = characterService.getAllWithParams<ApiCharacterObject>(name, status, page);
    console.log(request)
    request
        .then( (response) => {
            setLoading(false);
            setError("");
            setCharacters((prevCharacters) => [...prevCharacters, ...response.data.results]);
            response.data.info.next === null ? setHasMore(false) : setHasMore(true);
         }) 
        .catch( err => {
            if(err instanceof CanceledError) return
            setLoading(false);
            setError(err.message)
            console.log(err.message)
        });
    return () => cancel();
},[name, status, page])
    
return {characters, isLoading, error, hasMore, setCharacters, setError};
}

export default useCharactersSearch;