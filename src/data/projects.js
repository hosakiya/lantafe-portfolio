export const projectsData = [
  {
    id: "iskomats",
    title: "iskoMats — Smart Scholarship Matching & Application Management System",
    shortTitle: "iskoMats",
    category: "Full-Stack Web & UI/UX Design",
    featured: false,
    tagline: "Empowering Lipa City students with smart scholarship discovery, real-time eligibility matching, and automated application tracking.",
    description: "A web-based smart scholarship matching and application management system developed for government scholarship programs in Lipa City. The platform helps students discover scholarships, determine eligibility, submit applications and documents online, and track application status while providing administrators with tools for managing scholarship applications.",
    role: "UI/UX Designer & Front-End Contributor",
    technologies: ["React", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Chylle-prog/System",
    demoUrl: "https://iskomats.surge.sh/",
    hasCaseStudy: true,
    highlights: [
      "Designed and developed responsive UI components for the scholarship management system",
      "Assisted in front-end implementation using HTML, CSS, JavaScript, and design principles",
      "Collaborated with team members in improving usability and accessibility of the platform"
    ],
    metrics: [
      { label: "Target Audience", value: "Lipa City College Students" },
      { label: "Front-End", value: "React.js + Vite" },
      { label: "Database", value: "Supabase + PostgreSQL" },
      { label: "Role Scope", value: "UI/UX & Front-End" }
    ],
    caseStudy: {
      overview: `Access to education plays a significant role in both individual advancement and community development. Despite the availability of financial aid programs, many students continue to encounter barriers in accessing scholarship support. Scholarship administration in numerous institutions remains largely manual, resulting in processes that are time-consuming and difficult to manage.

In many institutions and local government units, scholarship information is distributed through various channels — social media posts, bulletin boards, and separate announcements. Students may need to review different sources to determine which scholarship programs match their qualifications. The application process often involves physical submission of documents, manual verification of records, and repeated inquiries regarding application status.

To address these challenges, iskoMats was developed as a Smart Scholarship Matching and Application Management System designed to centralize and streamline scholarship discovery and evaluation. The system integrates structured eligibility filtering, assisted document review, and centralized application management that facilitates real-time tracking of application statuses — ensuring the entire scholarship lifecycle is monitored with transparency and accountability.`,

      problem: `Many financial aid institutions continue to rely on manual scholarship administration processes, resulting in systemic inefficiencies in evaluation, record management, and applicant matching. These limitations increase the risk of delays, data inconsistencies, and reduced transparency in scholarship allocation. The absence of a centralized decision-support system makes it difficult to consistently evaluate eligibility and efficiently connect qualified students with appropriate financial aid opportunities.

Specific problems identified:
• Students experience difficulty accessing centralized scholarship information, resulting in fragmented application processes.
• Scholarship administrators struggle to organize and track large volumes of applications, causing delays.
• Manual document handling increases the risk of data inconsistencies, misplaced records, and verification errors.`,

      goals: [
        "Design a centralized rule-based eligibility framework that improves access to organized scholarship information and structured applicant matching.",
        "Develop a web-based tracking and reporting module allowing students and administrators to monitor application statuses through a centralized platform.",
        "Implement structured document verification supported by OCR-assisted review and identity consistency checks to reduce manual processing errors.",
        "Provide scholarship administrators with a multi-criteria ranking mechanism to prioritize qualified applicants efficiently."
      ],

      myRole: `As a Front-End Developer and UI/UX contributor, I helped design and develop the front-end interface of iskoMats. My contributions focused on building responsive React components, implementing accessible UI layouts, and collaborating with the team to ensure a smooth and intuitive user experience for both student applicants and scholarship administrators.`,

      designProcess: [
        { phase: "1. Research & Problem Definition", details: "Analyzed the challenges of manual scholarship administration in Lipa City institutions. Reviewed existing workflows to identify pain points in document compliance, eligibility evaluation, and applicant tracking." },
        { phase: "2. System Architecture & Planning", details: "Defined the system scope covering two government scholarship programs: Mayor Africa's Scholarship and Governor Vilma's Financial Assistance — targeting college students in Lipa City." },
        { phase: "3. Front-End Design & Development", details: "Built responsive React components with Tailwind CSS, implementing accessible UI layouts, application form flows, and student-facing tracking dashboards." },
        { phase: "4. Integration & Testing", details: "Integrated the front-end with the Flask/FastAPI backend, Supabase database, and real-time Socket.IO notifications. Conducted functional and usability testing with selected DLSL students." }
      ],

      technologies: [
        { name: "React.js + Vite", role: "Front-end component architecture and high-performance development build" },
        { name: "Tailwind CSS", role: "Utility-first styling for responsive, accessible UI components" },
        { name: "JavaScript / JSX / HTML5 / CSS3", role: "Front-end languages for component logic and markup" },
        { name: "Python + Flask + FastAPI", role: "Backend services and RESTful API architecture" },
        { name: "PostgreSQL + Supabase", role: "Relational database and cloud platform for data and file storage" },
        { name: "Google OAuth 2.0 + JWT", role: "Authentication and secure session management" },
        { name: "Socket.IO / Flask-SocketIO", role: "Real-time notifications for application status updates" },
        { name: "Google Cloud Vision API (OCR)", role: "Optical Character Recognition for document data extraction and validation" },
        { name: "UniFace (ArcFace) + DeepFace", role: "Prototype-level face similarity verification for identity consistency checks" },
        { name: "OpenCV + NumPy + TensorFlow", role: "Signature verification support module" },
        { name: "Grok/Groq + ChromaDB", role: "AI Chatbot for applicant assistance" },
        { name: "Gemini API", role: "Merit scoring and candidate ranking assistance" },
        { name: "Gmail REST API + Semaphore SMS", role: "Email and SMS notifications throughout application lifecycle" },
        { name: "Surge.sh + Render + Docker", role: "Frontend and backend hosting with containerization" },
        { name: "Git + GitHub + Postman + pgAdmin 4", role: "Version control, API testing, and database administration" }
      ],

      keyFeatures: [
        {
          title: "Smart Scholarship Matching",
          description: "Matches students with scholarship programs based on predefined eligibility criteria including academic standing, financial status, and residency — using a rule-based evaluation engine that ensures transparent and consistent filtering."
        },
        {
          title: "OCR-Assisted Document Verification",
          description: "Integrates Google Cloud Vision API to extract and validate information from submitted documents, reducing manual data entry errors and streamlining the administrator review workflow."
        },
        {
          title: "Identity Verification",
          description: "Includes prototype-level face similarity (ArcFace/DeepFace) and signature verification (OpenCV + TensorFlow) modules as non-authoritative reviewer support tools to assist administrators in identity consistency checks."
        },
        {
          title: "Application Tracking & Real-Time Notifications",
          description: "Allows students to monitor their application progress through a visual status timeline (Submitted → Under Review → Verified → Approved/Interview), with real-time updates delivered via Socket.IO, Gmail, and SMS."
        }
      ],

      challenges: [
        {
          challenge: "Balancing Automation with Human Authority",
          solution: "All AI-assisted features (OCR, face similarity, signature verification, merit scoring) are strictly non-authoritative — presented only as decision aids. Final evaluation and approval authority remains entirely with human scholarship administrators."
        },
        {
          challenge: "Data Privacy Compliance",
          solution: "Collected personal information only from participants who provided explicit consent in compliance with the Data Privacy Act of 2012. Controlled and simulated data were used for scholarship programs where actual documents were unavailable."
        },
        {
          challenge: "Complex Multi-Stack Integration",
          solution: "Coordinated front-end React components with a Python Flask/FastAPI backend through RESTful APIs, ensuring smooth data flow between Supabase storage, OCR processing, and real-time Socket.IO communication."
        }
      ],

      results: "The system was deployed and evaluated with selected college students of De La Salle Lipa. The platform successfully demonstrated centralized scholarship matching, structured document verification, and real-time application tracking — supporting transparency and reducing administrative inefficiencies in the scholarship evaluation process.",

      whatILearned: "Working on iskoMats deepened my understanding of building complex, multi-stack web systems. I gained practical experience in React front-end development, integrating REST APIs, and designing accessible, user-centered interfaces for civic and educational platforms. The project reinforced the importance of responsible AI integration — ensuring that technology assists rather than replaces human judgment."
    }

  },
  {
    id: "tsong-mex",
    title: "Tsong-Mex Taqueria: Food Ordering System",
    shortTitle: "Tsong-Mex Taqueria",
    category: "Front-End & Back-End",
    featured: false,
    tagline: "A responsive food ordering system for a local restaurant, built with HTML, CSS, JavaScript, and PHP.",
    description: "Designed responsive UI components for the food ordering system for a local restaurant. Developed front-end features using HTML, CSS, and JavaScript, with PHP for back-end development, collaborating with the team to improve system usability and functionality.",
    role: "UI Designer & Front-End Developer",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    githubUrl: "",
    demoUrl: "",
    hasCaseStudy: true,
    highlights: [
      "Designed responsive UI components for the food ordering system for a local restaurant",
      "Developed front-end features using HTML, CSS, and JavaScript, with PHP for back-end development",
      "Collaborated with the team to improve system usability and functionality"
    ],
    caseStudy: {
      overview: "The Ordering system project was designed to make it easier for customers to select and personalize their orders on the device in order to enhance customer service and streamline operations. The inclusion of features such as real-time order processing and feedback will allow the system to automate and optimise the day-to-day operations and also ultimately allow better staff management, leading to instant service, and happier customers.",
      problem: "Traditional ordering methods often lead to delays, manual errors, and lack of visibility into daily operations for both staff and administrators.",
      goals: [
        "Enhance customer service and streamline operations by allowing customers to select and personalize orders on the device.",
        "Automate and optimize day-to-day operations through real-time order processing and feedback.",
        "Provide a service management portal for staff and administrators to monitor sales, menu management, and daily operations.",
        "Ensure the system can be efficiently maintained during outages and failures."
      ],
      myRole: "Designed responsive UI components and developed front-end features using HTML, CSS, and JavaScript. Collaborated with the team to ensure the system is functional and user-friendly.",
      technologies: [
        { name: "HTML, CSS, JavaScript", role: "Front-end design and interactive user interface" },
        { name: "PHP / XAMPP", role: "Backend logic and local database management" }
      ],
      keyFeatures: [
        { title: "Personalized Ordering", description: "Allows customers to select and personalize their orders on the device." },
        { title: "Real-time Processing", description: "Real-time order processing and feedback to automate daily operations." },
        { title: "Service Management Portal", description: "A dashboard for staff and administrators to monitor sales, menu management, and daily operations." }
      ],
      challenges: [
        {
          challenge: "System Maintenance",
          solution: "Maintained the system architecture to efficiently service system outages and failures."
        }
      ],
      results: "The system effectively streamlined the ordering process, leading to instant service and happier customers, while providing administrators with better control and visibility.",
      whatILearned: "Gained hands-on experience in integrating a front-end interface with a PHP backend and understanding the operational flow of a restaurant ordering system."
    }
  },
  {
    id: "pet-grooming",
    title: "CSJ Pet Grooming Services",
    shortTitle: "CSJ Pet Grooming",
    category: "Front-End & Database",
    featured: false,
    tagline: "A responsive web-based booking platform developed using React, Vite, and Supabase.",
    description: "Designed responsive UI components and developed the web application using HTML, CSS, React Vite, and Supabase, collaborating with the team to improve booking functionality, usability, and overall user experience.",
    role: "UI/UX Designer & Front-End Developer",
    technologies: ["HTML5", "CSS3", "React", "Vite", "Supabase"],
    githubUrl: "",
    demoUrl: "",
    hasCaseStudy: true,
    highlights: [
      "Designed responsive UI components for a pet grooming service booking system",
      "Developed the web application using HTML, CSS, React Vite, and Supabase",
      "Collaborated with the team to improve booking functionality, usability, and overall user experience"
    ],
    caseStudy: {
      overview: "CSJ Pet Grooming Services was developed to streamline appointment scheduling for pet owners and grooming salons. The system eliminates phone coordination and paper calendars by providing a modern, accessible self-service platform.",
      problem: "Grooming salons often struggle with manual scheduling, missed client notes regarding pet temperament or special coat care, and lost booking records during peak hours.",
      goals: [
        "Design responsive, accessible UI components for mobile and desktop screens.",
        "Develop an end-to-end booking application with HTML, CSS, React Vite, and Supabase.",
        "Collaborate with team members to enhance booking workflows, usability, and overall user experience."
      ],
      myRole: "Designed the responsive user interface components and developed the web application using React, Vite, HTML, CSS, and Supabase, iterating on user feedback to maximize booking efficiency.",
      technologies: [
        { name: "React Vite", role: "Component architecture and high-performance reactive UI" },
        { name: "HTML & CSS", role: "Accessible layout structure, styles, and responsive design" },
        { name: "Supabase", role: "Real-time appointment database, authentication, and client data" }
      ],
      keyFeatures: [
        { title: "Dynamic Booking Wizard", description: "Step-by-step service customizer with breed-based pricing calculations." },
        { title: "Pet Profile Vault", description: "Saves pet health history, allergies, and grooming preferences." },
        { title: "Staff Schedule Manager", description: "Admin view with time-slot blocking and appointment approvals." }
      ],
      challenges: [
        {
          challenge: "Preventing conflicting appointment slots",
          solution: "Implemented Supabase query constraints and front-end calendar state that disables booked hours in real time."
        }
      ],
      results: "Built a functional prototype with seamless mobile responsiveness and high feedback on checkout clarity.",
      whatILearned: "Deepened experience with asynchronous API handling in React, form validation best practices, and relational scheduling logic."
    }
  },

];

