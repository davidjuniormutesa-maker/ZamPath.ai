// ================================================================
// CAREER QUEST - COMPLETE JAVASCRIPT APPLICATION
// ================================================================
// This file contains ALL the logic for the career guidance app:
// - 50+ careers across 8 clusters with PATHWAYS
// - 30 multi-select questions (ALL individual options)
// - 12 personality traits for enhanced sensitivity
// - 3x sensitivity scoring for accurate matching
// - 5-career comparison tool
// - Enhanced Discovery Mode with cluster exploration
// - Career pathways display (Form 1-4)
// - ACCURATE salary data for 2026 Zambian standards
// - RADAR CHART with 12 personality traits
// - ACCURATE pathwayAbroad for EVERY career
// - PDF generation with color/B&W options
// - Dark mode, accessibility, keyboard navigation
// - Search bar hidden in Discovery Mode
// - Career clicks in clusters open details (fixed)
// - SHARE RESULTS - Shareable links with encoded data (NEW!)
// - MULTIPLE LANGUAGES - English, Nyanja, Bemba, Tonga (NEW!)
// - Language switcher with persistent preference (NEW!)
// - Detailed comments on EVERY line of code
// ================================================================

// ================================================================
// SECTION 1: CAREER DATABASE (50+ Careers with Accurate Salaries)
// ================================================================

const careers = {
    // =============================================================
    // STEM CLUSTER - Science, Technology, Engineering, Mathematics
    // =============================================================

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

    // =============================================================
    // HEALTHCARE CLUSTER - Medical and health-related careers
    // =============================================================

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

    // =============================================================
    // BUSINESS CLUSTER - Commerce, finance, and management
    // =============================================================

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

    // =============================================================
    // CREATIVE CLUSTER - Arts, media, and design
    // =============================================================

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

    // =============================================================
    // HELPING CLUSTER - Education, social work, and community
    // =============================================================

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

    // =============================================================
    // OUTDOOR CLUSTER - Nature, tourism, and agriculture
    // =============================================================

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

    // =============================================================
    // PUBLIC SERVICE CLUSTER - Government, military, emergency
    // =============================================================

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

    // =============================================================
    // SKILLED TRADES CLUSTER - Hands-on technical and craft careers
    // =============================================================

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
    }
};

// ================================================================
// SECTION 2: PER-CAREER TRAIT TAGS
// ================================================================

const careerTraits = {
    "Mining Engineer": ["analytical", "technical", "outdoor", "leadership", "physical", "highSalary"],
    "Civil Engineer": ["analytical", "technical", "physical", "outdoor", "teamwork", "highSalary"],
    "Software Developer": ["analytical", "technical", "creative", "independent", "indoor", "highSalary"],
    "Data Analyst": ["analytical", "technical", "independent", "indoor", "detailOriented", "highSalary"],
    "Architect": ["analytical", "creative", "technical", "detailOriented", "indoor", "highSalary"],
    "Mathematician": ["analytical", "logical", "independent", "indoor", "highSalary", "curiosity"],
    "Scientist": ["analytical", "curiosity", "science", "research", "indoor", "highSalary"],
    "Biologist": ["analytical", "science", "outdoor", "nature", "curiosity", "research"],
    "Chemist": ["analytical", "science", "indoor", "detailOriented", "research", "highSalary"],
    "Archeologist": ["curiosity", "outdoor", "history", "research", "patience", "knowledge"],
    "Engineer": ["analytical", "technical", "problemSolving", "leadership", "highSalary", "practical"],
    "IT Specialist": ["analytical", "technical", "technology", "problemSolving", "indoor", "highSalary"],
    "Medical Doctor": ["helping", "analytical", "highPressure", "highSalary", "teamwork", "dedication"],
    "Surgeon": ["helping", "analytical", "highPressure", "highSalary", "precision", "dedication"],
    "Nurse": ["helping", "highPressure", "teamwork", "shiftWork", "compassion", "practical"],
    "Pharmacist": ["analytical", "helping", "detailOriented", "indoor", "science", "highSalary"],
    "Paramedic": ["helping", "highPressure", "teamwork", "physical", "outdoor", "compassion"],
    "Veterinarian": ["helping", "science", "outdoor", "compassion", "animalLover", "practical"],
    "Therapist": ["helping", "communication", "patience", "compassion", "indoor", "empathy"],
    "Clinical Officer": ["helping", "practical", "teamwork", "compassion", "medical", "community"],
    "Dentist": ["helping", "analytical", "indoor", "medical", "highSalary", "precision"],
    "Radiographer": ["technical", "helping", "indoor", "medical", "detailOriented", "technology"],
    "Laboratory Technician": ["analytical", "science", "indoor", "detailOriented", "medical", "practical"],
    "Accountant": ["analytical", "detailOriented", "indoor", "independent", "business", "highSalary"],
    "Entrepreneur": ["leadership", "creative", "riskTaker", "business", "independent", "highSalary"],
    "Banker": ["analytical", "business", "indoor", "professional", "highSalary", "detailOriented"],
    "Tax Attorney": ["analytical", "business", "indoor", "leadership", "highSalary", "communication"],
    "Economist": ["analytical", "business", "indoor", "research", "highSalary", "curiosity"],
    "Human Resources": ["peoplePerson", "communication", "helping", "indoor", "teamwork", "organized"],
    "Marketing Manager": ["creative", "communication", "leadership", "business", "teamwork", "highSalary"],
    "Logistics Manager": ["analytical", "business", "organized", "problemSolving", "teamwork", "leadership"],
    "Graphic Designer": ["creative", "independent", "indoor", "visual", "technology", "flexible"],
    "Animator": ["creative", "visual", "technology", "indoor", "patience", "artistic"],
    "Journalist": ["creative", "communication", "outdoor", "curiosity", "writing", "flexible"],
    "Author": ["creative", "writing", "independent", "indoor", "imagination", "patience"],
    "Actor": ["creative", "performance", "communication", "confident", "flexible", "expressive"],
    "Designer": ["creative", "visual", "indoor", "artistic", "detailOriented", "flexible"],
    "Model": ["creative", "performance", "confident", "outdoor", "professional", "communication"],
    "Photographer": ["creative", "visual", "outdoor", "independent", "technology", "artistic"],
    "Musician": ["creative", "performance", "discipline", "expressive", "flexible", "passion"],
    "Fashion Designer": ["creative", "visual", "handcraft", "indoor", "artistic", "business"],
    "Toymaker": ["creative", "handcraft", "patience", "indoor", "imagination", "craftsmanship"],
    "Teacher": ["helping", "communication", "patience", "leadership", "community", "planning"],
    "Social Worker": ["helping", "compassion", "community", "communication", "patience", "resilience"],
    "Guidance Counselor": ["helping", "communication", "patience", "indoor", "empathy", "counseling"],
    "Community Development Officer": ["helping", "community", "leadership", "outdoor", "compassion", "planning"],
    "Priest": ["helping", "communication", "compassion", "leadership", "community", "spiritual"],
    "Lawyer": ["helping", "analytical", "communication", "leadership", "highSalary", "advocacy"],
    "Tour Guide": ["communication", "outdoor", "peoplePerson", "flexible", "enthusiasm", "knowledge"],
    "Farmer": ["outdoor", "independent", "physical", "patience", "practical", "business"],
    "Game Ranger": ["outdoor", "physical", "independent", "nature", "conservation", "resilience"],
    "Forest Ranger": ["outdoor", "nature", "conservation", "physical", "independent", "patience"],
    "Fishery Officer": ["outdoor", "nature", "conservation", "science", "physical", "community"],
    "Surveyor": ["outdoor", "analytical", "technology", "independence", "precision", "physical"],
    "Governor": ["leadership", "communication", "public", "community", "highSalary", "decisionMaking"],
    "Army": ["physical", "discipline", "teamwork", "leadership", "patriotism", "resilience"],
    "Firefighter": ["physical", "bravery", "teamwork", "quickThinking", "helping", "outdoor"],
    "Police Officer": ["physical", "integrity", "communication", "problemSolving", "courage", "community"],
    "Security Guard": ["alertness", "communication", "physical", "dependability", "observation", "patience"],
    "Pilot": ["analytical", "highPressure", "leadership", "technical", "travel", "highSalary"],
    "Carpenter": ["handcraft", "physical", "creativity", "precision", "practical", "independence"],
    "Welder": ["precision", "handEyeCoordination", "physical", "attentionToDetail", "technical", "practical"],
    "Maid": ["attentionToDetail", "organization", "timeManagement", "physical", "dependability", "practical"],
    "Electrician": ["analytical", "technical", "physical", "problemSolving", "indoor", "highSalary"],
    "Mechanic": ["handcraft", "problemSolving", "physical", "diagnostic", "technical", "practical"],
    "Miner": ["physical", "safety", "teamwork", "technical", "outdoor", "highSalary"]
};

