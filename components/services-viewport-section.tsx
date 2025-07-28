"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Cog,
  Package,
  Building2,
  Laptop,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  Rocket,
  Target,
  BarChart,
  Lightbulb,
  Layers,
  Code,
  Database,
  Cloud,
  Lock,
  Gauge,
  Sparkles,
  Activity,
  FileText,
  Brain,
  CheckCircle,
  BookOpen,
  PieChart,
  Search,
  Mail,
  Eye,
  MousePointer,
  Cpu,
  Server,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "training",
    title: "Instructional Design & Product Training",
    subtitle: "Tech Training for Real-World Missions",
    description:
      "Designed and delivered mission-critical training for defense-grade detection systems like LCD, Hi-Trax, XDi, and Trace. Turned complex tech into digestible content for global government agencies.",
    icon: <Users className="w-8 h-8" />,
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10",
    features: [
      { icon: <Zap className="w-5 h-5" />, text: "Reduced training time by 28%" },
      { icon: <Award className="w-5 h-5" />, text: "Rated 8.2/10 by learners" },
      { icon: <Layers className="w-5 h-5" />, text: "Standardized 30+ training assets" },
      { icon: <Cog className="w-5 h-5" />, text: "Modular, scalable content design" },
    ],
    stats: [
      { label: "Trainings Built", value: "12+" },
      { label: "Learner Rating", value: "8.2/10" },
      { label: "Training Time Saved", value: "28%" },
    ],
    technologies: ["Trace", "LCD", "Hi-Trax", "XDi"],
    cta: "Explore Learning Frameworks",
    company: "smiths-detection",
  },
  {
    id: "product-mgmt",
    title: "Product Management",
    subtitle: "From Insights to Execution",
    description:
      "Led development of internal tools for transformer efficiency and tender/billing automation. Streamlined product fit analysis and structured product documentation based on feedback loops.",
    icon: <Package className="w-8 h-8" />,
    color: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10",
    features: [
      { icon: <Gauge className="w-5 h-5" />, text: "Boosted transformer efficiency by 18%" },
      { icon: <Database className="w-5 h-5" />, text: "Built tender tracking & billing tool" },
      { icon: <Sparkles className="w-5 h-5" />, text: "User-focused documentation design" },
      { icon: <Target className="w-5 h-5" />, text: "Competitor-based product mapping" },
    ],
    stats: [
      { label: "Efficiency Gain", value: "18%" },
      { label: "Tool Built", value: "Tender Tracker" },
      { label: "Process Impact", value: "High" },
    ],
    technologies: ["Agile", "Product Fit Analysis", "Documentation"],
    cta: "View Product Tools",
    company: "saumya-vidyut",
  },
  {
    id: "content",
    title: "Content Strategy & SEO",
    subtitle: "Write. Rank. Repeat.",
    description:
      "From PM & Agile to AI & Scrum — crafted 150+ SEO-rich content pieces that didn't just rank but converted. Boosted site reach, campaign CTRs, and user engagement through structured storytelling.",
    icon: <Laptop className="w-8 h-8" />,
    color: "green",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-600/10",
    features: [
      { icon: <BarChart className="w-5 h-5" />, text: "60% increase in organic reach" },
      { icon: <TrendingUp className="w-5 h-5" />, text: "15% better landing page conversions" },
      { icon: <Shield className="w-5 h-5" />, text: "CTR optimization via A/B testing" },
      { icon: <Cloud className="w-5 h-5" />, text: "Email open rates jumped to 3.56%" },
    ],
    stats: [
      { label: "Articles Written", value: "150+" },
      { label: "Organic Growth", value: "+60%" },
      { label: "Open Rate Uplift", value: "3.56%" },
    ],
    technologies: ["SEO", "CleverTap", "Google Ads", "LinkedIn", "Meta"],
    cta: "Read My Work",
    company: "staragile",
  },
  {
    id: "skills",
    title: "Tech Stack & Tooling",
    subtitle: "The Magic Behind the Mayhem",
    description:
      "A fusion of data, documentation, AI, and storytelling. Whether it's Power BI for dashboards or SQL for insights — these tools turn ideas into outcomes.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "yellow",
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-400/10 to-orange-500/10",
    features: [
      { icon: <Database className="w-5 h-5" />, text: "Data-driven product insights" },
      { icon: <Activity className="w-5 h-5" />, text: "A/B Testing & analytics" },
      { icon: <Lock className="w-5 h-5" />, text: "Secure stakeholder documentation" },
      { icon: <Zap className="w-5 h-5" />, text: "CMS Management & SEO mastery" },
    ],
    stats: [
      { label: "Dashboards Built", value: "10+" },
      { label: "SQL Scripts Written", value: "150+" },
      { label: "Certifications", value: "3+" },
    ],
    technologies: ["Power BI", "SQL", "CMS", "Scrum", "AI Tools"],
    
    company: "tech-stack",
  },
]

