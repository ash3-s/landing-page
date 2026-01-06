import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft, Globe, TrendingUp, Zap, BarChart3, Search } from "lucide-react"

export default function WebsiteManagementPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6 border border-primary/30 shadow-lg shadow-primary/10">
              Platform for Identity
            </div>
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight text-balance leading-[1.1] mb-8">
              Your Brand&apos;s <span className="text-primary">Digital Stage</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Your website isn&apos;t just a tech product; it&apos;s the primary theater for your brand. We build and manage this platform
              to ensure it perfectly supports your market positioning and brand voice.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/consultation">
                Build Your Platform <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative h-96 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
            <Globe className="w-40 h-40 text-primary/30" />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-16 text-center">Supporting The Brand</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Visibility Strategy (SEO)</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We ensure your brand is found by the right audience. Our geo-targeted strategies put your brand message
              in front of the markets that matter most.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Market Analysis
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Audience Targeting
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Brand Reach Expansion
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Technical Health
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Brand Platform Build</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We create the digital infrastructure your brand needs to thrive. Functional, beautiful, and effectively
              invisible—so your brand is the only thing the user sees.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> Identity-First Design
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Frictionless UX
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Mobile Brand Presence
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Conversion Pathways
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Market Analytics</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We monitor performance and analyze user behavior to ensure your website and content constantly appeal
              to your shifting market needs.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Traffic Analysis
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Use Behavior Tracking
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Conversion Tracking
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Monthly Reporting
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ongoing Management */}
      <section className="py-20 container mx-auto px-6 bg-gradient-to-br from-primary/8 to-accent/8 rounded-3xl">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-12 text-center">
          Continuous Website Management
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Content Management</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We don&apos;t just build; we manage. We handle all content updates, ensuring your website remains fresh,
              relevant, and constantly appealing to your market.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Regular content updates</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Market-aligned messaging</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Strategic content planning</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Market-Driven Strategy</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We analyze your market and implement strategies that ensure your website is always working to attract
              and retain your ideal customers.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Competitor analysis</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Market opportunity identification</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Targeted growth strategies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary via-primary/98 to-secondary rounded-3xl p-12 md:p-24 text-center text-primary-foreground shadow-xl shadow-primary/30">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8">Ready to Dominate Your Market?</h2>
          <p className="max-w-xl mx-auto text-primary-foreground/90 mb-12 text-lg leading-relaxed">
            Let&apos;s build a website management strategy that drives real results.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-12 h-14 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/40"
          >
            <Link href="/consultation">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </main >
  )
}
