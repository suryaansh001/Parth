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
  Search,
  FileText,
  MessageSquare,
  PieChart,
  LineChart,
  AlertCircle,
  Lightbulb,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
} from 'recharts'

export default function StarAgileProject() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 'content-architecture',
      title: 'Content Architecture – 150+ SEO-Driven Blogs',
      subtitle: 'Product, Agile & Tech Knowledge Base',
      icon: <FileText className="w-6 h-6" />,
      color: 'emerald' as const,
      status: 'Completed',
      description: 'Built comprehensive SEO-optimized content ecosystem across 7+ domains',
      stats: {
        content: '150+ blogs',
        domains: '7+ covered',
        organic: '60% growth',
        reach: 'Multi-category'
      },
      problem: "Improve StarAgile's visibility and credibility in the edtech space by building a knowledge base of industry-relevant, high-performing content aligned to search demand and learner intent—covering Product Management, Scrum, Agile, Data Science, and Testing.",
      impediments: [
        'Highly competitive keyword space with saturated search results',
        'No structured content taxonomy or long-term SEO roadmap in place',
        'Need to balance educational tone with lead-generation goals'
      ],
      approach: [
        'Conducted extensive market and keyword research to identify high-intent content opportunities across 7+ domains',
        'Authored and optimized 150+ long-form content pieces, integrating structured metadata, internal linking, and CTA placement',
        'Aligned content with user journeys—top-of-funnel awareness to bottom-of-funnel conversion',
        'Used analytics (Google Search Console, GA4) to monitor organic growth and refine content strategies'
      ],
      outcome: 'Built a scalable content ecosystem that not only improved organic reach by 60%, but also increased engagement, domain authority, and inbound lead generation across key categories like Agile, Product Management, and Testing.'
    },
    {
      id: 'team-coordination',
      title: 'Cross-Functional Team Coordination',
      subtitle: '20+ External Contributors Management',
      icon: <Users className="w-6 h-6" />,
      color: 'blue' as const,
      status: 'Completed',
      description: 'Coordinated distributed team for high-quality, high-volume content delivery',
      stats: {
        contributors: '20+ managed',
        consistency: '95% brand',
        delivery: '30% faster',
        scalability: 'Full SOPs'
      },
      problem: 'Deliver high-quality, high-volume content across formats and channels by coordinating a growing external network of contributors—without compromising brand consistency or timelines.',
      impediments: [
        'Fragmented output across freelancers, agencies, and internal teams',
        'Inconsistent tone, deadlines, and documentation',
        'Misalignment between performance marketers, developers, designers, and content creators'
      ],
      approach: [
        'Established a central content pipeline with task tracking, briefs, and quality checklists',
        'Managed a distributed team of 20+ freelancers, content agencies, SEO experts, graphic designers, developers, and performance marketers',
        'Acted as the single point of contact, ensuring brand voice consistency, smooth handoffs, and aligned timelines',
        'Built scalable SOPs and templates for repeatability and faster onboarding'
      ],
      outcome: 'Improved delivery speed, content consistency, and inter-team visibility—enabling StarAgile to scale its content and marketing efforts efficiently across multiple product lines.'
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing & Lead Generation',
      subtitle: 'Omnichannel Campaign Optimization',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'purple' as const,
      status: 'Completed',
      description: 'Multi-platform campaign management with exceptional performance metrics',
      stats: {
        emailRate: '3.56% open rate',
        whatsapp: '17% CTR',
        adSuccess: '22% success',
        platforms: '5 channels'
      },
      problem: 'Drive qualified leads and course enrollments using high-converting ad creatives, landing pages, and campaigns across paid and owned channels—while reducing acquisition costs and increasing ROI.',
      impediments: [
        'Low engagement on previous campaigns due to poor message-channel fit',
        'Inconsistent tracking and optimization across platforms',
        'Underutilized touchpoints like WhatsApp and email'
      ],
      approach: [
        'Conceptualized and executed campaign content for Meta Ads, Google Search/Display, LinkedIn, WhatsApp, and Email',
        'Created CTA-focused copies tailored to audience segments and platform behavior',
        'Collaborated with performance marketing team to optimize ad creatives based on real-time metrics',
        'Implemented A/B testing, micro-targeting, and copy variation strategies for performance lift',
        'Segmented mailing lists and improved subject lines for email campaigns using Clevertap and internal data'
      ],
      outcome: 'Email open rates improved from 0.12% to 3.56%, WhatsApp click-through rates reached 17%, Meta & Google campaigns generated consistent lead flow with a 22% ad copy success rate. Enabled continuous iteration on campaign performance using data insights and behavioral metrics.'
    }
  ]

  const getColorClass = (color: 'emerald' | 'blue' | 'purple', type = 'text') => {
    const colors = {
      emerald: type === 'text' ? 'text-emerald-400' : type === 'bg' ? 'bg-emerald-500' : 'border-emerald-500',
      blue: type === 'text' ? 'text-blue-400' : type === 'bg' ? 'bg-blue-500' : 'border-blue-500',
      purple: type === 'text' ? 'text-purple-400' : type === 'bg' ? 'bg-purple-500' : 'border-purple-500',
    }
    return colors[color] || colors.emerald
  }

  // Chart data for analytics
  const contentGrowthData = [
    { month: 'Month 1', blogs: 15, organic: 10, engagement: 2.1 },
    { month: 'Month 2', blogs: 35, organic: 18, engagement: 2.8 },
    { month: 'Month 3', blogs: 60, organic: 28, engagement: 3.2 },
    { month: 'Month 4', blogs: 90, organic: 40, engagement: 3.7 },
    { month: 'Month 5', blogs: 120, organic: 50, engagement: 4.1 },
    { month: 'Month 6', blogs: 150, organic: 60, engagement: 4.5 },
  ]

  const campaignPerformanceData = [
    { platform: 'Email', before: 0.12, after: 3.56, improvement: 2867 },
    { platform: 'WhatsApp', before: 2.1, after: 17, improvement: 710 },
    { platform: 'Meta Ads', before: 1.8, after: 4.2, improvement: 133 },
    { platform: 'Google Ads', before: 2.3, after: 5.1, improvement: 122 },
    { platform: 'LinkedIn', before: 1.2, after: 3.8, improvement: 217 },
  ]

  const teamDistributionData = [
    { name: 'Content Writers', value: 30, color: '#10B981' },
    { name: 'SEO Experts', value: 15, color: '#3B82F6' },
    { name: 'Designers', value: 20, color: '#8B5CF6' },
    { name: 'Developers', value: 15, color: '#F59E0B' },
    { name: 'Marketers', value: 20, color: '#EF4444' },
  ]

  const overallStats = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Pieces Created",
      value: "150+",
      description: "SEO-optimized blogs across 7+ domains",
      color: "text-emerald-400",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Contributors Managed",
      value: "20+",
      description: "External freelancers and agencies coordinated",
      color: "text-blue-400",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Email Open Rate",
      value: "3.56%",
      description: "Improved from 0.12% baseline",
      color: "text-purple-400",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Organic Growth",
      value: "60%",
      description: "Increased reach and engagement",
      color: "text-orange-400",
    },
  ]

  const technologies = [
    "Content Strategy",
    "SEO Optimization",
    "Google Analytics",
    "Search Console",
    "Meta Ads Manager",
    "Google Ads",
    "LinkedIn Ads",
    "Clevertap",
    "WhatsApp Business",
    "A/B Testing",
    "Performance Marketing",
    "Team Management",
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
          <Link href="/projects">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-12 max-w-7xl mx-auto"
        >
          {/* Company Header */}
          <div className="text-center mb-12">
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
                <span>Content & Marketing Portfolio</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>May 2024 – Sep 2024</span>
              </div>
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-2 text-lg">
              Content Strategist & Performance Marketing Lead
            </Badge>
          </div>

          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {overallStats.map((stat, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all">
                <CardContent className="p-6">
                  <div className={`${stat.color} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{stat.title}</h3>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Project Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-400">Project Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        activeProject === index
                          ? `${getColorClass(project.color, 'border')} bg-gray-800/50`
                          : 'border-gray-700 bg-gray-800/30 hover:bg-gray-800/50'
                      }`}
                      onClick={() => setActiveProject(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`${getColorClass(project.color)} mb-4`}>
                        {project.icon}
                      </div>
                      <h3 className="font-bold text-white mb-2">{project.title}</h3>
                      <p className={`text-sm ${getColorClass(project.color)} mb-3`}>{project.subtitle}</p>
                      <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                      <div className="space-y-2">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-xs">
                            <span className="text-gray-500 capitalize">{key}:</span>
                            <span className="text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Project View */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${getColorClass(projects[activeProject].color)} p-3 rounded-lg bg-gray-700/50`}>
                    {projects[activeProject].icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">{projects[activeProject].title}</CardTitle>
                    <p className={`text-lg ${getColorClass(projects[activeProject].color)}`}>{projects[activeProject].subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Problem Statement */}
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Problem Statement
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{projects[activeProject].problem}</p>
                </div>

                {/* Impediments */}
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Impediments
                  </h3>
                  <div className="space-y-3">
                    {projects[activeProject].impediments.map((impediment, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{impediment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Approach
                  </h3>
                  <div className="space-y-3">
                    {projects[activeProject].approach.map((approach, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{approach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Outcome
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{projects[activeProject].outcome}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-white">Performance </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Analytics
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Content Growth Chart */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Content Growth & Organic Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={contentGrowthData}>
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
                        <Bar yAxisId="left" dataKey="blogs" fill="#10B981" name="Blogs Published" radius={[4, 4, 0, 0]} />
                        <Line 
                          yAxisId="right"
                          type="monotone" 
                          dataKey="organic" 
                          stroke="#3B82F6" 
                          strokeWidth={3}
                          name="Organic Growth %"
                          dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                        />
                        <Line 
                          yAxisId="right"
                          type="monotone" 
                          dataKey="engagement" 
                          stroke="#F59E0B" 
                          strokeWidth={3}
                          name="Engagement Score"
                          dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Performance */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Campaign Performance Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={campaignPerformanceData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis type="number" stroke="#9CA3AF" />
                        <YAxis dataKey="platform" type="category" stroke="#9CA3AF" width={80} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937', 
                            border: '1px solid #374151',
                            borderRadius: '8px',
                            color: '#F9FAFB'
                          }} 
                        />
                        <Legend />
                        <Bar dataKey="before" fill="#6B7280" name="Before" radius={[0, 4, 4, 0]} />
                        <Bar dataKey="after" fill="#10B981" name="After" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team Distribution */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Team Distribution (20+ Contributors)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={teamDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {teamDistributionData.map((entry, index) => (
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
                        formatter={(value) => [`${value}%`, 'Team Allocation']}
                      />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-white">Technologies & </span>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Portfolio Impact</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Successfully built and managed a comprehensive content and marketing ecosystem that delivered 
                  exceptional results: 150+ SEO-optimized content pieces driving 60% organic growth, 
                  coordinated 20+ external contributors for seamless delivery, and achieved remarkable 
                  campaign performance with email open rates improving by 2,867% and WhatsApp CTR reaching 17%. 
                  This integrated approach established StarAgile as a thought leader in the edtech space 
                  while significantly improving lead generation and conversion metrics.
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
