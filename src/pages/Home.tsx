import { useState, type ChangeEvent } from 'react';
import useCharacters from '../hooks/useCharacters';
import Radiobutton from '../components/Radiobutton';
import Toolbar from '../components/Toolbar';
import CharacterCardList from '../components/CharacterCardList';


const Home = () => {
    const {characters, isLoading, error} = useCharacters();
    return (
        <div className=" bg-gray-200">
        {error && <h3>{error}</h3>}
        <Toolbar onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.value)}/>
        <Radiobutton onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.value)} frontLabel="Character status:" defaultCheckedIndex={0} values={["Any", "Alive", "Dead", "Unknown"]}/>
        <CharacterCardList characterArray={characters} />
      </div>
    )
}

export default Home