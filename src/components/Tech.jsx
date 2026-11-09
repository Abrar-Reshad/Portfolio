import { techIcons, fallbackIcon } from '../icons.js'

export default function Tech({ name, size = 'md' }) {
  const [Icon, color] = techIcons[name] ?? fallbackIcon
  const small = size === 'sm'
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface transition-colors hover:border-heat-3 ${
        small ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base'
      }`}
    >
      <Icon aria-hidden="true" style={{ color }} className={small ? 'size-4' : 'size-5'} />
      {name}
    </span>
  )
}
