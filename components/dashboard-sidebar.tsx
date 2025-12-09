"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: "📊" },
    { href: "/dashboard/courses", label: "My Courses", icon: "📚" },
    { href: "/dashboard/practice", label: "Practice Tracking", icon: "🎵" },
    { href: "/dashboard/community", label: "Community", icon: "👥" },
    { href: "/dashboard/profile", label: "Profile", icon: "👤" },
  ]

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-20 left-4 z-40 p-2 bg-primary text-primary-foreground rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:sticky top-16 left-0 h-screen md:h-auto w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 z-30`}
      >
        <nav className="p-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/20"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}

          <div className="pt-6 border-t border-sidebar-border mt-6">
            <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
              <Link href="/logout">Sign Out</Link>
            </Button>
          </div>
        </nav>
      </aside>
    </>
  )
}
