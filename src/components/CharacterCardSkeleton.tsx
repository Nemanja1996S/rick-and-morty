
const CharacterCardSkeleton = () => {
  return (
    <div className="flex max-sm:w-80 max-sm:h-80 md:w-64 lg:w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
    </div>
  )
}

export default CharacterCardSkeleton