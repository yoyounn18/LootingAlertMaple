import Count from './components/Count'
import StartBtn from './components/StartBtn'
import Meso from './Meso.mp3'
import Exp15 from './15min.mp3'
import Exp30 from './30min.mp3'
import Event from './components/Event'
import { useState, useEffect } from 'react'

function App() {
  const [start, setStart] = useState(false)
  const [event, setEvent] = useState([])

  const looting = 110
  const exp15 = 900
  const exp30 = 1800

  const startOnClick = () => {
    setStart(!start)
  }

  useEffect(() => {
    const getEvent = async () => {
      const eventFromServer = await fetchEvent()
      setEvent(eventFromServer)
    }
    getEvent()
  }, [])

  const fetchEvent = async () => {
    const res = await fetch('http://localhost:5000')
    const data = await res.json()

    return data
  }

  const onClick = () => {
    console.log(event)
  }

  return (
    <div className="App">
      <StartBtn onClick={startOnClick} text={start === false ? '시작' : '리셋'} /> <br />
      {start && <Count second={looting} src={Meso} />}일시정지<br />회수
      {start && <Count second={exp15} src={Exp15} />}일시정지<br />15분 경쿠
      {start && <Count second={exp30} src={Exp30} />}일시정지<br />30분 경쿠<br />
      <button onClick={onClick}>
        JSON
      </button>
    </div>
  );
}

export default App;
