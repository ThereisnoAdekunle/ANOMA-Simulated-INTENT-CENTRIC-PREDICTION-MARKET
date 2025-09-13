import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Zap, Shield, Globe, TrendingUp, BarChart3, Activity, Twitter } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                AnomaDrive<sup className="text-xs">™</sup>
              </h1>
              <p className="text-xs text-muted-foreground">powered by Anoma</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/user" className="text-foreground hover:text-primary transition-colors">
              For Users
            </Link>
            <Link href="/driver" className="text-foreground hover:text-primary transition-colors">
              For Drivers
            </Link>
            <Link
              href="https://x.com/web3godfather"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Twitter className="w-4 h-4" />
              @web3godfather
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Animated Infographics */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-accent rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge variant="secondary" className="mb-6 animate-bounce">
            🚀 Now in Simulation Mode
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            The Future of Intent-Based Transport
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Experience AnomaDrive™ - where your transportation intent meets intelligent routing, powered by Anoma's
            revolutionary blockchain technology.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary animate-pulse">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary animate-pulse delay-300">2.3s</div>
              <div className="text-xs text-muted-foreground">Avg Match</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent animate-pulse delay-700">50K+</div>
              <div className="text-xs text-muted-foreground">Simulated Rides</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
              asChild
            >
              <Link href="/user">Book a Ride</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-2 hover:bg-primary/5"
              asChild
            >
              <Link href="/driver">Become a Driver</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Revolutionary Transport Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <CardTitle>Intent-Based Matching</CardTitle>
                <CardDescription>
                  Express your transport needs naturally - our AI understands and matches you instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Activity className="w-3 h-3" />
                  <span>98.7% accuracy rate</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Blockchain Security</CardTitle>
                <CardDescription>
                  Every transaction secured by Anoma's advanced blockchain infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BarChart3 className="w-3 h-3" />
                  <span>256-bit encryption</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-accent animate-bounce" />
                </div>
                <CardTitle>Smart Routing</CardTitle>
                <CardDescription>
                  AI-powered route optimization that learns from real-time traffic and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3" />
                  <span>35% faster routes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Predictive Timing</CardTitle>
                <CardDescription>
                  Know exactly when your ride will arrive with our advanced prediction algorithms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Activity className="w-3 h-3" />
                  <span>±30s accuracy</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Community Driven</CardTitle>
                <CardDescription>
                  Built by and for the community with transparent governance and fair rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BarChart3 className="w-3 h-3" />
                  <span>10K+ active members</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-accent animate-spin" style={{ animationDuration: "10s" }} />
                </div>
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Seamless transport across cities and countries with unified intent protocol
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3" />
                  <span>50+ cities ready</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Platform Analytics</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2 animate-pulse">1.2M</div>
                <div className="text-sm text-muted-foreground">Simulated Rides</div>
              </CardContent>
            </Card>
            <Card className="text-center border-secondary/20 bg-secondary/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-secondary mb-2 animate-pulse delay-300">45K</div>
                <div className="text-sm text-muted-foreground">Active Drivers</div>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20 bg-accent/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2 animate-pulse delay-700">4.9★</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2 animate-pulse delay-1000">99.9%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Status */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Simulation Mode Active</CardTitle>
              <CardDescription className="text-lg">
                You're experiencing a demo version of AnomaDrive™. All rides, drivers, and transactions are simulated to
                showcase the platform's capabilities before full production launch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 shadow-lg" asChild>
                  <Link href="/user">Try User Experience</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 bg-transparent" asChild>
                  <Link href="/driver">Try Driver Experience</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-md flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">
              AnomaDrive<sup className="text-xs">™</sup>
            </span>
          </div>
          <p className="text-muted-foreground mb-2">powered by Anoma</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link
              href="https://x.com/web3godfather"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
            >
              <Twitter className="w-3 h-3" />
              Built by @web3godfather
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 AnomaDrive. All rights reserved. This is a simulation for demonstration purposes.
          </p>
        </div>
      </footer>
    </div>
  )
}
