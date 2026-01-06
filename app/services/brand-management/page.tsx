import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft, Share2, Zap, Target, Sparkles } from "lucide-react"

export default function BrandManagementPage() {
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
              The Strategic Core
            </div>
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight text-balance leading-[1.1] mb-8">
              Strategic Brand <span className="text-primary">Management</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              We don&apos;t just build assets; we orchestrate your entire market existence. From defining your core identity
              to managing the digital platforms that express it, we ensure you dominate your category.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/consultation">
                Dominate Your Market <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative h-96 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
            <Share2 className="w-40 h-40 text-primary/30" />
          </div>
        </div>
      </section>

      {/* Brand Services */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-16 text-center">Comprehensive Strategy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Digital Identity Architecture</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We architect the visual and structural systems that represent your brand. This includes high-performance
              websites, but treats them as one component of a larger identity system.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Visual Identity Systems
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Strategic Web Architecture
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Brand Guidelines
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Market Positioning
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Strategic Advisory</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We advise you on the best strategies to maintain a strong social media presence, guiding your team
              on content, timing, and engagement.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> Social Media Consulting
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Presence Strategy
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Platform Selection Advice
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Growth Analysis
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Content Strategy</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We help you plan and create content that resonates with your market, ensuring your brand voice is consistent.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Content Planning
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Brand Voice Definition
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Engagement Strategies
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Market Alignment
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
              <Share2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Reputation Management</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We monitor and manage your online reputation, ensuring your brand image remains positive and trustworthy.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> Brand Monitoring
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Trust Building
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Review Management
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Crisis Advisory
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Consistent Messaging */}
      <section className="py-20 container mx-auto px-6 bg-gradient-to-br from-primary/8 to-accent/8 rounded-3xl">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-12 text-center">
          Consistency Across All Touchpoints
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary mb-4">🎯</div>
            <h3 className="text-xl font-serif font-bold mb-4">One Brand, One Voice</h3>
            <p className="text-muted-foreground">
              Whether it&apos;s your website, social media, or email—your brand voice is consistent and recognizable across
              every channel.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-accent mb-4">📊</div>
            <h3 className="text-xl font-serif font-bold mb-4">Strategic Growth</h3>
            <p className="text-muted-foreground">
              We track what works and continuously optimize your strategy based on real market feedback and engagement.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary mb-4">🚀</div>
            <h3 className="text-xl font-serif font-bold mb-4">Scalable Presence</h3>
            <p className="text-muted-foreground">
              From startup presence to enterprise-level brand management, we scale our strategies with your growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary via-primary/98 to-secondary rounded-3xl p-12 md:p-24 text-center text-primary-foreground shadow-xl shadow-primary/30">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8">Transform Your Brand Today</h2>
          <p className="max-w-xl mx-auto text-primary-foreground/90 mb-12 text-lg leading-relaxed">
            Build a brand that resonates, engages, and converts. Let&apos;s create your brand story together.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-12 h-14 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/40"
          >
            <Link href="/consultation">Start Your Brand Transformation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
