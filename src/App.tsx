import { useState, type ChangeEvent } from 'react'
import Toolbar from './components/toolbar'
import Radiobutton from './components/Radiobutton'
import CharacterCard from './components/CharacterCard'

function App() {

  return (
    <>
      <div className="p-5">
        <Toolbar onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.value)}/>
        <Radiobutton onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.value)} frontLabel="Character status:" defaultCheckedIndex={0} values={["Any", "Alive", "Dead", "Unknown"]}/>
        <CharacterCard characterName='Shoes' imgSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
        <div>Content</div>
      </div>
    </>
  )
}

export default App
