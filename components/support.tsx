import Image from 'next/image'
import { Pill, MessagesSquare, HandHeart, CalendarCheck } from 'lucide-react'

const supports = [
  {
    icon: Pill,
    title: 'Medication',
    description:
      'Antipsychotic medication can reduce and control symptoms, prescribed and monitored by a clinician.',
  },
  {
    icon: MessagesSquare,
    title: 'Therapy',
    description:
      'Psychotherapy and cognitive approaches help people cope, understand their experiences, and build skills.',
  },
  {
    icon: HandHeart,
    title: 'Community & family',
    description:
      'Supportive relationships and peer connection are powerful protective factors in recovery.',
  },
  {
    icon: CalendarCheck,
    title: 'Everyday routine',
    description:
      'Stable sleep, activity, and reduced stress support long-term wellbeing alongside treatment.',
  },
]

export function Support() {
  return (
    <section id="support" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="relative order-last md:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/support-hands.png"
              alt="Two people's hands gently overlapping in a supportive gesture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Treatment & support
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Recovery is possible
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            There is no single cure, but a combination of care helps most
            people manage symptoms and thrive. Support works best when it is
            consistent, compassionate, and personalized.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {supports.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
