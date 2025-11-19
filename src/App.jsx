import { useEffect } from 'react'
import './App.css'
import Card from './constants/card/Card'
const telegram = window.Telegram.WebApp
function App() {
  useEffect(() =>{
    telegram.ready()
  })
  return (
    <>
    <Card />
    </>
  )
}

export default App
