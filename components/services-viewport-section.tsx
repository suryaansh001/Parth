"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Users,
  Package,
  Laptop,
  Lightbulb,
  Award,
  Zap,
  Layers,
  Cog,
  Gauge,
  Database,
  Sparkles,
  Target,
  BarChart,
  TrendingUp,
  Shield,
  Cloud,
  Activity,
  Calendar,
  MapPin,
  Building,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Import project components
import SaumyaVidyutPage from "@/app/projects/saumya-vidyut/page"
import SmithsDetectionPage from "@/app/projects/smiths-detection/page"
import StarAgileAdsPage from "@/app/projects/staragile-ads/page"

const projects = [
  {
    id: "smiths-detection",
    title: "Smiths Detection",
    subtitle: "Instructional Design & Product Training",
    description:
      "Designed and delivered training material for security systems and defense-grade detection systems like LCD, Hi-Trax, XDi, and Trace. Turned complex tech into digestible content for global government agencies.",
    icon: <Users className="w-8 h-8" />,
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10",
    features: [
      { icon: <Zap className="w-5 h-5" />, text: "Converted raw tech inputs into structured training" },
      { icon: <Award className="w-5 h-5" />, text: "Bridged teams across engineering, SMEs, and users" },
      { icon: <Layers className="w-5 h-5" />, text: "Built first-ever training for undocumented tech" },
      { icon: <Cog className="w-5 h-5" />, text: "Used Agile and Scrum for better and faster output" },
    ],
    stats: [
      { label: "Trainings Built", value: "12+" },
      { label: "Learner Rating", value: "8.2/10" },
      { label: "Training Time Saved", value: "28%" },
    ],
    technologies: ["Trace", "LCD", "Hi-Trax", "XDi"],
    cta: "View Project Details",
    period: "Sep 2024 – Jun 2025",
    role: "Instructional Designer – Product Training",
    company: "Smiths Detection",
    component: SmithsDetectionPage,
  },
  {
    id: "saumya-vidyut",
    title: "Saumya Vidyut",
    subtitle: "Product Management & Process Optimization",
    description:
      "Redesigned and rebuilt industrial transformers for higher energy efficiency, and co-developed a smart internal tool to monitor government tenders, track product fit, and manage documentation.",
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
      { label: "Tool Built", value: "TendeX" },
      { label: "Process Impact", value: "High" },
    ],
    technologies: ["Agile", "Product Fit Analysis", "Documentation"],
    cta: "View Project Details",
    period: "Nov 2023 – Aug 2024",
    role: "Associate Product Manager",
    company: "Saumya Vidyut",
    component: SaumyaVidyutPage,
  },
  {
    id: "staragile-ads",
    title: "StarAgile",
    subtitle: "Content strategy & Campaign Optimization",
    description:
      "Blended content strategy with ad performance across Meta, Google, LinkedIn & CleverTap. Personalized campaign messaging and optimized landing content—lifting email engagement by 3.4x and driving qualified lead acquisition.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "yellow",
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-400/10 to-orange-500/10",
    features: [
      { icon: <Activity className="w-5 h-5" />, text: "Email open rates: 0.12% → 3.56%" },
      { icon: <Target className="w-5 h-5" />, text: "Multi-platform campaign management" },
      { icon: <BarChart className="w-5 h-5" />, text: "Advanced segmentation & targeting" },
      { icon: <Zap className="w-5 h-5" />, text: "Performance optimization via A/B testing" },
    ],
    stats: [
      { label: "Agile, Product, Project & Tech Content", value: "✍️ 150+ Blogs Authored" },
      { label: "Across Ads, Email & Social Campaigns", value: "🎯 3,800+ Leads Generated" },
      { label: "Achieved via Content-Led Social Strategy", value: "📢 41% Higher Engagement" },
    ],
    technologies: ["CleverTap", "Meta Ads", "Google Ads", "LinkedIn Ads"],
    cta: "View Project Details",
    period: "Sep 2022 – Oct 2023",
    role: "Marketing and Content Strategist",
    company: "StarAgile",
    component: StarAgileAdsPage,
  },
]

