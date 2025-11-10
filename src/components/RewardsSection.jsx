import { motion } from 'framer-motion'

const RewardsSection = () => {
  const rewards = [
    {
      tier: "Silver",
      title: "Essential Rewards",
      benefits: ["1% cashback", "Monthly offers", "Basic support"],
      color: "from-gray-500 to-gray-700",
      gradient: "from-gray-500/20 to-gray-700/20"
    },
    {
      tier: "Gold",
      title: "Premium Rewards",
      benefits: ["3% cashback", "Priority support", "Exclusive deals"],
      color: "from-yellow-500 to-orange-500",
      gradient: "from-yellow-500/20 to-orange-500/20",
      featured: true
    },
    {
      tier: "Platinum",
      title: "Elite Rewards",
      benefits: ["5% cashback", "Concierge service", "Luxury perks"],
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  }

  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Choose Your <span className="text-gradient">Tier</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          Select the rewards tier that matches your lifestyle. 
          Each level unlocks exceptional benefits and exclusive experiences.
        </p>
      </motion.div>

      {/* Rewards Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {rewards.map((reward, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className={`relative group ${reward.featured ? 'md:scale-110' : ''}`}
          >
            {/* Featured Badge */}
            {reward.featured && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
              >
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                  POPULAR
                </span>
              </motion.div>
            )}

            <div className="relative h-full">
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reward.gradient} rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
              
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 group-hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                {/* Tier Badge */}
                <div className={`inline-block bg-gradient-to-r ${reward.color} text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 self-start`}>
                  {reward.tier}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {reward.title}
                </h3>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {reward.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className={`text-2xl bg-gradient-to-r ${reward.color} text-transparent bg-clip-text`}>
                        ✓
                      </span>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    reward.featured
                      ? `bg-gradient-to-r ${reward.color} text-black shadow-lg shadow-yellow-500/30`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}

export default RewardsSection
