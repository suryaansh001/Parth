"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Shield,
  BarChart3,
  Clock,
  Star,
  CheckCircle,
  Building,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
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
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Area,
  AreaChart,
  ScatterChart,
  Scatter,
  ReferenceLine,
} from 'recharts'

export default function SmithsDetectionPage() {
  const [chartData, setChartData] = useState({
    trainingTime: 0,
    satisfaction: 0,
    programs: 0,
    assets: 0,
  })

  useEffect(() => {
    // Animate chart values
    const timer = setTimeout(() => {
      setChartData({
        trainingTime: 28,
        satisfaction: 8.2,
        programs: 12,
        assets: 30,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Enhanced data for different chart types
  const trainingProgressData = [
    { week: 'Week 1', completion: 15, engagement: 7.2, difficulty: 6.8 },
    { week: 'Week 2', completion: 32, engagement: 7.8, difficulty: 7.1 },
    { week: 'Week 3', completion: 55, engagement: 8.1, difficulty: 7.5 },
    { week: 'Week 4', completion: 72, engagement: 8.3, difficulty: 7.8 },
    { week: 'Week 5', completion: 88, engagement: 8.5, difficulty: 8.0 },
    { week: 'Week 6', completion: 92, engagement: 8.2, difficulty: 8.2 },
  ]

  const programDistributionData = [
    { name: 'Technical Training', value: 40, color: '#10B981' },
    { name: 'Safety Protocols', value: 25, color: '#3B82F6' },
    { name: 'System Operations', value: 20, color: '#8B5CF6' },
    { name: 'Maintenance', value: 10, color: '#F59E0B' },
    { name: 'Troubleshooting', value: 5, color: '#EF4444' },
  ]

  const learnerSatisfactionData = [
    { category: 'Content Quality', score: 8.9, target: 8.0 },
    { category: 'Instructor Expertise', score: 9.1, target: 8.5 },
    { category: 'Material Clarity', score: 8.3, target: 8.0 },
    { category: 'Practical Relevance', score: 8.7, target: 8.2 },
    { category: 'Overall Experience', score: 8.2, target: 8.0 },
  ]

  const timeReductionAnalysis = [
    { module: 'Basic Operations', before: 45, after: 32, reduction: 29 },
    { module: 'Advanced Features', before: 60, after: 38, reduction: 37 },
    { module: 'Troubleshooting', before: 35, after: 28, reduction: 20 },
    { module: 'Maintenance', before: 40, after: 26, reduction: 35 },
    { module: 'Safety Protocols', before: 25, after: 20, reduction: 20 },
  ]

  const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444']

  const achievements = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Training Programs Developed",
      value: "12+",
      description: "Technical training programs for mission-critical defense equipment",
      color: "text-emerald-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Training Time Reduction",
      value: "28%",
      description: "Reduced through modular, simplified content design",
      color: "text-blue-500",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Learner Satisfaction",
      value: "8.2/10",
      description: "Average rating via iterative feedback loops",
      color: "text-yellow-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Training Assets Standardized",
      value: "30+",
      description: "For structural consistency and scalability",
      color: "text-purple-500",
    },
  ]

  const keyResponsibilities = [
    "Developed 12+ technical training programs for mission-critical defense equipment used globally",
    "Collaborated with SMEs, engineers & service teams to build user-centric learning journeys",
    "Reduced technical staff training time by 28% through modular, simplified content",
    "Achieved an average learner satisfaction rating of 8.2/10 via iterative feedback loops",
    "Standardized 30+ training assets for structural consistency and scalability",
  ]

  const technologies = [
    "Instructional Design",
    "Technical Writing",
    "User Research",
    "Training Analytics",
    "Content Architecture",
    "SME Collaboration",
    "Defense Systems",
    "Learning Management",
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Smiths Detection</h1>
                <p className="text-xl text-muted-foreground">Instructional Designer – Product Training</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Sep 2024 – Jun 2025</span>
              </div>
             
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>Security Systems </span>
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
                  Smiths Detection needed comprehensive technical training programs for their mission-critical 
                  defense equipment used by global government agencies. The challenge was to create user-centric 
                  learning journeys that could effectively train technical staff on complex defense systems while 
                  reducing training time and ensuring high learner satisfaction. The training materials needed 
                  to be standardized, scalable, and suitable for global deployment across different agencies 
                  and technical skill levels.
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

          {/* Advanced Training Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Training Analytics & Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Training Progress Line Chart */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Training Progress & Engagement</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={trainingProgressData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="week" stroke="#9CA3AF" />
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
                          <Bar dataKey="completion" fill="#10B981" name="Completion %" />
                          <Line 
                            type="monotone" 
                            dataKey="engagement" 
                            stroke="#3B82F6" 
                            strokeWidth={3}
                            name="Engagement Score"
                            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="difficulty" 
                            stroke="#F59E0B" 
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Difficulty Level"
                            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Program Distribution Pie Chart */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Training Program Distribution</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={programDistributionData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={100}
                            paddingAngle={3}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {programDistributionData.map((entry, index) => (
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
                            formatter={(value) => [`${value}%`, 'Training Hours']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Learner Satisfaction Radar-style Bar Chart */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Learner Satisfaction by Category</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={learnerSatisfactionData} layout="horizontal">
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis type="number" domain={[0, 10]} stroke="#9CA3AF" />
                          <YAxis dataKey="category" type="category" stroke="#9CA3AF" width={80} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1F2937', 
                              border: '1px solid #374151',
                              borderRadius: '8px',
                              color: '#F9FAFB'
                            }} 
                          />
                          <ReferenceLine x={8} stroke="#F59E0B" strokeDasharray="3 3" />
                          <Bar dataKey="score" fill="#8B5CF6" />
                          <Bar dataKey="target" fill="#6B7280" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Time Reduction Analysis */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Training Time Reduction Analysis</h4>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={timeReductionAnalysis}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="module" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1F2937', 
                              border: '1px solid #374151',
                              borderRadius: '8px',
                              color: '#F9FAFB'
                            }} 
                            formatter={(value, name) => [
                              `${value} ${name === 'reduction' ? '%' : 'hours'}`,
                              name === 'before' ? 'Before' : name === 'after' ? 'After' : 'Reduction %'
                            ]}
                          />
                          <Legend />
                          <Bar dataKey="before" fill="#EF4444" name="Before (hours)" />
                          <Bar dataKey="after" fill="#10B981" name="After (hours)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Overall Training Impact Summary */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">28%</div>
                      <div className="text-sm text-muted-foreground">Average Time Reduction</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "72%" }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">8.2/10</div>
                      <div className="text-sm text-muted-foreground">Satisfaction Score</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-500 to-green-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "82%" }}
                          transition={{ duration: 2, delay: 1.2 }}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
                      <div className="text-sm text-muted-foreground">Completion Rate</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                          transition={{ duration: 2, delay: 1.4 }}
                        />
                      </div>
                    </div>
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
                      <strong>Efficiency Improvement:</strong> Reduced training time by 28% while maintaining quality
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-500" />
                    <span className="text-lg text-white">
                      <strong>Global Reach:</strong> Training programs deployed across multiple government agencies worldwide
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <span className="text-lg text-white">
                      <strong>Quality Excellence:</strong> Achieved 8.2/10 learner satisfaction through iterative improvement
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-purple-500" />
                    <span className="text-lg text-white">
                      <strong>Scalability:</strong> Standardized 30+ assets for consistent global deployment
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
