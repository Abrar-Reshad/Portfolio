import { LuLayers } from 'react-icons/lu'
import Section from './Section.jsx'
import Tech from './Tech.jsx'
import { stack } from '../data.js'

export default function Stack() {
  return (
    <Section id="stack" title="Stack" icon={LuLayers}>
      <dl className="max-w-[46rem]">
        {stack.map((g) => (
          <div
            key={g.label}
            className="grid gap-3 border-t border-line py-6 last:border-b sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="pt-2 text-mute">{g.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map((name) => (
                <Tech key={name} name={name} />
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
