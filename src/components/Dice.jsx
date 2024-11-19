
const Dice = () =>{
    const handleClick = () => {
        //console.log("Hago click en el botón" , value);
    }
    return (
        <section>
            <button className="dice js-dice" onClick={handleClick}>Lanzar Dados</button>
            <div className="game-status">En curso</div>
        </section>
    )
}
export default Dice;