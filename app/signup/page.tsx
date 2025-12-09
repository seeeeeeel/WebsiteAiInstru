import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"

export default function SignupPage() {
  const roles = [
    { value: "student", label: "Student", description: "Learn and grow as a musician" },
    { value: "instructor", label: "Instructor", description: "Create and share lessons" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 py-12 md:py-24 bg-background">
        <div className="max-w-md mx-auto px-4">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Join MusicAcademy and start your musical journey with our community.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="w-full" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="signup-email" type="email" placeholder="your@email.com" className="w-full" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-password" className="text-sm font-medium text-foreground">
                    Password
                  </label>
                  <Input id="signup-password" type="password" placeholder="••••••••" className="w-full" required />
                  <p className="text-xs text-muted-foreground">At least 8 characters recommended</p>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">I'm signing up as a:</label>
                  <RadioGroup defaultValue="student">
                    {roles.map((role) => (
                      <div key={role.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={role.value} id={role.value} />
                        <label htmlFor={role.value} className="flex-1 cursor-pointer">
                          <div className="font-medium text-foreground">{role.label}</div>
                          <div className="text-xs text-muted-foreground">{role.description}</div>
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 mt-1" required />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link href="#" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link href="/login" className="text-primary font-semibold hover:underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
