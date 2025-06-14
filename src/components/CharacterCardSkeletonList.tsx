import CharacterCardSkeleton from "./CharacterCardSkeleton"

const skeletons = [1,2,3,4,5,6,7,8]
const CharacterCardSkeletonList = () => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {skeletons.map(skeleton => <CharacterCardSkeleton key={skeleton}/>)}
    </div>
  )
}

export default CharacterCardSkeletonList