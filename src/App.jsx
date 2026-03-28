import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/User'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationRU from './locale/translationRu'
import translationUZ from './locale/translationUZ'
i18n.use(initReactI18next).init({
  resources:{
    ru:{translation: translationRU},
    uz:{translation: translationUZ}
  },
  lng:"uz",
  fallbackLng: "uz"
})
// console.log(i18n.use(initReactI18next));

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const telegram = window?.Telegram?.WebApp
    // i18n.changeLanguage('ru')
    if (!telegram) {
      // console.log("❌ Telegram WebApp emas")
      return
    }

    telegram.ready()

    const tgUser = telegram.initDataUnsafe?.user

    if (tgUser) {
      // console.log("✅ Telegram user:", tgUser)
      setUser(tgUser)
    } else {
      // console.log("❌ User topilmadi")
    }
  }, [])

 const getLang = (lang) =>{
  i18n.changeLanguage(lang)
  
 }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang/:id/:brand" element={<User getLang={getLang} user={user} />} />
        <Route path="/" element={<User getLang={getLang} user={user} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App  // ← shu qator bo'lishi SHART