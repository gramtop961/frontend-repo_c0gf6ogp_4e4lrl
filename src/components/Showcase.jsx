import { motion } from 'framer-motion'

const variants = [
  { name: 'Arctic', color: 'from-sky-300 to-indigo-400', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1080&auto=format&fit=crop' },
  { name: 'Midnight', color: 'from-slate-400 to-slate-700', img: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?q=80&w=1080&auto=format&fit=crop' },
  { name: 'Coral', color: 'from-rose-300 to-pink-500', img: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1080&auto=format&fit=crop' },
]

export default function Showcase() {
  return (
    <section id="bottles" className="relative py-24 bg-gradient-to-b from-sky-900 to-sky-950 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold tracking-tight">Pick your vibe</motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {variants.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur group"
            >
              <div className="relative h-64">
                <motion.img src={v.img} alt={v.name} className="absolute inset-0 w-full h-full object-cover opacity-80" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} />
                <div className={`absolute inset-0 bg-gradient-to-b ${v.color} opacity-40`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{v.name}</h3>
                <p className="text-white/70 text-sm">Limited colorway • 21oz / 620ml</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold">$29</span>
                  <a href="#buy" className="inline-flex items-center rounded-full bg-white text-sky-700 px-4 py-2 font-semibold">Add to cart</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
