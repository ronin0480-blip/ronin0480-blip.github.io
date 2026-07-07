import { Eye, CloudFog, Puzzle } from 'lucide-react'

const groups = [
  {
    icon: Eye,
    title: 'Positive symptoms',
    description: 'Experiences added to a person’s reality.',
    items: [
      'Hallucinations (hearing or seeing things others don’t)',
      'Delusions (strongly held false beliefs)',
      'Disorganized thinking or speech',
    ],
  },
  {
    icon: CloudFog,
    title: 'Negative symptoms',
    description: 'A reduction in normal functioning.',
    items: [
      'Reduced motivation or withdrawal',
      'Flattened emotional expression',
      'Difficulty experiencing pleasure',
    ],
  },
  {
    icon: Puzzle,
    title: 'Cognitive symptoms',
    description: 'Changes in memory and thinking.',
    items: [
      'Trouble focusing or paying attention',
      'Problems with memory',
      'Difficulty processing information',
    ],
  },
]

export function Symptoms() {
  return (
    <section id="signs" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Recognizing the signs
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Signs and symptoms
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Symptoms vary from person to person and generally fall into three
            groups. Early recognition and support lead to better outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <group.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {group.description}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
