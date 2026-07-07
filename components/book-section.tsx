import { BookOpen } from 'lucide-react'
import { DownloadBookButton } from '@/components/download-book-button'

const chapters = [
  'What Is Schizophrenia?',
  'Symptoms and Signs',
  'Causes and Risk Factors',
  'Treatment Options',
  'Living Well With Schizophrenia',
  'How to Help',
]

export function BookSection() {
  return (
    <section id="book" className="scroll-mt-20 border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 rounded-3xl border border-border bg-background p-8 md:grid-cols-[auto_1fr] md:p-12">
          {/* Book cover */}
          <div className="mx-auto w-full max-w-[240px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-primary shadow-md">
              <div className="flex h-full flex-col justify-between p-6 text-primary-foreground">
                <BookOpen className="size-8 opacity-90" aria-hidden="true" />
                <div>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] opacity-75">
                    A Health &amp; Wellbeing Guide
                  </p>
                  <p className="mt-3 font-serif text-2xl font-medium leading-tight">
                    Schizophrenia, Explained
                  </p>
                  <p className="mt-3 text-sm opacity-80">
                    A Clinical and Compassionate Guide to Understanding, Treatment, and Recovery
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-widest opacity-90">
                    Bindesh Patel
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Featured resource
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Read the full book
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {'"Schizophrenia, Explained"'} by Bindesh Patel is a clinical yet
              compassionate guide that expands on everything covered here — across six
              chapters spanning understanding, treatment, recovery, and how to support a
              loved one. Read it at your own pace.
            </p>

            <ul className="mt-8 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {chapters.map((chapter, index) => (
                <li
                  key={chapter}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                    {index + 1}
                  </span>
                  {chapter}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadBookButton />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              PDF resource — free to read and share for awareness purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
