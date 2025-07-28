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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
} from 'recharts'

export default function StarAgileProject() {
  const [activeChart, setActiveChart] = useState(0)

  // Enhanced data for dynamic charts
  const programGrowthData = [
    { month: 'May', programs: 8, participants: 120, satisfaction: 4.6 },
    { month: 'Jun', programs: 12, participants: 180, satisfaction: 4.7 },
    { month: 'Jul', programs: 18, participants: 280, satisfaction: 4.8 },
    { month: 'Aug', programs: 25, participants: 350, satisfaction: 4.9 },
    { month: 'Sep', programs: 32, participants: 420, satisfaction: 4.8 },
  ]

  const certificationDistribution = [
    { name: 'PMP Certification', value: 35, color: '#10B981' },
    { name: 'CSM (Scrum Master)', value: 25, color: '#3B82F6' },
    { name: 'CSPO (Product Owner)', value: 20, color: '#8B5CF6' },
    { name: 'DevOps Foundation', value: 15, color: '#F59E0B' },
    { name: 'Agile Leadership', value: 5, color: '#EF4444' },
  ]

  const learningOutcomes = [
    { skill: 'Agile Methodologies', pre: 6.2, post: 8.7, improvement: 2.5 },
    { skill: 'DevOps Practices', pre: 5.8, post: 8.4, improvement: 2.6 },
    { skill: 'Leadership Skills', pre: 6.8, post: 8.9, improvement: 2.1 },
    { skill: 'Project Management', pre: 7.1, post: 9.2, improvement: 2.1 },
    { skill: 'Team Collaboration', pre: 6.5, post: 8.8, improvement: 2.3 },
  ]

  const completionTrends = [
    { week: 'Week 1', completion: 85, dropout: 15, engagement: 8.2 },
    { week: 'Week 2', completion: 88, dropout: 12, engagement: 8.4 },
    { week: 'Week 3', completion: 90, dropout: 10, engagement: 8.6 },
    { week: 'Week 4', completion: 92, dropout: 8, engagement: 8.7 },
    { week: 'Week 5', completion: 94, dropout: 6, engagement: 8.8 },
    { week: 'Week 6', completion: 92, dropout: 8, engagement: 8.5 },
  ]

  const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444']

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const stats = [
    {
      label: "Learner Satisfaction Score",
      value: 4.8,
      suffix: "/5",
      color: "emerald",
      icon: Star,
      description: "Consistently high ratings across all training programs",
    },
    {
      label: "Training Programs Delivered",
      value: 45,
      suffix: "+",
      color: "blue",
      icon: GraduationCap,
      description: "Comprehensive certification programs in Agile & DevOps",
    },
    {
      label: "Course Completion Rate",
      value: 92,
      suffix: "%",
      color: "purple",
      icon: CheckCircle,
      description: "Industry-leading completion rates through engaging content",
    },
    {
      label: "Training Time Optimized",
      value: 25,
      suffix: "%",
      color: "orange",
      icon: TrendingDown,
      description: "Reduced through streamlined curriculum design",
    },
  ]

  const achievements = [
    {
      title: "Agile & DevOps Certification Programs",
      description: "Designed comprehensive training for PMP, CSM, CSPO, and DevOps certifications",
      impact: "45+ successful program deliveries",
      icon: GraduationCap,
    },
    {
      title: "Corporate Training Excellence",
      description: "Delivered training to Fortune 500 companies",
      impact: "4.8/5 average satisfaction rating",
      icon: Presentation,
    },
    {
      title: "Learning Experience Optimization",
      description: "Implemented interactive learning methodologies",
      impact: "92% course completion rate",
      icon: TrendingUp,
    },
    {
      title: "Curriculum Standardization",
      description: "Created standardized frameworks for scalable delivery",
      impact: "25% reduction in training time",
      icon: Award,
    },
  ]

  const technologies = [
    "Agile Methodologies",
    "Scrum Framework",
    "DevOps Practices",
    "Project Management",
    "PMP Certification",
    "CSM Training",
    "CSPO Training",
    "Interactive Learning Design",
    "Corporate Training",
    "Assessment Design",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5" />
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(147,51,234,0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="px-6 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-6 py-12 max-w-7xl mx-auto"
        >
          {/* Company Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl border border-emerald-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-12 h-12 text-emerald-400" />
              </motion.div>
            </div>
            <h1 className="text-6xl font-black mb-4">
              <span className="text-white">Star</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Agile
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Professional Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>May 2024 – Sep 2024</span>
              </div>
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-2 text-lg">
              Senior Instructional Designer – Agile & DevOps Training
            </Badge>
          </motion.div>

          {/* Problem Statement */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white flex items-center justify-center">
                  <Target className="w-6 h-6 mr-3 text-red-400" />
                  Problem Solved
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Organizations worldwide were struggling with outdated project management practices and 
                  slow software delivery cycles. There was a critical need for comprehensive Agile and DevOps 
                  training that could transform traditional teams into high-performing, adaptive units capable 
                  of rapid delivery while maintaining quality standards in an increasingly competitive market.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Advanced Training Analytics Dashboard */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-white">Training </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Analytics Dashboard
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Program Growth Trend */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Program Growth & Participant Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={programGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis yAxisId="left" stroke="#9CA3AF" />
                        <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937', 
                            border: '1px solid #374151',
                            borderRadius: '8px',
                            color: '#F9FAFB'
                          }} 
                        />
                        <Legend />
                        <Bar yAxisId="left" dataKey="programs" fill="#10B981" name="Programs" radius={[4, 4, 0, 0]} />
                        <Bar yAxisId="left" dataKey="participants" fill="#3B82F6" name="Participants" radius={[4, 4, 0, 0]} />
                        <Line 
                          yAxisId="right"
                          type="monotone" 
                          dataKey="satisfaction" 
                          stroke="#F59E0B" 
                          strokeWidth={3}
                          name="Satisfaction Score"
                          dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Certification Distribution */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Certification Program Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={certificationDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {certificationDistribution.map((entry, index) => (
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
                          formatter={(value) => [`${value}%`, 'Programs']}
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Learning Outcomes Analysis */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Skill Development Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={learningOutcomes} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis type="number" domain={[0, 10]} stroke="#9CA3AF" />
                        <YAxis dataKey="skill" type="category" stroke="#9CA3AF" width={100} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937', 
                            border: '1px solid #374151',
                            borderRadius: '8px',
                            color: '#F9FAFB'
                          }} 
                        />
                        <Legend />
                        <Bar dataKey="pre" fill="#6B7280" name="Pre-Training" radius={[0, 4, 4, 0]} />
                        <Bar dataKey="post" fill="#10B981" name="Post-Training" radius={[0, 4, 4, 0]} />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Completion & Engagement Trends */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Completion & Engagement Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={completionTrends}>
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
                        <Area 
                          type="monotone" 
                          dataKey="completion" 
                          stackId="1"
                          stroke="#10B981" 
                          fill="#10B981"
                          fillOpacity={0.7}
                          name="Completion Rate %"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="engagement" 
                          stroke="#F59E0B" 
                          strokeWidth={3}
                          name="Engagement Score"
                          dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Performance Indicators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`p-3 rounded-lg bg-${stat.color}-500/20 mb-4 w-fit`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                  
                  {/* Progress bar for visual representation */}
                  <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-400 h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: stat.label === "Learner Satisfaction Score" ? "96%" : 
                               stat.label === "Training Programs Delivered" ? "90%" :
                               stat.label === "Course Completion Rate" ? "92%" : "78%"
                      }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-white">Key </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Achievements
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 h-full hover:border-emerald-500/30 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-emerald-500/20 rounded-lg shrink-0">
                          <achievement.icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-400 mb-3">{achievement.description}</p>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 font-medium text-sm">
                              {achievement.impact}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-white">Training Areas & </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Expertise
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge className="bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-emerald-500/50 px-4 py-2">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Summary */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Training Impact</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transformed organizational capabilities through comprehensive Agile and DevOps training programs, 
                  achieving exceptional learner satisfaction (4.8/5) and industry-leading completion rates (92%). 
                  The standardized curriculum design reduced training time by 25% while maintaining quality, 
                  enabling Fortune 500 companies to successfully adopt modern project management practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
}
