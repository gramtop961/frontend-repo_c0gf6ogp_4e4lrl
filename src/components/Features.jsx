import { motion } from 'framer-motion'
import { Thermometer, ShieldCheck, Leaf, Droplets } from 'lucide-react'

const features = [
  {
    icon: Thermometer,
    title: '24h cold / 12h hot',
    desc: 'Double-wall vacuum insulation keeps your drink perfect all day',
  },
  {
    icon: ShieldCheck,
    title: 'Durable & leakproof',
    desc: 'Premium 18/8 stainless steel with precision seal cap',
  },
  {
    icon: Leaf,
    title: 'Planet-first',
    desc: 'BPA-free, reusable, and 1% of profit to ocean cleanup',
  },
  {
    icon: Droplets,
    title: 'No-sweat design',
    desc: 'Condensation-free exterior keeps your hands dry',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-sky-950 to-sky-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(56,189,248,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold tracking-tight">Engineered for the vibe</motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <f.icon className="w-7 h-7 text-sky-300" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