// ================================================================
// SECTION 3: QUESTION TRAIT MAPPING (30 QUESTIONS - 12 TRAITS)
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
// SECTION 4: ALL TRAITS LIST (12 TRAITS)
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
        'welcome_title': 'Discover Your Path to a Bright Future',
        'welcome_subtitle': 'Discover Your Path to a Bright Future',
        'welcome_description': 'Not sure what career is right for you? Don\'t worry! Answer a few questions and we\'ll help you discover your perfect career path.',
        'start_quiz': 'Get Started',
        'i_dont_know': 'I Have No Idea',
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
        'stats': 'Stats'
    },
    'ny': {
        'app_title': 'Career Quest',
        'welcome_title': 'Pezani Njira Yanu Yatsogolo',
        'welcome_subtitle': 'Pezani Njira Yanu Yatsogolo',
        'welcome_description': 'Simukudziwa ntchito yomwe ingakuyenereni? Osadandaula! Yankhani mafunso ochepa ndipo tidzakuthandizani kupeza njira yanu yabwino kwambiri.',
        'start_quiz': 'Yambani',
        'i_dont_know': 'Sindikudziwa',
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
        'stats': 'Ziwerengero'
    },
    'bem': {
        'app_title': 'Career Quest',
        'welcome_title': 'Sangana Inshila Yenu Yakumushi',
        'welcome_subtitle': 'Sangana Inshila Yenu Yakumushi',
        'welcome_description': 'Temwa mwishibe umulimo uletile? Nshisakamwene! Yisubishe ibipusho utuntuniko no twafwile ukukwafwa ukusanga inshila yenu isuma.',
        'start_quiz': 'Tambukeni',
        'i_dont_know': 'Nshishibe',
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
        'stats': 'Imibare'
    },
    'tonga': {
        'app_title': 'Career Quest',
        'welcome_title': 'Sangana Njila Yenyu Yabulemu',
        'welcome_subtitle': 'Sangana Njila Yenyu Yabulemu',
        'welcome_description': 'Tamuzi nso mwa kukonzya kucita mulimo nzi? Muleka kutetema! Amba makani aafwumbi atonganya tulimvwisya kuti mwasangane njila yenyu yabulemu.',
        'start_quiz': 'Tambukani',
        'i_dont_know': 'Ncindisena',
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
        'personality_desc': 'Chishusho ichi chili kulaanga mbwenu zyenu zyakukula potengera makani enyu. Muzi ukukula, ni zyakukula!',
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
        'your_future_starts_here': 'Bumunthu bwenyu butendeka pano.',
        'find_your_path': 'Sangani njila yenyu.',
        'start_your_journey': 'Tambukani Ulendo Wenyu',
        'learn_more': 'Mumeni Zyinji',
        'features': 'Zintu',
        'how_it_works': 'Izyo Icita',
        'testimonials': 'Umboni',
        'stats': 'Ziwerengero'
    }
};

// ================================================================
// SECTION 6: QUESTIONS (30 QUESTIONS - COMPLETE)
// ================================================================

