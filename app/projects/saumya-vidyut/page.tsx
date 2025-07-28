"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Zap,
  Target,
  TrendingUp,
  Award,
  Package,
  Settings,
  BarChart3,
  Clock,
  Star,
  CheckCircle,
  Building,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  ComposedChart,
  Area,
  AreaChart,
} from 'recharts'

export default function SaumyaVidyutPage() {
  const [chartData, setChartData] = useState({
    efficiency: 0,
    processOptimization: 0,
    stakeholderAlignment: 0,
    toolDevelopment: 0,
  })

  useEffect(() => {
    // Animate chart values
    const timer = setTimeout(() => {
      setChartData({
        efficiency: 18,
        processOptimization: 100,
        stakeholderAlignment: 95,
        toolDevelopment: 1,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Data for different chart types
  const efficiencyTrendData = [
    { month: 'Jan', before: 67, after: 78, target: 85 },
    { month: 'Feb', before: 68, after: 81, target: 85 },
    { month: 'Mar', before: 70, after: 83, target: 85 },
    { month: 'Apr', before: 72, after: 85, target: 85 },
    { month: 'May', before: 71, after: 84, target: 85 },
    { month: 'Jun', before: 73, after: 86, target: 85 },
  ]

  const processDistributionData = [
    { name: 'Documentation', value: 25, color: '#10B981' },
    { name: 'Training', value: 20, color: '#3B82F6' },
    { name: 'Optimization', value: 30, color: '#8B5CF6' },
    { name: 'Tool Development', value: 15, color: '#F59E0B' },
    { name: 'Stakeholder Management', value: 10, color: '#EF4444' },
  ]

  const performanceMetrics = [
    { metric: 'Efficiency', current: 86, previous: 68, improvement: 18 },
    { metric: 'Process Speed', current: 92, previous: 75, improvement: 17 },
    { metric: 'Quality Score', current: 95, previous: 82, improvement: 13 },
    { metric: 'Stakeholder Satisfaction', current: 95, previous: 73, improvement: 22 },
  ]

  const toolUsageData = [
    { feature: 'Tender Management', usage: 95, satisfaction: 9.2 },
    { feature: 'Competitor Tracking', usage: 88, satisfaction: 8.8 },
    { feature: 'Product Fit Analysis', usage: 92, satisfaction: 9.1 },
    { feature: 'Billing Integration', usage: 87, satisfaction: 8.5 },
    { feature: 'Report Generation', usage: 91, satisfaction: 8.9 },
  ]

  const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444']

  const achievements = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency Improvement",
      value: "18%",
      description: "Transformer efficiency through process optimization",
      color: "text-emerald-500",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Internal Tool Development",
      value: "1",
      description: "Comprehensive tender and billing management platform",
      color: "text-blue-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Stakeholder Alignment",
      value: "95%",
      description: "Success rate in aligning product goals with stakeholders",
      color: "text-yellow-500",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Process Optimization",
      value: "100%",
      description: "Complete workflow redesign and documentation",
      color: "text-purple-500",
    },
  ]

  const keyResponsibilities = [
    "Improved transformer efficiency by 18% through process and feedback optimization",
    "Co-developed an internal tool for managing tenders and billing with features like competitor tracking and product fit suggestions",
    "Created comprehensive training manuals and structured documentation",
    "Led user-focused product documentation strategies aligned with stakeholder goals",
    "Implemented data-driven approaches to identify bottlenecks and optimization opportunities",
    "Collaborated with engineering teams to translate technical requirements into user-friendly solutions",
  ]

  const technologies = [
    "Product Management",
    "Process Optimization",
    "Stakeholder Management",
    "Data Analysis",
    "Technical Documentation",
    "Workflow Design",
    "User Research",
    "Product Strategy",
    "Competitive Analysis",
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Saumya Vidyut</h1>
                <p className="text-xl text-muted-foreground">Associate Product Manager</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Nov 2023 – Aug 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Energy & Power Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>Transformer Technology</span>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Problem Solved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Saumya Vidyut faced challenges with transformer efficiency and operational workflows that were 
                  impacting productivity and competitiveness. The company needed systematic process optimization 
                  to improve transformer performance, streamline tender management, and enhance billing operations. 
                  Additionally, there was a need for better product documentation strategies and internal tools 
                  to manage complex business processes including competitor tracking and product fit analysis. 
                  The solution required both technical optimization and strategic product management approaches.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-border bg-background/50 hover:bg-background/70 transition-all">
                <CardContent className="p-6">
                  <div className={`${achievement.color} mb-4`}>
                    {achievement.icon}
                  </div>
                  <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    >
                      {achievement.value}
                    </motion.span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Dynamic Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Performance Metrics & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Transformer Efficiency Trend Line Chart */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Transformer Efficiency Trend</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={efficiencyTrendData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="month" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1F2937', 
                              border: '1px solid #374151',
                              borderRadius: '8px',
                              color: '#F9FAFB'
                            }} 
                          />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="before" 
                            stroke="#EF4444" 
                            strokeWidth={3}
                            name="Before Optimization"
                            dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="after" 
                            stroke="#10B981" 
                            strokeWidth={3}
                            name="After Optimization"
                            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="target" 
                            stroke="#F59E0B" 
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Target"
                            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Process Distribution Pie Chart */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Process Time Distribution</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={processDistributionData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {processDistributionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1F2937', 
                              border: '1px solid #374151',
                              borderRadius: '8px',
                              color: '#F9FAFB'
                            }} 
                            formatter={(value) => [`${value}%`, 'Time Allocation']}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Performance Improvement Bar Chart */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Performance Improvements</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="metric" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1F2937', 
                              border: '1px solid #374151',
                              borderRadius: '8px',
                              color: '#F9FAFB'
                            }} 
                          />
                          <Legend />
                          <Bar dataKey="previous" fill="#6B7280" name="Before" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="current" fill="#10B981" name="After" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Tool Usage Analytics - Radial Bar Chart */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Internal Tool Usage Analytics</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={toolUsageData}>
                          <RadialBar
                            dataKey="usage"
                            fill="#8B5CF6"
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1F2937', 
                              border: '1px solid #374151',
                              borderRadius: '8px',
                              color: '#F9FAFB'
                            }} 
                            formatter={(value, name) => [
                              name === 'usage' ? `${value}%` : value,
                              name === 'usage' ? 'Usage Rate' : 'Satisfaction Score'
                            ]}
                          />
                          <Legend iconSize={10} />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Efficiency Progress Indicator */}
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-green-600/10 rounded-xl border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Overall Efficiency Improvement</h4>
                    <div className="text-3xl font-bold text-emerald-400">+18%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-green-400 h-4 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "72%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Baseline: 68%</span>
                    <span>Current: 86%</span>
                    <span>Target: 90%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyResponsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{responsibility}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technologies & Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    >
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Project Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-emerald-500" />
                    <span className="text-lg text-white">
                      <strong>Performance Enhancement:</strong> 18% improvement in transformer efficiency through systematic optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-blue-500" />
                    <span className="text-lg text-white">
                      <strong>Tool Development:</strong> Built internal platform for tender management with competitive intelligence
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-yellow-500" />
                    <span className="text-lg text-white">
                      <strong>Strategic Alignment:</strong> 95% stakeholder satisfaction through goal-oriented documentation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-purple-500" />
                    <span className="text-lg text-white">
                      <strong>Process Innovation:</strong> Complete workflow redesign with data-driven insights
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
