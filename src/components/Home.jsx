import React from 'react'
import Board  from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";


function Home() {
    
  return (
    
    
    <> 
          <GameStatus 
      nameUser={name}/>
      <Form onChangeName={handleChangeValueInput}/>
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
      </>
  )
}

export default Home