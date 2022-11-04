import React from "react";
function MySelect ({options, defaultValue , onChange , value , onChange1 , value1}){
    return(
        <div className="d-flex justify-content-end">
        <input type='text' placeholder="Search..." className="form-control w-50 m-3"
        value={value1}
        onChange ={onChange1}
        />
        <select className="form-select my-3 w-25"
        value={value}
        onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            { options.map(opt =>(
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            ))}
        </select>
        </div>
    )
}
 
export default MySelect