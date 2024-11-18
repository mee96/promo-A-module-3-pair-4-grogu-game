import "../scss/App.scss";
import Header from "./Header";
import Board  from "./Board";
import Grogu from "./Grogu";

const App = () => {

    return (
        <>
       
        <Header/>

    <main className="page">
      <Board />
      <Grogu/>

      <section>
        <button className="dice js-dice">Lanzar Dadosss</button>
        <div className="game-status">En curso</div>
      </section>

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
    </main></>
    )
}

export default App
