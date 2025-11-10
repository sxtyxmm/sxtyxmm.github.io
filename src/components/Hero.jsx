import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 165, 0, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(255, 215, 0, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight">
            <span className="block text-white">pay your</span>
            <span className="block text-gradient mt-2">credit card bills</span>
            <span className="block text-white mt-2">& get rewarded</span>
          </h1>
        </motion.div>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Experience premium rewards, exclusive benefits, and a financial lifestyle 
          designed for the discerning few.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold text-lg rounded-full transition-all duration-300"
          >
            Join Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#FFD700" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-white text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white hover:text-black"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gray-600 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Cards Effect */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl opacity-40 hidden lg:block"
        style={{ transform: 'perspective(1000px) rotateY(-15deg)' }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 left-10 w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl opacity-30 hidden lg:block"
        style={{ transform: 'perspective(1000px) rotateY(15deg)' }}
      />
    </section>
  )
}

export default Hero
