import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const instruments = [
    { icon: "🥁", name: "Drums", courses: 24 },
    { icon: "🎸", name: "Guitar", courses: 18 },
    { icon: "🎹", name: "Piano", courses: 16 },
    { icon: "🎤", name: "Vocals", courses: 12 },
  ]

  const features = [
    {
      title: "Beginner-Friendly",
      description: "Start from the basics and progress at your own pace, with video tutorials and practice guides.",
    },
    {
      title: "Community-Focused",
      description: "Connect with fellow musicians, join practice groups, and share your progress with church members.",
    },
    {
      title: "Worship-Ready",
      description: "Learn worship songs, understand chord progressions, and prepare for Sunday service performances.",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your skill advancement with our intuitive progress system and achievement milestones.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-pretty">Learn Music, Build Community</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the joy of making music with our church-focused education platform. From beginner drumbeats to
              worship arrangements, grow your musical skills with the support of a caring community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Start Learning Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Learn Your Favorite Instrument
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Choose from our comprehensive selection of music courses designed for all skill levels.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instruments.map((instrument) => (
              <Link
                key={instrument.name}
                href={`/courses?instrument=${instrument.name.toLowerCase()}`}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all">
                  <div className="text-5xl mb-4">{instrument.icon}</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{instrument.name}</h3>
                  <p className="text-sm text-muted-foreground">{instrument.courses} courses</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Why Choose MusicAcademy?</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We've built the perfect platform for church musicians and worship leaders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Musical Journey?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of church musicians learning together. No experience necessary—just bring your passion for
            music.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
