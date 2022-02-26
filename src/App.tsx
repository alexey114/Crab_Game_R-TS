import React, { useState, useEffect } from 'react';
import { setInterval } from 'timers';
import './App.css';

function App() {

  let [rulesGame, setRulesGame] = useState(
    <div className="start__page">
      <h1>Crab game</h1>
      <a href="/#" onClick={showRulesGame}>START</a>
    </div>
  )

  let [timer, setTimer] = useState<number>(10)
  let [coordinateCrab, setCoordinateCrab] = useState([105, 105])
  let [fifteenSeconds, setFifteenSeconds] = useState(false);
  let [thirtySeconds, setThirtySeconds] = useState(false);
  // let [fifteenSeconds, setFifteenSeconds] = useState(false);

  function showRulesGame() {
    setRulesGame(
      <div className="rules__game">
        <h1>ПРАВИЛА ИГРЫ</h1>
        <p>Наводи курсором на крабов <img src="https://papik.pro/uploads/posts/2021-09/thumbs/1630675178_1-papik-pro-p-krabik-risunok-detskii-1.png" alt="crab" style={{ width: 45, background: "none" }} /> и нажимай левую кнопку мышки, тем самым лови их. Чем больше поймаешь, тем сытней тебе будет жить на острове! Удачи мой друг и обрати внимание на пальмы, они часто там прячутся</p>
        <button className='buttonYes' onClick={startGame}>Понятно!</button>
      </div>
    )
  }

  function startGame(event: any) {
    setRulesGame(
      <div className="settings__game">
        <h1>Время:</h1>
        <ul className="time__game" id="time__game">
          <li><button className="btn__game" onClick={game}>15 сек</button></li>
          <li><button className="btn__game" onClick={game30s}>30 сек</button></li>
          <li><button className="btn__game" onClick={game45s}>45 сек</button></li>
          <li><button className="btn__game" onClick={game60s}>60 сек</button></li>
        </ul>
      </div>
    )
  }

  function timeLeft() {
    timer--
    console.log("time", timer)
    return <h3>Осталось {timer} сек</h3>
  }

  function game30s() {
    let time = timer + 15
    setTimer(time)
    console.log("time30", time)
    console.log("timer30", timer)
    setInterval(timeLeft, 1000)
    game()
  }

  console.log("вне timer30", timer)

  function game45s() {
    setTimer(45)

  }

  function game60s() {
    setTimer(60)
    game()
  }

  function game() {

    setRulesGame(
      <div className="field__game">
        {() => timeLeft()}
        <div className="board__game" id="board__game">
          <img className="board__game_img" src="https://i.7fon.org/1000/c156069.jpg" alt="img_crab_game" />
          <img className="crab__game_img" onMouseDown={downCrab} src="https://papik.pro/uploads/posts/2021-09/thumbs/1630675178_1-papik-pro-p-krabik-risunok-detskii-1.png" alt="crab" style={{ width: 45, top: coordinateCrab[0], left: coordinateCrab[1] }} />
        </div>
      </div>
    )
  }

  function downCrab() {
    let coordinate = Math.random() * (500 - 0) + 0
    setCoordinateCrab([coordinate, coordinate])
    console.log("downCrab")
    if (timer > 0) {
      setRulesGame(
        <div className="field__game">
          <h3>Осталось {timer} сек</h3>
          <div className="board__game" id="board__game">
            <img className="board__game_img" src="https://i.7fon.org/1000/c156069.jpg" alt="img_crab_game" />
            <img className="crab__game_img" onClick={downCrab} src="https://papik.pro/uploads/posts/2021-09/thumbs/1630675178_1-papik-pro-p-krabik-risunok-detskii-1.png" alt="crab" style={{ width: 45, top: coordinateCrab[0], left: coordinateCrab[1] }} />
          </div>
        </div>
      )
    } else {
      setRulesGame(
        <div>
          <div className="hide" id="primary__page"><a href="/#" onClick={returnToStart}>Хочу еще крабов!</a></div>
          <div className="hide" id="copy__text"><a href="https://wed-developer-bomkoar.000webhostapp.com" target="blank" className="copy">Bomko Aleksey</a></div>
        </div>
      )
    }
  }

  function returnToStart(){
    window.location.reload()
  }

  return (
    <div className="App">
      {rulesGame}
    </div>
  );
}

export default App;
