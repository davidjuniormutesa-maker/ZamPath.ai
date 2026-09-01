// ================================================================
// CAREER QUEST - COMPLETE MERGED JAVASCRIPT APPLICATION (IMPROVED)
// ================================================================
// This file combines the best features from two projects:
//   - Current: 130+ careers, 30 questions, 4 languages, animated radar,
//              sample results, share, PDF, 5-career comparison
//   - V2:      Floating particles, typing effect, personality insights,
//              trait bars, smart discovery, AI discovery, career explorer,
//              load more button, milestone celebrations
// IMPROVEMENTS APPLIED:
//   - Search resets filter chips
//   - Comparison tool shows selected career badges & scroll hint
//   - Multi-select questions have a "Clear all" button
//   - Discovery mode shows a friendly welcome message
//   - PDF generation has a retry/refresh fallback
//   - Added "Reset Tools" button in results screen
//   - AI prompt now shows question text alongside answers
//   - PWA: Auto-update detection integrated
//   - Discovery mode: compact cluster cards, clean career lists
// ALL FEATURES ARE MERGED. EVERY LINE IS COMPLETE.
// ================================================================

// ================================================================
// SECTION 1: CAREER DATABASE (130+ Careers)
// ================================================================

const careers = {
    // ---- STEM CLUSTER (22 careers) ----
    'Mining Engineer': {
        cluster: 'STEM',
        icon: '⛏️',
        description: 'Design mines, plan extraction operations, ensure worker safety, and manage mining projects in Zambia\'s rich copper and mineral industry.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Chemistry', 'Geography'],
        institutions: ['Copperbelt University (CBU)', 'Zambia Institute of Technology (ZIT)'],
        salaryLocal: 'K15,000 - K35,000 per month',
        salaryGlobal: '$85,000 - $115,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['Australia', 'Canada', 'South Africa', 'Chile'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose Natural Science or STEM subjects in Form 1-4: Mathematics, English, Physics, Chemistry, and Geography.',
        pathwayAbroad: [
            'Complete a degree in Mining Engineering from CBU or UNZA',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Gain 2-3 years of practical experience in the Zambian mining sector',
            'Apply for international recognition: Zambia is a Provisional Signatory to the Washington Accord (2026)',
            'Apply for jobs or postgraduate scholarships abroad'
        ],
        story: 'Meet Mr. Mwansa, a mining engineer from Kitwe who now works in Australia.',
        careerDay: 'Visit a mine or talk to a mining engineer about their work.'
    },
    'Civil Engineer': {
        cluster: 'STEM',
        icon: '🏗️',
        description: 'Design and supervise construction projects like roads, bridges, buildings, and dams that help develop Zambia\'s infrastructure.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Geography', 'Chemistry'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K15,000 - K30,000 per month',
        salaryGlobal: '$65,000 - $95,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose STEM or Natural Science subjects in Form 1-4: Mathematics, English, Physics, and Geography.',
        pathwayAbroad: [
            'Complete a degree in Civil Engineering from CBU or UNZA',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Gain practical experience on major Zambian infrastructure projects',
            'Leverage EIZ registration: Zambia is a Provisional Signatory to the Washington Accord (2026)',
            'Apply for international engineering roles or further studies'
        ],
        story: 'Mrs. Banda is a civil engineer who worked on the Lusaka-Ndola road project.',
        careerDay: 'Visit a construction site and talk to the engineers there.'
    },
    'Software Developer': {
        cluster: 'STEM',
        icon: '💻',
        description: 'Create computer programs, mobile apps, and websites that solve problems for businesses and individuals in Zambia and around the world.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Physics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K10,000 - K25,000 per month',
        salaryGlobal: '$90,000 - $140,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Germany', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'DAAD (Germany)', 'Google Scholarships'],
        pathway: ['STEM'],
        pathwayDescription: 'Choose STEM subjects in Form 1-4: Mathematics, English, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Get a degree in Computer Science, Software Engineering, or related field',
            'Build a strong portfolio of projects (apps, websites, open-source contributions)',
            'Apply for remote positions with international companies',
            'For physical relocation: apply for skilled worker visas in the USA (H-1B), UK (Skilled Worker), or Canada (Express Entry)'
        ],
        story: 'Chanda from Lusaka taught himself coding online. He now earns in dollars while living in Zambia!',
        careerDay: 'Build a simple website or app using free online resources.'
    },
    'Data Analyst': {
        cluster: 'STEM',
        icon: '📊',
        description: 'Collect, analyze, and interpret data to help organizations make better decisions in business, health, and government.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Statistics'],
        institutions: ['University of Zambia (UNZA)', 'ZCAS University', 'Evelyn Hone College'],
        salaryLocal: 'K8,000 - K18,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose STEM or Natural Science subjects in Form 1-4: Mathematics, English, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Get a degree in Statistics, Mathematics, Computer Science, or Data Science',
            'Learn data analysis tools (Python, SQL, Excel, R, Power BI)',
            'Build a portfolio of data projects',
            'Apply for remote data analyst roles with international companies'
        ],
        story: 'Mary from Ndola started as a data entry clerk. She now works as a data analyst for a South African company.',
        careerDay: 'Analyze data from your school (e.g., exam results, attendance) and create a chart.'
    },
    'Architect': {
        cluster: 'STEM',
        icon: '🏛️',
        description: 'Design buildings and structures that are functional, safe, and beautiful for Zambia\'s growing urban areas.',
        requiredSubjects: ['Mathematics', 'English', 'Art'],
        recommendedSubjects: ['Physics', 'Geography'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K8,000 - K18,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Creative Arts'],
        pathwayDescription: 'Choose STEM or Creative Arts subjects in Form 1-4: Mathematics, English, Art, and Physics.',
        pathwayAbroad: [
            'Get a degree in Architecture from CBU or UNZA',
            'Complete professional practice training (internship) in Zambia',
            'Register with the Zambia Institute of Architects (ZIA)',
            'For international practice: apply for registration with foreign architectural boards (e.g., RIBA in the UK, AIA in the USA)'
        ],
        story: 'Mr. Mulenga designed several schools in Lusaka. He later studied sustainable architecture in Germany.',
        careerDay: 'Design a dream house on paper and explain your design choices.'
    },
    'Mathematician': {
        cluster: 'STEM',
        icon: '🔢',
        description: 'Use advanced mathematics to solve problems in science, engineering, finance, and technology. Work in research, education, or data science.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['Physics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K10,000 per month',
        salaryGlobal: '$70,000 - $110,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Germany', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose STEM or Natural Science subjects in Form 1-4: Mathematics, English, and Physics.',
        pathwayAbroad: [
            'Get a degree in Mathematics, Applied Mathematics, or Statistics',
            'Specialize in a field like data science, finance, cryptography, or actuarial science',
            'Pursue postgraduate studies through international scholarships',
            'Apply for research positions or industry roles in data science/finance'
        ],
        story: 'Dr. Chisenga studied mathematics at UNZA and now works as a data scientist for a global tech company.',
        careerDay: 'Try solving complex math puzzles or learn about cryptography.'
    },
    'Scientist': {
        cluster: 'STEM',
        icon: '🔬',
        description: 'Conduct research and experiments to understand the world around us. Work in fields like chemistry, physics, biology, or environmental science.',
        requiredSubjects: ['Science', 'Mathematics', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry', 'Physics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,500 - K9,000 per month',
        salaryGlobal: '$65,000 - $100,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Germany', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, English, Biology, Chemistry, and Physics.',
        pathwayAbroad: [
            'Get a degree in a science field (Biology, Chemistry, Physics, Environmental Science)',
            'Participate in research projects and internships during your studies',
            'Publish research papers and present at conferences',
            'Apply for international postgraduate scholarships for Master\'s or PhD programs'
        ],
        story: 'Dr. Mwansa is a biologist who studies plant diseases affecting Zambian crops.',
        careerDay: 'Conduct a simple science experiment at home or visit a lab.'
    },
    'Biologist': {
        cluster: 'STEM',
        icon: '🧬',
        description: 'Study living organisms, their evolution, and their interactions with the environment. Work in research, healthcare, agriculture, or conservation.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia', 'Germany'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, English, Biology, and Chemistry.',
        pathwayAbroad: [
            'Get a degree in Biology, Zoology, Botany, or related field',
            'Specialize in a subfield (microbiology, ecology, genetics, conservation)',
            'Gain research experience through internships or research assistant roles',
            'Apply for international postgraduate scholarships'
        ],
        story: 'Dr. Katongo studies wildlife in Zambia\'s national parks.',
        careerDay: 'Observe plants or animals in your environment and note what you see.'
    },
    'Chemist': {
        cluster: 'STEM',
        icon: '🧪',
        description: 'Study the properties of matter and conduct experiments to discover new substances. Work in research, manufacturing, healthcare, or environmental science.',
        requiredSubjects: ['Chemistry', 'Science', 'Mathematics'],
        recommendedSubjects: ['Physics', 'Biology'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,500 - K9,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Germany', 'South Africa', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, English, Chemistry, and Physics.',
        pathwayAbroad: [
            'Get a degree in Chemistry, Analytical Chemistry, or related field',
            'Specialize in a subfield (analytical, organic, inorganic, physical chemistry)',
            'Gain experience through research projects or industrial internships',
            'Apply for international postgraduate scholarships'
        ],
        story: 'Mrs. Banda is a chemist who works for a mining company analyzing mineral samples.',
        careerDay: 'Conduct simple chemistry experiments using household items.'
    },
    'Archeologist': {
        cluster: 'STEM',
        icon: '🏺',
        description: 'Study past human civilizations by excavating ancient sites, analyzing artifacts, and preserving cultural heritage in Zambia and around the world.',
        requiredSubjects: ['History', 'Geography', 'English'],
        recommendedSubjects: ['Science', 'Art'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$45,000 - $75,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with heritage sites'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNESCO Scholarships'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: History, Geography, and English.',
        pathwayAbroad: [
            'Get a degree in Archaeology, Anthropology, or Heritage Studies',
            'Participate in archaeological excavations in Zambia to gain field experience',
            'Publish research and present at academic conferences',
            'Apply for international postgraduate scholarships or research fellowships'
        ],
        story: 'Mr. Mulenga has worked on archaeological sites in Zambia.',
        careerDay: 'Visit a museum or historical site and learn about Zambia\'s past.'
    },
    'Engineer': {
        cluster: 'STEM',
        icon: '⚙️',
        description: 'Apply scientific knowledge to design, build, and maintain systems, structures, and machines. Engineering is a broad field with many specializations.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Chemistry', 'ICT/Computer Studies'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K6,000 - K12,000 per month',
        salaryGlobal: '$70,000 - $110,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose STEM or Natural Science subjects in Form 1-4: Mathematics, English, Physics, and Chemistry.',
        pathwayAbroad: [
            'Get a degree in Engineering (Mechanical, Electrical, Civil, Chemical, etc.) from CBU or UNZA',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Gain practical experience through internships or jobs in Zambia',
            'Leverage EIZ registration: Zambia is a Provisional Signatory to the Washington Accord (2026)'
        ],
        story: 'Mr. Chanda studied electrical engineering at CBU and now designs solar power systems.',
        careerDay: 'Visit an engineering site or build a simple machine from recycled materials.'
    },
    'IT Specialist': {
        cluster: 'STEM',
        icon: '🖥️',
        description: 'Manage computer systems, networks, and databases for businesses and organizations. Troubleshoot technical issues and ensure systems run smoothly.',
        requiredSubjects: ['ICT/Computer Studies', 'Mathematics', 'English'],
        recommendedSubjects: ['Physics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$65,000 - $100,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'Google Scholarships'],
        pathway: ['STEM'],
        pathwayDescription: 'Choose STEM subjects in Form 1-4: Mathematics, English, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Get a degree in Information Technology, Computer Science, or related field',
            'Get professional certifications (Cisco CCNA, Microsoft, AWS, CompTIA)',
            'Gain experience in IT support, network administration, or cybersecurity',
            'Apply for remote IT roles with international companies'
        ],
        story: 'Grace works as an IT specialist for a bank in Lusaka.',
        careerDay: 'Learn how to set up a simple computer network or troubleshoot a computer problem.'
    },
    'Aerospace Engineer': {
        cluster: 'STEM',
        icon: '✈️',
        description: 'Design and develop aircraft, spacecraft, satellites, and missiles. Aerospace engineers work on the cutting edge of technology and innovation.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Chemistry', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU) - through mechanical engineering'],
        salaryLocal: 'K12,000 - K28,000 per month',
        salaryGlobal: '$85,000 - $130,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Germany', 'France', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'DAAD (Germany)', 'Commonwealth'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose Natural Science or STEM subjects in Form 1-4: Mathematics, Physics, Chemistry, and English.',
        pathwayAbroad: [
            'Get a degree in Aerospace Engineering or Mechanical Engineering from UNZA or CBU',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Complete a Master\'s degree in Aerospace Engineering abroad (often required for international recognition)',
            'Apply for graduate positions with aerospace companies or space agencies'
        ],
        story: 'Zambia\'s first aerospace engineer, who dreamed of launching satellites from Zambia.',
        careerDay: 'Build a model rocket or learn about satellite technology.'
    },
    'Chemical Engineer': {
        cluster: 'STEM',
        icon: '🧪',
        description: 'Design and operate chemical plants, refine raw materials, and produce everything from fuels to medicines. Work in mining, manufacturing, and energy.',
        requiredSubjects: ['Chemistry', 'Mathematics', 'Physics'],
        recommendedSubjects: ['Biology', 'English'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K14,000 - K30,000 per month',
        salaryGlobal: '$75,000 - $110,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['South Africa', 'USA', 'UK', 'Canada', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose Natural Science or STEM subjects in Form 1-4: Mathematics, Chemistry, Physics, and English.',
        pathwayAbroad: [
            'Get a degree in Chemical Engineering from CBU or UNZA',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Gain practical experience in the Zambian mining or chemical industries',
            'Leverage EIZ recognition under the Washington Accord to work internationally'
        ],
        story: 'Mr. Banda, a chemical engineer, helped design a new process for refining copper.',
        careerDay: 'Visit a chemical plant or do a simple chemistry experiment.'
    },
    'Electrical Engineer': {
        cluster: 'STEM',
        icon: '⚡',
        description: 'Design, develop, and maintain electrical systems, from power generation to electronics. Work in energy, manufacturing, and telecommunications.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Chemistry', 'ICT/Computer Studies'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K13,000 - K28,000 per month',
        salaryGlobal: '$70,000 - $105,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose STEM or Natural Science subjects in Form 1-4: Mathematics, Physics, and English.',
        pathwayAbroad: [
            'Get a degree in Electrical Engineering from CBU or UNZA',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Gain practical experience in the energy or manufacturing sector',
            'Use Washington Accord recognition to work internationally'
        ],
        story: 'Ms. Zulu is an electrical engineer working on solar power projects in rural Zambia.',
        careerDay: 'Build a simple circuit or visit a power station.'
    },
    'Geologist': {
        cluster: 'STEM',
        icon: '🌍',
        description: 'Study the earth, its composition, and its processes. Geologists find minerals, predict earthquakes, and help protect the environment.',
        requiredSubjects: ['Geography', 'Science', 'Mathematics'],
        recommendedSubjects: ['Chemistry', 'Physics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K8,000 - K18,000 per month',
        salaryGlobal: '$60,000 - $95,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Australia', 'Canada', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Geography, Mathematics, Chemistry, and English.',
        pathwayAbroad: [
            'Get a degree in Geology or Earth Sciences from UNZA or CBU',
            'Complete field experience through internships with mining companies',
            'Pursue a Master\'s degree in a specialized area (mineral exploration, environmental geology)',
            'Apply for international roles in mining or environmental consulting'
        ],
        story: 'Mr. Mwansa discovered a new copper deposit in Zambia.',
        careerDay: 'Collect rock samples and study them.'
    },
    'Environmental Scientist': {
        cluster: 'STEM',
        icon: '🌱',
        description: 'Study the environment and find ways to protect it. Work on pollution control, climate change, conservation, and sustainable development.',
        requiredSubjects: ['Science', 'Geography', 'Biology'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K6,000 - K12,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'USA', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Geography, Chemistry, and English.',
        pathwayAbroad: [
            'Get a degree in Environmental Science or related field from UNZA or CBU',
            'Gain field experience in conservation or environmental management',
            'Pursue postgraduate studies or certifications',
            'Apply for international environmental roles with NGOs or government agencies'
        ],
        story: 'Mrs. Mwansa works with communities to protect Zambia\'s forests.',
        careerDay: 'Visit a conservation area and learn about environmental protection.'
    },
    'Biomedical Scientist': {
        cluster: 'STEM',
        icon: '🔬',
        description: 'Study biological processes and diseases to develop new medical treatments and technologies. Work in research labs, hospitals, and pharmaceutical companies.',
        requiredSubjects: ['Biology', 'Chemistry', 'Mathematics'],
        recommendedSubjects: ['Physics', 'English'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K7,000 - K15,000 per month',
        salaryGlobal: '$65,000 - $95,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Chemistry, Mathematics, and English.',
        pathwayAbroad: [
            'Get a degree in Biomedical Science or related field from UNZA or CBU',
            'Complete research internships in Zambia',
            'Pursue a Master\'s or PhD in biomedical research',
            'Apply for international research positions or fellowships'
        ],
        story: 'Dr. Chanda developed a new diagnostic test for malaria.',
        careerDay: 'Visit a medical lab and see how tests are performed.'
    },
    'Forensic Scientist': {
        cluster: 'STEM',
        icon: '🔍',
        description: 'Use scientific methods to analyze evidence from crime scenes. Work with police and legal systems to solve crimes.',
        requiredSubjects: ['Science', 'Biology', 'Chemistry'],
        recommendedSubjects: ['Mathematics', 'English'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K6,000 - K14,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Chemistry, Biology, Physics, and English.',
        pathwayAbroad: [
            'Get a degree in Forensic Science or related field from UNZA or CBU',
            'Complete training in forensic techniques and evidence analysis',
            'Gain experience with Zambian police or forensic labs',
            'Apply for international forensic roles with police forces or private labs'
        ],
        story: 'Mr. Mulenga helped solve a major crime using DNA evidence.',
        careerDay: 'Learn about fingerprint analysis or evidence collection.'
    },
    'Geneticist': {
        cluster: 'STEM',
        icon: '🧬',
        description: 'Study genes and heredity. Work in healthcare, agriculture, and research to understand and treat genetic disorders or improve crops.',
        requiredSubjects: ['Biology', 'Chemistry', 'Mathematics'],
        recommendedSubjects: ['Physics', 'English'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K7,000 - K16,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Chemistry, Mathematics, and English.',
        pathwayAbroad: [
            'Get a degree in Genetics or related field from UNZA',
            'Complete research projects in genetics',
            'Pursue a Master\'s or PhD in genetics or molecular biology',
            'Apply for international research or clinical genetics roles'
        ],
        story: 'Dr. Zulu studies genetic diseases in Zambian populations.',
        careerDay: 'Learn about DNA extraction or heredity.'
    },
    'Physiologist': {
        cluster: 'STEM',
        icon: '🧠',
        description: 'Study how living organisms function – from cells to whole body systems. Work in research, healthcare, sports science, and education.',
        requiredSubjects: ['Biology', 'Science', 'Mathematics'],
        recommendedSubjects: ['Chemistry', 'Physics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,500 - K12,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Chemistry, Physics, and English.',
        pathwayAbroad: [
            'Get a degree in Physiology or related field from UNZA or CBU',
            'Gain experience in research or clinical settings',
            'Pursue postgraduate studies in a specialized area',
            'Apply for international research or healthcare roles'
        ],
        story: 'Mrs. Mwansa is a physiologist helping athletes improve their performance.',
        careerDay: 'Measure heart rate and breathing during exercise.'
    },
    'Meteorologist': {
        cluster: 'STEM',
        icon: '🌦️',
        description: 'Study weather and climate patterns. Work in forecasting, aviation, agriculture, and climate research to help people and industries plan.',
        requiredSubjects: ['Geography', 'Mathematics', 'Physics'],
        recommendedSubjects: ['Science', 'English'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Geography, Mathematics, Physics, and English.',
        pathwayAbroad: [
            'Get a degree in Meteorology or Atmospheric Science from UNZA or CBU',
            'Complete internships at weather stations',
            'Pursue postgraduate studies in climate science',
            'Apply for international roles with weather agencies or research institutes'
        ],
        story: 'Mr. Banda is a meteorologist who helps farmers predict rainfall.',
        careerDay: 'Visit a weather station and learn about forecasting.'
    },

    // ---- HEALTHCARE CLUSTER (21 careers) ----
    'Medical Doctor': {
        cluster: 'Healthcare',
        icon: '🩺',
        description: 'Diagnose and treat illnesses, perform surgeries, and promote health in communities across Zambia.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K15,000 - K50,000 per month',
        salaryGlobal: '$150,000 - $400,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, English, Chemistry, Biology, Physics, and Additional Mathematics.',
        pathwayAbroad: [
            'Get a Bachelor of Medicine and Surgery (MBChB) from UNZA or CBU',
            'Complete internship at a Zambian hospital (1 year)',
            'Register with the Health Professions Council of Zambia (HPCZ)',
            'For the UK: Pass the PLAB exam, register with the General Medical Council (GMC)',
            'For the USA: Pass USMLE Steps 1-3, get ECFMG certification',
            'For Canada: Pass the MCCQE exams',
            'For Australia: Pass the AMC exams'
        ],
        story: 'Dr. Musonda grew up in a rural village. She studied at UNZA and now trains Zambian doctors.',
        careerDay: 'Visit a clinic or hospital and shadow a doctor for a day.'
    },
    'Surgeon': {
        cluster: 'Healthcare',
        icon: '🔪',
        description: 'Perform operations to treat injuries, diseases, and deformities. Surgeons work in hospitals and specialize in various areas.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K25,000 - K60,000 per month',
        salaryGlobal: '$350,000 - $500,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, English, Chemistry, Biology, and Physics.',
        pathwayAbroad: [
            'Get a Bachelor of Medicine and Surgery (MBChB) from UNZA or CBU',
            'Complete internship at a Zambian hospital (1 year)',
            'Complete specialist surgical training (5-7 years)',
            'Register with the Health Professions Council of Zambia (HPCZ)',
            'Follow the same licensing pathway as Medical Doctors'
        ],
        story: 'Dr. Mwansa is a surgeon who studied in Zambia and trained in the UK.',
        careerDay: 'Shadow a surgeon in a hospital (with permission).'
    },
    'Nurse': {
        cluster: 'Healthcare',
        icon: '👩🏽‍⚕️',
        description: 'Provide care to patients, administer medication, educate communities about health, and support doctors in hospitals and clinics.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'Chainama Hills College'],
        salaryLocal: 'K5,000 - K10,000 per month',
        salaryGlobal: '$70,000 - $110,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['UK', 'Canada', 'USA', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, English, Biology, and Chemistry.',
        pathwayAbroad: [
            'Complete a Diploma or Degree in Nursing from a recognized Zambian institution',
            'Register with the Nursing and Midwifery Council of Zambia (NMCZ)',
            'Gain at least 12 months of nursing experience in Zambia',
            'For the UK: Apply to the UK Nursing and Midwifery Council (NMC)',
            'For Canada: Apply to the National Nursing Assessment Service (NNAS)',
            'For Australia: Apply to the Australian Health Practitioner Regulation Agency (AHPRA)'
        ],
        story: 'Sister Grace worked at a rural clinic for 5 years. She now works in the UK.',
        careerDay: 'Talk to a nurse about their daily work and what they enjoy most.'
    },
    'Pharmacist': {
        cluster: 'Healthcare',
        icon: '💊',
        description: 'Prepare and dispense medications, advise patients on drug use, and ensure safe medicine practices in pharmacies and hospitals.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$90,000 - $140,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'Fulbright (USA)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, English, Chemistry, and Biology.',
        pathwayAbroad: [
            'Get a Degree in Pharmacy from UNZA',
            'Complete internship and register with the Pharmacy Council of Zambia',
            'For the UK: Apply to the General Pharmaceutical Council (GPhC)',
            'For Canada: Apply to the Pharmacy Examining Board of Canada (PEBC)',
            'For Australia: Apply to the Australian Pharmacy Council (APC)'
        ],
        story: 'Mr. Phiri runs a pharmacy in Matero.',
        careerDay: 'Visit a pharmacy and ask about how they help patients.'
    },
    'Paramedic': {
        cluster: 'Healthcare',
        icon: '🚑',
        description: 'Provide emergency medical care to patients in ambulances and at accident scenes. Paramedics are often the first responders in medical emergencies.',
        requiredSubjects: ['Science', 'English', 'Mathematics'],
        recommendedSubjects: ['Biology'],
        institutions: ['Zambia Medical College', 'Evelyn Hone College'],
        salaryLocal: 'K4,500 - K8,500 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with certification transfer'],
        scholarships: ['Government bursaries', 'ZAMFA'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, English, and Mathematics.',
        pathwayAbroad: [
            'Complete paramedic training and certification in Zambia',
            'Gain experience in emergency response in Zambia',
            'For international practice: research the paramedic licensing requirements in the target country',
            'Consider further studies: Advanced Life Support (ALS) or International Paramedic certifications'
        ],
        story: 'Mr. Banda works as a paramedic in Lusaka.',
        careerDay: 'Visit an ambulance station and talk to paramedics about their work.'
    },
    'Veterinarian': {
        cluster: 'Healthcare',
        icon: '🐾',
        description: 'Care for the health of animals, including pets, livestock, and wildlife. Treat illnesses, perform surgeries, and ensure food safety in Zambia.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Mathematics', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$70,000 - $100,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Australia', 'South Africa', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, English, and Chemistry.',
        pathwayAbroad: [
            'Get a degree in Veterinary Medicine from UNZA',
            'Complete internship and register with the Veterinary Council of Zambia',
            'For the UK: Apply to the Royal College of Veterinary Surgeons (RCVS)',
            'For the USA: Pass the North American Veterinary Licensing Examination (NAVLE)',
            'For Australia: Apply to the Australasian Veterinary Boards Council (AVBC)'
        ],
        story: 'Dr. Zulu works in a rural area, treating livestock.',
        careerDay: 'Visit a veterinary clinic or a farm with livestock.'
    },
    'Therapist': {
        cluster: 'Healthcare',
        icon: '🧠',
        description: 'Help people manage mental health issues, emotional challenges, and psychological disorders. Work in hospitals, clinics, or private practice.',
        requiredSubjects: ['Science', 'English', 'Civic Education'],
        recommendedSubjects: ['Biology', 'History'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Science, and Civics.',
        pathwayAbroad: [
            'Get a degree in Psychology, Counseling, or Clinical Psychology from UNZA or CBU',
            'Complete clinical training and supervised practice in Zambia',
            'Register with the Health Professions Council of Zambia (HPCZ)',
            'For international practice: research the licensing requirements in the target country'
        ],
        story: 'Mrs. Chilufya is a therapist who helps young people in Lusaka.',
        careerDay: 'Talk to a counselor or therapist about their work.'
    },
    'Clinical Officer': {
        cluster: 'Healthcare',
        icon: '🏥',
        description: 'Examine patients, diagnose common illnesses, prescribe treatments, and manage health clinics in rural and urban areas of Zambia.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['Chainama Hills College', 'Ndola College of Biomedical Sciences', 'Kabwe School of Nursing'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: 'Not typically recognized internationally - pathway through further studies',
        outlook: '🔥 High Demand in Zambia',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other SADC countries with certification'],
        scholarships: ['Government bursaries', 'ZAMFA'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, Science, and English.',
        pathwayAbroad: [
            'Complete Clinical Officer training and certification in Zambia',
            'Gain experience in Zambian health facilities',
            'Note: Clinical Officers can now register with the UK General Medical Council (GMC)',
            'For other countries: upgrade to a full medical degree (MBChB) or specialized diplomas'
        ],
        story: 'Mr. Banda works at a clinic in a rural area.',
        careerDay: 'Visit a local clinic and ask the clinical officer about their typical day.'
    },
    'Dentist': {
        cluster: 'Healthcare',
        icon: '🦷',
        description: 'Diagnose and treat problems with teeth, gums, and mouths. Work in dental clinics, hospitals, and community health programs.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K8,000 - K20,000 per month',
        salaryGlobal: '$120,000 - $180,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, English, and Chemistry.',
        pathwayAbroad: [
            'Get a degree in Dentistry from UNZA',
            'Complete internship and register with the Health Professions Council of Zambia (HPCZ)',
            'For the UK: Apply to the General Dental Council (GDC)',
            'For the USA: Pass the National Board Dental Examinations (NBDE)',
            'For Australia: Apply to the Dental Board of Australia (AHPRA)'
        ],
        story: 'Dr. Phiri runs a dental clinic in Lusaka.',
        careerDay: 'Visit a dental clinic and learn about oral health.'
    },
    'Radiographer': {
        cluster: 'Healthcare',
        icon: '📷',
        description: 'Operate X-ray and MRI machines to create images of the inside of the body. Help doctors diagnose injuries and illnesses.',
        requiredSubjects: ['Science', 'Mathematics', 'English'],
        recommendedSubjects: ['Biology', 'Physics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K5,000 - K10,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Mathematics, and English.',
        pathwayAbroad: [
            'Complete radiography training and certification in Zambia',
            'Register with the Health Professions Council of Zambia (HPCZ)',
            'For the UK: Apply to the Health and Care Professions Council (HCPC)',
            'For Australia: Apply to the Medical Radiation Practice Board of Australia (AHPRA)',
            'For Canada: Apply to the Canadian Association of Medical Radiation Technologists (CAMRT)'
        ],
        story: 'Mrs. Chiluba is a radiographer at a hospital in Ndola.',
        careerDay: 'Visit a hospital radiology department.'
    },
    'Laboratory Technician': {
        cluster: 'Healthcare',
        icon: '🧫',
        description: 'Perform lab tests on blood, tissue, and other samples to help doctors diagnose diseases and monitor treatment.',
        requiredSubjects: ['Science', 'Biology', 'Chemistry'],
        recommendedSubjects: ['Mathematics', 'English'],
        institutions: ['Evelyn Hone College', 'Ndola College of Biomedical Sciences'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$45,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Canada', 'Australia', 'USA'],
        scholarships: ['Government bursaries', 'ZAMFA', 'Commonwealth'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, and Chemistry.',
        pathwayAbroad: [
            'Complete laboratory technician training and certification in Zambia',
            'Register with the Health Professions Council of Zambia (HPCZ)',
            'For the UK: Apply to the Health and Care Professions Council (HCPC)',
            'For other countries: research the specific laboratory technician licensing requirements'
        ],
        story: 'Mr. Banda works in a hospital lab in Lusaka.',
        careerDay: 'Visit a hospital laboratory and see how tests are done.'
    },
    'Public Health Officer': {
        cluster: 'Healthcare',
        icon: '🌍',
        description: 'Monitor and improve the health of communities. Work on disease prevention, health education, and policy development.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Mathematics', 'Civic Education'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Science, and English.',
        pathwayAbroad: [
            'Get a degree in Public Health or related field from UNZA or CBU',
            'Complete internships with health organizations in Zambia',
            'Pursue a Master\'s in Public Health (MPH)',
            'Apply for international public health roles with NGOs or governments'
        ],
        story: 'Mrs. Mwansa is a public health officer leading immunization campaigns.',
        careerDay: 'Visit a health clinic and learn about community health programs.'
    },
    'Health Promotion Officer': {
        cluster: 'Healthcare',
        icon: '📢',
        description: 'Design and implement programs that promote healthy lifestyles and prevent diseases in communities and workplaces.',
        requiredSubjects: ['Science', 'English', 'Civic Education'],
        recommendedSubjects: ['Biology', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K4,500 - K10,000 per month',
        salaryGlobal: '$50,000 - $70,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, and English.',
        pathwayAbroad: [
            'Get a degree in Health Promotion or Public Health',
            'Gain experience in community health projects',
            'Pursue postgraduate qualifications in health promotion',
            'Apply for international health promotion roles'
        ],
        story: 'Mr. Banda runs a program to reduce HIV/AIDS in Lusaka.',
        careerDay: 'Create a health awareness poster or campaign.'
    },
    'Environmental Health Officer': {
        cluster: 'Healthcare',
        icon: '🌿',
        description: 'Inspect and regulate environmental factors that affect health, such as water quality, waste management, and food safety.',
        requiredSubjects: ['Science', 'Geography', 'Biology'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Natural Resources Development College (NRDC)'],
        salaryLocal: 'K5,000 - K11,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Australia', 'Canada', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Geography, Chemistry, and English.',
        pathwayAbroad: [
            'Get a degree in Environmental Health or related field from UNZA or NRDC',
            'Complete internships with environmental health departments',
            'Pursue professional certification (e.g., REHIS)',
            'Apply for international environmental health roles'
        ],
        story: 'Mrs. Chilufya ensures safe water supplies in rural areas.',
        careerDay: 'Inspect a water source and learn about water quality testing.'
    },
    'Dental Hygienist': {
        cluster: 'Healthcare',
        icon: '🪥',
        description: 'Clean teeth, examine for oral diseases, and educate patients on oral hygiene. Work in dental clinics and public health programs.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$65,000 - $90,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, and English.',
        pathwayAbroad: [
            'Complete a dental hygiene diploma or degree from UNZA or Evelyn Hone',
            'Register with the Health Professions Council of Zambia (HPCZ)',
            'For the UK: Apply to the General Dental Council (GDC)',
            'For Canada: Apply to the National Dental Hygiene Certification Board (NDHCB)',
            'For Australia: Apply to the Dental Board of Australia (AHPRA)'
        ],
        story: 'Ms. Mwansa is a dental hygienist who visits schools to teach children about oral health.',
        careerDay: 'Visit a dental clinic and learn about oral hygiene.'
    },
    'Midwife': {
        cluster: 'Healthcare',
        icon: '👶',
        description: 'Provide care to women during pregnancy, childbirth, and the postnatal period. Work in hospitals, clinics, and community settings.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Mathematics', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'Chainama Hills College'],
        salaryLocal: 'K5,000 - K10,000 per month',
        salaryGlobal: '$70,000 - $100,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'USA', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Science, and English.',
        pathwayAbroad: [
            'Complete a midwifery degree or diploma from UNZA or Evelyn Hone',
            'Register with the Nursing and Midwifery Council of Zambia (NMCZ)',
            'Gain at least 12 months of midwifery experience',
            'For the UK: Apply to the UK Nursing and Midwifery Council (NMC)',
            'For Canada: Apply to the Canadian Midwifery Regulators Council (CMRC)',
            'For Australia: Apply to the Australian Health Practitioner Regulation Agency (AHPRA)'
        ],
        story: 'Sister Grace has delivered hundreds of babies in rural Zambia.',
        careerDay: 'Visit a maternity ward and learn about childbirth.'
    },
    'Physician Assistant': {
        cluster: 'Healthcare',
        icon: '🩺',
        description: 'Practice medicine under the supervision of a doctor. Diagnose and treat patients, order tests, and prescribe medications.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K6,000 - K14,000 per month',
        salaryGlobal: '$90,000 - $130,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, Chemistry, and English.',
        pathwayAbroad: [
            'Get a degree in Physician Assistant studies from UNZA (or similar)',
            'Complete clinical training and certification in Zambia',
            'For the USA: Pass the PANCE exam, register with NCCPA',
            'For other countries: research the specific licensing requirements'
        ],
        story: 'Mr. Zulu is a physician assistant who treats patients in a busy Lusaka clinic.',
        careerDay: 'Shadow a physician assistant in a clinic.'
    },
    'Medical Coder': {
        cluster: 'Healthcare',
        icon: '📋',
        description: 'Translate medical records and procedures into standardized codes for billing and insurance purposes. Work in hospitals and insurance companies.',
        requiredSubjects: ['English', 'Mathematics', 'Science'],
        recommendedSubjects: ['ICT/Computer Studies', 'Biology'],
        institutions: ['Evelyn Hone College', 'ZCAS University'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$45,000 - $65,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Not typically available – industry certifications'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Complete a medical coding certificate program in Zambia',
            'Get certified (e.g., CPC – Certified Professional Coder)',
            'Gain experience in Zambian hospitals or insurance firms',
            'Apply for international remote or in-person medical coding roles'
        ],
        story: 'Mrs. Mwansa works as a medical coder for a hospital in Lusaka.',
        careerDay: 'Learn about medical billing and coding systems.'
    },
    'Health Educator': {
        cluster: 'Healthcare',
        icon: '📚',
        description: 'Teach people about health and wellness. Develop educational materials and lead community health programs.',
        requiredSubjects: ['Science', 'English', 'Civic Education'],
        recommendedSubjects: ['Biology', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K4,000 - K8,500 per month',
        salaryGlobal: '$50,000 - $70,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, and English.',
        pathwayAbroad: [
            'Get a degree in Health Education or Public Health',
            'Gain experience in community health projects',
            'Pursue postgraduate studies or certifications',
            'Apply for international health education roles'
        ],
        story: 'Mr. Banda teaches young people about HIV prevention.',
        careerDay: 'Create a health education presentation.'
    },
    'Nutritionist': {
        cluster: 'Healthcare',
        icon: '🥗',
        description: 'Advise on diet and nutrition to promote health and prevent disease. Work in hospitals, clinics, and community programs.',
        requiredSubjects: ['Science', 'Biology', 'Home Economics'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K4,500 - K10,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, and Home Economics.',
        pathwayAbroad: [
            'Get a degree in Nutrition or Dietetics from UNZA or Evelyn Hone',
            'Complete internships in hospitals or community health programs',
            'Pursue postgraduate studies or professional certification',
            'Apply for international nutrition roles'
        ],
        story: 'Mrs. Chilufya helps families in rural areas improve their diets.',
        careerDay: 'Plan a healthy meal and learn about nutrition.'
    },
    'Epidemiologist': {
        cluster: 'Healthcare',
        icon: '📊',
        description: 'Study the patterns and causes of diseases in populations. Work in public health, research, and outbreak response.',
        requiredSubjects: ['Mathematics', 'Biology', 'Science'],
        recommendedSubjects: ['Chemistry', 'English'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K7,000 - K16,000 per month',
        salaryGlobal: '$65,000 - $95,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Mathematics, Biology, and English.',
        pathwayAbroad: [
            'Get a degree in Epidemiology or Public Health from UNZA',
            'Complete research internships',
            'Pursue a Master\'s in Epidemiology',
            'Apply for international positions with WHO, CDC, or other health agencies'
        ],
        story: 'Dr. Mwansa tracks disease outbreaks in Zambia.',
        careerDay: 'Learn about disease tracking and statistics.'
    },

    // ---- BUSINESS CLUSTER (18 careers) ----
    'Accountant': {
        cluster: 'Business',
        icon: '📊',
        description: 'Manage financial records, prepare tax returns, audit companies, and help businesses in Zambia make sound financial decisions.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['Business Studies', 'Economics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K5,000 - K15,000 per month',
        salaryGlobal: '$60,000 - $95,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'ACCA Scholarships'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, Commerce, and Principles of Accounts.',
        pathwayAbroad: [
            'Get a degree in Accounting or related field from UNZA, CBU, or ZCAS',
            'Complete professional certifications: ACCA, CIMA, or ZICA',
            'ACCA and CIMA are internationally recognized qualifications',
            'Gain experience in Zambian organizations',
            'Apply for international accounting roles'
        ],
        story: 'Mutale studied accounting at UNZA and became a ZICA member.',
        careerDay: 'Help a local business track their expenses for a day.'
    },
    'Entrepreneur': {
        cluster: 'Business',
        icon: '🚀',
        description: 'Start and run your own business, creating jobs and solving problems in Zambia\'s economy.',
        requiredSkills: ['Business skills', 'Creativity', 'Leadership', 'Financial management', 'Communication'],
        recommendedSubjects: ['English', 'Mathematics', 'Business Studies'],
        institutions: ['Self-employed - skills can be developed anywhere'],
        salaryLocal: 'Varies widely - K2,000 to K100,000+ per month (depends on business success and industry)',
        salaryGlobal: 'Varies widely - global income potential',
        outlook: 'Varies by industry',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Anywhere with opportunity'],
        scholarships: ['Tony Elumelu Foundation', 'Zambia Youth Enterprise Fund', 'UNDP Youth Entrepreneurship'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: English, Mathematics, and Business Studies.',
        pathwayAbroad: [
            'Start a small business in Zambia to gain practical experience',
            'Learn business skills through online courses and practical experience',
            'Network with other entrepreneurs locally and internationally',
            'For international expansion: research the business registration and visa requirements',
            'Apply for international entrepreneurship programs and incubators'
        ],
        story: 'Lungowe started selling vegetables in the market. She now runs a catering business.',
        careerDay: 'Start a small business selling snacks or crafts for a week.'
    },
    'Banker': {
        cluster: 'Business',
        icon: '🏦',
        description: 'Manage financial transactions, provide banking services to customers, and help people and businesses grow their money.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['Business Studies', 'Economics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$50,000 - $80,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'USA', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Economics.',
        pathwayAbroad: [
            'Get a degree in Finance, Economics, or Business from UNZA or CBU',
            'Gain experience in the Zambian banking sector',
            'Get professional certifications (ACCA, CIMA, CFA)',
            'Apply for international banking roles'
        ],
        story: 'Charles started as a teller in a Lusaka bank and is now a branch manager.',
        careerDay: 'Visit a bank and ask about different career paths in banking.'
    },
    'Tax Attorney': {
        cluster: 'Business',
        icon: '⚖️',
        description: 'Specialize in tax law. Help individuals and businesses understand their tax obligations, minimize tax liability, and resolve tax disputes.',
        requiredSubjects: ['Mathematics', 'English', 'Civic Education'],
        recommendedSubjects: ['Business Studies', 'History'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K10,000 - K30,000 per month',
        salaryGlobal: '$90,000 - $150,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Business Studies', 'Social Science'],
        pathwayDescription: 'Choose Business Studies or Social Science subjects in Form 1-4: English, Mathematics, Civics, and Business Studies.',
        pathwayAbroad: [
            'Get a degree in Law (LLB) from UNZA or CBU',
            'Complete practical legal training and pass the Zambian Bar exam (LPQE) at ZIALE',
            'Specialize in tax law through further study or experience',
            'For international practice: most countries require additional bar exams',
            'Foreign-educated lawyers can qualify to take the New York Bar Exam'
        ],
        story: 'Mr. Mwansa is a tax attorney in Lusaka.',
        careerDay: 'Talk to a lawyer or visit a law firm to learn about legal careers.'
    },
    'Economist': {
        cluster: 'Business',
        icon: '📈',
        description: 'Study how economies work, analyze data, and provide advice on economic policy, business strategy, and financial decisions.',
        requiredSubjects: ['Mathematics', 'English', 'Economics'],
        recommendedSubjects: ['Business Studies', 'Geography'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K7,000 - K18,000 per month',
        salaryGlobal: '$80,000 - $120,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Economics.',
        pathwayAbroad: [
            'Get a degree in Economics or related field from UNZA or CBU',
            'Gain experience through research or internships',
            'Get professional certifications or pursue further education (Master\'s or PhD)',
            'Apply for international economic policy roles or research positions'
        ],
        story: 'Dr. Chibwe is an economist who advises the Zambian government.',
        careerDay: 'Read about Zambian economics and discuss it with someone in the field.'
    },
    'Human Resources': {
        cluster: 'Business',
        icon: '👥',
        description: 'Manage recruitment, training, employee relations, and workplace policies for organizations in Zambia.',
        requiredSubjects: ['English', 'Business Studies', 'Civic Education'],
        recommendedSubjects: ['Mathematics', 'Psychology'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Canada', 'Australia', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathway: ['Business Studies', 'Social Science'],
        pathwayDescription: 'Choose Business Studies or Social Science subjects in Form 1-4: English, Business Studies, and Civics.',
        pathwayAbroad: [
            'Get a degree in Human Resources, Business, or Psychology from UNZA or CBU',
            'Gain experience in HR roles in Zambia',
            'Get professional certifications (CIPD, SHRM)',
            'Apply for international HR roles'
        ],
        story: 'Mrs. Banda is an HR manager for a company in Lusaka.',
        careerDay: 'Talk to an HR professional about their work.'
    },
    'Marketing Manager': {
        cluster: 'Business',
        icon: '📣',
        description: 'Develop and implement strategies to promote products and services, build brand awareness, and reach customers in Zambia and beyond.',
        requiredSubjects: ['English', 'Business Studies'],
        recommendedSubjects: ['Art', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$70,000 - $110,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Business Studies', 'Creative Arts'],
        pathwayDescription: 'Choose Business Studies or Creative Arts subjects in Form 1-4: English, Business Studies, and Art.',
        pathwayAbroad: [
            'Get a degree in Marketing, Business, or Communications from UNZA, CBU, or ZCAS',
            'Gain experience in marketing roles in Zambia',
            'Build a portfolio of marketing campaigns',
            'Get professional certifications (CIM - Chartered Institute of Marketing)',
            'Apply for international marketing roles'
        ],
        story: 'Chanda is a marketing manager for a Zambian company.',
        careerDay: 'Design a marketing campaign for a school event.'
    },
    'Logistics Manager': {
        cluster: 'Business',
        icon: '📦',
        description: 'Manage the movement of goods and products, ensuring efficient transportation, warehousing, and distribution in Zambia and internationally.',
        requiredSubjects: ['Mathematics', 'English', 'Geography'],
        recommendedSubjects: ['Business Studies', 'ICT/Computer Studies'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Australia', 'Canada', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Geography.',
        pathwayAbroad: [
            'Get a degree in Logistics, Supply Chain, or Business from CBU or UNZA',
            'Gain experience in logistics roles in Zambia',
            'Get professional certifications (CILT, APICS)',
            'Apply for international logistics roles'
        ],
        story: 'Mr. Phiri manages supply chains for a major company.',
        careerDay: 'Visit a warehouse or shipping company to see how goods are moved.'
    },
    'Business Analyst': {
        cluster: 'Business',
        icon: '📉',
        description: 'Analyze business processes and data to help companies improve efficiency and make better decisions. Bridge the gap between IT and business.',
        requiredSubjects: ['Mathematics', 'English', 'Business Studies'],
        recommendedSubjects: ['ICT/Computer Studies', 'Economics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K7,000 - K18,000 per month',
        salaryGlobal: '$65,000 - $95,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Get a degree in Business Analysis, Information Systems, or Business',
            'Gain experience in business process analysis',
            'Get professional certifications (CBAP, PMI-PBA)',
            'Apply for international business analyst roles'
        ],
        story: 'Mutale helped a local bank improve its customer service using data analysis.',
        careerDay: 'Analyze a simple business process and suggest improvements.'
    },
    'Operations Manager': {
        cluster: 'Business',
        icon: '⚙️',
        description: 'Oversee the daily operations of a company, ensuring efficiency, quality, and cost-effectiveness. Manage teams and resources.',
        requiredSubjects: ['Mathematics', 'English', 'Business Studies'],
        recommendedSubjects: ['Economics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K8,000 - K20,000 per month',
        salaryGlobal: '$70,000 - $100,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Business Studies.',
        pathwayAbroad: [
            'Get a degree in Business Management or Operations Management',
            'Gain experience in operational roles in Zambia',
            'Pursue an MBA or professional certifications (Six Sigma, Lean)',
            'Apply for international operations management roles'
        ],
        story: 'Mrs. Mwansa manages operations for a large manufacturing company.',
        careerDay: 'Visit a factory and learn about production management.'
    },
    'Procurement Officer': {
        cluster: 'Business',
        icon: '🛒',
        description: 'Manage the purchasing of goods and services for organizations, ensuring value for money and compliance with regulations.',
        requiredSubjects: ['Business Studies', 'Mathematics', 'English'],
        recommendedSubjects: ['Economics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Australia', 'Canada', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Business Studies.',
        pathwayAbroad: [
            'Get a degree in Procurement, Supply Chain, or Business',
            'Gain experience in procurement in Zambia',
            'Get professional certifications (CIPS – Chartered Institute of Procurement & Supply)',
            'Apply for international procurement roles'
        ],
        story: 'Mr. Phiri manages procurement for a government ministry.',
        careerDay: 'Learn about tenders and procurement processes.'
    },
    'Administrative Officer': {
        cluster: 'Business',
        icon: '📁',
        description: 'Manage office administration, support staff, coordinate activities, and ensure smooth running of an organization\'s daily functions.',
        requiredSubjects: ['English', 'Business Studies', 'Civic Education'],
        recommendedSubjects: ['Mathematics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'ZCAS University'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$45,000 - $65,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: English, Business Studies, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Get a degree in Business Administration or Office Management',
            'Gain experience in administrative roles in Zambia',
            'Get professional certifications (CAP, CAM)',
            'Apply for international administrative roles'
        ],
        story: 'Mrs. Banda is an administrative officer for a company in Lusaka.',
        careerDay: 'Spend a day with an office administrator and learn about their work.'
    },
    'Finance Manager': {
        cluster: 'Business',
        icon: '💰',
        description: 'Oversee the financial health of an organization. Manage budgets, investments, and financial planning.',
        requiredSubjects: ['Mathematics', 'English', 'Business Studies'],
        recommendedSubjects: ['Economics', 'Accounting'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K10,000 - K30,000 per month',
        salaryGlobal: '$80,000 - $120,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'ACCA Scholarships'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Principles of Accounts.',
        pathwayAbroad: [
            'Get a degree in Finance, Accounting, or Business',
            'Complete professional certifications (ACCA, CIMA, CFA)',
            'Gain experience in Zambian organizations',
            'Apply for international finance management roles'
        ],
        story: 'Mr. Mwansa is a finance manager for a mining company.',
        careerDay: 'Learn about budgeting and financial planning.'
    },
    'Investment Analyst': {
        cluster: 'Business',
        icon: '📊',
        description: 'Analyze financial markets and investment opportunities to help individuals and institutions make profitable investment decisions.',
        requiredSubjects: ['Mathematics', 'English', 'Economics'],
        recommendedSubjects: ['Business Studies', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K8,000 - K20,000 per month',
        salaryGlobal: '$70,000 - $110,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Economics.',
        pathwayAbroad: [
            'Get a degree in Finance, Economics, or Investment Analysis',
            'Gain experience in financial analysis',
            'Get professional certifications (CFA – Chartered Financial Analyst)',
            'Apply for international investment analyst roles'
        ],
        story: 'Ms. Zulu is an investment analyst helping Zambian pension funds grow.',
        careerDay: 'Analyze a company\'s stock performance and make a recommendation.'
    },
    'Corporate Secretary': {
        cluster: 'Business',
        icon: '📝',
        description: 'Ensure that an organization complies with legal and regulatory requirements. Manage board meetings and corporate governance.',
        requiredSubjects: ['English', 'Business Studies', 'Civic Education'],
        recommendedSubjects: ['Mathematics', 'Law'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K7,000 - K18,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'South Africa', 'Australia', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'Fulbright (USA)'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: English, Business Studies, and Civics.',
        pathwayAbroad: [
            'Get a degree in Business Administration, Law, or Corporate Governance',
            'Gain experience in company secretarial roles in Zambia',
            'Get professional certifications (CIS – Chartered Institute of Secretaries)',
            'Apply for international corporate secretary roles'
        ],
        story: 'Mrs. Banda is a corporate secretary for a leading Zambian company.',
        careerDay: 'Attend a board meeting or learn about corporate governance.'
    },
    'Marketing Specialist': {
        cluster: 'Business',
        icon: '📣',
        description: 'Develop and execute marketing campaigns, conduct market research, and analyze customer behavior to promote products and services.',
        requiredSubjects: ['English', 'Business Studies', 'Art'],
        recommendedSubjects: ['Mathematics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Business Studies', 'Creative Arts'],
        pathwayDescription: 'Choose Business Studies or Creative Arts subjects in Form 1-4: English, Business Studies, and Art.',
        pathwayAbroad: [
            'Get a degree in Marketing, Business, or Communications',
            'Gain experience in marketing roles',
            'Build a portfolio of campaigns',
            'Get professional certifications (CIM, AMA)',
            'Apply for international marketing specialist roles'
        ],
        story: 'Chanda is a marketing specialist who launched a successful brand campaign.',
        careerDay: 'Create a marketing plan for a school event.'
    },
    'Business Development Manager': {
        cluster: 'Business',
        icon: '📈',
        description: 'Identify new business opportunities, build relationships with clients and partners, and drive growth for an organization.',
        requiredSubjects: ['English', 'Business Studies', 'Mathematics'],
        recommendedSubjects: ['Economics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K8,000 - K22,000 per month',
        salaryGlobal: '$70,000 - $110,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: English, Mathematics, and Business Studies.',
        pathwayAbroad: [
            'Get a degree in Business, Marketing, or related field',
            'Gain experience in sales and business development',
            'Pursue an MBA or professional certifications',
            'Apply for international business development roles'
        ],
        story: 'Mr. Phiri helped a Zambian company expand into the South African market.',
        careerDay: 'Identify a business opportunity and write a plan.'
    },
    'Supply Chain Manager': {
        cluster: 'Business',
        icon: '🔗',
        description: 'Oversee the entire supply chain from raw materials to finished goods. Manage procurement, production, and distribution to maximize efficiency.',
        requiredSubjects: ['Mathematics', 'English', 'Geography'],
        recommendedSubjects: ['Business Studies', 'ICT/Computer Studies'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K8,000 - K20,000 per month',
        salaryGlobal: '$70,000 - $105,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Canada', 'Australia', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Geography.',
        pathwayAbroad: [
            'Get a degree in Supply Chain Management or Logistics',
            'Gain experience in supply chain roles in Zambia',
            'Get professional certifications (CIPS, APICS, CSCP)',
            'Apply for international supply chain management roles'
        ],
        story: 'Mrs. Mwansa manages the supply chain for a large retailer.',
        careerDay: 'Track a product from supplier to consumer.'
    },

    // ---- CREATIVE CLUSTER (21 careers) ----
    'Graphic Designer': {
        cluster: 'Creative',
        icon: '🎨',
        description: 'Create visual designs for websites, advertisements, logos, and publications that help businesses and organizations communicate their message.',
        requiredSubjects: ['Art', 'English'],
        recommendedSubjects: ['ICT', 'Mathematics'],
        institutions: ['Evelyn Hone College', 'ZCAS University', 'University of Zambia (UNZA)'],
        salaryLocal: 'K3,000 - K8,000 per month',
        salaryGlobal: '$45,000 - $75,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts', 'STEM'],
        pathwayDescription: 'Choose Creative Arts or STEM subjects in Form 1-4: Art, English, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Build a strong portfolio of design work',
            'Get formal training in graphic design (degree or diploma)',
            'Learn design software (Adobe Creative Suite, Figma, etc.)',
            'Apply for international freelance or full-time roles'
        ],
        story: 'Emma from Kitwe taught herself graphic design online and works remotely.',
        careerDay: 'Design a poster or logo for a school event.'
    },
    'Animator': {
        cluster: 'Creative',
        icon: '🎬',
        description: 'Create moving images and visual effects for movies, TV shows, video games, and advertisements using computer software.',
        requiredSubjects: ['Art', 'ICT/Computer Studies', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'ZCAS University'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts', 'STEM'],
        pathwayDescription: 'Choose Creative Arts or STEM subjects in Form 1-4: Art, ICT/Computer Studies, and English.',
        pathwayAbroad: [
            'Get formal training in animation (degree or diploma)',
            'Build a portfolio of animation work (2D, 3D, motion graphics)',
            'Learn animation software (Maya, Blender, After Effects)',
            'Apply for international animation roles'
        ],
        story: 'David from Lusaka creates animated videos for Zambian companies.',
        careerDay: 'Create a simple animation using free software like Pivot or Blender.'
    },
    'Journalist': {
        cluster: 'Creative',
        icon: '📰',
        description: 'Research and report news stories for television, radio, newspapers, and online platforms, keeping Zambians informed about important issues.',
        requiredSubjects: ['English', 'History'],
        recommendedSubjects: ['Civic Education', 'Geography'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'K3,500 - K8,000 per month',
        salaryGlobal: '$45,000 - $75,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'USA', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'Fulbright (USA)'],
        pathway: ['Social Science', 'Creative Arts'],
        pathwayDescription: 'Choose Social Science or Creative Arts subjects in Form 1-4: English and History.',
        pathwayAbroad: [
            'Get a degree in Journalism or Communication Studies',
            'Gain experience in Zambian media houses',
            'Build a portfolio of published work',
            'Apply for international media roles or fellowships'
        ],
        story: 'Sandra started as a radio presenter and now works for a major television network.',
        careerDay: 'Write a news article about an event in your school or community.'
    },
    'Author': {
        cluster: 'Creative',
        icon: '✍️',
        description: 'Write books, articles, or other content for publication. Authors can write fiction, non-fiction, academic texts, or creative works.',
        requiredSkills: ['Writing skills', 'Creativity', 'Research skills', 'Communication'],
        recommendedSubjects: ['English', 'History', 'Art'],
        institutions: ['Self-employed - skills can be developed anywhere'],
        salaryLocal: 'Varies widely - K1,000 to K20,000+ per month (depends on book sales and royalties)',
        salaryGlobal: '$40,000 - $80,000 per year',
        outlook: 'Varies by genre',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with publishing opportunities'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'Fulbright (USA)'],
        pathway: ['Social Science', 'Creative Arts'],
        pathwayDescription: 'Choose Social Science or Creative Arts subjects in Form 1-4: English and History.',
        pathwayAbroad: [
            'Write regularly to build a portfolio and develop your craft',
            'Study creative writing or journalism for formal training',
            'Publish work independently or with publishers',
            'Apply for international writing residencies or fellowships'
        ],
        story: 'Mrs. Mwansa is a Zambian author who writes children\'s books.',
        careerDay: 'Write a short story or poem and share it with others.'
    },
    'Actor': {
        cluster: 'Creative',
        icon: '🎭',
        description: 'Perform in theatre, film, or television productions, bringing characters to life through acting and performance.',
        requiredSkills: ['Performance skills', 'Creativity', 'Communication', 'Confidence'],
        recommendedSubjects: ['English', 'Drama', 'History'],
        institutions: ['Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'Varies widely - K2,000 to K30,000+ per month (depends on projects and fame)',
        salaryGlobal: '$30,000 - $100,000+ per year',
        outlook: 'Varies by project',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with film and theatre industries'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: English and Drama/Arts.',
        pathwayAbroad: [
            'Take acting classes or join a theatre group',
            'Build a portfolio of performances (showreel, headshots, etc.)',
            'Audition for roles in film, TV, and theatre',
            'Apply for international acting roles or training programs'
        ],
        story: 'Lungowe is a Zambian actor who started in school plays.',
        careerDay: 'Perform a monologue or scene from a play.'
    },
    'Designer': {
        cluster: 'Creative',
        icon: '✏️',
        description: 'Create designs for products, spaces, or visual communications. Designers work in fashion, interior design, product design, and more.',
        requiredSubjects: ['Art', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Mathematics'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'K3,500 - K10,000 per month',
        salaryGlobal: '$50,000 - $80,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'USA', 'Australia', 'Canada'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Art and English.',
        pathwayAbroad: [
            'Get formal training in design (fashion, interior, or product)',
            'Build a portfolio of design work',
            'Learn design software and techniques',
            'Apply for international design roles'
        ],
        story: 'Chisi is a fashion designer in Lusaka.',
        careerDay: 'Design a piece of clothing or an interior space on paper.'
    },
    'Model': {
        cluster: 'Creative',
        icon: '📸',
        description: 'Model clothing and products for fashion shows, photo shoots, and advertising campaigns. Models represent brands and showcase fashion.',
        requiredSkills: ['Confidence', 'Posing skills', 'Communication', 'Professionalism'],
        recommendedSubjects: ['English', 'Art'],
        institutions: ['Not typically needed - skills can be developed through practice'],
        salaryLocal: 'Varies widely - K2,000 to K20,000+ per month (depends on brand deals and projects)',
        salaryGlobal: '$30,000 - $100,000+ per year',
        outlook: 'Competitive',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with fashion and advertising industries'],
        scholarships: ['Not typically available for modeling careers'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: English and Art.',
        pathwayAbroad: [
            'Build a portfolio of professional photos',
            'Sign with a modeling agency in Zambia',
            'Gain experience in local fashion shows and shoots',
            'Apply for international modeling roles or agencies'
        ],
        story: 'Mwansa is a Zambian model who has worked for local designers.',
        careerDay: 'Practice posing for photos and learn about the fashion industry.'
    },
    'Photographer': {
        cluster: 'Creative',
        icon: '📷',
        description: 'Capture images for personal or professional use, working in areas like journalism, advertising, weddings, or fine art.',
        requiredSkills: ['Photography skills', 'Creativity', 'Technical skills', 'Communication'],
        recommendedSubjects: ['Art', 'ICT/Computer Studies', 'English'],
        institutions: ['Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'Varies widely - K2,500 to K10,000+ per month (depends on clients and projects)',
        salaryGlobal: '$35,000 - $65,000 per year',
        outlook: 'Competitive',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with visual media needs'],
        scholarships: ['Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts', 'STEM'],
        pathwayDescription: 'Choose Creative Arts or STEM subjects in Form 1-4: Art, ICT/Computer Studies, and English.',
        pathwayAbroad: [
            'Build a portfolio of photographs',
            'Learn photography techniques and editing software',
            'Gain experience through commissions or internships',
            'Apply for international photography roles'
        ],
        story: 'Chanda is a photographer who captures the beauty of Zambia\'s landscapes.',
        careerDay: 'Take photos of your surroundings and practice editing them.'
    },
    'Musician': {
        cluster: 'Creative',
        icon: '🎵',
        description: 'Create, perform, and produce music across genres. Musicians can be solo artists, band members, composers, or producers.',
        requiredSkills: ['Musical talent', 'Creativity', 'Practice discipline', 'Performance skills'],
        recommendedSubjects: ['Music', 'English'],
        institutions: ['Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'Varies widely - K2,000 to K50,000+ per month (depends on shows, sales, and popularity)',
        salaryGlobal: '$20,000 - $100,000+ per year',
        outlook: 'Varies by genre and success',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with music industries'],
        scholarships: ['Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Music and English.',
        pathwayAbroad: [
            'Practice and develop your musical skills',
            'Build a portfolio of original music',
            'Perform in local venues and build a following',
            'Apply for international music opportunities'
        ],
        story: 'Zambian musicians like Pompi and Mampi have achieved international success.',
        careerDay: 'Learn to play an instrument or write a song.'
    },
    'Fashion Designer': {
        cluster: 'Creative',
        icon: '👗',
        description: 'Design and create clothing and accessories, combining creativity with practical skills to produce wearable art.',
        requiredSkills: ['Design skills', 'Creativity', 'Sewing skills', 'Fashion sense'],
        requiredSubjects: ['Art', 'English'],
        recommendedSubjects: ['Business Studies', 'ICT/Computer Studies'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'Varies widely - K3,000 to K15,000+ per month (depends on brand success)',
        salaryGlobal: '$45,000 - $80,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'USA', 'France', 'Italy'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Art and English.',
        pathwayAbroad: [
            'Get formal training in fashion design (degree or diploma)',
            'Build a portfolio of designs',
            'Gain experience through internships or apprenticeships',
            'Apply for international fashion roles or design programs'
        ],
        story: 'Sandra is a Zambian fashion designer who creates chitenge-inspired clothing.',
        careerDay: 'Design and make a simple piece of clothing.'
    },
    'Toymaker': {
        cluster: 'Creative',
        icon: '🧸',
        description: 'Design and create toys for children and adults. Toymakers can work in small workshops, for companies, or as independent artisans.',
        requiredSkills: ['Creativity', 'Craftsmanship', 'Design skills', 'Attention to detail'],
        recommendedSubjects: ['Art', 'Design and Technology'],
        institutions: ['Self-employed - skills can be developed through practice and training'],
        salaryLocal: 'K2,000 - K6,000 per month',
        salaryGlobal: '$30,000 - $55,000 per year',
        outlook: 'Niche market',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other countries with toy manufacturing industries'],
        scholarships: ['Not typically available for this career'],
        pathway: ['Creative Arts', 'Vocational Technology'],
        pathwayDescription: 'Choose Creative Arts or Vocational Technology subjects in Form 1-4: Art and Design & Technology.',
        pathwayAbroad: [
            'Develop toy-making skills through practice and training',
            'Build a portfolio of toy designs',
            'Start a small business selling toys locally',
            'Explore international markets through exports or online sales'
        ],
        story: 'Mr. Banda makes wooden toys in his workshop in Lusaka.',
        careerDay: 'Make a simple toy using recycled materials.'
    },
    'Art Teacher': {
        cluster: 'Creative',
        icon: '🎨',
        description: 'Teach art and design to students in schools and colleges. Inspire creativity and help students develop artistic skills.',
        requiredSubjects: ['Art', 'English', 'Civic Education'],
        recommendedSubjects: ['History', 'Music'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other SADC countries with certification transfer'],
        scholarships: ['Government bursaries', 'Chevening (UK)', 'Commonwealth'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Art, Music, and English.',
        pathwayAbroad: [
            'Get a teaching qualification in Art from UNZA or Evelyn Hone',
            'Register with the Teaching Council of Zambia',
            'Teach in Zambian schools to gain experience',
            'Apply for international teaching positions (often require additional certification)'
        ],
        story: 'Mrs. Chilufya has inspired many young artists in Lusaka.',
        careerDay: 'Create an art lesson plan and teach a class.'
    },
    'Art Administrator': {
        cluster: 'Creative',
        icon: '🖼️',
        description: 'Manage art galleries, museums, or cultural events. Coordinate exhibitions, fundraising, and community outreach.',
        requiredSubjects: ['Art', 'English', 'Business Studies'],
        recommendedSubjects: ['History', 'Civic Education'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$45,000 - $65,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['UK', 'USA', 'South Africa', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts', 'Business Studies'],
        pathwayDescription: 'Choose Creative Arts or Business Studies subjects in Form 1-4: Art, English, and Business Studies.',
        pathwayAbroad: [
            'Get a degree in Arts Administration or related field',
            'Gain experience in Zambian galleries or cultural organizations',
            'Pursue postgraduate studies in arts management',
            'Apply for international arts administration roles'
        ],
        story: 'Mr. Banda manages a contemporary art gallery in Lusaka.',
        careerDay: 'Visit an art gallery and learn about its management.'
    },
    'Makeup Artist': {
        cluster: 'Creative',
        icon: '💄',
        description: 'Apply makeup for fashion, film, theatre, and special events. Enhance clients\' appearance and create character looks.',
        requiredSkills: ['Creativity', 'Precision', 'Communication', 'Artistic skills'],
        recommendedSubjects: ['Art', 'English'],
        institutions: ['Private makeup schools and workshops'],
        salaryLocal: 'K2,500 - K8,000 per month (depends on clients)',
        salaryGlobal: '$30,000 - $60,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Anywhere with beauty and entertainment industries'],
        scholarships: ['Not typically available – industry certifications'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Art and English.',
        pathwayAbroad: [
            'Complete a makeup artistry course and build a portfolio',
            'Gain experience with local photographers, filmmakers, or events',
            'Apply for international positions in film, fashion, or luxury brands'
        ],
        story: 'Mary has become a sought-after makeup artist for Zambian celebrities.',
        careerDay: 'Practice makeup application and learn about different techniques.'
    },
    'Creative Director': {
        cluster: 'Creative',
        icon: '🧠',
        description: 'Lead creative teams in advertising, media, or design agencies. Develop concepts and ensure creative vision is delivered.',
        requiredSubjects: ['Art', 'English', 'Business Studies'],
        recommendedSubjects: ['ICT/Computer Studies', 'Marketing'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'ZCAS University'],
        salaryLocal: 'K10,000 - K25,000 per month',
        salaryGlobal: '$80,000 - $130,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Creative Arts', 'Business Studies'],
        pathwayDescription: 'Choose Creative Arts or Business Studies subjects in Form 1-4: Art, English, and Business Studies.',
        pathwayAbroad: [
            'Get a degree in Creative Arts, Marketing, or Communications',
            'Gain experience in creative roles in Zambia',
            'Build a strong portfolio of creative work',
            'Apply for international creative director positions'
        ],
        story: 'Mr. Mwansa is a creative director who has won several advertising awards.',
        careerDay: 'Develop a creative brief for a product and present it.'
    },
    'Illustrator': {
        cluster: 'Creative',
        icon: '✏️',
        description: 'Create drawings and illustrations for books, magazines, advertisements, and digital media. Bring ideas to life through visual art.',
        requiredSubjects: ['Art', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'History'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'K3,000 - K9,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Art and English.',
        pathwayAbroad: [
            'Build a strong portfolio of illustrations',
            'Get formal training in illustration or fine arts',
            'Learn digital illustration tools (Adobe Illustrator, Procreate)',
            'Apply for international freelance or full-time illustration roles'
        ],
        story: 'Sandra is an illustrator who has illustrated several children\'s books.',
        careerDay: 'Illustrate a story or a character from a book.'
    },
    'Cartoonist': {
        cluster: 'Creative',
        icon: '🖍️',
        description: 'Create cartoons and comic strips for newspapers, magazines, or online publications. Use humor and satire to comment on current events.',
        requiredSubjects: ['Art', 'English'],
        recommendedSubjects: ['History', 'ICT/Computer Studies'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'K3,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'Niche market',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Canada'],
        scholarships: ['Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Art and English.',
        pathwayAbroad: [
            'Build a portfolio of cartoons and comic strips',
            'Submit work to local newspapers or online platforms',
            'Apply for international syndication or freelance work'
        ],
        story: 'Mr. Phiri is a cartoonist whose work appears in major Zambian newspapers.',
        careerDay: 'Draw a political cartoon or a comic strip.'
    },
    'Content Creator': {
        cluster: 'Creative',
        icon: '📱',
        description: 'Produce engaging content (videos, articles, podcasts, social media posts) for brands, websites, and audiences. Build an online following.',
        requiredSkills: ['Creativity', 'Writing', 'Communication', 'Technology skills'],
        recommendedSubjects: ['English', 'ICT/Computer Studies', 'Art'],
        institutions: ['Self-employed – skills can be developed through practice and online courses'],
        salaryLocal: 'Varies widely – K1,500 to K25,000+ per month (depends on audience and monetization)',
        salaryGlobal: '$30,000 - $80,000 per year',
        outlook: 'High Growth',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Anywhere with internet access'],
        scholarships: ['Not typically available – self-taught'],
        pathway: ['Creative Arts', 'STEM'],
        pathwayDescription: 'Choose Creative Arts or STEM subjects in Form 1-4: English, ICT/Computer Studies, and Art.',
        pathwayAbroad: [
            'Learn content creation skills (video editing, writing, social media management)',
            'Build a portfolio of content on platforms like YouTube, Instagram, or a blog',
            'Monetize through ads, sponsorships, and partnerships',
            'Apply for international content creation opportunities'
        ],
        story: 'Chanda is a YouTube creator with over 100,000 subscribers.',
        careerDay: 'Create a short video or blog post about a topic you love.'
    },
    'Social Media Manager': {
        cluster: 'Creative',
        icon: '📲',
        description: 'Manage and grow an organization\'s social media presence. Create content, engage with followers, and analyze performance.',
        requiredSubjects: ['English', 'ICT/Computer Studies', 'Art'],
        recommendedSubjects: ['Business Studies', 'Marketing'],
        institutions: ['University of Zambia (UNZA)', 'ZCAS University', 'Evelyn Hone College'],
        salaryLocal: 'K4,000 - K12,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts', 'Business Studies'],
        pathwayDescription: 'Choose Creative Arts or Business Studies subjects in Form 1-4: English, ICT/Computer Studies, and Art.',
        pathwayAbroad: [
            'Get a degree in Marketing, Communications, or Digital Media',
            'Gain experience managing social media accounts in Zambia',
            'Get certifications in social media marketing (Hootsuite, Facebook Blueprint)',
            'Apply for international social media management roles'
        ],
        story: 'Grace manages social media for a major brand in Zambia.',
        careerDay: 'Create a social media content calendar for a business.'
    },
    '3D Artist': {
        cluster: 'Creative',
        icon: '🖥️',
        description: 'Create three-dimensional models and animations for video games, films, architecture, and product design.',
        requiredSubjects: ['Art', 'ICT/Computer Studies', 'Mathematics'],
        recommendedSubjects: ['Physics', 'English'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'ZCAS University'],
        salaryLocal: 'K4,500 - K12,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Creative Arts', 'STEM'],
        pathwayDescription: 'Choose Creative Arts or STEM subjects in Form 1-4: Art, ICT/Computer Studies, and Mathematics.',
        pathwayAbroad: [
            'Get formal training in 3D modeling and animation (degree or diploma)',
            'Build a portfolio of 3D work',
            'Learn industry software (Maya, 3ds Max, Blender, ZBrush)',
            'Apply for international 3D artist roles in gaming, film, or architecture'
        ],
        story: 'Michael created 3D models for a Zambian architecture firm.',
        careerDay: 'Create a 3D model of a building or character using Blender.'
    },
    'Filmmaker': {
        cluster: 'Creative',
        icon: '🎥',
        description: 'Direct and produce films, documentaries, or video content. Tell stories through moving images and sound.',
        requiredSkills: ['Creativity', 'Technical skills', 'Communication', 'Leadership'],
        recommendedSubjects: ['Art', 'English', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'Varies widely - K3,000 to K50,000+ per month (depends on project budget and success)',
        salaryGlobal: '$40,000 - $100,000+ per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Canada', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Creative Arts'],
        pathwayDescription: 'Choose Creative Arts subjects in Form 1-4: Art, English, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Get formal training in filmmaking (degree or diploma)',
            'Build a portfolio of short films or video projects',
            'Apply for international film schools or fellowships',
            'Submit films to festivals and network in the industry'
        ],
        story: 'Mrs. Mwansa is a filmmaker who has directed documentaries on Zambian culture.',
        careerDay: 'Write a short film script and shoot a scene with your phone.'
    },

    // ---- HELPING CLUSTER (16 careers) ----
    'Teacher': {
        cluster: 'Helping',
        icon: '👩🏽‍🏫',
        description: 'Educate and inspire students, helping them learn subjects and develop skills for their future in Zambia\'s schools.',
        requiredSubjects: ['English', 'Mathematics', 'Science'],
        recommendedSubjects: ['Geography', 'History', 'Civic Education'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'Kwame Nkrumah University'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'SADC region with certification transfer'],
        scholarships: ['Government bursaries', 'Chevening (UK)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Mathematics, and Science.',
        pathwayAbroad: [
            'Get a teaching qualification (Degree or Diploma) from UNZA, CBU, or Kwame Nkrumah',
            'Register with the Teaching Council of Zambia',
            'Teach in Zambian schools to gain experience',
            'Teach in Zambian international schools as a pathway to international teaching'
        ],
        story: 'Mr. Phiri has been teaching for 20 years at a rural school.',
        careerDay: 'Help a younger student with their homework or tutoring.'
    },
    'Social Worker': {
        cluster: 'Helping',
        icon: '🤝',
        description: 'Help people in difficult situations—children, families, the elderly, and people with disabilities—access support and services.',
        requiredSubjects: ['English', 'Civic Education', 'Science'],
        recommendedSubjects: ['History', 'Geography'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'NGO roles in other countries'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNDP Scholarships'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Science.',
        pathwayAbroad: [
            'Get a degree in Social Work from UNZA or CBU',
            'Register with the Social Work Council of Zambia',
            'Gain experience in community-based organizations in Zambia',
            'Apply for international NGO roles'
        ],
        story: 'Grace works with street children in Lusaka.',
        careerDay: 'Visit a community organization and see how they help people.'
    },
    'Guidance Counselor': {
        cluster: 'Helping',
        icon: '🧑‍🏫',
        description: 'Help students with academic, personal, and career development. Work in schools, colleges, and community organizations.',
        requiredSubjects: ['English', 'Civic Education', 'Science'],
        recommendedSubjects: ['Psychology', 'History'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'South Africa', 'Australia', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English and Civics.',
        pathwayAbroad: [
            'Get a degree in Counseling, Psychology, or Education from UNZA or CBU',
            'Complete professional training and supervised practice',
            'Register with relevant professional bodies in Zambia',
            'For international practice: research the counseling licensing requirements'
        ],
        story: 'Mrs. Mwansa is a guidance counselor at a school in Lusaka.',
        careerDay: 'Talk to a school counselor about their work.'
    },
    'Community Development Officer': {
        cluster: 'Helping',
        icon: '🏘️',
        description: 'Work with communities to identify their needs and develop projects that improve their lives. Focus on health, education, and economic development.',
        requiredSubjects: ['English', 'Civic Education', 'Geography'],
        recommendedSubjects: ['History', 'Social Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'NGO roles in other African countries'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNDP Scholarships'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Geography.',
        pathwayAbroad: [
            'Get a degree in Community Development, Social Work, or Development Studies from UNZA or CBU',
            'Gain experience in community projects in Zambia',
            'Build a portfolio of community development work',
            'Apply for international NGO roles'
        ],
        story: 'Mr. Phiri works with rural communities in Zambia.',
        careerDay: 'Volunteer with a community organization.'
    },
    'Priest': {
        cluster: 'Helping',
        icon: '⛪',
        description: 'Lead religious services, provide spiritual guidance, and support communities through pastoral care. Priests work in churches and religious organizations.',
        requiredSkills: ['Leadership', 'Communication', 'Compassion', 'Spiritual knowledge'],
        recommendedSubjects: ['English', 'Civic Education', 'History'],
        institutions: ['St. Augustine University', 'Zambia Catholic University', 'Theological Colleges'],
        salaryLocal: 'Varies widely - K2,000 to K8,000 per month (depends on the church and congregation)',
        salaryGlobal: 'Varies by denomination and country',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Zambia (primary)', 'Other countries with religious communities'],
        scholarships: ['Church scholarships', 'Religious organizations'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English and Civics.',
        pathwayAbroad: [
            'Complete theological training and formation',
            'Serve in a local parish or religious community',
            'Gain experience in pastoral care and leadership',
            'Apply for international religious roles or missionary work'
        ],
        story: 'Father Banda has served a church in Lusaka for 15 years.',
        careerDay: 'Talk to a religious leader about their work and community role.'
    },
    'Lawyer': {
        cluster: 'Helping',
        icon: '⚖️',
        description: 'Advise and represent clients in legal matters. Lawyers work in areas like criminal law, civil law, human rights, and corporate law in Zambia and beyond.',
        requiredSubjects: ['English', 'Civic Education', 'History'],
        recommendedSubjects: ['Mathematics', 'Business Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K8,000 - K30,000 per month',
        salaryGlobal: '$80,000 - $150,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and History.',
        pathwayAbroad: [
            'Get a degree in Law (LLB) from UNZA or CBU',
            'Complete practical legal training and pass the Zambian Bar exam (LPQE) at ZIALE',
            'Practice law in Zambia to gain experience',
            'For international practice: most countries require additional bar exams',
            'Foreign-educated lawyers from common law countries can qualify to take the New York Bar Exam'
        ],
        story: 'Mrs. Chirwa is a human rights lawyer in Zambia.',
        careerDay: 'Visit a court or a law firm to see lawyers in action.'
    },
    'Community Development Facilitator': {
        cluster: 'Helping',
        icon: '👥',
        description: 'Facilitate community development projects, empower local groups, and promote sustainable livelihoods.',
        requiredSubjects: ['English', 'Civic Education', 'Geography'],
        recommendedSubjects: ['Social Studies', 'Science'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K3,500 - K7,500 per month',
        salaryGlobal: '$35,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'NGO roles in other African countries'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNDP Scholarships'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Geography.',
        pathwayAbroad: [
            'Get a degree in Community Development or related field',
            'Gain experience in community projects',
            'Apply for international NGO facilitation roles'
        ],
        story: 'Mr. Banda facilitates community savings groups in rural Zambia.',
        careerDay: 'Facilitate a community meeting or discussion.'
    },
    'Program Support Specialist': {
        cluster: 'Helping',
        icon: '📋',
        description: 'Support the implementation of development programs by managing logistics, data, and communications.',
        requiredSubjects: ['English', 'Mathematics', 'Civic Education'],
        recommendedSubjects: ['ICT/Computer Studies', 'Business Studies'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'ZCAS University'],
        salaryLocal: 'K4,000 - K8,500 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathway: ['Social Science', 'Business Studies'],
        pathwayDescription: 'Choose Social Science or Business Studies subjects in Form 1-4: English, Mathematics, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Get a degree in Development Studies or related field',
            'Gain experience in program support roles',
            'Apply for international program support positions with NGOs'
        ],
        story: 'Grace supports health programs in rural Zambia.',
        careerDay: 'Help organize a community event or program.'
    },
    'Rehabilitation Aide': {
        cluster: 'Helping',
        icon: '♿',
        description: 'Assist people with disabilities or injuries to regain independence through therapy exercises and support.',
        requiredSubjects: ['Science', 'English', 'Physical Education'],
        recommendedSubjects: ['Biology', 'Civic Education'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'K3,000 - K6,500 per month',
        salaryGlobal: '$30,000 - $50,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with similar health systems'],
        scholarships: ['Government bursaries', 'Commonwealth'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Science, Biology, and English.',
        pathwayAbroad: [
            'Complete rehabilitation aide training in Zambia',
            'Gain experience in hospitals or rehabilitation centers',
            'Apply for international rehabilitation aide roles (often require additional certification)'
        ],
        story: 'Mr. Mwansa helps stroke survivors regain mobility.',
        careerDay: 'Visit a rehabilitation center and learn about therapy.'
    },
    'Counseling Psychologist': {
        cluster: 'Helping',
        icon: '🧠',
        description: 'Provide therapy and counseling to individuals, couples, and groups to help them overcome mental health challenges.',
        requiredSubjects: ['English', 'Science', 'Civic Education'],
        recommendedSubjects: ['Biology', 'Psychology'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Science, and Civics.',
        pathwayAbroad: [
            'Get a degree in Psychology from UNZA or CBU',
            'Complete supervised clinical training and licensure in Zambia',
            'Pursue postgraduate studies in counseling psychology',
            'Apply for international licensing (e.g., BPS in UK, APA in USA)'
        ],
        story: 'Dr. Chilufya is a counseling psychologist helping young people in Lusaka.',
        careerDay: 'Talk to a psychologist and learn about therapy techniques.'
    },
    'Youth Worker': {
        cluster: 'Helping',
        icon: '🧑‍🤝‍🧑',
        description: 'Work with young people to support their personal, social, and educational development. Organize activities and mentor youth.',
        requiredSubjects: ['English', 'Civic Education', 'Social Studies'],
        recommendedSubjects: ['Physical Education', 'Art'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$35,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Social Studies.',
        pathwayAbroad: [
            'Get a degree in Youth Work, Social Work, or Education',
            'Gain experience in youth organizations in Zambia',
            'Apply for international youth work roles (often require specific qualifications)'
        ],
        story: 'Mr. Banda runs a youth center in Lusaka.',
        careerDay: 'Mentor a younger student or organize a youth activity.'
    },
    'Child Protection Officer': {
        cluster: 'Helping',
        icon: '👶',
        description: 'Protect children from abuse, neglect, and exploitation. Work with families, schools, and legal systems to ensure child safety.',
        requiredSubjects: ['English', 'Civic Education', 'Science'],
        recommendedSubjects: ['Psychology', 'Law'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,500 - K9,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Science.',
        pathwayAbroad: [
            'Get a degree in Social Work, Law, or Child Development',
            'Gain experience in child protection organizations in Zambia',
            'Pursue postgraduate studies or certifications in child welfare',
            'Apply for international child protection roles'
        ],
        story: 'Mrs. Mwansa works to protect vulnerable children in Lusaka.',
        careerDay: 'Learn about child rights and protection laws.'
    },
    'Social Work Supervisor': {
        cluster: 'Helping',
        icon: '👥',
        description: 'Supervise social workers and coordinate social services programs. Ensure quality practice and support staff.',
        requiredSubjects: ['English', 'Civic Education', 'Social Studies'],
        recommendedSubjects: ['Psychology', 'Management'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K6,000 - K12,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Social Studies.',
        pathwayAbroad: [
            'Get a degree in Social Work from UNZA or CBU',
            'Gain experience as a social worker in Zambia',
            'Pursue a Master\'s in Social Work or Management',
            'Apply for international social work supervisor roles'
        ],
        story: 'Mr. Phiri supervises social workers in a district health office.',
        careerDay: 'Talk to a social work supervisor about their management responsibilities.'
    },
    'Family Support Worker': {
        cluster: 'Helping',
        icon: '🏠',
        description: 'Provide practical and emotional support to families in need. Help with parenting, budgeting, and accessing services.',
        requiredSubjects: ['English', 'Civic Education', 'Science'],
        recommendedSubjects: ['Psychology', 'Home Economics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$35,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Science.',
        pathwayAbroad: [
            'Get a qualification in social work, counseling, or family support',
            'Gain experience in family support organizations in Zambia',
            'Apply for international family support worker roles'
        ],
        story: 'Grace helps families in Lusaka to improve their home environments.',
        careerDay: 'Volunteer with a family support organization.'
    },
    'Crisis Counselor': {
        cluster: 'Helping',
        icon: '🆘',
        description: 'Provide immediate counseling and support to people in crisis, such as survivors of violence, trauma, or natural disasters.',
        requiredSubjects: ['English', 'Science', 'Civic Education'],
        recommendedSubjects: ['Psychology', 'Biology'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,000 - K9,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Science, and Civics.',
        pathwayAbroad: [
            'Get a degree in Psychology, Counseling, or Social Work',
            'Complete crisis intervention training',
            'Gain experience in crisis hotlines or emergency services',
            'Apply for international crisis counselor roles'
        ],
        story: 'Mr. Banda is a crisis counselor who helps survivors of gender-based violence.',
        careerDay: 'Learn about crisis intervention techniques.'
    },
    'Victim Advocate': {
        cluster: 'Helping',
        icon: '⚖️',
        description: 'Support victims of crime and help them navigate the legal system. Provide emotional support and accompany victims to court.',
        requiredSubjects: ['English', 'Civic Education', 'Law'],
        recommendedSubjects: ['Psychology', 'History'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K4,500 - K10,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and Law/History.',
        pathwayAbroad: [
            'Get a degree in Social Work, Law, or Psychology',
            'Gain experience in victim support organizations',
            'Apply for international victim advocate roles'
        ],
        story: 'Mrs. Mwansa advocates for victims of domestic violence.',
        careerDay: 'Visit a victim support center and learn about their work.'
    },

    // ---- OUTDOOR CLUSTER (16 careers) ----
    'Tour Guide': {
        cluster: 'Outdoor',
        icon: '🦁',
        description: 'Lead tourists through Zambia\'s national parks, historic sites, and cultural attractions, sharing knowledge about wildlife and history.',
        requiredSubjects: ['Geography', 'English', 'History'],
        recommendedSubjects: ['Biology', 'Tourism'],
        institutions: ['Evelyn Hone College', 'Zambia Wildlife Authority (ZAWA) Training'],
        salaryLocal: 'K3,000 - K7,000 per month + tips (tips can double income)',
        salaryGlobal: '$30,000 - $50,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with certification transfer'],
        scholarships: ['Zambia Tourism Board', 'UNWTO Scholarships'],
        pathway: ['Vocational PCA', 'Social Science'],
        pathwayDescription: 'Choose Vocational PCA or Social Science subjects in Form 1-4: Geography, English, and History.',
        pathwayAbroad: [
            'Get training in tourism and hospitality (Evelyn Hone, ZAWA)',
            'Gain experience in Zambian tourism sector',
            'Get certified as a professional tour guide in Zambia',
            'Apply for international tour guide roles or eco-tourism projects'
        ],
        story: 'Chifundo works at Victoria Falls and South Luangwa.',
        careerDay: 'Visit a local tourist attraction and learn about its history.'
    },
    'Farmer': {
        cluster: 'Outdoor',
        icon: '🌾',
        description: 'Grow crops and raise animals for food, helping feed Zambia and contribute to the country\'s agricultural economy.',
        requiredSubjects: ['Agriculture', 'Science', 'English'],
        recommendedSubjects: ['Geography', 'Mathematics'],
        institutions: ['Natural Resources Development College (NRDC)', 'Mulungushi University'],
        salaryLocal: 'Varies widely - K800 to K150,000+ per month (depends on farm size, crops, and market conditions)',
        salaryGlobal: 'Varies widely by country and crop',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'SADC region with agricultural experience'],
        scholarships: ['Zambia Agricultural Research Institute', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Vocational Agriculture'],
        pathwayDescription: 'Choose Vocational Agriculture subjects in Form 1-4: Agriculture, Science, and English.',
        pathwayAbroad: [
            'Get training in agriculture (Diploma or Degree) from NRDC or Mulungushi',
            'Gain practical farming experience in Zambia',
            'Learn modern farming techniques (agtech, irrigation, sustainable farming)',
            'Apply for international agricultural projects or research roles'
        ],
        story: 'Mrs. Zulu started farming with one hectare and now supplies major millers.',
        careerDay: 'Visit a farm and learn about what crops are grown.'
    },
    'Game Ranger': {
        cluster: 'Outdoor',
        icon: '🐘',
        description: 'Protect wildlife and natural habitats in Zambia\'s national parks, monitoring animals, managing conservation, and educating visitors.',
        requiredSubjects: ['Biology', 'Geography', 'English'],
        recommendedSubjects: ['Science', 'Agriculture'],
        institutions: ['Zambia Wildlife Authority (ZAWA)', 'Natural Resources Development College (NRDC)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$35,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with conservation experience'],
        scholarships: ['World Wildlife Fund (WWF)', 'Conservation International', 'BirdLife Zambia'],
        pathway: ['Vocational Agriculture', 'Natural Science'],
        pathwayDescription: 'Choose Vocational Agriculture or Natural Science subjects in Form 1-4: Biology, Geography, and English.',
        pathwayAbroad: [
            'Get training in wildlife management or conservation from ZAWA or NRDC',
            'Gain experience in Zambian national parks',
            'Get additional certifications in conservation',
            'Apply for international conservation roles with organizations like WWF'
        ],
        story: 'James is a game ranger in South Luangwa.',
        careerDay: 'Visit a national park or nature reserve and talk to a ranger.'
    },
    'Forest Ranger': {
        cluster: 'Outdoor',
        icon: '🌳',
        description: 'Manage and protect forest resources, prevent illegal logging, monitor wildlife, and promote sustainable forestry practices.',
        requiredSubjects: ['Geography', 'Biology', 'English'],
        recommendedSubjects: ['Science', 'Agriculture'],
        institutions: ['Natural Resources Development College (NRDC)', 'Zambia Forestry Department Training'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$35,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with forestry sectors'],
        scholarships: ['Government bursaries', 'World Wildlife Fund (WWF)'],
        pathway: ['Vocational Agriculture', 'Natural Science'],
        pathwayDescription: 'Choose Vocational Agriculture or Natural Science subjects in Form 1-4: Geography, Biology, and English.',
        pathwayAbroad: [
            'Get training in forestry or environmental science from NRDC',
            'Gain experience in Zambian forestry sector',
            'Get additional certifications in conservation',
            'Apply for international forestry or conservation roles'
        ],
        story: 'Mrs. Mwansa is a forest ranger in Zambia.',
        careerDay: 'Visit a forest or learn about tree planting.'
    },
    'Fishery Officer': {
        cluster: 'Outdoor',
        icon: '🐟',
        description: 'Manage and protect fish populations in rivers and lakes, monitor fishing practices, and promote sustainable fishing in Zambia.',
        requiredSubjects: ['Science', 'Biology', 'Geography'],
        recommendedSubjects: ['Agriculture', 'English'],
        institutions: ['Natural Resources Development College (NRDC)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$35,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with fisheries'],
        scholarships: ['Government bursaries', 'FAO Scholarships'],
        pathway: ['Vocational Agriculture', 'Natural Science'],
        pathwayDescription: 'Choose Vocational Agriculture or Natural Science subjects in Form 1-4: Science, Biology, and Geography.',
        pathwayAbroad: [
            'Get training in fisheries or aquatic sciences from NRDC',
            'Gain experience in Zambian fisheries sector',
            'Get additional certifications in fisheries management',
            'Apply for international fisheries roles with organizations like FAO'
        ],
        story: 'Mr. Banda is a fishery officer who monitors fish populations in Lake Kariba.',
        careerDay: 'Visit a fish farm or talk to a fisherman.'
    },
    'Surveyor': {
        cluster: 'Outdoor',
        icon: '📏',
        description: 'Measure and map land boundaries, topographic features, and infrastructure. Surveyors work in construction, mining, and land management.',
        requiredSubjects: ['Mathematics', 'Geography', 'English'],
        recommendedSubjects: ['Physics', 'ICT/Computer Studies'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$50,000 - $80,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'Australia', 'Canada', 'UK', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose STEM or Natural Science subjects in Form 1-4: Mathematics, Geography, and English.',
        pathwayAbroad: [
            'Get a degree in Surveying or Geomatics from CBU or UNZA',
            'Register with the Surveyors Institute of Zambia (SIZ)',
            'Gain experience in surveying projects',
            'Apply for registration with international surveying bodies (e.g., RICS in the UK)'
        ],
        story: 'Mr. Chanda is a surveyor who maps land for development projects.',
        careerDay: 'Learn how to use surveying equipment or map an area.'
    },
    'Safari Guide': {
        cluster: 'Outdoor',
        icon: '🦁',
        description: 'Lead wildlife safaris, educating tourists about animals, plants, and conservation. Work in national parks and private game reserves.',
        requiredSubjects: ['Geography', 'Biology', 'English'],
        recommendedSubjects: ['History', 'Tourism'],
        institutions: ['Zambia Wildlife Authority (ZAWA)', 'Evelyn Hone College'],
        salaryLocal: 'K3,500 - K8,000 per month + tips',
        salaryGlobal: '$30,000 - $55,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with safari industries'],
        scholarships: ['Zambia Tourism Board', 'WWF Scholarships'],
        pathway: ['Vocational PCA', 'Natural Science'],
        pathwayDescription: 'Choose Vocational PCA or Natural Science subjects in Form 1-4: Geography, Biology, and English.',
        pathwayAbroad: [
            'Get training in safari guiding from ZAWA or Evelyn Hone',
            'Gain experience in Zambian parks',
            'Get certified as a professional safari guide',
            'Apply for international safari guide roles in other African countries'
        ],
        story: 'Chipo is a safari guide who knows every animal in South Luangwa.',
        careerDay: 'Go on a game drive and learn to identify animals.'
    },
    'Tourism Operations Manager': {
        cluster: 'Outdoor',
        icon: '🏨',
        description: 'Manage the day-to-day operations of a tourism business, such as a lodge, tour company, or tourist attraction.',
        requiredSubjects: ['Business Studies', 'Geography', 'English'],
        recommendedSubjects: ['Tourism', 'Mathematics'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'K5,000 - K15,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNWTO Scholarships'],
        pathway: ['Business Studies', 'Vocational PCA'],
        pathwayDescription: 'Choose Business Studies or Vocational PCA subjects in Form 1-4: Business Studies, Geography, and English.',
        pathwayAbroad: [
            'Get a degree in Tourism Management or Business',
            'Gain experience in the Zambian tourism industry',
            'Pursue an MBA or specialized tourism certifications',
            'Apply for international tourism management roles'
        ],
        story: 'Mr. Banda manages a popular lodge in Livingstone.',
        careerDay: 'Visit a lodge and learn about its operations.'
    },
    'Conservation Officer': {
        cluster: 'Outdoor',
        icon: '🌿',
        description: 'Work to protect natural habitats and wildlife. Develop conservation strategies and work with communities to promote sustainable practices.',
        requiredSubjects: ['Biology', 'Geography', 'Science'],
        recommendedSubjects: ['English', 'Agriculture'],
        institutions: ['Natural Resources Development College (NRDC)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K4,500 - K10,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'WWF Scholarships'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Geography, and Science.',
        pathwayAbroad: [
            'Get a degree in Conservation Biology, Ecology, or Environmental Science',
            'Gain experience in conservation projects in Zambia',
            'Pursue postgraduate studies or certifications',
            'Apply for international conservation officer roles'
        ],
        story: 'Mrs. Mwansa works to protect Zambia\'s wetlands.',
        careerDay: 'Visit a conservation area and learn about protection efforts.'
    },
    'Wildlife Biologist': {
        cluster: 'Outdoor',
        icon: '🐒',
        description: 'Study wildlife populations and their habitats. Conduct research to inform conservation and management decisions.',
        requiredSubjects: ['Biology', 'Science', 'Geography'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Natural Science'],
        pathwayDescription: 'Choose Natural Science subjects in Form 1-4: Biology, Chemistry, and Geography.',
        pathwayAbroad: [
            'Get a degree in Wildlife Biology or Zoology from UNZA or CBU',
            'Complete research internships in wildlife conservation',
            'Pursue postgraduate studies in wildlife biology',
            'Apply for international research positions'
        ],
        story: 'Dr. Katongo studies elephant migration patterns in Zambia.',
        careerDay: 'Track wildlife and record observations.'
    },
    'Plant Operator': {
        cluster: 'Outdoor',
        icon: '🚜',
        description: 'Operate heavy machinery and equipment in construction, mining, and agriculture. Ensure safe and efficient operation.',
        requiredSkills: ['Technical skills', 'Safety awareness', 'Physical stamina', 'Problem-solving'],
        recommendedSubjects: ['Physical Education', 'Mathematics', 'Science'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Physical Education.',
        pathwayAbroad: [
            'Complete plant operator training and certification in Zambia (TEVET)',
            'Gain experience in construction, mining, or agriculture',
            'Get professional certifications (e.g., NCCCO, CITB)',
            'Apply for international plant operator roles'
        ],
        story: 'Mr. Chanda is a plant operator in a copper mine.',
        careerDay: 'Visit a construction site and learn about heavy equipment.'
    },
    'Heavy Equipment Operator': {
        cluster: 'Outdoor',
        icon: '🚧',
        description: 'Operate large machinery like bulldozers, excavators, and graders for construction, mining, and road building.',
        requiredSkills: ['Technical skills', 'Safety awareness', 'Physical stamina', 'Coordination'],
        recommendedSubjects: ['Physical Education', 'Mathematics', 'Science'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K4,500 - K12,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'USA'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Physical Education.',
        pathwayAbroad: [
            'Complete heavy equipment operator training and certification in Zambia (TEVET)',
            'Gain experience in construction or mining',
            'Get professional certifications (e.g., NCCCO, CITB)',
            'Apply for international heavy equipment operator roles'
        ],
        story: 'Mr. Zulu operates a bulldozer on a road construction project.',
        careerDay: 'Visit a construction site and learn about different machines.'
    },
    'Agricultural Extension Officer': {
        cluster: 'Outdoor',
        icon: '🌾',
        description: 'Advise farmers on modern agricultural techniques, crop management, and sustainable farming practices to improve yields.',
        requiredSubjects: ['Agriculture', 'Science', 'English'],
        recommendedSubjects: ['Geography', 'Mathematics'],
        institutions: ['Natural Resources Development College (NRDC)', 'Mulungushi University'],
        salaryLocal: 'K4,000 - K9,000 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'SADC region with agricultural experience'],
        scholarships: ['Government bursaries', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Vocational Agriculture'],
        pathwayDescription: 'Choose Vocational Agriculture subjects in Form 1-4: Agriculture, Science, and English.',
        pathwayAbroad: [
            'Get a degree in Agricultural Extension or related field from NRDC or Mulungushi',
            'Gain experience in farming communities in Zambia',
            'Apply for international agricultural extension roles'
        ],
        story: 'Mr. Banda helps farmers adopt drought-resistant crops.',
        careerDay: 'Visit a farm and learn about extension services.'
    },
    'Forestry Officer': {
        cluster: 'Outdoor',
        icon: '🌲',
        description: 'Manage forest resources, plan tree planting, and monitor forest health. Work with communities to promote sustainable forestry.',
        requiredSubjects: ['Geography', 'Biology', 'Science'],
        recommendedSubjects: ['Agriculture', 'English'],
        institutions: ['Natural Resources Development College (NRDC)'],
        salaryLocal: 'K4,000 - K9,000 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with forestry sectors'],
        scholarships: ['Government bursaries', 'WWF Scholarships'],
        pathway: ['Vocational Agriculture', 'Natural Science'],
        pathwayDescription: 'Choose Vocational Agriculture or Natural Science subjects in Form 1-4: Geography, Biology, and English.',
        pathwayAbroad: [
            'Get training in forestry from NRDC',
            'Gain experience in forest management in Zambia',
            'Apply for international forestry roles (often require additional certification)'
        ],
        story: 'Mrs. Mwansa is a forestry officer who promotes tree planting.',
        careerDay: 'Visit a forest and learn about tree identification.'
    },
    'Irrigation Specialist': {
        cluster: 'Outdoor',
        icon: '💧',
        description: 'Design and manage irrigation systems to improve agricultural productivity, especially in dry areas.',
        requiredSubjects: ['Science', 'Geography', 'Mathematics'],
        recommendedSubjects: ['Agriculture', 'Physics'],
        institutions: ['Natural Resources Development College (NRDC)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Australia', 'South Africa', 'USA', 'Canada', 'UK'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Vocational Agriculture', 'STEM'],
        pathwayDescription: 'Choose Vocational Agriculture or STEM subjects in Form 1-4: Science, Mathematics, and Geography.',
        pathwayAbroad: [
            'Get a degree in Irrigation Engineering or Agricultural Engineering from NRDC or CBU',
            'Gain experience in irrigation projects in Zambia',
            'Apply for international irrigation specialist roles'
        ],
        story: 'Mr. Phiri designed a solar-powered irrigation system for a rural community.',
        careerDay: 'Learn about different irrigation methods.'
    },
    'Horticulturist': {
        cluster: 'Outdoor',
        icon: '🌱',
        description: 'Grow flowers, fruits, vegetables, and ornamental plants. Work in nurseries, farms, and landscaping.',
        requiredSubjects: ['Agriculture', 'Science', 'Biology'],
        recommendedSubjects: ['Geography', 'Mathematics'],
        institutions: ['Natural Resources Development College (NRDC)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K4,000 - K9,000 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'USA', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Vocational Agriculture'],
        pathwayDescription: 'Choose Vocational Agriculture subjects in Form 1-4: Agriculture, Science, and Biology.',
        pathwayAbroad: [
            'Get a degree in Horticulture or related field from NRDC or UNZA',
            'Gain experience in commercial nurseries or farms',
            'Apply for international horticulture roles'
        ],
        story: 'Mrs. Zulu runs a successful cut-flower business.',
        careerDay: 'Visit a nursery and learn about plant propagation.'
    },

    // ---- PUBLIC SERVICE CLUSTER (16 careers) ----
    'Governor': {
        cluster: 'Public Service',
        icon: '🏛️',
        description: 'Lead a province or region in Zambia, overseeing government services, development projects, and public policy implementation.',
        requiredSubjects: ['English', 'Civic Education', 'History'],
        recommendedSubjects: ['Geography', 'Business Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K15,000 - K30,000 per month',
        salaryGlobal: 'Varies by country',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries', 'Chevening (UK)', 'Commonwealth'],
        pathway: ['Social Science', 'Business Studies'],
        pathwayDescription: 'Choose Social Science or Business Studies subjects in Form 1-4: English, Civics, and History.',
        pathwayAbroad: [
            'Get a degree in Public Administration, Law, or Political Science from UNZA or CBU',
            'Gain experience in government or public service',
            'Build a track record of leadership and service',
            'Consider international exchange programs or further studies'
        ],
        story: 'Ms. Mwansa is a governor who has transformed her province.',
        careerDay: 'Attend a community meeting or talk to a local government official.'
    },
    'Army': {
        cluster: 'Public Service',
        icon: '🪖',
        description: 'Serve in the Zambian Army, protecting the country\'s security, participating in peacekeeping missions, and supporting communities.',
        requiredSkills: ['Physical fitness', 'Discipline', 'Leadership', 'Teamwork', 'Patriotism'],
        recommendedSubjects: ['English', 'Civic Education', 'Physical Education'],
        institutions: ['Zambia National Service', 'Zambian Army Training Schools'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$30,000 - $60,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Zambia (primary)', 'Peacekeeping missions worldwide'],
        scholarships: ['Government bursaries'],
        pathway: ['Vocational PES'],
        pathwayDescription: 'Choose Vocational Physical Education & Sports subjects in Form 1-4: Physical Education, English, and Civics.',
        pathwayAbroad: [
            'Meet physical and educational requirements for army recruitment',
            'Complete basic training in the Zambian Army',
            'Advance through training and promotions',
            'Apply for international peacekeeping missions with the UN or African Union'
        ],
        story: 'Captain Phiri has served in the Zambian Army for 10 years.',
        careerDay: 'Talk to a soldier or visit a military training facility.'
    },
    'Firefighter': {
        cluster: 'Public Service',
        icon: '🚒',
        description: 'Respond to fires and emergencies, rescue people, and educate communities about fire safety and prevention.',
        requiredSkills: ['Physical fitness', 'Bravery', 'Teamwork', 'Quick thinking', 'Communication'],
        recommendedSubjects: ['Physical Education', 'English', 'Science'],
        institutions: ['Zambia Fire Service Training School'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries'],
        pathway: ['Vocational PES'],
        pathwayDescription: 'Choose Vocational Physical Education & Sports subjects in Form 1-4: Physical Education and English.',
        pathwayAbroad: [
            'Meet physical and educational requirements for recruitment',
            'Complete firefighter training in Zambia',
            'Gain experience in emergency response',
            'Apply for international firefighter exchanges or roles'
        ],
        story: 'Mr. Banda is a firefighter in Lusaka.',
        careerDay: 'Visit a fire station and learn about fire safety.'
    },
    'Police Officer': {
        cluster: 'Public Service',
        icon: '👮',
        description: 'Protect people and property, enforce laws, investigate crimes, and support community safety in Zambia.',
        requiredSkills: ['Physical fitness', 'Integrity', 'Communication', 'Problem-solving', 'Courage'],
        recommendedSubjects: ['English', 'Civic Education', 'Physical Education'],
        institutions: ['Zambia Police Training School'],
        salaryLocal: 'K4,000 - K9,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English and Civics.',
        pathwayAbroad: [
            'Meet physical and educational requirements for recruitment',
            'Complete police training in Zambia',
            'Gain experience in community policing and law enforcement',
            'Apply for international police exchanges or roles with INTERPOL'
        ],
        story: 'Sergeant Chilufya has served in the Zambia Police Service for 8 years.',
        careerDay: 'Talk to a police officer about their work or visit a police station.'
    },
    'Security Guard': {
        cluster: 'Public Service',
        icon: '🛡️',
        description: 'Protect buildings, people, and property by monitoring access, responding to incidents, and maintaining security in Zambia.',
        requiredSkills: ['Alertness', 'Communication', 'Physical fitness', 'Dependability'],
        recommendedSubjects: ['English', 'Physical Education'],
        institutions: ['Private security training companies'],
        salaryLocal: 'K1,500 - K3,500 per month',
        salaryGlobal: '$25,000 - $45,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Not typically available for this career'],
        pathway: ['Vocational PES'],
        pathwayDescription: 'Choose Vocational Physical Education & Sports subjects in Form 1-4: Physical Education and English.',
        pathwayAbroad: [
            'Complete security training in Zambia',
            'Gain experience in security roles',
            'Get additional certifications in security',
            'Apply for private security roles internationally'
        ],
        story: 'Mr. Mwansa works as a security guard at a bank in Lusaka.',
        careerDay: 'Talk to a security guard about their work and safety skills.'
    },
    'Pilot': {
        cluster: 'Public Service',
        icon: '✈️',
        description: 'Fly aircraft for commercial airlines, cargo companies, or private operators. Pilots transport passengers and goods safely across Zambia and the world.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Geography', 'Science'],
        institutions: ['Zambia National Airline Training School', 'African Pilot Training Center'],
        salaryLocal: 'K15,000 - K40,000 per month',
        salaryGlobal: '$80,000 - $150,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Airline training programs'],
        pathway: ['STEM', 'Natural Science'],
        pathwayDescription: 'Choose STEM or Natural Science subjects in Form 1-4: Mathematics, Physics, and English.',
        pathwayAbroad: [
            'Complete pilot training in Zambia or abroad',
            'Build flying hours (private, commercial, airline transport)',
            'Get licensed by the Zambia Civil Aviation Authority (ZCAA)',
            'For international practice: convert your license to the target country\'s license',
            'Apply for international pilot roles with airlines or charter companies'
        ],
        story: 'Captain Mwansa is a commercial pilot who flies for an international airline.',
        careerDay: 'Visit an airport and talk to a pilot about their career.'
    },
    'Administrative Officer': {
        cluster: 'Public Service',
        icon: '📋',
        description: 'Manage administrative tasks in government offices, including records management, correspondence, and office coordination.',
        requiredSubjects: ['English', 'Civic Education', 'Business Studies'],
        recommendedSubjects: ['ICT/Computer Studies', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K4,000 - K9,000 per month',
        salaryGlobal: '$40,000 - $60,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries', 'Chevening (UK)'],
        pathway: ['Business Studies', 'Social Science'],
        pathwayDescription: 'Choose Business Studies or Social Science subjects in Form 1-4: English, Civics, and Business Studies.',
        pathwayAbroad: [
            'Get a degree in Public Administration or Business Administration',
            'Gain experience in government administrative roles',
            'Apply for international administrative roles (often require additional certifications)'
        ],
        story: 'Mrs. Banda is an administrative officer in a district council.',
        careerDay: 'Visit a government office and learn about its administration.'
    },
    'Human Resource Officer': {
        cluster: 'Public Service',
        icon: '👥',
        description: 'Manage recruitment, training, and employee welfare in public sector organizations.',
        requiredSubjects: ['English', 'Business Studies', 'Civic Education'],
        recommendedSubjects: ['Psychology', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathway: ['Business Studies', 'Social Science'],
        pathwayDescription: 'Choose Business Studies or Social Science subjects in Form 1-4: English, Business Studies, and Civics.',
        pathwayAbroad: [
            'Get a degree in Human Resources or Business',
            'Gain experience in HR in the Zambian public sector',
            'Get professional certifications (CIPD, SHRM)',
            'Apply for international HR roles'
        ],
        story: 'Mr. Phiri is an HR officer in a government ministry.',
        careerDay: 'Talk to an HR professional about recruitment processes.'
    },
    'Records Management Officer': {
        cluster: 'Public Service',
        icon: '📁',
        description: 'Organize and maintain official records and archives in government offices to ensure efficient information retrieval.',
        requiredSubjects: ['English', 'ICT/Computer Studies', 'Civic Education'],
        recommendedSubjects: ['History', 'Business Studies'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K3,500 - K8,000 per month',
        salaryGlobal: '$35,000 - $55,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: English, ICT/Computer Studies, and Civics.',
        pathwayAbroad: [
            'Get a degree in Records Management or Information Science',
            'Gain experience in records management in the public sector',
            'Apply for international records management roles'
        ],
        story: 'Mrs. Mwansa manages records at a government department.',
        careerDay: 'Learn about filing and archiving systems.'
    },
    'Procurement Officer': {
        cluster: 'Public Service',
        icon: '🛒',
        description: 'Manage procurement of goods and services for government entities, ensuring transparency and value for money.',
        requiredSubjects: ['Business Studies', 'Mathematics', 'English'],
        recommendedSubjects: ['Economics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Canada', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Business Studies, Mathematics, and English.',
        pathwayAbroad: [
            'Get a degree in Procurement or Business',
            'Gain experience in public procurement in Zambia',
            'Get professional certifications (CIPS)',
            'Apply for international procurement roles'
        ],
        story: 'Mr. Zulu is a procurement officer in a government ministry.',
        careerDay: 'Learn about public procurement procedures.'
    },
    'Project Officer': {
        cluster: 'Public Service',
        icon: '📊',
        description: 'Coordinate and implement development projects in government departments, from planning to evaluation.',
        requiredSubjects: ['English', 'Business Studies', 'Civic Education'],
        recommendedSubjects: ['Mathematics', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K12,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNDP Scholarships'],
        pathway: ['Business Studies', 'Social Science'],
        pathwayDescription: 'Choose Business Studies or Social Science subjects in Form 1-4: English, Business Studies, and Civics.',
        pathwayAbroad: [
            'Get a degree in Project Management or Development Studies',
            'Gain experience in project implementation in Zambia',
            'Get professional certifications (PMP, Prince2)',
            'Apply for international project officer roles'
        ],
        story: 'Ms. Mwansa manages a health project in rural Zambia.',
        careerDay: 'Plan a small project and create a timeline.'
    },
    'Research Officer': {
        cluster: 'Public Service',
        icon: '🔍',
        description: 'Conduct research and analysis to inform government policy, programs, and decision-making.',
        requiredSubjects: ['Mathematics', 'English', 'Social Studies'],
        recommendedSubjects: ['ICT/Computer Studies', 'Science'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,500 - K13,000 per month',
        salaryGlobal: '$55,000 - $80,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Social Science', 'STEM'],
        pathwayDescription: 'Choose Social Science or STEM subjects in Form 1-4: Mathematics, English, and Social Studies.',
        pathwayAbroad: [
            'Get a degree in Research Methods, Social Science, or related field',
            'Gain experience in research in Zambia',
            'Pursue postgraduate studies in research methodology',
            'Apply for international research officer roles'
        ],
        story: 'Dr. Chibwe is a research officer for a government think tank.',
        careerDay: 'Conduct a simple survey and analyze the results.'
    },
    'Town Planner': {
        cluster: 'Public Service',
        icon: '🏙️',
        description: 'Plan and regulate land use and urban development to ensure orderly growth and sustainable communities.',
        requiredSubjects: ['Geography', 'Mathematics', 'English'],
        recommendedSubjects: ['Art', 'Civic Education'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$55,000 - $85,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['STEM', 'Social Science'],
        pathwayDescription: 'Choose STEM or Social Science subjects in Form 1-4: Geography, Mathematics, and English.',
        pathwayAbroad: [
            'Get a degree in Town Planning, Urban Planning, or Geography',
            'Gain experience in town planning departments in Zambia',
            'Pursue postgraduate studies in urban planning',
            'Apply for international town planning roles'
        ],
        story: 'Mr. Phiri is a town planner working on Lusaka\'s expansion.',
        careerDay: 'Visit a city planning department and learn about urban development.'
    },
    'Immigration Officer': {
        cluster: 'Public Service',
        icon: '🛂',
        description: 'Enforce immigration laws, process visas and permits, and ensure border security in Zambia.',
        requiredSubjects: ['English', 'Civic Education', 'History'],
        recommendedSubjects: ['Law', 'ICT/Computer Studies'],
        institutions: ['Zambia Immigration Service Training School'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries'],
        pathway: ['Social Science'],
        pathwayDescription: 'Choose Social Science subjects in Form 1-4: English, Civics, and History.',
        pathwayAbroad: [
            'Meet recruitment requirements for the Zambia Immigration Service',
            'Complete training at the Immigration Service Training School',
            'Gain experience in immigration enforcement and processing',
            'Apply for international immigration roles (often require additional training)'
        ],
        story: 'Mrs. Chilufya is an immigration officer at Kenneth Kaunda International Airport.',
        careerDay: 'Visit an immigration office and learn about border control.'
    },
    'Customs Officer': {
        cluster: 'Public Service',
        icon: '📦',
        description: 'Enforce customs and excise laws, collect duties, and prevent smuggling of goods.',
        requiredSubjects: ['English', 'Mathematics', 'Business Studies'],
        recommendedSubjects: ['Law', 'ICT/Computer Studies'],
        institutions: ['Zambia Revenue Authority Training School'],
        salaryLocal: 'K4,500 - K11,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries'],
        pathway: ['Business Studies'],
        pathwayDescription: 'Choose Business Studies subjects in Form 1-4: Mathematics, English, and Business Studies.',
        pathwayAbroad: [
            'Meet recruitment requirements for the Zambia Revenue Authority',
            'Complete customs training',
            'Gain experience in customs operations',
            'Apply for international customs roles (often require additional certification)'
        ],
        story: 'Mr. Mwansa is a customs officer at a border post.',
        careerDay: 'Visit a customs office and learn about import/export procedures.'
    },
    'Policy Analyst': {
        cluster: 'Public Service',
        icon: '📜',
        description: 'Analyze policies and propose reforms to improve government programs and services.',
        requiredSubjects: ['English', 'Civic Education', 'Mathematics'],
        recommendedSubjects: ['Economics', 'History'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathway: ['Social Science', 'Business Studies'],
        pathwayDescription: 'Choose Social Science or Business Studies subjects in Form 1-4: English, Civics, and Mathematics.',
        pathwayAbroad: [
            'Get a degree in Public Policy, Economics, or Political Science',
            'Gain experience in policy analysis in Zambia',
            'Pursue postgraduate studies in public policy',
            'Apply for international policy analyst roles'
        ],
        story: 'Dr. Chibwe is a policy analyst who advises the Zambian government on economic reforms.',
        careerDay: 'Analyze a local policy and write a brief report.'
    },

    // ---- SKILLED TRADES CLUSTER (16 careers) ----
    'Carpenter': {
        cluster: 'Skilled Trades',
        icon: '🪚',
        description: 'Build and repair structures made of wood, including furniture, buildings, and fixtures using hand tools and power tools.',
        requiredSkills: ['Hand skills', 'Physical strength', 'Creativity', 'Measurement skills'],
        recommendedSubjects: ['Mathematics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K2,500 - K7,000 per month',
        salaryGlobal: '$35,000 - $60,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'UK', 'Canada', 'Australia'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Design & Technology, Mathematics, and English.',
        pathwayAbroad: [
            'Complete carpentry training and certification in Zambia (TEVET)',
            'Gain practical experience on the job',
            'Get professional certifications in carpentry',
            'Apply for international carpentry roles'
        ],
        story: 'Mr. Banda is a carpenter who runs his own workshop in Lusaka.',
        careerDay: 'Build a small wooden object like a birdhouse or picture frame.'
    },
    'Welder': {
        cluster: 'Skilled Trades',
        icon: '🔥',
        description: 'Join metal parts together using heat and specialized tools. Welders work in construction, manufacturing, and mining industries.',
        requiredSkills: ['Precision', 'Hand-eye coordination', 'Physical strength', 'Attention to detail'],
        recommendedSubjects: ['Mathematics', 'Physics'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Canada', 'Australia', 'USA'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Design & Technology, Mathematics, and Physics.',
        pathwayAbroad: [
            'Complete welding training and certification in Zambia (TEVET)',
            'Gain practical experience on the job',
            'Get professional certifications in welding',
            'Apply for international welding roles'
        ],
        story: 'Mr. Chanda is a welder who works on construction projects in Lusaka.',
        careerDay: 'Visit a workshop or construction site to see welding in action.'
    },
    'Maid': {
        cluster: 'Skilled Trades',
        icon: '🧹',
        description: 'Provide cleaning, laundry, and household support services in homes, hotels, and businesses. Work in Zambia\'s hospitality and service sectors.',
        requiredSkills: ['Attention to detail', 'Organization', 'Time management', 'Physical energy'],
        recommendedSubjects: ['English', 'Home Economics'],
        institutions: ['On-the-job training and experience'],
        salaryLocal: 'K1,500 - K3,500 per month',
        salaryGlobal: '$20,000 - $35,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Not typically available for this career'],
        pathway: ['Vocational HEH'],
        pathwayDescription: 'Choose Vocational Home Economics & Hospitality subjects in Form 1-4: Home Economics and English.',
        pathwayAbroad: [
            'Gain experience in housekeeping and cleaning services',
            'Build a reputation for reliability and quality',
            'Apply for domestic or hospitality work internationally'
        ],
        story: 'Mrs. Banda has worked as a maid for 15 years.',
        careerDay: 'Help with household cleaning and organization.'
    },
    'Electrician': {
        cluster: 'Skilled Trades',
        icon: '💡',
        description: 'Install, maintain, and repair electrical systems in homes, businesses, and industrial facilities in Zambia.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Science', 'ICT/Computer Studies'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,000 - K8,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Design & Technology.',
        pathwayAbroad: [
            'Complete electrical training and certification in Zambia (TEVET)',
            'Complete apprenticeship and gain experience',
            'Get professional certification as an electrician',
            'Apply for international electrical roles'
        ],
        story: 'Mr. Mulenga is an electrician who has worked on major construction projects.',
        careerDay: 'Learn about electrical safety and how circuits work.'
    },
    'Mechanic': {
        cluster: 'Skilled Trades',
        icon: '🔧',
        description: 'Repair and maintain vehicles, including cars, trucks, and buses. Mechanics work in garages, dealerships, and transport companies.',
        requiredSkills: ['Hand skills', 'Problem-solving', 'Physical strength', 'Diagnostic skills'],
        recommendedSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K2,500 - K7,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Design & Technology, Mathematics, and Physics.',
        pathwayAbroad: [
            'Complete mechanical training and certification in Zambia (TEVET)',
            'Gain practical experience in garages',
            'Get professional certifications in automotive repair',
            'Apply for international mechanic roles'
        ],
        story: 'Mr. Phiri is a mechanic who runs a busy garage in Kitwe.',
        careerDay: 'Learn how to do simple vehicle maintenance.'
    },
    'Miner': {
        cluster: 'Skilled Trades',
        icon: '⛏️',
        description: 'Work in mines extracting valuable minerals and metals. Miners operate machinery, drill, and ensure safety in Zambia\'s mining industry.',
        requiredSkills: ['Physical fitness', 'Safety awareness', 'Teamwork', 'Technical skills'],
        recommendedSubjects: ['Mathematics', 'Science', 'Physical Education'],
        institutions: ['Zambia Mines Training School', 'On-the-job training'],
        salaryLocal: 'K6,000 - K15,000 per month',
        salaryGlobal: '$60,000 - $90,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'Chile'],
        scholarships: ['Government bursaries', 'Mining company scholarships'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Science, and Physical Education.',
        pathwayAbroad: [
            'Complete mining training and certification in Zambia',
            'Gain experience in Zambian mines',
            'Get professional certifications in mining safety',
            'Apply for international mining roles'
        ],
        story: 'Mr. Banda works in a copper mine in Zambia.',
        careerDay: 'Learn about mining safety and the mining process.'
    },
    'Electrical Technician': {
        cluster: 'Skilled Trades',
        icon: '⚡',
        description: 'Install, test, and maintain electrical equipment and systems in industrial and commercial settings.',
        requiredSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        recommendedSubjects: ['Science', 'ICT/Computer Studies'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,500 - K9,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Design & Technology.',
        pathwayAbroad: [
            'Complete electrical technician training and certification in Zambia (TEVET)',
            'Gain experience in industrial electrical maintenance',
            'Get professional certifications (e.g., City & Guilds)',
            'Apply for international electrical technician roles'
        ],
        story: 'Mr. Zulu is an electrical technician at a manufacturing plant.',
        careerDay: 'Visit an industrial plant and learn about electrical systems.'
    },
    'Mechanical Craftsperson': {
        cluster: 'Skilled Trades',
        icon: '🔩',
        description: 'Build, repair, and maintain mechanical equipment and machinery in factories, mines, and workshops.',
        requiredSkills: ['Precision', 'Mechanical aptitude', 'Physical strength', 'Problem-solving'],
        recommendedSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Design & Technology.',
        pathwayAbroad: [
            'Complete mechanical training and certification in Zambia (TEVET)',
            'Gain experience in mechanical maintenance',
            'Get professional certifications (e.g., City & Guilds)',
            'Apply for international mechanical craftsperson roles'
        ],
        story: 'Mr. Banda maintains heavy machinery in a copper mine.',
        careerDay: 'Visit a workshop and learn about mechanical repair.'
    },
    'Instrumentation Technician': {
        cluster: 'Skilled Trades',
        icon: '📟',
        description: 'Install, calibrate, and maintain instruments that measure and control industrial processes.',
        requiredSubjects: ['Mathematics', 'Physics', 'ICT/Computer Studies'],
        recommendedSubjects: ['Science', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'USA'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Complete instrumentation training and certification in Zambia (TEVET)',
            'Gain experience in industrial instrumentation',
            'Get professional certifications (e.g., ISA Certified Control Systems Technician)',
            'Apply for international instrumentation technician roles'
        ],
        story: 'Mrs. Mwansa is an instrumentation technician in a chemical plant.',
        careerDay: 'Learn about process control instruments.'
    },
    'Plumber': {
        cluster: 'Skilled Trades',
        icon: '🚰',
        description: 'Install and repair water supply, drainage, and sanitation systems in homes, businesses, and public buildings.',
        requiredSkills: ['Hand skills', 'Problem-solving', 'Physical stamina', 'Precision'],
        recommendedSubjects: ['Mathematics', 'Science', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K2,500 - K7,000 per month',
        salaryGlobal: '$35,000 - $60,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'UK', 'Canada', 'Australia'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Science, and Design & Technology.',
        pathwayAbroad: [
            'Complete plumbing training and certification in Zambia (TEVET)',
            'Gain experience in plumbing installations and repairs',
            'Get professional certifications (e.g., City & Guilds)',
            'Apply for international plumbing roles'
        ],
        story: 'Mr. Phiri is a plumber who runs his own business in Lusaka.',
        careerDay: 'Learn how to fix a leaky tap or install a pipe.'
    },
    'Production Technician': {
        cluster: 'Skilled Trades',
        icon: '🏭',
        description: 'Operate and monitor production machinery in manufacturing plants. Ensure quality control and troubleshoot issues.',
        requiredSubjects: ['Mathematics', 'Physics', 'Science'],
        recommendedSubjects: ['ICT/Computer Studies', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,500 - K8,500 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'USA'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Science.',
        pathwayAbroad: [
            'Complete production technician training and certification in Zambia (TEVET)',
            'Gain experience in manufacturing environments',
            'Get professional certifications (e.g., Six Sigma)',
            'Apply for international production technician roles'
        ],
        story: 'Mr. Chanda is a production technician in a food processing plant.',
        careerDay: 'Visit a factory and learn about production lines.'
    },
    'Motorcycle Mechanic': {
        cluster: 'Skilled Trades',
        icon: '🏍️',
        description: 'Repair and maintain motorcycles and scooters. Work in dealerships, repair shops, or as a self-employed mechanic.',
        requiredSkills: ['Hand skills', 'Problem-solving', 'Diagnostic skills', 'Physical stamina'],
        recommendedSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K2,000 - K6,000 per month',
        salaryGlobal: '$30,000 - $55,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'UK', 'Australia', 'Canada'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Design & Technology.',
        pathwayAbroad: [
            'Complete motorcycle mechanic training and certification in Zambia (TEVET)',
            'Gain experience in motorcycle repair shops',
            'Get professional certifications (e.g., City & Guilds)',
            'Apply for international motorcycle mechanic roles'
        ],
        story: 'Mr. Zulu is a motorcycle mechanic who specializes in off-road bikes.',
        careerDay: 'Learn how to change a motorcycle tire or oil.'
    },
    'Welder (Advanced)': {
        cluster: 'Skilled Trades',
        icon: '🔧',
        description: 'Specialize in welding techniques for critical infrastructure, pipelines, and pressure vessels. Work in oil, gas, and mining.',
        requiredSkills: ['Precision', 'Attention to detail', 'Physical strength', 'Safety awareness'],
        recommendedSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Design & Technology.',
        pathwayAbroad: [
            'Complete advanced welding training and certification in Zambia (TEVET)',
            'Gain experience in high-stakes welding',
            'Get professional certifications (e.g., AWS, ASME)',
            'Apply for international welding roles in energy, oil, and gas'
        ],
        story: 'Mr. Mwansa is a certified welder who works on pipeline projects.',
        careerDay: 'Visit a fabrication workshop and learn about advanced welding techniques.'
    },
    'HVAC Technician': {
        cluster: 'Skilled Trades',
        icon: '❄️',
        description: 'Install, maintain, and repair heating, ventilation, air conditioning, and refrigeration systems in buildings.',
        requiredSkills: ['Technical skills', 'Problem-solving', 'Physical stamina', 'Electrical knowledge'],
        recommendedSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,500 - K9,000 per month',
        salaryGlobal: '$45,000 - $70,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'USA'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Design & Technology.',
        pathwayAbroad: [
            'Complete HVAC training and certification in Zambia (TEVET)',
            'Gain experience in HVAC installations and maintenance',
            'Get professional certifications (e.g., NATE, City & Guilds)',
            'Apply for international HVAC technician roles'
        ],
        story: 'Mr. Banda is an HVAC technician who maintains air conditioning systems in offices.',
        careerDay: 'Learn about refrigeration cycles and how air conditioners work.'
    },
    'Auto Electrician': {
        cluster: 'Skilled Trades',
        icon: '🚗',
        description: 'Diagnose, repair, and maintain electrical systems in vehicles, including wiring, batteries, and electronic control units.',
        requiredSkills: ['Technical skills', 'Diagnostic ability', 'Precision', 'Problem-solving'],
        recommendedSubjects: ['Mathematics', 'Physics', 'ICT/Computer Studies'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and ICT/Computer Studies.',
        pathwayAbroad: [
            'Complete auto electrician training and certification in Zambia (TEVET)',
            'Gain experience in automotive electrical repair',
            'Get professional certifications (e.g., City & Guilds, ASE)',
            'Apply for international auto electrician roles'
        ],
        story: 'Mr. Phiri is an auto electrician who diagnoses complex electrical faults.',
        careerDay: 'Learn to use a multimeter and test electrical circuits.'
    },
    'Boilermaker': {
        cluster: 'Skilled Trades',
        icon: '⚙️',
        description: 'Fabricate, install, and repair steel structures, boilers, and pressure vessels in mining, construction, and heavy industry.',
        requiredSkills: ['Precision', 'Physical strength', 'Welding skills', 'Blueprint reading'],
        recommendedSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)'],
        salaryLocal: 'K4,500 - K11,000 per month',
        salaryGlobal: '$50,000 - $75,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'USA'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathway: ['Vocational Technology'],
        pathwayDescription: 'Choose Vocational Technology subjects in Form 1-4: Mathematics, Physics, and Design & Technology.',
        pathwayAbroad: [
            'Complete boilermaker training and certification in Zambia (TEVET)',
            'Gain experience in fabrication and repair of heavy structures',
            'Get professional certifications (e.g., AWS, ASME)',
            'Apply for international boilermaker roles in mining and industry'
        ],
        story: 'Mr. Zulu is a boilermaker who fabricates pressure vessels for mining.',
        careerDay: 'Visit a metal fabrication workshop and learn about welding and cutting.'
    }
};

// ================================================================
// SECTION 2: PER-CAREER TRAIT TAGS
// ================================================================

const careerTraits = {
    'Mining Engineer': ["analytical", "technical", "outdoor", "leadership", "physical"],
    'Civil Engineer': ["analytical", "technical", "physical", "outdoor", "teamwork"],
    'Software Developer': ["analytical", "technical", "creative", "independent", "indoor"],
    'Data Analyst': ["analytical", "technical", "independent", "indoor", "detailOriented"],
    'Architect': ["analytical", "creative", "technical", "detailOriented", "indoor"],
    'Mathematician': ["analytical", "logical", "independent", "indoor", "curiosity"],
    'Scientist': ["analytical", "curiosity", "science", "research", "indoor"],
    'Biologist': ["analytical", "science", "outdoor", "nature", "curiosity"],
    'Chemist': ["analytical", "science", "indoor", "detailOriented", "research"],
    'Archeologist': ["curiosity", "outdoor", "history", "research", "patience"],
    'Engineer': ["analytical", "technical", "problemSolving", "leadership", "practical"],
    'IT Specialist': ["analytical", "technical", "technology", "problemSolving", "indoor"],
    'Aerospace Engineer': ["analytical", "technical", "problemSolving", "leadership", "curiosity"],
    'Chemical Engineer': ["analytical", "technical", "problemSolving", "detailOriented", "indoor"],
    'Electrical Engineer': ["analytical", "technical", "problemSolving", "practical", "indoor"],
    'Geologist': ["analytical", "outdoor", "curiosity", "research", "detailOriented"],
    'Environmental Scientist': ["analytical", "outdoor", "curiosity", "science", "helping"],
    'Biomedical Scientist': ["analytical", "science", "detailOriented", "research", "helping"],
    'Forensic Scientist': ["analytical", "detailOriented", "science", "research", "problemSolving"],
    'Geneticist': ["analytical", "science", "curiosity", "detailOriented", "research"],
    'Physiologist': ["analytical", "science", "research", "detailOriented", "helping"],
    'Meteorologist': ["analytical", "outdoor", "curiosity", "science", "detailOriented"],
    'Medical Doctor': ["helping", "analytical", "highPressure", "teamwork", "dedication"],
    'Surgeon': ["helping", "analytical", "highPressure", "precision", "dedication"],
    'Nurse': ["helping", "highPressure", "teamwork", "shiftWork", "compassion"],
    'Pharmacist': ["analytical", "helping", "detailOriented", "indoor", "science"],
    'Paramedic': ["helping", "highPressure", "teamwork", "physical", "outdoor"],
    'Veterinarian': ["helping", "science", "outdoor", "compassion", "animalLover"],
    'Therapist': ["helping", "communication", "patience", "compassion", "empathy"],
    'Clinical Officer': ["helping", "practical", "teamwork", "compassion", "medical"],
    'Dentist': ["helping", "analytical", "indoor", "medical", "precision"],
    'Radiographer': ["technical", "helping", "indoor", "medical", "detailOriented"],
    'Laboratory Technician': ["analytical", "science", "indoor", "detailOriented", "medical"],
    'Public Health Officer': ["helping", "analytical", "communication", "leadership", "community"],
    'Health Promotion Officer': ["helping", "communication", "creative", "community", "leadership"],
    'Environmental Health Officer': ["helping", "outdoor", "analytical", "detailOriented", "science"],
    'Dental Hygienist': ["helping", "medical", "detailOriented", "communication", "indoor"],
    'Midwife': ["helping", "compassion", "communication", "teamwork", "highPressure"],
    'Physician Assistant': ["helping", "analytical", "medical", "teamwork", "dedication"],
    'Medical Coder': ["analytical", "detailOriented", "independent", "indoor", "medical"],
    'Health Educator': ["helping", "communication", "teaching", "community", "compassion"],
    'Nutritionist': ["helping", "science", "analytical", "communication", "health"],
    'Epidemiologist': ["analytical", "science", "research", "detailOriented", "helping"],
    'Accountant': ["analytical", "detailOriented", "indoor", "independent", "business"],
    'Entrepreneur': ["leadership", "creative", "riskTaker", "business", "independent"],
    'Banker': ["analytical", "business", "indoor", "professional", "detailOriented"],
    'Tax Attorney': ["analytical", "business", "indoor", "leadership", "communication"],
    'Economist': ["analytical", "business", "indoor", "research", "curiosity"],
    'Human Resources': ["peoplePerson", "communication", "helping", "indoor", "teamwork"],
    'Marketing Manager': ["creative", "communication", "leadership", "business", "teamwork"],
    'Logistics Manager': ["analytical", "business", "organized", "problemSolving", "teamwork"],
    'Business Analyst': ["analytical", "business", "problemSolving", "communication", "detailOriented"],
    'Operations Manager': ["leadership", "business", "organized", "problemSolving", "teamwork"],
    'Procurement Officer': ["analytical", "business", "detailOriented", "negotiation", "organized"],
    'Administrative Officer': ["organized", "detailOriented", "communication", "helping", "indoor"],
    'Finance Manager': ["analytical", "business", "leadership", "detailOriented", "strategic"],
    'Investment Analyst': ["analytical", "business", "research", "detailOriented", "strategic"],
    'Corporate Secretary': ["organized", "detailOriented", "communication", "leadership", "indoor"],
    'Marketing Specialist': ["creative", "communication", "business", "analytical", "indoor"],
    'Business Development Manager': ["leadership", "communication", "business", "strategic", "entrepreneurial"],
    'Supply Chain Manager': ["analytical", "business", "organized", "problemSolving", "teamwork"],
    'Graphic Designer': ["creative", "independent", "indoor", "visual", "technology"],
    'Animator': ["creative", "visual", "technology", "indoor", "patience"],
    'Journalist': ["creative", "communication", "outdoor", "curiosity", "writing"],
    'Author': ["creative", "writing", "independent", "indoor", "imagination"],
    'Actor': ["creative", "performance", "communication", "confident", "flexible"],
    'Designer': ["creative", "visual", "indoor", "artistic", "detailOriented"],
    'Model': ["creative", "performance", "confident", "outdoor", "professional"],
    'Photographer': ["creative", "visual", "outdoor", "independent", "technology"],
    'Musician': ["creative", "performance", "discipline", "expressive", "passion"],
    'Fashion Designer': ["creative", "visual", "handcraft", "indoor", "artistic"],
    'Toymaker': ["creative", "handcraft", "patience", "indoor", "imagination"],
    'Art Teacher': ["creative", "teaching", "communication", "patience", "helping"],
    'Art Administrator': ["creative", "organized", "communication", "leadership", "business"],
    'Makeup Artist': ["creative", "visual", "communication", "attentionToDetail", "flexible"],
    'Creative Director': ["creative", "leadership", "communication", "strategic", "business"],
    'Illustrator': ["creative", "visual", "imagination", "detailOriented", "indoor"],
    'Cartoonist': ["creative", "visual", "humor", "writing", "indoor"],
    'Content Creator': ["creative", "communication", "technology", "writing", "flexible"],
    'Social Media Manager': ["creative", "communication", "technology", "business", "analytical"],
    '3D Artist': ["creative", "technical", "visual", "detailOriented", "indoor"],
    'Filmmaker': ["creative", "leadership", "communication", "technical", "storytelling"],
    'Teacher': ["helping", "communication", "patience", "leadership", "community"],
    'Social Worker': ["helping", "compassion", "community", "communication", "patience"],
    'Guidance Counselor': ["helping", "communication", "patience", "indoor", "empathy"],
    'Community Development Officer': ["helping", "community", "leadership", "outdoor", "compassion"],
    'Priest': ["helping", "communication", "compassion", "leadership", "community"],
    'Lawyer': ["helping", "analytical", "communication", "leadership", "advocacy"],
    'Community Development Facilitator': ["helping", "community", "communication", "leadership", "outdoor"],
    'Program Support Specialist': ["organized", "helping", "communication", "detailOriented", "indoor"],
    'Rehabilitation Aide': ["helping", "compassion", "physical", "patience", "communication"],
    'Counseling Psychologist': ["helping", "communication", "analytical", "patience", "empathy"],
    'Youth Worker': ["helping", "communication", "leadership", "community", "patience"],
    'Child Protection Officer': ["helping", "community", "leadership", "advocacy", "compassion"],
    'Social Work Supervisor': ["helping", "leadership", "communication", "organized", "community"],
    'Family Support Worker': ["helping", "compassion", "communication", "patience", "indoor"],
    'Crisis Counselor': ["helping", "communication", "highPressure", "compassion", "empathy"],
    'Victim Advocate': ["helping", "advocacy", "communication", "compassion", "legal"],
    'Tour Guide': ["communication", "outdoor", "peoplePerson", "flexible", "enthusiasm"],
    'Farmer': ["outdoor", "independent", "physical", "patience", "practical"],
    'Game Ranger': ["outdoor", "physical", "independent", "nature", "conservation"],
    'Forest Ranger': ["outdoor", "nature", "conservation", "physical", "independent"],
    'Fishery Officer': ["outdoor", "nature", "conservation", "science", "physical"],
    'Surveyor': ["outdoor", "analytical", "technology", "independence", "precision"],
    'Safari Guide': ["outdoor", "communication", "nature", "enthusiasm", "flexible"],
    'Tourism Operations Manager': ["business", "outdoor", "leadership", "communication", "organized"],
    'Conservation Officer': ["outdoor", "nature", "conservation", "analytical", "helping"],
    'Wildlife Biologist': ["outdoor", "science", "analytical", "research", "nature"],
    'Plant Operator': ["technical", "physical", "outdoor", "safety", "practical"],
    'Heavy Equipment Operator': ["physical", "technical", "outdoor", "safety", "practical"],
    'Agricultural Extension Officer': ["outdoor", "helping", "communication", "science", "practical"],
    'Forestry Officer': ["outdoor", "nature", "conservation", "physical", "practical"],
    'Irrigation Specialist': ["outdoor", "technical", "problemSolving", "science", "practical"],
    'Horticulturist': ["outdoor", "nature", "patience", "practical", "science"],
    'Governor': ["leadership", "communication", "public", "community", "decisionMaking"],
    'Army': ["physical", "discipline", "teamwork", "leadership", "patriotism"],
    'Firefighter': ["physical", "bravery", "teamwork", "quickThinking", "helping"],
    'Police Officer': ["physical", "integrity", "communication", "problemSolving", "courage"],
    'Security Guard': ["alertness", "communication", "physical", "dependability", "observation"],
    'Pilot': ["analytical", "highPressure", "leadership", "technical", "travel"],
    'Administrative Officer': ["organized", "communication", "detailOriented", "helping", "indoor"],
    'Human Resource Officer': ["communication", "helping", "organized", "detailOriented", "leadership"],
    'Records Management Officer': ["organized", "detailOriented", "indoor", "communication", "technical"],
    'Procurement Officer': ["analytical", "business", "detailOriented", "negotiation", "organized"],
    'Project Officer': ["organized", "leadership", "communication", "problemSolving", "teamwork"],
    'Research Officer': ["analytical", "research", "detailOriented", "communication", "curiosity"],
    'Town Planner': ["analytical", "outdoor", "strategic", "detailOriented", "community"],
    'Immigration Officer': ["alertness", "communication", "integrity", "public", "organized"],
    'Customs Officer': ["alertness", "detailOriented", "integrity", "communication", "organized"],
    'Policy Analyst': ["analytical", "research", "communication", "strategic", "writing"],
    'Carpenter': ["handcraft", "physical", "creativity", "precision", "practical"],
    'Welder': ["precision", "handEyeCoordination", "physical", "attentionToDetail", "technical"],
    'Maid': ["attentionToDetail", "organization", "timeManagement", "physical", "dependability"],
    'Electrician': ["analytical", "technical", "physical", "problemSolving", "indoor"],
    'Mechanic': ["handcraft", "problemSolving", "physical", "diagnostic", "technical"],
    'Miner': ["physical", "safety", "teamwork", "technical", "outdoor"],
    'Electrical Technician': ["technical", "analytical", "physical", "problemSolving", "detailOriented"],
    'Mechanical Craftsperson': ["handcraft", "technical", "physical", "precision", "practical"],
    'Instrumentation Technician': ["analytical", "technical", "detailOriented", "problemSolving", "indoor"],
    'Plumber': ["physical", "technical", "problemSolving", "practical", "handcraft"],
    'Production Technician': ["technical", "detailOriented", "problemSolving", "teamwork", "indoor"],
    'Motorcycle Mechanic': ["handcraft", "technical", "problemSolving", "physical", "diagnostic"],
    'Welder (Advanced)': ["precision", "technical", "physical", "attentionToDetail", "safety"],
    'HVAC Technician': ["technical", "problemSolving", "physical", "detailOriented", "indoor"],
    'Auto Electrician': ["technical", "analytical", "problemSolving", "detailOriented", "physical"],
    'Boilermaker': ["precision", "physical", "technical", "safety", "practical"]
};

// ================================================================
// SECTION 3: QUESTION TRAIT MAPPING (30 Questions)
// ================================================================

const questionTraits = {
    "1": {
        "Mathematics": ["analytical", "logical", "problemSolving", "detailOriented"],
        "Biology": ["science", "analytical", "research", "detailOriented"],
        "Chemistry": ["science", "analytical", "detailOriented", "technical"],
        "Physics": ["analytical", "technical", "problemSolving", "logical"],
        "English": ["communication", "writing", "expression", "creative"],
        "Literature": ["creative", "imagination", "writing", "communication"],
        "History": ["research", "knowledge", "curiosity", "analytical"],
        "Geography": ["outdoor", "nature", "curiosity", "analytical"],
        "Art": ["creative", "visual", "artistic", "imagination"],
        "Music": ["creative", "expression", "artistic", "discipline"],
        "ICT and Computer Studies": ["technical", "technology", "analytical", "problemSolving"],
        "Agriculture": ["outdoor", "nature", "practical", "physical"],
        "Business Studies": ["business", "analytical", "leadership", "entrepreneurial"],
        "Physical Education": ["physical", "outdoor", "teamwork", "discipline"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "2": {
        "Building or fixing things": ["technical", "physical", "analytical", "practical"],
        "Helping others": ["helping", "compassion", "community", "empathy"],
        "Drawing": ["creative", "visual", "artistic", "imagination"],
        "Painting": ["creative", "visual", "artistic", "expression"],
        "Solving puzzles": ["analytical", "problemSolving", "logical", "detailOriented"],
        "Playing strategy games": ["strategic", "analytical", "problemSolving", "leadership"],
        "Working outdoors": ["outdoor", "nature", "physical", "adventure"],
        "Gardening": ["outdoor", "nature", "practical", "patience"],
        "Farming": ["outdoor", "nature", "practical", "physical"],
        "Using computers": ["technical", "technology", "analytical", "indoor"],
        "Learning technology": ["technical", "technology", "curiosity", "analytical"],
        "Reading": ["creative", "writing", "imagination", "curiosity"],
        "Writing": ["creative", "writing", "communication", "expression"],
        "Playing sports": ["physical", "outdoor", "teamwork", "discipline"],
        "Playing music": ["creative", "expression", "artistic", "discipline"],
        "Listening to music": ["creative", "expression", "artistic", "curiosity"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "3": {
        "Office": ["indoor", "professional", "structured", "organized"],
        "Indoor setting": ["indoor", "professional", "structured", "organized"],
        "Outdoors in nature": ["outdoor", "nature", "physical", "adventure"],
        "Hospital": ["medical", "helping", "structured", "compassion"],
        "Clinic": ["medical", "helping", "structured", "compassion"],
        "Laboratory": ["science", "analytical", "detailOriented", "indoor"],
        "Workshop": ["technical", "physical", "practical", "handsOn"],
        "Factory": ["technical", "physical", "practical", "structured"],
        "School": ["helping", "communication", "leadership", "patience"],
        "Classroom": ["helping", "communication", "leadership", "patience"],
        "Travel": ["adventure", "outdoor", "flexible", "communication"],
        "Remote work": ["flexible", "independent", "technology", "indoor"],
        "I'm flexible": ["versatile", "adaptable", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "4": {
        "Working closely with people": ["peoplePerson", "communication", "helping", "teamwork"],
        "Working on tasks alone": ["independent", "focused", "analytical", "detailOriented"],
        "Working with my hands": ["practical", "handsOn", "physical", "technical"],
        "Working with data": ["analytical", "detailOriented", "logical", "technical"],
        "Working with numbers": ["analytical", "detailOriented", "logical", "business"],
        "Creating new things": ["creative", "innovation", "imagination", "expression"],
        "Teaching others": ["helping", "communication", "patience", "leadership"],
        "Guiding others": ["helping", "communication", "leadership", "patience"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "5": {
        "Very important - high salary": ["highSalary", "ambitious", "business", "driven"],
        "Somewhat important - comfortable salary": ["practical", "balanced", "realistic"],
        "Not very important - enjoyment matters more": ["passion", "creative", "fulfillment", "purpose"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "6": {
        "Helping others": ["helping", "compassion", "empathy", "community"],
        "Making a difference": ["helping", "purpose", "community", "leadership"],
        "Building things": ["technical", "practical", "handsOn", "creative"],
        "Solving problems": ["analytical", "problemSolving", "logical", "persistent"],
        "Teaching others": ["helping", "communication", "patience", "leadership"],
        "Creating art": ["creative", "expression", "artistic", "imagination"],
        "Managing people": ["leadership", "communication", "business", "strategic"],
        "Managing businesses": ["business", "leadership", "strategic", "entrepreneurial"],
        "Researching": ["analytical", "curiosity", "science", "detailOriented"],
        "Discovering new things": ["curiosity", "creative", "analytical", "adventure"],
        "I haven't thought about it": ["curiosity", "openMind", "exploring"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "7": {
        "In Zambia - stay here": ["community", "local", "patriotism", "home"],
        "Outside Zambia - work abroad": ["adventure", "travel", "ambitious", "global"],
        "Both Zambia and abroad": ["ambitious", "flexible", "exploring", "global"],
        "I'm flexible anywhere": ["versatile", "adaptable", "adventure", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "8": {
        "I like taking charge": ["leadership", "confident", "strategic", "decisive"],
        "I like leading others": ["leadership", "confident", "strategic", "decisive"],
        "I prefer following instructions": ["teamwork", "supportive", "reliable", "collaborative"],
        "I like being part of a team": ["teamwork", "collaborative", "peoplePerson", "supportive"],
        "I can both lead and follow": ["versatile", "adaptive", "balanced", "teamwork"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "9": {
        "Logical thinking": ["analytical", "logical", "problemSolving", "detailOriented"],
        "Analytical thinking": ["analytical", "logical", "problemSolving", "detailOriented"],
        "Creative thinking": ["creative", "imagination", "innovation", "expression"],
        "Imaginative thinking": ["creative", "imagination", "innovation", "expression"],
        "Practical thinking": ["practical", "realistic", "commonSense", "handsOn"],
        "Hands-on thinking": ["practical", "handsOn", "technical", "physical"],
        "Strategic thinking": ["strategic", "leadership", "planning", "bigPicture"],
        "Big-picture thinking": ["strategic", "leadership", "planning", "bigPicture"],
        "A balance of all types": ["versatile", "balanced", "adaptive", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "10": {
        "Predictable work": ["structured", "organized", "stable", "methodical"],
        "Routine work": ["structured", "organized", "stable", "methodical"],
        "Dynamic work": ["flexible", "adaptive", "dynamic", "adventure"],
        "Changing work": ["flexible", "adaptive", "dynamic", "adventure"],
        "A mix of routine and variety": ["balanced", "versatile", "adaptive", "practical"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "11": {
        "Help individuals directly": ["helping", "compassion", "personal", "empathy"],
        "Help my community": ["community", "helping", "local", "social"],
        "Help the environment": ["nature", "conservation", "outdoor", "science"],
        "Help businesses succeed": ["business", "analytical", "strategic", "professional"],
        "Help the country of Zambia": ["leadership", "community", "patriotism", "public"],
        "I want to help in any way I can": ["helping", "versatile", "compassion", "community"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "12": {
        "Working alone": ["independent", "focused", "introverted", "selfMotivated"],
        "I concentrate better by myself": ["independent", "focused", "introverted", "selfMotivated"],
        "Working with others": ["teamwork", "peoplePerson", "extroverted", "collaborative"],
        "I enjoy collaboration": ["teamwork", "peoplePerson", "extroverted", "collaborative"],
        "Both - alone or with a team": ["versatile", "adaptive", "balanced", "flexible"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "13": {
        "Technical skills": ["technical", "analytical", "practical", "handsOn"],
        "Mechanical skills": ["technical", "handsOn", "practical", "physical"],
        "Medical skills": ["medical", "helping", "science", "compassion"],
        "Healthcare skills": ["medical", "helping", "science", "compassion"],
        "Business skills": ["business", "analytical", "leadership", "strategic"],
        "Leadership skills": ["leadership", "confident", "strategic", "communication"],
        "Creative skills": ["creative", "visual", "imagination", "expression"],
        "Artistic skills": ["creative", "visual", "artistic", "imagination"],
        "Teaching skills": ["helping", "communication", "patience", "leadership"],
        "Communication skills": ["communication", "peoplePerson", "writing", "expression"],
        "Environmental skills": ["outdoor", "nature", "practical", "conservation"],
        "Conservation skills": ["outdoor", "nature", "practical", "conservation"],
        "All of the above": ["versatile", "curiosity", "ambitious", "learning"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "14": {
        "I want to be my own boss": ["entrepreneurial", "leadership", "independent", "riskTaker"],
        "I want to start a business": ["entrepreneurial", "business", "leadership", "riskTaker"],
        "I prefer a job with a set role": ["structured", "stable", "reliable", "teamwork"],
        "I prefer a job with clear responsibilities": ["structured", "stable", "reliable", "organized"],
        "I'm open to both": ["versatile", "flexible", "balanced", "adaptable"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "15": {
        "I work well under pressure": ["resilience", "highPressure", "ambitious", "driven"],
        "I meet deadlines easily": ["organized", "methodical", "reliable", "driven"],
        "I prefer a calm work pace": ["patient", "methodical", "stable", "calm"],
        "I prefer a steady work pace": ["patient", "methodical", "stable", "calm"],
        "I can handle some pressure": ["balanced", "practical", "realistic", "flexible"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "16": {
        "By reading": ["analytical", "independent", "focused", "curiosity"],
        "By studying on my own": ["independent", "focused", "selfMotivated", "curiosity"],
        "By watching": ["visual", "curiosity", "learning", "detailOriented"],
        "By listening to explanations": ["auditory", "curiosity", "learning", "communication"],
        "By doing": ["practical", "handsOn", "active", "kinesthetic"],
        "By practicing hands-on": ["practical", "handsOn", "active", "kinesthetic"],
        "By discussing with others": ["teamwork", "communication", "collaborative", "peoplePerson"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "17": {
        "Outgoing": ["extroverted", "peoplePerson", "communication", "social"],
        "I love meeting people": ["extroverted", "peoplePerson", "communication", "social"],
        "Thoughtful": ["introverted", "analytical", "reflective", "curiosity"],
        "I reflect deeply": ["introverted", "analytical", "reflective", "curiosity"],
        "Practical": ["practical", "handsOn", "realistic", "commonSense"],
        "I get things done with my hands": ["practical", "handsOn", "technical", "physical"],
        "Creative": ["creative", "imagination", "expression", "artistic"],
        "I have a vivid imagination": ["creative", "imagination", "expression", "artistic"],
        "A combination of these": ["versatile", "balanced", "adaptive", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "18": {
        "Building something from scratch": ["creative", "technical", "practical", "handsOn"],
        "Creating something new": ["creative", "innovation", "imagination", "expression"],
        "Improving existing systems": ["analytical", "technical", "problemSolving", "practical"],
        "Fixing existing systems": ["technical", "analytical", "problemSolving", "practical"],
        "Helping people solve problems": ["helping", "compassion", "communication", "empathy"],
        "Analyzing data": ["analytical", "logical", "detailOriented", "curiosity"],
        "Finding insights": ["analytical", "curiosity", "detailOriented", "problemSolving"],
        "Designing beautiful things": ["creative", "visual", "artistic", "imagination"],
        "Designing functional things": ["creative", "practical", "technical", "detailOriented"],
        "Teaching others": ["helping", "communication", "patience", "leadership"],
        "Training others": ["helping", "communication", "patience", "leadership"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "19": {
        "Making a difference in people's lives": ["helping", "compassion", "purpose", "community"],
        "Achieving financial success": ["highSalary", "ambitious", "business", "driven"],
        "Gaining recognition": ["ambitious", "confident", "leadership", "professional"],
        "Gaining respect": ["ambitious", "confident", "leadership", "professional"],
        "Learning new things": ["curiosity", "learning", "exploring", "openMind"],
        "Growing as a person": ["curiosity", "learning", "exploring", "openMind"],
        "Solving challenging problems": ["analytical", "problemSolving", "persistent", "resilience"],
        "Working with a great team": ["teamwork", "peoplePerson", "collaborative", "communication"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "20": {
        "A stable lifestyle": ["structured", "stable", "organized", "practical"],
        "A secure lifestyle": ["structured", "stable", "organized", "practical"],
        "An adventurous lifestyle": ["adventure", "travel", "flexible", "dynamic"],
        "An exciting lifestyle": ["adventure", "travel", "flexible", "dynamic"],
        "A creative lifestyle": ["creative", "expression", "imagination", "artistic"],
        "An expressive lifestyle": ["creative", "expression", "imagination", "artistic"],
        "A simple lifestyle": ["calm", "patient", "balanced", "introverted"],
        "A peaceful lifestyle": ["calm", "patient", "balanced", "introverted"],
        "A fast-paced lifestyle": ["ambitious", "highPressure", "driven", "confident"],
        "An ambitious lifestyle": ["ambitious", "highPressure", "driven", "confident"],
        "A balanced lifestyle with time for family": ["balanced", "patient", "practical", "organized"],
        "A balanced lifestyle with time for hobbies": ["balanced", "patient", "practical", "organized"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "21": {
        "I enjoy meeting new people": ["extroverted", "peoplePerson", "communication", "social"],
        "I am outgoing": ["extroverted", "peoplePerson", "communication", "social"],
        "I prefer one-on-one conversations": ["introverted", "communication", "personal", "focused"],
        "I prefer small groups": ["introverted", "communication", "teamwork", "focused"],
        "I prefer large groups": ["extroverted", "social", "peoplePerson", "communication"],
        "I like helping people directly": ["helping", "compassion", "peoplePerson", "empathy"],
        "I like supporting others indirectly": ["helping", "compassion", "supportive", "community"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "22": {
        "I want to lead projects": ["leadership", "confident", "strategic", "decisive"],
        "I want to lead teams": ["leadership", "confident", "strategic", "decisive"],
        "I prefer to follow instructions": ["teamwork", "supportive", "reliable", "collaborative"],
        "I prefer to work independently": ["independent", "selfMotivated", "focused", "responsible"],
        "I want to make important decisions": ["leadership", "confident", "strategic", "decisive"],
        "I prefer to execute tasks": ["practical", "reliable", "organized", "methodical"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "23": {
        "Friendly environment": ["peoplePerson", "social", "teamwork", "supportive"],
        "Supportive environment": ["teamwork", "helping", "community", "supportive"],
        "Competitive environment": ["ambitious", "driven", "confident", "leadership"],
        "Challenging environment": ["ambitious", "problemSolving", "driven", "resilience"],
        "Relaxed environment": ["calm", "patient", "stable", "introverted"],
        "Fast-paced environment": ["ambitious", "highPressure", "driven", "dynamic"],
        "Structured environment": ["organized", "methodical", "stable", "professional"],
        "Flexible environment": ["flexible", "adaptive", "versatile", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "24": {
        "I face challenges head-on": ["resilience", "confident", "bravery", "leadership"],
        "I find creative solutions": ["creative", "problemSolving", "innovation", "adaptive"],
        "I seek help from others": ["teamwork", "communication", "supportive", "collaborative"],
        "I work through them methodically": ["analytical", "logical", "organized", "methodical"],
        "I stay calm under pressure": ["resilience", "calm", "patient", "balanced"],
        "I learn from failures": ["resilience", "curiosity", "learning", "persistent"],
        "I adapt quickly": ["adaptive", "flexible", "resilience", "versatile"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "25": {
        "Public recognition": ["ambitious", "confident", "leadership", "professional"],
        "Private appreciation": ["introverted", "personal", "supportive", "humble"],
        "Financial rewards": ["highSalary", "ambitious", "business", "driven"],
        "Career advancement": ["ambitious", "driven", "leadership", "professional"],
        "Being trusted with responsibility": ["leadership", "reliable", "professional", "confident"],
        "Being seen as an expert": ["analytical", "professional", "knowledge", "ambitious"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "26": {
        "Work is my priority": ["ambitious", "driven", "business", "highPressure"],
        "Life is my priority": ["balanced", "patient", "family", "calm"],
        "I want a good balance": ["balanced", "versatile", "practical", "organized"],
        "I want flexible hours": ["flexible", "adaptive", "independent", "versatile"],
        "I want to work remotely": ["technology", "independent", "flexible", "indoor"],
        "I want to work from home": ["technology", "independent", "flexible", "indoor"],
        "I want to travel for work": ["adventure", "outdoor", "flexible", "communication"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "27": {
        "I make decisions quickly": ["confident", "decisive", "leadership", "riskTaker"],
        "I analyze all options carefully": ["analytical", "detailOriented", "methodical", "strategic"],
        "I trust my intuition": ["creative", "imaginative", "expressive", "artistic"],
        "I consult others before deciding": ["teamwork", "communication", "collaborative", "supportive"],
        "I weigh pros and cons": ["analytical", "logical", "detailOriented", "strategic"],
        "I go with my gut feeling": ["creative", "imaginative", "expressive", "artistic"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "28": {
        "I learn by reading": ["analytical", "independent", "focused", "curiosity"],
        "I learn by watching": ["visual", "curiosity", "learning", "detailOriented"],
        "I learn by listening": ["auditory", "curiosity", "learning", "communication"],
        "I learn by doing": ["practical", "handsOn", "active", "kinesthetic"],
        "I learn by practicing": ["practical", "handsOn", "active", "kinesthetic"],
        "I learn by discussing": ["teamwork", "communication", "collaborative", "peoplePerson"],
        "I learn by teaching others": ["helping", "communication", "leadership", "knowledge"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "29": {
        "I am direct and clear": ["communication", "confident", "leadership", "professional"],
        "I am diplomatic and tactful": ["communication", "tactful", "peoplePerson", "supportive"],
        "I am expressive and passionate": ["creative", "expression", "passion", "communication"],
        "I am reserved and thoughtful": ["introverted", "analytical", "reflective", "patient"],
        "I am persuasive and convincing": ["communication", "leadership", "confident", "business"],
        "I am supportive and encouraging": ["helping", "supportive", "compassion", "teamwork"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    "30": {
        "Regular 9-5 schedule": ["structured", "organized", "stable", "methodical"],
        "Flexible schedule": ["flexible", "adaptive", "versatile", "independent"],
        "Part-time work": ["flexible", "balanced", "patient", "calm"],
        "Full-time work": ["ambitious", "driven", "professional", "structured"],
        "Shift work": ["structured", "organized", "stable", "methodical"],
        "I want to set my own hours": ["independent", "flexible", "entrepreneurial", "selfMotivated"],
        "I want to work on projects": ["creative", "analytical", "flexible", "problemSolving"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    }
};

// ================================================================
// SECTION 4: ALL TRAITS LIST
// ================================================================

const ALL_TRAITS = [
    "analytical", "creative", "helping", "technical", "outdoor", "leadership",
    "communication", "practical", "strategic", "resilience", "detailOriented", "entrepreneurial",
    "logical", "problemSolving", "science", "research", "writing", "expression",
    "imagination", "knowledge", "curiosity", "visual", "artistic", "technology",
    "nature", "business", "physical", "teamwork", "openMind", "exploring",
    "compassion", "empathy", "community", "peoplePerson", "counseling", "handsOn",
    "precision", "handcraft", "craftsmanship", "mechanical", "commonSense", "adventure",
    "conservation", "adaptable", "confident", "ambitious", "planning", "bigPicture",
    "persistent", "calm", "introverted", "extroverted", "innovation", "realistic",
    "medical", "patience", "resilient", "adaptable", "methodical", "organized",
    "supportive", "collaborative", "decisive", "driven", "stable", "flexible",
    "patient", "family", "humble", "professional", "knowledge", "tactful",
    "passion", "reflective", "persistent", "kinesthetic", "auditory", "visual",
    "active", "learning", "riskTaker", "selfMotivated", "focused", "independent",
    "highPressure", "dedication", "shiftWork", "purpose", "social", "local",
    "home", "global", "patriotism", "public", "spiritual", "advocacy",
    "courage", "observation", "dependability", "diagnostic", "safety"
];

// ================================================================
// SECTION 5: TRANSLATIONS (4 LANGUAGES)
// ================================================================

const translations = {
    'en': {
        'app_title': 'Career Quest',
        'app_name': 'Career Quest',
        'welcome_title': 'Discover Your Path to a Bright Future',
        'welcome_subtitle': 'Discover Your Path to a Bright Future',
        'welcome_description': 'Not sure what career is right for you? Don\'t worry! Answer a few questions and we\'ll help you discover your perfect career path.',
        'start_quiz': 'Get Started',
        'i_dont_know': 'I Have No Idea',
        'sample_results': '📊 View Sample Results',
        'built_for': 'Built for Zambian Students',
        'works_offline': 'Works Offline',
        'free_forever': 'Free Forever',
        'copyright': '© 2026 STUDY DOJO. All rights reserved by David Mutesa.',
        'contact': 'Contact: davidjuniormutesa@gmail.com',
        'quote': '"The only way to predict the future is to create it." – Abraham Lincoln',
        'question_counter': 'Question',
        'of': 'of',
        'back_home': 'Back to ZamPath.ai',
        'dark_mode': 'Dark',
        'light_mode': 'Light',
        'keyboard_tip': 'Tip: Use numbers to select, Enter for next, Backspace for previous',
        'keyboard_select': 'to select',
        'keyboard_next': 'for next',
        'keyboard_prev': 'for previous',
        'multi_select_hint': 'You can select MULTIPLE answers for this question. Choose all that apply!',
        'next': 'Next',
        'previous': 'Previous',
        'results_title': 'Your Career Matches',
        'results_subtitle': 'Based on your answers, here are the best careers for you!',
        'top_matches': 'Top Matches',
        'clusters': 'Clusters',
        'avg_match': 'Avg Match',
        'global_ready': 'Global Ready',
        'personality_title': 'Your Personality Profile',
        'personality_desc': 'This radar chart shows your strongest personality traits based on your answers. The further out the line goes, the stronger the trait!',
        'search_placeholder': 'Search careers...',
        'pathway_title': 'Your Career Pathway',
        'pathway_desc': 'To pursue your recommended careers, you should follow this pathway in Form 1-4:',
        'subjects_title': 'Your Recommended Subjects',
        'subjects_note': 'Check with your school to see which subjects are available. Talk to your guidance teacher for more advice!',
        'career_web_title': 'Career Web Map',
        'career_web_instruction': 'Click on any cluster to explore careers',
        'compare_title': 'Compare Careers',
        'compare_desc': 'Select up to 5 careers to compare side by side',
        'select_career': 'Select Career',
        'clear_all': 'Clear All',
        'download_pdf': 'Download PDF Report',
        'print_report': 'Print Report',
        'retake_quiz': 'Retake Quiz',
        'color_mode': 'Color',
        'bw_mode': 'Black & White',
        'discovery_title': "That's okay! Let's explore all your options together.",
        'discovery_desc': "That's okay! Let's explore all your options together.",
        'discovery_instruction': 'Click on a cluster below to see careers. Then click "Read More" for details or "Add to Compare" to compare careers side-by-side.',
        'discovery_compare': 'Your Discovery Comparison',
        'discovery_compare_empty': 'Add careers from the clusters above to compare them here.',
        'read_more': 'Read More',
        'add_to_compare': 'Add to Compare',
        'remove_from_compare': 'Remove from Compare',
        'next_steps_title': 'Your Next Steps',
        'next_step_1': 'Click on a cluster card above to see all careers in that field.',
        'next_step_2': 'For any career, click "Read More" to learn about it in detail.',
        'next_step_3': 'Click "Add to Compare" to add careers to the comparison table below.',
        'next_step_4': 'Compare up to 5 careers side-by-side!',
        'remember_note': "Remember: It's okay to not know yet! The most important thing is to keep exploring.",
        'retake_quiz_button': 'Retake Quiz',
        'what_they_do': 'What They Do',
        'requirements': 'Requirements',
        'career_pathway': 'Career Pathway',
        'where_to_study': 'Where to Study',
        'salary': 'Salary',
        'zambia': 'Zambia',
        'international': 'International',
        'international_opportunities': 'International Opportunities',
        'global_demand': 'Global Demand',
        'countries': 'Countries',
        'scholarships': 'Scholarships',
        'how_to_work_abroad': 'How to Work Abroad',
        'career_story': 'Career Story',
        'career_day_activity': 'Career Day Activity',
        'share_results': 'Share Results',
        'share_copy': 'Copy Link',
        'share_whatsapp': 'WhatsApp',
        'share_email': 'Email',
        'share_title': '🌟 My Career Matches on ZamPath!',
        'share_body': 'I just discovered my perfect career matches using ZamPath! Check out my results:',
        'share_copied': 'Copied to clipboard!',
        'share_desc': 'Share your career matches with parents, teachers, or friends!',
        'close': 'Close',
        'please_select_answer': 'Please select at least one answer before continuing.',
        'no_results': 'No careers match your search.',
        'try_different_keywords': 'Try different keywords or clear the filter.',
        'must_have': 'MUST HAVE:',
        'recommended': 'RECOMMENDED:',
        'career': 'Career',
        'feature': 'Feature',
        'skill': 'Skill',
        'pathway': 'Pathway',
        'select_language': 'Select Language',
        'english': 'English',
        'nyanja': 'Nyanja (Chichewa)',
        'bemba': 'Bemba (Icibemba)',
        'tonga': 'Tonga (Chitonga)',
        'loading': 'Loading...',
        'back_to_top': 'Back to top',
        'skip_link': 'Skip to content',
        'privacy_policy': 'Privacy Policy',
        'about_us': 'About Us',
        'contact_us': 'Contact Us',
        'all_rights_reserved': 'All rights reserved by David Mutesa',
        'contact_email': 'davidjuniormutesa@gmail.com',
        'your_future_starts_here': 'Your future starts here.',
        'find_your_path': 'Find your path.',
        'start_your_journey': 'Start Your Journey',
        'learn_more': 'Learn More',
        'features': 'Features',
        'how_it_works': 'How It Works',
        'testimonials': 'Testimonials',
        'stats': 'Stats',
        'ai_discovery_title': '🤖 Want More Career Ideas?',
        'ai_discovery_desc': 'We found {0} careers for you. Want more options?',
        'smart_discover': '🔍 Smart Discovery',
        'ai_chat': '🤖 Ask AI (Free)',
        'explore_all': '🎯 Explore All Careers'
    },
    'ny': {
        'app_title': 'Career Quest',
        'app_name': 'Career Quest',
        'welcome_title': 'Pezani Njira Yanu Yatsogolo',
        'welcome_subtitle': 'Pezani Njira Yanu Yatsogolo',
        'welcome_description': 'Simukudziwa ntchito yomwe ingakuyenereni? Osadandaula! Yankhani mafunso ochepa ndipo tidzakuthandizani kupeza njira yanu yabwino kwambiri.',
        'start_quiz': 'Yambani',
        'i_dont_know': 'Sindikudziwa',
        'sample_results': '📊 Onani Zitsanzo',
        'built_for': 'Chopangidwira Ophunzira ku Zambia',
        'works_offline': 'Imagwira Popanda Internet',
        'free_forever': 'Kwaulere Nthawi Zonse',
        'copyright': '© 2026 STUDY DOJO. Ufulu wonse ndi David Mutesa.',
        'contact': 'Lumikizanani: davidjuniormutesa@gmail.com',
        'quote': '"Njira yokhayo yodziwira tsogolo ndikulilenga." – Abraham Lincoln',
        'question_counter': 'Funso',
        'of': 'la',
        'back_home': 'Bwerera ku ZamPath.ai',
        'dark_mode': 'Mdima',
        'light_mode': 'Kuwala',
        'keyboard_tip': 'Malangizo: Gwiritsani ntchito manambala kusankha, Enter kupita patsogolo, Backspace kubwerera',
        'keyboard_select': 'kusankha',
        'keyboard_next': 'kupita patsogolo',
        'keyboard_prev': 'kubwerera',
        'multi_select_hint': 'Mutha kusankha MAYANKHO OCHULUKA pa funso lino. Sankhani zonse zomwe zikugwirana!',
        'next': 'Patsogolo',
        'previous': 'Kumbuyo',
        'results_title': 'Ntchito Zomwe Zikukuyenerani',
        'results_subtitle': 'Potengera mayankho anu, nawa ntchito zabwino kwambiri zomwe zikukuyenerani!',
        'top_matches': 'Zosankha Zapamwamba',
        'clusters': 'Magulu',
        'avg_match': 'Avereji Yofanana',
        'global_ready': 'Zokonzeka Padziko Lonse',
        'personality_title': 'Mawonekedwe Anu',
        'personality_desc': 'Chithunzi ichi chikuwonetsa mikhalidwe yanu yamphamvu potengera mayankho anu. Mzere ukakulira, ndiye kuti m khalidweli ndi lamphamvu!',
        'search_placeholder': 'Sakani ntchito',
        'pathway_title': 'Njira Yanu Yatsogolo',
        'pathway_desc': 'Kuti mutsatire ntchito zomwe zakukuyenerani, muyenera kutsatira njira iyi mu Form 1-4:',
        'subjects_title': 'Maphunziro Omwe Akukuyenerani',
        'subjects_note': 'Fufuzani ndi sukulu yanu kuti muone maphunziro omwe alipo. Lankhulani ndi mphunzitsi wanu wotsogolera kuti amve zambiri!',
        'career_web_title': 'Mapu a Ntchito',
        'career_web_instruction': 'Dina pa gulu lililonse kuti muone ntchito',
        'compare_title': 'Fanizani Ntchito',
        'compare_desc': 'Sankhani ntchito zokwana 5 kuti muzifaniza',
        'select_career': 'Sankhani Ntchito',
        'clear_all': 'Chotsani Zonse',
        'download_pdf': 'Tsitsani Ripoti ya PDF',
        'print_report': 'Sindikizani Ripoti',
        'retake_quiz': 'Yambanso Mafunso',
        'color_mode': 'Mtundu',
        'bw_mode': 'Chakuda & Choyera',
        'discovery_title': "Zili bwino! Tiyeni tiwone zosankha zanu zonse palimodzi.",
        'discovery_desc': "Zili bwino! Tiyeni tiwone zosankha zanu zonse palimodzi.",
        'discovery_instruction': 'Dinani pa gulu ili pansipa kuti muone ntchito. Kenako dinani "Werengani Zambiri" kuti mudziwe zambiri kapena "Onjezera Kufaniza" kuti muzifaniza.',
        'discovery_compare': 'Kufaniza Kwanu',
        'discovery_compare_empty': 'Onjezerani ntchito kuchokera m\'magulu pamwambapa kuti muzifaniza.',
        'read_more': 'Werengani Zambiri',
        'add_to_compare': 'Onjezera Kufaniza',
        'remove_from_compare': 'Chotsa Kufaniza',
        'next_steps_title': 'Masitepe Anu Otsatira',
        'next_step_1': 'Dinani pa khadi ya gulu pamwambapa kuti muone ntchito zonse m\'gululi.',
        'next_step_2': 'Pa ntchito iliyonse, dinani "Werengani Zambiri" kuti mudziwe zambiri.',
        'next_step_3': 'Dinani "Onjezera Kufaniza" kuti muwonjezere ntchito patebulo lofanizira.',
        'next_step_4': 'Fanizani ntchito zokwana 5!',
        'remember_note': "Kumbukirani: Ndi bwino kusadziwa! Chofunika ndi kupitiliza kufufuza.",
        'retake_quiz_button': 'Yambanso Mafunso',
        'what_they_do': 'Zomwe Amachita',
        'requirements': 'Zofunika',
        'career_pathway': 'Njira Yatsogolo',
        'where_to_study': 'Kumene Mungaphunzire',
        'salary': 'Malipiro',
        'zambia': 'Zambia',
        'international': 'Padziko Lonse',
        'international_opportunities': 'Mwayi Padziko Lonse',
        'global_demand': 'Kufunikira Padziko Lonse',
        'countries': 'Mayiko',
        'scholarships': 'Maphunziro a Ulemu',
        'how_to_work_abroad': 'Mungagwire Ntchito Kunja',
        'career_story': 'Nkhani Ya Ntchito',
        'career_day_activity': 'Zochita Pa Tsiku La Ntchito',
        'share_results': 'Gawani Zotsatira',
        'share_copy': 'Koperani Ulalo',
        'share_whatsapp': 'Gawani pa WhatsApp',
        'share_email': 'Tumizani pa Imelo',
        'share_title': '🌟 Zotsatira Zanga za Ntchito pa ZamPath!',
        'share_body': 'Ndaona ntchito zomwe zikundiyenera pogwiritsa ntchito ZamPath! Onani zotsatira zanga:',
        'share_copied': 'Ulalo wakopedwa!',
        'share_desc': 'Gawani zotsatira zanu ndi makolo, aphunzitsi, kapena anzako!',
        'close': 'Tsekani',
        'please_select_answer': 'Chonde sankhani yankho limodzi musanapitilize.',
        'no_results': 'Palibe ntchito zomwe zikugwirana ndi kusaka kwanu.',
        'try_different_keywords': 'Yesani mawu ena kapena chotsani zosefera.',
        'must_have': 'ZOFUNIKA:',
        'recommended': 'ZOLIMBIKITSA:',
        'career': 'Ntchito',
        'feature': 'Mawonekedwe',
        'skill': 'Luso',
        'pathway': 'Njira',
        'select_language': 'Sankhani Chilankhulo',
        'english': 'Chingelezi',
        'nyanja': 'Chinyanja',
        'bemba': 'Icibemba',
        'tonga': 'Chitonga',
        'loading': 'Kukonzekera...',
        'back_to_top': 'Bwerera pamwamba',
        'skip_link': 'Lumphani ku nkhani',
        'privacy_policy': 'Malamulo Achinsinsi',
        'about_us': 'Za Ife',
        'contact_us': 'Lumikizanani Nafe',
        'all_rights_reserved': 'Ufulu wonse ndi David Mutesa',
        'contact_email': 'davidjuniormutesa@gmail.com',
        'your_future_starts_here': 'Tsogolo lanu likuyamba pano.',
        'find_your_path': 'Pezani njira yanu.',
        'start_your_journey': 'Yambani Ulendo Wanu',
        'learn_more': 'Dziwani Zambiri',
        'features': 'Zinthu',
        'how_it_works': 'Momwe Imagwirira Ntchito',
        'testimonials': 'Umboni',
        'stats': 'Ziwerengero',
        'ai_discovery_title': '🤖 Mukufuna Malingaliro Ena a Ntchito?',
        'ai_discovery_desc': 'Tapeza ntchito {0} kwa inu. Mukufuna zosankha zambiri?',
        'smart_discover': '🔍 Kupeza Mwanzeru',
        'ai_chat': '🤖 Funsani AI (Kwaulere)',
        'explore_all': '🎯 Onani Ntchito Zonse'
    },
    'bem': {
        'app_title': 'Career Quest',
        'app_name': 'Career Quest',
        'welcome_title': 'Sangana Inshila Yenu Yakumushi',
        'welcome_subtitle': 'Sangana Inshila Yenu Yakumushi',
        'welcome_description': 'Temwa mwishibe umulimo uletile? Nshisakamwene! Yisubishe ibipusho utuntuniko no twafwile ukukwafwa ukusanga inshila yenu isuma.',
        'start_quiz': 'Tambukeni',
        'i_dont_know': 'Nshishibe',
        'sample_results': '📊 Moneni Icitambi',
        'built_for': 'Iyalengele Abana ba Sukulu mu Zambia',
        'works_offline': 'Ilesha Ng\'anda Intaneti',
        'free_forever': 'Yabula Malipilo Nshakwisa',
        'copyright': '© 2026 STUDY DOJO. Ifyonse ifya David Mutesa.',
        'contact': 'Tumikizeni: davidjuniormutesa@gmail.com',
        'quote': '"Inshila imo mwingasambilila ifyakumushi no kupanga ifyo mulefwaya." – Abraham Lincoln',
        'question_counter': 'Ipusho',
        'of': 'ya',
        'back_home': 'Bwelani ku ZamPath.ai',
        'dark_mode': 'Umufi',
        'light_mode': 'Umusana',
        'keyboard_tip': 'Ubulangizi: Pakishe amanambala ukusankha, Enter ukupita paumo, Backspace ukubwela',
        'keyboard_select': 'ukusankha',
        'keyboard_next': 'ukupita paumo',
        'keyboard_prev': 'ukubwela',
        'multi_select_hint': 'Mungasankha MAYANSHO AMANGA pa ipusho iyi. Sankhani ifyo mulefwaya!',
        'next': 'Pamo',
        'previous': 'Kumbuyo',
        'results_title': 'Imilimo Yabuchingama Kuli Inu',
        'results_subtitle': 'Kuya kuli inyisho shinu, iyi ni imilimo isuma ukuletile!',
        'top_matches': 'Icisankano Cakumutwe',
        'clusters': 'Amasangano',
        'avg_match': 'Aveleji Yakufwanana',
        'global_ready': 'Kubula Mu Calo Cense',
        'personality_title': 'Umweni Wenu',
        'personality_desc': 'Ici cishusho cilelanga ifyakumweni fyenu ifikulungile kuya kuli inyisho shinu. Umusali ukuya, ni fyene fyakulungila!',
        'search_placeholder': 'Sakani imilimo',
        'pathway_title': 'Inshila Yenu Yakumushi',
        'pathway_desc': 'Ukuya mu milimo yabuchingama kuli inu, mulebela ukulanda inshila iyi mu Form 1-4:',
        'subjects_title': 'Ifya Mapepala Ifyakubuchingama',
        'subjects_note': 'Fipusheni ku sukulu yenu ukumona ifya mapepala ifyapabili. Lalileni na musambilishi wenu wa buyo ukumfwa ifingi!',
        'career_web_title': 'Mapa ya Imilimo',
        'career_web_instruction': 'Tikeni pa sangano lili lyonse ukumona imilimo',
        'compare_title': 'Fwananisha Imilimo',
        'compare_desc': 'Sankhani imilimo 5 ukwifwananisha',
        'select_career': 'Sankhani Umulimo',
        'clear_all': 'Futesheni fyonse',
        'download_pdf': 'Tulenjako Lipoti PDF',
        'print_report': 'Pintani Lipoti',
        'retake_quiz': 'Tendekeni Ibipusho',
        'color_mode': 'Ulanga',
        'bw_mode': 'Umufi no Umupepe',
        'discovery_title': "Tilibe nshita! Tayeni tukasange ifisankano fyenu fyonse pamo.",
        'discovery_desc': "Tilibe nshita! Tayeni tukasange ifisankano fyenu fyonse pamo.",
        'discovery_instruction': 'Tikeni pa sangano ili panshi ukumona imilimo. Pakuti mwene, tikeni "Welengani Ifingi" ukumfwa ifyakulungila panji "Onjezela Ukwifwananisha" ukwifwananisha.',
        'discovery_compare': 'Ukufwananisha Kwenu',
        'discovery_compare_empty': 'Onjezeleni imilimo kuya mu masangano aya ukwifwananisha.',
        'read_more': 'Welengani Ifingi',
        'add_to_compare': 'Onjezela Ukwifwananisha',
        'remove_from_compare': 'Futesheni Ukwifwananisha',
        'next_steps_title': 'Imitende Yenu Yapashana',
        'next_step_1': 'Tikeni pa card ya sangano pamwamba ukumona imilimo yonse mu sangano li lye.',
        'next_step_2': 'Pa umulimo uli wonse, tikeni "Welengani Ifingi" ukumfwa ifyakulungila.',
        'next_step_3': 'Tikeni "Onjezela Ukwifwananisha" ukwongeza imilimo pa tebulo lyakwifwananisha.',
        'next_step_4': 'Fwananishani imilimo 5!',
        'remember_note': "Mukumbukeni: Cawama ukutemwa mwishibe! Icakulungila no kupitilila ukusanga.",
        'retake_quiz_button': 'Tendekeni Ibipusho',
        'what_they_do': 'Ifyo Bacita',
        'requirements': 'Ifyalekanishiwa',
        'career_pathway': 'Inshila Yakumushi',
        'where_to_study': 'Apo Mwasambililila',
        'salary': 'Umushahara',
        'zambia': 'Zambia',
        'international': 'Mu Calo Cense',
        'international_opportunities': 'Amwayi Mu Calo Cense',
        'global_demand': 'Ukufwayiwa Mu Calo Cense',
        'countries': 'Ifyalo',
        'scholarships': 'Amaburse ya Mapepala',
        'how_to_work_abroad': 'Mwingacita Umulimo Kunja',
        'career_story': 'Inkashi Ya Umulimo',
        'career_day_activity': 'Ifyo Bacita Pa Bushiku Bwa Umulimo',
        'share_results': 'Gaweniko Ifyapela',
        'share_copy': 'Kopeni Ulalo',
        'share_whatsapp': 'Gaweniko pa WhatsApp',
        'share_email': 'Tumizeni pa Imelo',
        'share_title': '🌟 Ifyapela Fyane pa Umulimo pa ZamPath!',
        'share_body': 'Nasanga imilimo yakubuchingama kuli ine mukwambila ZamPath! Moneni ifyapela fyane:',
        'share_copied': 'Ulalo wakopedwa!',
        'share_desc': 'Gaweniko ifyapela fyenu kuli bafyashi, bamwalisha, panji bakwenu!',
        'close': 'Funga',
        'please_select_answer': 'Mwatobela mwasankha yankho limo ukupita pamo.',
        'no_results': 'Temwa imilimo iikwata ne shakusaka kweni.',
        'try_different_keywords': 'Yesani amashwi yambi panji futesheni ifya kusefwa.',
        'must_have': 'IFYE KULENGILWA:',
        'recommended': 'IFYE KULANGWA:',
        'career': 'Umulimo',
        'feature': 'Icishusho',
        'skill': 'Ubucenjela',
        'pathway': 'Inshila',
        'select_language': 'Sankhani Ulwimi',
        'english': 'Cingelesi',
        'nyanja': 'Chinyanja',
        'bemba': 'Icibemba',
        'tonga': 'Chitonga',
        'loading': 'Kutendeka...',
        'back_to_top': 'Bwelani pa mutwe',
        'skip_link': 'Lumphani ku nkhani',
        'privacy_policy': 'Amalayo Ya Chinsinsi',
        'about_us': 'Ifyo tuli',
        'contact_us': 'Tumikizeni',
        'all_rights_reserved': 'Ifyonse ifya David Mutesa',
        'contact_email': 'davidjuniormutesa@gmail.com',
        'your_future_starts_here': 'Ifyakumushi fyenu fyatendeka pano.',
        'find_your_path': 'Sangani inshila yenu.',
        'start_your_journey': 'Tambukeni Ulendo Wenu',
        'learn_more': 'Mumeni Ifingi',
        'features': 'Ifintu',
        'how_it_works': 'Ivyo Icita',
        'testimonials': 'Umboni',
        'stats': 'Imibare',
        'ai_discovery_title': '🤖 Mukufwaya Ifisankano Fyambi?',
        'ai_discovery_desc': 'Twakusanga imilimo {0} kuli imwe. Mukufwaya ifingi?',
        'smart_discover': '🔍 Ukupimpa Kwabuchi',
        'ai_chat': '🤖 Ipeleni AI (Bula Malipilo)',
        'explore_all': '🎯 Onani Imilimo Yonse'
    },
    'tonga': {
        'app_title': 'Career Quest',
        'app_name': 'Career Quest',
        'welcome_title': 'Sangana Njila Yenyu Yabulemu',
        'welcome_subtitle': 'Sangana Njila Yenyu Yabulemu',
        'welcome_description': 'Tamuzi nso mwa kukonzya kucita mulimo nzi? Muleka kutetema! Amba makani aafwumbi atonganya tulimvwisya kuti mwasangane njila yenyu yabulemu.',
        'start_quiz': 'Tambukani',
        'i_dont_know': 'Ncindisena',
        'sample_results': '📊 Onani Zibambilwe',
        'built_for': 'Yakalingidwe Abana ba Sukulu mu Zambia',
        'works_offline': 'Ilaamba Ng\'anda Intaneti',
        'free_forever': 'Yalubotu Nsiku Zyonse',
        'copyright': '© 2026 STUDY DOJO. Zyonse zya David Mutesa.',
        'contact': 'Tumikizeni: davidjuniormutesa@gmail.com',
        'quote': '"Njila yokwela yakuziwa bumunthu ncokubumba." – Abraham Lincoln',
        'question_counter': 'Mbuzi',
        'of': 'ya',
        'back_home': 'Bwelani ku ZamPath.ai',
        'dark_mode': 'Mdaa',
        'light_mode': 'Musi',
        'keyboard_tip': 'Mbuli: Kenzanga manambala kusankha, Enter kuya patsogolo, Backspace kubwela',
        'keyboard_select': 'kusankha',
        'keyboard_next': 'kuya patsogolo',
        'keyboard_prev': 'kubwela',
        'multi_select_hint': 'Mungasankha MAKANI AMANJI pa mbuzi iyi. Sankhani zyonse zyomwe mwakonda!',
        'next': 'Patsogolo',
        'previous': 'Kumbuyo',
        'results_title': 'Mikondo Iyakanilwe Kuli Imwe',
        'results_subtitle': 'Potengera makani enyu, naindi mikondo yabotu kuli imwe!',
        'top_matches': 'Zisankho Zyakumutwe',
        'clusters': 'Zigungu',
        'avg_match': 'Aveleji Yakufwanana',
        'global_ready': 'Zyakonzekela Calo Consi',
        'personality_title': 'Mbwenu Yenyu',
        'personality_desc': 'Chishusho ichi chili kulaanga mbwenu zyenyu zyakukula potengera makani enyu. Muzi ukukula, ni zyakukula!',
        'search_placeholder': 'Sakani mikondo',
        'pathway_title': 'Njila Yenyu Yabulemu',
        'pathway_desc': 'Kuti mutsatire mikondo iyakanilwe kuli imwe, mubela kulanda njila iyi mu Form 1-4:',
        'subjects_title': 'Maphunziro Akukanilwe',
        'subjects_note': 'Fufuzani ni sukulu yenyu kuti mwone maphunziro alipo. Ambieni ni musambilishi wenyu wakulangila kuti amve zyambotu!',
        'career_web_title': 'Mepu ya Mikondo',
        'career_web_instruction': 'Dina pa gungu lililyonse kuti mwone mikondo',
        'compare_title': 'Fanizani Mikondo',
        'compare_desc': 'Sankhani mikondo 5 kuti muzifaniza',
        'select_career': 'Sankhani Mikondo',
        'clear_all': 'Futeshani Zyonse',
        'download_pdf': 'Tulenjako Lipoti PDF',
        'print_report': 'Pintani Lipoti',
        'retake_quiz': 'Bwezelani Mbuzi',
        'color_mode': 'Mbala',
        'bw_mode': 'Mdaa & Mucece',
        'discovery_title': "Ncibotu! Tayeni tukaone zisankho zyenyu zyonse pamodzi.",
        'discovery_desc': "Ncibotu! Tayeni tukaone zisankho zyenyu zyonse pamodzi.",
        'discovery_instruction': 'Dina pa gungu ili panshi kuti mwone mikondo. Pakuti mwene, dina "Welengani Zyambotu" kuti muzi zyinji panji "Onjezela Kufaniza" kuti muzifaniza.',
        'discovery_compare': 'Kufaniza Kwenyu',
        'discovery_compare_empty': 'Onjezelani mikondo kuya mu zigungu izi kuti muzifaniza.',
        'read_more': 'Welengani Zyambotu',
        'add_to_compare': 'Onjezela Kufaniza',
        'remove_from_compare': 'Futeshani Kufaniza',
        'next_steps_title': 'Masitepe Enyu Oyandikila',
        'next_step_1': 'Dina pa khadi ya gungu pamwambapa kuti mwone mikondo yonse mu gungu li lye.',
        'next_step_2': 'Pa mikondo ili yonse, dina "Welengani Zyambotu" kuti muzi zyinji.',
        'next_step_3': 'Dina "Onjezela Kufaniza" kuti wonjezele mikondo pa tebulo lyakufaniza.',
        'next_step_4': 'Fanizani mikondo 5!',
        'remember_note': "Kumbukani: Ncibotu kutamuzi! Cakukula nokupitilila kusaka.",
        'retake_quiz_button': 'Bwezelani Mbuzi',
        'what_they_do': 'Zyomwe Bacita',
        'requirements': 'Zyokonzya',
        'career_pathway': 'Njila Yabulemu',
        'where_to_study': 'Kumene Mungaphunzire',
        'salary': 'Malipilo',
        'zambia': 'Zambia',
        'international': 'Calo Consi',
        'international_opportunities': 'Mwayi Calo Consi',
        'global_demand': 'Kukonzyeka Calo Consi',
        'countries': 'Mayiko',
        'scholarships': 'Maburse ya Maphunziro',
        'how_to_work_abroad': 'Mungacita Mulimo Kunja',
        'career_story': 'Nkhani Ya Mulimo',
        'career_day_activity': 'Zyocitwa Pa Bushiku Bwa Mulimo',
        'share_results': 'Gaweniko Zyabula',
        'share_copy': 'Kopeni Ulalo',
        'share_whatsapp': 'Gaweniko pa WhatsApp',
        'share_email': 'Tumizeni pa Imelo',
        'share_title': '🌟 Zyabula Zyane pa Mulimo pa ZamPath!',
        'share_body': 'Nasanga mikondo iyakanilwe kuli ine mukwambila ZamPath! Onani zyabula zyane:',
        'share_copied': 'Ulalo wakopedwa!',
        'share_desc': 'Gaweniko zyabula zyenyu kuli babaana, badunzi, panji bakwenu!',
        'close': 'Funga',
        'please_select_answer': 'Mwatobela mwasankha makani amo kuti mupite patsogolo.',
        'no_results': 'Tazimikondo iikwata ni sakunso yenyu.',
        'try_different_keywords': 'Yesani mazwi yambi panji futeshani zyosefa.',
        'must_have': 'ZYOKONZYEDWA:',
        'recommended': 'ZYKULANGWA:',
        'career': 'Mulimo',
        'feature': 'Cishusho',
        'skill': 'Luso',
        'pathway': 'Njila',
        'select_language': 'Sankhani Mulaka',
        'english': 'Cingelesi',
        'nyanja': 'Chinyanja',
        'bemba': 'Icibemba',
        'tonga': 'Chitonga',
        'loading': 'Kutendeka...',
        'back_to_top': 'Bwelani pa mutwe',
        'skip_link': 'Lumphani ku nkhani',
        'privacy_policy': 'Malayilo Ya Chinsinsi',
        'about_us': 'Zyotwe',
        'contact_us': 'Tumikizeni',
        'all_rights_reserved': 'Zyonse zya David Mutesa',
        'contact_email': 'davidjuniormutesa@gmail.com',
        'your_future_starts_here': 'Bumunthu bwenu butendeka pano.',
        'find_your_path': 'Sangani njila yenyu.',
        'start_your_journey': 'Tambukani Ulendo Wenyu',
        'learn_more': 'Mumeni Zyinji',
        'features': 'Zintu',
        'how_it_works': 'Izyo Icita',
        'testimonials': 'Umboni',
        'stats': 'Ziwerengero',
        'ai_discovery_title': '🤖 Mukabila Mibele Yimbi?',
        'ai_discovery_desc': 'Twasanga mibele {0} kuli imwe. Mukabila zisankho zyinji?',
        'smart_discover': '🔍 Kupima Kwabotu',
        'ai_chat': '🤖 Ibuzeni AI (Yafuli)',
        'explore_all': '🎯 Onani Mibele Yonse'
    }
};

// ================================================================
// SECTION 6: DYNAMICALLY GENERATE 30 QUESTIONS
// ================================================================

function buildQuestions() {
    var clusterMap = {
        'STEM': ['analytical', 'technical', 'logical', 'problemSolving', 'science', 'research', 'technology', 'math', 'engineering', 'computer'],
        'Healthcare': ['helping', 'medical', 'compassion', 'empathy', 'health', 'patient', 'care', 'nursing', 'clinical'],
        'Business': ['business', 'leadership', 'strategic', 'entrepreneurial', 'financial', 'management', 'accounting', 'marketing', 'sales'],
        'Creative': ['creative', 'visual', 'artistic', 'imagination', 'expression', 'design', 'writing', 'performance', 'music', 'art'],
        'Helping': ['helping', 'compassion', 'community', 'empathy', 'counseling', 'teaching', 'social', 'supportive', 'caring'],
        'Outdoor': ['outdoor', 'nature', 'physical', 'adventure', 'conservation', 'environment', 'wildlife', 'agriculture', 'farming'],
        'Public Service': ['leadership', 'public', 'community', 'government', 'service', 'protection', 'law', 'justice', 'civil'],
        'Skilled Trades': ['practical', 'handsOn', 'physical', 'technical', 'craftsmanship', 'repair', 'building', 'construction', 'manual']
    };

    var questions = [];
    var questionIds = Object.keys(questionTraits).sort(function(a, b) { return Number(a) - Number(b); });

    questionIds.forEach(function(id) {
        var qData = questionTraits[id];
        var options = Object.keys(qData);
        var singleSelectIds = ['5', '7', '8', '14', '15'];
        var multiSelect = !singleSelectIds.includes(id);

        var weights = {};
        var defaultWeight = { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 };

        options.forEach(function(opt) {
            var traits = qData[opt];
            var w = { 'STEM': 0, 'Healthcare': 0, 'Business': 0, 'Creative': 0, 'Helping': 0, 'Outdoor': 0, 'Public Service': 0, 'Skilled Trades': 0 };
            traits.forEach(function(t) {
                for (var cluster in clusterMap) {
                    if (clusterMap[cluster].indexOf(t) !== -1) {
                        w[cluster] += 2;
                    }
                }
            });
            for (var cluster in w) {
                if (w[cluster] === 0) w[cluster] = 1;
            }
            if (opt.indexOf('Not sure') !== -1 || opt.indexOf('🤷') !== -1) {
                for (var cluster in w) w[cluster] = 2;
            }
            weights[opt] = w;
        });

        var textMap = {
            '1': 'Which subjects do you enjoy most at school? (Select all that apply)',
            '2': 'What activities do you enjoy in your free time? (Select all that apply)',
            '3': 'Where would you most like to work? (Select all that apply)',
            '4': 'What kind of work appeals to you most? (Select all that apply)',
            '5': 'How important is salary to you?',
            '6': 'What would make your work feel most fulfilling? (Select all that apply)',
            '7': 'Where do you see yourself working in the future?',
            '8': 'What is your preferred role in a team?',
            '9': 'Which thinking style describes you best? (Select all that apply)',
            '10': 'What kind of work environment do you prefer? (Select all that apply)',
            '11': 'How do you want to make an impact? (Select all that apply)',
            '12': 'Do you work best alone or with others?',
            '13': 'What skills do you have or want to develop? (Select all that apply)',
            '14': 'What kind of work life do you prefer?',
            '15': 'How do you handle pressure and deadlines?',
            '16': 'How do you learn best? (Select all that apply)',
            '17': 'How would you describe your personality? (Select all that apply)',
            '18': 'What kind of projects excite you? (Select all that apply)',
            '19': 'What motivates you most? (Select all that apply)',
            '20': 'What kind of lifestyle do you want? (Select all that apply)',
            '21': 'How do you feel about social interaction at work? (Select all that apply)',
            '22': 'How much responsibility do you want?',
            '23': 'What kind of workplace makes you happiest? (Select all that apply)',
            '24': 'How do you handle challenges? (Select all that apply)',
            '25': 'What kind of recognition matters to you? (Select all that apply)',
            '26': 'What is your ideal work-life balance? (Select all that apply)',
            '27': 'How do you make decisions? (Select all that apply)',
            '28': 'How do you prefer to learn new things? (Select all that apply)',
            '29': 'How would you describe your communication style? (Select all that apply)',
            '30': 'What work schedule suits you best? (Select all that apply)'
        };

        questions.push({
            id: Number(id),
            text: textMap[id] || 'Question ' + id,
            multiSelect: multiSelect,
            options: options,
            weights: weights,
            defaultWeight: defaultWeight,
            isNotSure: false
        });
    });

    return questions;
}

// ================================================================
// SECTION 7: GENERATE QUESTIONS
// ================================================================

const questions = buildQuestions();

// ================================================================
// SECTION 8: APPLICATION STATE
// ================================================================

const STORAGE_KEY = 'career_quest_state';
const THEME_KEY = 'career_quest_theme';
const LANGUAGE_KEY = 'career_quest_language';
// V3.1: shared theme key — the landing page and the app now follow ONE
// dark-mode setting (each also writes its legacy key for old copies).
const SHARED_THEME_KEY = 'zampath_theme';

let state = {
    currentQuestion: 0,
    answers: [],
    quizStarted: false,
    quizCompleted: false,
    results: null,
    careerScores: {},
    isDiscoveryMode: false,
    colorMode: 'color',
    activeFilter: 'all',
    searchQuery: '',
    darkMode: false,
    kbFocusIndex: -1,
    discoveryCompare: [],
    compareList: [],
    personalityTraits: {},
    language: 'en',
    shareData: null
};

// ================================================================
// SECTION 9: DOM REFERENCES (FIXED)
// ================================================================
const DOM = {
    welcomeScreen: document.getElementById('welcome-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultsScreen: document.getElementById('results-screen'),
    darkModeToggle: document.getElementById('dark-mode-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    themeLabel: document.getElementById('theme-label'),
    startQuizBtn: document.getElementById('start-quiz-btn'),
    iDontKnowBtn: document.getElementById('i-dont-know-btn'),
    sampleResultsBtn: document.getElementById('sample-results-btn'),
    savedProgressBanner: document.getElementById('saved-progress-banner'),
    questionCounter: document.getElementById('question-counter'),
    progressBar: document.getElementById('progress-bar'),
    progressFill: document.getElementById('progress-fill'),
    questionDots: document.getElementById('question-dots'),
    questionContainer: document.getElementById('question-container'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    multiSelectHint: document.getElementById('multi-select-hint'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    resultsSubtitle: document.getElementById('results-subtitle'),
    statsSummary: document.getElementById('stats-summary'),
    careerSearch: document.getElementById('career-search'),
    resultsToolbar: document.querySelector('.results-toolbar'),
    filterChips: document.getElementById('filter-chips'),
    careerMatches: document.getElementById('career-matches'),
    pathwayDisplay: document.getElementById('pathway-display'),
    subjectList: document.getElementById('subject-list'),
    careerClusters: document.getElementById('career-clusters'),
    comparisonSelectors: document.getElementById('comparison-selectors'),
    comparisonTable: document.getElementById('comparison-table'),
    clearComparisonBtn: document.getElementById('clear-comparison-btn'),
    downloadPdfBtn: document.getElementById('download-pdf-btn'),
    printBtn: document.getElementById('print-btn'),
    retakeBtn: document.getElementById('retake-btn'),
    discoveryMode: document.getElementById('discovery-mode'),
    discoveryContent: document.getElementById('discovery-content'),
    discoveryCompareTable: document.getElementById('discovery-compare-table'),
    discoveryCompareCount: document.getElementById('discovery-compare-count'),
    clearDiscoveryCompareBtn: document.getElementById('clear-discovery-compare-btn'),
    careerModal: document.getElementById('career-modal'),
    careerDetailContent: document.getElementById('career-detail-content'),
    modalClose: document.querySelector('.modal-close'),
    modalAddToCompare: document.getElementById('modal-add-to-compare'),
    backToTop: document.getElementById('back-to-top'),
    confettiCanvas: document.getElementById('confetti-canvas'),
    toastContainer: document.getElementById('toast-container'),
    colorModeRadios: document.querySelectorAll('input[name="color-mode"]'),
    personalityChart: document.getElementById('personalityChart'),
    shareLinkBtn: document.getElementById('share-link-btn'),
    shareWhatsAppBtn: document.getElementById('share-whatsapp-btn'),
    shareEmailBtn: document.getElementById('share-email-btn'),
    shareLinkContainer: document.getElementById('share-link-container'),
    shareLinkInput: document.getElementById('share-link-input'),
    // V2 elements
    smartDiscoverBtn: document.getElementById('smart-discover-btn'),
    aiDiscoverBtn: document.getElementById('ai-discover-btn'),
    exploreAllBtn: document.getElementById('explore-all-btn'),
    aiTotalCareers: document.getElementById('ai-total-careers'),
    personalityInsights: document.getElementById('personality-insights'),
    traitRadarSection: document.getElementById('trait-radar-section'),
    typingSubtitle: document.getElementById('typing-subtitle')
};

// ================================================================
// SECTION 10: HELPER FUNCTIONS (FIXED - Moved to top)
// ================================================================
function getClusterBg(cluster) {
    var colors = {
        'STEM': '#eff6ff',
        'Healthcare': '#fef2f2',
        'Business': '#fffbeb',
        'Creative': '#faf5ff',
        'Helping': '#ecfdf5',
        'Outdoor': '#f0fdf4',
        'Public Service': '#f5f3ff',
        'Skilled Trades': '#fff7ed'
    };
    return colors[cluster] || '#f8fafc';
}
function getClusterColor(cluster) {
    var colors = {
        'STEM': '#2563eb',
        'Healthcare': '#dc2626',
        'Business': '#d97706',
        'Creative': '#8b5cf6',
        'Helping': '#10b981',
        'Outdoor': '#22c55e',
        'Public Service': '#8b5cf6',
        'Skilled Trades': '#f97316'
    };
    return colors[cluster] || '#64748b';
}

// ================================================================
// SECTION 11: LANGUAGE FUNCTIONS
// ================================================================
function getCurrentLanguage() {
    try {
        var saved = localStorage.getItem(LANGUAGE_KEY);
        if (saved && translations[saved]) return saved;
    } catch(e) {}
    return 'en';
}
function saveLanguage(lang) { try { localStorage.setItem(LANGUAGE_KEY, lang); } catch(e) {} }
function t(key) {
    var lang = state.language || 'en';
    if (translations[lang] && translations[lang][key]) return translations[lang][key];
    if (translations['en'] && translations['en'][key]) return translations['en'][key];
    return key;
}
function switchLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    state.language = lang;
    saveLanguage(lang);
    updateLanguageUI();
    updateLanguageSelectorUI();
}
function updateLanguageUI() {
    document.querySelectorAll('[data-translate]').forEach(function(el) {
        var key = el.getAttribute('data-translate');
        var translation = t(key);
        if (translation) {
            if (el.tagName === 'BUTTON' || el.tagName === 'A' || el.tagName === 'SPAN') el.innerHTML = translation;
            else el.textContent = translation;
        }
    });
    var themeLabel = document.getElementById('theme-label');
    if (themeLabel) themeLabel.textContent = t('dark_mode');
    updateQuestionCounter();
    document.title = t('app_title') + ' - ' + t('find_your_path');
    document.documentElement.lang = state.language;
}
function updateLanguageSelectorUI() {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === state.language);
    });
}
function updateQuestionCounter() {
    var total = questions.length;
    var current = state.currentQuestion + 1;
    var counter = DOM.questionCounter;
    if (counter) counter.textContent = t('question_counter') + ' ' + current + ' ' + t('of') + ' ' + total;
}

// ================================================================
// SECTION 12: SHARE RESULTS FUNCTIONS
// ================================================================
function generateShareData() { return { answers: state.answers, results: state.results, careerScores: state.careerScores, personalityTraits: state.personalityTraits, timestamp: Date.now(), version: '1.0' }; }
function encodeShareData(data) { try { return btoa(encodeURIComponent(JSON.stringify(data))); } catch(e) { return null; } }
function decodeShareData(encoded) { try { return JSON.parse(decodeURIComponent(atob(encoded))); } catch(e) { return null; } }
function generateShareableUrl() {
    var data = generateShareData();
    var encoded = encodeShareData(data);
    if (!encoded) return null;
    return window.location.href.split('?')[0] + '?share=' + encoded;
}
function copyShareLink() {
    var url = generateShareableUrl();
    if (!url) { showToast('Error generating share link.'); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function() {
            showToast(t('share_copied'));
            if (DOM.shareLinkContainer) { DOM.shareLinkContainer.style.display = 'flex'; DOM.shareLinkInput.value = url; }
        }).catch(function() { fallbackCopy(url); });
    } else { fallbackCopy(url); }
}
function fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(t('share_copied'));
        if (DOM.shareLinkContainer) { DOM.shareLinkContainer.style.display = 'flex'; DOM.shareLinkInput.value = text; }
    } catch(e) { showToast('Failed to copy.'); }
    document.body.removeChild(textarea);
}
function shareOnWhatsApp() {
    var url = generateShareableUrl();
    if (!url) { showToast('Error generating share link.'); return; }
    var title = t('share_title');
    var body = t('share_body') + '\n\n' + url;
    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(title + '\n\n' + body), '_blank');
}
function shareViaEmail() {
    var url = generateShareableUrl();
    if (!url) { showToast('Error generating share link.'); return; }
    var subject = t('share_title');
    var body = t('share_body') + '\n\n' + url;
    window.open('mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body), '_blank');
}
function checkForSharedResults() {
    var params = new URLSearchParams(window.location.search);
    var encoded = params.get('share');
    if (encoded) {
        var data = decodeShareData(encoded);
        if (data) {
            state.answers = data.answers || [];
            state.results = data.results || [];
            state.careerScores = data.careerScores || {};
            state.personalityTraits = data.personalityTraits || {};
            state.quizCompleted = true;
            state.quizStarted = true;
            showScreen('results-screen');
            displayResults();
            showToast('📊 Viewing shared results!');
            if (window.history && window.history.replaceState) {
                window.history.replaceState({}, document.title, window.location.href.split('?')[0]);
            }
            return true;
        }
    }
    return false;
}

// ================================================================
// SECTION 13: UTILITY FUNCTIONS
// ================================================================
function showToast(message, duration) {
    duration = duration || 3000;
    // V3 FIX: guard against missing container (older layouts) — never crash
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);
    setTimeout(function() { toast.remove(); }, duration);
}
// V3: subtle haptic feedback for phones (safe no-op on desktop)
function haptic(pattern) {
    try { if (navigator.vibrate) navigator.vibrate(pattern || 10); } catch (e) { /* ignore */ }
}
function debounce(fn, delay) {
    let timer;
    return function() {
        const args = arguments;
        const ctx = this;
        clearTimeout(timer);
        timer = setTimeout(function() { fn.apply(ctx, args); }, delay);
    };
}
function isNotSureAnswer(answer) {
    return !answer || answer.indexOf('Not sure') !== -1 || answer.indexOf('🤷') !== -1;
}
function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            currentQuestion: state.currentQuestion,
            answers: state.answers,
            quizStarted: state.quizStarted,
            quizCompleted: state.quizCompleted,
            careerScores: state.careerScores,
            results: state.results,
            isDiscoveryMode: state.isDiscoveryMode,
            discoveryCompare: state.discoveryCompare,
            compareList: state.compareList,
            personalityTraits: state.personalityTraits,
            language: state.language,
            timestamp: Date.now()
        }));
    } catch (e) {}
}
function loadSavedState() {
    try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        var data = JSON.parse(raw);
        if (data.timestamp && Date.now() - data.timestamp > 7 * 24 * 60 * 60 * 1000) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return data;
    } catch (e) { return null; }
}
function clearSavedState() { try { localStorage.removeItem(STORAGE_KEY); } catch(e) {} }
function saveTheme(isDark) {
    try {
        var v = isDark ? 'dark' : 'light';
        localStorage.setItem(SHARED_THEME_KEY, v); // V3.1: syncs with landing page
        localStorage.setItem(THEME_KEY, v);        // keep legacy key in sync too
    } catch(e) {}
}
function loadTheme() {
    // V3.1: prefer the shared key (landing ⇄ app sync), fall back to legacy,
    // then to the device system preference on first ever visit.
    try {
        var t = localStorage.getItem(SHARED_THEME_KEY) || localStorage.getItem(THEME_KEY);
        if (t === 'dark') return true;
        if (t === 'light') return false;
    } catch(e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// ================================================================
// SECTION 14: SCREEN MANAGEMENT
// ================================================================
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    var target = document.getElementById(screenName);
    if (target) { target.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

// ================================================================
// SECTION 15: DARK MODE
// ================================================================
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    applyTheme();
    saveTheme(state.darkMode);
}
function applyTheme() {
    document.body.classList.toggle('dark-mode', state.darkMode);
    DOM.themeIcon.textContent = state.darkMode ? '☀️' : '🌙';
    DOM.themeLabel.textContent = state.darkMode ? t('light_mode') : t('dark_mode');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = state.darkMode ? '#0f172a' : '#008000';
}

// ================================================================
// SECTION 16: QUIZ LOGIC
// ================================================================
function startQuiz(restoreState) {
    state.quizStarted = true;
    state.isDiscoveryMode = false;
    if (!restoreState || !state.answers.length) {
        state.currentQuestion = 0;
        state.answers = [];
        state.quizCompleted = false;
        state.results = null;
        state.careerScores = {};
        state.compareList = [];
        state.personalityTraits = {};
    }
    showScreen('quiz-screen');
    renderQuestion();
}
function startDiscoveryMode() {
    state.isDiscoveryMode = true;
    state.quizStarted = true;
    state.discoveryCompare = [];
    state.personalityTraits = {};
    state.results = [];
    state.careerScores = {};
    showScreen('results-screen');
    generateDiscoveryResults();
}
function renderQuestion() {
    var question = questions[state.currentQuestion];
    var qNum = state.currentQuestion + 1;
    var total = questions.length;
    updateQuestionCounter();
    var pct = Math.round((qNum / total) * 100);
    DOM.progressBar.setAttribute('aria-valuenow', pct);
    // Smooth progress bar update
    requestAnimationFrame(function() {
        DOM.progressFill.style.width = pct + '%';
    });

    DOM.questionContainer.classList.remove('question-enter');
    void DOM.questionContainer.offsetWidth;
    DOM.questionContainer.classList.add('question-enter');

    DOM.questionText.textContent = question.text;
    if (question.multiSelect) {
        DOM.multiSelectHint.textContent = t('multi_select_hint');
        DOM.multiSelectHint.style.display = 'block';
    } else {
        DOM.multiSelectHint.style.display = 'none';
    }

    var fragment = document.createDocumentFragment();
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    question.options.forEach(function(option, index) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.setAttribute('role', 'checkbox');
        btn.dataset.index = index;
        var answerArray = state.answers[state.currentQuestion] || [];
        var isSelected = answerArray.indexOf(option) !== -1;
        if (isSelected) { btn.classList.add('selected'); btn.setAttribute('aria-checked', 'true'); }
        else { btn.setAttribute('aria-checked', 'false'); }
        if (isNotSureAnswer(option)) btn.classList.add('not-sure');
        var letter = document.createElement('span');
        letter.className = 'option-letter';
        letter.textContent = letters[index] || String(index + 1);
        letter.setAttribute('aria-hidden', 'true');
        var text = document.createElement('span');
        text.textContent = option;
        btn.appendChild(letter);
        btn.appendChild(text);
        fragment.appendChild(btn);
    });

    // --- IMPROVEMENT: Clear all button for multi‑select ---
    if (question.multiSelect) {
        var clearBtn = document.createElement('button');
        clearBtn.textContent = '✕ Clear all';
        clearBtn.className = 'btn-link';
        clearBtn.style.marginTop = '8px';
        clearBtn.style.fontSize = '13px';
        clearBtn.style.color = 'var(--text-muted)';
        clearBtn.style.cursor = 'pointer';
        clearBtn.style.background = 'none';
        clearBtn.style.border = 'none';
        clearBtn.style.textDecoration = 'underline';
        clearBtn.addEventListener('click', function() {
            var opts = DOM.optionsContainer.querySelectorAll('.option-btn');
            opts.forEach(function(btn) {
                btn.classList.remove('selected');
                btn.setAttribute('aria-checked', 'false');
            });
            updateMultiSelectAnswer();
            updateNextButtonState();
        });
        fragment.appendChild(clearBtn);
    }

    DOM.optionsContainer.innerHTML = '';
    DOM.optionsContainer.appendChild(fragment);

    DOM.prevBtn.style.display = state.currentQuestion === 0 ? 'none' : 'inline-block';
    DOM.nextBtn.textContent = state.currentQuestion === questions.length - 1 ? t('results_title') : t('next');
    var currentAnswer = state.answers[state.currentQuestion] || [];
    DOM.nextBtn.disabled = currentAnswer.length === 0;
    state.kbFocusIndex = -1;
    renderQuestionDots(); // V3.1: keep the navigator in sync
    saveState();
}

// ================================================================
// SECTION 16b: QUESTION NAVIGATOR DOTS (V3.1)
// A row of tappable dots — jump back to any answered question, or
// forward to the first unanswered one. Locked ahead = keeps the quiz
// fair (no answer-skipping) while still letting users review.
// ================================================================
function isQuestionAnswered(i) {
    var a = state.answers[i];
    return !!(a && a.length);
}
function getMaxUnlockedIndex() {
    var total = questions.length;
    for (var i = 0; i < total; i++) {
        if (!isQuestionAnswered(i)) return i;
    }
    return total - 1;
}
function renderQuestionDots() {
    if (!DOM.questionDots) return;
    var total = questions.length;
    var maxUnlocked = getMaxUnlockedIndex();
    var html = '';
    for (var i = 0; i < total; i++) {
        var classes = ['q-dot'];
        var label;
        if (i === state.currentQuestion) classes.push('current');
        if (isQuestionAnswered(i)) classes.push('answered');
        var locked = i > maxUnlocked;
        if (locked) classes.push('locked');
        label = 'Question ' + (i + 1) + (isQuestionAnswered(i) ? ' (answered)' : '') +
                (locked ? ' (locked)' : '');
        html += '<button type="button" class="' + classes.join(' ') + '" data-index="' + i + '"'
             + (locked ? ' disabled aria-disabled="true"' : '')
             + ' aria-label="' + label + '" title="' + label + '"></button>';
    }
    DOM.questionDots.innerHTML = html;
    // Keep the current dot visible on small screens (dots overflow-x scroll)
    var current = DOM.questionDots.querySelector('.q-dot.current');
    if (current && current.scrollIntoView) {
        current.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
}
function handleDotClick(e) {
    var dot = e.target.closest('.q-dot');
    if (!dot || dot.classList.contains('locked')) return;
    var idx = parseInt(dot.dataset.index, 10);
    if (isNaN(idx) || idx === state.currentQuestion) return;
    state.currentQuestion = idx;
    renderQuestion();
    scrollQuestionIntoView();
    haptic(4);
}
function toggleOption(button) {
    var question = questions[state.currentQuestion];
    var isMultiSelect = question.multiSelect || false;
    if (isMultiSelect) {
        button.classList.toggle('selected');
        var isNowSelected = button.classList.contains('selected');
        button.setAttribute('aria-checked', isNowSelected ? 'true' : 'false');
        updateMultiSelectAnswer();
    } else {
        var allOptions = DOM.optionsContainer.querySelectorAll('.option-btn');
        allOptions.forEach(function(btn) { btn.classList.remove('selected'); btn.setAttribute('aria-checked', 'false'); });
        button.classList.add('selected');
        button.setAttribute('aria-checked', 'true');
        updateSingleSelectAnswer(button);
    }
    haptic(8); // V3: tiny tap buzz on phones — makes selection feel physical
    updateNextButtonState();
    saveState();
    if (!isMultiSelect && state.currentQuestion < questions.length - 1) {
        setTimeout(nextQuestion, 400);
    }
}
function updateMultiSelectAnswer() {
    var selected = DOM.optionsContainer.querySelectorAll('.option-btn.selected');
    state.answers[state.currentQuestion] = Array.from(selected).map(function(btn) {
        var spans = btn.querySelectorAll('span');
        return spans[spans.length - 1].textContent;
    });
}
function updateSingleSelectAnswer(button) {
    var spans = button.querySelectorAll('span');
    state.answers[state.currentQuestion] = [spans[spans.length - 1].textContent];
}
function updateNextButtonState() {
    var currentAnswer = state.answers[state.currentQuestion] || [];
    DOM.nextBtn.disabled = currentAnswer.length === 0;
    renderQuestionDots(); // V3.1: answered dot lights up immediately
}
function nextQuestion() {
    var currentAnswer = state.answers[state.currentQuestion] || [];
    if (currentAnswer.length === 0) { showToast(t('please_select_answer')); return; }
    if (state.currentQuestion === questions.length - 1) {
        calculateResults();
        state.quizCompleted = true;
        saveState();
        showScreen('results-screen');
        displayResults();
        return;
    }
    state.currentQuestion++;
    renderQuestion();
    scrollQuestionIntoView(); // V3: mobile — keep the new question visible
}
function prevQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        renderQuestion();
        scrollQuestionIntoView(); // V3: mobile
    }
}
// V3 NEW: on phones the quiz can be taller than the viewport; after moving
// to another question, bring the question back into view.
function scrollQuestionIntoView() {
    if (window.innerWidth > 768) return; // desktop layouts show everything
    requestAnimationFrame(function() {
        var bar = document.querySelector('.quiz-container .progress-bar');
        var top = bar ? bar.getBoundingClientRect().top + window.pageYOffset - 70 : 0;
        if (window.pageYOffset > top) {
            window.scrollTo({ top: top, behavior: 'smooth' });
        }
    });
}

// ================================================================
// SECTION 17: KEYBOARD NAVIGATION
// ================================================================
function handleKeyboardNav(e) {
    if (!DOM.quizScreen.classList.contains('active')) return;
    var options = DOM.optionsContainer.querySelectorAll('.option-btn');
    if (!options.length) return;
    var num = parseInt(e.key);
    if (num >= 1 && num <= options.length) {
        e.preventDefault();
        toggleOption(options[num - 1]);
        return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        state.kbFocusIndex = Math.min(state.kbFocusIndex + 1, options.length - 1);
        updateKbFocus(options);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        state.kbFocusIndex = Math.max(state.kbFocusIndex - 1, 0);
        updateKbFocus(options);
    } else if (e.key === 'Enter' && state.kbFocusIndex >= 0) {
        e.preventDefault();
        toggleOption(options[state.kbFocusIndex]);
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        prevQuestion();
    }
}
function updateKbFocus(options) {
    options.forEach(function(opt, i) {
        opt.classList.toggle('kb-focus', i === state.kbFocusIndex);
        if (i === state.kbFocusIndex) {
            opt.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    });
}

// ================================================================
// SECTION 18: SMART SCORING ENGINE
// ================================================================
function calculateResults() {
    var clusterScores = { 'STEM': 0, 'Healthcare': 0, 'Business': 0, 'Creative': 0, 'Helping': 0, 'Outdoor': 0, 'Public Service': 0, 'Skilled Trades': 0 };
    var clusterCounts = { 'STEM': 0, 'Healthcare': 0, 'Business': 0, 'Creative': 0, 'Helping': 0, 'Outdoor': 0, 'Public Service': 0, 'Skilled Trades': 0 };
    state.answers.forEach(function(answer, index) {
        if (!answer || !answer.length) return;
        var question = questions[index];
        if (Array.isArray(answer)) {
            answer.forEach(function(selectedOption) {
                if (!selectedOption) return;
                var nsq = isNotSureAnswer(selectedOption);
                var weights = nsq ? question.defaultWeight : (question.weights[selectedOption] || question.defaultWeight);
                for (var cluster in weights) {
                    if (clusterScores.hasOwnProperty(cluster)) {
                        clusterScores[cluster] += weights[cluster];
                        clusterCounts[cluster]++;
                    }
                }
            });
        } else {
            var nsq = isNotSureAnswer(answer);
            var weights = nsq ? question.defaultWeight : (question.weights[answer] || question.defaultWeight);
            for (var cluster in weights) {
                if (clusterScores.hasOwnProperty(cluster)) {
                    clusterScores[cluster] += weights[cluster];
                    clusterCounts[cluster]++;
                }
            }
        }
    });
    var avgCluster = {};
    for (var c in clusterScores) {
        avgCluster[c] = clusterCounts[c] > 0 ? clusterScores[c] / clusterCounts[c] : 2;
    }
    calculatePersonalityTraits();
    var scores = {};
    for (var name in careers) {
        var career = careers[name];
        var clusterScore = avgCluster[career.cluster] || 2;
        var traits = careerTraits[name] || [];
        var traitMatchTotal = 0;
        var traitMatchCount = 0;
        traits.forEach(function(tr) {
            var displayKey = tr.charAt(0).toUpperCase() + tr.slice(1);
            if (displayKey === 'Detailoriented') displayKey = 'Detail-Oriented';
            if (displayKey === 'Problemsolving') displayKey = 'Problem-Solving';
            if (displayKey === 'Peopleperson') displayKey = 'People-Person';
            var score = state.personalityTraits[displayKey] || 0;
            if (score > 0) {
                traitMatchTotal += score;
                traitMatchCount++;
            }
        });
        var avgTraitMatch = traitMatchCount > 0 ? traitMatchTotal / traitMatchCount : 0;
        var normalizedTraitMatch = (avgTraitMatch / 10) * 5;
        var combined = (clusterScore * 0.4) + (normalizedTraitMatch * 0.6);
        var pct = Math.round((combined / 5) * 100);
        pct = Math.max(0, Math.min(100, pct));
        scores[name] = pct;
    }
    state.careerScores = scores;
    state.results = Object.keys(scores).sort(function(a, b) { return scores[b] - scores[a]; });
}

// ================================================================
// SECTION 19: PERSONALITY TRAITS CALCULATION
// ================================================================
function calculatePersonalityTraits() {
    var rawScores = {
        'Analytical': 0, 'Creative': 0, 'Helping': 0, 'Technical': 0,
        'Outdoor': 0, 'Leadership': 0, 'Communication': 0, 'Practical': 0,
        'Strategic': 0, 'Resilience': 0, 'Detail-Oriented': 0, 'Entrepreneurial': 0
    };
    state.answers.forEach(function(answer, index) {
        if (!answer || !answer.length) return;
        var question = questions[index];
        if (Array.isArray(answer)) {
            answer.forEach(function(selectedOption) {
                if (!selectedOption) return;
                var nsq = isNotSureAnswer(selectedOption);
                if (nsq) return;
                var qTraits = questionTraits[String(index + 1)];
                if (qTraits) {
                    var matchedTraits = qTraits[selectedOption];
                    if (matchedTraits) {
                        matchedTraits.forEach(function(t) {
                            var key = t.charAt(0).toUpperCase() + t.slice(1);
                            if (key === 'Detailoriented') key = 'Detail-Oriented';
                            if (key === 'Problemsolving') key = 'Problem-Solving';
                            if (key === 'Peopleperson') key = 'People-Person';
                            if (rawScores.hasOwnProperty(key)) {
                                rawScores[key] += 5;
                            }
                        });
                    }
                }
            });
        }
    });
    var maxScore = 0;
    for (var t in rawScores) {
        if (rawScores[t] > maxScore) maxScore = rawScores[t];
    }
    if (maxScore === 0) maxScore = 1;
    var normalized = {};
    for (var t in rawScores) {
        var val = Math.round((rawScores[t] / maxScore) * 10);
        if (val < 1 && rawScores[t] > 0) val = 1;
        normalized[t] = val;
    }
    state.personalityTraits = normalized;
}

// ================================================================
// SECTION 20: RADAR CHART RENDER (ANIMATED)
// ================================================================
function renderRadarChart() {
    var canvas = DOM.personalityChart;
    if (!canvas) return;
    // V3 NEW: if Chart.js failed to load, draw a lightweight radar manually
    // so the personality profile ALWAYS renders (great for offline/CDN fails).
    if (typeof Chart === 'undefined') {
        drawFallbackRadar(canvas);
        return;
    }
    var ctx = canvas.getContext('2d');
    var traits = state.personalityTraits || {
        'Analytical': 3, 'Creative': 3, 'Helping': 3, 'Technical': 3,
        'Outdoor': 3, 'Leadership': 3, 'Communication': 3, 'Practical': 3,
        'Strategic': 3, 'Resilience': 3, 'Detail-Oriented': 3, 'Entrepreneurial': 3
    };
    if (window.personalityChartInstance) window.personalityChartInstance.destroy();
    var color = getComputedStyle(document.documentElement).getPropertyValue('--zm-green').trim() || '#008000';
    var bgColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-bg').trim() || 'rgba(0, 128, 0, 0.15)';
    var gridColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-grid').trim() || '#e2e8f0';
    var textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#1a202c';
    window.personalityChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Analytical', 'Creative', 'Helping', 'Technical', 'Outdoor', 'Leadership', 'Communication', 'Practical', 'Strategic', 'Resilience', 'Detail-Oriented', 'Entrepreneurial'],
            datasets: [{
                label: t('personality_title'),
                data: [
                    traits['Analytical'] || 3,
                    traits['Creative'] || 3,
                    traits['Helping'] || 3,
                    traits['Technical'] || 3,
                    traits['Outdoor'] || 3,
                    traits['Leadership'] || 3,
                    traits['Communication'] || 3,
                    traits['Practical'] || 3,
                    traits['Strategic'] || 3,
                    traits['Resilience'] || 3,
                    traits['Detail-Oriented'] || 3,
                    traits['Entrepreneurial'] || 3
                ],
                backgroundColor: bgColor,
                borderColor: color,
                borderWidth: 3,
                pointBackgroundColor: color,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1500, easing: 'easeOutQuart' },
            plugins: {
                legend: {
                    labels: { color: textColor, font: { size: 12, weight: 'bold' } }
                }
            },
            scales: {
                r: {
                    min: 0, max: 10,
                    ticks: { stepSize: 2, color: textColor, backdropColor: 'transparent' },
                    grid: { color: gridColor },
                    angleLines: { color: gridColor },
                    pointLabels: { color: textColor, font: { size: 10, weight: '600' } }
                }
            }
        }
    });
}

// ================================================================
// SECTION 20b: FALLBACK RADAR (V3 — pure canvas, no Chart.js needed)
// ================================================================
function drawFallbackRadar(canvas) {
    var traits = state.personalityTraits || {};
    var labels = ['Analytical', 'Creative', 'Helping', 'Technical', 'Outdoor', 'Leadership', 'Communication', 'Practical', 'Strategic', 'Resilience', 'Detail-Oriented', 'Entrepreneurial'];
    var data = labels.map(function(k) { return traits[k] || 3; });
    var css = getComputedStyle(document.documentElement);
    var color = css.getPropertyValue('--zm-green').trim() || '#008000';
    var gridColor = css.getPropertyValue('--border-light').trim() || '#e2e8f0';
    var textColor = css.getPropertyValue('--text-secondary').trim() || '#4a5568';

    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : { width: 460, height: 340 };
    var w = Math.max(rect.width, 280), h = Math.max(rect.height, 300);
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var cx = w / 2, cy = h / 2 + 6, radius = Math.min(w, h) / 2 - 46;
    var n = labels.length, max = 10;

    // grid rings + axes
    ctx.strokeStyle = gridColor; ctx.fillStyle = 'transparent'; ctx.lineWidth = 1;
    for (var ring = 1; ring <= 5; ring++) {
        ctx.beginPath();
        for (var i = 0; i <= n; i++) {
            var ang = (Math.PI * 2 * i) / n - Math.PI / 2;
            var r = radius * (ring / 5);
            var x = cx + r * Math.cos(ang), y = cy + r * Math.sin(ang);
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    for (var i = 0; i < n; i++) {
        var ang = (Math.PI * 2 * i) / n - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + radius * Math.cos(ang), cy + radius * Math.sin(ang));
        ctx.stroke();
    }

    // data polygon (animated sweep)
    var t0 = null;
    function frame(ts) {
        if (t0 === null) t0 = ts;
        var progress = Math.min((ts - t0) / 900, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        ctx.clearRect(0, 0, w, h);

        // re-draw grid quickly
        ctx.strokeStyle = gridColor; ctx.lineWidth = 1;
        for (var ring = 1; ring <= 5; ring++) {
            ctx.beginPath();
            for (var k = 0; k <= n; k++) {
                var ang2 = (Math.PI * 2 * k) / n - Math.PI / 2;
                var r2 = radius * (ring / 5);
                var x2 = cx + r2 * Math.cos(ang2), y2 = cy + r2 * Math.sin(ang2);
                if (k === 0) ctx.moveTo(x2, y2); else ctx.lineTo(x2, y2);
            }
            ctx.stroke();
        }

        // polygon
        ctx.beginPath();
        for (var j = 0; j <= n; j++) {
            var idx = j % n;
            var ang3 = (Math.PI * 2 * idx) / n - Math.PI / 2;
            var val = (data[idx] / max) * eased;
            var x3 = cx + radius * val * Math.cos(ang3);
            var y3 = cy + radius * val * Math.sin(ang3);
            if (j === 0) ctx.moveTo(x3, y3); else ctx.lineTo(x3, y3);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 128, 0, 0.15)';
        ctx.fill();
        ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.stroke();

        // points
        for (var p = 0; p < n; p++) {
            var angP = (Math.PI * 2 * p) / n - Math.PI / 2;
            var valP = (data[p] / max) * eased;
            ctx.beginPath();
            ctx.arc(cx + radius * valP * Math.cos(angP), cy + radius * valP * Math.sin(angP), 3.5, 0, Math.PI * 2);
            ctx.fillStyle = color; ctx.fill();
        }

        // labels
        ctx.fillStyle = textColor;
        ctx.font = '600 10px system-ui, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        for (var l = 0; l < n; l++) {
            var angL = (Math.PI * 2 * l) / n - Math.PI / 2;
            var lx = cx + (radius + 22) * Math.cos(angL);
            var ly = cy + (radius + 22) * Math.sin(angL);
            ctx.fillText(labels[l], lx, ly);
        }

        if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

// ================================================================
// SECTION 21: PERSONALITY INSIGHTS (V2 - FIXED)
// ================================================================
function renderPersonalityInsights() {
    var container = DOM.personalityInsights;
    if (!container) return;
    try {
        var traits = state.personalityTraits || {};
        var traitEntries = Object.keys(traits).map(function(key) {
            return { name: key, score: traits[key] };
        });
        traitEntries.sort(function(a, b) { return b.score - a.score; });
        var top3 = traitEntries.slice(0, 3);
        var bottom3 = traitEntries.slice(-3).reverse();
        var personalityMap = {
            'Analytical': 'You are a logical thinker who enjoys breaking down complex problems.',
            'Creative': 'You have a vivid imagination and love expressing ideas in unique ways.',
            'Helping': 'You have a big heart and find fulfilment in supporting others.',
            'Communication': 'You are a natural communicator who can connect with anyone.',
            'Leadership': 'You have leadership qualities and can inspire others to follow.',
            'Technical': 'You enjoy working with technology and understanding how things work.',
            'Outdoor': 'You thrive in nature and prefer being active rather than stuck indoors.',
            'Practical': 'You are pragmatic and prefer hands-on, real-world solutions.',
            'Strategic': 'You think ahead and plan carefully to achieve your goals.',
            'Resilience': 'You bounce back from setbacks and handle pressure well.',
            'Detail-Oriented': 'You notice the small things and take pride in precision.',
            'Entrepreneurial': 'You have a business mindset and think about opportunities.'
        };
        var html = '<h2>🧠 Your Personality Insights</h2>';
        html += '<div class="insights-grid">';
        html += '<div class="insight-card insight-top"><h4>⭐ Your Strongest Traits</h4><ul>';
        for (var i = 0; i < top3.length; i++) {
            var desc = personalityMap[top3[i].name] || 'You scored high in ' + top3[i].name + '.';
            html += '<li><strong>' + top3[i].name + '</strong>: ' + desc + '</li>';
        }
        html += '</ul></div>';
        html += '<div class="insight-card insight-bottom"><h4>💡 Traits to Develop</h4><ul>';
        for (var j = 0; j < bottom3.length; j++) {
            html += '<li><strong>' + bottom3[j].name + '</strong> (score: ' + bottom3[j].score + ')</li>';
        }
        html += '</ul></div></div>';
        container.innerHTML = html;
        container.style.display = 'block';
    } catch(e) {
        console.warn('Personality Insights error:', e);
        container.style.display = 'none';
    }
}

// ================================================================
// SECTION 22: TRAIT RADAR BARS (V2 - FIXED)
// ================================================================
function renderTraitRadarBars() {
    var container = DOM.traitRadarSection;
    if (!container) return;
    try {
        var traits = state.personalityTraits || {};
        var traitEntries = Object.keys(traits).map(function(key) {
            return { name: key, score: traits[key] };
        });
        traitEntries.sort(function(a, b) { return b.score - a.score; });
        var top10 = traitEntries.slice(0, 10);
        var maxScore = top10.length > 0 ? top10[0].score : 1;
        var html = '<h3>📊 Your Trait Profile</h3><div class="trait-radar-container">';
        for (var i = 0; i < top10.length; i++) {
            var t = top10[i];
            var pct = Math.round((t.score / maxScore) * 100);
            html += '<div class="trait-bar-item">' +
                '<span class="trait-bar-label">' + t.name + '</span>' +
                '<div class="trait-bar"><div class="trait-bar-fill" style="width:' + pct + '%"></div></div>' +
                '<span class="trait-bar-value">' + t.score + '</span>' +
                '</div>';
        }
        html += '</div>';
        container.innerHTML = html;
        container.style.display = 'block';
    } catch(e) {
        console.warn('Trait Radar Bars error:', e);
        container.style.display = 'none';
    }
}

// ================================================================
// SECTION 23: SMART DISCOVERY (V2 - FIXED)
// ================================================================
function runSmartDiscovery() {
    var panel = document.getElementById('smart-discovery-panel');
    if (!panel) return;
    panel.style.display = 'block';
    panel.innerHTML = '<div class="ai-loading"><div class="spinner"></div><p>Analyzing your results...</p></div>';
    setTimeout(function() {
        try {
            var suggestions = smartDiscoveryEngine();
            var html = '<h3>💡 Smart Discovery Results</h3><p class="ai-note">Based on your trait analysis and cluster exploration</p>';
            html += '<div class="discovery-results">';
            for (var i = 0; i < suggestions.length; i++) {
                var s = suggestions[i];
                var data = careers[s.name];
                if (!data) continue;
                html += '<div class="discovery-card">' +
                    '<div class="discovery-card-header">' +
                    '<span class="discovery-icon">' + data.icon + '</span>' +
                    '<h4>' + s.name + '</h4>' +
                    '<span class="discovery-cluster" style="background:' + getClusterBg(data.cluster) + ';color:' + getClusterColor(data.cluster) + '">' + data.cluster + '</span>' +
                    '</div>' +
                    '<p class="discovery-reason">💡 <strong>Why suggested:</strong> ' + s.reason + '</p>' +
                    '<p class="discovery-desc">' + data.description.substring(0, 150) + '...</p>' +
                    '<button class="btn-details-sm" data-career="' + s.name + '">View Details</button>' +
                    '</div>';
            }
            html += '</div>';
            panel.innerHTML = html;
            var btns = panel.querySelectorAll('.btn-details-sm');
            for (var j = 0; j < btns.length; j++) {
                btns[j].addEventListener('click', function() { showCareerDetails(this.getAttribute('data-career')); });
            }
        } catch(e) {
            panel.innerHTML = '<div class="ai-error"><p>Could not generate suggestions.</p><p><small>' + e.message + '</small></p></div>';
        }
    }, 800);
}
function smartDiscoveryEngine() {
    var suggestions = [];
    var seen = {};
    var topTraits = Object.keys(state.personalityTraits || {}).sort(function(a, b) {
        return (state.personalityTraits[b] || 0) - (state.personalityTraits[a] || 0);
    }).slice(0, 10);
    var resultsList = state.results || [];
    for (var i = 10; i < Math.min(25, resultsList.length); i++) {
        var c = resultsList[i];
        if (!seen[c]) {
            seen[c] = true;
            suggestions.push({ name: c, reason: 'This career almost made your top 10! It ranked #' + (i+1) + ' and may be worth exploring.' });
        }
    }
    for (var careerName in careers) {
        if (careers.hasOwnProperty(careerName) && !seen[careerName]) {
            var careerData = careers[careerName];
            var traitList = careerTraits[careerName] || [];
            var traitMatch = 0;
            var matchedTraitNames = [];
            for (var t = 0; t < traitList.length; t++) {
                var displayKey = traitList[t].charAt(0).toUpperCase() + traitList[t].slice(1);
                if (displayKey === 'Detailoriented') displayKey = 'Detail-Oriented';
                if ((state.personalityTraits[displayKey] || 0) >= 3) {
                    traitMatch++;
                    matchedTraitNames.push(displayKey);
                }
            }
            if (traitMatch >= 3 && !seen[careerName]) {
                seen[careerName] = true;
                suggestions.push({ name: careerName, reason: 'Strong trait match! You scored high in: ' + matchedTraitNames.slice(0, 3).join(', ') + '. A hidden gem!' });
            }
        }
    }
    suggestions.sort(function(a, b) {
        var sa = 0, sb = 0;
        for (var si = 0; si < resultsList.length; si++) {
            if (resultsList[si] === a.name) sa = state.careerScores ? (state.careerScores[a.name] || 0) : 0;
            if (resultsList[si] === b.name) sb = state.careerScores ? (state.careerScores[b.name] || 0) : 0;
        }
        return sb - sa;
    });
    return suggestions.slice(0, 12);
}

// ================================================================
// SECTION 24: AI DISCOVERY (V2 - FIXED + QUESTION CONTEXT IMPROVEMENT)
// ================================================================
function showAIPanel() {
    var panel = document.getElementById('ai-discovery-panel');
    if (!panel) return;
    if (panel.style.display === 'block') { panel.style.display = 'none'; return; }
    panel.style.display = 'block';
    var topTraits = Object.keys(state.personalityTraits || {}).sort(function(a, b) {
        return (state.personalityTraits[b] || 0) - (state.personalityTraits[a] || 0);
    }).slice(0, 8);
    var top10 = (state.results || []).slice(0, 10);

    // --- IMPROVEMENT: Build answers text WITH full question context ---
    var answersText = '';
    for (var q = 0; q < state.answers.length; q++) {
        var answer = state.answers[q];
        if (answer && answer.length) {
            var questionText = questions[q] ? questions[q].text : 'Question ' + (q + 1);
            answersText += 'Q' + (q + 1) + ': ' + questionText + '\n';
            answersText += '   Answer: ' + answer.join(', ') + '\n\n';
        }
    }

    var aiPrompt = 'I am a Zambian secondary school student doing a career guidance quiz. Here are my answers and results:\n\n' +
        'MY QUIZ ANSWERS (with full question context):\n' + answersText +
        '\nMY TOP TRAITS: ' + topTraits.join(', ') + '\n\n' +
        'MY TOP 10 CAREER MATCHES: ' + top10.join(', ') + '\n\n' +
        'ALL ' + Object.keys(careers).length + ' AVAILABLE CAREERS: ' + Object.keys(careers).join(', ') + '\n\n' +
        'Please suggest 5 MORE career paths NOT in my top 10 that would suit me based on my answers. ' +
        'For each suggestion, explain WHY it fits me (referencing specific answers if possible) and what subjects I should focus on. ' +
        'Keep in mind I am a Zambian student - mention relevant Zambian institutions and opportunities where possible.';

    panel.innerHTML =
        '<div class="ai-config">' +
        '<h3>🤖 AI-Powered Career Discovery</h3>' +
        '<p class="ai-note">Get personalised career suggestions from any AI chatbot. Your personalised prompt includes your answers WITH the full question context for better AI understanding. Just copy and paste!</p>' +
        '<div class="ai-prompt-box">' +
        '<label>Your personalised AI prompt is ready:</label>' +
        '<textarea id="ai-prompt-textarea" readonly rows="12">' + aiPrompt + '</textarea>' +
        '<div class="ai-copy-buttons">' +
        '<button class="btn-primary" id="copy-prompt-btn">📋 Copy Prompt</button>' +
        '<a href="https://chatgpt.com" target="_blank" class="btn-secondary">💬 Open ChatGPT</a>' +
        '<a href="https://claude.ai/new" target="_blank" class="btn-secondary">💬 Open Claude</a>' +
        '<a href="https://gemini.google.com/app" target="_blank" class="btn-secondary">💬 Open Gemini</a>' +
        '</div></div>' +
        '<div class="ai-advanced-toggle"><button id="toggle-advanced" class="btn-link">⚙️ Advanced: Use your own API key</button></div>' +
        '<div id="ai-advanced-panel" style="display:none" class="ai-advanced">' +
        '<label for="ai-api-url">API Endpoint URL</label>' +
        '<input type="url" id="ai-api-url" placeholder="https://api.openai.com/v1/chat/completions" />' +
        '<label for="ai-api-key">API Key</label>' +
        '<input type="password" id="ai-api-key" placeholder="sk-..." />' +
        '<button class="btn-primary" id="ai-go-btn">🚀 Get AI Suggestions</button>' +
        '<div id="ai-results-area"></div>' +
        '</div></div>';

    document.getElementById('copy-prompt-btn').addEventListener('click', function() {
        var ta = document.getElementById('ai-prompt-textarea');
        ta.select();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(ta.value).then(function() { showToast('Prompt copied! Now paste it in ChatGPT, Claude, or Gemini.', 'success'); });
        } else {
            document.execCommand('copy');
            showToast('Prompt copied!', 'success');
        }
    });

    document.getElementById('toggle-advanced').addEventListener('click', function() {
        var adv = document.getElementById('ai-advanced-panel');
        adv.style.display = adv.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('ai-go-btn').addEventListener('click', function() {
        var url = document.getElementById('ai-api-url').value.trim();
        var key = document.getElementById('ai-api-key').value.trim();
        var area = document.getElementById('ai-results-area');
        if (!url || !key) { showToast('Please enter both API URL and API Key', 'warning'); return; }
        if (!area) return;
        area.innerHTML = '<div class="ai-loading"><div class="spinner"></div><p>Asking AI for career suggestions...</p></div>';

        // Use the same prompt with question context for the API call
        var prompt = 'You are a career guidance expert for Zambian students. Based on the following quiz answers (with full question context), suggest 5 additional career paths NOT in the already-shown list.\n\n' +
            'Student top traits: ' + topTraits.join(', ') + '\n' +
            'Already suggested: ' + top10.join(', ') + '\n' +
            'Quiz answers (with question context):\n' + answersText +
            '\nAll available careers: ' + Object.keys(careers).join(', ') + '\n\n' +
            'Respond ONLY with a valid JSON array of objects with keys: name, description, whyMatch, cluster. No markdown.';

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
            body: JSON.stringify({ model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: prompt }], temperature: 0.7, max_tokens: 1000 })
        }).then(function(resp) { return resp.json(); })
        .then(function(data) {
            try {
                var content = '';
                if (data.choices && data.choices[0] && data.choices[0].message) content = data.choices[0].message.content;
                var cleaned = content.replace(/```json?/g, '').replace(/```/g, '').trim();
                var aiSuggestions = JSON.parse(cleaned);
                var html = '<h3>🚀 AI Career Suggestions</h3><div class="discovery-results">';
                for (var i = 0; i < aiSuggestions.length; i++) {
                    var s = aiSuggestions[i];
                    var cd = careers[s.name];
                    var desc = cd ? cd.description : (s.description || '');
                    var cluster = cd ? cd.cluster : (s.cluster || 'Unknown');
                    var icon = cd ? cd.icon : '💼';
                    html += '<div class="discovery-card"><div class="discovery-card-header">' +
                        '<span class="discovery-icon">' + icon + '</span><h4>' + s.name + '</h4>' +
                        '<span class="discovery-cluster" style="background:' + getClusterBg(cluster) + ';color:' + getClusterColor(cluster) + '">' + cluster + '</span></div>' +
                        '<p class="discovery-reason">🤖 <strong>AI says:</strong> ' + (s.whyMatch || '') + '</p>' +
                        '<p class="discovery-desc">' + desc + '</p>' +
                        '<button class="btn-details-sm" data-career="' + s.name + '">View Details</button></div>';
                }
                html += '</div>';
                area.innerHTML = html;
                var btns = area.querySelectorAll('.btn-details-sm');
                for (var j = 0; j < btns.length; j++) {
                    btns[j].addEventListener('click', function() { showCareerDetails(this.getAttribute('data-career')); });
                }
            } catch(e) {
                area.innerHTML = '<div class="ai-error"><p>Could not parse AI response.</p><p><small>' + e.message + '</small></p></div>';
            }
        }).catch(function(err) {
            area.innerHTML = '<div class="ai-error"><p>API request failed. Check URL and key.</p><p><small>' + err.message + '</small></p></div>';
        });
    });
}

// ================================================================
// SECTION 25: CAREER EXPLORER (V2 - FIXED)
// ================================================================
function showCareerExplorer() {
    var panel = document.getElementById('career-explorer-panel');
    if (!panel) return;
    if (panel.style.display === 'block') { panel.style.display = 'none'; return; }
    panel.style.display = 'block';
    var clusterNames = ['STEM', 'Healthcare', 'Business', 'Creative', 'Helping', 'Outdoor', 'Public Service', 'Skilled Trades'];
    var clusterIcons = { 'STEM': '🔬', 'Healthcare': '🏥', 'Business': '💼', 'Creative': '🎨', 'Helping': '🤝', 'Outdoor': '🌿', 'Public Service': '🏛️', 'Skilled Trades': '🔧' };
    var html = '<h3>🎯 Explore All ' + Object.keys(careers).length + ' Careers</h3>';
    html += '<div class="explorer-tabs" role="tablist">';
    html += '<button class="explorer-tab active" data-cluster="All" role="tab">All Careers</button>';
    for (var i = 0; i < clusterNames.length; i++) {
        var c = clusterNames[i];
        html += '<button class="explorer-tab" data-cluster="' + c + '" role="tab">' + (clusterIcons[c] || '📌') + ' ' + c + '</button>';
    }
    html += '</div>';
    html += '<input type="search" class="explorer-search" id="explorer-search-input" placeholder="Search all careers..." />';
    html += '<div id="explorer-results" class="explorer-results"></div>';
    panel.innerHTML = html;
    var tabs = panel.querySelectorAll('.explorer-tab');
    for (var j = 0; j < tabs.length; j++) {
        tabs[j].addEventListener('click', function() {
            for (var k = 0; k < tabs.length; k++) tabs[k].classList.remove('active');
            this.classList.add('active');
            filterExplorer(this.getAttribute('data-cluster'));
        });
    }
    document.getElementById('explorer-search-input').addEventListener('input', function() {
        var activeTab = panel.querySelector('.explorer-tab.active');
        filterExplorer(activeTab ? activeTab.getAttribute('data-cluster') : 'All');
    });
    filterExplorer('All');
}
function filterExplorer(clusterFilter) {
    var container = document.getElementById('explorer-results');
    if (!container) return;
    var searchVal = document.getElementById('explorer-search-input');
    var search = searchVal ? searchVal.value.toLowerCase() : '';
    var html = '<div class="explorer-grid">';
    var count = 0;
    for (var name in careers) {
        if (!careers.hasOwnProperty(name)) continue;
        var d = careers[name];
        if (clusterFilter !== 'All' && d.cluster !== clusterFilter) continue;
        if (search && name.toLowerCase().indexOf(search) === -1 && d.description.toLowerCase().indexOf(search) === -1) continue;
        html += '<div class="explorer-card" onclick="showCareerDetails(\'' + name + '\')">' +
            '<span class="explorer-icon">' + d.icon + '</span>' +
            '<div class="explorer-info"><h4>' + name + '</h4>' +
            '<span class="explorer-cluster" style="background:' + getClusterBg(d.cluster) + ';color:' + getClusterColor(d.cluster) + '">' + d.cluster + '</span>' +
            '<p class="explorer-preview">' + d.description.substring(0, 100) + '...</p></div>' +
            '<span class="explorer-outlook">' + d.outlook + '</span></div>';
        count++;
    }
    html += '</div>';
    if (count === 0) html += '<p class="no-results">No careers found. Try a different search.</p>';
    else html = '<p class="explorer-count">Showing ' + count + ' careers</p>' + html;
    container.innerHTML = html;
}

// ================================================================
// SECTION 26: MILESTONE CELEBRATIONS (V2)
// ================================================================
function fireMilestoneConfetti() {
    var canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var confetti = [];
    var colors = ['#008000','#dc2626','#0284c7','#ea580c','#9333ea','#eab308','#e11d48','#6366f1'];
    for (var i = 0; i < 80; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10 - Math.random() * 100,
            w: Math.random() * 8 + 4,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 4 + 2,
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.2
        });
    }
    var frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var alive = false;
        for (var i = 0; i < confetti.length; i++) {
            var c = confetti[i];
            if (c.y < canvas.height + 50) alive = true;
            c.y += c.speed;
            c.x += Math.sin(c.angle) * 1.5;
            c.angle += c.spin;
            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate(c.angle);
            ctx.fillStyle = c.color;
            ctx.fillRect(-c.w/2, -c.h/2, c.w, c.h);
            ctx.restore();
        }
        frame++;
        if (alive && frame < 120) {
            requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    draw();
}
function checkMilestone(questionNum) {
    if (questionNum === 5) { fireMilestoneConfetti(); showToast('🎉 Halfway there! You\'re doing great!', 'success'); }
    else if (questionNum === 10) { fireMilestoneConfetti(); showToast('🌟 Almost done! Just 5 more questions!', 'success'); }
}

// ================================================================
// SECTION 27: FLOATING PARTICLES (V2)
// ================================================================
function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    var count = Math.min(50, Math.floor(window.innerWidth / 25));
    for (var i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    function animate() {
        if (!document.getElementById('welcome-screen').classList.contains('active')) {
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
            requestAnimationFrame(animate);
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var isDarkNow = document.body.classList.contains('dark-mode');
        var color = isDarkNow ? '100,200,100' : '0,128,0';
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + color + ',' + p.opacity + ')';
            ctx.fill();
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ================================================================
// SECTION 28: TYPING EFFECT (V3.1 — rotating taglines)
// ================================================================
var typingTimeout = null;
// English gets a rotating set of taglines; other languages keep their
// translated subtitle. Respects prefers-reduced-motion (static text).
function getTaglines() {
    if (state.language === 'en') {
        return [
            'Discover Your Path to a Bright Future',
            '144 careers. One perfect match for you.',
            'Answer 30 questions. Get your roadmap.',
            'Built in Zambia, for Zambia.',
            'Your future starts with one tap.'
        ];
    }
    return [t('welcome_subtitle')];
}
function startTypingEffect() {
    var subtitle = document.getElementById('typing-subtitle');
    if (!subtitle) return;
    stopTypingEffect();
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var taglines = getTaglines();
    var tagIndex = 0;
    subtitle.classList.add('typing-active');

    if (reduced || taglines.length === 1) {
        subtitle.textContent = taglines[0];
        if (reduced) subtitle.classList.remove('typing-active');
        return;
    }

    var charIndex = 0;
    var deleting = false;
    function tick() {
        var full = taglines[tagIndex];
        if (!deleting) {
            charIndex++;
            subtitle.textContent = full.slice(0, charIndex);
            if (charIndex >= full.length) {
                deleting = true;
                typingTimeout = setTimeout(tick, 1900); // hold so it can be read
                return;
            }
            typingTimeout = setTimeout(tick, 42);
        } else {
            charIndex--;
            subtitle.textContent = full.slice(0, charIndex);
            if (charIndex <= 0) {
                deleting = false;
                tagIndex = (tagIndex + 1) % taglines.length;
                typingTimeout = setTimeout(tick, 350);
                return;
            }
            typingTimeout = setTimeout(tick, 20); // delete faster than typing
        }
    }
    tick();
}
function stopTypingEffect() {
    if (typingTimeout) { clearTimeout(typingTimeout); typingTimeout = null; }
    var subtitle = document.getElementById('typing-subtitle');
    if (subtitle) {
        subtitle.textContent = t('welcome_subtitle');
        subtitle.classList.remove('typing-active');
    }
}

// ================================================================
// SECTION 29: RESULTS DISPLAY (MERGED & FIXED)
// ================================================================
function displayResults() {
    DOM.careerSearch.style.display = 'flex';
    if (DOM.resultsToolbar) { DOM.resultsToolbar.style.display = 'flex'; }
    if (state.isDiscoveryMode) { generateDiscoveryResults(); return; }
    var topCareers = state.results.slice(0, 15);
    DOM.resultsSubtitle.textContent = t('results_subtitle');
    renderStatsSummary(topCareers);
    renderFilterChips();
    renderCareerCards(topCareers);
    renderRadarChart();
    displayPathwayRecommendations();
    displaySubjectRecommendations();
    displayCareerClusters();
    displayComparisonTool();
    // V2 Features (with error catching)
    try { renderPersonalityInsights(); } catch(e) { console.warn('Personality Insights error:', e); }
    try { renderTraitRadarBars(); } catch(e) { console.warn('Trait Radar Bars error:', e); }
    var totalCareersSpan = document.getElementById('ai-total-careers');
    if (totalCareersSpan) { totalCareersSpan.textContent = state.results ? state.results.length : 0; }
    var loadMoreContainer = document.getElementById('career-matches');
    if (loadMoreContainer && state.results && state.results.length > 15) {
        var loadMoreBtn = document.createElement('button');
        loadMoreBtn.className = 'btn-secondary load-more-btn';
        loadMoreBtn.textContent = 'Show More Careers (' + (state.results.length - 15) + ' remaining)';
        loadMoreBtn.addEventListener('click', function() {
            var currentCount = document.querySelectorAll('#career-matches .career-card').length;
            var newCount = Math.min(currentCount + 10, state.results.length);
            renderCareerCards(state.results.slice(0, newCount));
            loadMoreBtn.textContent = 'Show More Careers (' + (state.results.length - newCount) + ' remaining)';
            if (newCount >= state.results.length) { loadMoreBtn.style.display = 'none'; }
        });
        loadMoreContainer.appendChild(loadMoreBtn);
    }
    showShareButtons();
    DOM.discoveryMode.style.display = 'none';
    launchConfetti();
    clearSavedState();
}

// ================================================================
// SECTION 30: DISCOVERY MODE (V2 - FIXED)
// ================================================================
function generateDiscoveryResults() {
    DOM.careerSearch.style.display = 'none';
    if (DOM.resultsToolbar) { DOM.resultsToolbar.style.display = 'none'; }
    DOM.discoveryMode.style.display = 'block';
    DOM.resultsSubtitle.textContent = t('discovery_title');
    DOM.careerMatches.innerHTML = '';
    DOM.statsSummary.innerHTML = '';
    state.discoveryCompare = [];
    updateDiscoveryCompareCount();

    // --- IMPROVEMENT: Welcome message in discovery mode ---
    var welcomeMsg = document.createElement('p');
    welcomeMsg.style.fontSize = '18px';
    welcomeMsg.style.textAlign = 'center';
    welcomeMsg.style.marginBottom = '16px';
    welcomeMsg.style.color = 'var(--zm-green)';
    welcomeMsg.style.fontWeight = 'bold';
    welcomeMsg.textContent = '🌟 Click any cluster below to explore careers. Don\'t worry – you can take the quiz anytime!';

    var clusterInfo = {
        'STEM': { icon: '🔬', name: 'STEM', description: 'Science, Technology, Engineering & Math', activity: 'Try building a small project using recycled materials.' },
        'Healthcare': { icon: '🏥', name: 'Healthcare', description: 'Medical and health-related careers', activity: 'Visit a clinic and ask if you can observe a nurse or doctor for a day.' },
        'Business': { icon: '💼', name: 'Business', description: 'Finance, management, and entrepreneurship', activity: 'Start a small "business" selling snacks or crafts for one week.' },
        'Creative': { icon: '🎨', name: 'Creative', description: 'Arts, media, and design', activity: 'Write a short story or draw a picture about your dream career.' },
        'Helping': { icon: '🤝', name: 'Helping', description: 'Teaching, social work, and community', activity: 'Help a younger student with their homework or tutor a classmate.' },
        'Outdoor': { icon: '🌿', name: 'Outdoor', description: 'Agriculture, conservation, and tourism', activity: 'Spend a day outdoors and observe what you enjoy most.' },
        'Public Service': { icon: '🏛️', name: 'Public Service', description: 'Government, military, and emergency services', activity: 'Visit a government office or talk to a public servant.' },
        'Skilled Trades': { icon: '🔧', name: 'Skilled Trades', description: 'Hands-on technical and craft careers', activity: 'Try building or fixing something with your hands.' }
    };
    var html = '<div style="grid-column:1/-1;text-align:center;margin-bottom:12px;color:var(--text-muted);font-size:14px;">' + t('discovery_instruction') + '</div>';
    for (var cluster in clusterInfo) {
        var info = clusterInfo[cluster];
        var clusterCareers = Object.keys(careers).filter(function(n) { return careers[n] && careers[n].cluster === cluster; });
        html += '<div class="discovery-card" data-discovery-cluster="' + cluster + '">' +
            '<span class="cluster-icon" aria-hidden="true">' + info.icon + '</span>' +
            '<h4>' + info.name + '</h4>' +
            '<p>' + info.description + '</p>' +
            '<div style="font-size:13px;color:var(--text-muted);margin:5px 0;">' +
                clusterCareers.slice(0, 4).join(', ') + (clusterCareers.length > 4 ? ' +' + (clusterCareers.length - 4) + ' more' : '') +
            '</div>' +
            '<div class="try-activity">🔍 Try: ' + info.activity + '</div>' +
        '</div>';
    }
    html += '<div class="discovery-next-steps"><h3>💡 ' + t('next_steps_title') + '</h3><ol>' +
        '<li>' + t('next_step_1') + '</li>' +
        '<li>' + t('next_step_2') + '</li>' +
        '<li>' + t('next_step_3') + '</li>' +
        '<li>' + t('next_step_4') + '</li>' +
        '</ol>' +
        '<p class="italic-note">🎯 ' + t('remember_note') + '</p>' +
        '<button onclick="startQuiz(false)" class="btn-primary" style="margin-top:10px;">🔄 ' + t('retake_quiz_button') + '</button>' +
        '</div>';
    DOM.discoveryContent.innerHTML = html;
    // Prepend the welcome message
    DOM.discoveryContent.prepend(welcomeMsg);

    updateDiscoveryComparison();
    try { displaySubjectRecommendations(); } catch(e) {}
    try { displayCareerClusters(); } catch(e) {}
    DOM.clearDiscoveryCompareBtn.textContent = t('clear_all');
    DOM.clearDiscoveryCompareBtn.onclick = function() {
        state.discoveryCompare = [];
        updateDiscoveryCompareCount();
        updateDiscoveryComparison();
        showToast(t('clear_all') + '!');
    };
}

// ================================================================
// SECTION 31: STATS SUMMARY
// ================================================================
function renderStatsSummary(topCareers) {
    var clusters = {};
    var globalCount = 0;
    var totalScore = 0;
    topCareers.forEach(function(n) {
        if (careers[n]) {
            clusters[careers[n].cluster] = true;
            if (careers[n].globalReady) globalCount++;
            totalScore += state.careerScores[n];
        }
    });
    var avgScore = Math.round(totalScore / Math.min(topCareers.length, 10));
    var clusterCount = Object.keys(clusters).length;
    DOM.statsSummary.innerHTML =
        '<div class="stat-card"><span class="stat-value">' + Math.min(topCareers.length, 10) + '</span><span class="stat-label">' + t('top_matches') + '</span></div>' +
        '<div class="stat-card"><span class="stat-value">' + clusterCount + '</span><span class="stat-label">' + t('clusters') + '</span></div>' +
        '<div class="stat-card"><span class="stat-value">' + avgScore + '%</span><span class="stat-label">' + t('avg_match') + '</span></div>' +
        '<div class="stat-card"><span class="stat-value">' + globalCount + '</span><span class="stat-label">' + t('global_ready') + '</span></div>';
}

// ================================================================
// SECTION 32: FILTER CHIPS
// ================================================================
function renderFilterChips() {
    var clusters = ['all', 'STEM', 'Healthcare', 'Business', 'Creative', 'Helping', 'Outdoor', 'Public Service', 'Skilled Trades'];
    var icons = { all: '🎯', STEM: '🔬', Healthcare: '🏥', Business: '💼', Creative: '🎨', Helping: '🤝', Outdoor: '🌿', 'Public Service': '🏛️', 'Skilled Trades': '🔧' };
    DOM.filterChips.innerHTML = clusters.map(function(c) {
        return '<button class="filter-chip' + (state.activeFilter === c ? ' active' : '') + '" data-filter="' + c + '">' + (icons[c] || '📌') + ' ' + c;
    }).join('');
}

// ================================================================
// SECTION 33: CAREER CARDS
// ================================================================
function renderCareerCards(careerList) {
    var query = state.searchQuery.toLowerCase();
    var filter = state.activeFilter;
    var filtered = careerList.filter(function(name) {
        var career = careers[name];
        if (!career) return false;
        if (filter !== 'all' && career.cluster !== filter) return false;
        if (query && name.toLowerCase().indexOf(query) === -1 &&
            career.description.toLowerCase().indexOf(query) === -1 &&
            career.cluster.toLowerCase().indexOf(query) === -1) return false;
        return true;
    });
    if (filtered.length === 0) {
        DOM.careerMatches.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><p>' + t('no_results') + '<br>' + t('try_different_keywords') + '</p></div>';
        return;
    }
    var fragment = document.createDocumentFragment();
    filtered.forEach(function(careerName, index) {
        var career = careers[careerName];
        var score = state.careerScores[careerName];
        var scoreClass = score >= 70 ? 'high' : score >= 45 ? 'medium' : 'low';
        var card = document.createElement('div');
        card.className = 'career-card';
        card.setAttribute('role', 'listitem');
        card.dataset.career = careerName;
        card.innerHTML =
            '<div class="career-card-left">' +
                '<span class="career-icon" aria-hidden="true">' + (career.icon || '🎯') + '</span>' +
                '<div class="career-card-info">' +
                    '<span class="career-name">' + careerName + '</span>' +
                    '<span class="career-cluster" data-cluster="' + career.cluster + '">' + career.cluster + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="career-card-right">' +
                '<span class="career-score">' + score + '%</span>' +
                '<div class="score-bar"><div class="score-fill ' + scoreClass + '" style="--print-score-width:' + score + '%"></div></div>' +
                '<button class="view-details-btn" data-career="' + careerName + '" aria-label="View details for ' + careerName + '">' + t('read_more') + '</button>' +
            '</div>';
        fragment.appendChild(card);
        setTimeout(function() {
            card.classList.add('revealed');
            var fill = card.querySelector('.score-fill');
            if (fill) fill.style.width = score + '%';
        }, 80 * index);
    });
    DOM.careerMatches.innerHTML = '';
    DOM.careerMatches.appendChild(fragment);
}
function handleCareerSearch(e) {
    state.searchQuery = e.target.value;
    state.activeFilter = 'all';   // reset filter when searching
    renderFilterChips();          // update chip highlights
    renderCareerCards(state.results.slice(0, 15));
}
function handleFilterClick(e) {
    var chip = e.target.closest('.filter-chip');
    if (!chip) return;
    state.activeFilter = chip.dataset.filter;
    renderFilterChips();
    renderCareerCards(state.results.slice(0, 15));
}

// ================================================================
// SECTION 34: PATHWAY RECOMMENDATIONS
// ================================================================
function displayPathwayRecommendations() {
    var topCareers = state.results.slice(0, 5);
    var pathwayMap = {};
    topCareers.forEach(function(name) {
        var c = careers[name];
        if (c && c.pathway) {
            c.pathway.forEach(function(p) { pathwayMap[p] = (pathwayMap[p] || 0) + 1; });
        }
    });
    var sortedPathways = Object.keys(pathwayMap).sort(function(a, b) { return pathwayMap[b] - pathwayMap[a]; });
    if (sortedPathways.length === 0) {
        DOM.pathwayDisplay.innerHTML = '<p>No pathway information available for your top careers.</p>';
        return;
    }
    var pathwayDescriptions = {
        'Natural Science': 'Focus on Mathematics, English, Chemistry, Biology, Physics, and Additional Mathematics.',
        'Social Science': 'Focus on English, History, Geography, Civics, and Literature.',
        'Business Studies': 'Focus on Mathematics, English, Commerce, Principles of Accounts, and Economics.',
        'STEM': 'Focus on Mathematics, Physics, Chemistry, Biology, and ICT/Computer Studies.',
        'Creative Arts': 'Focus on Art, Music, Drama, Design, and English.',
        'Vocational Agriculture': 'Focus on Agriculture, Science, Biology, and Geography.',
        'Vocational Technology': 'Focus on Design & Technology, Mathematics, Physics, and ICT.',
        'Vocational PCA': 'Focus on Performing & Creative Arts, Music, Drama, and Art.',
        'Vocational HEH': 'Focus on Home Economics, Hospitality, and English.',
        'Vocational PES': 'Focus on Physical Education, Sports Science, and English.'
    };
    var pathwayDisplayNames = {
        'Natural Science': '🔬 Natural Science Pathway',
        'Social Science': '📖 Social Science Pathway',
        'Business Studies': '💼 Business Studies Pathway',
        'STEM': '🧪 STEM Pathway',
        'Creative Arts': '🎨 Creative & Performing Arts Pathway',
        'Vocational Agriculture': '🌾 Vocational Agriculture Pathway',
        'Vocational Technology': '🔧 Vocational Technology Pathway',
        'Vocational PCA': '🎭 Vocational Performing & Creative Arts Pathway',
        'Vocational HEH': '🏠 Vocational Home Economics & Hospitality Pathway',
        'Vocational PES': '🏃 Vocational Physical Education & Sports Pathway'
    };
    var html = '';
    sortedPathways.forEach(function(p) {
        var displayName = pathwayDisplayNames[p] || p;
        var description = pathwayDescriptions[p] || 'Focus on subjects related to this career path.';
        html += '<div class="pathway-card">' +
            '<h3>' + displayName + '</h3>' +
            '<p class="pathway-subjects">' + description + '</p>' +
            '</div>';
    });
    html += '<p style="font-size:13px;color:var(--text-muted);margin-top:8px;">💡 ' + t('pathway_desc') + '</p>';
    DOM.pathwayDisplay.innerHTML = html;
}

// ================================================================
// SECTION 35: SUBJECT RECOMMENDATIONS
// ================================================================
function displaySubjectRecommendations() {
    var topCareers = state.results.slice(0, 5);
    var required = {};
    var recommended = {};
    topCareers.forEach(function(name) {
        var c = careers[name];
        if (!c) return;
        if (c.requiredSubjects) {
            c.requiredSubjects.forEach(function(s) { required[s] = (required[s] || 0) + 1; });
        }
        if (c.requiredSkills) {
            c.requiredSkills.forEach(function(s) { required['Skill: ' + s] = (required['Skill: ' + s] || 0) + 1; });
        }
        if (c.recommendedSubjects) {
            c.recommendedSubjects.forEach(function(s) { recommended[s] = (recommended[s] || 0) + 1; });
        }
    });
    var sortedReq = Object.keys(required).sort(function(a, b) { return required[b] - required[a]; });
    var sortedRec = Object.keys(recommended).sort(function(a, b) { return recommended[b] - recommended[a]; });
    var html = '';
    if (sortedReq.length) {
        html += '<div class="subject-section-label">⭐ ' + t('must_have') + '</div><div class="subject-tags-row">';
        sortedReq.forEach(function(s) {
            var isSkill = s.indexOf('Skill: ') === 0;
            var displayName = isSkill ? s.replace('Skill: ', '') : s;
            html += '<span class="subject-tag required">' + displayName + (isSkill ? ' 🛠️' : '') + '</span>';
        });
        html += '</div>';
    }
    if (sortedRec.length) {
        html += '<div class="subject-section-label">👍 ' + t('recommended') + '</div><div class="subject-tags-row">';
        sortedRec.forEach(function(s) { html += '<span class="subject-tag">' + s + '</span>'; });
        html += '</div>';
    }
    if (!html) html = '<p>No subject recommendations available.</p>';
    DOM.subjectList.innerHTML = html;
}

// ================================================================
// SECTION 36: CAREER CLUSTERS (Web Map)
// ================================================================
function displayCareerClusters() {
    var clusterInfo = {
        'STEM': { icon: '🔬', name: 'STEM' },
        'Healthcare': { icon: '🏥', name: 'Healthcare' },
        'Business': { icon: '💼', name: 'Business' },
        'Creative': { icon: '🎨', name: 'Creative' },
        'Helping': { icon: '🤝', name: 'Helping' },
        'Outdoor': { icon: '🌿', name: 'Outdoor' },
        'Public Service': { icon: '🏛️', name: 'Public Service' },
        'Skilled Trades': { icon: '🔧', name: 'Skilled Trades' }
    };
    var clusterScores = {};
    for (var cluster in clusterInfo) {
        var clusterCareers = Object.keys(careers).filter(function(n) { return careers[n] && careers[n].cluster === cluster; });
        if (clusterCareers.length > 0) {
            var total = 0;
            clusterCareers.forEach(function(n) { total += (state.careerScores[n] || 0); });
            clusterScores[cluster] = Math.round(total / clusterCareers.length);
        } else {
            clusterScores[cluster] = 0;
        }
    }
    var html = '';
    for (var cl in clusterInfo) {
        var info = clusterInfo[cl];
        var score = clusterScores[cl] || 0;
        var careersInCluster = Object.keys(careers).filter(function(n) { return careers[n] && careers[n].cluster === cl; });
        html += '<div class="cluster-card" data-cluster="' + cl + '">' +
            '<span class="cluster-icon" aria-hidden="true">' + info.icon + '</span>' +
            '<div class="cluster-name">' + info.name + '</div>' +
            '<div class="cluster-score">' + score + '% match</div>' +
            '<div class="score-bar"><div class="score-fill high" style="width:' + score + '%"></div></div>' +
            '<div class="cluster-careers" id="cluster-' + cl + '">' +
            careersInCluster.map(function(n) {
                return '<a class="cluster-career-item" data-career="' + n + '" style="cursor:pointer;">• ' + n + '</a>';
            }).join('') +
            '</div></div>';
    }
    DOM.careerClusters.innerHTML = html;
    var clusterCards = DOM.careerClusters.querySelectorAll('.cluster-card');
    clusterCards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.cluster-career-item')) { return; }
            var careersList = document.getElementById('cluster-' + this.dataset.cluster);
            if (careersList) { careersList.classList.toggle('show'); }
        });
    });
    var careerItems = DOM.careerClusters.querySelectorAll('.cluster-career-item');
    careerItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            var careerName = this.dataset.career;
            if (careerName) { showCareerDetails(careerName); }
        });
    });
}

// ================================================================
// SECTION 37: COMPARISON TOOL (5 Careers)
// ================================================================
function displayComparisonTool() {
    var topCareers = state.results.slice(0, 20);
    var html = '';
    for (var i = 1; i <= 5; i++) {
        html += '<select class="comparison-select" id="compare-' + i + '" aria-label="Select career ' + i + '">' +
            '<option value="">' + t('select_career') + ' ' + i + '</option>' +
            topCareers.map(function(n) { return '<option value="' + n + '">' + n + '</option>'; }).join('') +
            '</select>';
    }
    DOM.comparisonSelectors.innerHTML = html;
    updateComparison();
    DOM.clearComparisonBtn.textContent = t('clear_all');
    DOM.clearComparisonBtn.onclick = function() {
        for (var i = 1; i <= 5; i++) {
            var sel = document.getElementById('compare-' + i);
            if (sel) sel.value = '';
        }
        updateComparison();
        showToast(t('clear_all') + '!');
    };
}

// --- IMPROVED: updateComparison with badges & scroll hint ---
function updateComparison() {
    var selected = [];
    for (var i = 1; i <= 5; i++) {
        var sel = document.getElementById('compare-' + i);
        if (sel && sel.value) selected.push(sel.value);
    }

    // Build badges for selected careers
    var badgesHtml = '';
    if (selected.length > 0) {
        badgesHtml = '<div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:6px;">';
        selected.forEach(function(name) {
            badgesHtml += '<span class="subject-tag" style="background:var(--zm-green);color:white;font-weight:600;">' + name + '</span>';
        });
        badgesHtml += '</div>';
    }

    // Add scroll hint
    var hintHtml = '<p style="font-size:13px;color:var(--text-muted);margin-bottom:8px;">💡 Scroll sideways to see all careers</p>';

    if (!selected.length) {
        DOM.comparisonTable.innerHTML = badgesHtml + hintHtml + '<p style="padding:20px;text-align:center;color:var(--text-muted);">' + t('compare_desc') + '</p>';
        return;
    }

    var features = [
        { key: 'icon', label: 'Icon' },
        { key: 'cluster', label: t('cluster') },
        { key: 'salaryLocal', label: t('zambia') + ' ' + t('salary') },
        { key: 'salaryGlobal', label: t('international') + ' ' + t('salary') },
        { key: 'outlook', label: 'Job Outlook' },
        { key: 'globalDemand', label: t('global_demand') }
    ];

    var html = '<table class="comparison-table"><thead><tr><th>' + t('feature') + '</th>';
    selected.forEach(function(n) { html += '<th>' + n + '</th>'; });
    html += '</tr></thead><tbody>';
    features.forEach(function(f) {
        html += '<tr><td><strong>' + f.label + '</strong></td>';
        selected.forEach(function(n) {
            var career = careers[n];
            var value = career && career[f.key] ? career[f.key] : '—';
            if (f.key === 'icon') value = value || '—';
            html += '<td>' + value + '</td>';
        });
        html += '</tr>';
    });
    html += '<tr><td><strong>' + t('requirements') + '</strong></td>';
    selected.forEach(function(n) {
        var c = careers[n];
        var reqs = [];
        if (c && c.requiredSubjects) reqs = c.requiredSubjects;
        else if (c && c.requiredSkills) reqs = c.requiredSkills.map(function(s) { return '🛠️ ' + s; });
        html += '<td>' + (reqs.length ? reqs.join(', ') : '—') + '</td>';
    });
    html += '</tr>';
    html += '<tr><td><strong>' + t('pathway') + '</strong></td>';
    selected.forEach(function(n) {
        var c = careers[n];
        var pathwayDisplay = c && c.pathway ? c.pathway.join(', ') : '—';
        html += '<td>' + pathwayDisplay + '</td>';
    });
    html += '</tr>';
    html += '</tbody></table>';

    DOM.comparisonTable.innerHTML = badgesHtml + hintHtml + html;
}

// ================================================================
// SECTION 38: DISCOVERY COMPARISON HELPERS
// ================================================================
function updateDiscoveryCompareCount() {
    DOM.discoveryCompareCount.textContent = state.discoveryCompare.length;
}
function updateDiscoveryComparison() {
    var selected = state.discoveryCompare;
    if (!selected.length) {
        DOM.discoveryCompareTable.innerHTML = '<p style="color:var(--text-muted);padding:20px;text-align:center;">' + t('discovery_compare_empty') + '</p>';
        return;
    }
    var features = [
        { key: 'icon', label: 'Icon' },
        { key: 'cluster', label: t('cluster') },
        { key: 'salaryLocal', label: t('zambia') + ' ' + t('salary') },
        { key: 'salaryGlobal', label: t('international') + ' ' + t('salary') },
        { key: 'outlook', label: 'Job Outlook' },
        { key: 'globalDemand', label: t('global_demand') }
    ];
    var html = '<table class="comparison-table"><thead><tr><th>' + t('feature') + '</th>';
    selected.forEach(function(n) { html += '<th>' + n + '</th>'; });
    html += '</tr></thead><tbody>';
    features.forEach(function(f) {
        html += '<tr><td><strong>' + f.label + '</strong></td>';
        selected.forEach(function(n) {
            var career = careers[n];
            var value = career && career[f.key] ? career[f.key] : '—';
            if (f.key === 'icon') value = value || '—';
            html += '<td>' + value + '</td>';
        });
        html += '</tr>';
    });
    html += '<tr><td><strong>' + t('requirements') + '</strong></td>';
    selected.forEach(function(n) {
        var c = careers[n];
        var reqs = [];
        if (c && c.requiredSubjects) reqs = c.requiredSubjects;
        else if (c && c.requiredSkills) reqs = c.requiredSkills.map(function(s) { return '🛠️ ' + s; });
        html += '<td>' + (reqs.length ? reqs.join(', ') : '—') + '</td>';
    });
    html += '</tr>';
    html += '<tr><td><strong>' + t('pathway') + '</strong></td>';
    selected.forEach(function(n) {
        var c = careers[n];
        var pathwayDisplay = c && c.pathway ? c.pathway.join(', ') : '—';
        html += '<td>' + pathwayDisplay + '</td>';
    });
    html += '</tr>';
    html += '</tbody></table>';
    DOM.discoveryCompareTable.innerHTML = html;
}

// ================================================================
// SECTION 39: CAREER DETAILS MODAL
// ================================================================
var modalCurrentCareer = null;
function showCareerDetails(careerName) {
    var career = careers[careerName];
    if (!career) return;
    modalCurrentCareer = careerName;
    var reqText = '';
    if (career.requiredSubjects) {
        reqText = '<p><strong>Must have:</strong> ' + career.requiredSubjects.join(', ') + '</p>';
        if (career.recommendedSubjects) { reqText += '<p><strong>Recommended:</strong> ' + career.recommendedSubjects.join(', ') + '</p>'; }
    } else if (career.requiredSkills) {
        reqText = '<p><strong>Required Skills:</strong> ' + career.requiredSkills.join(', ') + '</p>';
    } else { reqText = '<p><strong>Requirements:</strong> Varies by employer</p>'; }
    var institutionsText = career.institutions ? career.institutions.join(', ') : 'On-the-job training or self-study';
    var pathwayText = career.pathway ? career.pathway.join(', ') : 'Various pathways available.';
    var html =
        '<span class="detail-icon" aria-hidden="true">' + (career.icon || '🎯') + '</span>' +
        '<h2 id="modal-career-name">' + careerName + '</h2>' +
        '<div class="detail-tags">' +
            '<span class="detail-tag">' + career.cluster + '</span>' +
            '<span class="detail-tag outlook">' + career.outlook + '</span>' +
            (career.globalReady ? '<span class="detail-tag global">🌍 Global Ready</span>' : '') +
        '</div>' +
        '<div class="detail-section"><h4>📋 ' + t('what_they_do') + '</h4><p>' + career.description + '</p></div>' +
        '<div class="detail-section"><h4>📚 ' + t('requirements') + '</h4>' + reqText + '</div>' +
        '<div class="detail-section"><h4>🗺️ ' + t('career_pathway') + '</h4><p><strong>Form 1-4 Pathway:</strong> ' + pathwayText + '</p>' +
        (career.pathwayDescription ? '<p style="margin-top:4px;font-size:14px;color:var(--text-secondary);">' + career.pathwayDescription + '</p>' : '') +
        '</div>' +
        '<div class="detail-section"><h4>🏫 ' + t('where_to_study') + '</h4><p>' + institutionsText + '</p></div>' +
        '<div class="detail-section"><h4>💰 ' + t('salary') + '</h4>' +
            '<p><strong>' + t('zambia') + ':</strong> ' + career.salaryLocal + '</p>' +
            (career.salaryGlobal ? '<p><strong>' + t('international') + ':</strong> ' + career.salaryGlobal + '</p>' : '') + '</div>';
    if (career.globalReady) {
        html += '<div class="detail-section international"><h4>🌍 ' + t('international_opportunities') + '</h4>' +
            '<p><strong>' + t('global_demand') + ':</strong> ' + career.globalDemand + '</p>' +
            (career.countries ? '<p><strong>' + t('countries') + ':</strong> ' + career.countries.join(', ') : '') +
            (career.scholarships ? '<p><strong>' + t('scholarships') + ':</strong> ' + career.scholarships.join(', ') : '') +
            (career.pathwayAbroad ? '<p><strong>' + t('how_to_work_abroad') + ':</strong></p><ol>' +
                career.pathwayAbroad.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' : '') +
            '</div>';
    }
    if (career.story) {
        html += '<div class="detail-section story"><h4>🌟 ' + t('career_story') + '</h4>' +
            '<p style="font-style:italic;">' + career.story + '</p></div>';
    }
    if (career.careerDay) {
        html += '<div class="detail-section activity"><h4>🔍 ' + t('career_day_activity') + '</h4>' +
            '<p>' + career.careerDay + '</p></div>';
    }
    DOM.careerDetailContent.innerHTML = html;
    var isInCompare = false;
    if (state.isDiscoveryMode) {
        isInCompare = state.discoveryCompare.indexOf(careerName) !== -1;
        DOM.modalAddToCompare.style.display = 'inline-block';
        DOM.modalAddToCompare.textContent = isInCompare ? '❌ ' + t('remove_from_compare') : '➕ ' + t('add_to_compare');
        DOM.modalAddToCompare.dataset.career = careerName;
    } else {
        var compareList = [];
        for (var i = 1; i <= 5; i++) {
            var sel = document.getElementById('compare-' + i);
            if (sel && sel.value) compareList.push(sel.value);
        }
        isInCompare = compareList.indexOf(careerName) !== -1;
        DOM.modalAddToCompare.style.display = 'inline-block';
        DOM.modalAddToCompare.textContent = isInCompare ? '❌ ' + t('remove_from_compare') : '➕ ' + t('add_to_compare');
        DOM.modalAddToCompare.dataset.career = careerName;
    }
    DOM.careerModal.classList.add('active');
    DOM.modalClose.focus();
    document.body.style.overflow = 'hidden';
}
DOM.modalAddToCompare.addEventListener('click', function() {
    var careerName = this.dataset.career;
    if (!careerName) return;
    if (state.isDiscoveryMode) {
        var index = state.discoveryCompare.indexOf(careerName);
        if (index !== -1) {
            state.discoveryCompare.splice(index, 1);
            showToast('Removed ' + careerName + ' from comparison.');
        } else {
            if (state.discoveryCompare.length >= 5) { showToast('You can only compare up to 5 careers!'); return; }
            state.discoveryCompare.push(careerName);
            showToast('Added ' + careerName + ' to comparison!');
        }
        updateDiscoveryCompareCount();
        updateDiscoveryComparison();
        var cards = document.querySelectorAll('.discovery-card');
        cards.forEach(function(card) {
            if (card.dataset.discoveryCluster) {
                var list = card.querySelector('.discovery-career-list');
                if (list) {
                    toggleDiscoveryCareers(card.dataset.discoveryCluster, card);
                }
            }
        });
        var isNowInCompare = state.discoveryCompare.indexOf(careerName) !== -1;
        DOM.modalAddToCompare.textContent = isNowInCompare ? '❌ ' + t('remove_from_compare') : '➕ ' + t('add_to_compare');
    } else {
        var compareList = [];
        var compareSelectors = [];
        for (var i = 1; i <= 5; i++) {
            var sel = document.getElementById('compare-' + i);
            if (sel) { compareSelectors.push(sel); if (sel.value) compareList.push(sel.value); }
        }
        var index = compareList.indexOf(careerName);
        if (index !== -1) {
            compareSelectors[index].value = '';
            showToast('Removed ' + careerName + ' from comparison.');
        } else {
            if (compareList.length >= 5) { showToast('You can only compare up to 5 careers!'); return; }
            var emptyIndex = -1;
            for (var j = 0; j < compareSelectors.length; j++) {
                if (!compareSelectors[j].value) { emptyIndex = j; break; }
            }
            if (emptyIndex !== -1) {
                compareSelectors[emptyIndex].value = careerName;
                showToast('Added ' + careerName + ' to comparison!');
            }
        }
        updateComparison();
        var updatedCompareList = [];
        for (var k = 1; k <= 5; k++) {
            var sel2 = document.getElementById('compare-' + k);
            if (sel2 && sel2.value) updatedCompareList.push(sel2.value);
        }
        var isNowInCompare2 = updatedCompareList.indexOf(careerName) !== -1;
        DOM.modalAddToCompare.textContent = isNowInCompare2 ? '❌ ' + t('remove_from_compare') : '➕ ' + t('add_to_compare');
    }
});
function closeCareerModal() {
    DOM.careerModal.classList.remove('active');
    document.body.style.overflow = '';
    modalCurrentCareer = null;
}

// ================================================================
// SECTION 40: CONFETTI & LAUNCH
// ================================================================
function launchConfetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var canvas = DOM.confettiCanvas;
    // V3 FIX: guard against missing canvas — skip celebration instead of crashing
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var particles = [];
    var colors = ['#008000','#DE2010','#EF7D00','#00b800','#ffd700','#3b82f6','#a855f7','#22c55e'];
    for (var i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }
    var frame = 0;
    var maxFrames = 150;
    function animate() {
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.rotation += p.rotationSpeed;
            if (frame > maxFrames - 40) p.opacity = Math.max(0, p.opacity - 0.03);
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }
        if (frame < maxFrames) { requestAnimationFrame(animate); }
        else { ctx.clearRect(0, 0, canvas.width, canvas.height); }
    }
    animate();
}

// ================================================================
// SECTION 41: PDF & PRINT
// ================================================================
function generatePDF() {
    if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
        var retryNow = confirm('PDF libraries not loaded. Click OK to reload the page and try again, or Cancel to continue.');
        if (retryNow) {
            location.reload();
        } else {
            showToast('⚠️ PDF unavailable. Please refresh the page and try again.');
        }
        return;
    }
    var selectedMode = document.querySelector('input[name="color-mode"]:checked');
    var isColor = selectedMode ? selectedMode.value === 'color' : true;
    var originalText = DOM.downloadPdfBtn.textContent;
    DOM.downloadPdfBtn.textContent = '⏳ Generating PDF...';
    DOM.downloadPdfBtn.disabled = true;
    document.querySelectorAll('.score-fill').forEach(function(el) { el.style.transition = 'none'; });
    document.querySelectorAll('.career-card').forEach(function(el) { el.classList.add('revealed'); });
    var resultsSection = document.getElementById('results-screen');
    html2canvas(resultsSection, {
        scale: 2, useCORS: true,
        backgroundColor: isColor ? '#ffffff' : '#f5f5f5',
        logging: false,
        width: resultsSection.scrollWidth,
        height: resultsSection.scrollHeight
    }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var PDFLib = window.jspdf && window.jspdf.jsPDF;
        if (!PDFLib) {
            showToast('PDF library not loaded. Please check your internet connection and try again.');
            DOM.downloadPdfBtn.textContent = originalText;
            DOM.downloadPdfBtn.disabled = false;
            return;
        }
        var pdf = new PDFLib('p', 'mm', 'a4');
        var pdfWidth = pdf.internal.pageSize.getWidth();
        var pdfHeight = pdf.internal.pageSize.getHeight();
        var imgWidth = pdfWidth;
        var imgHeight = (canvas.height * pdfWidth) / canvas.width;
        var heightLeft = imgHeight;
        var position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        while (heightLeft > 0) {
            position -= pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }
        var timestamp = new Date().toISOString().slice(0, 10);
        pdf.save('Career_Quest_Report_' + timestamp + '.pdf');
        DOM.downloadPdfBtn.textContent = originalText;
        DOM.downloadPdfBtn.disabled = false;
        showToast('✅ PDF downloaded successfully!');
    }).catch(function(error) {
        console.error('PDF generation error:', error);
        showToast('❌ Error generating PDF. Try the print option instead.');
        DOM.downloadPdfBtn.textContent = originalText;
        DOM.downloadPdfBtn.disabled = false;
    });
}
function printResults() {
    var selectedMode = document.querySelector('input[name="color-mode"]:checked');
    var isColor = selectedMode ? selectedMode.value === 'color' : true;
    document.body.classList.toggle('bw-print', !isColor);
    window.print();
    setTimeout(function() { document.body.classList.remove('bw-print'); }, 5000);
}

// ================================================================
// SECTION 42: BACK TO TOP
// ================================================================
function handleScroll() {
    // V3 FIX: guard against missing button instead of throwing on every scroll
    if (DOM.backToTop) {
        DOM.backToTop.classList.toggle('visible', window.scrollY > 400);
    }
}

// ================================================================
// SECTION 43: SAVED PROGRESS BANNER
// ================================================================
function checkSavedProgress() {
    var saved = loadSavedState();
    if (!saved || !saved.answers || saved.answers.length === 0) return;
    if (typeof questions === 'undefined' || !questions.length) return;
    var answeredCount = saved.answers.filter(function(a) { return a && a.length; }).length;
    var total = questions.length;
    if (answeredCount > 0 && !saved.quizCompleted) {
        DOM.savedProgressBanner.innerHTML =
            '<div class="saved-progress">' +
            '<span>📌 You have ' + answeredCount + ' of ' + total + ' questions saved. Continue where you left off?</span>' +
            '<button id="resume-btn">🚀 Continue Quiz</button>' +
            '</div>';
        document.getElementById('resume-btn').addEventListener('click', function() {
            state.currentQuestion = saved.currentQuestion || 0;
            state.answers = saved.answers || [];
            state.compareList = saved.compareList || [];
            state.personalityTraits = saved.personalityTraits || {};
            startQuiz(true);
        });
    } else if (saved.quizCompleted && saved.results) {
        DOM.savedProgressBanner.innerHTML =
            '<div class="saved-progress">' +
            '<span>📊 You have previous results. View them again?</span>' +
            '<button id="view-results-btn">📈 View Results</button>' +
            '</div>';
        document.getElementById('view-results-btn').addEventListener('click', function() {
            state.careerScores = saved.careerScores || {};
            state.results = saved.results || [];
            state.quizCompleted = true;
            state.compareList = saved.compareList || [];
            state.personalityTraits = saved.personalityTraits || {};
            showScreen('results-screen');
            displayResults();
        });
    }
}

// ================================================================
// SECTION 44: SAMPLE RESULTS (FIXED)
// ================================================================
const sampleAnswers = [
    ['English', 'Art', 'ICT and Computer Studies', 'History'],
    ['Helping others', 'Drawing', 'Reading', 'Writing', 'Listening to music'],
    ['Office', 'School', 'Remote work', 'Travel'],
    ['Working closely with people', 'Creating new things', 'Teaching others'],
    ['Somewhat important - comfortable salary'],
    ['Making a difference', 'Teaching others', 'Creating art', 'Helping others'],
    ['Both Zambia and abroad'],
    ['I can both lead and follow'],
    ['Creative thinking', 'Imaginative thinking', 'A balance of all types'],
    ['A mix of routine and variety'],
    ['Help my community', 'Help businesses succeed'],
    ['Both - alone or with a team'],
    ['Creative skills', 'Communication skills', 'Leadership skills'],
    ["I'm open to both"],
    ['I can handle some pressure'],
    ['By doing', 'By discussing with others'],
    ['A combination of these'],
    ['Creating something new', 'Designing beautiful things', 'Helping people solve problems'],
    ["Making a difference in people's lives", 'Learning new things'],
    ['A balanced lifestyle with time for family', 'A creative lifestyle'],
    ['I enjoy meeting new people', 'I like helping people directly'],
    ['I want to lead projects'],
    ['Friendly environment', 'Supportive environment'],
    ['I find creative solutions', 'I adapt quickly'],
    ['Private appreciation', 'Being trusted with responsibility'],
    ['I want a good balance'],
    ['I weigh pros and cons', 'I trust my intuition'],
    ['I learn by doing', 'I learn by discussing'],
    ['I am supportive and encouraging', 'I am expressive and passionate'],
    ['Flexible schedule', 'I want to work on projects']
];
function loadSampleResults() {
    state.currentQuestion = 0;
    state.answers = sampleAnswers.slice();
    state.quizStarted = true;
    state.quizCompleted = true;
    state.isDiscoveryMode = false;
    state.results = null;
    state.careerScores = {};
    state.compareList = [];
    state.personalityTraits = {};
    calculateResults();
    saveState();
    showScreen('results-screen');
    displayResults();
    showToast('📊 Viewing sample results! This shows how the app works.');
}

// ================================================================
// SECTION 45: DISCOVERY MODE - TOGGLE CAREERS (UPDATED)
// ================================================================
function toggleDiscoveryCareers(cluster, cardEl) {
    // Close any other open lists first (keep only one open at a time)
    document.querySelectorAll('.discovery-career-list').forEach(function(el) {
        if (el.closest('.discovery-card') !== cardEl) {
            el.remove();
        }
    });
    
    var existing = cardEl.querySelector('.discovery-career-list');
    if (existing) { 
        existing.remove(); 
        return; 
    }
    
    var careersInCluster = Object.keys(careers).filter(function(n) { 
        return careers[n] && careers[n].cluster === cluster; 
    });
    
    var list = document.createElement('div');
    list.className = 'discovery-career-list';
    
    if (careersInCluster.length === 0) {
        list.innerHTML = '<p style="color:var(--text-muted);padding:12px;text-align:center;">No careers found in this cluster.</p>';
        cardEl.appendChild(list);
        return;
    }
    
    careersInCluster.forEach(function(name) {
        var c = careers[name];
        if (!c) return;
        var reqs = c.requiredSubjects || c.requiredSkills || ['Various'];
        var reqDisplay = reqs.slice(0, 3).join(', ') + (reqs.length > 3 ? ' +' + (reqs.length - 3) + ' more' : '');
        var isInCompare = state.discoveryCompare.indexOf(name) !== -1;
        
        var item = document.createElement('div');
        item.className = 'discovery-career-item';
        item.innerHTML = 
            '<h5 data-career="' + name + '">' + c.icon + ' ' + name + '</h5>' +
            '<p>' + c.description.substring(0, 120) + '...</p>' +
            '<p><strong>' + t('requirements') + ':</strong> ' + reqDisplay + '</p>' +
            '<p><strong>' + t('pathway') + ':</strong> ' + (c.pathway ? c.pathway.join(', ') : 'Various') + '</p>' +
            '<div class="career-tags"><span>' + c.outlook + '</span><span>' + c.salaryLocal + '</span>' +
            (c.globalReady ? '<span>🌍 Global Ready</span>' : '') + '</div>' +
            '<div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">' +
                '<button class="btn-small btn-secondary discovery-read-more" data-career="' + name + '" style="padding:4px 12px;font-size:12px;">📖 ' + t('read_more') + '</button>' +
                (isInCompare ?
                    '<button class="btn-small btn-secondary discovery-remove-compare" data-career="' + name + '" style="padding:4px 12px;font-size:12px;background:var(--zm-red);color:white;border-color:var(--zm-red);">❌ ' + t('remove_from_compare') + '</button>' :
                    '<button class="btn-small btn-primary discovery-add-compare" data-career="' + name + '" style="padding:4px 12px;font-size:12px;" ' + (state.discoveryCompare.length >= 5 ? 'disabled' : '') + '>➕ ' + t('add_to_compare') + '</button>'
                ) +
            '</div>';
        list.appendChild(item);
    });
    
    cardEl.appendChild(list);
    
    // Scroll the list into view smoothly
    setTimeout(function() {
        list.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

DOM.discoveryContent.addEventListener('click', function(e) {
    var discoveryCard = e.target.closest('.discovery-card');
    if (discoveryCard && discoveryCard.dataset.discoveryCluster && !e.target.closest('.discovery-career-list')) {
        toggleDiscoveryCareers(discoveryCard.dataset.discoveryCluster, discoveryCard);
        return;
    }
    var readMoreBtn = e.target.closest('.discovery-read-more');
    if (readMoreBtn) { showCareerDetails(readMoreBtn.dataset.career); return; }
    var addBtn = e.target.closest('.discovery-add-compare');
    if (addBtn) {
        var careerName = addBtn.dataset.career;
        if (state.discoveryCompare.length >= 5) { showToast('You can only compare up to 5 careers!'); return; }
        if (state.discoveryCompare.indexOf(careerName) !== -1) { showToast('This career is already in the comparison.'); return; }
        state.discoveryCompare.push(careerName);
        updateDiscoveryCompareCount();
        updateDiscoveryComparison();
        var parentCard = addBtn.closest('.discovery-card');
        if (parentCard && parentCard.dataset.discoveryCluster) { toggleDiscoveryCareers(parentCard.dataset.discoveryCluster, parentCard); }
        showToast('Added ' + careerName + ' to comparison!');
        return;
    }
    var removeBtn = e.target.closest('.discovery-remove-compare');
    if (removeBtn) {
        var careerName = removeBtn.dataset.career;
        state.discoveryCompare = state.discoveryCompare.filter(function(c) { return c !== careerName; });
        updateDiscoveryCompareCount();
        updateDiscoveryComparison();
        var parentCard = removeBtn.closest('.discovery-card');
        if (parentCard && parentCard.dataset.discoveryCluster) { toggleDiscoveryCareers(parentCard.dataset.discoveryCluster, parentCard); }
        showToast('Removed ' + careerName + ' from comparison.');
        return;
    }
    var careerEl = e.target.closest('[data-career]');
    if (careerEl) showCareerDetails(careerEl.dataset.career);
});

// ================================================================
// SECTION 46: SHARE BUTTONS (VISIBILITY)
// ================================================================
function showShareButtons() {
    var shareSection = document.querySelector('.share-results-section');
    if (shareSection) { shareSection.style.display = 'block'; }
}

// ================================================================
// SECTION 47: INITIALIZATION (FIXED - attaches ALL listeners + RESET TOOLS)
// ================================================================
function init() {
    state.darkMode = loadTheme();
    applyTheme();
    var savedLang = getCurrentLanguage();
    state.language = savedLang;
    updateLanguageUI();
    var hasShared = checkForSharedResults();
    if (!hasShared) {
        showScreen('welcome-screen');
        checkSavedProgress();
    }

    // --- QUIZ BUTTONS ---
    if (DOM.startQuizBtn) DOM.startQuizBtn.addEventListener('click', function() { startQuiz(false); });
    if (DOM.iDontKnowBtn) DOM.iDontKnowBtn.addEventListener('click', startDiscoveryMode);
    if (DOM.sampleResultsBtn) DOM.sampleResultsBtn.addEventListener('click', function() { loadSampleResults(); });

    // --- AI DISCOVERY BUTTONS ---
    if (DOM.smartDiscoverBtn) DOM.smartDiscoverBtn.addEventListener('click', function() { runSmartDiscovery(); });
    if (DOM.aiDiscoverBtn) DOM.aiDiscoverBtn.addEventListener('click', function() { showAIPanel(); });
    if (DOM.exploreAllBtn) DOM.exploreAllBtn.addEventListener('click', function() { showCareerExplorer(); });

    // --- PARTICLES & TYPING ---
    initParticles();
    startTypingEffect();

    // --- V3.1: live career count on the welcome chip ---
    var chipCareers = document.getElementById('chip-careers');
    if (chipCareers && typeof careers !== 'undefined') {
        chipCareers.textContent = String(Object.keys(careers).length);
    }

    // --- QUIZ NAVIGATION ---
    if (DOM.prevBtn) DOM.prevBtn.addEventListener('click', prevQuestion);
    if (DOM.nextBtn) DOM.nextBtn.addEventListener('click', nextQuestion);
    if (DOM.questionDots) DOM.questionDots.addEventListener('click', handleDotClick); // V3.1
    if (DOM.optionsContainer) {
        DOM.optionsContainer.addEventListener('click', function(e) {
            var btn = e.target.closest('.option-btn');
            if (btn) toggleOption(btn);
        });
    }

    // --- PDF & PRINT ---
    if (DOM.downloadPdfBtn) DOM.downloadPdfBtn.addEventListener('click', generatePDF);
    if (DOM.printBtn) DOM.printBtn.addEventListener('click', printResults);

    // --- RETAKE ---
    if (DOM.retakeBtn) {
        DOM.retakeBtn.addEventListener('click', function() {
            var dm = state.darkMode;
            var cm = state.colorMode;
            var lang = state.language;
            state = {
                currentQuestion: 0,
                answers: [],
                quizStarted: false,
                quizCompleted: false,
                results: null,
                careerScores: {},
                isDiscoveryMode: false,
                colorMode: cm,
                activeFilter: 'all',
                searchQuery: '',
                darkMode: dm,
                kbFocusIndex: -1,
                discoveryCompare: [],
                compareList: [],
                personalityTraits: {},
                language: lang,
                shareData: null
            };
            clearSavedState();
            showScreen('welcome-screen');
            checkSavedProgress();
        });
    }

    // --- CAREER MATCHES CLICKS ---
    if (DOM.careerMatches) {
        DOM.careerMatches.addEventListener('click', function(e) {
            var detailBtn = e.target.closest('.view-details-btn');
            if (detailBtn) { e.stopPropagation(); showCareerDetails(detailBtn.dataset.career); return; }
            var card = e.target.closest('.career-card');
            if (card && card.dataset.career) showCareerDetails(card.dataset.career);
        });
    }

    // --- CLUSTER CLICKS ---
    if (DOM.careerClusters) {
        DOM.careerClusters.addEventListener('click', function(e) {
            if (e.target.closest('.cluster-career-item')) { return; }
            var clusterCard = e.target.closest('.cluster-card');
            if (clusterCard) {
                var careersList = document.getElementById('cluster-' + clusterCard.dataset.cluster);
                if (careersList) { careersList.classList.toggle('show'); }
            }
        });
    }

    // --- COMPARISON & FILTER ---
    if (DOM.comparisonSelectors) DOM.comparisonSelectors.addEventListener('change', debounce(updateComparison, 200));
    if (DOM.careerSearch) DOM.careerSearch.addEventListener('input', debounce(handleCareerSearch, 250));
    if (DOM.filterChips) DOM.filterChips.addEventListener('click', handleFilterClick);

    // --- MODAL ---
    if (DOM.modalClose) DOM.modalClose.addEventListener('click', closeCareerModal);
    if (DOM.careerModal) {
        DOM.careerModal.addEventListener('click', function(e) {
            if (e.target === DOM.careerModal) closeCareerModal();
        });
    }

    // --- DARK MODE & BACK TO TOP ---
    if (DOM.darkModeToggle) DOM.darkModeToggle.addEventListener('click', toggleDarkMode);
    if (DOM.backToTop) DOM.backToTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    window.addEventListener('scroll', handleScroll, { passive: true });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeCareerModal();
        handleKeyboardNav(e);
    });

    if (DOM.colorModeRadios) {
        DOM.colorModeRadios.forEach(function(r) {
            r.addEventListener('change', function() { state.colorMode = this.value; });
        });
    }

    window.addEventListener('resize', function() {
        if (DOM.confettiCanvas) {
            DOM.confettiCanvas.width = window.innerWidth;
            DOM.confettiCanvas.height = window.innerHeight;
        }
    });

    // --- SHARE BUTTONS ---
    document.addEventListener('click', function(e) {
        if (e.target.closest('#share-link-btn')) { copyShareLink(); return; }
        if (e.target.closest('#share-whatsapp-btn')) { shareOnWhatsApp(); return; }
        if (e.target.closest('#share-email-btn')) { shareViaEmail(); return; }
    });

    // --- LANGUAGE SWITCHER ---
    document.addEventListener('click', function(e) {
        var btn = e.target.closest('.lang-btn');
        if (btn) {
            var lang = btn.dataset.lang;
            if (lang && translations[lang]) {
                switchLanguage(lang);
                showToast('🌐 Language switched to ' + (lang === 'en' ? 'English' : lang === 'ny' ? 'Chinyanja' : lang === 'bem' ? 'Icibemba' : 'Chitonga'));
            }
        }
    });

    // --- NEW: Reset Tools button listener ---
    var resetToolsBtn = document.getElementById('reset-toolbar-btn');
    if (resetToolsBtn) {
        resetToolsBtn.addEventListener('click', function() {
            state.activeFilter = 'all';
            state.searchQuery = '';
            state.compareList = [];
            state.discoveryCompare = [];
            var searchInput = document.getElementById('career-search');
            if (searchInput) searchInput.value = '';
            renderFilterChips();
            renderCareerCards(state.results.slice(0, 15));
            updateComparison();
            updateDiscoveryComparison();
            updateDiscoveryCompareCount();
            showToast('🔄 Tools reset!');
        });
    }

    // --- PWA: Check if app was installed ---
    window.addEventListener('appinstalled', function() {
        console.log('📲 App was installed successfully!');
        showToast('🎉 Thank you for installing Career Quest!');
    });

    if (typeof console !== 'undefined') {
        console.log('© Career Quest initialized successfully! (Merged & Improved)');
        console.log('📚 Loaded ' + Object.keys(careers).length + ' careers');
        console.log('📝 Loaded ' + questions.length + ' questions');
        console.log('✅ Language: ' + state.language);
        console.log('✅ Improvements: Search filter reset, comparison badges, clear-all button, reset tools, PDF retry, AI prompt with question context');
        console.log('📲 PWA: Service Worker registered - App can be installed!');
    }
}

document.addEventListener('DOMContentLoaded', init);

// ================================================================
// SECTION 48: V3 MOBILE ENHANCEMENT LAYER
// Swipe left/right to move between quiz questions (touch phones).
// Safe: ignores vertical scrolls, option taps, and multi-select.
// ================================================================
(function initSwipeNavigation() {
    var startX = 0, startY = 0, tracking = false;

    document.addEventListener('touchstart', function(e) {
        if (e.touches.length !== 1) { tracking = false; return; }
        var quizScreen = document.getElementById('quiz-screen');
        if (!quizScreen || !quizScreen.classList.contains('active')) return;
        if (e.target.closest('.option-btn') || e.target.closest('button') || e.target.closest('input')) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        tracking = true;
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        if (!tracking) return;
        tracking = false;
        var dx = e.changedTouches[0].clientX - startX;
        var dy = e.changedTouches[0].clientY - startY;
        // Horizontal swipe only: significant X movement, small Y movement
        if (Math.abs(dx) < 70 || Math.abs(dy) > 45) return;
        if (dx < 0) {
            // swipe left = next
            if (DOM.nextBtn && !DOM.nextBtn.disabled) { haptic(6); nextQuestion(); }
        } else {
            // swipe right = previous
            if (DOM.prevBtn && DOM.prevBtn.style.display !== 'none') { haptic(6); prevQuestion(); }
        }
    }, { passive: true });
})();

// ================================================================
// END OF SCRIPT (V3)
// ================================================================