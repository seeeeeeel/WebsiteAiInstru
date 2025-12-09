import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PublicCommunityPage() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Church Member",
      message: "MusicAcademy transformed how I approach worship. Learning has never been this accessible!",
      instrument: "Drums",
    },
    {
      name: "John Wheeler",
      role: "Music Director",
      message: "Our whole worship team uses MusicAcademy. It's been a game-changer for our ministry.",
      instrument: "Piano",
    },
    {
      name: "Jessica Kim",
      role: "New Musician",
      message: "I had no musical background. Now I'm confidently playing in Sunday service!",
      instrument: "Guitar",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Community Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-pretty">Join Our Global Music Community</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of church musicians, share your journey, and grow together in faith and music.
            </p>
          </div>

          {/* Community Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "👥",
                title: "Practice Groups",
                description: "Join instrument-specific practice groups and collaborate with fellow musicians.",
              },
              {
                icon: "🙏",
                title: "Prayer Community",
                description: "Share prayer requests and support your church music ministry together.",
              },
              {
                icon: "📅",
                title: "Events & Performances",
                description: "Discover performances, workshops, and church events near you.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="pt-8 text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">What Musicians Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="border-border">
                  <CardContent className="pt-8">
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">"{testimonial.message}"</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary mt-2">{testimonial.instrument} Player</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">5,000+</div>
                <p className="text-muted-foreground mt-2">Active Musicians</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">80+</div>
                <p className="text-muted-foreground mt-2">Churches Worldwide</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">250k+</div>
                <p className="text-muted-foreground mt-2">Practice Hours Logged</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Connect?</h3>
            <p className="text-muted-foreground mb-8">
              Join our community and start your journey with musicians around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/signup">Join the Community</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard/community">View Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
