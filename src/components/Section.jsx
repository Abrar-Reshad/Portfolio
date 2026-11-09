export default function Section({ id, title, icon: Icon, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:px-10 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12 md:py-28"
    >
      <div className="md:sticky md:top-10 md:self-start">
        {Icon && (
          <span
            aria-hidden="true"
            className="heat-bar mb-4 flex size-11 items-center justify-center rounded-xl text-xl text-bg"
          >
            <Icon />
          </span>
        )}
        <h2 id={`${id}-title`} className="font-display text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  )
}
