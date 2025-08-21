import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Founder/CEO",
      company: "ByteBridge Systems Liberia",
      period: "Aug 2025 - Present",
      location: "Monrovia, Liberia",
      achievements: [
        "Leading the development of a classifed-ads websiteas well as an internet forum",
      
      ],
    },

    {
      title: "Founding Software Engineer/Tech Lead- Backend",
      company: "KAMERO LTD - A software Development Company focused on research digitization",
      period: "May 2024 - Dec 2024",
      location: "Kigali, Rwanda",
      achievements: [
        "Provided strategic guidance on the overall design and functionality of the web application.",
        "Designed and implemented a scalable backend Infrastructure for authentication and validation.",
      ],
    },
    {
      title: "Graduate Trainee",
      company: "Lonestar Cell MTN",
      period: "Dec 2021 - Jul 2023",
      location: "Monrovia, Liberia,",
      achievements: [
        "Built a web-based prototype to digitize the existing Manual Sim Registration process to help reduce costs and increase user convenience and flexibility.",
        "Created an automated analysis workbook for Call Detail Records (CDRs) and balance sheet reconciliation, reducing analysis time and errors by 85%.",
        "Led the closure of 200+ user acceptance test cases on new service delivery platforms, collaborating across geographies and managing internal bureaucracy for approvals with limited resources",
        "Managed a Key platform (Kapptivate) for monitoring and alerting the various platforms connected to it, ensuring daily, hourly, and minute logs.",
      ],
    },

    {
      title: "Software Engineer Intern",
      company: "Lonestar Cell MTN",
      period: "Jun 2021 - Nov 2021",
      location: "Monrovia, Liberia",
      achievements: [
        "Developed a web-based prototype to digitize the existing Manual Sim Registration process, reducing costs and increasing user convenience.",
        "Created an automated analysis workbook for Call Detail Records (CDRs) and balance sheet reconciliation, reducing analysis time and errors by 85%.",
        "Led the closure of 200+ user acceptance test cases on new service delivery platforms, collaborating across geographies and managing internal bureaucracy for approvals with limited resources.",
        "Managed a key platform (Kapptivate) for monitoring and alerting various connected platforms, ensuring daily, hourly, and minute logs.",
      ],
    },

  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
