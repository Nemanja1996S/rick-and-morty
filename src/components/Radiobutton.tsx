import type { ChangeEvent } from "react"

interface Props {
    frontLabel: string,
    defaultCheckedIndex: number,
    values: string[],
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const Radiobutton = ( {frontLabel, defaultCheckedIndex, values, onChange} : Props) => {
  return (
    <div className="flex flex-row py-2 flex-wrap">
        <span className="mr-1">{frontLabel} </span>
        {values.map((value, index) => { if (index === defaultCheckedIndex) 
            return (<div key={value}>
                <input type="radio" name="radio-4" className="radio radio-primary mr-1" defaultChecked onChange={onChange} value={value}/>
                <label className="mr-2">{value}</label>
            </div>)
            else return (<div key={value}>
            <input type="radio" name="radio-4" className="radio radio-primary mr-1"  onChange={onChange} value={value}/>
            <label className="mr-2">{value}</label>
        </div>)
         })}
    </div>
    
  )
}

export default Radiobutton