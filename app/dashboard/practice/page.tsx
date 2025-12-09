"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PracticePage() {
  const [practiceLog, setPracticeLog] = useState([
    {
      date: "Today",
      instrument: "Drums",
      duration: 45,
      skill: "4/4 Beat",
      notes: "Great session! Improving consistency.",
    },
    {
      date: "Yesterday",
      instrument: "Drums",
      duration: 30,
      skill: "Hi-Hat Technique",
      notes: "Getting smoother transitions.",
    },
    { date: "2 days ago", instrument: "Guitar", duration: 25, skill: "Chord Changes", notes: "Working on speed." },
  ])

  const [selectedInstrument, setSelectedInstrument] = useState("Drums")
  const [duration, setDuration] = useState(30)
  const [skill, setSkill] = useState("")
  const [notes, setNotes] = useState("")

  const instruments = ["Drums", "Guitar", "Piano", "Vocals"]
  const skills = {
    Drums: ["4/4 Beat", "Hi-Hat Technique", "Kick Drum", "Dynamics", "Groove Feel"],
    Guitar: ["Chord Changes", "Strumming Patterns", "Finger Picking", "Barre Chords", "Transitions"],
    Piano: ["Scales", "Chord Progressions", "Hand Independence", "Sight Reading", "Improvisation"],
    Vocals: ["Breathing Techniques", "Pitch Control", "Vibrato", "Harmony", "Dynamics"],
  }

  const handleLogPractice = (e: React.FormEvent) => {
    e.preventDefault()
    if (!skill) return

    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })

    setPracticeLog([
      {
        date: today,
        instrument: selectedInstrument,
        duration,
        skill,
        notes,
      },
      ...practiceLog,
    ])

    setSkill("")
    setNotes("")
    setDuration(30)
  }

  const weeklyStats = [
    { instrument: "Drums", hours: 3.5, sessions: 5, target: 5 },
    { instrument: "Guitar", hours: 1.5, sessions: 2, target: 5 },
    { instrument: "Piano", hours: 0.5, sessions: 1, target: 3 },
  ]

  const thisWeekTotal = weeklyStats.reduce((sum, stat) => sum + stat.hours, 0)
  const weekTarget = weeklyStats.reduce((sum, stat) => sum + stat.target, 0)

  return (
    <div className="flex-1 p-6 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Practice Tracking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Log Practice Form */}
          <div className="lg:col-span-1">
            <Card className="border-border sticky top-20">
              <CardHeader>
                <CardTitle className="text-lg">Log Practice Session</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogPractice} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Instrument</label>
                    <div className="grid grid-cols-2 gap-2">
                      {instruments.map((inst) => (
                        <button
                          key={inst}
                          type="button"
                          onClick={() => setSelectedInstrument(inst)}
                          className={`p-2 rounded-lg transition-all text-sm font-medium ${
                            selectedInstrument === inst
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                        >
                          {inst}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Duration (minutes)</label>
                    <input
                      type="number"
                      min="5"
                      max="300"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    />
                    <div className="flex gap-2">
                      {[15, 30, 45, 60].map((min) => (
                        <button
                          key={min}
                          type="button"
                          onClick={() => setDuration(min)}
                          className="flex-1 px-2 py-1 text-xs rounded border border-border hover:border-primary transition-colors"
                        >
                          {min}m
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Skill Focus</label>
                    <select
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                      required
                    >
                      <option value="">Select a skill...</option>
                      {skills[selectedInstrument as keyof typeof skills].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Notes (optional)</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="How did the session go?"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Log Practice
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Log */}
          <div className="lg:col-span-2 space-y-8">
            {/* Weekly Summary */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">This Week</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {weeklyStats.map((stat) => (
                  <Card key={stat.instrument} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{stat.instrument}</h3>
                          <p className="text-sm text-muted-foreground">{stat.sessions} sessions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{stat.hours}h</div>
                          <p className="text-xs text-muted-foreground">of {stat.target}h goal</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${Math.min((stat.hours / stat.target) * 100, 100)}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border bg-accent/5">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-1">Total Practice This Week</p>
                    <div className="text-3xl font-bold text-primary">{thisWeekTotal}h</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {weekTarget - thisWeekTotal > 0
                        ? `${(weekTarget - thisWeekTotal).toFixed(1)}h left to reach your goal`
                        : "Goal exceeded! Great job!"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Practice Log */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Recent Practice Sessions</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {practiceLog.map((session, idx) => (
                  <Card key={idx} className="border-border hover:border-primary transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{session.instrument}</span>
                            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                              {session.skill}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{session.date}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{session.duration}m</div>
                          <p className="text-xs text-muted-foreground">practiced</p>
                        </div>
                      </div>
                      {session.notes && <p className="text-sm text-muted-foreground">{session.notes}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
