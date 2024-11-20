import Grogu from './Grogu';
import PropTypes from 'prop-types';

const Board = ({ groguPosition }) => {
  // Generamos las 7 celdas del tablero
  const cells = Array(7)
    .fill("")
    .map((element, index) => {
      return (
        <div
          key={index}
          className={`cell ${index === groguPosition ? "grogu-cell" : ""}`}
        >
          {index === groguPosition && <Grogu />} {/* Solo se muestra Grogu en la celda correspondiente */}
        </div>
      );
    });

  return <section className="board">{cells}</section>;
};

Board.propTypes = {
  groguPosition: PropTypes.number, // La posición de Grogu
};

export default Board;
