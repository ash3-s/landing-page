import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Defining the <span className="italic">Future of Brands</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16">
            Synaptive was founded on a simple principle: a brand is the most valuable asset a company owns.
            We are a collective of strategists, creatives, and visionaries dedicated to building the world&apos;s most
            influential identities.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl font-serif mb-6 underline decoration-accent decoration-2 underline-offset-8">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the architects of market authority. We believe that when strategic vision meets
                perfect execution, companies can transcend their category and become icons.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif mb-6 underline decoration-accent decoration-2 underline-offset-8">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between business potential and market perception. We provide the
                strategic certainty that industry leaders need to command their audience.
              </p>
            </div>
          </div>

          <div className="bg-secondary/20 rounded-[3rem] p-12 border border-border/50 mb-24">
            <h2 className="text-3xl font-serif mb-12 text-center">The Synaptive Standards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Excellence",
                  desc: "No compromises. We build strategies that last decades, not seasons.",
                },
                {
                  title: "Digital Integrity",
                  desc: "Ethical, high-performance systems built to support your brand truth.",
                },
                {
                  title: "Strategic Partnership",
                  desc: "We don&apos;t just deliver services; we own your growth objectives alongside you.",
                },
              ].map((standard, idx) => (
                <div key={idx} className="space-y-4">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <h4 className="font-bold text-lg">{standard.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{standard.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full px-12 h-16 text-lg" asChild>
              <Link href="/consultation">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
