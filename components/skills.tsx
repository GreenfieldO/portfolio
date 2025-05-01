"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "React.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "PHP", "Laravel", "Express.js", "RESTful APIs"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GitHub Actions", "Travis-CI", "Docker", "CI/CD"],
    },
    {
      category: "Tools & Methodologies",
      skills: ["Git", "Agile", "Scrum", "JIRA", "Figma"],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise and technical proficiencies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants} className="skill-card" custom={index}>
                <Card className="h-full border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
