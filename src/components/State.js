import React, {useState} from 'react';
const State = ({index,name,cities}) =>{
  const[click,setClick] = useState(false)
  return(
    <li>
      <h3 id={"state"+(index+1)} onClick = {setClick(!click)}>{name}</h3>
      { click ? (
        <ul>
          {cities.map((e)=>(
            <City name = {e.name} towns = {e.towns} index = {cities.indexOf(e)} />
          ))}
        </ul>
      ) : null }
    </li>
  )
}

export default State;
