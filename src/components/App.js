import React, { Component, useState } from "react";
import "./../styles/App.css";
import State from "./State";

const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

// const State = ({index,name,cities}) =>{
//   const[click,setClick] = useState(false)
//   return(
//     <li>
//       <h3 id={"state"+(index+1)} onClick = {setClick(!click)}>{name}</h3>
//       { click ? (
//         <ul>
//           {cities.map((e)=>(
//             <City name = {e.name} towns = {e.towns} index = {cities.indexOf(e)} />
//           ))}
//         </ul>
//       ) : null }
//     </li>
//   )
// }

// const City = ({name,towns,index}) =>{
//   const[click,setClick] = useState(false)
//   return(
//     <li>
//       <h3 id={"city"+(index+1)} onClick = {setClick(!click)}>{name}</h3>
//       { click ? (
//         <ul>
//           {towns.map((e)=>(
//             <Town name = {e.name} index = {towns.indexOf(e)} />
//           ))}
//         </ul>
//       ) : null }
//     </li>
//   )
// }

// const Town = ({name,index}) =>{
//   return (
//     <li> <h5 id={"town" + (index+1)}>{name}</h5></li>
//   )
// }

function App() {
  return <div id="main">
    <ul>
    {states.map((e)=>(
        <State index = {states.indexOf(e)} name = {e.name} cities = {e.cities} />
      ))}
    </ul>
  </div>;
}

export default App;
