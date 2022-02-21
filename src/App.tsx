import React, { useState } from 'react';
import './App.css';

function App() {

  let [rulesGame, setRulesGame] = useState(
    <div className="start__page">
      <h1>Crab game</h1>
      <a href="/#" onClick={showRulesGame}>START</a>
    </div>
  )

  let [timer, setTimer] = useState(15)

  function showRulesGame() {
    setRulesGame(
      <div className="rules__game">
        <h1>ПРАВИЛА ИГРЫ</h1>
        <p>Наводи курсором на крабов <img src="/img/crab.png" alt="crab" /> и нажимай левую кнопку мышки, тем самым лови их. Чем больше поймаешь, тем сытней тебе будет жить на острове! Удачи мой друг и обрати внимание на пальмы, они часто там прячутся</p>
        <button className='buttonYes' onClick={startGame}>Понятно!</button>
      </div>
    )
  }

  function startGame(event: any) {
    setRulesGame(
      <div className="settings__game">
        <h1>Время:</h1>
        <ul className="time__game" id="time__game">
          <li><button className="btn__game" data-time="15" onClick={game}>15 сек</button></li>
          <li><button className="btn__game" data-time="30" onClick={game}>30 сек</button></li>
          <li><button className="btn__game" data-time="45" onClick={game}>45 сек</button></li>
          <li><button className="btn__game" data-time="60" onClick={game}>60 сек</button></li>
        </ul>
      </div>
    )
    setTimer(parseInt(event.target.getAttribute('data-time')))
  }

  function game() {

    setRulesGame(
      <div className="field__game">
        <h3>Осталось {timer} сек</h3>
        <div className="board__game" id="board__game">
          <img className="board__game_img" src="/img/img_crab_game.jpg" alt="img_crab_game"/>
        </div>
      </div>
    )
  }

  function finishGame() {
    <div>
      <div className="hide" id="primary__page"><a href="/#">Хочу еще крабов!</a></div>
      <div className="hide" id="copy__text"><a href="https://wed-developer-bomkoar.000webhostapp.com" className="copy">&#169 Bomko Aleksey</a></div>
    </div>
  }

  return (
    <div className="App">
      {rulesGame}
    </div>
  );
}

export default App;
