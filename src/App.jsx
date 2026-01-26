import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      // Default to light theme for new users
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <About />
        <Experience />
        <Skills />
      </main>
      <footer className="footer">
        <p>&copy; 2026 Aman Kaushik. All rights reserved.</p>
      </footer>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App
