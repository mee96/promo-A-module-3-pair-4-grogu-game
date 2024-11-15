import "../scss/App.scss";

function App() {

    return (
        <>
        <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main classname="page">
      <section classname="board">
        <div classname="cell"><div class="grogu">👣</div></div>
        <div classname="cell"></div>
        <div classname="cell"></div>
        <div classname="cell"></div>
        <div classname="cell"></div>
        <div classname="cell"></div>
        <div classname="cell"></div>
      </section>

      <section>
        <button classname="dice">Lanzar Dado</button>
        <div classname="game-status">En curso</div>
      </section>

      <section classname="goods-container">
        <div classname="goods-item">🍪</div>
        <div classname="goods-item">🍪</div>
        <div classname="goods-item">🍪</div>
      </section>
      <section classname="goods-container">
        <div classname="goods-item">🥚</div>
        <div classname="goods-item">🥚</div>
        <div classname="goods-item">🥚</div>
      </section>
      <section classname="goods-container">
        <div classname="goods-item">🐸</div>
        <div classname="goods-item">🐸</div>
        <div classname="goods-item">🐸</div>
      </section>
      <section>
        <button classname="restart-button">Reiniciar Juego</button>
      </section>
    </main></>
    )
}

export default App
