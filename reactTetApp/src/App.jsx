import myFoto from '/image/myFace.jpg'
import './App.css'
import { CardOne } from './components/card/CardOne'
import { CardTwo } from './components/card/CardTwo'
import { CardThree } from './components/card/CardThree'
import { CardFour } from './components/card/CardFour'
import { CardFive } from './components/card/CardFive'

function App() {

  return (
    <>
      <div>
        <img src={myFoto} className="foto" />
      </div>
      <h1>Пимнев Анатолий Алексеевич</h1>
      <h2>Компетенции</h2>

      <div className='card'>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <h2>Изучение компетенций</h2>

      <div className='card'>
        <CardFive />
      </div>
    </>
  )
}

export default App
