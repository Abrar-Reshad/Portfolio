import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SiReact, SiPython, SiPytorch, SiNodedotjs, SiFirebase } from 'react-icons/si'
import { LuSparkles } from 'react-icons/lu'
import ThermalField from './ThermalField.jsx'
import Sticker from './Sticker.jsx'
import { nav, profile } from '../data.js'

const EASE = [0.2, 0.8, 0.2, 1]

function Word({ children, index, reduce }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
      <motion.span
        className="inline-block"
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 + index * 0.09 }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const host = useRef(null)
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      ref={host}
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      <ThermalField hostRef={host} />
      <div className="fade-to-bg pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />

      {/* Stickers: drag them around */}
      <Sticker constraints={host} shape="square" rotate={-8} delay={1.0}
        position="top-[14%] right-[8%]">
        <SiReact style={{ color: '#149ECA' }} aria-label="React" />
      </Sticker>
      <Sticker constraints={host} shape="square" variant="orange" rotate={-5} delay={1.12}
        position="top-[25%] left-[8%] md:top-[14%] md:left-auto md:right-[36%]">
        <SiPytorch aria-label="PyTorch" />
      </Sticker>
      <Sticker constraints={host} shape="square" rotate={9} delay={1.24}
        position="hidden md:flex top-[26%] right-[15%]">
        <SiPython style={{ color: '#3776AB' }} aria-label="Python" />
      </Sticker>
      <Sticker constraints={host} shape="square" variant="yellow" rotate={7} delay={1.36}
        position="hidden md:flex top-[12%] right-[22%]">
        <SiFirebase style={{ color: '#E65100' }} aria-label="Firebase" />
      </Sticker>
      <Sticker constraints={host} shape="square" variant="violet" rotate={-7} delay={1.48}
        position="hidden md:flex top-[32%] right-[28%]">
        <SiNodedotjs style={{ color: '#9BE37A' }} aria-label="Node.js" />
      </Sticker>
      <Sticker constraints={host} variant="yellow" rotate={4} delay={1.72}
        position="hidden md:flex top-[38%] right-[7%]">
        <LuSparkles aria-hidden="true" />
        Open to opportunities
      </Sticker>

      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <a href="#top" className="font-hero text-lg font-bold tracking-tight">
          SAR
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-sm sm:gap-8 sm:text-base">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-opacity hover:opacity-70">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="pointer-events-none relative mt-auto px-6 pb-16 sm:px-10 sm:pb-20">
        <h1 className="whitespace-nowrap font-hero text-[clamp(1.6rem,6.4vw,5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white mix-blend-difference">
          {profile.name.split(' ').map((word, i) => (
            <span key={word}>
              <Word index={i} reduce={reduce}>
                {word}
              </Word>{' '}
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="max-w-2xl pb-2 font-hero text-xl font-semibold leading-[1.45] tracking-tight text-ink [text-shadow:0_1px_14px_rgba(8,9,13,0.9)] sm:text-3xl">
            {profile.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
