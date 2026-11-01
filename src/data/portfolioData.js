// ============================================================
// portfolioData.js
// Controls all content, text, links, and sections across the portfolio.
// ============================================================

export const personalInfo = {
  name: "Laxmi Wali",
  firstName: "Laxmi Wali",
  brandName: "Laxmi Wali",
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "9113621783",
  emails: {
    primary: "laxmiwali7979@gmail.com",
    secondary: "",
  },
  summary:
    "I am a Computer Science and Engineering student at VTU Belagavi, currently pursuing a Java Full Stack Development internship at TAP Academy, where I am developing my technical skills and building my career in software development.",
  resumeUrl: "/Laxmi_Wali_Resume.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Laxmiwali",
  linkedin: "https://www.linkedin.com/in/laxmi-wali-9277133b3",
  instagram: "https://www.instagram.com/sony_.079?stkn=a2VnMDllZDU5cXRw",
};

export const heroContent = {
  greeting: "Hi, I'm Laxmi Wali",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate Computer Science student building clean, responsive web applications and robust full-stack software solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:laxmiwali7979@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Laxmi_Wali_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Laxmi Wali</span>, a passionate Computer Science student based in Bengaluru, India. I have a solid foundation in Java and Python, and I love building interactive web projects, exploring new technologies, and sharpening my skills through the placement training program at TAP Academy. My goal is to become an impactful software developer crafting innovative solutions that make a meaningful difference.`,
  techStack: ["Java", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A methodical approach to engineering clean, reliable, and user-friendly software applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing system requirements, data workflows, and user expectations before writing code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting relational database schemas, wireframes, and intuitive user interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing clean, modular code with strong OOP principles in Java, Python, and frontend technologies.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing endpoints, validating cross-device responsiveness, and delivering maintainable builds.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "Oracle" }, { name: "DBMS" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git & GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Hackathons & Technical Competitions",
    description:
      "Participated in hackathons and technical competitions, strengthening problem-solving, teamwork, and communication skills.",
    role: "Participant & Team Collaborator",
    badge: "Hackathons",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy, Bengaluru",
    role: "Java Full Stack Development Intern",
    duration: "Ongoing",
    skills: [
      "Core Java",
      "Object-Oriented Programming (OOP)",
      "Problem-Solving",
      "Database Management",
      "Frontend Development",
      "Backend Development",
    ],
    tech: ["Java", "HTML", "CSS", "JavaScript", "SQL", "MySQL"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex programming problems into modular, efficient solutions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulating technical concepts clearly and collaborating transparently across teams.",
  },
  {
    name: "Leadership",
    icon: "👑",
    desc: "Stepping up during collaborative hackathons and guiding group project goals.",
  },
  {
    name: "Creativity",
    icon: "💡",
    desc: "Designing engaging user interfaces and exploring innovative technical approaches.",
  },
];

export const projects = [
  {
    id: "air-quality-monitoring-system",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Air Quality Monitoring System",
    description:
      "Developed a web-based dashboard using Python Flask and external APIs to display real-time Air Quality Index (AQI), pollution metrics, and location-based environmental searches.",
    techTags: ["Python", "Flask", "REST APIs", "HTML", "CSS"],
    links: {
      github: "https://github.com/Laxmiwali/air-quality-pro",
      demo: "",
    },
    isFlagship: true,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/laxmi-wali-9277133b3",
};

export const education = {
  degree: "B.Tech Computer Science and Engineering",
  institution: "Visvesvaraya Technological University Belagavi",
  cgpa: "3rd Year",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Python · MySQL · Web Dev",
    "Building innovative solutions that make a difference",
  ],
  credential: "B.Tech Computer Science and Engineering",
  copyright: `© ${new Date().getFullYear()} Laxmi Wali | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

