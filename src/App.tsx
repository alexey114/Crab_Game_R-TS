import React, { useState } from 'react';
import './App.css';

function App() {

  let time = 0;
  let interval:any;

  // let [rulesGame, setRulesGame] = useState()
  let [rulesGame, setRulesGame] = useState(false)  //переключения с начала игры на правила
  let [timeGame, setTimeGame] = useState(false)  //переключения с правил на выбор времени игры
  let [select, setSelect] = useState(false)  //переключения с правил на выбор времени игры
  let [timer, setTimer] = useState<number>(0)
  let [bonus, setBonus] = useState<number>(0)
  let [coordinateCrab, setCoordinateCrab] = useState([105, 105])

  // let [fifteenSeconds, setFifteenSeconds] = useState(false);

  function showRulesGame() {
    setRulesGame(true)
  }

  function selectTimeGame() {
    setTimeGame(true)
  }

  function selectTime(time: number) {
    setTimeGame(false)
    setRulesGame(false)
    setSelect(true)
    setTimer(time)

    interval = setInterval(()=>timeLeft(--time), 1000)
  }

  function timeLeft(timer: number) {
      let time = timer
      setTimer(time)

    console.log("timer", timer)
    console.log("time", time)

    if(time===0){
      clearInterval(interval)
    }

  }

  function downCrab() {
    let coordinate = Math.random() * (500 - 0) + 0
    setCoordinateCrab([coordinate, coordinate])
    console.log("downCrab")
    let oneBonus = bonus
    oneBonus++
    setBonus(oneBonus)
    console.log("bonus", bonus)
  }

  function returnToStart() {
    window.location.reload()
  }

  function Game() {

    if (!rulesGame && !timeGame && !select) {
      return <div className="start__page">
        <h1>Crab game</h1>
        <a href="/#" onClick={showRulesGame}>START</a>
      </div>
    } else if (rulesGame && !timeGame) {
      return <div className="rules__game">
        <h1>ПРАВИЛА ИГРЫ</h1>
        <p>Наводи курсором на крабов <img src="https://papik.pro/uploads/posts/2021-09/thumbs/1630675178_1-papik-pro-p-krabik-risunok-detskii-1.png" alt="crab" style={{ width: 45, background: "none" }} /> и нажимай левую кнопку мышки, тем самым лови их. Чем больше поймаешь, тем сытней тебе будет жить на острове! Удачи мой друг и обрати внимание на пальмы, они часто там прячутся</p>
        <button className='buttonYes' onClick={selectTimeGame}>Понятно!</button>
      </div>
    } else if (timeGame && time === 0) {
      return <div className="settings__game">
        <h1>Время:</h1>
        <ul className="time__game" id="time__game">
          <li><button className="btn__game" onClick={() => { selectTime(15) }}>15 сек</button></li>
          <li><button className="btn__game" onClick={() => { selectTime(30) }}>30 сек</button></li>
          <li><button className="btn__game" onClick={() => { selectTime(45) }}>45 сек</button></li>
          <li><button className="btn__game" onClick={() => { selectTime(60) }}>60 сек</button></li>
        </ul>
      </div>
    } else if (select && timer > 0) {
      return <div className="field__game">
        <h3>Осталось {timer} сек</h3>
        <h3>Набранные очки {bonus} </h3>
        <div className="board__game" id="board__game">
          <img className="board__game_img" src="https://i.7fon.org/1000/c156069.jpg" alt="img_crab_game" />
          <img className="crab__game_img" onClick={downCrab} src="https://papik.pro/uploads/posts/2021-09/thumbs/1630675178_1-papik-pro-p-krabik-risunok-detskii-1.png" alt="crab" style={{ width: 45, top: coordinateCrab[0], left: coordinateCrab[1] }} />
        </div>
      </div>
    } else if (select && timer === 0) {

      return <div>
        <div id="primary__page">Вы поймали {bonus} крабов :) Круто! </div>
        <div id="primary__page"><a href="/#" onClick={returnToStart}>Хочу еще крабов!</a></div>
        <div id="copy__text"><a href="https://wed-developer-bomkoar.000webhostapp.com" target="blank" className="copy">Bomko Aleksey</a></div>
      </div>
    }

    return <div>Hello!</div>
  }

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
