import { useState } from 'react'
import './App.css'
import { Home } from './pages/home'
import { Sidebar } from '../components/sidebar'
import { Topbar } from './../components/topbar';
import Projects from './pages/projects';

function App() {

  return (
    <>
      <Sidebar />
      <Home />
      <Projects />
    </>
  )
}

export default App
