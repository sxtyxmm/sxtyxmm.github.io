import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import ScrollSection from './components/ScrollSection'
import RewardsSection from './components/RewardsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative bg-black min-h-screen overflow-hidden"
        >
          {/* Gradient Background Effects */}
          <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-black z-0" />
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-gradient-radial opacity-20 blur-3xl z-0" />
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-gradient-radial opacity-20 blur-3xl z-0" />
          
          {/* Main Content */}
          <div className="relative z-10">
            <Hero />
            <ScrollSection />
            <RewardsSection />
            <TestimonialsSection />
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
