"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Zap,
  Target,
  Package,
  Settings,
  CheckCircle,
  Building,
  Lightbulb,
  AlertCircle,
  Search,
  FileText,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SaumyaVidyutPage() {
  const openPDFReport = () => {
    window.open('/images/project_images/saumya-electricals/saumyaElectricals.pdf', '_blank')
  }

  const projects = [
    {
      id: 1,
      title: "TendeX – Government Tender Intelligence Tool",
      role: "Assistant Product Manager | Product Ideation & Process Automation",
      icon: <Search className="w-8 h-8" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      problem: "Create a centralized, intelligent system to automate the discovery, evaluation, and management of government tenders relevant to the company's product offerings, eliminating manual tracking, reducing delays, and improving success rates.",
      impediments: [
        "Tender data was scattered across multiple government websites with no unified access",
        "Manual evaluation led to missed deadlines, mismatched product fit, and incomplete submissions",
        "No system existed to track competitors, compliance standards, or historical bidding insights",
        "Limited technical framework and no prior product to build upon internally"
      ],
      approach: [
        "Mapped the complete tender lifecycle from discovery to documentation and post-submission analysis",
        "Designed the architecture for TendeX, a smart internal tool capable of scraping live tender data from government portals",
        "Integrated logic to match tenders with relevant company products based on technical fit, standards, and compliance requirements",
        "Included modules for deadline alerts, required documentation, clearance workflows, and competitor eligibility analysis",
        "Created a scalable foundation for cross-functional teams to collaborate and track tender activities in real-time"
      ],
      features: [
        "Live Tender Scraping: Automatically extracts tender information from government websites",
        "Product–Tender Matching: Matches tenders with company products based on technical specs and fit",
        "Deadline & Alert System: Notifies teams of key dates, submission deadlines, and documentation requirements",
        "Compliance & Benchmarking: Checks compliance requirements, certifications, and industry standards",
        "Competitor Intelligence: Identifies eligible competitors and analyzes their product positioning",
        "Document Checklist: Generates lists of required pre-approvals, clearances, and legal documentation",
        "Success Ratio Insights: Tracks past tender performance to inform bidding strategy",
        "Centralized Dashboard: Allows teams to track, assign, and manage tender actions collaboratively"
      ],
      outcome: "Successfully delivered a fully functional internal tool that automated tender tracking, improved internal coordination, reduced dependency on manual processes, and became a core system for sales and operations to evaluate and act on tenders with accuracy and speed."
    },
    {
      id: 2,
      title: "High-Efficiency Single & Three-Phase Transformers",
      role: "Assistant Product Manager | Product Improvement & Engineering Optimization",
      icon: <Zap className="w-8 h-8" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      problem: "Improve the energy efficiency of existing single-phase and three-phase transformers to reduce power loss, meet new efficiency standards, and enhance market competitiveness.",
      impediments: [
        "Existing transformer designs were underperforming in terms of energy loss and heat dissipation",
        "Product changes had to be made without compromising safety, reliability, or increasing manufacturing costs significantly",
        "Required alignment with industry compliance and testing benchmarks for power devices",
        "Cross-team coordination was essential across design, electrical, and production units"
      ],
      approach: [
        "Conducted a technical audit of the existing transformer design and identified inefficiencies in materials and structural layout",
        "Increased the cross-sectional area of the primary and secondary coils to reduce resistance and improve current handling",
        "Replaced the transformer core with higher-grade material to reduce hysteresis losses",
        "Enhanced insulation quality and upgraded the transformer oil to improve thermal performance and long-term stability",
        "Collaborated with the engineering team to validate changes and integrate improvements into the production line"
      ],
      features: [],
      outcome: "Successfully developed and deployed upgraded transformers that operated with significantly higher efficiency, aligning with industry standards and reducing power loss. The improved design enhanced product credibility and competitiveness while maintaining safety, cost-efficiency, and manufacturing viability."
    }
  ]

  const technologies = [
    "Product Management",
    "Process Automation",
    "Data Scraping",
    "System Architecture",
    "Engineering Optimization",
    "Technical Documentation",
    "Stakeholder Management",
    "Product Strategy",
    "Competitive Analysis",
    "Compliance Management"
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
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Saumya Vidyut</h1>
                <p className="text-xl text-muted-foreground">Assistant Product Manager</p>
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

          {/* Projects */}
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + projectIndex * 0.1 }}
              className="mb-16"
            >
              <Card className={`border ${project.borderColor} ${project.bgColor}`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${project.bgColor} p-3 rounded-xl ${project.color}`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">{project.title}</CardTitle>
                      <p className={`text-lg ${project.color}`}>{project.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Problem Statement */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Problem Statement
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Impediments */}
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Impediments
                    </h3>
                    <div className="space-y-3">
                      {project.impediments.map((impediment, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{impediment}</span>
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
                      {project.approach.map((approach, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features (only for TendeX) */}
                  {project.features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        Features
                      </h3>
                      <div className="space-y-3">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Package className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Outcome
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <ImageIcon className="w-6 h-6" />
                  Project Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Image
                      src="/images/project_images/saumya-electricals/saumay1.jpeg"
                      alt="Saumya Electricals Project Image 1"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <p className="text-sm text-muted-foreground text-center">Project Implementation</p>
                  </div>
                  <div className="space-y-2">
                    <Image
                      src="/images/project_images/saumya-electricals/saumya2.jpeg"
                      alt="Saumya Electricals Project Image 2"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <p className="text-sm text-muted-foreground text-center">Technical Development</p>
                  </div>
                  <div className="space-y-2">
                    <Image
                      src="/images/project_images/saumya-electricals/saumya3.jpeg"
                      alt="Saumya Electricals Project Image 3"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <p className="text-sm text-muted-foreground text-center">Final Results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Report */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Project Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Detailed Project Report</h4>
                    <p className="text-muted-foreground">Comprehensive analysis and documentation of project outcomes</p>
                  </div>
                  <Button
                    onClick={openPDFReport}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
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
        </div>
      </div>

      <Footer />
    </main>
  )
}
