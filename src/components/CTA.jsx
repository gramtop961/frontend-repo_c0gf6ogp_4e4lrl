import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="buy" className="relative py-24 bg-gradient-to-b from-sky-950 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(59,130,246,0.3),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to feel the Pure Vibe?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-white/80 max-w-2xl mx-auto">
          Join thousands who’ve switched to a bottle that keeps up with their day and the planet.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-sky-700 shadow hover:shadow-lg transition-shadow">Checkout</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white/90 px-8 py-4 hover:bg-white/10">Learn more</a>
        </motion.div>
        <p className="mt-6 text-xs text-white/60">Free shipping over $40 • 30-day returns • Lifetime warranty</p>
      </div>
    </section>
  )
}
