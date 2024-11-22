import "../scss/App.scss";
import { useState } from 'react';
import Header from "./Header";
import Board  from "./Board";
import Dice from "./Dice";
import Form from "./Form";


const App = () => {
  const [groguPosition, setGroguPosition] = useState(0); // Posición de Grogu
  const [goods, setGoods] = useState({
    cookies: 3,
    eggs: 3,
    frogs: 3,
  });
  const [gameStatus, setGameStatus] = useState("En curso"); // Estado del juego

  const [name, setName] = useState("");
  const updateName = (newName) => {
    setName(newName);
  };


  // Lógica del lanzamiento del dado
  const rollDice = () => {
    const roll = Math.floor(Math.random() * 4) + 1; // Número aleatorio entre 1 y 4
    console.log(`Dado lanzado: ${roll}`);

    if (roll === 4) {
      // Grogu avanza en el tablero
      setGroguPosition((prevPosition) => prevPosition + 1);
      setGameStatus("Grogu ha avanzado una casilla.");
    } else if (roll === 1 || roll === 2 || roll === 3) {
      // Eliminar una mercancía
      const goodsType = roll === 1 ? "cookies" : roll === 2 ? "eggs" : "frogs";
      if (goods[goodsType] > 0) {
        setGoods((prevGoods) => ({
          ...prevGoods,
          [goodsType]: prevGoods[goodsType] - 1,
        }));
        setGameStatus(`Se ha descargado una mercancía: ${goodsType}`);
      } else {
        setGameStatus(`No hay más ${goodsType} para descargar.`);
      }
    }
  };
    return (
        <>
        <Header/>


    <main className="page">
      <Form />
      <Board groguPosition={groguPosition} />

      <Dice rollDice={rollDice} />

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
      </>
    )
  }


export default App
