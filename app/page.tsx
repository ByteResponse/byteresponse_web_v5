import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, Code, Database, Brain, BarChart3, Zap, ChevronDown, Heart, UserCog } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Binary Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-5">
        <div className="absolute top-0 left-0 text-[8px] text-gray-800 font-mono leading-none">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j}>{Math.round(Math.random())}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 H100 M50 0 V100 M25 25 H75 V75 H25 Z" stroke="#000" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="5" fill="#000" />
            <circle cx="25" cy="25" r="3" fill="#000" />
            <circle cx="75" cy="25" r="3" fill="#000" />
            <circle cx="25" cy="75" r="3" fill="#000" />
            <circle cx="75" cy="75" r="3" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black flex items-center">
            <div className="relative mr-2">
              <Zap className="h-6 w-6 text-[#0A84FF]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0A84FF] rounded-full animate-pulse"></div>
            </div>
            ByteResponse
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#objective" className="hover:text-[#0A84FF] transition-colors">
              Our Objective
            </Link>
            <Link href="#about" className="hover:text-[#0A84FF] transition-colors">
              About Us
            </Link>
            <Link href="#services" className="hover:text-[#0A84FF] transition-colors">
              Services
            </Link>
            <Link href="#contact" className="hover:text-[#0A84FF] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 relative overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Particles */}
          <div className="absolute inset-0 z-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-500 opacity-20"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                }}
              ></div>
            ))}
          </div>

          {/* Neural Network Visualization */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <g>
                {Array.from({ length: 10 }).map((_, i) => (
                  <circle
                    key={`node-${i}`}
                    cx={`${Math.random() * 100}%`}
                    cy={`${Math.random() * 100}%`}
                    r="5"
                    fill="#0A84FF"
                  />
                ))}
                {Array.from({ length: 20 }).map((_, i) => {
                  const x1 = Math.random() * 100
                  const y1 = Math.random() * 100
                  const x2 = Math.random() * 100
                  const y2 = Math.random() * 100
                  return (
                    <line
                      key={`line-${i}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="#0A84FF"
                      strokeWidth="1"
                    />
                  )
                })}
              </g>
            </svg>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block mb-4 px-3 py-1 bg-[#0A84FF]/10 rounded-full">
              <span className="text-[#0A84FF] font-medium">Next-Gen SaaS & AI Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Welcome to{" "}
              <span className="relative inline-block">
                ByteResponse
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#0A84FF]"></span>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-600 animate-expand"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
              Transforming ideas into impactful, market-ready products through advanced AI, research, analysis, and
              scalable deployment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-lg px-8 py-6 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF]/10 transition-colors"
              >
                Learn More
              </Button>
            </div>

            {/* Animated scroll indicator */}
            <div className="mt-16 relative h-16">
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <ChevronDown className="h-8 w-8 text-[#0A84FF] animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Current Projects</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              We're currently focused on these innovative initiatives
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <BarChart3 className="h-10 w-10 text-[#0A84FF] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0A84FF] transition-colors">
                    Business Intelligence Tool
                  </h3>
                  <p className="text-gray-600">
                    Developing an advanced analytics platform that transforms complex data into actionable business
                    insights.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0A84FF] group-hover:w-full transition-all duration-300"></div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <Heart className="h-10 w-10 text-[#0A84FF] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0A84FF] transition-colors">
                    Healthcare Research
                  </h3>
                  <p className="text-gray-600">
                    Researching innovative approaches to lower death rates in hospitals through predictive analytics and
                    AI-driven monitoring systems.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0A84FF] group-hover:w-full transition-all duration-300"></div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <UserCog className="h-10 w-10 text-[#0A84FF] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0A84FF] transition-colors">
                    Personalized Solutions
                  </h3>
                  <p className="text-gray-600">
                    Creating customized AI and SaaS solutions tailored to specific business needs and challenges.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0A84FF] group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Transformation Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Digital Transformation Through AI</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At ByteResponse, we leverage cutting-edge artificial intelligence to transform your business
                  processes, enhance decision-making, and drive innovation.
                </p>
                <div className="space-y-4">
                  {[
                    "Predictive Analytics & Forecasting",
                    "Natural Language Processing",
                    "Computer Vision Solutions",
                    "Recommendation Systems",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#0A84FF]/20 flex items-center justify-center mt-1 mr-3">
                        <div className="h-3 w-3 rounded-full bg-[#0A84FF]"></div>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Brain circuit visualization */}
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full border-4 border-[#0A84FF]/30 flex items-center justify-center animate-spin-slow">
                      <div className="w-1/2 h-1/2 rounded-full border-4 border-[#0A84FF]/60 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#0A84FF] animate-pulse"></div>
                      </div>
                    </div>
                    {/* Connection lines */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#0A84FF]/30 to-transparent"
                        style={{ transform: `rotate(${i * 22.5}deg)` }}
                      ></div>
                    ))}
                    {/* Nodes */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-[#0A84FF]"
                        style={{
                          top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                          left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                          animation: `pulse 2s infinite ${i * 0.25}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expandable Sections */}
        <section className="py-16 bg-gray-100 relative">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#0A84FF]/5 to-transparent"></div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="objective" id="objective">
                <AccordionTrigger className="text-2xl font-bold py-4 text-gray-800">Our Objective</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed">
                  <p className="mb-4">
                    At ByteResponse, we specialize in the{" "}
                    <strong>research, analysis, development, and deployment</strong> of cutting-edge SaaS (Software as a
                    Service) products. Our focus is on delivering scalable, innovative, and high-performance solutions
                    that empower businesses to grow, optimize operations, and unlock new opportunities.
                  </p>
                  <p className="mb-4">
                    Beyond SaaS development, we extend our expertise to <strong>custom AI solutions</strong>, tailoring
                    intelligent systems to solve complex business challenges. From predictive analytics to process
                    automation, we harness the latest advancements in artificial intelligence to create bespoke
                    solutions that drive measurable results.
                  </p>
                  <p>
                    Our commitment lies in combining <strong>deep research</strong>, <strong>strategic analysis</strong>
                    , and <strong>agile development</strong> to transform ideas into impactful, market-ready products.
                    We operate at the intersection of technology and innovation — bringing clarity, intelligence, and
                    execution to every project we undertake.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="about" id="about">
                <AccordionTrigger className="text-2xl font-bold py-4 text-gray-800">About Us</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed">
                  <p>
                    At ByteResponse, we are dedicated to pushing innovation through comprehensive research, strategic
                    analysis, seamless development, and scalable deployment of SaaS products. Our passion extends to
                    crafting tailored AI solutions that empower businesses to achieve smarter outcomes. With a team of
                    experts in machine learning, data science, and software engineering, we're positioned at the
                    forefront of technological advancement.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services" id="services">
                <AccordionTrigger className="text-2xl font-bold py-4 text-gray-800">Our Services</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed">
                  <p className="mb-4">We offer a suite of services designed to empower businesses and entrepreneurs:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SaaS Product Development with scalable cloud architecture</li>
                    <li>AI-Driven Business Solutions using cutting-edge machine learning models</li>
                    <li>Research and Analytical Services with predictive insights</li>
                    <li>Custom AI Consulting for digital transformation</li>
                    <li>Natural Language Processing and Computer Vision solutions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="interest">
                <AccordionTrigger className="text-2xl font-bold py-4 text-gray-800">Areas of Interest</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed">
                  <p className="mb-4">
                    We are shaping our future products and services based on your needs. Your feedback is invaluable in
                    helping us deliver solutions that matter.
                  </p>
                  <Link
                    href="https://tally.so/r/mRjkyd"
                    target="_blank"
                    className="inline-flex items-center text-[#0A84FF] hover:underline"
                  >
                    Participate in Our Survey Here <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-200 relative overflow-hidden" id="services">
          {/* Byte pattern background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center text-xs font-mono">
                  {(Math.random() > 0.5 ? "0" : "1").repeat(8)}
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Our Core Services</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Leveraging cutting-edge technology to deliver exceptional results for businesses of all sizes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Code className="h-10 w-10 text-[#0A84FF] mb-4" />,
                  title: "SaaS Development",
                  description:
                    "End-to-end development of scalable, innovative SaaS products tailored to your business needs.",
                },
                {
                  icon: <Brain className="h-10 w-10 text-[#0A84FF] mb-4" />,
                  title: "AI Solutions",
                  description:
                    "Custom AI systems that solve complex business challenges through intelligent automation and analytics.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-[#0A84FF] mb-4" />,
                  title: "Research & Analysis",
                  description:
                    "Deep market research and strategic analysis to guide product development and business decisions.",
                },
                {
                  icon: <Database className="h-10 w-10 text-[#0A84FF] mb-4" />,
                  title: "AI Consulting",
                  description: "Expert guidance on implementing AI technologies to transform your business operations.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {service.icon}
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0A84FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0A84FF] group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-[0.02] z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
              {[
                "TensorFlow",
                "PyTorch",
                "AWS",
                "Azure",
                "Google Cloud",
                "React",
                "Node.js",
                "Python",
                "OpenAI",
                "Kubernetes",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-[#0A84FF]/10 hover:text-[#0A84FF] transition-colors cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-100 relative overflow-hidden">
          {/* Circuit pattern background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit-contact" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 H100 M50 0 V100 M25 25 H75 V75 H25 Z" stroke="#000" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="5" fill="#000" />
                <circle cx="25" cy="25" r="3" fill="#000" />
                <circle cx="75" cy="25" r="3" fill="#000" />
                <circle cx="25" cy="75" r="3" fill="#000" />
                <circle cx="75" cy="75" r="3" fill="#000" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-contact)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Ready to transform your business with cutting-edge AI and SaaS solutions? Contact us today.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-[#0A84FF] to-blue-600"></div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h3>
                  <p className="mb-6 text-gray-600">
                    Have questions or want to discuss a potential project? Reach out to us directly.
                  </p>
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-[#0A84FF] mr-2" />
                    <a href="mailto:support@byteresponse.com" className="text-[#0A84FF] hover:underline">
                      support@byteresponse.com
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0A84FF] focus:border-[#0A84FF]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0A84FF] focus:border-[#0A84FF]"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0A84FF] focus:border-[#0A84FF]"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 relative overflow-hidden group">
                      <span className="relative z-10">Send Message</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        {/* Binary background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-5">
          <div className="absolute top-0 left-0 text-[8px] text-white font-mono leading-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array.from({ length: 100 }).map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white flex items-center">
                <Zap className="h-6 w-6 mr-2 text-[#0A84FF]" />
                ByteResponse
              </div>
              <p className="mt-2 text-gray-400">Transforming ideas into impactful solutions</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#objective" className="text-gray-400 hover:text-white transition-colors">
                      Our Objective
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <p className="text-gray-400">
                  Email:{" "}
                  <a href="mailto:support@byteresponse.com" className="hover:text-white transition-colors">
                    support@byteresponse.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ByteResponse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
