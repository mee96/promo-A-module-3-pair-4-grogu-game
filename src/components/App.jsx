import "../scss/App.scss";
import Header from "./Header";
import Board  from "./Board";
import Dice from "./Dice";


const App = () => {
  const rollDice = () => {
    console.log("¡Dado lanzado!");
  }
    return (
        <>
        <Header/>

    <main className="page">
      <Board />

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
