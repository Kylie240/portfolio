import { useState } from 'react'
import './App.css'
import { Home } from './pages/home'
import { Sidebar } from '../components/sidebar'
import { Topbar } from './../components/topbar';

function App() {

  return (
    <>
      <Topbar />
      <Sidebar />
      <Home />
    </>
  )
}

export default App
