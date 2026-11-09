import { useState } from 'react'
import { LuUser } from 'react-icons/lu'
import Section from './Section.jsx'
import Sticker from './Sticker.jsx'
import { profile } from '../data.js'

// Put your photo at public/photo.jpg. Until it exists, the initials block shows instead.
function Photo() {
  const [ok, setOk] = useState(true)
  const src = `${import.meta.env.BASE_URL}photo.jpg`

  return (
    <figure className="relative w-full max-w-[18rem] justify-self-start lg:justify-self-end">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-surface">
        {ok ? (
          <img
            src={src}
            alt={`Portrait of ${profile.name}`}
            onError={() => setOk(false)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="heat-bar flex h-full w-full items-center justify-center font-display text-7xl font-extrabold tracking-tight text-bg/80"
          >
            SAR
          </div>
        )}
        <div className="heat-bar absolute inset-x-0 bottom-0 h-[3px]" />
      </div>
      <Sticker variant="yellow" rotate={-7} delay={0.2} position="-bottom-4 -left-5">
        <span aria-hidden="true">👋</span>
        Hi, I'm Abrar
      </Sticker>
    </figure>
  )
}

export default function About() {
  return (
    <Section id="about" title="About" icon={LuUser}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <div className="max-w-[38rem] space-y-5 text-lg leading-relaxed text-ink sm:text-xl lg:order-first">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="order-first lg:order-last">
          <Photo />
        </div>
      </div>
    </Section>
  )
}
