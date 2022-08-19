import React, { useState,useEffect,useRef } from 'react';
import './App.css';
import crab_img from "./img/crab.png"
import beach_img from "./img/beach.jpg"
import bigBeach_img from "./img/big_beach.jpg"

function App() {

  let [blockSize, setBlockSize] = useState<number[]>([500, 500]) //Отслеживание размера окна браузера

  let time:number = 0;
  let interval:any;
  let seconds:number[] = [15,30,45,60]

  const refBoard: React.RefObject<any> = useRef()

  // const crab:any = new URL("./img/crab.png", import.meta.url)

  let [isRulesGame, setIsRulesGame] = useState(false)  //переключения с начала игры на правила
  let [isTimeGame, setIsTimeGame] = useState(false)  //переключения с правил на выбор времени игры
  let [select, setSelect] = useState(false)  //переключения с правил на выбор времени игры
  let [timer, setTimer] = useState<number>(0)
  let [bonus, setBonus] = useState<number>(0)
  let [coordinateCrab, setCoordinateCrab] = useState([105, 105])

    //ОТСЛЕЖИВАНИЕ ИЗМЕНЕНИЯ РАЗМЕРА ОКНА БРАУЗЕРА ДЛЯ ПОСЛЕДУЮЩЕЙ АДАПТАЦИИ SVG ПОЛЯ ПОД НЕГО

    useEffect(() => {
      function changeWindow() {
        setBlockSize([refBoard.current.offsetWidth, refBoard.current.offseHeight])
        console.log("window", refBoard.current.offsetWidth, refBoard.current.offseHeight)
      }
      window.addEventListener("resize", changeWindow);  
    }, [])

  function showRulesGame() {
    setIsRulesGame(true)
  }

  function selectTimeGame() {
    setIsTimeGame(true)
  }

  function selectTime(time: number) {
    setIsTimeGame(false)
    setIsRulesGame(false)
    setSelect(true)
    setTimer(time)

    // interval = setInterval(()=>timeLeft(--time), 1000)
  }

  function createList(item:number){
    return <li><button className="btn__game" onClick={() => { selectTime(item) }}>{item} сек</button></li>
  }
  
  let secondList = seconds.map(createList)


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
    let coordinateWidth = Math.random() * blockSize[0]
    let coordinateHeight = Math.random() * blockSize[1]
    setCoordinateCrab([coordinateWidth, coordinateHeight])
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

    if (!isRulesGame && !isTimeGame && !select) {
      return <div className="start__page">
        <h1>Crab game</h1>
        <a href="/#" onClick={showRulesGame}>START</a>
      </div>
    } else if (isRulesGame && !isTimeGame) {
      return <div className="rules__game">
        <h1>ПРАВИЛА ИГРЫ</h1>
        
        <div>Наводите курсором на крабов <img src={crab_img} style={{width: 24, height: 24}}/> и нажимайте левую кнопку мышки, тем самым ловите их. Чем больше поймаете, тем сытней вам будет жить на острове! Удачи вам и обратите внимание на пальмы, они часто там прячутся</div>
        <button className='buttonYes' onClick={selectTimeGame}>Понятно!</button>
      </div>
    } else if (isTimeGame && time === 0) {
      return <div className="settings__game">
        <h1>Время:</h1>
        <ul className="time__game" id="time__game">
          {secondList}
        </ul>
      </div>
    } else if (select && timer > 0) {
      return <div className="field__game">
        <h3>Осталось {timer} сек</h3>
        <h3>Набранные очки {bonus} </h3>
        <div ref={refBoard} className="board__game" id="board__game">
          <img className="board__game_img" src={bigBeach_img} alt="crab_img" />
          <img className="crab__game_img" onClick={downCrab} src={crab_img} alt="crab" style={{ width: 45, top: coordinateCrab[1], left: coordinateCrab[0] }} />
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
