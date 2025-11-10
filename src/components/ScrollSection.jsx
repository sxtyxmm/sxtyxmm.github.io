import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ScrollSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const sections = [
    {
      title: "Premium Rewards",
      description: "Every payment unlocks exclusive rewards. Earn points, cashback, and access to luxury experiences.",
      icon: "💎"
    },
    {
      title: "Instant Gratification",
      description: "No waiting. Your rewards are credited instantly, ready to be redeemed whenever you want.",
      icon: "⚡"
    },
    {
      title: "Elite Community",
      description: "Join an exclusive community of financially savvy individuals who value premium experiences.",
      icon: "👑"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            style={{ 
              opacity,
              scale: index % 2 === 0 ? scale : 1,
            }}
            className={`mb-40 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
          >
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <motion.div
                style={{ y: index % 2 === 0 ? y1 : y2 }}
                className="flex-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-8xl mb-6"
                >
                  {section.icon}
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl"
                >
                  {section.description}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex-1 relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6 flex items-center justify-center text-3xl">
                        {section.icon}
                      </div>
                      <div className="h-32 bg-gray-800/50 rounded-xl mb-4" />
                      <div className="h-4 bg-gray-800/50 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-gray-800/50 rounded w-1/2" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Parallax Decorative Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-0 w-2 h-64 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-2 h-64 bg-gradient-to-t from-orange-500/20 to-transparent rounded-full"
      />
    </section>
  )
}

export default ScrollSection
