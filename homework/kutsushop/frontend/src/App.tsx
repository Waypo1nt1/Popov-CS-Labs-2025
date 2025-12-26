import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { AdminPanel } from './components/AdminPanel'
import { LoginForm } from './components/LoginForm'

import './index.css'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLogin = (flag: boolean, isAdmin: boolean, email: string, position: string) => {
    setLoggedIn(flag)
    window.sessionStorage.setItem('is_auth', String(flag))
    window.sessionStorage.setItem('is_admin', String(isAdmin))
    window.sessionStorage.setItem('email', email)
    window.sessionStorage.setItem('position', position)
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('is_auth') === 'true') {
      setLoggedIn(true)
    }
  }, [])

  return (
    <>
      {isLoggedIn ? <AdminPanel handleLogin={handleLogin} /> : <LoginForm handleLogin={handleLogin} />}
      <Footer />
    </>
  )
}

export default App
