import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Science: Information Technology</h3>
                    <p className="text-muted-foreground">BlueCrest University College (2022)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Completed a study in Information Technology with a focus on software engineering, web development,
                    and database management. Gained practical experience through projects and internships, deepening and enhancing my
                    understanding of modern technologies and software development practices.
                  </p>
                </div>

                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Masters of Science: Information Technology</h3>
                    <p className="text-muted-foreground">Carnegie Mellon Univeristy Africa (2025)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Completed a degree in Information Technology specializing in software engineering, took courses in Advanced Database Management, Agile Methdology, Software Engineering, DevOps,Machine Learning and Distributed Systems.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
