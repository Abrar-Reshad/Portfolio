import { LuGraduationCap } from 'react-icons/lu'
import Section from './Section.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" title="Education" icon={LuGraduationCap}>
      <ul className="max-w-[44rem]">
        {education.map((e) => (
          <li
            key={e.school}
            className="grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
          >
            <div>
              <p className="font-display text-xl font-semibold tracking-tight">{e.school}</p>
              <p className="text-mute">{e.degree}</p>
            </div>
            <p className="text-mute sm:text-right">{e.years}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
