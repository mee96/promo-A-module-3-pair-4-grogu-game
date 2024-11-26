import { useState } from "react";

const Form = ({onChangeName}) => {
    
    const handleName = (ev) => {
    onChangeName(ev.target.value);
    }
    return(
        <form className="form">
            <label htmlFor="name">Tu nombre: </label> 
            <input id="name" type="text" name="name" onChange={handleName} />
        </form>
    );
};
export default Form;

