import Image from "next/image"
import { Github, Gitlab, Linkedin, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Lehi Bennett</h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <Card className="w-full md:w-1/3">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary">
                  <Image src="/me.png" alt="Lehi Bennett" fill className="object-cover" />
                </div>
                <h2 className="text-2xl font-bold">Merlinlcb</h2>
                <p className="text-lg text-muted-foreground">Lehi Bennett</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <Badge variant="outline" className="bg-primary/10">
                    System's Administrator
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10">
                    UI/UX Developer
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10">
                    IT Professional
                  </Badge>
                </div>
                <p className="mt-4 text-muted-foreground">
                  This is a simple landing page created just for you. Here you can learn more about me and get in touch
                  with me.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold border-b pb-2 border-border">About Me</h2>
            <p className="text-lg">
              I am a dedicated professional with a background in computer information systems and extensive experience
              in telecommunications. Throughout my career, I have excelled in roles ranging from customer care
              specialist to repair service attendant, demonstrating strong problem-solving skills and a commitment to
              excellence. I also volunteer at
              <a
                href="https://discord.gg/clevoro-729943368364326952"
                className="text-primary hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clevoro
              </a>{" "}
              and occasionally teach STEM at public Libraries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <a href="mailto:merlinlcb@duck.com" aria-label="Email">
                  <Mail className="h-4 w-4" /> Email Me
                </a>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/lehi-bennett-b03220308/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold border-b pb-2 border-border mb-6">GitHub Stats</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <a
              href="https://github.com/merlinlcb?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full transition-transform hover:scale-[1.01]"
            >
              <div className="bg-[#186d53] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=merlinlcb&bg_color=186d53&langs_count=10&hide_title=true&hide_border=true&layout=compact&theme=dracula"
                  alt="Top Languages"
                  className="w-full"
                />
              </div>
            </a>
            <a
              href="https://github.com/merlinlcb?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full transition-transform hover:scale-[1.01]"
            >
              <div className="bg-[#186d53] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://github-readme-stats-sigma-five.vercel.app/api?username=merlinlcb&bg_color=186d53&hide_border=true&hide_title=true&hide=stars&show_icons=true&count_private=true&theme=dracula"
                  alt="GitHub Stats"
                  className="w-full"
                />
              </div>
            </a>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="mb-16">
          <Tabs defaultValue="awards" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="awards">Awards</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="awards" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Badge className="h-8 w-8 rounded-full flex items-center justify-center">1</Badge>
                      <span className="font-medium">Eagle Scout</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Badge className="h-8 w-8 rounded-full flex items-center justify-center">2</Badge>
                      <span className="font-medium">Excellence in Robotics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Badge className="h-8 w-8 rounded-full flex items-center justify-center">3</Badge>
                      <span className="font-medium">Operational Excellence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="certifications" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a
                  href="https://www.credly.com/badges/fd9b4d50-5e18-40fe-aa25-641dd68e7a30/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src="https://images.credly.com/size/340x340/images/97a95d07-04c3-4afb-952a-6bcf46ddb87e/blob"
                    alt="ITF+ Certification"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">LFS101</p>
                </a>
                <a
                  href="https://www.credly.com/badges/310834d5-0fd8-4940-a633-13f3b0192ebd/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src="https://images.credly.com/size/340x340/images/a49be93a-34ff-4224-996c-b2c976a5dc9d/blob"
                    alt="ITF+ Certification"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">ITF+</p>
                </a>
                <a
                  href="https://www.credly.com/badges/84182abf-a6db-4e1d-85f9-30a01edc1911/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src="https://images.credly.com/size/340x340/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob"
                    alt="A+ Certification"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">A+</p>
                </a>
                <a
                  href="https://www.credly.com/badges/4709d799-faa3-4f71-8439-093fe2c2faaa/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src="https://images.credly.com/size/340x340/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob"
                    alt="Network+ Certification" 
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">Network+</p>
                </a>
                <a
                  href="https://www.credly.com/badges/24f29e8b-ecbe-4405-a943-48d86c45252d/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src="https://images.credly.com/size/340x340/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png"
                    alt="CIOS Certification"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">CIOS</p>
                </a>
                <a
                  href="https://www.credly.com/badges/1e2a0ec9-f1d8-43fe-bbfc-d6094352a378/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src="https://images.credly.com/size/340x340/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob"
                    alt="Security+ Certification"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">Security+</p>
                </a>
                <a
                  href="https://www.credly.com/badges/782aa29e-9a96-4a61-9037-efa849c2eeef/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src="https://images.credly.com/size/340x340/images/8090280a-311f-425f-a1cd-a32770b5a444/CompTIA_CSIS.png"
                    alt="CIOS Certification"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">CSIS</p>
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Connect Section */}
        <section>
          <h2 className="text-3xl font-bold border-b pb-2 border-border mb-6">Connect with Me</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            <a
              href="mailto:merlinlcb@duck.com"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-10 w-10 text-green-500" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/merlinlcb/"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-10 w-10 text-teal-500" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://discordapp.com/channels/@me/165947063350198272/"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <MessageSquare className="h-10 w-10 text-purple-500" />
              <span className="text-sm font-medium">Discord</span>
            </a>
            <a
              href="https://gitlab.com/merlinlcb"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab"
            >
              <Gitlab className="h-10 w-10 text-orange-500" />
              <span className="text-sm font-medium">GitLab</span>
            </a>
            <a
              href="https://github.com/merlinlcb"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-10 w-10" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Lehi Bennett. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

