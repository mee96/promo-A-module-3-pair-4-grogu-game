import { useState } from "react";

const Form = ({name, setName}) => {
    //const [name, setName] = useState ("");
    const handleName = (ev) => {
        setName ({...name, name:ev.target.value});
        //console.log("ha escrito el nombre", ev.target.value);
        setName (newName);
    }
    return(
        <form className="form">
            <label htmlFor="name">Tu nombre: </label> 
            <input id="name" type="text" name="name" onChange={handleName} />
        </form>
    );
};
export default Form;