export function ServicesViewportSection() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            const index = serviceRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveService(index)
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
    )

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToService = (index: number) => {
    setActiveService(index)
    serviceRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-black overflow-hidden">
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
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        {/* Faint Code Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.8'%3E%3Ctext x='5' y='15' fontFamily='monospace' fontSize='10'%3E%7B%3C/text%3E%3Ctext x='5' y='30' fontFamily='monospace' fontSize='8'%3E%20%20const%3C/text%3E%3Ctext x='5' y='45' fontFamily='monospace' fontSize='8'%3E%20%20%20%20api%3C/text%3E%3Ctext x='5' y='60' fontFamily='monospace' fontSize='10'%3E%7D%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">Projects That  </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
              Transform
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate business growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Fixed Navigation Dots - Only show when services section is visible */}
          {isVisible && (
            <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
              <div className="flex flex-col items-center space-y-6">
                {services.map((service, index) => (
                  <div key={service.id} className="relative flex items-center group">
                    {/* Connecting Line */}
                    {index < services.length - 1 && (
                      <div className="absolute top-6 left-1/2 w-0.5 h-6 bg-gray-700 transform -translate-x-1/2" />
                    )}

                    {/* Enhanced Dot Button */}
                    <motion.button
                      onClick={() => scrollToService(index)}
                      className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                        activeService === index
                          ? `bg-${service.color}-500 border-${service.color}-500 shadow-lg shadow-${service.color}-500/50`
                          : "bg-transparent border-gray-600 hover:border-gray-400"
                      }`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      animate={
                        activeService === index
                          ? {
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                `0 0 0 0 rgba(${service.color === "purple" ? "147,51,234" : service.color === "cyan" ? "6,182,212" : service.color === "green" ? "16,185,129" : "245,158,11"}, 0.4)`,
                                `0 0 0 10px rgba(${service.color === "purple" ? "147,51,234" : service.color === "cyan" ? "6,182,212" : service.color === "green" ? "16,185,129" : "245,158,11"}, 0)`,
                                `0 0 0 0 rgba(${service.color === "purple" ? "147,51,234" : service.color === "cyan" ? "6,182,212" : service.color === "green" ? "16,185,129" : "245,158,11"}, 0.4)`,
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: activeService === index ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                      }}
                    >
                      {activeService === index && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/20"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.button>

                    {/* Service Label */}
                    <motion.div
                      className={`absolute left-8 whitespace-nowrap px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                        activeService === index
                          ? `bg-${service.color}-500/20 border-${service.color}-500/50 text-${service.color}-400 opacity-100`
                          : "bg-gray-900/80 border-gray-700/50 text-gray-400 opacity-0 group-hover:opacity-100"
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: activeService === index ? 1 : 0,
                        x: activeService === index ? 0 : -10,
                      }}
                    >
                      <span className="text-sm font-medium">{service.title}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Content */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="min-h-[80vh] flex items-center"
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <motion.div
                    className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div>
                      <motion.div
                        className={`inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-${service.color}-500/20 mb-6`}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      >
                        <div className={`text-${service.color}-400`}>{service.icon}</div>
                        <span className={`text-sm font-medium text-${service.color}-400`}>{service.subtitle}</span>
                      </motion.div>

                      <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">{service.title}</h3>

                      <p className="text-lg text-gray-400 leading-relaxed mb-8">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: false }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`text-${service.color}-400`}>{feature.icon}</div>
                          <span className="text-gray-300">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {service.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: statIndex * 0.1 }}
                          viewport={{ once: false }}
                          className={`text-center p-4 bg-gradient-to-br ${service.bgGradient} rounded-xl border border-${service.color}-500/20`}
                        >
                          <div className={`text-2xl font-bold text-${service.color}-400 mb-1`}>{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          viewport={{ once: false }}
                        >
                          <Badge className="bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-gray-600">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                      onClick={() => window.location.href = `/projects/${service.company}`}
                        className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-${service.color}-500/25 text-white px-8 py-3 text-lg font-medium`}
                      >
                        {service.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced UI Graphics */}
                  <motion.div
                    className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <ServiceUIGraphic service={service} index={index} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced UI Graphics Components
function ServiceUIGraphic({ service, index }: { service: any; index: number }) {
  const getServiceGraphic = () => {
    switch (service.id) {
      case "training":
        return <TrainingUIGraphic service={service} />
      case "product-mgmt":
        return <ProductManagementUIGraphic service={service} />
      case "content":
        return <ContentSEOUIGraphic service={service} />
      case "skills":
        return <TechStackUIGraphic service={service} />
      default:
        return <TrainingUIGraphic service={service} />
    }
  }

  return (
    <div className="relative">
      {/* Background Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-3xl blur-3xl`}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Main UI Container */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 overflow-hidden">
        {getServiceGraphic()}
      </div>
    </div>
  )
}

function TrainingUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Training Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white font-semibold">Smiths Detection Training Hub</h3>
            <span className="text-xs text-purple-300">Sep 2024 – Jun 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Active</span>
          </div>
        </div>
        
        {/* Training Modules */}
        <div className="space-y-3">
          {[
            { name: "LCD Detection System", progress: 95, status: "completed" },
            { name: "Hi-Trax Scanner Training", progress: 87, status: "active" },
            { name: "XDi Technology Overview", progress: 92, status: "completed" },
            { name: "Trace Detection Protocol", progress: 76, status: "active" },
          ].map((module, i) => (
            <motion.div
              key={i}
              className="bg-gray-700/50 rounded-lg p-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white font-medium">{module.name}</span>
                <div className="flex items-center space-x-2">
                  {module.status === "completed" ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <motion.div 
                      className="w-4 h-4 border-2 border-purple-400 rounded-full border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  )}
                  <span className="text-xs text-purple-400 font-mono">{module.progress}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-1.5">
                <motion.div
                  className="bg-purple-500 h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${module.progress}%` }}
                  transition={{ duration: 2, ease: "easeOut", delay: i * 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learner Feedback Stats */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-purple-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Learner Rating</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400">8.2/10</div>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-gray-600'}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-pink-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Time Saved</span>
            <Zap className="w-4 h-4 text-pink-400" />
          </div>
          <div className="text-2xl font-bold text-pink-400">28%</div>
          <div className="text-xs text-pink-300 mt-1">Training Efficiency</div>
        </motion.div>
      </div>

      {/* Training Asset Library */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-3">Standardized Assets</div>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded border border-purple-500/30 flex items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.4 }}
            >
              <FileText className="w-4 h-4 text-purple-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductManagementUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Product Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white font-semibold">Saumya Vidyut Product Hub</h3>
            <span className="text-xs text-cyan-300">Nov 2023 – Aug 2024</span>
          </div>
          <Rocket className="w-5 h-5 text-cyan-400" />
        </div>
        
        {/* Active Projects */}
        <div className="space-y-3">
          {[
            { project: "Transformer Efficiency Tool", progress: 85, impact: "18% boost" },
            { project: "Tender Tracking System", progress: 100, impact: "Automated" },
            { project: "Billing Automation", progress: 73, impact: "In Progress" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-700/50 rounded-lg p-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white font-medium">{item.project}</span>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 text-xs border-cyan-500/30">
                    {item.impact}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-600 rounded-full h-2">
                  <motion.div
                    className="bg-cyan-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 2, ease: "easeOut", delay: i * 0.3 }}
                  />
                </div>
                <span className="text-xs text-cyan-400 font-mono">{item.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Analytics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-cyan-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Efficiency Gain</span>
            <Gauge className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-cyan-400">+18%</div>
          <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
            <motion.div
              className="bg-cyan-500 h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-blue-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Process Impact</span>
            <Target className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-blue-400">High</div>
          <div className="text-xs text-blue-300 mt-1">Stakeholder Feedback</div>
        </motion.div>
      </div>

      {/* Product Roadmap */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-3">Development Pipeline</div>
        <div className="space-y-2">
          {[
            { phase: "Research & Analysis", status: "completed" },
            { phase: "Product Fit Analysis", status: "completed" },
            { phase: "Documentation Design", status: "active" },
            { phase: "User Testing", status: "pending" },
          ].map((phase, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-3 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  phase.status === "completed" ? "bg-green-400" : 
                  phase.status === "active" ? "bg-cyan-400" : "bg-gray-600"
                }`}
                animate={phase.status === "active" ? { 
                  scale: [1, 1.2, 1], 
                  opacity: [0.7, 1, 0.7] 
                } : {}}
                transition={{ 
                  duration: 1.5, 
                  repeat: phase.status === "active" ? Number.POSITIVE_INFINITY : 0 
                }}
              />
              <span className="text-sm text-white">{phase.phase}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContentSEOUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Content Performance Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 border border-green-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white font-semibold">StarAgile Content Studio</h3>
            <span className="text-xs text-green-300">Sep 2022 – Oct 2023</span>
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        
        {/* Content Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-700/50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Articles Published</span>
              <FileText className="w-3 h-3 text-green-400" />
            </div>
            <div className="text-xl font-bold text-green-400">150+</div>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Organic Growth</span>
              <BarChart className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-emerald-400">+60%</div>
          </div>
        </div>

        {/* Email & Campaign Analytics */}
        <div className="bg-gray-700/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-300">CleverTap Campaign Performance</span>
            <Mail className="w-4 h-4 text-green-400" />
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-green-400">0.12%</div>
              <div className="text-xs text-gray-400">Initial Rate</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 self-center justify-self-center" />
            <div>
              <div className="text-lg font-bold text-emerald-400">3.56%</div>
              <div className="text-xs text-gray-400">Optimized Rate</div>
            </div>
          </div>
          <div className="mt-3 flex space-x-1">
            {["Google", "Meta", "LinkedIn"].map((platform, i) => (
              <motion.div
                key={i}
                className="flex-1 text-center py-1 bg-green-500/20 rounded text-xs text-green-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Email & Campaign Analytics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-green-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Email Optimization</span>
            <Mail className="w-4 h-4 text-green-400" />
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <div className="text-sm font-bold text-red-400">0.12%</div>
            <ArrowRight className="w-3 h-3 text-gray-400" />
            <div className="text-lg font-bold text-green-400">3.56%</div>
          </div>
          <div className="text-xs text-green-300">A/B Testing Success</div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-emerald-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Landing Pages</span>
            <MousePointer className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400">+15%</div>
          <div className="text-xs text-emerald-300 mt-1">Conversion Boost</div>
        </motion.div>
      </div>

      {/* Content Topics and Platforms */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-3">Content Categories & Platforms</div>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {[
              { topic: "AI", size: "large" },
              { topic: "Product Management", size: "large" },
              { topic: "Agile", size: "medium" },
              { topic: "Scrum", size: "medium" },
              { topic: "Tech Strategy", size: "small" },
            ].map((tag, i) => (
              <motion.div
                key={i}
                className={`px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 ${
                  tag.size === "large" ? "text-sm font-medium" : tag.size === "medium" ? "text-xs" : "text-xs opacity-75"
                }`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 3, 
                  repeat: Number.POSITIVE_INFINITY, 
                  delay: i * 0.5 
                }}
              >
                <span className="text-green-400">{tag.topic}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Campaign Platforms */}
          <div className="pt-2 border-t border-gray-700">
            <div className="text-xs text-gray-500 mb-2">Campaign Platforms</div>
            <div className="flex space-x-3">
              {["CleverTap", "Google Ads", "Meta", "LinkedIn"].map((platform, i) => (
                <motion.div
                  key={i}
                  className="text-xs px-2 py-1 bg-green-500/10 text-green-300 rounded border border-green-500/20"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Number.POSITIVE_INFINITY, 
                    delay: i * 0.4 
                  }}
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TechStackUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Tech Stack Overview */}
      <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Technology Arsenal</h3>
          <Cpu className="w-5 h-5 text-yellow-400" />
        </div>
        
        {/* Tech Categories */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { 
              category: "Data & Analytics", 
              tools: ["Power BI", "SQL", "Excel"], 
              icon: <Database className="w-4 h-4" />,
              color: "yellow"
            },
            { 
              category: "Development", 
              tools: ["CMS", "APIs", "Git"], 
              icon: <Code className="w-4 h-4" />,
              color: "orange"
            },
            { 
              category: "Project Management", 
              tools: ["Scrum", "Agile", "Jira"], 
              icon: <Settings className="w-4 h-4" />,
              color: "amber"
            },
            { 
              category: "AI & Automation", 
              tools: ["GPT", "Claude", "Automation"], 
              icon: <Brain className="w-4 h-4" />,
              color: "yellow"
            },
          ].map((stack, i) => (
            <motion.div
              key={i}
              className="bg-gray-700/50 rounded-lg p-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className={`text-${stack.color}-400`}>{stack.icon}</div>
                <span className="text-sm text-white font-medium">{stack.category}</span>
              </div>
              <div className="space-y-1">
                {stack.tools.map((tool, j) => (
                  <motion.div
                    key={j}
                    className={`text-xs px-2 py-1 bg-${stack.color}-500/20 text-${stack.color}-400 rounded border border-${stack.color}-500/30 inline-block mr-1`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Number.POSITIVE_INFINITY, 
                      delay: (i * 0.5) + (j * 0.2) 
                    }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Proficiency */}
      <div className="bg-gray-800 rounded-lg p-4 border border-yellow-500/10">
        <div className="text-sm text-gray-400 mb-3">Skill Proficiency</div>
        <div className="space-y-3">
          {[
            { skill: "Power BI", level: 95, category: "advanced" },
            { skill: "SQL", level: 88, category: "advanced" },
            { skill: "Content Strategy", level: 92, category: "expert" },
            { skill: "Project Management", level: 90, category: "advanced" },
            { skill: "AI Integration", level: 85, category: "advanced" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-sm text-white min-w-[120px]">{skill.skill}</span>
                <div className="flex-1 bg-gray-600 rounded-full h-2 w-32">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 2, ease: "easeOut", delay: i * 0.2 }}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-yellow-400 font-mono">{skill.level}%</span>
                <Badge className={`text-xs ${
                  skill.category === "expert" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                  "bg-orange-500/20 text-orange-400 border-orange-500/30"
                }`}>
                  {skill.category}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification & Learning */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-yellow-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Certifications</span>
            <Award className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-yellow-400">3+</div>
          <div className="text-xs text-yellow-300 mt-1">Active & Current</div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 rounded-lg p-4 border border-orange-500/20" 
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Tools Mastered</span>
            <Sparkles className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-2xl font-bold text-orange-400">15+</div>
          <div className="text-xs text-orange-300 mt-1">Production Ready</div>
        </motion.div>
      </div>

      {/* Live Dashboard Simulation */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-3">Live Analytics Dashboard</div>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded border border-yellow-500/30 flex flex-col items-center justify-center"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Number.POSITIVE_INFINITY, 
                delay: i * 0.5 
              }}
            >
              <PieChart className="w-4 h-4 text-yellow-400 mb-1" />
              <span className="text-xs text-yellow-300">
                {["Users", "Revenue", "Growth", "Retention", "CTR", "ROI"][i]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}