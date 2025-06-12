import type { Character } from "../services/character-service"
import CharacterCard from "./CharacterCard"


interface Props {
    characterArray: Character[]
}
//<div className="flex flex-row justify-between flex-wrap gap-4">
const CharacterCardList = ( {characterArray}: Props ) => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characterArray.map(character =>
             <CharacterCard key={character.name} characterName={character.name} imgSrc={character.image} />
        )}
    </div>
  )
}

export default CharacterCardList