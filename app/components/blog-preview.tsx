"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface BlogPreviewProps {
  title: string
  date: string
  excerpt: string
  link: string
  tags: string[]
}

export default function BlogPreview({ title, date, excerpt, link, tags }: BlogPreviewProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <CardContent className="p-6 flex-grow">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={link} className="text-sm font-medium hover:underline">
            Read More →
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
