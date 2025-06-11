import type { ChangeEvent } from "react"

interface Props {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void 
}

const Radiobutton = ( {onChange} : Props) => {
  return (
    <div className="flex flex-row pt-2 flex-wrap">
        <span className="mr-1">Character status: </span>
        <div>
            <input type="radio" name="radio-4" className="radio radio-primary mr-1" defaultChecked onChange={onChange} value="Any"/>
            <label className="mr-2">Any</label>
        </div>
        <div>
            <input type="radio" name="radio-4" className="radio radio-primary mr-1" onChange={onChange} value="Alive"/>
            <label className="mr-2">Alive</label>
        </div>
        <div>
            <input type="radio" name="radio-4" className="radio radio-primary mr-1" onChange={onChange} value="Dead" />
            <label className="mr-2">Dead</label>
        </div>
        <div>
            <input type="radio" name="radio-4" className="radio radio-primary mr-1" onChange={onChange} value="Unknown" />
            <label className="mr-2">Unknown</label>
        </div>
    </div>
    
  )
}

export default Radiobutton