import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function DashboardPage() {
  const enrolledCourses = [
    {
      id: 1,
      title: "Drums for Beginners",
      progress: 45,
      lastAccessed: "2 days ago",
      nextLesson: "Adding the Hi-Hat",
    },
    {
      id: 2,
      title: "Worship Guitar Essentials",
      progress: 20,
      lastAccessed: "1 week ago",
      nextLesson: "Open Chord Shapes",
    },
  ]

  const achievements = [
    { icon: "🎓", title: "First Course", description: "Completed your first course" },
    { icon: "🔥", title: "7-Day Streak", description: "Practiced for 7 consecutive days" },
    { icon: "🏆", title: "Course Champion", description: "Score 90% or higher on a course" },
  ]

  const stats = [
    { label: "Total Learning Hours", value: "24h 30m" },
    { label: "Courses Enrolled", value: "2" },
    { label: "Practice Streak", value: "12 days" },
    { label: "Skills Learned", value: "8" },
  ]

  return (
    <div className="flex-1 p-6 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Welcome back, Maria</h1>
          <p className="text-muted-foreground">Continue your musical journey and keep making progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="border-border">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enrolled Courses */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">My Courses</h2>
            <Button variant="outline" asChild>
              <Link href="/dashboard/courses">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="border-border hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">Last accessed {course.lastAccessed}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                      <span className="text-sm text-primary font-semibold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Next lesson:</p>
                    <p className="font-medium text-foreground">{course.nextLesson}</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/courses/${course.id}`}>Continue Learning</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <Card key={idx} className="border-border text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
