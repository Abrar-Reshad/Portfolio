import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SiReact, SiPython, SiPytorch, SiNodedotjs, SiFirebase } from 'react-icons/si'
import { LuSparkles, LuGamepad2, LuPlane, LuMusic } from 'react-icons/lu'
import ThermalField from './ThermalField.jsx'
import Sticker from './Sticker.jsx'
import { nav, profile } from '../data.js'

const EASE = [0.2, 0.8, 0.2, 1]

function BdFlag() {
  return (
    <svg viewBox="0 0 30 18" aria-hidden="true" className="h-4 w-7 rounded-[2px]">
      <rect width="30" height="18" fill="#006A4E" />
      <circle cx="13.5" cy="9" r="5" fill="#F42A41" />
    </svg>
  )
}

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
      className="relative isolate flex min-h-[max(100svh,40rem)] flex-col overflow-hidden"
    >
      <ThermalField hostRef={host} />
      <div className="fade-to-bg pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />

      {/* Stickers. On phones they sit in the free area between the nav and the name,
          in four tidy rows. From lg up they scatter across the whole hero. */}
      <div className="absolute inset-x-0 bottom-[13rem] top-[5rem] sm:bottom-[15rem] lg:inset-y-0">
        <Sticker constraints={host} shape="square" rotate={-8} delay={1.0}
          position="left-[5%] top-[0%] lg:left-auto lg:right-[8%] lg:top-[12%]">
          <SiReact style={{ color: '#149ECA' }} aria-label="React" />
        </Sticker>
        <Sticker constraints={host} shape="square" variant="yellow" rotate={7} delay={1.12}
          position="left-[40%] top-[4%] lg:left-auto lg:right-[26%] lg:top-[14%]">
          <SiFirebase style={{ color: '#E65100' }} aria-label="Firebase" />
        </Sticker>
        <Sticker constraints={host} shape="square" variant="orange" rotate={-5} delay={1.24}
          position="right-[5%] top-[0%] lg:left-auto lg:right-[36%] lg:top-[25%]">
          <SiPytorch aria-label="PyTorch" />
        </Sticker>
        <Sticker constraints={host} rotate={-4} delay={1.36}
          position="left-[4%] top-[26%] lg:left-auto lg:right-[54%] lg:top-[26%]">
          <BdFlag />
          Dhaka, Bangladesh
        </Sticker>
        <Sticker constraints={host} shape="square" rotate={9} delay={1.48}
          position="right-[6%] top-[24%] lg:left-auto lg:right-[14%] lg:top-[28%]">
          <SiPython style={{ color: '#3776AB' }} aria-label="Python" />
        </Sticker>
        <Sticker constraints={host} shape="square" variant="magenta" rotate={8} delay={1.6}
          position="left-[7%] top-[50%] lg:left-auto lg:right-[47%] lg:top-[40%]">
          <LuGamepad2 aria-label="Gaming" />
        </Sticker>
        <Sticker constraints={host} shape="square" variant="violet" rotate={-7} delay={1.72}
          position="left-[38%] top-[47%] lg:left-auto lg:right-[24%] lg:top-[39%]">
          <SiNodedotjs style={{ color: '#9BE37A' }} aria-label="Node.js" />
        </Sticker>
        <Sticker constraints={host} shape="square" variant="orange" rotate={6} delay={1.84}
          position="right-[8%] top-[51%] lg:left-auto lg:right-[50%] lg:top-[12%]">
          <LuMusic aria-label="Music" />
        </Sticker>
        <Sticker constraints={host} variant="yellow" rotate={4} delay={1.96}
          position="left-[5%] top-[76%] lg:left-auto lg:right-[6%] lg:top-[55%]">
          <LuSparkles aria-hidden="true" />
          Open to opportunities
        </Sticker>
        <Sticker constraints={host} shape="square" rotate={-9} delay={2.08}
          position="right-[7%] top-[74%] lg:left-auto lg:right-[36%] lg:top-[52%]">
          <LuPlane style={{ color: '#5B3FD0' }} aria-label="Travel" />
        </Sticker>
      </div>

      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <a href="#top" className="font-hero text-lg font-bold tracking-tight">
          SAR
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-3 text-[13px] min-[380px]:gap-5 min-[380px]:text-sm sm:gap-8 sm:text-base">
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
