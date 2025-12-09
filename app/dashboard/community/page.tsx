"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CommunityPage() {
  const [practiceGroups, setPracticeGroups] = useState([
    {
      id: 1,
      name: "Sunday Drums Practice",
      instrument: "Drums",
      members: 8,
      nextSession: "Tomorrow at 2:00 PM",
      description: "Weekly practice session for worship drumming",
      isJoined: true,
    },
    {
      id: 2,
      name: "Worship Band Rehearsal",
      instrument: "Mixed",
      members: 12,
      nextSession: "Friday at 6:00 PM",
      description: "Full band rehearsal for Sunday service",
      isJoined: false,
    },
    {
      id: 3,
      name: "Guitar Circle",
      instrument: "Guitar",
      members: 6,
      nextSession: "Saturday at 10:00 AM",
      description: "Casual guitar sharing and learning circle",
      isJoined: true,
    },
    {
      id: 4,
      name: "Piano Improvisors",
      instrument: "Piano",
      members: 5,
      nextSession: "Wednesday at 7:00 PM",
      description: "Explore improvisation and songwriting",
      isJoined: false,
    },
  ])

  const [prayerRequests, setPrayerRequests] = useState([
    {
      id: 1,
      author: "James P.",
      title: "Music Ministry Blessing",
      content: "Praying for our worship team to minister with hearts full of joy and focus.",
      timestamp: "2 hours ago",
      likes: 3,
    },
    {
      id: 2,
      author: "Lisa M.",
      title: "New Musicians Joining",
      content: "Grateful for three new musicians joining our music ministry! Praying for their growth.",
      timestamp: "5 hours ago",
      likes: 5,
    },
    {
      id: 3,
      author: "David K.",
      title: "Sunday Service Preparation",
      content: "Please pray for smooth coordination and focus during Sunday's service.",
      timestamp: "1 day ago",
      likes: 2,
    },
  ])

  const handleJoinGroup = (id: number) => {
    setPracticeGroups(
      practiceGroups.map((group) => (group.id === id ? { ...group, isJoined: !group.isJoined } : group)),
    )
  }

  const communityStats = [
    { label: "Active Members", value: "342" },
    { label: "Practice Groups", value: "24" },
    { label: "Events This Month", value: "16" },
  ]

  return (
    <div className="flex-1 p-6 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Community</h1>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {communityStats.map((stat, idx) => (
            <Card key={idx} className="border-border">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Practice Groups */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Practice Groups</h2>
              <div className="space-y-4">
                {practiceGroups.map((group) => (
                  <Card key={group.id} className="border-border hover:border-primary transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{group.name}</h3>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">
                              {group.instrument}
                            </span>
                            <span className="text-sm text-muted-foreground">{group.members} members</span>
                          </div>
                        </div>
                        <Button
                          variant={group.isJoined ? "default" : "outline"}
                          onClick={() => handleJoinGroup(group.id)}
                        >
                          {group.isJoined ? "Joined" : "Join Group"}
                        </Button>
                      </div>
                      <p className="text-sm text-foreground mb-3">{group.description}</p>
                      <p className="text-sm text-primary font-medium">
                        Next session: <span className="font-bold">{group.nextSession}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Prayer Requests Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border sticky top-20">
              <CardHeader>
                <CardTitle className="text-lg">Prayer Requests</CardTitle>
                <p className="text-xs text-muted-foreground mt-2">Share prayers for our music ministry</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {prayerRequests.map((request) => (
                    <div key={request.id} className="pb-4 border-b border-border last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">{request.title}</h4>
                          <p className="text-xs text-muted-foreground">{request.author}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{request.timestamp}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{request.content}</p>
                      <button className="text-xs text-primary hover:underline">❤ {request.likes}</button>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  Share Prayer Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Church Directory Section */}
        <div className="mt-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Church Musicians Directory</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">Connect with musicians in your church community</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Marcus Johnson", instrument: "Drums", role: "Worship Leader" },
                  { name: "Sarah Mitchell", instrument: "Guitar", role: "Musician" },
                  { name: "David Chen", instrument: "Piano", role: "Organist" },
                  { name: "Emma Lopez", instrument: "Vocals", role: "Choir Director" },
                ].map((musician, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-border hover:border-primary transition-all text-center"
                  >
                    <div className="text-4xl mb-3">♪</div>
                    <h3 className="font-semibold text-foreground text-sm">{musician.name}</h3>
                    <p className="text-xs text-muted-foreground">{musician.instrument}</p>
                    <p className="text-xs text-primary mt-1">{musician.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
