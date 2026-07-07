import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Mental health awareness
          </span>
          <h1 className="text-balance font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Understanding schizophrenia with clarity and compassion
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Schizophrenia is a treatable mental health condition — not a life
            sentence. Learn the facts, recognize the signs, and discover how
            support makes recovery possible.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#overview" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Start learning
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#book" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              Read the book
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-sm md:aspect-square">
            <Image
              src="/images/hero-calm.png"
              alt="Soft morning light through a window onto a calm, peaceful interior"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
