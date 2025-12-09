import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            ♪
          </div>
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            MusicAcademy
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/courses" className="text-foreground hover:text-primary transition-colors">
            Courses
          </Link>
          <Link href="/community" className="text-foreground hover:text-primary transition-colors">
            Community
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
