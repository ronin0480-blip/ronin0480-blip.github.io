'use client'

import { useState } from 'react'
import { Brain, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Signs', href: '#signs' },
  { label: 'Myths & Facts', href: '#myths' },
  { label: 'Support', href: '#support' },
  { label: 'Resource', href: '#book' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Brain className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-medium tracking-tight text-foreground">
            Mindful
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href="#crisis" />}
            size="sm"
            className="rounded-full"
          >
            Get help now
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-background px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="#crisis" onClick={() => setOpen(false)} />}
              size="sm"
              className="mt-2 rounded-full"
            >
              Get help now
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