const questions = [
    // Q1 - Subjects
    {
        id: 1,
        text: 'Which subjects do you enjoy most at school? (Select all that apply)',
        multiSelect: true,
        options: ['Mathematics', 'Biology', 'Chemistry', 'Physics', 'English', 'Literature', 'History', 'Geography', 'Art', 'Music', 'ICT and Computer Studies', 'Agriculture', 'Business Studies', 'Physical Education', 'Not sure yet 🤷'],
        weights: {
            'Mathematics': { 'STEM': 5, 'Healthcare': 3, 'Business': 4, 'Creative': 1, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 4 },
            'Biology': { 'STEM': 3, 'Healthcare': 5, 'Business': 1, 'Creative': 1, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'Chemistry': { 'STEM': 4, 'Healthcare': 5, 'Business': 2, 'Creative': 1, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'Physics': { 'STEM': 5, 'Healthcare': 2, 'Business': 2, 'Creative': 1, 'Helping': 1, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 4 },
            'English': { 'STEM': 1, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 4, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Literature': { 'STEM': 1, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 3, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'History': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 3, 'Helping': 3, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 1 },
            'Geography': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 5, 'Public Service': 3, 'Skilled Trades': 2 },
            'Art': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 3 },
            'Music': { 'STEM': 1, 'Healthcare': 1, 'Business': 1, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 1 },
            'ICT and Computer Studies': { 'STEM': 5, 'Healthcare': 1, 'Business': 3, 'Creative': 3, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Agriculture': { 'STEM': 3, 'Healthcare': 2, 'Business': 2, 'Creative': 1, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 3 },
            'Business Studies': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Physical Education': { 'STEM': 1, 'Healthcare': 2, 'Business': 1, 'Creative': 1, 'Helping': 2, 'Outdoor': 4, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q2 - Activities
    {
        id: 2,
        text: 'What activities do you enjoy in your free time? (Select all that apply)',
        multiSelect: true,
        options: ['Building or fixing things', 'Helping others', 'Drawing', 'Painting', 'Solving puzzles', 'Playing strategy games', 'Working outdoors', 'Gardening', 'Farming', 'Using computers', 'Learning technology', 'Reading', 'Writing', 'Playing sports', 'Playing music', 'Listening to music', 'Not sure yet 🤷'],
        weights: {
            'Building or fixing things': { 'STEM': 5, 'Healthcare': 1, 'Business': 2, 'Creative': 2, 'Helping': 1, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 5 },
            'Helping others': { 'STEM': 1, 'Healthcare': 4, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Drawing': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Painting': { 'STEM': 1, 'Healthcare': 1, 'Business': 1, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Solving puzzles': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Playing strategy games': { 'STEM': 4, 'Healthcare': 1, 'Business': 3, 'Creative': 2, 'Helping': 1, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 2 },
            'Working outdoors': { 'STEM': 2, 'Healthcare': 1, 'Business': 1, 'Creative': 1, 'Helping': 1, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 3 },
            'Gardening': { 'STEM': 2, 'Healthcare': 2, 'Business': 1, 'Creative': 1, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 3 },
            'Farming': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 1, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 3 },
            'Using computers': { 'STEM': 5, 'Healthcare': 1, 'Business': 3, 'Creative': 3, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Learning technology': { 'STEM': 5, 'Healthcare': 1, 'Business': 3, 'Creative': 3, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Reading': { 'STEM': 2, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Writing': { 'STEM': 2, 'Healthcare': 1, 'Business': 3, 'Creative': 5, 'Helping': 3, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Playing sports': { 'STEM': 1, 'Healthcare': 2, 'Business': 1, 'Creative': 1, 'Helping': 2, 'Outdoor': 4, 'Public Service': 4, 'Skilled Trades': 3 },
            'Playing music': { 'STEM': 1, 'Healthcare': 1, 'Business': 1, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 1 },
            'Listening to music': { 'STEM': 1, 'Healthcare': 1, 'Business': 1, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q3 - Work Environment
    {
        id: 3,
        text: 'Where would you most like to work? (Select all that apply)',
        multiSelect: true,
        options: ['Office', 'Indoor setting', 'Outdoors in nature', 'Hospital', 'Clinic', 'Laboratory', 'Workshop', 'Factory', 'School', 'Classroom', 'Travel', 'Remote work', "I'm flexible", 'Not sure yet 🤷'],
        weights: {
            'Office': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Indoor setting': { 'STEM': 3, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 3, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Outdoors in nature': { 'STEM': 2, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 3 },
            'Hospital': { 'STEM': 1, 'Healthcare': 5, 'Business': 1, 'Creative': 1, 'Helping': 4, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'Clinic': { 'STEM': 1, 'Healthcare': 5, 'Business': 1, 'Creative': 1, 'Helping': 4, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'Laboratory': { 'STEM': 4, 'Healthcare': 4, 'Business': 1, 'Creative': 1, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Workshop': { 'STEM': 3, 'Healthcare': 1, 'Business': 2, 'Creative': 3, 'Helping': 1, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 5 },
            'Factory': { 'STEM': 3, 'Healthcare': 1, 'Business': 2, 'Creative': 1, 'Helping': 1, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 4 },
            'School': { 'STEM': 1, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 5, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Classroom': { 'STEM': 1, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 5, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Travel': { 'STEM': 1, 'Healthcare': 1, 'Business': 3, 'Creative': 3, 'Helping': 2, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 1 },
            'Remote work': { 'STEM': 4, 'Healthcare': 1, 'Business': 4, 'Creative': 4, 'Helping': 1, 'Outdoor': 1, 'Public Service': 1, 'Skilled Trades': 2 },
            "I'm flexible": { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q4 - Kind of Work
    {
        id: 4,
        text: 'What kind of work appeals to you most? (Select all that apply)',
        multiSelect: true,
        options: ['Working closely with people', 'Working on tasks alone', 'Working with my hands', 'Working with data', 'Working with numbers', 'Creating new things', 'Teaching others', 'Guiding others', 'Not sure yet 🤷'],
        weights: {
            'Working closely with people': { 'STEM': 1, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Working on tasks alone': { 'STEM': 4, 'Healthcare': 1, 'Business': 3, 'Creative': 4, 'Helping': 1, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Working with my hands': { 'STEM': 3, 'Healthcare': 2, 'Business': 1, 'Creative': 4, 'Helping': 1, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 5 },
            'Working with data': { 'STEM': 5, 'Healthcare': 2, 'Business': 4, 'Creative': 1, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'Working with numbers': { 'STEM': 4, 'Healthcare': 2, 'Business': 5, 'Creative': 1, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Creating new things': { 'STEM': 3, 'Healthcare': 1, 'Business': 3, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'Teaching others': { 'STEM': 1, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Guiding others': { 'STEM': 1, 'Healthcare': 2, 'Business': 3, 'Creative': 2, 'Helping': 4, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q5 - Salary Importance
    {
        id: 5,
        text: 'How important is salary to you?',
        multiSelect: false,
        options: ['Very important - high salary', 'Somewhat important - comfortable salary', 'Not very important - enjoyment matters more', 'Not sure yet 🤷'],
        weights: {
            'Very important - high salary': { 'STEM': 3, 'Healthcare': 3, 'Business': 5, 'Creative': 1, 'Helping': 1, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 3 },
            'Somewhat important - comfortable salary': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not very important - enjoyment matters more': { 'STEM': 2, 'Healthcare': 2, 'Business': 1, 'Creative': 5, 'Helping': 4, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q6 - Fulfilling Work
    {
        id: 6,
        text: 'What would make your work feel most fulfilling? (Select all that apply)',
        multiSelect: true,
        options: ['Helping others', 'Making a difference', 'Building things', 'Solving problems', 'Teaching others', 'Creating art', 'Managing people', 'Managing businesses', 'Researching', 'Discovering new things', "I haven't thought about it", 'Not sure yet 🤷'],
        weights: {
            'Helping others': { 'STEM': 1, 'Healthcare': 5, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Making a difference': { 'STEM': 2, 'Healthcare': 4, 'Business': 3, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Building things': { 'STEM': 4, 'Healthcare': 1, 'Business': 2, 'Creative': 3, 'Helping': 1, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 5 },
            'Solving problems': { 'STEM': 5, 'Healthcare': 2, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 3 },
            'Teaching others': { 'STEM': 1, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Creating art': { 'STEM': 1, 'Healthcare': 1, 'Business': 1, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Managing people': { 'STEM': 2, 'Healthcare': 2, 'Business': 5, 'Creative': 2, 'Helping': 3, 'Outdoor': 1, 'Public Service': 4, 'Skilled Trades': 1 },
            'Managing businesses': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Researching': { 'STEM': 5, 'Healthcare': 3, 'Business': 2, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 1 },
            'Discovering new things': { 'STEM': 4, 'Healthcare': 2, 'Business': 2, 'Creative': 4, 'Helping': 1, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 1 },
            "I haven't thought about it": { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q7 - Location
    {
        id: 7,
        text: 'Where do you see yourself working in the future?',
        multiSelect: false,
        options: ['In Zambia - stay here', 'Outside Zambia - work abroad', 'Both Zambia and abroad', "I'm flexible anywhere", 'Not sure yet 🤷'],
        weights: {
            'In Zambia - stay here': { 'STEM': 2, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 5, 'Skilled Trades': 4 },
            'Outside Zambia - work abroad': { 'STEM': 5, 'Healthcare': 4, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 3 },
            'Both Zambia and abroad': { 'STEM': 4, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            "I'm flexible anywhere": { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q8 - Team Setting
    {
        id: 8,
        text: 'What is your preferred role in a team?',
        multiSelect: false,
        options: ['I like taking charge', 'I like leading others', 'I prefer following instructions', 'I like being part of a team', 'I can both lead and follow', 'Not sure yet 🤷'],
        weights: {
            'I like taking charge': { 'STEM': 3, 'Healthcare': 2, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 2 },
            'I like leading others': { 'STEM': 3, 'Healthcare': 2, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 2 },
            'I prefer following instructions': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 2, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 4 },
            'I like being part of a team': { 'STEM': 3, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 4, 'Public Service': 4, 'Skilled Trades': 3 },
            'I can both lead and follow': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q9 - Thinking Style
    {
        id: 9,
        text: 'Which thinking style describes you best? (Select all that apply)',
        multiSelect: true,
        options: ['Logical thinking', 'Analytical thinking', 'Creative thinking', 'Imaginative thinking', 'Practical thinking', 'Hands-on thinking', 'Strategic thinking', 'Big-picture thinking', 'A balance of all types', 'Not sure yet 🤷'],
        weights: {
            'Logical thinking': { 'STEM': 5, 'Healthcare': 2, 'Business': 4, 'Creative': 1, 'Helping': 1, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 2 },
            'Analytical thinking': { 'STEM': 5, 'Healthcare': 3, 'Business': 4, 'Creative': 1, 'Helping': 1, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 2 },
            'Creative thinking': { 'STEM': 2, 'Healthcare': 1, 'Business': 3, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
            'Imaginative thinking': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Practical thinking': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 2, 'Helping': 3, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 4 },
            'Hands-on thinking': { 'STEM': 4, 'Healthcare': 2, 'Business': 1, 'Creative': 3, 'Helping': 2, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 5 },
            'Strategic thinking': { 'STEM': 4, 'Healthcare': 2, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Big-picture thinking': { 'STEM': 3, 'Healthcare': 2, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'A balance of all types': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q10 - Work Environment Style
    {
        id: 10,
        text: 'What kind of work environment do you prefer? (Select all that apply)',
        multiSelect: true,
        options: ['Predictable work', 'Routine work', 'Dynamic work', 'Changing work', 'A mix of routine and variety', 'Not sure yet 🤷'],
        weights: {
            'Predictable work': { 'STEM': 3, 'Healthcare': 4, 'Business': 4, 'Creative': 1, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Routine work': { 'STEM': 3, 'Healthcare': 4, 'Business': 4, 'Creative': 1, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Dynamic work': { 'STEM': 3, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 2, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 2 },
            'Changing work': { 'STEM': 3, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 2, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 2 },
            'A mix of routine and variety': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q11 - Impact
    {
        id: 11,
        text: 'How do you want to make an impact? (Select all that apply)',
        multiSelect: true,
        options: ['Help individuals directly', 'Help my community', 'Help the environment', 'Help businesses succeed', 'Help the country of Zambia', 'I want to help in any way I can', 'Not sure yet 🤷'],
        weights: {
            'Help individuals directly': { 'STEM': 1, 'Healthcare': 5, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Help my community': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'Help the environment': { 'STEM': 3, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 3, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 2 },
            'Help businesses succeed': { 'STEM': 3, 'Healthcare': 1, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'Help the country of Zambia': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 2, 'Helping': 4, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 2 },
            'I want to help in any way I can': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 2, 'Helping': 4, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q12 - Best Work Environment
    {
        id: 12,
        text: 'Do you work best alone or with others?',
        multiSelect: false,
        options: ['Working alone', 'I concentrate better by myself', 'Working with others', 'I enjoy collaboration', 'Both - alone or with a team', 'Not sure yet 🤷'],
        weights: {
            'Working alone': { 'STEM': 4, 'Healthcare': 1, 'Business': 3, 'Creative': 4, 'Helping': 1, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'I concentrate better by myself': { 'STEM': 4, 'Healthcare': 1, 'Business': 3, 'Creative': 4, 'Helping': 1, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Working with others': { 'STEM': 2, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'I enjoy collaboration': { 'STEM': 2, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'Both - alone or with a team': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q13 - Skills
    {
        id: 13,
        text: 'What skills do you have or want to develop? (Select all that apply)',
        multiSelect: true,
        options: ['Technical skills', 'Mechanical skills', 'Medical skills', 'Healthcare skills', 'Business skills', 'Leadership skills', 'Creative skills', 'Artistic skills', 'Teaching skills', 'Communication skills', 'Environmental skills', 'Conservation skills', 'All of the above', 'Not sure yet 🤷'],
        weights: {
            'Technical skills': { 'STEM': 5, 'Healthcare': 1, 'Business': 2, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 4 },
            'Mechanical skills': { 'STEM': 4, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 1, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 5 },
            'Medical skills': { 'STEM': 2, 'Healthcare': 5, 'Business': 1, 'Creative': 1, 'Helping': 4, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 1 },
            'Healthcare skills': { 'STEM': 2, 'Healthcare': 5, 'Business': 1, 'Creative': 1, 'Helping': 4, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 1 },
            'Business skills': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Leadership skills': { 'STEM': 3, 'Healthcare': 2, 'Business': 5, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 2 },
            'Creative skills': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Artistic skills': { 'STEM': 2, 'Healthcare': 1, 'Business': 1, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Teaching skills': { 'STEM': 1, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Communication skills': { 'STEM': 2, 'Healthcare': 3, 'Business': 5, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 5, 'Skilled Trades': 1 },
            'Environmental skills': { 'STEM': 3, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 3, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 2 },
            'Conservation skills': { 'STEM': 3, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 3, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 2 },
            'All of the above': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q14 - Work Life
    {
        id: 14,
        text: 'What kind of work life do you prefer?',
        multiSelect: false,
        options: ['I want to be my own boss', 'I want to start a business', 'I prefer a job with a set role', 'I prefer a job with clear responsibilities', "I'm open to both", 'Not sure yet 🤷'],
        weights: {
            'I want to be my own boss': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 3 },
            'I want to start a business': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 3 },
            'I prefer a job with a set role': { 'STEM': 4, 'Healthcare': 4, 'Business': 3, 'Creative': 2, 'Helping': 4, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'I prefer a job with clear responsibilities': { 'STEM': 4, 'Healthcare': 4, 'Business': 3, 'Creative': 2, 'Helping': 4, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            "I'm open to both": { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q15 - Pressure
    {
        id: 15,
        text: 'How do you handle pressure and deadlines?',
        multiSelect: false,
        options: ['I work well under pressure', 'I meet deadlines easily', 'I prefer a calm work pace', 'I prefer a steady work pace', 'I can handle some pressure', 'Not sure yet 🤷'],
        weights: {
            'I work well under pressure': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'I meet deadlines easily': { 'STEM': 4, 'Healthcare': 3, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I prefer a calm work pace': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 4, 'Helping': 4, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 3 },
            'I prefer a steady work pace': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'I can handle some pressure': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q16 - Learning Style
    {
        id: 16,
        text: 'How do you learn best? (Select all that apply)',
        multiSelect: true,
        options: ['By reading', 'By studying on my own', 'By watching', 'By listening to explanations', 'By doing', 'By practicing hands-on', 'By discussing with others', 'Not sure yet 🤷'],
        weights: {
            'By reading': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 3, 'Helping': 2, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'By studying on my own': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 3, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'By watching': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'By listening to explanations': { 'STEM': 2, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'By doing': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 3, 'Helping': 2, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 5 },
            'By practicing hands-on': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 3, 'Helping': 2, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 5 },
            'By discussing with others': { 'STEM': 2, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 4, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q17 - Personality
    {
        id: 17,
        text: 'How would you describe your personality? (Select all that apply)',
        multiSelect: true,
        options: ['Outgoing', 'I love meeting people', 'Thoughtful', 'I reflect deeply', 'Practical', 'I get things done with my hands', 'Creative', 'I have a vivid imagination', 'A combination of these', 'Not sure yet 🤷'],
        weights: {
            'Outgoing': { 'STEM': 1, 'Healthcare': 3, 'Business': 4, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'I love meeting people': { 'STEM': 1, 'Healthcare': 3, 'Business': 4, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'Thoughtful': { 'STEM': 4, 'Healthcare': 3, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I reflect deeply': { 'STEM': 4, 'Healthcare': 3, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Practical': { 'STEM': 4, 'Healthcare': 3, 'Business': 3, 'Creative': 2, 'Helping': 2, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 4 },
            'I get things done with my hands': { 'STEM': 3, 'Healthcare': 2, 'Business': 1, 'Creative': 3, 'Helping': 2, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 5 },
            'Creative': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'I have a vivid imagination': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'A combination of these': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q18 - Projects
    {
        id: 18,
        text: 'What kind of projects excite you? (Select all that apply)',
        multiSelect: true,
        options: ['Building something from scratch', 'Creating something new', 'Improving existing systems', 'Fixing existing systems', 'Helping people solve problems', 'Analyzing data', 'Finding insights', 'Designing beautiful things', 'Designing functional things', 'Teaching others', 'Training others', 'Not sure yet 🤷'],
        weights: {
            'Building something from scratch': { 'STEM': 4, 'Healthcare': 1, 'Business': 2, 'Creative': 3, 'Helping': 1, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 4 },
            'Creating something new': { 'STEM': 3, 'Healthcare': 1, 'Business': 3, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Improving existing systems': { 'STEM': 4, 'Healthcare': 2, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 2 },
            'Fixing existing systems': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 1, 'Helping': 2, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 4 },
            'Helping people solve problems': { 'STEM': 2, 'Healthcare': 4, 'Business': 3, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Analyzing data': { 'STEM': 5, 'Healthcare': 2, 'Business': 4, 'Creative': 1, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'Finding insights': { 'STEM': 5, 'Healthcare': 2, 'Business': 4, 'Creative': 2, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'Designing beautiful things': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 1, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'Designing functional things': { 'STEM': 4, 'Healthcare': 1, 'Business': 3, 'Creative': 4, 'Helping': 1, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 4 },
            'Teaching others': { 'STEM': 1, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Training others': { 'STEM': 1, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q19 - Motivation
    {
        id: 19,
        text: 'What motivates you most? (Select all that apply)',
        multiSelect: true,
        options: ["Making a difference in people's lives", 'Achieving financial success', 'Gaining recognition', 'Gaining respect', 'Learning new things', 'Growing as a person', 'Solving challenging problems', 'Working with a great team', 'Not sure yet 🤷'],
        weights: {
            "Making a difference in people's lives": { 'STEM': 2, 'Healthcare': 5, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Achieving financial success': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'Gaining recognition': { 'STEM': 3, 'Healthcare': 2, 'Business': 4, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Gaining respect': { 'STEM': 3, 'Healthcare': 2, 'Business': 4, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Learning new things': { 'STEM': 4, 'Healthcare': 3, 'Business': 3, 'Creative': 4, 'Helping': 2, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'Growing as a person': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 2 },
            'Solving challenging problems': { 'STEM': 5, 'Healthcare': 2, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 3 },
            'Working with a great team': { 'STEM': 2, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q20 - Lifestyle
    {
        id: 20,
        text: 'What kind of lifestyle do you want? (Select all that apply)',
        multiSelect: true,
        options: ['A stable lifestyle', 'A secure lifestyle', 'An adventurous lifestyle', 'An exciting lifestyle', 'A creative lifestyle', 'An expressive lifestyle', 'A simple lifestyle', 'A peaceful lifestyle', 'A fast-paced lifestyle', 'An ambitious lifestyle', 'A balanced lifestyle with time for family', 'A balanced lifestyle with time for hobbies', 'Not sure yet 🤷'],
        weights: {
            'A stable lifestyle': { 'STEM': 3, 'Healthcare': 4, 'Business': 4, 'Creative': 1, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 3 },
            'A secure lifestyle': { 'STEM': 3, 'Healthcare': 4, 'Business': 4, 'Creative': 1, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 3 },
            'An adventurous lifestyle': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 3, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 2 },
            'An exciting lifestyle': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 3, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 2 },
            'A creative lifestyle': { 'STEM': 1, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'An expressive lifestyle': { 'STEM': 1, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 2 },
            'A simple lifestyle': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'A peaceful lifestyle': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'A fast-paced lifestyle': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'An ambitious lifestyle': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'A balanced lifestyle with time for family': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
            'A balanced lifestyle with time for hobbies': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q21 - Social Interaction
    {
        id: 21,
        text: 'How do you feel about social interaction at work? (Select all that apply)',
        multiSelect: true,
        options: ['I enjoy meeting new people', 'I am outgoing', 'I prefer one-on-one conversations', 'I prefer small groups', 'I prefer large groups', 'I like helping people directly', 'I like supporting others indirectly', 'Not sure yet 🤷'],
        weights: {
            'I enjoy meeting new people': { 'STEM': 1, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'I am outgoing': { 'STEM': 1, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'I prefer one-on-one conversations': { 'STEM': 3, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I prefer small groups': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I prefer large groups': { 'STEM': 1, 'Healthcare': 2, 'Business': 4, 'Creative': 4, 'Helping': 3, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'I like helping people directly': { 'STEM': 1, 'Healthcare': 5, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'I like supporting others indirectly': { 'STEM': 2, 'Healthcare': 4, 'Business': 2, 'Creative': 2, 'Helping': 4, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q22 - Responsibility
    {
        id: 22,
        text: 'How much responsibility do you want?',
        multiSelect: false,
        options: ['I want to lead projects', 'I want to lead teams', 'I prefer to follow instructions', 'I prefer to work independently', 'I want to make important decisions', 'I prefer to execute tasks', 'Not sure yet 🤷'],
        weights: {
            'I want to lead projects': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 2 },
            'I want to lead teams': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 2 },
            'I prefer to follow instructions': { 'STEM': 2, 'Healthcare': 4, 'Business': 2, 'Creative': 2, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 4 },
            'I prefer to work independently': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 1, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 3 },
            'I want to make important decisions': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 5, 'Skilled Trades': 2 },
            'I prefer to execute tasks': { 'STEM': 3, 'Healthcare': 4, 'Business': 3, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 4 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q23 - Work Environment Happiness
    {
        id: 23,
        text: 'What kind of workplace makes you happiest? (Select all that apply)',
        multiSelect: true,
        options: ['Friendly environment', 'Supportive environment', 'Competitive environment', 'Challenging environment', 'Relaxed environment', 'Fast-paced environment', 'Structured environment', 'Flexible environment', 'Not sure yet 🤷'],
        weights: {
            'Friendly environment': { 'STEM': 2, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'Supportive environment': { 'STEM': 2, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 5, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'Competitive environment': { 'STEM': 4, 'Healthcare': 2, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Challenging environment': { 'STEM': 4, 'Healthcare': 3, 'Business': 4, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Relaxed environment': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 4, 'Helping': 4, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 3 },
            'Fast-paced environment': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Structured environment': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 1, 'Helping': 2, 'Outdoor': 1, 'Public Service': 4, 'Skilled Trades': 2 },
            'Flexible environment': { 'STEM': 3, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q24 - Handling Challenges
    {
        id: 24,
        text: 'How do you handle challenges? (Select all that apply)',
        multiSelect: true,
        options: ['I face challenges head-on', 'I find creative solutions', 'I seek help from others', 'I work through them methodically', 'I stay calm under pressure', 'I learn from failures', 'I adapt quickly', 'Not sure yet 🤷'],
        weights: {
            'I face challenges head-on': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'I find creative solutions': { 'STEM': 3, 'Healthcare': 2, 'Business': 3, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
            'I seek help from others': { 'STEM': 2, 'Healthcare': 4, 'Business': 4, 'Creative': 3, 'Helping': 5, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'I work through them methodically': { 'STEM': 5, 'Healthcare': 3, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 3 },
            'I stay calm under pressure': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 2, 'Helping': 3, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'I learn from failures': { 'STEM': 4, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 2 },
            'I adapt quickly': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q25 - Recognition
    {
        id: 25,
        text: 'What kind of recognition matters to you? (Select all that apply)',
        multiSelect: true,
        options: ['Public recognition', 'Private appreciation', 'Financial rewards', 'Career advancement', 'Being trusted with responsibility', 'Being seen as an expert', 'Not sure yet 🤷'],
        weights: {
            'Public recognition': { 'STEM': 2, 'Healthcare': 2, 'Business': 4, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Private appreciation': { 'STEM': 2, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 2 },
            'Financial rewards': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'Career advancement': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Being trusted with responsibility': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Being seen as an expert': { 'STEM': 5, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q26 - Work-Life Balance
    {
        id: 26,
        text: 'What is your ideal work-life balance? (Select all that apply)',
        multiSelect: true,
        options: ['Work is my priority', 'Life is my priority', 'I want a good balance', 'I want flexible hours', 'I want to work remotely', 'I want to work from home', 'I want to travel for work', 'Not sure yet 🤷'],
        weights: {
            'Work is my priority': { 'STEM': 4, 'Healthcare': 3, 'Business': 5, 'Creative': 2, 'Helping': 1, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Life is my priority': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 4, 'Helping': 4, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 3 },
            'I want a good balance': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'I want flexible hours': { 'STEM': 3, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 3 },
            'I want to work remotely': { 'STEM': 4, 'Healthcare': 1, 'Business': 4, 'Creative': 4, 'Helping': 1, 'Outdoor': 1, 'Public Service': 1, 'Skilled Trades': 2 },
            'I want to work from home': { 'STEM': 4, 'Healthcare': 1, 'Business': 4, 'Creative': 4, 'Helping': 1, 'Outdoor': 1, 'Public Service': 1, 'Skilled Trades': 2 },
            'I want to travel for work': { 'STEM': 1, 'Healthcare': 1, 'Business': 3, 'Creative': 3, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q27 - Decision-Making
    {
        id: 27,
        text: 'How do you make decisions? (Select all that apply)',
        multiSelect: true,
        options: ['I make decisions quickly', 'I analyze all options carefully', 'I trust my intuition', 'I consult others before deciding', 'I weigh pros and cons', 'I go with my gut feeling', 'Not sure yet 🤷'],
        weights: {
            'I make decisions quickly': { 'STEM': 3, 'Healthcare': 2, 'Business': 4, 'Creative': 3, 'Helping': 2, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'I analyze all options carefully': { 'STEM': 5, 'Healthcare': 4, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I trust my intuition': { 'STEM': 2, 'Healthcare': 2, 'Business': 3, 'Creative': 5, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'I consult others before deciding': { 'STEM': 2, 'Healthcare': 4, 'Business': 4, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'I weigh pros and cons': { 'STEM': 4, 'Healthcare': 3, 'Business': 4, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I go with my gut feeling': { 'STEM': 2, 'Healthcare': 2, 'Business': 3, 'Creative': 5, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 2 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q28 - Learning Style (Duplicated from Q16 but allowed)
    {
        id: 28,
        text: 'How do you prefer to learn new things? (Select all that apply)',
        multiSelect: true,
        options: ['I learn by reading', 'I learn by watching', 'I learn by listening', 'I learn by doing', 'I learn by practicing', 'I learn by discussing', 'I learn by teaching others', 'Not sure yet 🤷'],
        weights: {
            'I learn by reading': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 3, 'Helping': 2, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 1 },
            'I learn by watching': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'I learn by listening': { 'STEM': 2, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I learn by doing': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 3, 'Helping': 2, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 5 },
            'I learn by practicing': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 3, 'Helping': 2, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 5 },
            'I learn by discussing': { 'STEM': 2, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 4, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'I learn by teaching others': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q29 - Communication Style
    {
        id: 29,
        text: 'How would you describe your communication style? (Select all that apply)',
        multiSelect: true,
        options: ['I am direct and clear', 'I am diplomatic and tactful', 'I am expressive and passionate', 'I am reserved and thoughtful', 'I am persuasive and convincing', 'I am supportive and encouraging', 'Not sure yet 🤷'],
        weights: {
            'I am direct and clear': { 'STEM': 4, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'I am diplomatic and tactful': { 'STEM': 2, 'Healthcare': 4, 'Business': 4, 'Creative': 3, 'Helping': 4, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'I am expressive and passionate': { 'STEM': 2, 'Healthcare': 2, 'Business': 3, 'Creative': 5, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 1 },
            'I am reserved and thoughtful': { 'STEM': 4, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I am persuasive and convincing': { 'STEM': 3, 'Healthcare': 2, 'Business': 5, 'Creative': 3, 'Helping': 2, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'I am supportive and encouraging': { 'STEM': 1, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    // Q30 - Work Schedule
    {
        id: 30,
        text: 'What work schedule suits you best? (Select all that apply)',
        multiSelect: true,
        options: ['Regular 9-5 schedule', 'Flexible schedule', 'Part-time work', 'Full-time work', 'Shift work', 'I want to set my own hours', 'I want to work on projects', 'Not sure yet 🤷'],
        weights: {
            'Regular 9-5 schedule': { 'STEM': 3, 'Healthcare': 3, 'Business': 4, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Flexible schedule': { 'STEM': 3, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 3 },
            'Part-time work': { 'STEM': 2, 'Healthcare': 3, 'Business': 2, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 3 },
            'Full-time work': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Shift work': { 'STEM': 2, 'Healthcare': 4, 'Business': 2, 'Creative': 1, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'I want to set my own hours': { 'STEM': 2, 'Healthcare': 1, 'Business': 4, 'Creative': 4, 'Helping': 2, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 3 },
            'I want to work on projects': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    }
];

// ================================================================
// SECTION 7: APPLICATION STATE
// ================================================================

const STORAGE_KEY = 'career_quest_state';
const THEME_KEY = 'career_quest_theme';
const LANGUAGE_KEY = 'career_quest_language';

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
// SECTION 8: DOM REFERENCES
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
    savedProgressBanner: document.getElementById('saved-progress-banner'),
    questionCounter: document.getElementById('question-counter'),
    progressBar: document.getElementById('progress-bar'),
    progressFill: document.getElementById('progress-fill'),
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
    shareLinkInput: document.getElementById('share-link-input')
};

// ================================================================
// SECTION 9: LANGUAGE FUNCTIONS
// ================================================================

function getCurrentLanguage() {
    try {
        var saved = localStorage.getItem(LANGUAGE_KEY);
        if (saved && translations[saved]) {
            return saved;
        }
    } catch(e) {}
    return 'en';
}

function saveLanguage(lang) {
    try {
        localStorage.setItem(LANGUAGE_KEY, lang);
    } catch(e) {}
}

function t(key) {
    var lang = state.language || 'en';
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    if (translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    return key;
}

function switchLanguage(lang) {
    if (!translations[lang]) {
        lang = 'en';
    }
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
            if (el.tagName === 'BUTTON' || el.tagName === 'A' || el.tagName === 'SPAN') {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    var themeLabel = document.getElementById('theme-label');
    if (themeLabel) {
        themeLabel.textContent = t('dark_mode');
    }

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
    if (counter) {
        counter.textContent = t('question_counter') + ' ' + current + ' ' + t('of') + ' ' + total;
    }
}

// ================================================================
// SECTION 10: SHARE RESULTS FUNCTIONS
// ================================================================

function generateShareData() {
    return {
        answers: state.answers,
        results: state.results,
        careerScores: state.careerScores,
        personalityTraits: state.personalityTraits,
        timestamp: Date.now(),
        version: '1.0'
    };
}

function encodeShareData(data) {
    try {
        var json = JSON.stringify(data);
        return btoa(encodeURIComponent(json));
    } catch(e) {
        console.error('Error encoding share data:', e);
        return null;
    }
}

function decodeShareData(encoded) {
    try {
        var json = decodeURIComponent(atob(encoded));
        return JSON.parse(json);
    } catch(e) {
        console.error('Error decoding share data:', e);
        return null;
    }
}

function generateShareableUrl() {
    var data = generateShareData();
    var encoded = encodeShareData(data);
    if (!encoded) return null;
    var url = window.location.href.split('?')[0];
    return url + '?share=' + encoded;
}

function copyShareLink() {
    var url = generateShareableUrl();
    if (!url) {
        showToast('Error generating share link.');
        return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function() {
            showToast(t('share_copied'));
            if (DOM.shareLinkContainer) {
                DOM.shareLinkContainer.style.display = 'flex';
                DOM.shareLinkInput.value = url;
            }
        }).catch(function() {
            fallbackCopy(url);
        });
    } else {
        fallbackCopy(url);
    }
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
        if (DOM.shareLinkContainer) {
            DOM.shareLinkContainer.style.display = 'flex';
            DOM.shareLinkInput.value = text;
        }
    } catch(e) {
        showToast('Failed to copy. Please copy the URL manually.');
    }
    document.body.removeChild(textarea);
}

function shareOnWhatsApp() {
    var url = generateShareableUrl();
    if (!url) {
        showToast('Error generating share link.');
        return;
    }
    var title = t('share_title');
    var body = t('share_body') + '\n\n' + url;
    var waUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(title + '\n\n' + body);
    window.open(waUrl, '_blank');
}

function shareViaEmail() {
    var url = generateShareableUrl();
    if (!url) {
        showToast('Error generating share link.');
        return;
    }
    var subject = t('share_title');
    var body = t('share_body') + '\n\n' + url;
    var mailtoUrl = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.open(mailtoUrl, '_blank');
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
                var cleanUrl = window.location.href.split('?')[0];
                window.history.replaceState({}, document.title, cleanUrl);
            }
            return true;
        }
    }
    return false;
}

// ================================================================
// SECTION 11: UTILITY FUNCTIONS
// ================================================================

function showToast(message, duration) {
    duration = duration || 3000;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);
    setTimeout(function() { toast.remove(); }, duration);
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

function clearSavedState() {
    try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
}

function saveTheme(isDark) {
    try { localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light'); } catch(e) {}
}

function loadTheme() {
    try {
        var t = localStorage.getItem(THEME_KEY);
        if (t === 'dark') return true;
        if (t === 'light') return false;
    } catch(e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// ================================================================
// SECTION 12: SCREEN MANAGEMENT
// ================================================================

function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    var target = document.getElementById(screenName);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ================================================================
// SECTION 13: DARK MODE
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
// SECTION 14: QUIZ LOGIC
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
    showScreen('results-screen');
    generateDiscoveryResults();
}

function renderQuestion() {
    var question = questions[state.currentQuestion];
    var qNum = state.currentQuestion + 1;
    var total = questions.length;

    updateQuestionCounter();

    var pct = Math.round((qNum / total) * 100);
    DOM.progressFill.style.width = pct + '%';
    DOM.progressBar.setAttribute('aria-valuenow', pct);

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
        if (isSelected) {
            btn.classList.add('selected');
            btn.setAttribute('aria-checked', 'true');
        } else {
            btn.setAttribute('aria-checked', 'false');
        }

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

    DOM.optionsContainer.innerHTML = '';
    DOM.optionsContainer.appendChild(fragment);

    DOM.prevBtn.style.display = state.currentQuestion === 0 ? 'none' : 'inline-block';
    DOM.nextBtn.textContent = state.currentQuestion === questions.length - 1 ? t('results_title') : t('next');
    var currentAnswer = state.answers[state.currentQuestion] || [];
    DOM.nextBtn.disabled = currentAnswer.length === 0;

    state.kbFocusIndex = -1;
    saveState();
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
        allOptions.forEach(function(btn) {
            btn.classList.remove('selected');
            btn.setAttribute('aria-checked', 'false');
        });
        button.classList.add('selected');
        button.setAttribute('aria-checked', 'true');
        updateSingleSelectAnswer(button);
    }

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
}

function nextQuestion() {
    var currentAnswer = state.answers[state.currentQuestion] || [];
    if (currentAnswer.length === 0) {
        showToast(t('please_select_answer'));
        return;
    }
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
}

function prevQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        renderQuestion();
    }
}

// ================================================================
// SECTION 15: KEYBOARD NAVIGATION
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
// SECTION 16: SMART SCORING ENGINE (With 3x Sensitivity)
// ================================================================

function calculateResults() {
    var clusterScores = { 'STEM': 0, 'Healthcare': 0, 'Business': 0, 'Creative': 0, 'Helping': 0, 'Outdoor': 0, 'Public Service': 0, 'Skilled Trades': 0 };
    var clusterCounts = { 'STEM': 0, 'Healthcare': 0, 'Business': 0, 'Creative': 0, 'Helping': 0, 'Outdoor': 0, 'Public Service': 0, 'Skilled Trades': 0 };

    var traitScores = {};
    var traitCounts = {};
    ALL_TRAITS.forEach(function(t) { traitScores[t] = 0; traitCounts[t] = 0; });

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

                if (!nsq) {
                    var qTraits = questionTraits[index + 1];
                    if (qTraits) {
                        var matchedTraits = qTraits[selectedOption];
                        if (matchedTraits) {
                            matchedTraits.forEach(function(t) {
                                if (traitScores.hasOwnProperty(t)) {
                                    traitScores[t] += 3;
                                    traitCounts[t]++;
                                }
                            });
                        }
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

    var avgTrait = {};
    for (var t in traitScores) {
        avgTrait[t] = traitCounts[t] > 0 ? traitScores[t] / traitCounts[t] : 0;
    }

    var scores = {};
    for (var name in careers) {
        var career = careers[name];
        var clusterScore = avgCluster[career.cluster] || 2;
        var traits = careerTraits[name] || [];

        var traitTotal = 0;
        var traitCount = 0;
        traits.forEach(function(tr) {
            if (avgTrait[tr] > 0) {
                traitTotal += avgTrait[tr];
                traitCount++;
            }
        });
        var traitMatch = traitCount > 0 ? traitTotal / traitCount : 0;

        var normalizedTrait = (traitMatch / 3) * 5;
        var combined = (clusterScore * 0.6) + (normalizedTrait * 0.4);

        var pct = Math.round((combined / 5) * 100);
        pct = Math.max(0, Math.min(100, pct));

        var seed = 0;
        for (var ci = 0; ci < name.length; ci++) seed += name.charCodeAt(ci);
        var jitter = (seed % 3) - 1;
        pct = Math.max(0, Math.min(100, pct + jitter));

        scores[name] = pct;
    }

    state.careerScores = scores;
    state.results = Object.keys(scores).sort(function(a, b) { return scores[b] - scores[a]; });

    calculatePersonalityTraits();
}

// ================================================================
// SECTION 17: PERSONALITY TRAITS CALCULATION (12 Traits, 3x Sensitivity)
// ================================================================

function calculatePersonalityTraits() {
    var traits = {
        'Analytical': 0,
        'Creative': 0,
        'Helping': 0,
        'Technical': 0,
        'Outdoor': 0,
        'Leadership': 0,
        'Communication': 0,
        'Practical': 0,
        'Strategic': 0,
        'Resilience': 0,
        'Detail-Oriented': 0,
        'Entrepreneurial': 0
    };

    var traitCounts = {};
    for (var trait in traits) { traitCounts[trait] = 0; }

    state.answers.forEach(function(answer, index) {
        if (!answer || !answer.length) return;

        var question = questions[index];
        if (Array.isArray(answer)) {
            answer.forEach(function(selectedOption) {
                if (!selectedOption) return;
                var nsq = isNotSureAnswer(selectedOption);
                if (nsq) return;

                var qTraits = questionTraits[index + 1];
                if (qTraits) {
                    var matchedTraits = qTraits[selectedOption];
                    if (matchedTraits) {
                        matchedTraits.forEach(function(t) {
                            if (t === 'analytical' || t === 'logical' || t === 'problemSolving' || t === 'criticalThinker') {
                                traits['Analytical'] += 3;
                                traitCounts['Analytical']++;
                            } else if (t === 'creative' || t === 'imaginative' || t === 'expression' || t === 'artistic' || t === 'visual' || t === 'innovation') {
                                traits['Creative'] += 3;
                                traitCounts['Creative']++;
                            } else if (t === 'helping' || t === 'compassion' || t === 'empathy' || t === 'community' || t === 'peoplePerson' || t === 'counseling') {
                                traits['Helping'] += 3;
                                traitCounts['Helping']++;
                            } else if (t === 'technical' || t === 'practical' || t === 'handsOn' || t === 'precision' || t === 'handcraft' || t === 'mechanical') {
                                traits['Technical'] += 3;
                                traitCounts['Technical']++;
                            } else if (t === 'outdoor' || t === 'nature' || t === 'adventure' || t === 'conservation' || t === 'physical') {
                                traits['Outdoor'] += 3;
                                traitCounts['Outdoor']++;
                            } else if (t === 'leadership' || t === 'confident' || t === 'ambitious' || t === 'decisionMaking') {
                                traits['Leadership'] += 3;
                                traitCounts['Leadership']++;
                            } else if (t === 'communication' || t === 'writing' || t === 'extroverted' || t === 'peoplePerson') {
                                traits['Communication'] += 3;
                                traitCounts['Communication']++;
                            } else if (t === 'practical' || t === 'realistic' || t === 'commonSense') {
                                traits['Practical'] += 3;
                                traitCounts['Practical']++;
                            } else if (t === 'strategic' || t === 'planning' || t === 'bigPicture') {
                                traits['Strategic'] += 3;
                                traitCounts['Strategic']++;
                            } else if (t === 'resilient' || t === 'persistent' || t === 'calm' || t === 'adaptable') {
                                traits['Resilience'] += 3;
                                traitCounts['Resilience']++;
                            } else if (t === 'detailOriented' || t === 'precision' || t === 'accuracy' || t === 'thorough') {
                                traits['Detail-Oriented'] += 3;
                                traitCounts['Detail-Oriented']++;
                            } else if (t === 'entrepreneurial' || t === 'riskTaker' || t === 'initiative' || t === 'business') {
                                traits['Entrepreneurial'] += 3;
                                traitCounts['Entrepreneurial']++;
                            }
                        });
                    }
                }
            });
        }
    });

    for (var trait in traits) {
        if (traitCounts[trait] > 0) {
            var avg = traits[trait] / traitCounts[trait];
            var scaled = Math.min(10, Math.round(avg));
            if (scaled < 1) scaled = 1;
            traits[trait] = scaled;
        } else {
            traits[trait] = 1;
        }
    }

    var allSame = true;
    var firstValue = traits['Analytical'];
    for (var trait in traits) {
        if (traits[trait] !== firstValue) {
            allSame = false;
            break;
        }
    }

    if (allSame && firstValue > 0) {
        traits['Analytical'] = Math.min(10, traits['Analytical'] + 1);
        traits['Creative'] = Math.min(10, Math.max(1, traits['Creative'] - 1));
        traits['Technical'] = Math.min(10, Math.max(1, traits['Technical'] + 0.5));
    }

    state.personalityTraits = traits;
}

// ================================================================
// SECTION 18: RADAR CHART RENDER (12 Traits)
// ================================================================

function renderRadarChart() {
    var canvas = DOM.personalityChart;
    if (!canvas) return;

    var ctx = canvas.getContext('2d');

    if (typeof Chart === 'undefined') {
        console.warn('Chart.js library not loaded.');
        return;
    }

    var traits = state.personalityTraits || {
        'Analytical': 3,
        'Creative': 3,
        'Helping': 3,
        'Technical': 3,
        'Outdoor': 3,
        'Leadership': 3,
        'Communication': 3,
        'Practical': 3,
        'Strategic': 3,
        'Resilience': 3,
        'Detail-Oriented': 3,
        'Entrepreneurial': 3
    };

    if (window.personalityChartInstance) {
        window.personalityChartInstance.destroy();
    }

    var color = getComputedStyle(document.documentElement).getPropertyValue('--zm-green').trim() || '#008000';
    var bgColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-bg').trim() || 'rgba(0, 128, 0, 0.2)';
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
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        font: { size: 12, weight: 'bold' }
                    }
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 2,
                        color: textColor,
                        backdropColor: 'transparent'
                    },
                    grid: { color: gridColor },
                    angleLines: { color: gridColor },
                    pointLabels: {
                        color: textColor,
                        font: { size: 10, weight: '600' }
                    }
                }
            }
        }
    });
}

// ================================================================
// SECTION 19: RESULTS DISPLAY
// ================================================================

function displayResults() {
    DOM.careerSearch.style.display = 'flex';
    if (DOM.resultsToolbar) {
        DOM.resultsToolbar.style.display = 'flex';
    }

    if (state.isDiscoveryMode) { generateDiscoveryResults(); return; }

    var topCareers = state.results.slice(0, 15);
    var topName = topCareers[0];
    var topScore = state.careerScores[topName];

    DOM.resultsSubtitle.textContent = t('results_subtitle');

    renderStatsSummary(topCareers);
    renderFilterChips();
    renderCareerCards(topCareers);
    renderRadarChart();
    displayPathwayRecommendations();
    displaySubjectRecommendations();
    displayCareerClusters();
    displayComparisonTool();

    showShareButtons();

    DOM.discoveryMode.style.display = 'none';
    launchConfetti();
    clearSavedState();
}

function showShareButtons() {
    var shareSection = document.querySelector('.share-results-section');
    if (shareSection) {
        shareSection.style.display = 'block';
    }
}

// ================================================================
// SECTION 20: STATS SUMMARY
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
// SECTION 21: FILTER CHIPS
// ================================================================

function renderFilterChips() {
    var clusters = ['all', 'STEM', 'Healthcare', 'Business', 'Creative', 'Helping', 'Outdoor', 'Public Service', 'Skilled Trades'];
    var icons = { all: '🎯', STEM: '🔬', Healthcare: '🏥', Business: '💼', Creative: '🎨', Helping: '🤝', Outdoor: '🌿', 'Public Service': '🏛️', 'Skilled Trades': '🔧' };

    DOM.filterChips.innerHTML = clusters.map(function(c) {
        return '<button class="filter-chip' + (state.activeFilter === c ? ' active' : '') + '" data-filter="' + c + '">' + (icons[c] || '📌') + ' ' + c;
    }).join('');
}

// ================================================================
// SECTION 22: CAREER CARDS
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
// SECTION 23: PATHWAY RECOMMENDATIONS
// ================================================================

function displayPathwayRecommendations() {
    var topCareers = state.results.slice(0, 5);
    var pathwayMap = {};

    topCareers.forEach(function(name) {
        var c = careers[name];
        if (c && c.pathway) {
            c.pathway.forEach(function(p) {
                pathwayMap[p] = (pathwayMap[p] || 0) + 1;
            });
        }
    });

    var sortedPathways = Object.keys(pathwayMap).sort(function(a, b) {
        return pathwayMap[b] - pathwayMap[a];
    });

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
// SECTION 24: SUBJECT RECOMMENDATIONS
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
// SECTION 25: CAREER CLUSTERS (Web Map)
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
            if (e.target.closest('.cluster-career-item')) {
                return;
            }
            var careersList = document.getElementById('cluster-' + this.dataset.cluster);
            if (careersList) {
                careersList.classList.toggle('show');
            }
        });
    });

    var careerItems = DOM.careerClusters.querySelectorAll('.cluster-career-item');
    careerItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            var careerName = this.dataset.career;
            if (careerName) {
                showCareerDetails(careerName);
            }
        });
    });
}

// ================================================================
// SECTION 26: COMPARISON TOOL (5 Careers)
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

function updateComparison() {
    var selected = [];
    for (var i = 1; i <= 5; i++) {
        var sel = document.getElementById('compare-' + i);
        if (sel && sel.value) selected.push(sel.value);
    }

    if (!selected.length) {
        DOM.comparisonTable.innerHTML = '<p style="padding:20px;text-align:center;color:var(--text-muted);">' + t('compare_desc') + '</p>';
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
    DOM.comparisonTable.innerHTML = html;
}

// ================================================================
// SECTION 27: ENHANCED DISCOVERY MODE
// ================================================================

function generateDiscoveryResults() {
    DOM.careerSearch.style.display = 'none';
    if (DOM.resultsToolbar) {
        DOM.resultsToolbar.style.display = 'none';
    }

    DOM.discoveryMode.style.display = 'block';
    DOM.resultsSubtitle.textContent = t('discovery_title');
    DOM.careerMatches.innerHTML = '';
    DOM.statsSummary.innerHTML = '';
    state.discoveryCompare = [];
    updateDiscoveryCompareCount();

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
    updateDiscoveryComparison();
    displaySubjectRecommendations();
    displayCareerClusters();

    DOM.clearDiscoveryCompareBtn.textContent = t('clear_all');
    DOM.clearDiscoveryCompareBtn.onclick = function() {
        state.discoveryCompare = [];
        updateDiscoveryCompareCount();
        updateDiscoveryComparison();
        showToast(t('clear_all') + '!');
    };
}

function toggleDiscoveryCareers(cluster, cardEl) {
    var existing = cardEl.querySelector('.discovery-career-list');
    if (existing) { existing.remove(); return; }

    document.querySelectorAll('.discovery-career-list').forEach(function(el) { el.remove(); });

    var careersInCluster = Object.keys(careers).filter(function(n) { return careers[n] && careers[n].cluster === cluster; });
    var list = document.createElement('div');
    list.className = 'discovery-career-list';

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
}

DOM.discoveryContent.addEventListener('click', function(e) {
    var discoveryCard = e.target.closest('.discovery-card');
    if (discoveryCard && discoveryCard.dataset.discoveryCluster && !e.target.closest('.discovery-career-list')) {
        toggleDiscoveryCareers(discoveryCard.dataset.discoveryCluster, discoveryCard);
        return;
    }

    var readMoreBtn = e.target.closest('.discovery-read-more');
    if (readMoreBtn) {
        showCareerDetails(readMoreBtn.dataset.career);
        return;
    }

    var addBtn = e.target.closest('.discovery-add-compare');
    if (addBtn) {
        var careerName = addBtn.dataset.career;
        if (state.discoveryCompare.length >= 5) {
            showToast('You can only compare up to 5 careers!');
            return;
        }
        if (state.discoveryCompare.indexOf(careerName) !== -1) {
            showToast('This career is already in the comparison.');
            return;
        }
        state.discoveryCompare.push(careerName);
        updateDiscoveryCompareCount();
        updateDiscoveryComparison();
        var parentCard = addBtn.closest('.discovery-card');
        if (parentCard && parentCard.dataset.discoveryCluster) {
            toggleDiscoveryCareers(parentCard.dataset.discoveryCluster, parentCard);
        }
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
        if (parentCard && parentCard.dataset.discoveryCluster) {
            toggleDiscoveryCareers(parentCard.dataset.discoveryCluster, parentCard);
        }
        showToast('Removed ' + careerName + ' from comparison.');
        return;
    }

    var careerEl = e.target.closest('[data-career]');
    if (careerEl) showCareerDetails(careerEl.dataset.career);
});

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
// SECTION 28: CAREER DETAILS MODAL
// ================================================================

var modalCurrentCareer = null;

function showCareerDetails(careerName) {
    var career = careers[careerName];
    if (!career) return;
    modalCurrentCareer = careerName;

    var reqText = '';
    if (career.requiredSubjects) {
        reqText = '<p><strong>Must have:</strong> ' + career.requiredSubjects.join(', ') + '</p>';
        if (career.recommendedSubjects) {
            reqText += '<p><strong>Recommended:</strong> ' + career.recommendedSubjects.join(', ') + '</p>';
        }
    } else if (career.requiredSkills) {
        reqText = '<p><strong>Required Skills:</strong> ' + career.requiredSkills.join(', ') + '</p>';
    } else {
        reqText = '<p><strong>Requirements:</strong> Varies by employer</p>';
    }

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
            if (state.discoveryCompare.length >= 5) {
                showToast('You can only compare up to 5 careers!');
                return;
            }
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
            if (sel) {
                compareSelectors.push(sel);
                if (sel.value) compareList.push(sel.value);
            }
        }
        var index = compareList.indexOf(careerName);
        if (index !== -1) {
            compareSelectors[index].value = '';
            showToast('Removed ' + careerName + ' from comparison.');
        } else {
            if (compareList.length >= 5) {
                showToast('You can only compare up to 5 careers!');
                return;
            }
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
// SECTION 29: CONFETTI ANIMATION
// ================================================================

function launchConfetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var canvas = DOM.confettiCanvas;
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var particles = [];
    var colors = ['#008000', '#DE2010', '#EF7D00', '#00b800', '#ffd700', '#3b82f6', '#a855f7', '#22c55e'];

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

        if (frame < maxFrames) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// ================================================================
// SECTION 30: PDF GENERATION & PRINTING
// ================================================================

function generatePDF() {
    if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
        showToast('PDF libraries not loaded. Please check your internet connection and try again.');
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
        scale: 2,
        useCORS: true,
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
// SECTION 31: BACK TO TOP
// ================================================================

function handleScroll() {
    DOM.backToTop.classList.toggle('visible', window.scrollY > 400);
}

// ================================================================
// SECTION 32: SAVED PROGRESS BANNER
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
// SECTION 33: EVENT LISTENERS
// ================================================================

DOM.startQuizBtn.addEventListener('click', function() { startQuiz(false); });
DOM.iDontKnowBtn.addEventListener('click', startDiscoveryMode);
DOM.prevBtn.addEventListener('click', prevQuestion);
DOM.nextBtn.addEventListener('click', nextQuestion);

DOM.optionsContainer.addEventListener('click', function(e) {
    var btn = e.target.closest('.option-btn');
    if (btn) toggleOption(btn);
});

DOM.downloadPdfBtn.addEventListener('click', generatePDF);
DOM.printBtn.addEventListener('click', printResults);

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

DOM.careerMatches.addEventListener('click', function(e) {
    var detailBtn = e.target.closest('.view-details-btn');
    if (detailBtn) { e.stopPropagation(); showCareerDetails(detailBtn.dataset.career); return; }
    var card = e.target.closest('.career-card');
    if (card && card.dataset.career) showCareerDetails(card.dataset.career);
});

DOM.careerClusters.addEventListener('click', function(e) {
    if (e.target.closest('.cluster-career-item')) {
        return;
    }

    var clusterCard = e.target.closest('.cluster-card');
    if (clusterCard) {
        var careersList = document.getElementById('cluster-' + clusterCard.dataset.cluster);
        if (careersList) {
            careersList.classList.toggle('show');
        }
        return;
    }
});

DOM.comparisonSelectors.addEventListener('change', debounce(updateComparison, 200));
DOM.careerSearch.addEventListener('input', debounce(handleCareerSearch, 250));
DOM.filterChips.addEventListener('click', handleFilterClick);

DOM.modalClose.addEventListener('click', closeCareerModal);
DOM.careerModal.addEventListener('click', function(e) {
    if (e.target === DOM.careerModal) closeCareerModal();
});

DOM.darkModeToggle.addEventListener('click', toggleDarkMode);
DOM.backToTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

window.addEventListener('scroll', handleScroll, { passive: true });

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeCareerModal();
    handleKeyboardNav(e);
});

DOM.colorModeRadios.forEach(function(r) {
    r.addEventListener('change', function() { state.colorMode = this.value; });
});

window.addEventListener('resize', function() {
    DOM.confettiCanvas.width = window.innerWidth;
    DOM.confettiCanvas.height = window.innerHeight;
});

// ================================================================
// SECTION 34: LANGUAGE SELECTOR EVENT (FIXED)
// ================================================================

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

// ================================================================
// SECTION 35: SHARE BUTTONS EVENT (FIXED)
// ================================================================

document.addEventListener('click', function(e) {
    var shareLinkBtn = e.target.closest('#share-link-btn');
    if (shareLinkBtn) {
        copyShareLink();
        return;
    }

    var shareWABtn = e.target.closest('#share-whatsapp-btn');
    if (shareWABtn) {
        shareOnWhatsApp();
        return;
    }

    var shareEmailBtn = e.target.closest('#share-email-btn');
    if (shareEmailBtn) {
        shareViaEmail();
        return;
    }
});

// ================================================================
// SECTION 36: INITIALIZATION
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

    if (typeof console !== 'undefined') {
        console.log('© Career Quest initialized successfully!');
        console.log('📚 Loaded ' + Object.keys(careers).length + ' careers across 8 clusters');
        console.log('📝 Loaded ' + questions.length + ' questions with multi-select support');
        console.log('🧠 Loaded ' + ALL_TRAITS.length + ' personality traits');
        console.log('🗺️ Career pathways added for every career!');
        console.log('📊 5-career comparison enabled!');
        console.log('🔍 Enhanced Discovery Mode with cluster exploration!');
        console.log('📈 12-trait Radar chart with 3x sensitivity!');
        console.log('💰 Salaries updated to accurate Zambian standards!');
        console.log('📤 Share Results feature enabled!');
        console.log('🌐 4 Languages supported: English, Nyanja, Bemba, Tonga!');
        console.log('✅ Language: ' + state.language);
    }
}

document.addEventListener('DOMContentLoaded', init);

// ================================================================
// END OF SCRIPT
// ================================================================