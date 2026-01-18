import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <About />
        <Skills />
        <Experience />
      </main>
      <footer className="footer">
        <p>&copy; 2026 Aman Kaushik. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
