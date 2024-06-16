import { ExperienceCards, ProjectCard } from "../cards.model";

export const cards: ProjectCard[] = [
  {
    title: "Başlangıç Rehberi",
    description: "Yeni kullanıcılar için temel bilgiler ve ipuçları içeren bu rehber, uygulamanızı kurmaktan ilk projeyi oluşturmaya kadar tüm adımları detaylı bir şekilde açıklar. Ayrıca, sık karşılaşılan sorunların çözümlerini ve en iyi uygulamaları da bulabilirsiniz.",
    extras: ["Video Tutorial", "Hızlı Başlangıç Kılavuzu"],
    id: "card1",
    continueUrl: "/guide/beginner",
    order: "1"
  },
  {
    title: "Gelişmiş Teknikler",
    description: "Deneyimli kullanıcılar için ileri düzey teknikler ve ipuçları sunan bu rehber, daha karmaşık projeler üzerinde çalışırken ihtiyaç duyacağınız bilgileri sağlar. Performans optimizasyonu, güvenlik önlemleri ve ölçeklenebilirlik gibi konuları kapsar.",
    extras: ["Kod Örnekleri", "Derinlemesine Analiz"],
    id: "card2",
    continueUrl: "/guide/advanced",
    order: "2"
  },
  {
    title: "API Entegrasyonları",
    description: "Uygulamalarınızı diğer hizmetlerle entegre etmek için gerekli tüm adımları içeren bu rehber, API entegrasyonları konusunda kapsamlı bilgiler sunar. RESTful ve GraphQL API'leri kullanarak veri alışverişi yapma ve üçüncü parti hizmetleri projelerinize ekleme yöntemlerini içerir.",
    extras: ["API Dökümantasyonu", "Entegrasyon Örnekleri"],
    id: "card3",
    continueUrl: "/guide/api",
    order: "3"
  },
  {
    title: "UI/UX Tasarım İpuçları",
    description: "Kullanıcı deneyimini artırmak ve daha etkileyici bir arayüz oluşturmak için en iyi tasarım pratiklerini bu rehberde bulabilirsiniz. UI/UX tasarım prensipleri, renk teorisi, tipografi ve kullanıcı testleri gibi konular detaylı olarak açıklanmıştır.",
    extras: ["UI Kit", "Kullanıcı Testleri"],
    id: "card4",
    continueUrl: "/guide/design",
    order: "4"
  },
  {
    title: "Performans Optimizasyonu",
    description: "Uygulamanızın performansını artırmak için kullanabileceğiniz çeşitli teknikleri bu rehberde bulabilirsiniz. Kod optimizasyonu, veri yönetimi, yük testleri ve performans izleme araçları gibi konuları detaylı olarak ele alır.",
    extras: ["Kod Optimizasyonu", "Yük Testi Araçları"],
    id: "card5",
    continueUrl: "/guide/performance",
    order: "5"
  }
];

export const experienceData: ExperienceCards[] = [
  {
    title: "Senior Frontend Developer",
    description: "As a Senior Frontend Developer, I was responsible for designing and implementing user interfaces for various web applications. My role involved collaborating with backend developers, creating reusable components, and ensuring the applications were responsive and user-friendly. I utilized modern web technologies such as Angular, TypeScript, and SCSS to build and maintain these applications. Additionally, I mentored junior developers and conducted code reviews to ensure code quality and best practices.",
    extras: ["Mentored Junior Developers", "Conducted Code Reviews"],
    id: "exp1",
    continueUrl: "https://example.com/senior-frontend-developer",
    order: "1",
    startTime: "2018-01",
    endTime: "2021-12",
    position: "Full-time"
  },
  {
    title: "Lead UI/UX Designer",
    description: "In my role as Lead UI/UX Designer, I spearheaded the design and development of intuitive and aesthetically pleasing user interfaces. My responsibilities included conducting user research, creating wireframes and prototypes, and working closely with development teams to ensure the final product met the design specifications. I also led design sprints, gathered user feedback, and iterated on designs to enhance user experience continually.",
    extras: ["Led Design Sprints", "Conducted User Research"],
    id: "exp2",
    continueUrl: "https://example.com/lead-ui-ux-designer",
    order: "2",
    startTime: "2015-06",
    endTime: "2017-12",
    position: "Full-time"
  },
  {
    title: "Project Manager",
    description: "As a Project Manager, I was in charge of planning, executing, and closing projects. My duties included defining project scope, goals, and deliverables, coordinating resources, and managing timelines and budgets. I ensured projects were completed on time and within scope by closely monitoring progress and addressing any issues that arose. I also facilitated communication between stakeholders and provided regular updates on project status.",
    extras: ["Managed Timelines", "Coordinated Resources"],
    id: "exp3",
    continueUrl: "https://example.com/project-manager",
    order: "3",
    startTime: "2012-01",
    endTime: "2015-05",
    position: "Full-time"
  },
  {
    title: "Backend Developer",
    description: "In the role of Backend Developer, I focused on developing and maintaining server-side logic, ensuring high performance and responsiveness to requests from the frontend. My work involved designing and implementing database schemas, developing RESTful APIs, and integrating third-party services. I collaborated with frontend developers to define and adhere to API specifications and conducted performance tuning and optimization for backend services.",
    extras: ["Developed RESTful APIs", "Performance Tuning"],
    id: "exp4",
    continueUrl: "https://example.com/backend-developer",
    order: "4",
    startTime: "2009-06",
    endTime: "2011-12",
    position: "Full-time"
  }
];