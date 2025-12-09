"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { courses } from "@/lib/course-data"

export default function CoursesPage() {
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null)

  const instruments = Array.from(new Set(courses.map((c) => c.instrument)))
  const filteredCourses = selectedInstrument ? courses.filter((c) => c.instrument === selectedInstrument) : courses

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Explore Courses</h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect course to develop your musical skills and grow with our community.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-foreground mb-4">Filter by Instrument</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedInstrument === null ? "default" : "outline"}
                onClick={() => setSelectedInstrument(null)}
              >
                All Instruments
              </Button>
              {instruments.map((instrument) => (
                <Button
                  key={instrument}
                  variant={selectedInstrument === instrument ? "default" : "outline"}
                  onClick={() => setSelectedInstrument(instrument)}
                >
                  {instrument}
                </Button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="border-border hover:border-primary transition-all h-full overflow-hidden group">
                  <div className="relative overflow-hidden bg-muted h-48">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{course.level}</Badge>
                  </div>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{course.instructor}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{course.modules.length} modules</span>
                      <span className="text-muted-foreground">{course.students} students</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
