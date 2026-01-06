import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft, Pen, Lightbulb, Users, BookOpen } from "lucide-react"

export default function ContentCreationPage() {
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
              Identity Articulation
            </div>
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight text-balance leading-[1.1] mb-8">
              Brand Voice & <span className="text-accent">Narrative</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Content is the articulation of your brand&apos;s soul. We create the strategic narratives and voice that
              define who you are in the market, building authority and deep emotional connection.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/consultation">
                Define Your Voice <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative h-96 bg-linear-to-br from-accent/20 to-primary/20 rounded-3xl flex items-center justify-center">
            <Pen className="w-40 h-40 text-accent/30" />
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-16 text-center">Narrative Strategy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Strategic Brand Copy</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Every word on your digital platforms should reinforce your brand positioning. We write copy that isn&apos;t just
              persuasive—it&apos;s unmistakably yours.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Core Value Proposition
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Brand Manifesto
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Tone of Voice Guidelines
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> UX Writing
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Authority Building Content</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Position your brand as the industry leader. We create thought leadership pieces and insights that command
              respect and demonstrate deep expertise.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> Thought Leadership
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Market Analysis
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> White Papers
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Strategic Insights
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Engagement Marketing</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Campaigns that engage and convert. From welcome sequences to promotional emails, we craft messages that
              nurture relationships with your specific market.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Email Sequences
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Newsletter Content
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Campaign Copy
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Promotional Content
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
              <Pen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Value-Driven Resources</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Guides, tutorials, and resources that provide genuine value. Content that helps builds trust and
              establishes you as a helpful partner in your market.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> How-To Guides
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Educational Tutorials
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Templates & Checklists
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> FAQs & Knowledge Base
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 container mx-auto px-6 bg-gradient-to-br from-primary/8 to-accent/8 rounded-3xl">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-12 text-center">Our Content Strategy</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Market Research</h3>
                <p className="text-muted-foreground">
                  We research your audience, competitors, and market. This informs every piece of content we create.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Creation & Optimization</h3>
                <p className="text-muted-foreground">
                  We write compelling, SEO-optimized content that resonates with readers and appeals to your target market.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Distribution & Promotion</h3>
                <p className="text-muted-foreground">
                  Content is only valuable if people see it. We ensure your content reaches your target audience.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Analysis & Refinement</h3>
                <p className="text-muted-foreground">
                  We track performance and continuously refine our strategy based on data and results to maximize market appeal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-br from-accent via-accent/98 to-primary rounded-3xl p-12 md:p-24 text-center text-primary-foreground shadow-xl shadow-accent/30">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8">Let&apos;s Tell Your Story</h2>
          <p className="max-w-xl mx-auto text-primary-foreground/90 mb-12 text-lg leading-relaxed">
            Content that connects, engages, and converts. Start your content transformation today.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-12 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40"
          >
            <Link href="/consultation">Begin Your Content Journey</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
