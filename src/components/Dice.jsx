import PropTypes from 'prop-types';

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

Dice.propTypes = {
    rollDice: PropTypes.func.isRequired, // La propiedad `rollDice` debe ser una función y es obligatoria
};

export default Dice;
