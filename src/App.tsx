import { useState, type ChangeEvent } from 'react'
import Toolbar from './components/toolbar'

function App() {

  return (
    <>
      <div className="p-5">
        <Toolbar onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.value)}/>
        <div>Content</div>
      </div>
    </>
  )
}

export default App
