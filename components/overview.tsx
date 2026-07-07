import { Users, Activity, HeartPulse } from 'lucide-react'

const stats = [
  {
    icon: Users,
    stat: '~1 in 300',
    label: 'People worldwide live with schizophrenia',
  },
  {
    icon: Activity,
    stat: 'Late teens–30s',
    label: 'Symptoms most often first appear at this age',
  },
  {
    icon: HeartPulse,
    stat: 'Treatable',
    label: 'Most people improve significantly with care',
  },
]

export function Overview() {
  return (
    <section id="overview" className="scroll-mt-20 border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The basics
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What is schizophrenia?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Schizophrenia is a chronic brain and mental health condition that
            affects how a person thinks, feels, and perceives reality. It can
            influence thoughts, emotions, and behavior — but with the right
            treatment and support, many people manage their symptoms and lead
            full, meaningful lives.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.stat}
              className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <item.icon className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-4 font-serif text-2xl font-medium text-foreground">
                {item.stat}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
