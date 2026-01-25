import React, { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import './App.css'

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          // Stop observing once animated to improve performance
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale')
    animatedElements.forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <About />
        <Experience />
        <Skills />
      </main>
      <footer className="footer">
        <p>&copy; 2026 Aman Kaushik. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
