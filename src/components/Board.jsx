import Grogu from './Grogu';


const Board = () => {
  const cells = Array (7)
  .fill("")
  .map((element,index) => {
    return <div key={index} className="cell"></div>;
  });
  
  return <section className="board">{cells}</section>

};

export default Board ;