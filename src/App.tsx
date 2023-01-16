import { useState } from 'react'
import Header from './components/Header' 
import Info from './components/Info'
import Content from './components/Content'
import './App.css'

function App() {

  return (
    <div className="container">
      <Header/>
      <Info/>
      <Content/>
    </div>
  )
}

export default App
