import CharacterCard from "./CharacterCard"

interface Character {
    name: string,
    imgSrc: string
}

interface Props {
    characterArray: Character[]
}
//<div className="flex flex-row justify-between flex-wrap gap-4">
const CharacterCardList = ( {characterArray}: Props ) => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characterArray.map(character =>
             <CharacterCard key={character.name} characterName={character.name} imgSrc={character.imgSrc} />
        )}
    </div>
  )
}

export default CharacterCardList