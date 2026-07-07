import { LifeBuoy, Phone } from 'lucide-react'

export function Crisis() {
  return (
    <section id="crisis" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <LifeBuoy className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-balance font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Need help right now?
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                If you or someone you know is in crisis or experiencing thoughts
                of self-harm, please reach out immediately. You are not alone,
                and support is available.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-auto">
              <a
                href="tel:131114"
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40"
              >
                <Phone className="size-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    Call Lifeline 13 11 14
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    24/7 crisis support &amp; suicide prevention (AU)
                  </span>
                </span>
              </a>
              <a
                href="tel:000"
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40"
              >
                <Phone className="size-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    Emergency: 000
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    For immediate danger
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
