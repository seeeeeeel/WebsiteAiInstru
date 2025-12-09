import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Header } from "@/components/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 md:ml-0">{children}</main>
      </div>
    </div>
  )
}