export function ServicesViewportSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

 

  const scrollToProject = (index: number) => {
    setActiveProject(index)
    projectRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  const openProjectModal = (projectId: string) => {
    setSelectedProject(projectId)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  // Get selected project component
  const selectedProjectData = projects.find(p => p.id === selectedProject)
  const ProjectComponent = selectedProjectData?.component

  return (
    <>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && ProjectComponent && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="relative w-full h-full max-w-7xl max-h-[95vh] bg-background rounded-lg overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Render Project Component */}
              <ProjectComponent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="projects" className="relative py-20 px-4 sm:px-6 bg-black overflow-hidden">
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
              <span className="text-white">Products That  </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Transform
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to accelerate business growth through strategic product management, training design, and content optimization.
            </p>
          </motion.div>

          <div className="relative">
            {/* Fixed Navigation Dots - Only show when projects section is visible */}
            {isVisible && (
              <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
                <div className="flex flex-col items-center space-y-6">
                  {projects.map((project, index) => (
                    <div key={project.id} className="relative flex items-center group">
                      {/* Connecting Line */}
                      {index < projects.length - 1 && (
                        <div className="absolute top-6 left-1/2 w-0.5 h-6 bg-gray-700 transform -translate-x-1/2" />
                      )}

                      {/* Enhanced Dot Button */}
                      <motion.button
                        onClick={() => scrollToProject(index)}
                        className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                          activeProject === index
                            ? `bg-${project.color}-500 border-${project.color}-500 shadow-lg shadow-${project.color}-500/50`
                            : "bg-transparent border-gray-600 hover:border-gray-400"
                        }`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        animate={
                          activeProject === index
                            ? {
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                  `0 0 0 0 rgba(${project.color === "purple" ? "147,51,234" : project.color === "cyan" ? "6,182,212" : project.color === "green" ? "16,185,129" : "245,158,11"}, 0.4)`,
                                  `0 0 0 10px rgba(${project.color === "purple" ? "147,51,234" : project.color === "cyan" ? "6,182,212" : project.color === "green" ? "16,185,129" : "245,158,11"}, 0)`,
                                  `0 0 0 0 rgba(${project.color === "purple" ? "147,51,234" : project.color === "cyan" ? "6,182,212" : project.color === "green" ? "16,185,129" : "245,158,11"}, 0.4)`,
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: activeProject === index ? Number.POSITIVE_INFINITY : 0,
                          ease: "easeInOut",
                        }}
                      >
                        {activeProject === index && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-white/20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </motion.button>

                      {/* Project Label */}
                      <motion.div
                        className={`absolute left-8 whitespace-nowrap px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                          activeProject === index
                            ? `bg-${project.color}-500/20 border-${project.color}-500/50 text-${project.color}-400 opacity-100`
                            : "bg-gray-900/80 border-gray-700/50 text-gray-400 opacity-0 group-hover:opacity-100"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: activeProject === index ? 1 : 0,
                          x: activeProject === index ? 0 : -10,
                        }}
                      >
                        <span className="text-sm font-medium">{project.title}</span>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Content */}
            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Project Info */}
                    <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} space-y-8`}>
                      {/* Header */}
                      <div className="space-y-4">
                        <motion.div
                          className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r ${project.bgGradient} border border-white/10`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`p-2 rounded-full bg-gradient-to-r ${project.gradient}`}>
                            {project.icon}
                          </div>
                          <span className="text-sm font-medium text-white">{project.role}</span>
                        </motion.div>

                        <div>
                          <h3 className="text-4xl sm:text-5xl font-black mb-2 text-white">
                            {project.title}
                          </h3>
                          <p className={`text-xl font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.subtitle}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span>{project.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{project.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          >
                            <div className={`text-${project.color}-400`}>
                              {feature.icon}
                            </div>
                            <span className="text-sm text-gray-300">{feature.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => openProjectModal(project.id)}
                          className={`bg-gradient-to-r ${project.gradient} text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
                        >
                          <span className="mr-2">{project.cta}</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Project Stats/Visual */}
                    <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                      <motion.div
                        className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.bgGradient} border border-white/10 backdrop-blur-sm`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 gap-6">
                          {project.stats.map((stat, statIndex) => (
                            <motion.div
                              key={statIndex}
                              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: statIndex * 0.1 }}
                            >
                              <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>

                        
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
