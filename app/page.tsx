"use client"

import { useState } from "react"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { SpinningEarth } from "@/components/spinning-earth"
import { TypingHero } from "@/components/typing-hero"
import { AboutMe } from "@/components/about-me"
import { motion } from "framer-motion"
import { Calendar, Mail, Users, Phone, MessageCircle, MapPin, GraduationCap, Briefcase, Award, Code, Building, ExternalLink, CheckCircle, Star, TrendingUp, Globe ,ArrowUpRight,TrendingUp,
  TrendingDown,
  BarChart2,
  FileText,
  X,
} from "lucide-react"
import { ServicesViewportSection } from "@/components/services-viewport-section"

export default function Home() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setShowSuccessDialog(true)
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // You could add error handling here if needed
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      name: "Email",
      value: "parthwork25@gmail.com",
      icon: Mail,
      href: "mailto:parthwork25@gmail.com",
      description: "Drop me an email anytime"
    },
    {
      name: "Phone",
      value: "+91 7413882466",
      icon: Phone,
      href: "tel:+917413882466",
      description: "Call for urgent matters"
    },
    {
      name: "WhatsApp",
      value: "Message me",
      icon: MessageCircle,
      href: "https://wa.me/917413882466",
      description: "Quick chat on WhatsApp"
    },
    {
      name: "LinkedIn",
      value: "Connect with me",
      icon: ExternalLink,
      href: "#",
      description: "Professional networking"
    }
  ]

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Mechatronics Engineering",
      institution: "Lovely Professional University (LPU)",
      year: "Jul 2019 – Jul 2023",
      grade: "Graduated"
    }
  ]

  const experience = [
    {
      role: "Instructional Designer – Product Training",
      company: "Smiths Detection",
      period: "Sep 2024 – Jun 2025",
      description: "Developed 12+ technical training programs for mission-critical defense equipment used globally. Collaborated with SMEs, engineers & service teams to build user-centric learning journeys.",
      achievements: [
        "Reduced technical staff training time by 28% through modular, simplified content",
        "Achieved an average learner satisfaction rating of 8.2/10 via iterative feedback loops",
        "Standardized 30+ training assets for structural consistency and scalability"
      ]
    },
    {
      role: "Associate Product Manager",
      company: "Saumya Vidyut",
      period: "Nov 2023 – Aug 2024",
      description: "Improved transformer efficiency by 18% through process and feedback optimization. Co-developed an internal tool for managing tenders and billing with features like competitor tracking and product fit suggestions.",
      achievements: [
        "Created comprehensive training manuals and structured documentation",
        "Led user-focused product documentation strategies aligned with stakeholder goals"
      ]
    },
    {
      role: "Content Writer – Product & Tech",
      company: "StarAgile",
      period: "Sep 2022 – Oct 2023",
      description: "Authored 150+ SEO-optimized articles on topics like AI, Agile, Scrum, and Product Management — driving a 60% boost in organic reach.",
      achievements: [
        "Increased landing page conversions by 15% through user-focused content and UX collaboration",
        "Managed Clevertap and performance ad campaigns across Google, Meta, and LinkedIn",
        "Raised email open rates from 0.12% to 3.56% using A/B testing and segmentation",
        "Delivered custom training programs tailored to business skill gaps and growth needs"
      ]
    }
  ]

  const skills = [
    "Product Requirement Gathering",
    "User Research & Journey Mapping",
    "Agile & Scrum Methodologies",
    "Sprint Planning & Backlog Prioritization",
    "Cross-functional Collaboration",
    "Stakeholder Communication",
    "Technical Documentation",
    "Content Strategy & CMS Management",
    "SEO & A/B Testing",
    "Power BI & SQL",
    "Campaign Optimization (Google, Meta, LinkedIn)",
    "GenAI Integration"
  ]

  const certifications = [
    "Certified Scrum Master – Scrum Alliance",
    "Product Management: An Introduction",
    "Microsoft AI Product Manager Professional Certificate"
  ]

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        {/* Spinning Earth */}
        <div className="opacity-10">
          
        </div>
        
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <NavBar />

        {/* Hero section with full-width translucent card */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6 w-full">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <TypingHero />
                
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-6"></div>

{/* Quick stats or highlights */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
  <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
    <ArrowUpRight className="w-8 h-8 text-green-400 mx-auto mb-2" />
    <div className="text-2xl font-bold text-white">60%</div>
    <div className="text-sm text-white/70">Organic reach increase</div>
  </div>

  <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
    <BarChart2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
    <div className="text-2xl font-bold text-white">22.5%</div>
    <div className="text-sm text-white/70">Increase in conversions</div>
  </div>

  <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
    <TrendingDown className="w-8 h-8 text-red-400 mx-auto mb-2" />
    <div className="text-2xl font-bold text-white">25%</div>
    <div className="text-sm text-white/70">Rollout Time reduced</div>
  </div>

  <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
    <div className="flex justify-center items-center mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="relative">
          {star <= 4 ? (
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ) : star === 5 ? (
            <div className="relative">
              <Star className="w-4 h-4 text-yellow-400" />
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          ) : (
            <Star className="w-4 h-4 text-yellow-400" />
          )}
        </div>
      ))}
    </div>
    <div className="text-2xl font-bold text-white">8.2</div>
    <div className="text-sm text-white/70">Satisfaction Rating</div>
  </div>

  <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
    <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
    <div className="text-2xl font-bold text-white">45+</div>
    <div className="text-sm text-white/70">Assets Built</div>
  </div>

  <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
    <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
    <div className="text-2xl font-bold text-white">150+</div>
    <div className="text-sm text-white/70">Blogs Authored</div>
  </div>
