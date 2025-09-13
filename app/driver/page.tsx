"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Zap, ArrowLeft, DollarSign, Users, Navigation, Phone } from "lucide-react"
import Link from "next/link"

export default function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(false)
  const [hasActiveRide, setHasActiveRide] = useState(false)

  const goOnline = () => {
    setIsOnline(true)
    // Simulate getting a ride request after 3 seconds
    setTimeout(() => {
      setHasActiveRide(true)
    }, 3000)
  }

  const completeRide = () => {
    setHasActiveRide(false)
    setIsOnline(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">
                AnomaDrive<sup className="text-xs">™</sup>
              </span>
            </div>
          </div>
          <Badge variant="secondary">Driver Mode</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {!isOnline && !hasActiveRide && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back, Driver!</h1>
              <p className="text-muted-foreground">Ready to start earning with AnomaDrive?</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">$247.50</p>
                  <p className="text-sm text-muted-foreground">This week</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">23</p>
                  <p className="text-sm text-muted-foreground">Rides completed</p>
                </CardContent>
              </Card>
            </div>

            {/* Go Online Card */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  Ready to Drive?
                </CardTitle>
                <CardDescription>Go online to start receiving ride requests from passengers</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={goOnline} className="w-full text-lg py-6">
                  Go Online
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Rides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { passenger: "Sarah M.", time: "2 hours ago", fare: "$15.20", rating: 5 },
                  { passenger: "John D.", time: "5 hours ago", fare: "$8.50", rating: 5 },
                  { passenger: "Emma L.", time: "Yesterday", fare: "$22.30", rating: 4 },
                ].map((ride, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{ride.passenger}</p>
                      <p className="text-sm text-muted-foreground">{ride.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{ride.fare}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">{ride.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {isOnline && !hasActiveRide && (
          <div className="space-y-6">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Online
              </Badge>
              <h2 className="text-2xl font-bold text-foreground mb-2">Looking for Rides...</h2>
              <p className="text-muted-foreground">You're online and ready to receive requests</p>
            </div>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <p className="text-muted-foreground mb-4">Scanning for nearby ride requests...</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge variant="secondary">Available</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Today's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Hours online</span>
                  <span className="font-medium">2h 15m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rides completed</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Earnings</span>
                  <span className="font-medium text-primary">$45.70</span>
                </div>
              </CardContent>
            </Card>

            <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOnline(false)}>
              Go Offline
            </Button>
          </div>
        )}

        {hasActiveRide && (
          <div className="space-y-6">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Active Ride
              </Badge>
              <h2 className="text-2xl font-bold text-foreground mb-2">Ride in Progress</h2>
              <p className="text-muted-foreground">Taking passenger to destination</p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-secondary">SM</span>
                    </div>
                    <div>
                      <CardTitle>Sarah Martinez</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">4.8 passenger rating</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Downtown Plaza → Airport Terminal 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">8 minutes remaining</span>
                  </div>
                </div>

                <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Navigation map would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trip Earnings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base fare</span>
                  <span>$8.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Distance bonus</span>
                  <span>$3.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time bonus</span>
                  <span>$1.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AnomaDrive fee</span>
                  <span className="text-destructive">-$2.50</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Your earnings</span>
                  <span className="text-primary">$10.00</span>
                </div>
              </CardContent>
            </Card>

            <Button onClick={completeRide} className="w-full">
              Complete Ride
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
