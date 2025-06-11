
export const translations = {
  ru: {
    // Header
    name: "Даниил Симонов",
    
    // Hero section
    age: "17 лет",
    location: "Москва",
    description: "Привет! Меня зовут Даня, и я увлечен миром технологий и анализа данных. Я стремлюсь применять свои знания в разработке интересных проектов и решении сложных задач. Мне нравится анализ данных, разработка веб-приложений, создание AI-ассистентов и многое другое. Я постоянно учусь новому и готов к совместной работе.",
    
    // Navigation/Buttons
    contact: "Связаться",
    
    // Sections
    featuredProjects: "Проекты и достижения",
    experienceAchievements: "Хакатоны и олимпиады",
    education: "Образование",
    technicalSkills: "Технические навыки",
    letsConnect: "Контакт",
    
    // Skills categories
    programming: "Программирование",
    dataAnalytics: "Анализ данных",
    webDevelopment: "Веб-разработка",
    webDesign: "Веб-дизайн",
    
    // Skills for animated diagram
    skillsData: [
      {
        category: "Python",
        skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Flask", "g4f", "Requests", "BeautifulSoup", "FastAPI"],
        level: 95,
        color: "#3776ab"
      },
      {
        category: "Git / Version Control",
        skills: ["GitHub", "GitLab", "GitHub Actions"],
        level: 90,
        color: "#f05032"
      },
      {
        category: "Design & Prototyping",
        skills: ["Figma", "FigJam", "Интерфейсы", "Прототипы"],
        level: 85,
        color: "#f24e1e"
      },
      {
        category: "A/B Testing",
        skills: ["Z-тесты", "T-тесты", "Статистика"],
        level: 80,
        color: "#00d4aa"
      },
      {
        category: "Web Parsing",
        skills: ["BeautifulSoup", "Requests", "Автоматизация"],
        level: 88,
        color: "#ff6b6b"
      },
      {
        category: "SQL & Databases",
        skills: ["SQLite", "MySQL", "Запросы"],
        level: 75,
        color: "#336791"
      },
      {
        category: "Web Technologies",
        skills: ["JavaScript", "HTML", "CSS", "React"],
        level: 70,
        color: "#f7df1e"
      },
      {
        category: "Data Visualization",
        skills: ["Power BI", "Tableau", "Plotly"],
        level: 82,
        color: "#e97627"
      },
      {
        category: "DevOps & Testing",
        skills: ["Docker", "unittest", "pytest"],
        level: 65,
        color: "#2496ed"
      },
      {
        category: "AI Integration",
        skills: ["Voice Assistants", "API Integration"],
        level: 78,
        color: "#9c27b0"
      }
    ],
    
    // Skills
    skills: [
      'Python', 'Git', 'AI Integration', 'Voice Assistant Development', 'Docker', 'Parsing', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'A/B-тестирование', 'Power BI', 'Tableau', 'Miro', 'Figma', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Plotly', 'Flask', 'g4f', 'Requests', 'BeautifulSoup', 'FastAPI', 'GitHub', 'GitLab', 'GitHub Actions', 'Z-тесты', 'T-тесты', 'Postman', 'SQLite', 'MySQL', 'XML', 'KML разметка', 'Excel', 'Notion', 'REST API', 'Slack', 'unittest', 'pytest'
    ],
    
    // Projects
    projects: [
      {
        title: "Призёр XVI Международного школьного конкурса РЭШ по экономике",
        description: "Организовано Российской экономической школой и ILoveEconomics.",
        tech: ["Экономика", "Анализ", "Исследования"],
        status: "2025",
        highlight: "Призёр",
        link: "http://schoolcontest.nes.ru/"
      },
      {
        title: "Стажировка в компании Спутникс (Технопарк Сколково)",
        description: "Участвовал в разных этапах разработки: программирование на XML-разметке, 3D-моделирование и печать деталей на фотополимерном 3D-принтере, веб-дизайн прототипа приложения в Figma, а также работа в центре управления полётами.",
        tech: ["XML", "3D-моделирование", "Figma", "Веб-дизайн"],
        status: "01.08.2024 – 31.08.2024",
        highlight: "Стажировка",
        link: "https://sputnix.ru/ru/"
      },
      {
        title: "StudySphere",
        description: "Образовательная платформа studysphere.volsh.org, включающая AI-ассистента на базе 13 нейросетей. Современный фронтенд на HTML, CSS, JavaScript с адаптивной версткой. Интеграция нейросетевых API для генерации и анализа текстов, создания изображений и работы с файлами. Гибкая настройка бота (язык, стиль, длина, креативность, история диалога). Разработана система квизов, учебник. Платформа бесплатна, поддерживает работу на мобильных устройствах, пользователи не ограничены в количестве запросов.",
        tech: ["HTML", "CSS", "JavaScript", "ИИ", "13 нейросетей", "API"],
        status: "25.12.2024 – 06.06.2025",
        highlight: "В разработке",
        link: "https://github.com/dany-simonov/SS"
      },
      {
        title: "DANO - Топ-200",
        description: "Топ-200 из 7619 участников в национальной олимпиаде DANO по анализу данных. Анализ компаний российского сектора во время COVID-19.",
        tech: ["Анализ данных", "Python", "Статистика"],
        status: "Участие",
        highlight: "Топ-200",
        link: "https://dano.hse.ru/"
      }
    ],
    
    // Experience cards - в хронологическом порядке от старого к новому
    experienceCards: [
      {
        title: "Дататон от \"Т-Банка\"",
        description: "Аналитик данных. План запуска проекта в сфере общепита в Калифорнии"
      },
      {
        title: "Дататон 2.0 от \"Т-Банка\"",
        description: "Бизнес-аналитик. Улучшение финансового состояния стартапа по доставке еды"
      },
      {
        title: "\"IT Purple Hack\" 2024",
        description: "Продуктовый аналитик. Система CLTV для удержания клиентов Альфа-банка"
      },
      {
        title: "Хакатон PROD \"Т-Банка\"",
        description: "Веб-разработчик и UI/UX дизайнер. Приложение для разделения счетов в ресторанах"
      },
      {
        title: "Nuclear IT Hack",
        description: "Продуктовый аналитик. Сервис анализа эмоционального состояния сотрудников"
      },
      {
        title: "DANO - Топ-200",
        description: "Топ-200 из 7619 участников. Анализ компаний российского сектора во время COVID-19"
      },
      {
        title: "Призёр РЭШ по экономике",
        description: "XVI Международный школьный конкурс по экономике. Призёр 2025"
      },
      {
        title: "\"IT Purple Hack\" 2025",
        description: "Fullstack-разработчик и продуктовый аналитик. Shopping Copilot - AI-стилист для Wildberries"
      },
      {
        title: "Кейс-чемпионат ППР Benefit Admin AI",
        description: "Создание кафетерия льгот в компании с использованием ИИ"
      }
    ],
    
    // Education
    educationData: [
      {
        institution: "Школа №2123 имени Мигеля Эрландеса",
        program: "11 класс Математическая вертикаль Плюс",
        period: "Настоящее время"
      },
      {
        institution: "Промышленное программирование (Python) - Яндекс.Лицей",
        period: "19.09.2024 - 15.04.2025"
      },
      {
        institution: "Летняя школа программной инженерии - FCS HSE",
        period: "01.07.2024 - 12.07.2024"
      },
      {
        institution: "Мегаинтенсив по анализу данных - FCS HSE",
        period: "14.04.2024 - 21.04.2024"
      },
      {
        institution: "Зимняя школа программной инженерии - FCS HSE",
        period: "24.02.2024 - 29.02.2024"
      },
      {
        institution: "Конференции: RUCODE, Purple Conf, MTS True Tech Day, Яндекс Conf",
        program: "Лекции и участие",
        period: "2024-2025"
      }
    ],
    
    // Contact
    connectDescription: "Если ты хочешь обсудить проект, дать совет, задать вопрос или просто поболтать, вот как со мной можно связаться. Я всегда открыт к интересным проектам и новым знакомствам. Если есть идеи, предложения или просто хочется пообщаться - пиши! Буду рад обсудить.",
    contactCards: [
      { label: "Email", value: "dany.ssimon2007@yandex.ru" },
      { label: "Телефон", value: "+7 901 387 49 45" },
      { label: "Местоположение", value: "Москва, Россия" }
    ],
    
    // Footer
    footerText: "© 2024-2025 Симонов Даниил. Все права защищены."
  },
  
  en: {
    // Header
    name: "Daniil Simonov",
    
    // Hero section
    age: "17 years old",
    location: "Moscow",
    description: "Hi! My name is Daniil, and I'm passionate about the world of technology and data analysis. I strive to apply my knowledge in developing interesting projects and solving complex problems. I enjoy data analysis, web application development, creating AI assistants, and much more. I'm constantly learning new things and ready for collaboration.",
    
    // Navigation/Buttons
    contact: "Contact",
    
    // Sections
    featuredProjects: "Projects & Achievements",
    experienceAchievements: "Hackathons & Olympiads",
    education: "Education",
    technicalSkills: "Technical Skills",
    letsConnect: "Contact",
    
    // Skills categories
    programming: "Programming",
    dataAnalytics: "Data Analysis",
    webDevelopment: "Web Development",
    webDesign: "Web Design",
    
    // Skills for animated diagram
    skillsData: [
      {
        category: "Python",
        skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Flask", "g4f", "Requests", "BeautifulSoup", "FastAPI"],
        level: 95,
        color: "#3776ab"
      },
      {
        category: "Git / Version Control",
        skills: ["GitHub", "GitLab", "GitHub Actions"],
        level: 90,
        color: "#f05032"
      },
      {
        category: "Design & Prototyping",
        skills: ["Figma", "FigJam", "Interfaces", "Prototypes"],
        level: 85,
        color: "#f24e1e"
      },
      {
        category: "A/B Testing",
        skills: ["Z-tests", "T-tests", "Statistics"],
        level: 80,
        color: "#00d4aa"
      },
      {
        category: "Web Parsing",
        skills: ["BeautifulSoup", "Requests", "Automation"],
        level: 88,
        color: "#ff6b6b"
      },
      {
        category: "SQL & Databases",
        skills: ["SQLite", "MySQL", "Queries"],
        level: 75,
        color: "#336791"
      },
      {
        category: "Web Technologies",
        skills: ["JavaScript", "HTML", "CSS", "React"],
        level: 70,
        color: "#f7df1e"
      },
      {
        category: "Data Visualization",
        skills: ["Power BI", "Tableau", "Plotly"],
        level: 82,
        color: "#e97627"
      },
      {
        category: "DevOps & Testing",
        skills: ["Docker", "unittest", "pytest"],
        level: 65,
        color: "#2496ed"
      },
      {
        category: "AI Integration",
        skills: ["Voice Assistants", "API Integration"],
        level: 78,
        color: "#9c27b0"
      }
    ],
    
    // Skills
    skills: [
      'Python', 'Git', 'AI Integration', 'Voice Assistant Development', 'Docker', 'Parsing', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'A/B Testing', 'Power BI', 'Tableau', 'Miro', 'Figma', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Plotly', 'Flask', 'g4f', 'Requests', 'BeautifulSoup', 'FastAPI', 'GitHub', 'GitLab', 'GitHub Actions', 'Z-tests', 'T-tests', 'Postman', 'SQLite', 'MySQL', 'XML', 'KML markup', 'Excel', 'Notion', 'REST API', 'Slack', 'unittest', 'pytest'
    ],
    
    // Projects
    projects: [
      {
        title: "Winner of XVI International School Competition in Economics",
        description: "Organized by Russian Economic School and ILoveEconomics.",
        tech: ["Economics", "Analysis", "Research"],
        status: "2025",
        highlight: "Winner",
        link: "http://schoolcontest.nes.ru/"
      },
      {
        title: "Internship at Sputnix Company (Skolkovo Technopark)",
        description: "Participated in various development stages: XML markup programming, 3D modeling and printing parts on photopolymer 3D printer, web design of application prototype in Figma, as well as work in the flight control center.",
        tech: ["XML", "3D Modeling", "Figma", "Web Design"],
        status: "01.08.2024 – 31.08.2024",
        highlight: "Internship",
        link: "https://sputnix.ru/ru/"
      },
      {
        title: "StudySphere",
        description: "Educational platform studysphere.volsh.org, including AI assistant based on 13 neural networks. Modern frontend in HTML, CSS, JavaScript with responsive layout. Integration of neural network APIs for text generation and analysis, image creation and file processing. Flexible bot settings (language, style, length, creativity, dialogue history). Developed quiz system, textbook. Platform is free, supports mobile devices, users are not limited in number of requests.",
        tech: ["HTML", "CSS", "JavaScript", "AI", "13 Neural Networks", "API"],
        status: "25.12.2024 – 06.06.2025",
        highlight: "In Development",
        link: "https://github.com/dany-simonov/SS"
      },
      {
        title: "DANO - Top 200",
        description: "Top 200 out of 7619 participants in DANO National Data Analysis Olympiad. Analysis of Russian sector companies during COVID-19.",
        tech: ["Data Analysis", "Python", "Statistics"],
        status: "Participation",
        highlight: "Top 200",
        link: "https://dano.hse.ru/"
      }
    ],
    
    // Experience cards - в хронологическом порядке от старого к новому
    experienceCards: [
      {
        title: "T-Bank Datathon",
        description: "Data analyst. Restaurant project launch plan in California"
      },
      {
        title: "T-Bank Datathon 2.0",
        description: "Business analyst. Improving financial state of food delivery startup"
      },
      {
        title: "IT Purple Hack 2024",
        description: "Product analyst. CLTV system for Alfa-Bank client retention"
      },
      {
        title: "T-Bank PROD Hackathon",
        description: "Web developer and UI/UX designer. Restaurant bill splitting application"
      },
      {
        title: "Nuclear IT Hackathon",
        description: "Product analyst. Employee emotional state analysis service"
      },
      {
        title: "DANO - Top 200",
        description: "Top 200 out of 7619 participants. Russian sector companies analysis during COVID-19"
      },
      {
        title: "Economics Competition Winner",
        description: "XVI International School Competition in Economics. Winner 2025"
      },
      {
        title: "IT Purple Hack 2025",
        description: "Fullstack developer and product analyst. Shopping Copilot - AI stylist for Wildberries"
      },
      {
        title: "PPR Benefit Admin AI Case Championship",
        description: "Creating company benefits cafeteria using AI"
      }
    ],
    
    // Education
    educationData: [
      {
        institution: "School №2123 named after Miguel Hernandez",
        program: "11th grade Mathematical Vertical Plus",
        period: "Current"
      },
      {
        institution: "Industrial Programming (Python) - Yandex Lyceum",
        period: "19.09.2024 - 15.04.2025"
      },
      {
        institution: "Summer School of Programming Engineering - FCS HSE",
        period: "01.07.2024 - 12.07.2024"
      },
      {
        institution: "Data Analysis Megaintensive - FCS HSE",
        period: "14.04.2024 - 21.04.2024"
      },
      {
        institution: "Winter School of Programming Engineering - FCS HSE",
        period: "24.02.2024 - 29.02.2024"
      },
      {
        institution: "Conferences: RUCODE, Purple Conf, MTS True Tech Day, Yandex Conf",
        program: "Lectures and participation",
        period: "2024-2025"
      }
    ],
    
    // Contact
    connectDescription: "If you want to discuss a project, give advice, ask a question, or just chat, here's how you can contact me. I'm always open to interesting projects and new acquaintances. If you have ideas, suggestions, or just want to chat - write! I'll be happy to discuss.",
    contactCards: [
      { label: "Email", value: "dany.ssimon2007@yandex.ru" },
      { label: "Phone", value: "+7 901 387 49 45" },
      { label: "Location", value: "Moscow, Russia" }
    ],
    
    // Footer
    footerText: "© 2024-2025 Daniil Simonov. All rights reserved."
  }
};
