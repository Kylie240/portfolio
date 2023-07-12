import { useState } from 'react'
import './App.css'
import { Home } from './pages/home'
import { Sidebar } from '../components/sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <Home />
    </>
  )
}

export default App
