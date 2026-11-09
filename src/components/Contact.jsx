import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'
import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const links = [
    { label: 'GitHub', href: profile.github, Icon: FaGithub },
    { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedinIn },
    { label: 'Facebook', href: profile.facebook, Icon: FaFacebookF },
    { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
  ].filter((l) => l.href)

  const pill =
    'group inline-flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-3 text-lg transition-colors hover:border-heat-3'

  return (
    <Section id="contact" title="Contact" icon={LuMail}>
      <p className="max-w-[36rem] text-xl">{profile.contactNote}</p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-flex items-center gap-4 break-all font-display text-[clamp(1.4rem,4.6vw,3.25rem)] font-bold leading-tight tracking-tight transition-colors hover:heat-text"
      >
        <FaEnvelope aria-hidden="true" className="size-[0.8em] shrink-0 text-heat-3" />
        {profile.email}
      </a>

      <ul className="mt-10 flex flex-wrap gap-3">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" className={pill}>
              <Icon aria-hidden="true" className="size-5 text-heat-4 transition-transform group-hover:scale-110" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
