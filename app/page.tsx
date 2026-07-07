import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Overview } from '@/components/overview'
import { Symptoms } from '@/components/symptoms'
import { Myths } from '@/components/myths'
import { Support } from '@/components/support'
import { BookSection } from '@/components/book-section'
import { Crisis } from '@/components/crisis'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Symptoms />
        <Myths />
        <Support />
        <BookSection />
        <Crisis />
      </main>
      <SiteFooter />
    </div>
  )
}
