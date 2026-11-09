import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { LuBriefcase, LuArrowUpRight } from 'react-icons/lu'
import Section from './Section.jsx'
import Tech from './Tech.jsx'
import { work, projects, profile } from '../data.js'

function Row({ item, open, onToggle, reduce }) {
  const panelId = `work-${item.id}`
  return (
    <li className="border-t border-line last:border-b">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="group grid w-full cursor-pointer grid-cols-[auto_minmax(0,1fr)] items-start gap-x-5 py-7 text-left sm:grid-cols-[auto_minmax(0,1fr)_auto]"
      >
        <span
          aria-hidden="true"
          className={`mt-[0.9em] block size-3 rounded-full transition-all duration-500 ${
            open ? 'heat-bar scale-125' : 'bg-line group-hover:bg-heat-3'
          }`}
        />
        <span>
          <span className="block font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-heat-4 sm:text-4xl">
            {item.title}
          </span>
          <span className="mt-1 block text-mute">{item.kind}</span>
        </span>
        <span className="col-start-2 mt-2 text-sm text-mute sm:col-start-3 sm:mt-3 sm:text-base">
          {item.meta}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-9 pl-8">
              <p className="max-w-[38rem] text-lg text-ink">{item.summary}</p>
              <ul className="mt-5 max-w-[38rem] list-disc space-y-2 pl-5 text-mute marker:text-heat-3">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {item.status && <p className="mt-6 text-sm text-heat-4">{item.status}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <Tech key={s} name={s} size="sm" />
                ))}
              </div>
              {item.github && profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-heat-4 underline decoration-line decoration-2 underline-offset-4 hover:decoration-heat-3"
                >
                  See the code on GitHub
                  <LuArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Work() {
  const [openId, setOpenId] = useState(work[0].id)
  const reduce = useReducedMotion()
  const toggle = (id) => setOpenId(openId === id ? null : id)

  const items = [...work, ...projects]

  return (
    <Section id="work" title="Work" icon={LuBriefcase}>
      <ul>
        {items.map((item) => (
          <Row
            key={item.id}
            item={item}
            open={openId === item.id}
            onToggle={() => toggle(item.id)}
            reduce={reduce}
          />
        ))}
      </ul>
    </Section>
  )
}
