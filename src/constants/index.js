import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  freddiemac,
  thryve,
  cliffai,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Freddie Mac",
    icon: freddiemac,
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Present",
    points: [
      "Built backend data pipelines in AWS + Databricks to process 100GB+ daily from Salesforce, Snowflake, and SQL Server.",
      "Developed REST APIs and automated batch jobs with Python, Spark, and dbt; improved processing times by 30%.",
      "Implemented CI/CD using GitHub Actions; added monitoring via Airflow and CloudWatch.",
      "Integrated Looker dashboards with backend pipelines for alerts and executive reporting.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Thryve Digital Health",
    icon: thryve,
    iconBg: "#E6DEDD",
    date: "Jun 2020 – Aug 2022",
    points: [
      "Designed backend ETL systems with Flask and Spring Boot supporting 1M+ patient records.",
      "Deployed ML models on AWS SageMaker for real-time health predictions (COVID-19 era).",
      "Led NoSQL modeling with MongoDB/Redis for unstructured health records.",
      "Built data access APIs and analytics dashboards (Power BI, Tableau).",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cliff.AI",
    icon: cliffai,
    iconBg: "#E6DEDD",
    date: "Dec 2019 – May 2020",
    points: [
      "Engineered backend crawlers and APIs in Python/Java for structured & unstructured business data.",
      "Automated ingestion from Google Analytics, Salesforce; improved update frequency by 50%.",
      "Built microservices in Flask; deployed with Docker and Jenkins CI.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    degree: "Master’s in Computer Science",
    institution: "Stevens Institute of Technology, USA",
    year: "2022 – 2023",
    details:
      "Specialized in Artificial Intelligence, Data Engineering, and Cloud Computing. Developed advanced solutions in machine learning, scalable architectures, and AI-driven applications. Completed industry projects integrating AWS, Python, and big data technologies.",
    gpa: "3.8 / 4.0",
    logo: "/stevens.png"
  },
  {
    degree: "Bachelor’s in Information Technology",
    institution: "CVR College of Engineering, India",
    year: "2018 – 2022",
    details:
      "Focused on backend development, database management, and distributed systems. Built multiple real-world applications using Java, Python, and SQL. Led final-year project on optimizing database query performance.",
    gpa: "3.7 / 4.0",
    logo: "/cvr.png"
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, education, projects };