import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  Cpu,
  Microscope,
  GraduationCap,
  Building2,
  ChevronRight,
  CheckCircle2,
  Globe,
  Pen,
  Share2,
  Code,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <div className="w-4 h-4 bg-background rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SYNAPTIVE
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
            <Link href="#digital-services" className="hover:text-primary transition-colors">
              Digital Services
            </Link>
            <Link href="#sectors" className="hover:text-primary transition-colors">
              Industries
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <Button
            variant="outline"
            className="rounded-full px-6 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent border-primary/50 text-primary hover:shadow-lg hover:shadow-primary/20"
            asChild
          >
            <Link href="/consultation">
              Request Consultation <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6 border border-primary/30 shadow-lg shadow-primary/10">
          Brand Strategy & Management
        </div>

        <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-balance leading-[1.1] mb-8">
          Define Your <span className="text-primary">Brand Authority</span> with <span className="italic">Strategic</span>{" "}
          Vision
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
          Synaptive builds and manages market-leading brands. We provide the strategic direction, identity management,
          and digital ecosystem that turns your potential into market dominance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full px-8 h-14 text-base bg-primary text-primary-foreground shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            asChild
          >
            <Link href="/consultation">Elevate Your Brand</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-14 text-base group border-primary/50 text-primary hover:bg-primary/5 bg-transparent hover:shadow-lg hover:shadow-primary/15"
            asChild
          >
            <Link href="/services/brand-management">
              Explore Our Strategy <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-border/50 bg-gradient-to-r from-primary/5 via-secondary/15 to-primary/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
            Trusted by Global Innovators
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["SYNERGY", "VORTEX", "AETHER", "QUANTUM", "ZENITH"].map((brand) => (
              <span key={brand} className="text-2xl font-black tracking-tighter text-primary/70">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brand & Digital Services Section */}
      <section id="digital-services" className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Comprehensive Brand Management</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We manage your brand&apos;s entire digital existence. From strategic identity to the digital platforms that host it,
            we ensure every touchpoint reinforces your market authority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group p-8 rounded-3xl border border-primary/30 bg-linear-to-br from-primary/5 to-primary/0 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Brand Management & Strategy</h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              The core of our offering. We define your brand voice, manage your reputation, and orchestrate your entire
              social and digital presence to ensure consistent growth and market leadership.
            </p>
            <Link
              href="/services/brand-management"
              className="text-sm font-bold uppercase tracking-widest text-primary hover:text-accent hover:gap-3 flex items-center gap-2 transition-all"
            >
              Discover Approach <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="group p-8 rounded-3xl border border-accent/30 bg-linear-to-br from-accent/5 to-accent/0 hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all">
              <Pen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Content & Narrative</h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              Your brand&apos;s voice, articulated perfectly. We craft the strategic narratives, articles, and copy that
              communicate your value and build deep trust with your audience.
            </p>
            <Link
              href="/services/content-creation"
              className="text-sm font-bold uppercase tracking-widest text-primary hover:text-accent hover:gap-3 flex items-center gap-2 transition-all"
            >
              Learn More <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="group p-8 rounded-3xl border border-primary/30 bg-linear-to-br from-primary/5 to-primary/0 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Brand Platforms (Websites)</h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              We build digital stages for your brand. Our website services are designed purely to support your brand identity,
              ensuring your digital home reflects the quality of your business.
            </p>
            <Link
              href="/services/website-management"
              className="text-sm font-bold uppercase tracking-widest text-primary hover:text-accent hover:gap-3 flex items-center gap-2 transition-all"
            >
              Explore Service <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="group p-8 rounded-3xl border border-accent/30 bg-linear-to-br from-accent/5 to-accent/0 hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Content Governance (CMS)</h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              Tools to maintain your brand consistency. We implement streamlined systems that allow you to manage your
              brand&apos;s content without technical friction.
            </p>
            <Link
              href="/services/cms"
              className="text-sm font-bold uppercase tracking-widest text-primary hover:text-accent hover:gap-3 flex items-center gap-2 transition-all"
            >
              Explore Options <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section
        id="sectors"
        className="py-32 container mx-auto px-8 md:px-16 bg-linear-to-br from-primary/8 via-secondary/10 to-accent/8 rounded-[3rem]"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Sector-Specific Brand Authority</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We deploy deep domain knowledge across specialized sectors to build brands that speak your
            industry&apos;s unique language and command respect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              name: "EdTech",
              desc: "Building authoritative voices for educational platforms and adaptive learning pioneers.",
            },
            {
              icon: Microscope,
              name: "Healthcare",
              desc: "Trust-based branding for diagnostic aids and research institutions.",
            },
            {
              icon: Building2,
              name: "Real Estate",
              desc: "Premium identity management for property developers and facility ecosystems.",
            },
            {
              icon: Cpu,
              name: "Manufacturing",
              desc: "Industrial strength branding for IoT and smart factory innovators.",
            },
            {
              icon: ArrowUpRight,
              name: "Logistics",
              desc: "Clear, reliable messaging for complex supply chain and logic networks.",
            },
            {
              icon: CheckCircle2,
              name: "Government",
              desc: "Dignified and accessible digital presence for public services.",
            },
          ].map((sector, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl border border-border/50 bg-linear-to-br from-background to-background/80 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                <sector.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-4">{sector.name}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">{sector.desc}</p>
              <Link
                href="/consultation"
                className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent hover:gap-2 flex items-center gap-2 transition-all"
              >
                Inquire Sector <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Capability (Classy) */}
      <section className="py-32 bg-linear-to-br from-primary/8 via-secondary/5 to-accent/8 relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/30">
            <img
              src="/pexels-fauxels-3184465.jpg"
              alt="Our Workspace"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent mix-blend-multiply" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Partnership Built on <span className="text-primary italic">Certainty</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-primary opacity-70 shrink-0">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Strategic Rigor</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We don&apos;t guess; we strategize. Every brand decision is made with data, market insight, and
                    long-term growth as core requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-primary opacity-70 shrink-0">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Elite Creatives</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team consists exclusively of senior branding experts and strategists with a track
                    record of elevating market perception.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-primary opacity-70 shrink-0">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Consistent Growth</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time monitoring and iterative refinement ensure your brand&apos;s influence continues to expand
                    month after month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary via-primary/98 to-secondary rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl shadow-primary/40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-15" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_right,var(--secondary)_0%,transparent_60%)] opacity-20" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10">
            Ready to <span className="italic">Define</span> the Future?
          </h2>
          <p className="max-w-xl mx-auto text-primary-foreground/90 mb-12 relative z-10 text-lg">
            Join the ranks of forward-thinking organizations leveraging Synaptive&apos;s technical excellence and digital
            strategy to dominate their sectors.
          </p>
          <Button
            size="lg"
            className="rounded-full px-12 h-16 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/40 hover:shadow-2xl hover:shadow-accent/50 relative z-10 transition-all hover:scale-105"
            asChild
          >
            <Link href="/consultation">Book an Executive Briefing</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-primary via-secondary to-accent rounded-full shadow-lg shadow-primary/30" />
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  SYNAPTIVE
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Elite software engineering, digital consultancy, and digital services for global leaders. Built on trust,
                delivered with precision.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Expertise</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <Link href="/solutions/custom-software" className="hover:text-primary transition-colors">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/cloud-architecture" className="hover:text-primary transition-colors">
                    Cloud Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/data-engineering" className="hover:text-primary transition-colors">
                    Data Engineering
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Connect</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Twitter</li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground uppercase tracking-widest">
            <span>© 2025 Synaptive. All rights reserved.</span>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
