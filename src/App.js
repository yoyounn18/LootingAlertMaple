import Count from './components/Count'
import StartBtn from './components/StartBtn'
import Meso from './Meso.mp3'
import Exp15 from './15min.mp3'
import Exp30 from './30min.mp3'
import Event from './components/Event'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

function App() {
  const [start, setStart] = useState(false)
  const [event, setEvent] = useState([])
  const [pause, setPause] = useState(false)

  const looting = 110
  const exp15 = 900
  const exp30 = 1800

  const StyledDiv = styled.div`
    border: 10px solid #6d1b7b;
    background-color: #af52bf;
    border-radius: 2em;
    width: 500px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const startOnClick = () => {
    setStart(!start)
  }

  const pauseOnClick = () => {
    setPause(!pause)
  }

  return (
    <div className="App">
      <StyledDiv>
        <div style={{ fontSize: '3rem', color: 'black', opacity: '0.7', fontWeight: 'bold', margin: '1px' }}>
          Maple Looting Alert
        </div>
        {start && <Count second={looting} src={Meso} text={'/110'} />}
        {start && <Count second={exp15} src={Exp15} text={'/900'} />}
        {start && <Count second={exp30} src={Exp30} text={'/1800'} />}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <StartBtn onClick={startOnClick} text={start === false ? '시작' : '처음으로'} />
          {start && <StartBtn text={'초기화'} onClick={pauseOnClick} />}
        </div>
      </StyledDiv>
    </div>
  );
}

export default App;
