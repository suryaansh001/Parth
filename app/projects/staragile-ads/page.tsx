"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Users,
  Award,
  Clock,
  Target,
  BookOpen,
  Shield,
  TrendingUp,
  Zap,
  Star,
  Calendar,
  MapPin,
  Building2,
  ArrowLeft,
  BarChart3,
  Activity,
  Gauge,
  GraduationCap,
  Presentation,
  CheckCircle,
  TrendingDown,
  Mail,
  Globe,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function StarAgileAdsProject() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projectData = {
    title: "Performance Ad Optimization",
    client: "StarAgile",
    category: "Content & Branding",
    status: "Completed",
    description: "Managed Clevertap + performance ad campaigns across Meta, Google & LinkedIn. Email open rates jumped from 0.12% to 3.56% via targeted segmentation.",
    tags: ["Meta Ads", "Google Ads", "Email Campaigns", "A/B Testing"],
    keyMetrics: [
      { label: "Email Open Rate Increase", value: "2,867%", icon: Mail },
      { label: "Revenue Generated", value: "$500K+", icon: TrendingUp },
      { label: "Users Reached", value: "18K+", icon: Users },
      { label: "Campaign Platforms", value: "3", icon: Globe },
    ],
    challenges: [
      "Low email engagement rates (0.12%)",
      "Ineffective audience targeting",
      "Poor campaign performance across platforms",
      "Limited segmentation strategy",
    ],
    solutions: [
      "Implemented advanced email segmentation using Clevertap",
      "Developed targeted ad campaigns for Meta, Google & LinkedIn",
      "Created A/B testing framework for optimization",
      "Built comprehensive performance tracking system",
    ],
    results: [
      "Email open rates increased from 0.12% to 3.56%",
      "Generated over $500K in revenue",
      "Reached 18K+ targeted users",
      "Improved campaign ROI by 300%",
    ],
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link href="/projects">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary" className="gap-2">
                <Building2 className="w-4 h-4" />
                {projectData.client}
              </Badge>
              <Badge variant="outline" className="gap-2">
                <CheckCircle className="w-4 h-4" />
                {projectData.status}
              </Badge>
              <Badge variant="outline">{projectData.category}</Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              {projectData.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
              {projectData.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {projectData.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectData.keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center bg-background/50 border-border">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full bg-background/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-500" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {projectData.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full bg-background/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {projectData.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="h-full bg-background/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {projectData.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
