"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface WeekEntry {
  week: number
  title: string
  content: string
  expanded?: boolean
}

export default function CareerSkillsPage() {
  const [weeks, setWeeks] = useState<WeekEntry[]>([
    {
      week: 1,
      title: "Personal Profiling",
      content: "Explored our unique strengths, weaknesses, and goals to build a strong personal brand.",
      expanded: false,
    },
    {
      week: 2,
      title: "Podcast Creation",
      content: "Recorded a short podcast discussing key values and how they shape our career paths.",
      expanded: false,
    },
    {
      week: 3,
      title: "Presentation Skills",
      content: "Delivered a class presentation — learning how to communicate ideas clearly and confidently.",
      expanded: false,
    },
    {
      week: 4,
      title: "Team Collaboration",
      content: "Worked in groups to reflect on communication gaps and team productivity.",
      expanded: false,
    },
    {
      week: 5,
      title: "Time Management",
      content: "Practiced scheduling and prioritizing work with new planning techniques.",
      expanded: false,
    },
    {
      week: 6,
      title: "Reflective Writing",
      content: "Learned how to track weekly growth and summarize takeaways effectively.",
      expanded: false,
    },
  ])

  const toggleExpand = (index: number) => {
    setWeeks(
      weeks.map((week, i) => {
        if (i === index) {
          return { ...week, expanded: !week.expanded }
        }
        return week
      }),
    )
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Career Skills Journal
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Weekly reflection of personal growth, communication, and career-building skills.
        </p>

        <div className="space-y-6">
          {weeks.map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm">
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <h2 className="text-xl font-semibold">
                      Week {week.week}: {week.title}
                    </h2>
                    {!week.expanded && <p className="text-sm text-muted-foreground mt-1">{week.content}</p>}
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    {week.expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </Button>
                </div>

                {week.expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground mb-4">{week.content}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="aspect-video relative rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center">
                        <div className="text-muted-foreground text-sm">Image Placeholder 1</div>
                      </div>
                      <div className="aspect-video relative rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center">
                        <div className="text-muted-foreground text-sm">Image Placeholder 2</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="text-xs">
                        Upload Images
                      </Button>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
