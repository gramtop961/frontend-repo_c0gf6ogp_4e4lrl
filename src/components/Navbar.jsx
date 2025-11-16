import { useState } from 'react'
import { Menu, X, Droplets, Sparkles } from 'lucide-react'

function NavLink({ href, label, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white">
            <Droplets className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-wide text-white text-lg">Pure Vibe</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#features" label="Features" />
          <NavLink href="#bottles" label="Bottles" />
          <NavLink href="#sustain" label="Sustainability" />
          <a href="#buy" className="inline-flex items-center gap-2 bg-white text-sky-600 font-semibold px-4 py-2 rounded-full shadow/40 shadow-sky-900/20 hover:shadow-sky-900/30 transition-all">
            <Sparkles className="w-4 h-4" /> Shop Now
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
            <NavLink href="#features" label="Features" onClick={close} />
            <NavLink href="#bottles" label="Bottles" onClick={close} />
            <NavLink href="#sustain" label="Sustainability" onClick={close} />
            <a href="#buy" onClick={close} className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-semibold px-4 py-2 rounded-full">Shop Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
