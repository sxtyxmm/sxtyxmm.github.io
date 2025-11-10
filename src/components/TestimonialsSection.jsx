import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A financial experience unlike any other. Every transaction feels rewarding.",
      author: "Priya Sharma",
      role: "Tech Entrepreneur",
      rating: 5
    },
    {
      quote: "The premium rewards and instant gratification make this absolutely worth it.",
      author: "Rahul Verma",
      role: "Investment Banker",
      rating: 5
    },
    {
      quote: "Finally, a payment platform that understands luxury and exclusivity.",
      author: "Ananya Gupta",
      role: "Creative Director",
      rating: 5
    }
  ]

  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Join thousands who have transformed their financial lifestyle.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-yellow-500 text-2xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-black font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote Mark Decoration */}
                <div className="absolute top-8 right-8 text-8xl text-yellow-500/10 font-serif leading-none">
                  "
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "10M+", label: "Users" },
            { value: "₹500Cr+", label: "Rewards Given" },
            { value: "4.9/5", label: "App Rating" },
            { value: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
