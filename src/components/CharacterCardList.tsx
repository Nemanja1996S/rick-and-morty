import type { Character } from "../services/character-service"
import CharacterCard from "./CharacterCard"


interface Props {
    characterArray: Character[],
    lastCardImgRef: React.Ref<HTMLImageElement> | null
}

const CharacterCardList = ( {characterArray, lastCardImgRef}: Props ) => {
  if(characterArray.length === 0) return;
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characterArray.map((character, index) =>
             index + 1 === characterArray.length ? 
             <CharacterCard imgRef={lastCardImgRef} key={character.id} characterName={character.name} imgSrc={character.image} />
             :<CharacterCard key={character.id} characterName={character.name} imgSrc={character.image} />
        )}
    </div>
  )
}

export default CharacterCardList