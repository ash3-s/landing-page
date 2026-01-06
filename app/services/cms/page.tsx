import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft, Code, Zap, Lock, BarChart3 } from "lucide-react"

export default function CMSPage() {
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
            <div className="inline-block px-4 py-1 rounded-full bg-linear-to-r from-accent/20 to-secondary/20 text-accent text-xs font-semibold tracking-wider uppercase mb-6 border border-accent/30 shadow-lg shadow-accent/10">
              Brand Integrity
            </div>
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight text-balance leading-[1.1] mb-8">
              Brand Governance <span className="text-accent">Systems</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Protect your brand&apos;s integrity with systems that enforce consistency. We implement platforms ensuring
              every piece of content published adheres strictly to your brand guidelines and quality standards.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/consultation">
                Secure Your Brand <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative h-96 bg-linear-to-br from-accent/20 to-primary/20 rounded-3xl flex items-center justify-center">
            <Code className="w-40 h-40 text-accent/30" />
          </div>
        </div>
      </section>

      {/* CMS Solutions */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-16 text-center">Brand Consistency Tools</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Brand Identity Systems</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We separate your brand&apos;s message from its medium. Our systems allow you to update your narrative across
              all channels simultaneously, ensuring total market alignment.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Unified Brand Voice
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Multi-Channel Consistency
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Rapid Market Response
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Identity Protection
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
              <Code className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Narrative Control Platforms</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Empower your team to manage the brand story without technical hurdles. We build governance workflows
              that prevent off-brand content from ever reaching the public.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> Approval Workflows
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Brand Guideline Enforcement
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Content Lifecycle Management
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Role-Based Access
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Security & Maintenance</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Keep your CMS secure, updated, and optimized. We handle the technical backend so you focus on creating
              content that appeals to the market.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Regular Updates
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Security Monitoring
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Backup & Recovery
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Performance Optimization
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Training & Support</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We provide training to ensure your team can publish updates that are aligned with market trends.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> Team Training Sessions
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Content Guidelines
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> 24/7 Support Available
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Workflow Optimization
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why CMS */}
      <section className="py-20 container mx-auto px-6 bg-gradient-to-br from-primary/8 to-accent/8 rounded-3xl">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-12 text-center">Why Effective Management Matters</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Market Appeal</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Regularly managed content keeps your audience engaged. By keeping your website updated with fresh,
              relevant information, you ensure continued appeal to your target market.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Stay relevant with fresh content</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Engage your specific audience</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Consistent market messaging</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Scale at Speed</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As your market expands, your content needs to scale. We ensure your system is ready to handle increased
              traffic and content volume without losing its appeal.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Multi-channel publishing</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Rapid market response</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Efficient team collaboration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-br from-accent via-accent/98 to-primary rounded-3xl p-12 md:p-24 text-center text-primary-foreground shadow-xl shadow-accent/30">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8">Take Control of Your Content</h2>
          <p className="max-w-xl mx-auto text-primary-foreground/90 mb-12 text-lg leading-relaxed">
            Manage your website content effectively to appeal to your market and drive growth.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-12 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40"
          >
            <Link href="/consultation">Schedule CMS Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
