import React, { useState } from "react";
import { useParams } from "react-router-dom"; //useParams te devuelve los parametros q tenga acceso
import axios from "axios";                    //en esos momentos "/detail/:id"
import {useEffect} from "react";

 export default function Detail (){
const {id} = useParams();
const [messi,setMessi]= useState({});

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
       if (data.name) {
       setMessi(data);
        console.log("ok",data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
     }
    );
    return()=>{
        console.log("Adios");
    };
 }, []);

    return(
        <div>
            <h3>Nombre:{messi.name && messi.name}</h3>
            <h5>Status {messi.status && messi.name}</h5>
            <img src={messi.image} alt={messi.name} />
            <section>
                <span>Species: {messi.species && messi.species}</span>
                <span>Gender: {messi.gender}</span>
                <span>Origin: {messi.origin && messi.origin.name}</span>
            </section>
            
        </div>

    );
}
