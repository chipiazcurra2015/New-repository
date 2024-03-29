import Card from "../Card/Card";
import { connect } from "react-redux";
const Favorites = ({myFavorites}) => {
    return(
            <div>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        />    
                    )
                })
            }

            </div>
    )
}
    const mapStateToprops =(state) => {
        return{
        myFavorites: state.myFavorites
        }          
    }

export default connect (
    mapStateToprops,
    null,
)(Favorites)