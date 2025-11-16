import { motion } from 'framer-motion'
import { Droplets } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[10%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.35),rgba(59,130,246,0.2)_40%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 via-sky-950/70 to-sky-950" />
      </div>

      {/* Floating drops */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/60 rounded-full blur-[1px]"
            style={{ left: `${10 + i * 10}%`, top: `${20 + (i % 3) * 20}%` }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/90 backdrop-blur">
            <Droplets className="w-4 h-4" /> Hydration reimagined
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-4 text-5xl md:text-7xl font-black tracking-tight text-white">
            Pure Vibe
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-lg md:text-xl text-white/80 max-w-xl">
            A sleek, sustainable water bottle engineered to keep your flow fresh. Double-wall insulated. Lifetime-ready. Designed for the vibe.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex items-center gap-4">
            <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-sky-700 shadow hover:shadow-lg transition-shadow">Shop Pure Vibe</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white/90 px-6 py-3 hover:bg-white/10">See Features</a>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div initial={{ rotate: -10, y: 30, opacity: 0 }} animate={{ rotate: 0, y: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/10 rounded-[32px] backdrop-blur-xl border border-white/30" />
            <div className="absolute inset-2 rounded-[28px] bg-[linear-gradient(135deg,rgba(2,132,199,0.4),rgba(59,130,246,0.3))]" />
            <motion.div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-sky-300/40 blur-3xl" animate={{ x: [0, 10, 0], y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-indigo-400/40 blur-3xl" animate={{ x: [0, -10, 0], y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />

            <motion.img
              src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1080&auto=format&fit=crop"
              alt="Pure Vibe Bottle"
              className="absolute inset-0 w-full h-full object-cover rounded-[28px] shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
