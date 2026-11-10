import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  light: 'bg-white text-bg',
  orange: 'bg-heat-3 text-bg',
  yellow: 'bg-heat-4 text-bg',
  violet: 'bg-heat-1 text-white',
  magenta: 'bg-heat-2 text-white',
}

// A die-cut sticker. Pass `constraints` (a ref) to make it draggable inside that element.
export default function Sticker({
  children,
  variant = 'light',
  rotate = 0,
  delay = 0,
  position = '',
  constraints,
  shape = 'pill',
}) {
  const reduce = useReducedMotion()
  const draggable = Boolean(constraints)

  return (
    <motion.div
      className={`absolute z-10 ${position} ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
      style={{ rotate }}
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 14, delay }}
      drag={draggable}
      dragConstraints={constraints}
      dragElastic={0.15}
      dragMomentum={false}
      whileHover={{ scale: 1.08 }}
      whileDrag={{ scale: 1.12, zIndex: 30 }}
    >
      <div className="sticker-float" style={{ animationDelay: `${delay * 2}s` }}>
        <div
          className={`flex items-center justify-center border-[3px] border-white font-semibold shadow-[5px_5px_0_rgba(0,0,0,0.6)] ${variants[variant]} ${
            shape === 'square'
              ? 'size-14 rounded-2xl text-3xl sm:size-16 sm:text-4xl lg:size-20 lg:text-5xl'
              : 'gap-2 rounded-full px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base'
          }`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}
