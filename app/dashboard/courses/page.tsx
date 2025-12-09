import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function CoursesPage() {
  const enrolledCourses = [
    {
      id: "drums-beginners",
      title: "Drums for Beginners",
      instructor: "Marcus Johnson",
      progress: 45,
      completedLessons: 9,
      totalLessons: 20,
      status: "In Progress",
    },
    {
      id: "guitar-worship",
      title: "Worship Guitar Essentials",
      instructor: "Sarah Mitchell",
      progress: 20,
      completedLessons: 4,
      totalLessons: 20,
      status: "In Progress",
    },
  ]

  const completedCourses = [
    {
      id: "piano-basics",
      title: "Piano Basics for Beginners",
      instructor: "David Chen",
      completedDate: "November 15, 2024",
    },
  ]

  return (
    <div className="flex-1 p-6 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">My Courses</h1>

        {/* In Progress */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">In Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="border-border hover:border-primary transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor}</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                      <span className="text-sm text-primary font-semibold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      {course.completedLessons} of {course.totalLessons} lessons completed
                    </p>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={`/courses/${course.id}`}>Continue Course</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-6">Completed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCourses.map((course) => (
              <Card key={course.id} className="border-border bg-accent/5">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      <p className="text-sm text-primary font-medium mt-2">Completed on {course.completedDate}</p>
                    </div>
                    <span className="text-2xl">✓</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Explore More */}
        <div className="mt-12 p-8 bg-primary/10 rounded-xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Ready to explore more?</h3>
          <p className="text-muted-foreground mb-4">Discover new courses and expand your musical skills</p>
          <Button asChild>
            <Link href="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
