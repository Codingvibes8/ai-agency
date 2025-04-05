import {
    BarChart,
    Calendar,
    Database,
    Globe,
    Megaphone,
    MessageSquare,
    Search,
    Shield,
    ShoppingCart,
    Star,
    UserPlus,
    Users,
} from "lucide-react"

// ===== NAVIGATION DATA =====
export const navigationData = {
    mainNav: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
    ],

    footerServices: [
        { name: "AI Hyperlocal Websites", href: "/services" },
        { name: "Custom Booking Systems", href: "/services" },
        { name: "Local E-commerce", href: "/services" },
        { name: "AI Chatbots", href: "/services" },
        { name: "AI Local SEO", href: "/services" },
    ],

    footerCompany: [
        { name: "About Us", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
    ],

    footerLegal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR Compliance", href: "#" },
    ],

    socialLinks: [
        { name: "Facebook", href: "#", icon: "Facebook" },
        { name: "Twitter", href: "#", icon: "Twitter" },
        { name: "Instagram", href: "#", icon: "Instagram" },
        { name: "LinkedIn", href: "#", icon: "Linkedin" },
    ],
}

// ===== HOME PAGE DATA =====
export const homePageData = {
        hero: {
                title: (
                    <section className="flex flex-col items-center justify-center text-center">
                        <span className="text-blue-300 text-2xl">Welcome to InfiniTechx</span>
                        <h2 className={'flex items-center gap-4'}>
                            <span className="text-blue-300 text-2xl">Web Development</span>
                            <span className="text-blue-400 text-2xl">AI Automation</span>
                        </h2>
                    </section>
                ),
            description:
                "Transforming businesses with cutting-edge web solutions and AI-powered automation. Tailored for local businesses seeking growth and digital excellence.",
          primaryButtonText: "Explore Services",
    primaryButtonLink: "/services",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
    image: "/ai-agency-home.jpg?height=400&width=600",
    imageAlt: "AI-powered web solutions",
},

featuredServices: {
    title: "Our Services",
        description: "Comprehensive web design and AI automation solutions tailored for your business needs",
        services: [
        {
            icon: <Globe className="h-10 w-10 text-blue-600" />,
            title: "AI Hyperlocal Websites",
            description: "Custom-built websites optimized for local search and engagement.",
            pricing: "£1,500–£7,500 (setup)",
            clients: "Restaurants, clinics",
        },
        {
            icon: <Users className="h-10 w-10 text-blue-600" />,
            title: "Custom Booking Systems",
            description: "Streamlined booking solutions for appointment-based businesses.",
            pricing: "£3,000–£8,000 + £100/month",
            clients: "Salons, tutors",
        },
        {
            icon: <ShoppingCart className="h-10 w-10 text-blue-600" />,
            title: "Local E-commerce",
            description: "Powerful online stores for local businesses with integrated payment solutions.",
            pricing: "£5,000–£15,000 + 5% revenue",
            clients: "Artisan shops, boutiques",
        },
        {
            icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
            title: "AI Chatbots",
            description: "Intelligent conversational agents to enhance customer service.",
            pricing: "£500 setup + £100/month",
            clients: "Auto repair shops, hotels",
        },
        {
            icon: <Search className="h-10 w-10 text-blue-600" />,
            title: "AI Local SEO",
            description: "Data-driven SEO strategies to dominate local search results.",
            pricing: "£300–£1,500/month",
            clients: "Dentists, retail stores",
        },
        {
            icon: <Shield className="h-10 w-10 text-blue-600" />,
            title: "Security Audits",
            description: "Comprehensive security assessments to protect your digital assets.",
            pricing: "£500–£2,000",
            clients: "E-commerce, member sites",
        },
    ],
},

features: {
    title: "Why Choose Us",
        description: "We combine technical expertise with business acumen to deliver solutions that drive real results",
        items: [
        {
            title: "Enterprise-Grade Quality",
            description:
                "We build solutions with the same rigor and quality standards used for enterprise clients, regardless of project size.",
        },
        {
            title: "AI-Powered Efficiency",
            description:
                "Our AI automation tools reduce manual work, increase accuracy, and help your business operate more efficiently.",
        },
        {
            title: "Local Business Focus",
            description:
                "We understand the unique challenges of local businesses and create solutions specifically designed for local success.",
        },
        {
            title: "Transparent Pricing",
            description:
                "Clear, upfront pricing with no hidden fees. We believe in building long-term relationships based on trust.",
        },
        {
            title: "Ongoing Support",
            description:
                "We don't just build and leave. Our team provides continuous support to ensure your digital assets keep performing.",
        },
        {
            title: "Results-Driven Approach",
            description:
                "We measure success by the business outcomes we help you achieve, not just by technical deliverables.",
        },
    ],
},

testimonials: {
    title: "Client Success Stories",
        description: "See how our solutions have transformed businesses across various industries",
        items: [
        {
            quote:
                "The hyperlocal website they built for our restaurant increased our online orders by 45% in just two months.",
            author: "Sarah Johnson",
            role: "Owner, Bistro Deluxe",
            image: "/placeholder.svg?height=100&width=100",
        },
        {
            quote:
                "Their booking system revolutionized how we manage appointments. Our no-show rate dropped from 15% to just 3%.",
            author: "Michael Chen",
            role: "Director, Wellness Clinic",
            image: "/man-user.svg?height=100&width=100",
        },
        {
            quote:
                "The AI chatbot handles 70% of our customer inquiries automatically, freeing up our staff for more complex issues.",
            author: "Emma Rodriguez",
            role: "Manager, Grand Hotel",
            image: "/woman-user.svg?height=100&width=100",
        },
    ],
},

featuredProjects: {
    title: "Featured Projects",
        description: "See how we've helped businesses transform their digital presence and operations",
        projects: [
        {
            title: "Dentist",
            industry: "Medical",
            description:
                "Complete digital transformation with a hyperlocal dental website, booking system, and AI chatbot, resulting in 45% more online reservations.",
            image: "/banner4.jpg?height=400&width=600",
        },
        {
            title: "Auto repair Shop",
            industry: "Engineering",
            description:
                "Comprehensive Auto repair Shop website with booking system that increased sales by 34% and reduced admin time by 15 hours weekly.",
            image: "/autoShop.png?height=400&width=600"
        },
    ],
},

cta: {
    title: "Ready to transform your business?",
        description:
    "Schedule a free consultation to discuss how our web design and AI automation solutions can help your business grow.",
        buttonText: "Get Started",
        buttonLink: "/contact",
},
}

