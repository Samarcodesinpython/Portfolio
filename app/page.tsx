import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import BlogPreview from "./components/blog-preview"
import { ThemeToggle } from "@/components/theme-toggle"
import TypingAnimation from "./components/typing-animation"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Samar.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#blog" className="transition-colors hover:text-foreground/80">
                Progress Log
              </Link>
              <Link href="/career-skills" className="transition-colors hover:text-foreground/80">
                Career Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">Resume</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="home" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <TypingAnimation text="AI DEVELOPER" className="inline-block" speed={80} />
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Hi! I'm Samar, a second-year CS + AI/ML student, obsessed with building real-world AI solutions that
                  go beyond just theory.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/samarcodesinpython" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/samar-jamal-5134402aa/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/samar_jama27633" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:samarjamal@326@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">About Me</h2>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg mb-6">
                I'm a second-year CS + AI/ML student. Obsessed with building real-world AI solutions that go beyond just
                theory. From gesture-controlled tech to donation platforms — I bring ideas to life using Python, C, and
                machine learning frameworks.
              </p>
              <p className="text-lg">
                Currently deep into LeetCode, vision-based AI, and project-based learning. I believe in learning by
                building and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Gesture-Controlled Mouse"
                description="Real-time hand gesture AI that controls the cursor and supports scroll, zoom, and media gestures."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/your-username/gesture-mouse"
                tags={["Python", "OpenCV", "ML", "Computer Vision"]}
              />
              <ProjectCard
                title="Ni-Swarth Donation Platform"
                description="Connect donors, restaurants, and NGOs to reduce food waste and increase social impact."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/your-username/ni-swarth"
                tags={["Python", "Web", "Social Impact"]}
              />
            </div>
          </div>
        </section>

        <section id="blog" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Progress Log
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <BlogPreview
                title="LeetCode Week 12: Graph Algorithms"
                date="April 5, 2024"
                excerpt="This week I tackled 7 graph problems on LeetCode, focusing on DFS and BFS implementations. Here's what I learned..."
                link="/blog/leetcode-week-12"
                tags={["LeetCode", "Algorithms", "Graphs"]}
              />
              <BlogPreview
                title="Building My First CNN from Scratch"
                date="March 28, 2024"
                excerpt="Instead of using high-level libraries, I implemented a convolutional neural network using only NumPy. Here's the process..."
                link="/blog/cnn-from-scratch"
                tags={["Deep Learning", "Python", "CNN"]}
              />

              <BlogPreview
                title="Weekly Update: Learning Transformers"
                date="March 8, 2024"
                excerpt="This week I've been diving deep into transformer architecture. Here are my notes and implementation attempts..."
                link="/blog/transformers-notes"
                tags={["NLP", "Transformers", "Deep Learning"]}
              />
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline">View All Posts</Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Samar.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
