import React, { useState } from 'react';
import './App.css';

function App() {

  let [rulesGame, setRulesGame] = useState(
    <div className="start__page">
      <h1>Crab game</h1>
      <a onClick={showRulesGame}>START</a>
    </div>
  )

  function showRulesGame() {
    setRulesGame(
      <div className="rules__game">
        <h1>ПРАВИЛА ИГРЫ</h1>
        <p>Наводи курсором на крабов <img src="../img/crab.png" alt="crab" /> и нажимай левую кнопку мышки, тем самым лови их. Чем больше поймаешь, тем сытней тебе будет жить на острове! Удачи мой друг и обрати внимание на пальмы, они часто там прячутся</p>
        <button className='buttonYes' onClick={startGame}>Понятно!</button>
      </div>
    )
  }

  function startGame() {
    setRulesGame(
      <div className="settings__game">
      <h1>Время:</h1>
      <ul className="time__game" id="time__game">
          <li><button className="btn__game" data-time="15">15 сек</button></li>
          <li><button className="btn__game" data-time="30">30 сек</button></li>
          <li><button className="btn__game" data-time="45">45 сек</button></li>
          <li><button className="btn__game" data-time="60">60 сек</button></li>
      </ul>
  </div>
    )
  }

  return (
    <div className="App">
      {rulesGame}
    </div>
  );
}

export default App;
