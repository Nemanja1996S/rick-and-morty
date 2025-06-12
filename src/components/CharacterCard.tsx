interface Props {
    imgSrc: string,
    characterName: string
}

const CharacterCard = ({imgSrc, characterName} : Props) => {
  return (
    <div className="card bg-base-100 flex shadow-sm">
        <figure className="shrink-1">
            <img
            className="shrink w-full"
            src={imgSrc}
            alt={characterName} />
        </figure>
        <div className="card-body max-h-20 shrink-100">
            <h2 className="card-title">{characterName}</h2>
        </div>
        </div>
  )
}

export default CharacterCard