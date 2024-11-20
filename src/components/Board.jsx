import Grogu from './Grogu';
import PropTypes from 'prop-types';

const Board = () => {
  const cells = Array (7)
  .fill("")
  .map((element,index) => {
    return <div key={index} className="cell"></div>;
  });
  
  return <section className="board">{cells}</section>

};

Board.propTypes = {
  cells: PropTypes.array.isRequired, // `cells` debe ser un array y es obligatorio
};

export default Board ;
