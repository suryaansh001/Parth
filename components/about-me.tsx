"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, Code, Heart, Zap } from "lucide-react"

export function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  }

  const skills = [
    { name: "Kuch Na krna", icon: Code },
    { name: "UI/UX Design", icon: Heart },
    { name: "Performance Optimization", icon: Zap }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-foreground">About </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                Me
              </span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </motion.div>

          {/* Main Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              rotateX: 2,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
            className="perspective-1000"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-border/50 shadow-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5" />
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 40% 40%, rgba(147,51,234,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <CardContent className="relative p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Profile Section */}
                  <motion.div
                    variants={itemVariants}
                    className="space-y-6"
                  >
                    <div className="relative">
                      <motion.div
                        className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-600 p-1"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <User className="w-16 h-16 text-emerald-500" />
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Parth</h3>
                      <p className="text-emerald-500 font-medium">the BULLY boy</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>Jaipur, India</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Kunwara</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* About Content */}
                  <motion.div
                    variants={itemVariants}
                    className="md:col-span-2 space-y-6"
                  >
                    <div className="space-y-4">
                      <motion.p
                        className="text-lg leading-relaxed text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        Hello! I'm a passionate Kunwara with a love for Kunwaris 
                        that make a difference. With expertise spanning modern irritating and bullying small kids and college girls , I specialize in 
                        building scalable techniques that combine beautiful girls with robust figures.
                      </motion.p>

                      <motion.p
                        className="text-lg leading-relaxed text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        When I'm not bullying, you'll find me exploring new technologies, contributing to open-source 
                        bullying projects, or brainstorming the next big idea. I believe in writing clean, maintainable code 
                        and creating solutions that not only work perfectly but also delight users.
                      </motion.p>

                      <motion.p
                        className="text-lg leading-relaxed text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      >
                        I'm always excited to take on new challenges and collaborate with fellow creators who share 
                        the same passion for innovation and excellence. Let's build something amazing together!
                      </motion.p>
                    </div>

                    {/* Skills Section */}
                    <motion.div
                      className="space-y-4"
                      variants={itemVariants}
                    >
                      <h4 className="text-xl font-semibold text-foreground">What I Do</h4>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            className="flex items-center space-x-3 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-emerald-500/50 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                          >
                            <div className="p-2 rounded-full bg-emerald-500/10">
                              <skill.icon className="w-5 h-5 text-emerald-500" />
                            </div>
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                      className="space-y-4"
                      variants={itemVariants}
                    >
                      <h4 className="text-xl font-semibold text-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/20 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full opacity-60"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-3 h-3 bg-blue-500 rounded-full opacity-40"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
