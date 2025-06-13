import type { ChangeEvent } from 'react'
import img from '../assets/rick_and_morty.svg'

interface Props {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Toolbar = ( {onChange} : Props) => {
  return (
    <div className='flex flex-row justify-between align-middle min-h-40px px-4 py-2 -mx-4 bg-white' >
        <img src={img} alt="rick_and_morty_icon" className='h-10 w-10 mr-1' />
        <input type="text" placeholder="Search" className="input input-neutral max-w-36 sm:max-w-none border-gray-600" onChange={onChange} />
    </div>
  )
}

export default Toolbar