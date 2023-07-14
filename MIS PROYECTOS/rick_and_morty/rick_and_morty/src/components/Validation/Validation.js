

const validation = (useData)=> {
    const errors = {};
     
    if(!/\S+@\S+\.\S+/.test(useData.email)){
            errors.email="el email ingresado no es valido"  
    }
    if (!useData.email) {
        errors.email = "debe ingresar un email"
    }
    if(useData.email.length > 35 ){
        errors.email= "el email no debe superar los 35 carateres"
    }
    if(!/.*\d+/.test(useData.password)){
        errors.password = "la password debe tener al menos un número"
    }
    if(useData.password.length < 6 || useData.password.length > 10){
        errors.password = "la contraseña debe tener un tamaña entre 6 y 9 caracteres"
    }
    return errors;
}

export default validation;