</div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Services viewport section */}
        <ServicesViewportSection />

        {/* About Me section with full-width translucent card */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="text-white">About </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                    Me
                  </span>
                </h2>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </motion.div>
              <AboutMe />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            <motion.div
              className="backdrop-blur-lg bg-card/90 border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">My </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                  Education
                </span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </motion.div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{education[0].degree}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">{education[0].field}</p>
                  <p className="text-muted-foreground text-sm mb-2">{education[0].institution}</p>
                  <span className="text-sm text-muted-foreground bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">
                    {education[0].year}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="backdrop-blur-lg bg-card/90 border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="text-foreground">Work </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Experience
                  </span>
                </h2>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>

              <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-lg bg-card/80 border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      {exp.achievements && (
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            

            <motion.div
              className="backdrop-blur-lg bg-card/80 border border-border rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">My </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Skills
                </span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/30 border border-border/50 hover:bg-background/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Code className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* Certifications Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">My </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                  Certifications
                </span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </motion.div>

            <motion.div
              className="backdrop-blur-lg bg-card/80 border border-border rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-background/30 border border-border/50 hover:bg-background/50 transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact section with full-width translucent card */}
        <section id="contact" className="relative">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <motion.h2
                  className="text-4xl sm:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white">Get in </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                    Touch
                  </span>
                </motion.h2>
                <motion.div
                  className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.p
                  className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Have a project in mind or want to collaborate? I'd love to hear from you.{" "}
                  Send me a message and I'll get back to you as soon as possible.
                </motion.p>
              </div>

              {/* Contact Methods Cards */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {contactMethods.map((method, index) => (
                    <Link
                      key={index}
                      href={method.href}
                      className="group p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-emerald-400/50"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <method.icon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-sm text-white">{method.name}</div>
                          <div className="text-xs text-white/70 mt-1">{method.description}</div>
                          <div className="text-sm font-medium text-emerald-400 mt-2">
                            {method.value}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="max-w-2xl mx-auto">
                  {/* Contact Form using Formspree */}
                  <form
                    action="https://formspree.io/f/xeozklrl"
                    method="POST"
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-left text-white">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-left text-white">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your E-mail"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-left text-white">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-left text-white">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-vertical"
                        placeholder="What's on your mind?"
                      />
                    </div>

                    {/* Hidden field to capture form source */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
                    <input type="hidden" name="_next" value="https://parth-bice.vercel.app/" />

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-lg hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <Mail className="w-5 h-5" />
                          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </span>
                      </button>
                    </div>
                  </form>

                  <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="text-sm font-medium text-white">Email</div>
                        <p className="text-sm text-white/70">parthwork25@gmail.com</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="text-sm font-medium text-white">Response Time</div>
                        <p className="text-sm text-white/70">Within 24 hours</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="text-sm font-medium text-white">Availability</div>
                        <p className="text-sm text-white/70">Open for projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Dialog */}
        {showSuccessDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
            >
              <div className="text-center space-y-6">
                <div className="text-6xl">🎉</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-white/80 leading-relaxed">
                    Thank you for reaching out! 😊 I've successfully received your message and will get back to you soon. 
                    Thanks for contacting me! 🚀
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccessDialog(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Close
                </button>
              </div>
              <button
                onClick={() => setShowSuccessDialog(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          </div>
        )}

        <Footer />
      </div>
    </main>
  )
}