"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
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
  Radar,
  Search,
  Globe,
  ChevronRight,
  Layers,
  AlertTriangle,
  Timer,
  UserCheck,
  TrendingDown,
  Activity,
} from "lucide-react"
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
  FunnelChart,
  Funnel,
  LabelList,
} from 'recharts'

export default function SmithsDetectionPage() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeSection, setActiveSection] = useState('overview')
  const [chartData, setChartData] = useState({
    trainingTime: 0,
    satisfaction: 0,
    programs: 0,
    assets: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData({
        trainingTime: 28,
        satisfaction: 8.2,
        programs: 3,
        assets: 45,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'timeline', 'projects', 'detailed-view', 'analytics', 'skills', 'impact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // XDi Project Data
  const xdiStakeholderData = [
    { name: 'Engineering', value: 40, color: '#10B981' },
    { name: 'Training', value: 25, color: '#3B82F6' },
    { name: 'QA & Testing', value: 20, color: '#8B5CF6' },
    { name: 'Documentation', value: 10, color: '#F59E0B' },
    { name: 'Support', value: 5, color: '#EF4444' },
  ]

  const xdiOnboardingData = [
    { phase: 'Pre-Training', traditional: 10, improved: 10 },
    { phase: 'Module 1', traditional: 10, improved: 7 },
    { phase: 'Module 2', traditional: 10, improved: 7 },
    { phase: 'Module 3', traditional: 10, improved: 7 },
    { phase: 'Assessment', traditional: 10, improved: 7 },
  ]

  const xdiPerformanceData = [
    { module: 'System Overview', week1: 6.2, week2: 7.1, week3: 7.8, week4: 8.2 },
    { module: 'Diffraction Tech', week1: 5.8, week2: 6.9, week3: 7.5, week4: 8.0 },
    { module: 'Operations', week1: 6.5, week2: 7.3, week3: 7.9, week4: 8.4 },
    { module: 'Diagnostics', week1: 5.9, week2: 6.8, week3: 7.6, week4: 8.1 },
  ]

  const xdiKnowledgeTransferData = [
    { name: 'Content Creation', value: 100, fill: '#10B981' },
    { name: 'SME Review', value: 95, fill: '#3B82F6' },
    { name: 'Approval', value: 85, fill: '#8B5CF6' },
    { name: 'Deployment', value: 78, fill: '#F59E0B' },
  ]

  // Overall Portfolio Data
  const portfolioOverviewData = [
    { project: 'XDi Detection', completion: 100, satisfaction: 8.2, impact: 95 },
    { project: 'LCD Chemical Detector', completion: 100, satisfaction: 8.6, impact: 90 },
    { project: 'Hi-Trax Scanner', completion: 100, satisfaction: 8.4, impact: 85 },
  ]

  const timelineData = [
    { month: 'Sep 2024', xdi: 15, lcd: 80, hitrax: 100 },
    { month: 'Oct 2024', xdi: 35, lcd: 90, hitrax: 100 },
    { month: 'Nov 2024', xdi: 55, lcd: 95, hitrax: 100 },
    { month: 'Dec 2024', xdi: 72, lcd: 100, hitrax: 100 },
    { month: 'Jan 2025', xdi: 88, lcd: 100, hitrax: 100 },
    { month: 'Feb 2025', xdi: 95, lcd: 100, hitrax: 100 },
    { month: 'Mar 2025', xdi: 100, lcd: 100, hitrax: 100 },
  ]

  const projects = [
    {
      id: 'xdi',
      title: 'XDi – Diffraction-Based Detection System',
      client: 'Israeli Airport Authority (IAA)',
      status: 'Main Project',
      icon: <Radar className="w-6 h-6" />,
      color: 'emerald' as const,
      description: 'Next-gen diffraction imaging training for advanced airport security',
      stats: {
        timeline: '6 weeks',
        stakeholders: '7 involved',
        satisfaction: '8.2/10',
        reusability: '92%'
      },
      challenges: [
        'Emerging Technology: XDi was based on proprietary, next-gen diffraction imaging — with no existing training benchmarks or precedents',
        'Knowledge Scarcity: Minimal technical documentation and virtually no publicly available reference material',
        'Tight Deadline: Compressed project timeline driven by client urgency and regulatory onboarding schedules',
        'Complex Systems: High dependency on internal subject matter experts (SMEs) and hardware teams for information flow'
      ],
      achievements: [
        'Created comprehensive training from zero documentation',
        'Reduced time to competency from 10 to 7 days (30% improvement)',
        'Achieved <5% error rate in mock operations',
        '92% content reusability for future deployments',
        '85% module approval rate on first round',
        'Cross-functional sessions: 15+ SME & engineering syncs'
      ]
    },
    {
      id: 'lcd',
      title: 'LCD – Liquid Chemical Detector',
      client: 'Indian Navy',
      status: 'Completed',
      icon: <Activity className="w-6 h-6" />,
      color: 'blue' as const,
      description: 'High-reliability, field-critical training for chemical threat detection',
      stats: {
        modules: '6 core units',
        duration: '90 min/session',
        satisfaction: '8.6/10',
        improvement: '35% faster'
      },
      challenges: [
        'No prior training exposure among field operatives to similar detection systems',
        'Training needed to simulate mission-critical scenarios with minimal tolerance for operational errors',
        'Limited and outdated engineering documentation at early development stages',
        'Too much compliances and regulations imposed'
      ],
      achievements: [
        'Delivered 6 core scenario-based units',
        '35% faster onboarding compared to legacy formats',
        '40% field error reduction post-training improvement',
        'Created 40+ visual aids (response workflows, diagrams, starter guides)',
        '15+ short-form microlearning training units',
        '100% of learners completed personal skill statements for role-based performance mapping',
        '95% assessment completion rate with operational proficiency'
      ],
      approach: [
        'Use-Case Focused Design: Structured modules around real-world application—deployment, emergency response, diagnostics, and decontamination',
        'Scenario-Based Learning: Integrated field-simulated missions and quick-response drills to reflect realistic usage',
        'Visual-First Documentation: Developed intuitive visual guides, checklists, and flowcharts for rapid comprehension',
        'Microlearning Strategy: Delivered modular content in compact formats to fit into highly dynamic field schedules',
        'Performance-Focused Assessment: Introduced structured assessments and personal skill statements to benchmark individual proficiency and support continuous improvement of field technicians',
        'Collaborative Validation: Partnered with SMEs, service engineers, and defense trainers for content accuracy and field relevance'
      ]
    },
    {
      id: 'hitrax',
      title: 'Hi-Trax',
      client: 'UK Civil Aviation Authority',
      status: 'Completed',
      icon: <Search className="w-6 h-6" />,
      color: 'purple' as const,
      description: 'Process optimization & scalable enablement for high-speed baggage scanning',
      stats: {
        modules: '10+ updated',
        reduction: '7 to 5 days',
        satisfaction: '8.4/10',
        reusability: '80% global'
      },
      challenges: [
        'Outdated training structure heavily reliant on live virtual delivery',
        'Technical modules contained error due to language translations',
        'Inconsistent knowledge levels across regions due to lack of standardized modules',
        'Limited engagement and retention in existing sessions',
        'Training included limited practical and hands on training',
        'Absence of structured learning paths or prerequisites'
      ],
      achievements: [
        'Updated/Created 10+ modules',
        'Reduced training time from 7 days to 5 days',
        '80% content reusability adaptable globally',
        'Resolved 60+ documentation gaps and inconsistencies',
        'Created 50+ visual assets (instructional diagrams and UI walkthroughs)',
        '25% reduction in troubleshooting mistakes post-training',
        'Reduced trainer time investment by 30%, improved retention and accessibility',
        '100% Safety Module Completion Rate before technical sessions'
      ],
      approach: [
        'Training Model Shift: Transitioned from 100% live virtual sessions to a hybrid model combining asynchronous pre-learning with live practical workshops',
        'Structured Learning Flow: Established Safety Training as a mandatory prerequisite, ensuring foundational knowledge before technical modules',
        'Modular Redesign: Rebuilt content into standalone modules tailored for different user roles (operator, technician, trainer)',
        'Feedback Loops: Collected feedback across pilot regions to iterate quickly and localize where needed',
        'Cross-Functional Collaboration: Worked with SMEs, QA leads, and trainers across 3 regions to consolidate material and streamline delivery'
      ]
    }
  ]

  const getColorClass = (color: 'emerald' | 'blue' | 'purple', type = 'text') => {
    const colors = {
      emerald: type === 'text' ? 'text-emerald-500' : type === 'bg' ? 'bg-emerald-500' : 'border-emerald-500',
      blue: type === 'text' ? 'text-blue-500' : type === 'bg' ? 'bg-blue-500' : 'border-blue-500',
      purple: type === 'text' ? 'text-purple-500' : type === 'bg' ? 'bg-purple-500' : 'border-purple-500',
    }
    return colors[color] || colors.emerald
  }

  const achievements = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Training Programs Developed",
      value: "3",
      description: "Comprehensive programs for mission-critical defense equipment",
      color: "text-emerald-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Average Time Reduction",
      value: "25%",
      description: "Across all training programs through optimized design",
      color: "text-blue-500",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Average Satisfaction",
      value: "8.0/10",
      description: "Consistent high ratings across all deployments",
      color: "text-yellow-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Total Assets Created",
      value: "45+",
      description: "Standardized training materials across all projects",
      color: "text-purple-500",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Main Navigation */}
      <NavBar />
      
      {/* Fixed Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-emerald-400" />
              <span className="font-semibold text-white">Smiths Detection Portfolio</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'timeline', label: 'Timeline' },
                { id: 'projects', label: 'Projects' },
                { id: 'detailed-view', label: 'Details' },
                { id: 'analytics', label: 'Analytics' },
                { id: 'skills', label: 'Skills' },
                { id: 'impact', label: 'Impact' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 pt-16"
          >
            <button className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Smiths Detection</h1>
                <p className="text-xl text-gray-400">Instructional Designer – Product Training Portfolio</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Sep 2024 – Jun 2025</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Global Deployment</span>
              </div>
            </div>
          </motion.div>

          {/* Key Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
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
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Portfolio Timeline */}
          <motion.div
            id="timeline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Project Portfolio Timeline</h2>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timelineData}>
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
                    <Area type="monotone" dataKey="hitrax" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} name="Hi-Trax Scanner" />
                    <Area type="monotone" dataKey="lcd" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="LCD Chemical Detector" />
                    <Area type="monotone" dataKey="xdi" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="XDi Detection" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Project Selection */}
          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Project Portfolio</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeProject === index 
                        ? `bg-${project.color}-500/10 border-${project.color}-500/50` 
                        : 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50'
                    } border rounded-xl p-6`}
                    onClick={() => setActiveProject(index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${getColorClass(project.color)} p-3 rounded-lg bg-gray-700/50`}>
                        {project.icon}
                      </div>
                      {project.status === 'Main Project' && (
                        <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/30">
                          Main Project
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{project.client}</p>
                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold ${getColorClass(project.color)}`}>{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Detailed Project View */}
          <motion.div
            id="detailed-view"
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className={`${getColorClass(projects[activeProject].color)} p-3 rounded-lg bg-gray-700/50`}>
                  {projects[activeProject].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{projects[activeProject].title}</h2>
                  <p className="text-gray-400">{projects[activeProject].client}</p>
                </div>
              </div>

              {activeProject === 0 && (
                <div className="space-y-8">
                  {/* XDi Problem Statement */}
                  <div className="bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-xl p-6 border border-emerald-500/20">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Problem Statement</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Develop a complete technical training solution from scratch for the newly introduced XDi detection system, 
                      tailored to the requirements of the Israeli Airport Authority (IAA). The training needed to ensure rapid 
                      onboarding and operational readiness of technical personnel handling advanced diffraction-based screening technology.
                    </p>
                  </div>

                  {/* Product-Oriented Approach */}
                  <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl p-6 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Product-Oriented Approach</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold">Discovery Phase</h4>
                            <p className="text-gray-300 text-sm">Initiated structured stakeholder interviews (SMEs, engineers, testers) to gather fragmented knowledge and technical details.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold">Requirement Definition</h4>
                            <p className="text-gray-300 text-sm">Outlined learning objectives aligned with IAA's operational environment and compliance needs.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold">Iterative Content Development</h4>
                            <p className="text-gray-300 text-sm">Adopted an Agile approach—delivered training modules in sprints, incorporating continuous feedback loops.</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold">Rapid Prototyping</h4>
                            <p className="text-gray-300 text-sm">Created wireframes of training flow, simulated use-case scenarios, and validated content with internal reviewers.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold">Cross-Functional Collaboration</h4>
                            <p className="text-gray-300 text-sm">Bridged gaps between engineering, documentation, and service teams to ensure content accuracy and coverage.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold">User-Centric Design</h4>
                            <p className="text-gray-300 text-sm">Focused on modular content, real-world application, and visual aids to accelerate comprehension and retention.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* XDi Project Images */}
                  <div className="bg-gradient-to-r from-emerald-500/5 to-gray-500/5 rounded-xl p-6 border border-emerald-500/20">
                    <h3 className="text-xl font-bold text-emerald-400 mb-6">XDi System Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className="relative group">
                          <div className="aspect-video bg-gray-700/30 rounded-lg overflow-hidden border border-gray-600">
                            <Image
                              src={`/images/project_images/smiths/xdi/xd${num}.png`}
                              alt={`XDi Detection System - View ${num}`}
                              width={500}
                              height={500}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <span className="text-emerald-400 font-medium">View {num}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Achievements */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-red-500/5 rounded-xl p-6 border border-red-500/20">
                      <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Key Impediments
                      </h3>
                      <ul className="space-y-3">
                        {projects[activeProject].challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/20">
                      <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-3">
                        {projects[activeProject].achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* XDi Analytics Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Stakeholder Contribution */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Stakeholder Contribution Distribution</h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={xdiStakeholderData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={100}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {xdiStakeholderData.map((entry, index) => (
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
                              formatter={(value) => [`${value}%`, 'Contribution']}
                            />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Onboarding Time Comparison */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Onboarding Time: Traditional vs Improved</h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={xdiOnboardingData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="phase" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#1F2937', 
                                border: '1px solid #374151',
                                borderRadius: '8px',
                                color: '#F9FAFB'
                              }} 
                              formatter={(value) => [`${value} days`, '']}
                            />
                            <Legend />
                            <Bar dataKey="traditional" fill="#EF4444" name="Traditional Method" />
                            <Bar dataKey="improved" fill="#10B981" name="Improved Method" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Learner Performance Improvement */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Learner Performance Improvement</h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={xdiPerformanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="module" stroke="#9CA3AF" />
                            <YAxis domain={[5, 9]} stroke="#9CA3AF" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#1F2937', 
                                border: '1px solid #374151',
                                borderRadius: '8px',
                                color: '#F9FAFB'
                              }} 
                            />
                            <Legend />
                            <Line type="monotone" dataKey="week1" stroke="#EF4444" strokeWidth={2} name="Week 1" />
                            <Line type="monotone" dataKey="week2" stroke="#F59E0B" strokeWidth={2} name="Week 2" />
                            <Line type="monotone" dataKey="week3" stroke="#3B82F6" strokeWidth={2} name="Week 3" />
                            <Line type="monotone" dataKey="week4" stroke="#10B981" strokeWidth={2} name="Week 4" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Knowledge Transfer Pipeline */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Knowledge Transfer Pipeline</h4>
                      <div className="h-64 w-full flex items-center justify-center">
                        <div className="space-y-4 w-full max-w-md">
                          {xdiKnowledgeTransferData.map((step, index) => (
                            <div key={step.name} className="flex items-center gap-4">
                              <div className="w-32 text-sm text-gray-300">{step.name}</div>
                              <div className="flex-1 bg-gray-700 rounded-full h-4 relative">
                                <motion.div
                                  className="h-4 rounded-full"
                                  style={{ backgroundColor: step.fill }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${step.value}%` }}
                                  transition={{ duration: 1, delay: index * 0.2 }}
                                />
                                <span className="absolute right-2 top-0.5 text-xs text-white font-medium">
                                  {step.value}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Summary */}
                  <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl p-6 border border-emerald-500/20">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Project Impact Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-2">30%</div>
                        <div className="text-sm text-gray-300">Reduction in Training Time</div>
                        <div className="text-xs text-gray-400 mt-1">From 10 to 7 days</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">&lt;5%</div>
                        <div className="text-sm text-gray-300">Error Rate in Mock Ops</div>
                        <div className="text-xs text-gray-400 mt-1">Post-training assessment</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
                        <div className="text-sm text-gray-300">Content Reusability</div>
                        <div className="text-xs text-gray-400 mt-1">For global deployments</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {(activeProject === 1 || activeProject === 2) && (
                <div className="space-y-8">
                  {/* Problem Statement */}
                  <div className="bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-xl p-6 border border-red-500/20">
                    <h3 className="text-xl font-bold text-red-400 mb-4">Problem Statement</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {activeProject === 1 ? 
                        "Develop a comprehensive, high-impact training solution for the LCD (Liquid Chemical Detector), aimed at field technicians and defense personnel responsible for rapid chemical threat detection and response." :
                        "Redesign and standardize training for the Hi-Trax scanner, a high-speed baggage scanning system, to ensure global consistency, reduce knowledge gaps, and align training with the latest system upgrades."
                      }
                    </p>
                  </div>

                  {/* Product-Oriented Approach */}
                  {projects[activeProject].approach && (
                    <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl p-6 border border-blue-500/20">
                      <h3 className="text-xl font-bold text-blue-400 mb-4">Product-Oriented Approach</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          {projects[activeProject].approach?.slice(0, Math.ceil(projects[activeProject].approach?.length / 2)).map((approach, idx) => {
                            const [title, description] = approach.split(': ')
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                <div>
                                  <h4 className="text-white font-semibold">{title}</h4>
                                  <p className="text-gray-300 text-sm">{description}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="space-y-4">
                          {projects[activeProject].approach?.slice(Math.ceil(projects[activeProject].approach?.length / 2)).map((approach, idx) => {
                            const [title, description] = approach.split(': ')
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                <div>
                                  <h4 className="text-white font-semibold">{title}</h4>
                                  <p className="text-gray-300 text-sm">{description}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Images */}
                  {activeProject === 1 && (
                    <div className="bg-gradient-to-r from-blue-500/5 to-gray-500/5 rounded-xl p-6 border border-blue-500/20">
                      <h3 className="text-xl font-bold text-blue-400 mb-6">LCD Chemical Detector System</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2].map((num) => (
                          <div key={num} className="relative group">
                            <div className="aspect-video bg-gray-700/30 rounded-lg overflow-hidden border border-gray-600">
                              <Image
                                src={`/images/project_images/smiths/lcd/lcd${num}.png`}
                                alt={`LCD Chemical Detector - View ${num}`}
                                width={425}
                                height={325}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                              <span className="text-blue-400 font-medium">LCD System View {num}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProject === 2 && (
                    <div className="bg-gradient-to-r from-purple-500/5 to-gray-500/5 rounded-xl p-6 border border-purple-500/20">
                      <h3 className="text-xl font-bold text-purple-400 mb-6">Hi-Trax Scanner System</h3>
                      <div className="flex justify-center">
                        <div className="relative group max-w-md">
                          <div className="aspect-video bg-gray-700/30 rounded-lg overflow-hidden border border-gray-600">
                            <Image
                              src="/images/project_images/smiths/hitrax/image.png"
                              alt="Hi-Trax Scanner System"
                              width={425}
                              height={325}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <span className="text-purple-400 font-medium">Hi-Trax Scanner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Challenges & Achievements */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-yellow-500/5 rounded-xl p-6 border border-yellow-500/20">
                      <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Project Impediments
                      </h3>
                      <ul className="space-y-3">
                        {projects[activeProject].challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${getColorClass(projects[activeProject].color, 'text').replace('text-', 'bg-').replace('500', '500/5')} rounded-xl p-6 border ${getColorClass(projects[activeProject].color, 'border').replace('border-', 'border-').replace('500', '500/20')}`}>
                      <h3 className={`text-xl font-bold ${getColorClass(projects[activeProject].color)} mb-4 flex items-center gap-2`}>
                        <CheckCircle className="w-5 h-5" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-3">
                        {projects[activeProject].achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`w-4 h-4 ${getColorClass(projects[activeProject].color)} mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outcome Summary */}
                  <div className={`bg-gradient-to-r ${getColorClass(projects[activeProject].color, 'text').replace('text-', 'from-').replace('500', '500/10')} to-gray-500/5 rounded-xl p-6 border ${getColorClass(projects[activeProject].color, 'border').replace('border-', 'border-').replace('500', '500/20')}`}>
                    <h3 className={`text-xl font-bold ${getColorClass(projects[activeProject].color)} mb-4`}>Outcome</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {activeProject === 1 ? 
                        "Delivered a user-centric, scenario-driven training solution that significantly enhanced readiness, reduced errors, and introduced measurable quality benchmarks for field technicians." :
                        "Improved learning efficiency, engagement, and training scalability across regions through a modular, hybrid training model. Ensured foundational safety compliance before skill-specific modules, enhancing learner outcomes."
                      }
                    </p>
                  </div>

                  {/* Project Statistics */}
                  <div className={`bg-gradient-to-r ${getColorClass(projects[activeProject].color, 'text').replace('text-', 'from-').replace('500', '500/10')} to-gray-500/5 rounded-xl p-6 border ${getColorClass(projects[activeProject].color, 'border').replace('border-', 'border-').replace('500', '500/20')}`}>
                    <h3 className={`text-xl font-bold ${getColorClass(projects[activeProject].color)} mb-4`}>Project Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {Object.entries(projects[activeProject].stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-2xl font-bold ${getColorClass(projects[activeProject].color)} mb-2`}>{value}</div>
                          <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Portfolio Overview Analytics */}
          <motion.div
            id="analytics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Portfolio Performance Overview</h2>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={portfolioOverviewData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="project" stroke="#9CA3AF" />
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
                      dataKey="satisfaction" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      name="Satisfaction Score"
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="impact" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      name="Impact Score"
                      dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Technologies & Skills */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Technologies & Skills Applied</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Instructional Design</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Learning Architecture', 'Curriculum Development', 'Assessment Design', 'User Experience'].map((skill, idx) => (
                      <span key={idx} className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Technical Writing', 'Systems Analysis', 'Documentation', 'Quality Assurance'].map((skill, idx) => (
                      <span key={idx} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Project Management</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Stakeholder Management', 'Agile Methodology', 'Cross-functional Collaboration', 'Change Management'].map((skill, idx) => (
                      <span key={idx} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Impact Summary */}
          <motion.div
            id="impact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Overall Portfolio Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Zap className="w-8 h-8 text-emerald-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Innovation Leadership</h3>
                      <p className="text-gray-300">Pioneered training for cutting-edge detection technologies with zero existing documentation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Global Impact</h3>
                      <p className="text-gray-300">Training programs deployed across multiple international government agencies</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Target className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Operational Excellence</h3>
                      <p className="text-gray-300">Consistent delivery of high-quality training solutions under tight deadlines</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Portfolio Completion</span>
                      <span className="text-emerald-400 font-bold">100%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-emerald-500 to-green-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Client Satisfaction</span>
                      <span className="text-blue-400 font-bold">8.0/10</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 2, delay: 1.2 }}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Training Efficiency</span>
                      <span className="text-purple-400 font-bold">25% Faster</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, delay: 1.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
