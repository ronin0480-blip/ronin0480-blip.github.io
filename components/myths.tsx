import { X, Check } from 'lucide-react'

const pairs = [
  {
    myth: 'Schizophrenia means having a “split personality.”',
    fact: 'It does not. Schizophrenia affects perception and thinking — it is a distinct condition from dissociative identity disorder.',
  },
  {
    myth: 'People with schizophrenia are violent and dangerous.',
    fact: 'Most are not violent. They are far more likely to be victims of harm than to cause it.',
  },
  {
    myth: 'Schizophrenia is caused by bad parenting or personal weakness.',
    fact: 'It arises from a mix of genetic, biological, and environmental factors — not character or upbringing.',
  },
  {
    myth: 'People with schizophrenia can never recover.',
    fact: 'With treatment and support, many people manage symptoms, work, study, and build fulfilling lives.',
  },
]

export function Myths() {
  return (
    <section id="myths" className="scroll-mt-20 border-y border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Breaking the stigma
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Myths and facts
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Misunderstanding fuels stigma. Replacing myths with facts helps
            people seek help sooner and feel less alone.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {pairs.map((pair) => (
            <div
              key={pair.myth}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-7"
            >
              <div className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <X className="size-3.5" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground line-through decoration-destructive/40">
                  {pair.myth}
                </p>
              </div>
              <div className="flex gap-3 border-t border-border pt-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  {pair.fact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
