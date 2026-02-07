"use client"

import { Button } from "@/components/ui/button"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import {
  Sparkles,
  Zap,
  Globe,
  Code2,
  ArrowRight,
  Monitor,
  Rocket,
  Shield,
  Layers,
  Cpu,
  Eye,
  Box,
} from "lucide-react"

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Shader Animation Background - hero only */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ShaderAnimation />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Boon</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={onGetStarted}
              className="text-sm text-white/70 hover:text-white"
            >
              Sign In
            </Button>
            <Button
              onClick={onGetStarted}
              className="text-sm"
            >
              Get Started
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 sm:pt-28 lg:pt-36 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff40bf]/10 border border-[#ff40bf]/20 mb-8">
            <Sparkles className="h-3.5 w-3.5 text-[#ff40bf]" />
            <span className="text-sm font-medium text-[#ff40bf]">Solana&apos;s Vibecoding App</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              One prompt.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff40bf] via-[#ff40bf] to-[#ff40bf]/60 bg-clip-text text-transparent">
              Watch it go live.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Describe your Solana app. AI generates it. Preview it live in your browser.
            No boilerplate. No config. Just ship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="h-12 px-8 text-base font-medium"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-medium"
              onClick={onGetStarted}
            >
              See How It Works
            </Button>
          </div>

          {/* Social proof line */}
          <p className="text-sm text-white/30">
            AI-powered Solana development &middot; Live browser preview &middot; Zero config
          </p>
        </div>
      </section>

      {/* Divider gradient */}
      <div className="relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff40bf]/20 to-transparent" />
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Zap className="h-3.5 w-3.5 text-[#ff40bf]" />
              <span className="text-sm font-medium text-white/70">End-to-End Development</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              From idea to deployed app
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Everything you need to build, preview, and ship Solana applications
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Cpu className="h-5 w-5" />}
              title="AI-Powered Generation"
              description="Describe your Solana app in plain English. Claude generates production-ready code instantly."
              gradient="from-[#ff40bf] to-[#ff40bf]/50"
            />
            <FeatureCard
              icon={<Eye className="h-5 w-5" />}
              title="Live Browser Preview"
              description="Watch your app come to life in real-time. No local setup needed &mdash; runs right in your browser."
              gradient="from-[#ff40bf] to-[#ff40bf]/50"
            />
            <FeatureCard
              icon={<Globe className="h-5 w-5" />}
              title="Solana Native"
              description="Built for the Solana ecosystem. Wallet integration, on-chain interactions, and dApp patterns baked in."
              gradient="from-[#ff40bf] to-[#ff40bf]/50"
            />
            <FeatureCard
              icon={<Code2 className="h-5 w-5" />}
              title="Full Code Access"
              description="Every line of code is yours. Edit in the built-in Monaco editor or export and own it completely."
              gradient="from-[#ff40bf] to-[#ff40bf]/50"
            />
            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Iterative Refinement"
              description="Chat with AI to refine your app. Add features, fix bugs, and evolve your project conversationally."
              gradient="from-[#ff40bf] to-[#ff40bf]/50"
            />
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="Wallet Auth Built In"
              description="Privy-powered authentication with wallet and email sign-in. Web3-native from the start."
              gradient="from-[#ff40bf] to-[#ff40bf]/50"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* How It Works Section */}
      <section className="relative z-10 py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Rocket className="h-3.5 w-3.5 text-[#ff40bf]" />
              <span className="text-sm font-medium text-white/70">How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Three steps. That&apos;s it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepCard
              number="01"
              title="Describe"
              description="Tell Boon what you want to build. A token dashboard, an NFT marketplace, a DeFi interface &mdash; anything."
            />
            <StepCard
              number="02"
              title="Generate"
              description="AI writes production-ready code. Watch the streaming output as your app takes shape in real-time."
            />
            <StepCard
              number="03"
              title="Ship"
              description="Preview live in your browser. Iterate with chat. Export your code. Deploy wherever you want."
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff40bf]/20 to-transparent" />
      </div>

      {/* Testimonials / Capabilities Section */}
      <section className="relative z-10 py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Built for builders
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Whether you&apos;re a seasoned Solana dev or writing your first line of code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <QuoteCard
              quote="I described a token swap interface and had a working preview in under 5 minutes."
              author="Solana Developer"
            />
            <QuoteCard
              quote="The live preview is a game changer. No more deploy-check-fix cycles."
              author="dApp Builder"
            />
            <QuoteCard
              quote="Finally, a vibecoding tool that actually understands the Solana ecosystem."
              author="Web3 Creator"
            />
            <QuoteCard
              quote="The iterative chat makes it feel like pair programming with an expert."
              author="Full-Stack Dev"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-24 lg:py-32 bg-black">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to build?
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-xl mx-auto">
            One prompt is all it takes. Describe your Solana app and watch it come to life.
          </p>
          <Button
            onClick={onGetStarted}
            size="lg"
            className="h-14 px-10 text-lg font-medium"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 bg-black">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">Boon</span>
              <span className="text-white/30 text-sm">&middot; Solana&apos;s Vibecoding App</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/30">
              <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}) {
  return (
    <div className="group relative rounded-[20px] bg-white/[0.03] border border-white/[0.06] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-[#ff40bf]/20 hover:shadow-[0_0_30px_rgba(255,64,191,0.06)]">
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-gradient-to-br ${gradient} mb-4`}>
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="relative text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff40bf]/10 border border-[#ff40bf]/20 mb-6">
        <span className="text-sm font-bold text-[#ff40bf]">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed">{description}</p>
    </div>
  )
}

function QuoteCard({
  quote,
  author,
}: {
  quote: string
  author: string
}) {
  return (
    <div className="rounded-[20px] bg-white/[0.03] border border-white/[0.06] p-6">
      <p className="text-sm text-white/70 leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-xs text-white/30">&mdash; {author}</p>
    </div>
  )
}
