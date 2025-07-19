"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  PenTool,
  BookOpen,
  FileText,
  Globe,
  MessageSquare,
  Palette,
  Video,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  CheckCircle,
  Target,
  TrendingUp,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Shield,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeProject, setActiveProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      id: "blog",
      title: "Blog Content Creation",
      shortTitle: "Blog Content",
      tagline: "Engaging Stories",
      description:
        "High-impact blog posts crafted to boost SEO, engage audiences, and establish thought leadership",
      icon: <PenTool className="w-12 h-12" />,
      gradient: "from-blue-500 via-cyan-400 to-blue-600",
      bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
      accentColor: "text-blue-400",
      price: "$2K - $20K",
      timeline: "2-8 weeks",
      rating: 4.9,
      projects: 300,
      keyFeatures: [
        "SEO-Optimized Content",
        "Keyword Research",
        "Engaging Storytelling",
        "Content Calendar Planning",
      ],
      results: "200% increase in organic traffic • 50% higher engagement • 90% client retention",
      technologies: ["WordPress", "Yoast SEO", "Grammarly", "Google Analytics"],
    },
    {
      id: "ebook",
      title: "E-book Development",
      shortTitle: "E-books",
      tagline: "Authority Building",
      description:
        "Professionally written e-books designed for lead generation and establishing industry expertise",
      icon: <BookOpen className="w-12 h-12" />,
      gradient: "from-purple-500 via-pink-400 to-purple-600",
      bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
      accentColor: "text-purple-400",
      price: "$5K - $30K",
      timeline: "4-12 weeks",
      rating: 4.8,
      projects: 120,
      keyFeatures: ["In-Depth Research", "Custom Formatting", "Lead Magnet Strategy", "Visual Design"],
      results: "10K+ leads generated • 85% conversion rate • 4x authority boost",
      technologies: ["Adobe InDesign", "Canva", "Google Docs", "Sigil"],
    },
    {
      id: "whitepaper",
      title: "White Paper Writing",
      shortTitle: "White Papers",
      tagline: "Thought Leadership",
      description:
        "Authoritative white papers that position your brand as an industry leader with data-driven insights",
      icon: <FileText className="w-12 h-12" />,
      gradient: "from-orange-500 via-red-400 to-orange-600",
      bgGradient: "from-orange-500/20 via-red-400/10 to-orange-600/20",
      accentColor: "text-orange-400",
      price: "$8K - $40K",
      timeline: "6-14 weeks",
      rating: 5.0,
      projects: 80,
      keyFeatures: ["Data Analysis", "Professional Formatting", "Research Citations", "Visual Infographics"],
      results: "95% client satisfaction • 60% lead conversion • 3x industry influence",
      technologies: ["LaTeX", "Microsoft Word", "Tableau", "Visme"],
    },
    {
      id: "website",
      title: "Website Copywriting",
      shortTitle: "Website Copy",
      tagline: "Conversion Driven",
      description:
        "Persuasive website content that converts visitors into customers with clear, compelling messaging",
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-emerald-500 via-teal-400 to-emerald-600",
      bgGradient: "from-emerald-500/20 via-teal-400/10 to-emerald-600/20",
      accentColor: "text-emerald-400",
      price: "$3K - $25K",
      timeline: "3-10 weeks",
      rating: 4.9,
      projects: 250,
      keyFeatures: ["Conversion-Focused Copy", "Brand Voice Development", "SEO Integration", "User-Centric Messaging"],
      results: "150% conversion increase • 70% bounce rate reduction • 80% user engagement",
      technologies: ["WordPress", "Squarespace", "Hotjar", "SEMRush"],
    },
    {
      id: "social",
      title: "Social Media Content",
      shortTitle: "Social Media",
      tagline: "Viral Engagement",
      description:
        "Trend-savvy social media posts designed to grow your online presence and spark audience interaction",
      icon: <MessageSquare className="w-12 h-12" />,
      gradient: "from-indigo-500 via-purple-400 to-indigo-600",
      bgGradient: "from-indigo-500/20 via-purple-400/10 to-indigo-600/20",
      accentColor: "text-indigo-400",
      price: "$1.5K - $15K",
      timeline: "2-6 weeks",
      rating: 4.8,
      projects: 400,
      keyFeatures: ["Platform-Specific Content", "Trend Analysis", "Engagement Strategies", "Hashtag Optimization"],
      results: "5x follower growth • 90% engagement rate • 3M+ impressions",
      technologies: ["Hootsuite", "Buffer", "Canva", "Sprout Social"],
    },
    {
      id: "uxwriting",
      title: "UX Writing",
      shortTitle: "UX Writing",
      tagline: "User-Centric Copy",
      description:
        "Microcopy that enhances user experience, improves navigation, and drives user engagement",
      icon: <Palette className="w-12 h-12" />,
      gradient: "from-pink-500 via-rose-400 to-pink-600",
      bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
      accentColor: "text-pink-400",
      price: "$2K - $20K",
      timeline: "2-8 weeks",
      rating: 4.9,
      projects: 180,
      keyFeatures: ["Clear Microcopy", "User Flow Optimization", "A/B Testing", "Tone Consistency"],
      results: "40% usability improvement • 95% user satisfaction • 30% task completion boost",
      technologies: ["Figma", "Google Docs", "UXPin", "Optimal Workshop"],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const currentProject = projects[activeProject]

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 opacity-40">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${currentProject.gradient} rounded-full blur-3xl animate-pulse transition-all duration-1000`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r ${currentProject.gradient} rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-lg font-bold text-primary">Our Content Projects</span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <h2 className="text-5xl sm:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-emerald-400 leading-tight">
              Content We
              <span className="block text-emerald-400">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From captivating blogs to conversion-driven copy, we craft content that drives engagement and results
            </p>
          </motion.div>

          {/* Interactive Project Showcase */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Project Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProject(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`group relative px-6 py-3 rounded-full border transition-all duration-300 ${
                    index === activeProject
                      ? `bg-gradient-to-r ${project.gradient} text-white border-transparent shadow-lg`
                      : "bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`${index === activeProject ? "text-white" : project.accentColor} transition-colors duration-300`}
                    >
                      {project.icon}
                    </div>
                    <span className="font-semibold">{project.shortTitle}</span>
                  </div>
                  {index === activeProject && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Main Project Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left side - Project details */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentProject.bgGradient} border border-primary/20`}
                    >
                      <Target className={`w-4 h-4 ${currentProject.accentColor}`} />
                      <span className={`text-sm font-bold ${currentProject.accentColor}`}>
                        {currentProject.tagline}
                      </span>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                      {currentProject.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{currentProject.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentProject.bgGradient} border border-primary/20`}
                    >
                      <div className={`text-2xl font-bold ${currentProject.accentColor}`}>{currentProject.price}</div>
                      <div className="text-sm text-muted-foreground">Investment</div>
                    </div>
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentProject.bgGradient} border border-primary/20`}
                    >
                      <div className="text-2xl font-bold text-foreground">{currentProject.timeline}</div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                    </div>
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentProject.bgGradient} border border-primary/20`}
                    >
                      <div className="text-2xl font-bold text-emerald-400">{currentProject.projects}+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${currentProject.accentColor}`} />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentProject.keyFeatures.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border/50"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentProject.gradient}`}></div>
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-r ${currentProject.bgGradient} border border-primary/20`}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className={`w-5 h-5 ${currentProject.accentColor}`} />
                      <span className={`font-bold ${currentProject.accentColor}`}>Proven Results</span>
                    </div>
                    <p className="text-foreground font-semibold">{currentProject.results}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className={`flex-1 bg-gradient-to-r ${currentProject.gradient} hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group`}
                    >
                      <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Start Your Project
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className={`flex-1 border-primary/50 ${currentProject.accentColor} hover:bg-primary/10`}
                    >
                      View Portfolio
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Right side - Visual showcase */}
                <div className="relative">
                  <div
                    className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentProject.bgGradient} border border-primary/20 backdrop-blur-sm`}
                  >
                    {/* Large icon */}
                    <div
                      className={`flex justify-center mb-8 text-gradient bg-gradient-to-r ${currentProject.gradient} p-8 rounded-2xl bg-white/10`}
                    >
                      <div className={`${currentProject.accentColor}`}>{currentProject.icon}</div>
                    </div>

                    {/* Rating and projects */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-2xl font-bold text-foreground">{currentProject.rating}</span>
                        <span className="text-muted-foreground">rating</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className={`w-5 h-5 ${currentProject.accentColor}`} />
                        <span className="text-2xl font-bold text-foreground">{currentProject.projects}+</span>
                        <span className="text-muted-foreground">projects</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground">Tools & Platforms</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${currentProject.gradient} text-white`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${currentProject.gradient} rounded-full opacity-20 blur-xl`}
                    ></div>
                    <div
                      className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${currentProject.gradient} rounded-full opacity-20 blur-xl`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="rounded-full border-primary/50 hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="ml-2 text-sm">{isAutoPlaying ? "Pause" : "Play"}</span>
                </Button>

                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeProject
                          ? `bg-gradient-to-r ${currentProject.gradient} w-8`
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="rounded-full border-primary/50 hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">Ready to elevate your content?</span>
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Content Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 px-12 py-4 text-lg"
              >
                <Target className="w-5 h-5 mr-2" />
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}