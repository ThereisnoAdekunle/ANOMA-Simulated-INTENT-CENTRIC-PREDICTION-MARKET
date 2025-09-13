"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Zap, ArrowLeft, Navigation, CreditCard, Wallet, Plus, Check, Copy } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  const [currentStep, setCurrentStep] = useState<"intent" | "matching" | "matched" | "riding" | "payment">("intent")
  const [intent, setIntent] = useState("")
  const [showPaymentCard, setShowPaymentCard] = useState(false)
  const [paymentCardGenerated, setPaymentCardGenerated] = useState(false)

  const handleSubmitIntent = () => {
    if (intent.trim()) {
      setCurrentStep("matching")
      setTimeout(() => setCurrentStep("matched"), 2000)
    }
  }

  const startRide = () => {
    setCurrentStep("riding")
  }

  const generatePaymentCard = () => {
    setPaymentCardGenerated(true)
    setTimeout(() => {
      setShowPaymentCard(false)
      setCurrentStep("intent")
    }, 3000)
  }

  const showPayment = () => {
    setCurrentStep("payment")
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
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-md flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">
                AnomaDrive<sup className="text-xs">™</sup>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary">User Mode</Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowPaymentCard(true)}
              className="flex items-center gap-2"
            >
              <Wallet className="w-4 h-4" />
              CEX Card
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {showPaymentCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-primary" />
                  Generate CEX Payment Card
                </CardTitle>
                <CardDescription>Connect your CEX exchange for seamless payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!paymentCardGenerated ? (
                  <>
                    <div className="space-y-3">
                      <div className="p-4 border border-border rounded-lg bg-muted/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Binance</span>
                          <Badge variant="secondary">Connected</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">Balance: $2,847.32 USDT</div>
                      </div>

                      <div className="p-4 border border-dashed border-border rounded-lg text-center">
                        <Plus className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">Connect another exchange</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Card Details</div>
                      <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border">
                        <div className="text-xs text-muted-foreground mb-1">Virtual Card Number</div>
                        <div className="font-mono text-sm">**** **** **** 8472</div>
                      </div>
                    </div>

                    <Button onClick={generatePaymentCard} className="w-full">
                      Generate Payment Card
                    </Button>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Card Generated Successfully!</div>
                      <div className="text-sm text-muted-foreground">
                        Your CEX payment card is now linked to your Binance account
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-mono text-sm">5472 **** **** 8472</div>
                          <div className="text-xs text-muted-foreground">Expires 12/29</div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  onClick={() => {
                    setShowPaymentCard(false)
                    setPaymentCardGenerated(false)
                  }}
                  className="w-full"
                >
                  Close
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === "intent" && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">Where would you like to go?</h1>
              <p className="text-muted-foreground">Describe your transport needs in natural language</p>
            </div>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary animate-pulse" />
                  Express Your Intent
                </CardTitle>
                <CardDescription>Tell us where you want to go, when, and any preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="e.g., 'I need to get to the airport by 3 PM, prefer a quiet ride'"
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  className="text-lg py-6 border-2 focus:border-primary/50"
                />
                <Button
                  onClick={handleSubmitIntent}
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                  disabled={!intent.trim()}
                >
                  Find My Ride
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <h3 className="font-semibold text-foreground">Quick Intents</h3>
              <div className="grid gap-2">
                {[
                  "Take me home, I'm at downtown",
                  "Airport pickup in 30 minutes",
                  "Grocery store, need space for bags",
                  "Hospital visit, need comfort ride",
                ].map((quickIntent) => (
                  <Button
                    key={quickIntent}
                    variant="outline"
                    className="justify-start text-left h-auto py-3 bg-transparent hover:bg-primary/5 border-2 hover:border-primary/30 transition-all"
                    onClick={() => {
                      setIntent(quickIntent)
                      setTimeout(handleSubmitIntent, 100)
                    }}
                  >
                    {quickIntent}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CreditCard className="w-5 h-5 text-accent" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">B</span>
                    </div>
                    <div>
                      <div className="font-medium">Binance CEX Card</div>
                      <div className="text-sm text-muted-foreground">**** 8472</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === "matching" && (
          <div className="space-y-6 text-center">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary animate-spin" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Processing Your Intent</h2>
              <p className="text-muted-foreground">Our AI is analyzing your request and finding the perfect match...</p>
            </div>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm">Understanding your intent: "{intent}"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
                    <span className="text-sm">Analyzing optimal routes and timing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-700"></div>
                    <span className="text-sm">Matching with available drivers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-1000"></div>
                    <span className="text-sm">Preparing payment via CEX card</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === "matched" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Perfect Match Found!</h2>
              <p className="text-muted-foreground">Your driver is on the way</p>
            </div>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                      <span className="font-bold text-primary">AK</span>
                    </div>
                    <div>
                      <CardTitle>Alex Kumar</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">4.9 • 1,247 rides</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="animate-bounce">
                    2 min away
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Toyota Camry • Blue • ABC-123</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Estimated arrival: 2:45 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Estimated fare: $12.50 (CEX Card)</span>
                  </div>
                </div>

                <Button onClick={startRide} className="w-full bg-gradient-to-r from-primary to-primary/80 shadow-lg">
                  Confirm Ride
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === "riding" && (
          <div className="space-y-6">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 animate-pulse">
                Ride in Progress
              </Badge>
              <h2 className="text-2xl font-bold text-foreground mb-2">Enjoy Your Ride!</h2>
              <p className="text-muted-foreground">Alex is taking you to your destination</p>
            </div>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse"></div>
                    <div className="text-center relative z-10">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2 animate-bounce" />
                      <p className="text-sm text-muted-foreground">Live tracking map would appear here</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary animate-pulse">8 min</p>
                      <p className="text-sm text-muted-foreground">ETA</p>
                    </div>
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <p className="text-2xl font-bold text-secondary animate-pulse">2.3 mi</p>
                      <p className="text-sm text-muted-foreground">Distance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-accent" />
                  Trip Details & Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base fare</span>
                  <span>$8.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Distance</span>
                  <span>$3.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span>$1.00</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$12.50</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Wallet className="w-4 h-4" />
                  <span>Paying with Binance CEX Card (**** 8472)</span>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              className="w-full bg-transparent border-2"
              onClick={() => setCurrentStep("intent")}
            >
              End Simulation
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