// ===== SERVICES PAGE DATA =====
export const servicesPageData = {
    hero: {
        title: "Our Services",
        description:
            "Comprehensive web design and AI automation solutions tailored for businesses seeking growth and digital excellence",
        primaryButtonText: "Get a Quote",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "#services",
    },

    services: [
        {
            icon: <Globe className="h-12 w-12 text-blue-600" />,
            title: "AI Hyperlocal Websites",
            description:
                "Custom-built websites optimized for local search and engagement, designed to convert visitors into customers.",
            pricing: "£1,500–£7,500 (setup)",
            clients: "Restaurants, clinics",
        },
        {
            icon: <Calendar className="h-12 w-12 text-blue-600" />,
            title: "Custom Booking Systems",
            description:
                "Streamlined booking solutions for appointment-based businesses with automated reminders and payment integration.",
            pricing: "£3,000–£8,000 + £100/month",
            clients: "Salons, tutors",
        },
        {
            icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
            title: "Local E-commerce",
            description:
                "Powerful online stores for local businesses with integrated payment solutions, inventory management, and local delivery options.",
            pricing: "£5,000–£15,000 + 5% revenue",
            clients: "Artisan shops, boutiques",
        },
        {
            icon: <UserPlus className="h-12 w-12 text-blue-600" />,
            title: "Membership Portals",
            description:
                "Secure member-only areas with subscription management, content access control, and community features.",
            pricing: "£2,500–£6,000 + £200/month",
            clients: "Gyms, professional groups",
        },
        {
            icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
            title: "AI Chatbots",
            description:
                "Intelligent conversational agents to enhance customer service, answer FAQs, and qualify leads 24/7.",
            pricing: "£500 setup + £100/month",
            clients: "Auto repair shops, hotels",
        },
        {
            icon: <Search className="h-12 w-12 text-blue-600" />,
            title: "AI Local SEO",
            description:
                "Data-driven SEO strategies to dominate local search results with AI-powered content optimization and local citation building.",
            pricing: "£300–£1,500/month",
            clients: "Dentists, retail stores",
        },
        {
            icon: <BarChart className="h-12 w-12 text-blue-600" />,
            title: "AI Social Media",
            description:
                "AI-powered content creation, scheduling, and engagement for social media platforms to build your local brand presence.",
            pricing: "£200–£800/month",
            clients: "Cafés, event planners",
        },
        {
            icon: <Star className="h-12 w-12 text-blue-600" />,
            title: "Review Management",
            description:
                "Automated review collection, monitoring, and response system to build and protect your online reputation.",
            pricing: "£50–£200/month (per location)",
            clients: "Hotels, service providers",
        },
        {
            icon: <Megaphone className="h-12 w-12 text-blue-600" />,
            title: "Event Promotion",
            description:
                "Comprehensive digital marketing for events, including landing pages, ticket sales, and targeted promotion.",
            pricing: "£1,000–£5,000/event + 3% fee",
            clients: "Festivals, music venues",
        },
        {
            icon: <BarChart className="h-12 w-12 text-blue-600" />,
            title: "AI Ads",
            description:
                "AI-optimized advertising campaigns across Google, Facebook, and Instagram with automated performance optimization.",
            pricing: "15–20% of ad spend",
            clients: "Gyms, real estate businesses",
        },
        {
            icon: <Database className="h-12 w-12 text-blue-600" />,
            title: "Database Integration",
            description:
                "Seamless integration of your existing systems with new digital solutions for unified data management.",
            pricing: "£1,000–£3,000 (setup)",
            clients: "Scaling SMBs",
        },
        {
            icon: <Shield className="h-12 w-12 text-blue-600" />,
            title: "Security Audits",
            description:
                "Comprehensive security assessments to identify vulnerabilities and protect your digital assets from threats.",
            pricing: "£500–£2,000",
            clients: "E-commerce, member sites",
        },
    ],

    cta: {
        title: "Ready to get started?",
        description: "Schedule a free consultation to discuss how our services can help your business grow.",
        buttonText: "Contact Us",
        buttonLink: "/contact",
    },
}

