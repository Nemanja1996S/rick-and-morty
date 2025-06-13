import { useCallback, useRef, useState, type ChangeEvent } from 'react';
import Radiobutton from '../components/Radiobutton';
import Toolbar from '../components/Toolbar';
import CharacterCardList from '../components/CharacterCardList';
import useCharactersSearch from '../hooks/useCharactersSearch';


const Home = () => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Any");
    const [page, setPage] = useState(1);
    const {characters, isLoading, hasMore} = useCharactersSearch(name, status, page);
    const observer = useRef<IntersectionObserver>(null);
    const lastCharacterCardElementRef = useCallback((node: HTMLImageElement) => {
      if(isLoading) return

      if(observer.current)
        observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1)
          console.log("Visible")
        }
      })
      if(node) observer.current.observe(node)
      console.log(node)
    },[isLoading, hasMore]) 

    return (
        <div className=" bg-gray-200 h-full px-4">
        <Toolbar onChange={(event: ChangeEvent<HTMLInputElement>) => {setName(event.target.value); setPage(1)}}/>
        <Radiobutton onChange={(event: ChangeEvent<HTMLInputElement>) => {setStatus(event.target.value); setPage(1);}} frontLabel="Character status:" defaultCheckedIndex={0} values={["Any", "Alive", "Dead", "Unknown"]}/>
        <CharacterCardList characterArray={characters} lastCardImgRef={lastCharacterCardElementRef} />
        {isLoading && <p className="pl-2 text-3xl">...Loading</p>}
        {!isLoading && characters.length < 1 && <p className="pl-2 text-3xl">There are no results</p>}
      </div>
    )
}

export default Home