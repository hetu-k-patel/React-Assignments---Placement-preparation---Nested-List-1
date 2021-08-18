import React, {useState} from 'react';
import Town from './Town';
const City = ({name,towns,index}) =>{
  const[click,setClick] = useState(false)
  return(
    <li>
      <h3 id={"city"+(index+1)} onClick = {setClick(!click)}>{name}</h3>
      { click ? (
        <ul>
          {towns.map((e)=>(
            <Town name = {e.name} index = {towns.indexOf(e)} />
          ))}
        </ul>
      ) : null }
    </li>
  )
}

export default City;