// ===== PROJECTS PAGE DATA =====
export const projectsPageData = {
    hero: {
        title: "Our Projects",
        description:
            "Explore our portfolio of successful web design and AI automation projects that have transformed businesses across various industries.",
        primaryButtonText: "Start Your Project",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "#projects",
    },

    projects: [
        {
            title: "Maxim Barbers",
            industry: "Barber",
            description:
                "Maxim Barbers needed a complete digital transformation to compete in the busy London restaurant scene. We created a hyperlocal website with an integrated booking system and AI chatbot to streamline operations.",
            image: "/barbers.png?height=400&width=600",
            services: [
                { icon: <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Hyperlocal Website" },
                { icon: <Calendar className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Booking System" },
                { icon: <MessageSquare className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Chatbot" },
            ],
            results: [
                "45% increase in online reservations",
                "68% reduction in phone call volume",
                'Top 3 Google ranking for "best Italian restaurant in Chelsea"',
            ],
        },
        {
            title: "AutoRepair Shop",
            industry: "Retail",
            description:
                "AutoRepair Shop, wanted to expand beyond their physical location. We built a local e-commerce platform that maintained their brand identity while enabling online sales.",
            image: "/autoshop.png?height=400&width=600",
            services: [
                { icon: <ShoppingCart className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Local E-commerce" },
                { icon: <Search className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Local SEO" },
            ],
            results: [
                "£12,500 in online sales within first month",
                "32% of sales now coming from outside local area",
                "156% increase in Instagram followers",
            ],
        },
        {
            title: "Electrician",
            industry: "Construction",
            description:
                "Electrician website needed a digital solution to manage their growing  base and schedule. We developed a comprehensive integrated  booking and payment processing.",
            image: "/dentist-hero.jpg?height=400&width=600",
            services: [
                { icon: <Users className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Electrician website" },
                { icon: <Calendar className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Booking System" },
                { icon: <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Hyperlocal Website" },
            ],
            results: [
                "85% of members actively using the portal",
                "Class attendance increased by 34%",
                "Staff admin time reduced by 15 hours per week",
            ],
        },
        {
            title: "Smile Dental Clinic",
            industry: "Healthcare",
            description:
                "Smile Dental Clinic was struggling to attract new patients in a competitive market. We implemented a comprehensive digital strategy including a new website, local SEO, and automated review management.",
            image: "/dentist-hero.jpg?height=400&width=600",
            services: [
                { icon: <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Hyperlocal Website" },
                { icon: <Search className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Local SEO" },
                { icon: <Star className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Review Management" },
            ],
            results: [
                "23 new patient inquiries per month (up from 8)",
                "Google rating improved from 3.8 to 4.7 stars",
                "First page Google ranking for 15 key local search terms",
            ],
        },
    ],

    cta: {
        title: "Ready to be our next success story?",
        description:
            "Let's discuss how we can help your business achieve similar results with our web design and AI automation solutions.",
        buttonText: "Start Your Project",
        buttonLink: "/contact",
    },
}

// ===== CONTACT PAGE DATA =====
export const contactPageData = {
    hero: {
        title: "Contact Us",
        description: "Have a question or ready to start your project? Get in touch with our team today.",
        primaryButtonText: "Call Us",
        primaryButtonLink: "tel:+442012345678",
        secondaryButtonText: "Email Us",
        secondaryButtonLink: "mailto:info@aiagency.com",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Contact our team",
    },

    contactForm: {
        title: "Send Us a Message",
        services: [
            { value: "website", label: "Website Development" },
            { value: "ecommerce", label: "E-commerce" },
            { value: "booking", label: "Booking System" },
            { value: "chatbot", label: "AI Chatbot" },
            { value: "seo", label: "Local SEO" },
            { value: "social", label: "Social Media" },
            { value: "other", label: "Other" },
        ],
    },

    contactInfo: {
        title: "Contact Information",
        description:
            "Our team is here to help. Reach out to us through any of the following channels or fill out the contact form.",
        address: {
            street: "123 Tech Hub Street",
            city: "London",
            postcode: "EC1V 9BD",
            country: "United Kingdom",
        },
        phone: "+44 (0) 20 1234 5678",
        email: "info@aiagency.com",
        businessHours: [
            { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
            { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
            { days: "Sunday", hours: "Closed" },
        ],
    },

    mapSection: {
        imageUrl: "/placeholder.svg?height=600&width=1200",
        imageAlt: "Office location map",
    },
}

// ===== ABOUT PAGE DATA =====
 export const aboutConstants ={
    aboutTitle: 'About Our Agency',
    aboutSubTitle: 'Transforming Local Businesses with AI',
    aboutBody: 'We set out to change that by bringing enterprise-grade web design and AI automation to local businesses at accessible price points. Our team combines deep technical expertise with a genuine understanding of the challenges faced by local businesses.',
    aboutImage: '/assets/images/about.jpg',
    aboutLink: '/about-us',
    aboutImageAlt: 'About Us Image',
    aboutValue:[
        {
            icon: '/assets/icons/mission.svg',
            title: 'Our Mission',
            description: 'To empower businesses with cutting-edge technology solutions that drive growth and efficiency.'
        },
        {
            icon: '/assets/icons/vision.svg',
            title: 'Our Vision',
            description: 'To be the leading provider of AI-powered solutions that transform how businesses operate.'
        },
        {
            icon: '/assets/icons/values.svg',
            title: 'Our Values',
            description: 'Innovation, excellence, and client satisfaction are at the core of everything we do.'
        }
    ]
}




export const pricingPlans = [
    {
        name: "Basic",
        description: "Essential features for small businesses",
        price: "$999",
        features: ["Custom Website Design", "Mobile Responsive", "5 Pages", "Contact Form", "Basic SEO Setup"],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Professional",
        description: "Advanced features for growing businesses",
        price: "$1,999",
        features: [
            "Everything in Basic",
            "E-commerce Integration",
            "Content Management System",
            "10 Pages",
            "Advanced SEO",
            "Social Media Integration",
        ],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "Complete solution for established businesses",
        price: "$3,999",
        features: [
            "Everything in Professional",
            "Custom AI Integration",
            "Booking System",
            "Unlimited Pages",
            "Monthly Maintenance",
            "Analytics Dashboard",
            "24/7 Support",
        ],
        cta: "Contact Us",
        popular: false,
    },
];





// ===== COMPANY INFO =====
export const companyInfo = {
    name: "Infinitechx",
    tagline: "Enterprise-grade web design and AI automation solutions for businesses of all sizes.",
    address: {
        street: "123 Tech Hub Street",
        city: "London",
        postcode: "EC1V 9BD",
        country: "United Kingdom",
    },
    contact: {
        phone: "+44 (0) 20 1234 5678",
        email: "info@aiagency.com",
    },
    businessHours: [
        { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
        { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
        { days: "Sunday", hours: "Closed" },
    ],
}

