const navBarTitles = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
  // "Experience",
  // "Contact",
] as const;

const projectsImagesSkills = [
  // Frontend
  { filename: "typescript.svg", name: "TypeScript" },
  { filename: "javascript.svg", name: "JavaScript" },
  { filename: "react.svg", name: "React" },
  { filename: "nextjs.svg", name: "Next.js" },
  { filename: "tailwindcss.svg", name: "Tailwind CSS" },
  { filename: "mui.svg", name: "Material UI" },
  { filename: "reactrouter.svg", name: "React Router" },
  { filename: "reduxtoolkit.svg", name: "Redux Toolkit" },

  // Backend
  { filename: "nodejs.svg", name: "Node.js" },
  { filename: "expressjs.svg", name: "Express.js" },
  // { filename: "go.svg", name: "Go" },
  // { filename: "fiber.png", name: "Go Fiber" },
  // { filename: "dingo.png", name: "Dingo (DI)" },
  { filename: "laravel.svg", name: "Laravel" },
  { filename: "deno.svg", name: "Deno" },

  // Databases
  { filename: "mongodb.svg", name: "MongoDB" },
  { filename: "mysql.svg", name: "MySQL" },
  { filename: "postgressql.svg", name: "PostgreSQL" },
  { filename: "sqlite.svg", name: "SQLite" },
  { filename: "prisma.svg", name: "Prisma" },

  // Services & APIs
  { filename: "supabase.svg", name: "Supabase" },
  { filename: "firebase.svg", name: "Firebase" },
  { filename: "nextauth.webp", name: "Auth.js" },
  { filename: "auth0.svg", name: "Auth0" },
  { filename: "jwt.svg", name: "JWT" },
  { filename: "stripe.svg", name: "Stripe" },

  // DevOps & Tools
  { filename: "docker.svg", name: "Docker" },
  { filename: "icons8-git.svg", name: "Git" },
  { filename: "Jest.svg", name: "Jest" },
  { filename: "zodlogo.svg", name: "Zod" },
  // { filename: "electronjs.svg", name: "Electron" },
] as const;

const projects = [
  {
    title: "Ultimate eCommerce Platform",
    description:
      "A comprehensive full-stack eCommerce web platform featuring advanced shopping experience with wishlist, filtering, secure payment integration using Stripe, and complete admin dashboard for inventory management.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80",
    liveLink: "https://swiftbuy.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/ecommerce_mern",
    techUsed: [
      { filename: "typescript.svg", name: "TypeScript" },
      { filename: "react.svg", name: "React" },
      { filename: "tailwindcss.svg", name: "Tailwind CSS" },
      { filename: "reactrouter.svg", name: "React Router" },
      { filename: "reduxtoolkit.svg", name: "Redux Toolkit" },
      { filename: "nodejs.svg", name: "Node.js" },
      { filename: "expressjs.svg", name: "Express.js" },
      { filename: "mongodb.svg", name: "MongoDB" },
      { filename: "jwt.svg", name: "JWT" },
      { filename: "stripe.svg", name: "Stripe" },
      { filename: "firebase.svg", name: "Firebase" },
      { filename: "icons8-git.svg", name: "Git" },
    ],
    features: [
      "Complete eCommerce functionality with cart and wishlist",
      "Secure payment processing with Stripe integration",
      "Advanced product filtering and search capabilities",
      "User authentication and authorization system",
      "Comprehensive admin dashboard for product & order management",
      "Real-time inventory tracking and management",
      "Order history and tracking system",
      "Responsive design for all devices",
    ],
    projectType: "Full-Stack Web Application",
    thereIsAdmin: true,
    demoCredentials: {
      user: {
        email: "user@gmail.com",
        password: "123456",
      },
      admin: {
        email: "admin@gmail.com",
        password: "123456",
      },
    },
  },
  {
    title: "Property Rental Platform",
    description:
      "A sophisticated full-stack web platform for property rentals offering seamless booking experience with advanced search filters, payment processing, user reviews, and comprehensive property management system.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop&auto=format&q=80",
    liveLink: "https://krelli.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/Krelli_x86",
    techUsed: [
      { filename: "nextjs.svg", name: "Next.js" },
      { filename: "javascript.svg", name: "JavaScript" },
      { filename: "react.svg", name: "React" },
      { filename: "tailwindcss.svg", name: "Tailwind CSS" },
      { filename: "reactrouter.svg", name: "React Router" },
      { filename: "reduxtoolkit.svg", name: "Redux Toolkit" },
      { filename: "nodejs.svg", name: "Node.js" },
      { filename: "expressjs.svg", name: "Express.js" },
      { filename: "postgressql.svg", name: "PostgreSQL" },
      { filename: "prisma.svg", name: "Prisma" },
      { filename: "stripe.svg", name: "Stripe" },
      { filename: "jwt.svg", name: "JWT" },
      { filename: "zodlogo.svg", name: "Zod" },
    ],
    features: [
      "Advanced property search with multiple filters",
      "Complete booking management system",
      "Secure payment integration with Stripe",
      "User reviews and ratings system",
      "Property owner dashboard for listing management",
      "Real-time availability and pricing updates",
      "Interactive property image galleries",
      "Location-based search with map integration",
    ],
    projectType: "Full-Stack Web Application",
    thereIsAdmin: true,
    demoCredentials: {
      user: {
        email: "user@gmail.com",
        password: "123456",
      },
      admin: {
        email: "admin@gmail.com",
        password: "123456",
      },
    },
  },
  {
    title: "YumYum - Food Delivery Mobile App",
    description:
      "A complete mobile application for food ordering and delivery built with React Native and Expo. Features real-time order tracking, restaurant browsing, secure payments, and seamless user experience across iOS and Android platforms.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format&q=80",
    liveLink: "https://yumyum.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/YumYum",
    techUsed: [
      { filename: "expo.svg", name: "Expo" },
      { filename: "react.svg", name: "React Native" },
      { filename: "typescript.svg", name: "TypeScript" },
      { filename: "nodejs.svg", name: "Node.js" },
      { filename: "expressjs.svg", name: "Express.js" },
      { filename: "mongodb.svg", name: "MongoDB" },
      { filename: "stripe.svg", name: "Stripe" },
      { filename: "jwt.svg", name: "JWT" },
      { filename: "firebase.svg", name: "Firebase" },
      { filename: "icons8-git.svg", name: "Git" },
    ],
    features: [
      "Cross-platform mobile app for iOS and Android",
      "Real-time order tracking and notifications",
      "Restaurant browsing with menu management",
      "Secure in-app payment processing",
      "User authentication and profile management",
      "Push notifications for order updates",
      "Restaurant dashboard for order management",
      "Location-based restaurant discovery",
    ],
    projectType: "Mobile Application (React Native)",
    thereIsAdmin: true,
    demoCredentials: {
      user: {
        email: "user@gmail.com",
        password: "123456",
      },
      admin: {
        email: "admin@gmail.com",
        password: "123456",
      },
    },
  },
];

export { navBarTitles, projectsImagesSkills, projects };
