import { useEffect } from 'react'
import Layout from './components/Layout'
const telegram = window.Telegram.WebApp
function App() {
  useEffect(() =>{
 telegram.ready()
})
  return (
   <>
   <h1 className='text-red-700'>Test uchun</h1>
   {/* <Layout /> */}
   </>
  )
}

export default App