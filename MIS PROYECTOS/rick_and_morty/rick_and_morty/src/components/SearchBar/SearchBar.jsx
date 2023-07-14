import style from "./Seach.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
     const [id, setId]= useState (``);
     const handleChange = (event) =>{
      setId (event.target.value); 

     }
   return (
      <div>
         <input type='search' onChange={handleChange} value={id} className={style.imput} />
         <button onClick={()=>{onSearch(id);setId (``)}}className={style.boton}>AGREGAR</button>

      </div>
   );
}
