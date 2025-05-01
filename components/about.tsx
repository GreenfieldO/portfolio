"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Expertise in JavaScript, TypeScript, React.js, Node.js, and Laravel",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Cloud Solutions",
      description: "Proficient with AWS services including SQS, EventBridge, Lambda, and Step Functions",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Leadership",
      description: "Led diverse teams of 15+ members across development, design, DevOps, and QA",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Collaboration",
      description: "Coordinated with remote teams across the US, Australia, and Nepal",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experienced Senior Software Engineer with over five years of expertise as a Full Stack Developer,
              specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Skilled in designing scalable, secure, and efficient systems, with a proven track record of collaborating
              with remote, cross-functional teams across the US, Australia, and Nepal. Demonstrated success in
              delivering impactful solutions within highly regulated environments, including healthcare projects, with
              expertise in HIPAA and SOC2 compliance. Proficient in optimizing system performance and mentoring teams to
              achieve sustained technical excellence.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="animate-in" custom={index}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
