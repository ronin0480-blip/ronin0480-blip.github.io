import { Brain } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Brain className="size-5" aria-hidden="true" />
            </span>
            <span className="font-serif text-lg font-medium tracking-tight text-foreground">
              Mindful
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground">
              Overview
            </a>
            <a href="#signs" className="text-sm text-muted-foreground hover:text-foreground">
              Signs
            </a>
            <a href="#myths" className="text-sm text-muted-foreground hover:text-foreground">
              Myths &amp; Facts
            </a>
            <a href="#support" className="text-sm text-muted-foreground hover:text-foreground">
              Support
            </a>
            <a href="#book" className="text-sm text-muted-foreground hover:text-foreground">
              Resource
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
            This website is for general education and health-promotion purposes
            only and does not constitute medical advice. Always consult a
            qualified healthcare professional for diagnosis and treatment.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mindful. Built to raise awareness
            and reduce stigma.
          </p>
        </div>
      </div>
    </footer>
  )
}
