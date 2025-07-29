"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Search,
  Filter,
  DollarSign,
  Users,
  ExternalLink,
  Eye,
  Star,
  BarChart3,
  Globe,
  Palette,
  Package,
} from "lucide-react"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const router = useRouter()

  const projects = [
    {
      id: "smiths-detection",
      name: "Smiths Detection",
      client: "Smiths Detection",
      
      status: "completed",
      completion: 100,
      rating: 5,
      description:
        "Developed 12+ technical training programs for defense-grade detection equipment like LCD, Hi-Trax, XDi & Trace. Simplified content reduced onboarding time by 28%.",
      logo: "/placeholder.svg",
      tags: ["Instructional Design", "Defense", "Modular Learning", "SME Collaboration"],
      featured: true,
    },
    {
      id: "staragile",
      name: "SEO Content Framework",
      client: "StarAgile",
      category: "branding",
      status: "completed",
      completion: 100,
      rating: 5,
      description:
        "Authored 150+ SEO-rich articles on Agile, Scrum, AI & Product Management. Boosted organic reach by 60% and improved conversion rates by 15%.",
      logo: "/placeholder.svg",
      tags: ["SEO", "Content Marketing", "Agile", "Google Analytics"],
      metrics: {
        revenue: "$1.1M",
        users: "40K+",
      },
    },
    {
      id: "staragile-ads",
      name: "Performance Ad Optimization",
      client: "StarAgile",
      category: "branding",
      status: "completed",
      completion: 100,
      rating: 4,
      description:
        "Managed Clevertap + performance ad campaigns across Meta, Google & LinkedIn. Email open rates jumped from 0.12% to 3.56% via targeted segmentation.",
      logo: "/placeholder.svg",
      tags: ["Meta Ads", "Google Ads", "Email Campaigns", "A/B Testing"],
      metrics: {
        revenue: "$500K+",
        users: "18K+",
      },
    
    },
  ]

  const categories = {
    all: { label: "All Projects", icon: Globe },
    web: { label: "Web-Based Tools", icon: Globe },
    branding: { label: "Content & Branding", icon: Palette },
  }

  const filters = Object.entries(categories).map(([key, { label }]) => {
    const count = key === "all" ? projects.length : projects.filter(p => p.category === key).length
    return { id: key, label, count }
  })

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || project.category === selectedFilter
    return matchesSearch && matchesFilter
  })

  const getCategoryIcon = (category: string) => {
    const categoryInfo = categories[category as keyof typeof categories]
    return categoryInfo ? <categoryInfo.icon className="w-4 h-4" /> : <Globe className="w-4 h-4" />
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-500 bg-green-500/10 border-green-500/20"
      case "in-progress":
        return "text-blue-500 bg-blue-500/10 border-blue-500/20"
      case "planning":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
      default:
        return "text-gray-500 bg-gray-500/10 border-gray-500/20"
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Projects <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">Showcase</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Real projects, real results. From training defense personnel to boosting SEO by 60% — this is what impact looks like.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-10 mt-10 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-lg"
              />
            </div>
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="text-muted-foreground w-5 h-5 flex-shrink-0" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all ${
                    selectedFilter === filter.id
                      ? "bg-primary/20 text-primary border border-primary/50"
                      : "bg-background/50 text-muted-foreground border border-border hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative cursor-pointer"
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <div className="bg-background/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {project.status === "in-progress" ? "In Progress" : "Completed"}
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">Featured</div>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                          <img
                            src={project.logo || "/placeholder.svg"}
                            alt={`${project.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(project.category)}
                          <h3 className="text-lg font-bold">{project.name}</h3>
                        </div>
                        {project.rating > 0 && (
                          <div className="flex items-center space-x-1">
                            {[...Array(project.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{project.client}</p>
                      <p className="text-sm text-foreground mb-4 line-clamp-2">{project.description}</p>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-muted-foreground">Progress</span>
                          <span className="text-xs text-primary">{project.completion}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2">
                          <motion.div
                            className="bg-primary rounded-full h-2"
                            initial={{ width: 0 }}
                            animate={{ width: `${project.completion}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded border border-border">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
