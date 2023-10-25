import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { addFav,removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
// aca hay varias cosas para mejorar jaja 
// esta linea 

function Card({id,name,status,species,gender,image,onClose,addFav,removeFav,myFavorites}) {
  
   const [isFav, setIsfav] = useState(false);
   const handleFavorite= () => {
      if(isFav){
          setIsfav(false)
         removeFav(id)
      }else{
         setIsfav(true)
         addFav({id,name,status,species,gender,image})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.container}>
         {
       isFav ? (
      <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )
      }
         <button onClick={()=>onClose(id) }className={style.closeButton}>Sacar Carta</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <img src={image}className={style.imagen} alt='' />
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         
      </div>
   );
}
   const mapStateToProps = (state) => {
      return { 
         myFavorites: state.myFavorites
      }

   }

   const mapDispachToProps=(dispatch)=>{
    return{
      addFav: (character)=> {dispatch(addFav(character))},
      removeFav:(id)=>{ dispatch (removeFav(id))}
    }   
   }


export default connect(
   mapStateToProps,
   mapDispachToProps
)(Card);