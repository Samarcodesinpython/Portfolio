"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Home, Upload, X, ImageIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface WeekEntry {
  week: number
  title: string
  summary: string
  content: string
  expanded?: boolean
  image?: string
}

export default function PESEJournalPage() {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [weeks, setWeeks] = useState<WeekEntry[]>([
    {
      week: 1,
      title: "Personal Profiling",
      summary: "Understanding strengths, weaknesses, and goals to build a personal brand.",
      content:
        "This week gave me a chance to really understand myself. I worked through a profiling exercise that helped me pinpoint my strengths, weaknesses, and goals. The in-class feedback made me rethink how I present myself, and I now feel more confident about what I want to pursue and how I describe it.",
      expanded: false,
      image: "",
    },
    {
      week: 2,
      title: "Podcast Creation",
      summary: "Creating a podcast reflecting core values and thoughts on self-growth.",
      content:
        "I created a podcast that reflected my core values and thoughts on self-growth. It was exciting to hear my own voice conveying something meaningful. Recording and editing the podcast helped me improve my communication clarity and think creatively.",
      expanded: false,
      image: "",
    },
    {
      week: 3,
      title: "Presentation Skills – II",
      summary: "Formal presentation with feedback on delivery techniques.",
      content:
        "I gave a formal presentation on a current topic of my choice and received constructive feedback. We revisited effective presentation techniques, and I learned how small changes in body language and tone can completely transform delivery.",
      expanded: false,
      image: "",
    },
    {
      week: 4,
      title: "Effective Writing Skills – I",
      summary: "Refining professional writing for emails and cover letters.",
      content:
        "I worked on refining my writing, particularly professional emails and cover letters. We discussed dos and don'ts, and I realized how important it is to write with purpose and keep things concise. It made me more aware of how I sound in writing.",
      expanded: false,
      image: "",
    },
    {
      week: 5,
      title: "Public Speaking – II",
      summary: "Speaking on trending topics and participating in JAM sessions.",
      content:
        "I got to speak in front of the class on trending topics and participated in JAM (Just A Minute) sessions. It pushed me out of my comfort zone and helped me control my nerves. The feedback was super valuable for real-world speaking scenarios.",
      expanded: false,
      image: "",
    },
    {
      week: 6,
      title: "Reflective Writing",
      summary: "Reflecting on the learning journey across previous weeks.",
      content:
        "I reflected on my learning journey across all the previous weeks. Writing this made me realize how much I've grown — not just in skills, but in self-awareness. I could connect the dots and see how each activity added to my personal development.",
      expanded: false,
      image: "",
    },
    {
      week: 7,
      title: "Group Discussion (GD)",
      summary: "Learning GD structure and participating in live simulations.",
      content:
        "We learned the structure of group discussions and did live simulations. I saw firsthand how communication, listening, and quick thinking all play a role. I also noticed where I need to improve — especially in speaking up and structuring my points.",
      expanded: false,
      image: "",
    },
  ])

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedWeeks = localStorage.getItem("pese-400-weeks")
    if (savedWeeks) {
      setWeeks(JSON.parse(savedWeeks))
    }
  }, [])

  // Save weeks data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pese-400-weeks", JSON.stringify(weeks))
  }, [weeks])

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

  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Check if file is an image and of the correct type
    if (!file.type.match(/image\/(jpeg|jpg|png)/)) {
      alert("Only JPEG and PNG images are allowed")
      return
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const imageData = e.target?.result as string
      setWeeks(
        weeks.map((week, i) => {
          if (i === index) {
            return { ...week, image: imageData }
          }
          return week
        }),
      )
    }
    reader.readAsDataURL(file)
  }

  const removeImage = (index: number) => {
    setWeeks(
      weeks.map((week, i) => {
        if (i === index) {
          return { ...week, image: "" }
        }
        return week
      }),
    )
    // Reset the file input
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = ""
    }
  }

  const triggerFileInput = (index: number) => {
    fileInputRefs.current[index]?.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-16 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Button>
        </Link>
        <div className="hidden sm:flex items-center text-xs text-muted-foreground">
          <span className="mx-2">/</span>
          <span>PESE 400</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Practical for Employability Skill Enhancement Journal
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
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.1)" }}
              className="transition-all duration-300"
            >
              <Card className="overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30">
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <h2 className="text-xl font-semibold">
                      Week {week.week}: {week.title}
                    </h2>
                    {!week.expanded && <p className="text-sm text-muted-foreground mt-1">{week.summary}</p>}
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    {week.expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </Button>
                </div>

                <AnimatePresence>
                  {week.expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-muted-foreground mb-6">{week.content}</p>

                      {/* Image upload and preview section */}
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-3">Journal Image</h3>

                        <div className="flex items-start gap-4">
                          {/* Thumbnail preview */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative w-[180px] h-[180px] rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center border border-primary/10 shadow-sm"
                          >
                            {week.image ? (
                              <div className="relative w-full h-full">
                                <Image
                                  src={week.image || "/placeholder.svg"}
                                  alt={`Week ${week.week} journal image`}
                                  fill
                                  className="object-cover"
                                />
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="absolute top-1 right-1 h-6 w-6 p-0 rounded-full opacity-80 hover:opacity-100"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    removeImage(index)
                                  }}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <div className="text-center p-2">
                                <ImageIcon className="h-12 w-12 text-muted-foreground/40 mx-auto mb-2" />
                                <div className="text-muted-foreground text-xs">No image uploaded yet</div>
                              </div>
                            )}
                          </motion.div>

                          <div className="flex-1">
                            <input
                              type="file"
                              accept="image/jpeg,image/png,image/jpg"
                              className="hidden"
                              onChange={(e) => handleImageUpload(index, e)}
                              ref={(el) => (fileInputRefs.current[index] = el)}
                            />

                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs flex items-center gap-1 mb-2"
                              onClick={(e) => {
                                e.stopPropagation()
                                triggerFileInput(index)
                              }}
                            >
                              <Upload className="h-3.5 w-3.5" />
                              {week.image ? "Replace Journal Image" : "Upload Journal Image"}
                            </Button>
                            <p className="text-xs text-muted-foreground">Supported formats: JPEG, PNG (max 5MB)</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fixed return to home button for mobile */}
      <div className="fixed bottom-4 right-4 sm:hidden">
        <Link href="/">
          <Button size="icon" className="rounded-full shadow-lg">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
