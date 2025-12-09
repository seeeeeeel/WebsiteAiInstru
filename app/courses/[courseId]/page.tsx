"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/lib/course-data"
import { useState } from "react"
import Link from "next/link"

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courses.find((c) => c.id === params.courseId)
  const [selectedLesson, setSelectedLesson] = useState(course?.modules[0]?.lessons[0])

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Course not found</h1>
            <Button asChild>
              <Link href="/courses">Back to Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Header */}
          <div className="mb-10">
            <Link href="/courses" className="text-primary hover:underline text-sm font-medium mb-4 inline-block">
              ← Back to Courses
            </Link>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">{course.level}</Badge>
                  <Badge variant="outline">{course.instrument}</Badge>
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <div className="text-muted-foreground">Instructor</div>
                    <div className="font-semibold text-foreground">{course.instructor}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Duration</div>
                    <div className="font-semibold text-foreground">{course.duration} minutes</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Students</div>
                    <div className="font-semibold text-foreground">{course.students}</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="md:self-start">
                Enroll Now
              </Button>
            </div>
          </div>

          {/* Course Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              {selectedLesson && (
                <div>
                  <div className="bg-black rounded-lg overflow-hidden mb-6 aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedLesson.videoUrl}
                      title={selectedLesson.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{selectedLesson.title}</h2>
                    <p className="text-muted-foreground mb-4">{selectedLesson.description}</p>
                    <div className="text-sm text-muted-foreground">Duration: {selectedLesson.duration} minutes</div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Modules and Lessons */}
            <div>
              <Card className="border-border sticky top-20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-4">Course Content</h3>
                  <div className="space-y-6 max-h-96 overflow-y-auto">
                    {course.modules.map((module) => (
                      <div key={module.id}>
                        <h4 className="font-semibold text-foreground text-sm mb-3">{module.title}</h4>
                        <div className="space-y-2">
                          {module.lessons.map((lesson) => (
                            <button
                              key={lesson.id}
                              onClick={() => setSelectedLesson(lesson)}
                              className={`w-full text-left p-3 rounded-lg transition-all text-sm ${
                                selectedLesson?.id === lesson.id
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-foreground hover:bg-muted/80"
                              }`}
                            >
                              <div className="font-medium">{lesson.title}</div>
                              <div className="text-xs opacity-75 mt-1">{lesson.duration} min</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
