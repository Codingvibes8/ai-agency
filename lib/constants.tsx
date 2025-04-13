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

// ===== HOME PAGE DATA =====
export const homePageData = {
        hero: {
                title: (
                    <section className="flex flex-col items-center justify-center text-center">
                        <span className="text-blue-300 text-2xl">Web Development</span>
                        <h2 className={'flex items-center gap-4'}>
                            <span className="text-blue-300 text-2xl">Web Design</span>
                            <span className="text-blue-400 text-2xl">AI Automation</span></h2>
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
            image: "/dentist-hero.jpg?height=400&width=600",
        },
        {
            title: "Electrican's Website",
            industry: "Construction",
            description:
                "Comprehensive membership portal with class booking system that increased attendance by 34% and reduced admin time by 15 hours weekly.",
            image: "/electric1.png?height=400&width=600",
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
            title: "Dentist Website",
            industry: "Medicine",
            description:
                "DentalHub needed a complete digital transformation to compete in the busy London dental scene." +
                " We created a hyperlocal website with an integrated booking system and AI chatbot to streamline operations.",
            image: "/dentist-hero.jpg?height=400&width=600",
            services: [
                { icon: <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Hyperlocal Website" },
                { icon: <Calendar className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Booking System" },
                { icon: <MessageSquare className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Chatbot" },
            ],
            results: [
                "45% increase in online reservations",
                "68% reduction in phone call volume",
                'Top 3 Google ranking for "best Dental Clinic in Chelsea"',
            ],
        },
        {
            title: "AutoAssist Pro",
            industry: "Engineering",
            description:
                "AutoAssist Pro, wanted to expand beyond their physical location. We built a local e-commerce platform that maintained their brand identity while enabling online sales.",
            image: "/autoShop.png?height=400&width=600",
            services: [
                { icon: <ShoppingCart className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Local E-commerce" },
                { icon: <Search className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "AI Local SEO" },
            ],
            results: [
                "£12,500 in online sales of car parts within first month",
                "32% of sales now coming from outside local area",
                "156% increase in Instagram followers",
            ],
        },
        {
            title: "ElectricJay",
            industry: "Construction",
            description:
                "ElectricJay needed a digital solution to manage their growing schedule. We developed a comprehensive  integrated class booking and payment processing.",
            image: "/banner2.jpg?height=400&width=600",
            services: [
                { icon: <Users className="h-3.5 w-3.5 text-slate-700 mr-1.5" />, name: "Membership Portal" },
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
            image: "/banner4.jpg?height=400&width=600",
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
export const aboutPageData = {
    hero: {
        title: "We Build Digital Success Stories",
        description:
            "Our mission is to empower local businesses with enterprise-grade web solutions and AI automation that drive real results.",
        primaryButtonText: "Our Services",
        primaryButtonLink: "/services",
        secondaryButtonText: "Contact Us",
        secondaryButtonLink: "/contact",
        image: "/banner2.jpg?height=400&width=600",
        imageAlt: "Our team at work",
    },

    story: {
        title: "Our Story",
        description: "How we started and where we're going",
        content: [
            "Founded in 2020, our agency was born from a simple observation: local businesses were being left behind in the digital revolution. While enterprise companies had access to cutting-edge technology and expertise, small and medium businesses were often stuck with outdated, ineffective digital solutions.",
            "We set out to change that by bringing enterprise-grade web design and AI automation to local businesses at accessible price points. Our team combines deep technical expertise with a genuine understanding of the challenges faced by local businesses.",
            "Today, we've helped hundreds of businesses across the UK transform their digital presence and operations. From restaurants and clinics to boutique shops and professional services, we've delivered solutions that drive real business results.",
            "Our vision is to continue bridging the digital divide, ensuring that businesses of all sizes can harness the power of technology to thrive in an increasingly digital world.",
        ],
        image: "/about-ai.jpg?height=40&width=600",
        imageAlt: "Company history",
    },

    values: {
        title: "Our Values",
        description: "The principles that guide everything we do",
        items: [
            {
                title: "Excellence",
                description:
                    "We believe every business deserves the highest quality digital solutions, regardless of size. We never compromise on quality.",
            },
            {
                title: "Innovation",
                description:
                    "We continuously explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.",
            },
            {
                title: "Transparency",
                description:
                    "We believe in clear communication, honest pricing, and setting realistic expectations. No surprises, just results.",
            },
            {
                title: "Partnership",
                description:
                    "We see ourselves as partners in our clients' success, not just service providers. Your growth is our growth.",
            },
            {
                title: "Results-Driven",
                description:
                    "We focus on delivering measurable business outcomes, not just technical deliverables. If it doesn't drive results, we don't do it.",
            },
            {
                title: "Accessibility",
                description:
                    "We believe in making enterprise-grade technology accessible to businesses of all sizes through fair pricing and scalable solutions.",
            },
        ],
    },

    team: {
        title: "Meet Our Team",
        description: "The talented people behind our success",
        members: [
            {
                name: "Alex Thompson",
                role: "Founder & CEO",
                bio: "With over 15 years in tech and digital marketing, Alex founded the agency to bring enterprise solutions to local businesses.",
                image: "/man-user.svg?height=128&width=128",
            },
            {
                name: "Sarah Chen",
                role: "CTO",
                bio: "A former Google engineer, Sarah leads our technical team and ensures we stay at the cutting edge of web development and AI.",
                image: "/woman-user2.svg?height=128&width=128",
            },
            {
                name: "James Wilson",
                role: "Creative Director",
                bio: "Award-winning designer with a passion for creating beautiful, functional interfaces that drive conversions.",
                image: "/man-user2.svg?height=128&width=128",
            },
            // {
            //     name: "Priya Sharma",
            //     role: "AI Solutions Lead",
            //     bio: "AI specialist with expertise in machine learning and natural language processing for business applications.",
            //     image: "/woman-user2.svg?height=128&width=128",
            // },
            {
                name: "Michael Rodriguez",
                role: "Client Success Manager",
                bio: "Dedicated to ensuring our clients achieve their business goals through our digital solutions.",
                image: "/man-user.svg?height=128&width=128",
            },
            {
                name: "Emma Lewis",
                role: "SEO & Content Strategist",
                bio: "Data-driven marketer specializing in local SEO and content strategies that drive traffic and conversions.",
                image: "/woman-user.svg?height=128&width=128",
            },
        ],
    },

    cta: {
        title: "Ready to work with us?",
        description: "Let's discuss how we can help your business thrive in the digital landscape.",
        buttonText: "Get in Touch",
        buttonLink: "/contact",
    },
}

// ===== PRICING PAGE DATA =====
export const pricingPageData = {
    hero: {
        title: "Transparent Pricing",
        description:
            "Clear, upfront pricing with no hidden fees. Choose the right solution for your business needs and budget.",
        primaryButtonText: "Get a Quote",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "#pricing",
    },

    websitePricing: {
        title: "Website Solutions",
        description: "Custom-built websites and web applications tailored to your business needs",
        plans: [
            {
                title: "Hyperlocal Website",
                description: "Perfect for small local businesses looking to establish an online presence.",
                price: "£1,500",
                recurring: "",
                features: [
                    "Mobile-responsive design",
                    "SEO optimization",
                    "Contact form",
                    "Google Maps integration",
                    "Social media links",
                    "Basic analytics",
                ],
                popular: false,
            },
            {
                title: "Business Website",
                description: "Comprehensive solution for established businesses with more complex needs.",
                price: "£3,500",
                recurring: "",
                features: [
                    "All Hyperlocal Website features",
                    "Blog/news section",
                    "Email newsletter integration",
                    "Advanced SEO optimization",
                    "Content management system",
                    "Performance optimization",
                ],
                popular: true,
            },
            {
                title: "E-commerce Website",
                description: "Complete online store solution for selling products or services online.",
                price: "£5,000",
                recurring: "+ 5% revenue",
                features: [
                    "All Business Website features",
                    "Product catalog",
                    "Secure payment processing",
                    "Inventory management",
                    "Order tracking",
                    "Customer accounts",
                    "Abandoned cart recovery",
                ],
                popular: false,
            },
        ],
    },

    aiPricing: {
        title: "AI Automation Solutions",
        description: "Intelligent automation tools to streamline operations and enhance customer experience",
        plans: [
            {
                title: "AI Chatbot",
                description: "24/7 customer service automation for your website or social media.",
                price: "£500",
                recurring: "+ £100/month",
                features: [
                    "Custom AI training",
                    "FAQ automation",
                    "Lead qualification",
                    "Appointment scheduling",
                    "Seamless handoff to humans",
                    "Monthly performance reports",
                ],
                popular: false,
            },
            {
                title: "AI Local SEO",
                description: "Data-driven SEO strategies to dominate local search results.",
                price: "£300",
                recurring: "/month",
                features: [
                    "Local keyword research",
                    "Google Business Profile optimization",
                    "Local citation building",
                    "Review management",
                    "Competitor analysis",
                    "Monthly performance reports",
                ],
                popular: true,
            },
            {
                title: "AI Social Media",
                description: "AI-powered content creation and management for social platforms.",
                price: "£200",
                recurring: "/month",
                features: [
                    "Content calendar",
                    "AI-generated posts",
                    "Scheduled publishing",
                    "Engagement monitoring",
                    "Performance analytics",
                    "Monthly strategy adjustments",
                ],
                popular: false,
            },
        ],
    },

    customSolutions: {
        title: "Need a custom solution?",
        description:
            "We offer tailored packages combining our services to meet your specific business requirements and budget.",
        buttonText: "Contact Us",
        buttonLink: "/contact",
    },

    faq: {
        title: "Frequently Asked Questions",
        description: "Common questions about our pricing and services",
        questions: [
            {
                question: "Do you offer payment plans?",
                answer:
                    "Yes, we offer flexible payment plans for projects over £2,000. Typically, this involves a 50% deposit to begin work, with the remainder paid in monthly installments.",
            },
            {
                question: "What's included in the setup fee?",
                answer:
                    "The setup fee covers initial development, design, configuration, testing, and deployment of your solution. It also includes basic training on how to use your new system.",
            },
            {
                question: "Are there any hidden costs?",
                answer:
                    "No, we believe in transparent pricing. All costs are discussed upfront before any work begins. The only additional costs would be for requested changes outside the original project scope.",
            },
            {
                question: "Do you offer discounts for multiple services?",
                answer:
                    "Yes, we offer package discounts when you combine multiple services. Contact us for a custom quote based on your specific needs.",
            },
        ],
    },
}

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

