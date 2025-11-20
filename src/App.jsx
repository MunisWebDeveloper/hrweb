import { useEffect } from 'react'
import User from './components/User'
const telegram = window.Telegram.WebApp
function App() {
  useEffect(() =>{
 telegram.ready()
})
  return (
   <>
   <User />
   </>
  )
}

export default App