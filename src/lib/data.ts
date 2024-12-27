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
  // docker and kubernetes in learning journey
  { filename: "javascript.svg", name: "javascript" },
  { filename: "sql.png",name : "sql"},
  // { filename: "sql1.png",name : "sql"},
  
  { filename: "typescript.svg", name: "typescript" },
  { filename: "nextjs.svg", name: "next js" },
  { filename: "react.svg", name: "react" },
  // { filename: "astrojs.svg", name: "astro js" }, if it commented i will learn it later because you must limit your skills
  // { filename: "tauri.svg", name: "tauri" },
  // { filename: "electronjs.svg", name: "electron js" },
  { filename: "tailwindcss.svg", name: "tailwind css" },
  { filename: "reactrouter.svg", name: "react router" },
  { filename: "reduxtoolkit.svg", name: "redux toolkit" },
  // { filename: "reactquery.svg", name: "react query" },
  // { filename: "swr.svg", name: "swr" },
  { filename: "prisma.svg", name: "prisma" },
  { filename: "zodlogo.svg", name: "zod" },
  // { filename: "langchain.png", name: "langchain" },
  { filename: "nextauth.webp", name: "next auth" },
  // { filename: "auth0.svg", name: "auth0" },
  { filename: "nodejs.svg", name: "node js" },
  { filename: "deno.svg", name: "deno" },
  { filename: "jwt.svg", name: "jwt" },
  { filename: "expressjs.svg", name: "express js" },
  // { filename: "nestjs.svg", name: "nest js" },
  // { filename: "sanity.svg", name: "sanity" },
  { filename: "supabase.svg", name: "supabase" },
  { filename: "firebase.svg", name: "firebase" },
  { filename: "mongodb.svg", name: "mongodb" },
  { filename: "icons8-git.svg", name: "git" },
  { filename: "stripe.svg", name: "stripe" },
  

  { filename: "postgressql.svg", name: "postgressql" },
  // { filename: "mysql.svg", name: "mysql" },
  // { filename: "sqlite.svg", name: "sqlite" },
] as const;
// const projectsImagesSkills = [
//   { filename: "typescript.svg", name: "typescript" },
//   { filename: "nextjs.svg", name: "next js" },
//   { filename: "react.svg", name: "react" },
//   { filename: "astrojs.svg", name: "astro js" },
//   { filename: "tauri.svg", name: "tauri" },
//   { filename: "electronjs.svg", name: "electron js" },
//   { filename: "tailwindcss.svg", name: "tailwind css" },
//   { filename: "reactrouter.svg", name: "react router" },
//   { filename: "reduxtoolkit.svg", name: "redux toolkit" },
//   { filename: "reactquery.svg", name: "react query" },
//   { filename: "swr.svg", name: "swr" },
//   { filename: "postgressql.svg", name: "postgressql" },
//   { filename: "prisma.svg", name: "prisma" },
//   { filename: "zodlogo.svg", name: "zod" },
//   { filename: "langchain.png", name: "langchain" },
//   { filename: "nextauth.webp", name: "next auth" },
//   { filename: "auth0.svg", name: "auth0" },
//   { filename: "nodejs.svg", name: "node js" },
//   { filename: "deno.svg", name: "deno" },
//   { filename: "jwt.svg", name: "jwt" },
//   { filename: "expressjs.svg", name: "express js" },
//   { filename: "nestjs.svg", name: "nest js" },
//   { filename: "sanity.svg", name: "sanity" },
//   { filename: "supabase.svg", name: "supabase" },
//   { filename: "firebase.svg", name: "firebase" },
//   { filename: "mongodb.svg", name: "mongodb" },
//   { filename: "mysql.svg", name: "mysql" },
//   { filename: "sqlite.svg", name: "sqlite" },
// ] as const;
const projects = [
  {
    title: "SwiftBuy - Ultimate eCommerce Platform",
    description:
      "A full-stack eCommerce platform featuring a comprehensive shopping experience with wishlist, advanced filtering, and secure payment integration using Stripe.",
    image: "/project1.png",
    liveLink: "https://swiftbuy.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/ecommerce_mern",
    techUsed: [
      { filename: "typescript.svg", name: "typescript" },
      { filename: "react.svg", name: "react" },
      { filename: "tailwindcss.svg", name: "tailwind css" },
      { filename: "reactrouter.svg", name: "react router" },
      { filename: "reduxtoolkit.svg", name: "redux toolkit" },
      { filename: "nodejs.svg", name: "node js" },
      { filename: "jwt.svg", name: "jwt" },
      { filename: "expressjs.svg", name: "express js" },
      { filename: "supabase.svg", name: "supabase" },
      { filename: "firebase.svg", name: "firebase" },
      { filename: "mongodb.svg", name: "mongodb" },
      { filename: "icons8-git.svg", name: "git" },
      { filename: "stripe.svg", name: "stripe" },
    ],
    features: [
      "Wishlist functionality",
      "Payment integration with Stripe",
      "Filtering options",
      "User authentication and authorization",
      "Responsive design",
      "Admin dashboard for managing products and orders",
      "Real-time inventory management",
      "Order tracking and history",
    ],
    thereIsAdmin: true,
  },
  {
    title: "Krelli - Comprehensive Renting Platform",
    description:
      "A full-stack renting platform offering a seamless experience for property rentals with advanced search, booking management, and secure payment processing.",
    image: "/project2.png",
    liveLink: "https://krelli.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/Krelli_x86",
    techUsed: [
      { filename: "javascript.svg", name: "javascript" },

      { filename: "react.svg", name: "react" },
      { filename: "tailwindcss.svg", name: "tailwind css" },
      { filename: "reactrouter.svg", name: "react router" },
      { filename: "reduxtoolkit.svg", name: "redux toolkit" },
      { filename: "prisma.svg", name: "prisma" },
      { filename: "zodlogo.svg", name: "zod" },
      { filename: "nodejs.svg", name: "node js" },
      { filename: "jwt.svg", name: "jwt" },
      { filename: "expressjs.svg", name: "express js" },
      { filename: "supabase.svg", name: "supabase" },
      { filename: "firebase.svg", name: "firebase" },
      { filename: "mongodb.svg", name: "mongodb" },
      { filename: "icons8-git.svg", name: "git" },
      { filename: "stripe.svg", name: "stripe" },
      { filename: "postgressql.svg", name: "postgressql" },
    ],
    features: [
      "Advanced property search",
      "Booking management system",
      "Payment integration with Stripe",
      "User authentication and authorization",
      "Responsive design",
      "Admin dashboard for managing listings and bookings",
      "Real-time availability updates",
      "User reviews and ratings",
    ],
    thereIsAdmin: true,
  },
  {
    title: "SocialSync - Dynamic Social Media Platform",
    description:
      "A full-stack social media platform enabling users to connect, share, and interact with advanced features like real-time messaging, post filtering, and secure authentication.",
    image: "/project3.png",
    liveLink: "https://socialsync.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/SocialSync",
    techUsed: [
      { filename: "typescript.svg", name: "typescript" },
      { filename: "react.svg", name: "react" },
      { filename: "tailwindcss.svg", name: "tailwind css" },
      { filename: "reactrouter.svg", name: "react router" },
      { filename: "reduxtoolkit.svg", name: "redux toolkit" },
      { filename: "nodejs.svg", name: "node js" },
      { filename: "jwt.svg", name: "jwt" },
      { filename: "expressjs.svg", name: "express js" },
      { filename: "firebase.svg", name: "firebase" },
      { filename: "mongodb.svg", name: "mongodb" },
      { filename: "icons8-git.svg", name: "git" },
    ],
    features: [
      "Real-time messaging",
      "Post filtering and search",
      "User authentication and authorization",
      "Responsive design",
      "Admin dashboard for managing users and content",
      "User profiles and activity feeds",
      "Like, comment, and share functionalities",
      "Notification system",
    ],
    thereIsAdmin: false,
  },
  {
    title: "YumYum - Food Store and Delivery Platform",
    description:
      "A full-stack food store and delivery platform with a mobile app, offering a seamless ordering experience, real-time tracking, and secure payment integration.",
    image: "/project4.png",
    liveLink: "https://yumyum.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/YumYum",
    techUsed: [
      { filename: "expo.svg", name: "expo" },
      { filename: "typescript.svg", name: "typescript" },
      { filename: "react.svg", name: "react" },
      { filename: "tailwindcss.svg", name: "tailwind css" },
      { filename: "reactrouter.svg", name: "react router" },
      { filename: "reduxtoolkit.svg", name: "redux toolkit" },
      { filename: "prisma.svg", name: "prisma" },
      { filename: "zodlogo.svg", name: "zod" },
      { filename: "nodejs.svg", name: "node js" },
      { filename: "deno.svg", name: "deno" },
      { filename: "jwt.svg", name: "jwt" },
      { filename: "expressjs.svg", name: "express js" },

      { filename: "supabase.svg", name: "supabase" },
      { filename: "firebase.svg", name: "firebase" },
      { filename: "mongodb.svg", name: "mongodb" },
      { filename: "icons8-git.svg", name: "git" },
      { filename: "stripe.svg", name: "stripe" },
    ],
    features: [
      "Mobile app for iOS and Android",
      "Real-time order tracking",
      "Payment integration with Stripe",
      "User authentication and authorization",
      "Responsive design",
      "Admin dashboard for managing products and orders",
      "Menu management",
    ],
    thereIsAdmin: true,
  },
];

export { navBarTitles, projectsImagesSkills ,projects};
