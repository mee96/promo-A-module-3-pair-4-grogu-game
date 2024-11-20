
const Dice = ({rollDice}) => {
    const handleClick = () => {
        rollDice();
    }
    return (
        <section>
            <button className="dice js-dice" onClick={handleClick}> 🎲 </button>
            <div className="game-status">En curso</div>
        </section>
    )
}
export default Dice;
