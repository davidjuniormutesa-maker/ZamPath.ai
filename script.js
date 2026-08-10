// ================================================================
// CAREER QUEST - COMPLETE JAVASCRIPT APPLICATION
// ================================================================
// This file contains ALL the logic for the career guidance app:
// - 50+ careers across 8 clusters
// - Multi-select questions (pick multiple answers!)
// - Smart scoring engine (cluster + trait matching)
// - Results display with search and filter
// - PDF generation with color/B&W options
// - Discovery mode for undecided students
// - Dark mode, accessibility, keyboard navigation
// - Career details modal with full information
// ================================================================

// ================================================================
// SECTION 1: CAREER DATABASE
// ================================================================
// This object stores ALL the career information.
// Each career has properties like:
// - cluster: which group it belongs to
// - icon: emoji to represent the career
// - description: what the career is about
// - requiredSubjects: school subjects needed (for academic careers)
// - requiredSkills: practical skills needed (for non-academic careers)
// - recommendedSubjects: helpful but not required
// - institutions: where to study in Zambia
// - salaryLocal: Zambian salary range
// - salaryGlobal: international salary range
// - outlook: job market outlook
// - globalDemand: demand in other countries
// - globalReady: whether the career works internationally
// - countries: which countries need this career
// - scholarships: scholarships for Zambians
// - pathwayAbroad: steps to work abroad
// - story: inspiring Zambian career story
// - careerDay: suggested activity to try
// ================================================================

const careers = {
    // =============================================================
    // STEM CLUSTER - Science, Technology, Engineering, Mathematics
    // =============================================================

    'Mining Engineer': {
        cluster: 'STEM', // Which group this career belongs to
        icon: '⛏️', // Emoji representing the career
        description: 'Design mines, plan extraction operations, ensure worker safety, and manage mining projects in Zambia\'s rich copper and mineral industry.', // What they do
        requiredSubjects: ['Mathematics', 'Physics', 'English'], // Subjects you MUST have
        recommendedSubjects: ['Chemistry', 'Geography'], // Subjects that are helpful
        institutions: ['Copperbelt University (CBU)', 'Zambia Institute of Technology (ZIT)'], // Where to study
        salaryLocal: 'K8,000 - K15,000 per month', // Zambian salary
        salaryGlobal: '$50,000 - $100,000 per year', // International salary
        outlook: '🔥 High Demand', // Job outlook
        globalDemand: 'High', // Demand abroad
        globalReady: true, // Can you work abroad with this?
        countries: ['Australia', 'Canada', 'South Africa', 'Chile'], // Where it's in demand
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'], // Scholarships
        pathwayAbroad: [ // Steps to work abroad
            'Get a degree in Mining Engineering from CBU or UNZA',
            'Gain 2-3 years of experience in the Zambian mining sector',
            'Apply for international certification (e.g., Professional Engineer)',
            'Apply for jobs or postgraduate scholarships abroad'
        ],
        story: 'Meet Mr. Mwansa, a mining engineer from Kitwe who now works in Australia. He started at a local mine, gained experience, and then applied for an international role. His Zambian experience was highly valued!', // Inspiring story
        careerDay: 'Visit a mine or talk to a mining engineer about their work.' // Activity to try.
    },

    'Civil Engineer': {
        cluster: 'STEM',
        icon: '🏗️',
        description: 'Design and supervise construction projects like roads, bridges, buildings, and dams that help develop Zambia\'s infrastructure.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Geography', 'Chemistry'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K7,000 - K12,000 per month',
        salaryGlobal: '$45,000 - $90,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Civil Engineering from a Zambian university',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Gain experience on major Zambian projects',
            'Apply for international roles or further studies'
        ],
        story: 'Mrs. Banda is a civil engineer who worked on the Lusaka-Ndola road project. She later did her Masters in the UK and now works for a global engineering firm.',
        careerDay: 'Visit a construction site and talk to the engineers there.'
    },

    'Software Developer': {
        cluster: 'STEM',
        icon: '💻',
        description: 'Create computer programs, mobile apps, and websites that solve problems for businesses and individuals in Zambia and around the world.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Physics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K5,000 - K10,000 per month',
        salaryGlobal: '$60,000 - $120,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Germany', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'DAAD (Germany)', 'Google Scholarships'],
        pathwayAbroad: [
            'Get a degree in Computer Science or related field',
            'Build a portfolio of projects (apps, websites, etc.)',
            'Contribute to open-source projects',
            'Apply for international jobs or remote positions'
        ],
        story: 'Chanda from Lusaka taught himself coding online. He built apps for local businesses, then landed a remote job with a US company. He now earns in dollars while living in Zambia!',
        careerDay: 'Build a simple website or app using free online resources.'
    },

    'Data Analyst': {
        cluster: 'STEM',
        icon: '📊',
        description: 'Collect, analyze, and interpret data to help organizations make better decisions in business, health, and government.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Statistics'],
        institutions: ['University of Zambia (UNZA)', 'ZCAS University', 'Evelyn Hone College'],
        salaryLocal: 'K4,500 - K8,500 per month',
        salaryGlobal: '$50,000 - $90,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Statistics, Mathematics, or Computer Science',
            'Learn data analysis tools (Python, SQL, Excel)',
            'Build a portfolio of data projects',
            'Apply for international data roles'
        ],
        story: 'Mary from Ndola started as a data entry clerk. She took free online courses in data analysis and now works as a data analyst for a South African company.',
        careerDay: 'Analyze data from your school (e.g., exam results, attendance) and create a chart.'
    },

    'Architect': {
        cluster: 'STEM',
        icon: '🏛️',
        description: 'Design buildings and structures that are functional, safe, and beautiful for Zambia\'s growing urban areas.',
        requiredSubjects: ['Mathematics', 'English', 'Art'],
        recommendedSubjects: ['Physics', 'Geography'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K6,000 - K11,000 per month',
        salaryGlobal: '$45,000 - $85,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Architecture from a Zambian university',
            'Complete professional practice training',
            'Register with the Zambian Institute of Architects',
            'Apply for international roles or further studies'
        ],
        story: 'Mr. Mulenga designed several schools in Lusaka. He later studied sustainable architecture in Germany and now works on eco-friendly projects across Africa.',
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
        salaryGlobal: '$50,000 - $110,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Germany', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Mathematics or Applied Mathematics',
            'Specialize in a field like data science, finance, or cryptography',
            'Gain experience through research or internships',
            'Apply for international roles or postgraduate studies'
        ],
        story: 'Dr. Chisenga studied mathematics at UNZA and later got a scholarship to do her PhD in the UK. She now works as a data scientist for a global tech company.',
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
        salaryGlobal: '$45,000 - $100,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Germany', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in a science field (Biology, Chemistry, Physics)',
            'Participate in research projects or internships',
            'Publish research papers or present at conferences',
            'Apply for international research roles or postgraduate studies'
        ],
        story: 'Dr. Mwansa is a biologist who studies plant diseases affecting Zambian crops. Her research has helped farmers protect their harvests and improve food security.',
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
        salaryGlobal: '$40,000 - $90,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia', 'Germany'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Biology or related field',
            'Specialize in a subfield (microbiology, ecology, genetics)',
            'Gain experience through research or internships',
            'Apply for international research roles or postgraduate studies'
        ],
        story: 'Dr. Katongo studies wildlife in Zambia\'s national parks. His research helps protect endangered species and maintain biodiversity.',
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
        salaryGlobal: '$45,000 - $95,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Germany', 'South Africa', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Chemistry or related field',
            'Specialize in a subfield (analytical, organic, inorganic chemistry)',
            'Gain experience through research or industrial internships',
            'Apply for international roles or postgraduate studies'
        ],
        story: 'Mrs. Banda is a chemist who works for a mining company analyzing mineral samples. Her work ensures the quality and safety of copper exports.',
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
        salaryGlobal: '$35,000 - $75,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with heritage sites'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNESCO Scholarships'],
        pathwayAbroad: [
            'Get a degree in Archaeology or Anthropology',
            'Participate in archaeological digs in Zambia or abroad',
            'Specialize in a specific region or time period',
            'Apply for international research or heritage preservation roles'
        ],
        story: 'Mr. Mulenga has worked on archaeological sites in Zambia, uncovering artifacts that tell the story of Zambia\'s ancient civilizations.',
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
        salaryGlobal: '$50,000 - $100,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Engineering (Mechanical, Electrical, Civil, etc.)',
            'Register with the Engineering Institution of Zambia (EIZ)',
            'Gain experience through internships or jobs in Zambia',
            'Apply for international engineering roles or postgraduate studies'
        ],
        story: 'Mr. Chanda studied electrical engineering at CBU and now designs solar power systems for schools and clinics in rural Zambia.',
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
        salaryGlobal: '$45,000 - $85,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'Google Scholarships'],
        pathwayAbroad: [
            'Get a degree in Information Technology or related field',
            'Get certified in specific technologies (Cisco, Microsoft, AWS)',
            'Gain experience in IT support or network administration',
            'Apply for international IT roles or remote positions'
        ],
        story: 'Grace works as an IT specialist for a bank in Lusaka. She ensures all systems are secure and running efficiently, and she trains staff on new technology.',
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
        salaryLocal: 'K10,000 - K20,000 per month',
        salaryGlobal: '$80,000 - $250,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a Bachelor of Medicine and Surgery (MBChB) from UNZA or CBU',
            'Complete internship at a Zambian hospital (1 year)',
            'Register with the Health Professions Council of Zambia',
            'For international practice: write licensing exams (USMLE, PLAB, etc.)'
        ],
        story: 'Dr. Musonda grew up in a rural village. She studied at UNZA, then got a scholarship to specialize in paediatrics in the UK. She now trains Zambian doctors.',
        careerDay: 'Visit a clinic or hospital and shadow a doctor for a day.'
    },

    'Surgeon': {
        cluster: 'Healthcare',
        icon: '🔪',
        description: 'Perform operations to treat injuries, diseases, and deformities. Surgeons work in hospitals and specialize in various areas like general, heart, or brain surgery.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K12,000 - K25,000 per month',
        salaryGlobal: '$100,000 - $300,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a Bachelor of Medicine and Surgery (MBChB) from UNZA or CBU',
            'Complete internship at a Zambian hospital (1 year)',
            'Complete specialist surgical training (5-7 years)',
            'Apply for international surgical fellowships or roles'
        ],
        story: 'Dr. Mwansa is a surgeon who studied in Zambia and trained in the UK. He now performs life-saving surgeries at a hospital in Lusaka and teaches medical students.',
        careerDay: 'Shadow a surgeon in a hospital (with permission) and learn about different surgical procedures.'
    },

    'Nurse': {
        cluster: 'Healthcare',
        icon: '👩🏽‍⚕️',
        description: 'Provide care to patients, administer medication, educate communities about health, and support doctors in hospitals and clinics.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'Chainama Hills College'],
        salaryLocal: 'K4,000 - K7,000 per month',
        salaryGlobal: '$50,000 - $90,000 per year',
        outlook: '🔥🔥 Very High Demand',
        globalDemand: 'Very High',
        globalReady: true,
        countries: ['UK', 'Canada', 'USA', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Complete a Diploma or Degree in Nursing',
            'Register with the Nursing and Midwifery Council of Zambia',
            'Gain experience in Zambian healthcare facilities',
            'Apply for international nursing roles or licensing exams'
        ],
        story: 'Sister Grace worked at a rural clinic for 5 years. She then applied for a nursing role in the UK and is now a senior nurse in London.',
        careerDay: 'Talk to a nurse about their daily work and what they enjoy most.'
    },

    'Pharmacist': {
        cluster: 'Healthcare',
        icon: '💊',
        description: 'Prepare and dispense medications, advise patients on drug use, and ensure safe medicine practices in pharmacies and hospitals.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K5,000 - K9,000 per month',
        salaryGlobal: '$60,000 - $110,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'Fulbright (USA)'],
        pathwayAbroad: [
            'Get a Degree in Pharmacy from UNZA',
            'Complete internship and register with the Pharmacy Council of Zambia',
            'Gain experience in community or hospital pharmacy',
            'Apply for international licensing and roles'
        ],
        story: 'Mr. Phiri runs a pharmacy in Matero. He also supplies medicines to rural clinics and is considering expanding to other towns.',
        careerDay: 'Visit a pharmacy and ask about how they help patients.'
    },

    'Paramedic': {
        cluster: 'Healthcare',
        icon: '🚑',
        description: 'Provide emergency medical care to patients in ambulances and at accident scenes. Paramedics are often the first responders in medical emergencies.',
        requiredSubjects: ['Science', 'English', 'Mathematics'],
        recommendedSubjects: ['Biology'],
        institutions: ['Zambia Medical College', 'Evelyn Hone College'],
        salaryLocal: 'K3,500 - K6,000 per month',
        salaryGlobal: '$35,000 - $70,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with certification transfer'],
        scholarships: ['Government bursaries', 'ZAMFA'],
        pathwayAbroad: [
            'Complete paramedic training in Zambia',
            'Gain experience in emergency response in Zambia',
            'Get additional certifications (Advanced Life Support)',
            'Apply for international paramedic roles with additional certification'
        ],
        story: 'Mr. Banda works as a paramedic in Lusaka. He has saved countless lives in emergency situations, from road accidents to childbirth emergencies.',
        careerDay: 'Visit an ambulance station and talk to paramedics about their work.'
    },

    'Veterinarian': {
        cluster: 'Healthcare',
        icon: '🐾',
        description: 'Care for the health of animals, including pets, livestock, and wildlife. Treat illnesses, perform surgeries, and ensure food safety in Zambia.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Mathematics', 'Chemistry'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$45,000 - $90,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Australia', 'South Africa', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Veterinary Medicine from UNZA',
            'Complete internship and register with the Veterinary Council of Zambia',
            'Gain experience in animal health',
            'Apply for international veterinary roles or licensing exams'
        ],
        story: 'Dr. Zulu works in a rural area, treating livestock that are essential to farmers\' livelihoods. She has helped prevent disease outbreaks that could devastate communities.',
        careerDay: 'Visit a veterinary clinic or a farm with livestock.'
    },

    'Therapist': {
        cluster: 'Healthcare',
        icon: '🧠',
        description: 'Help people manage mental health issues, emotional challenges, and psychological disorders. Work in hospitals, clinics, or private practice.',
        requiredSubjects: ['Science', 'English', 'Civic Education'],
        recommendedSubjects: ['Biology', 'History'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$40,000 - $80,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Psychology or Counseling',
            'Complete clinical training and supervision',
            'Register with the Health Professions Council of Zambia',
            'Apply for international licensing and roles'
        ],
        story: 'Mrs. Chilufya is a therapist who helps young people in Lusaka deal with anxiety, depression, and trauma. Her work is transforming lives.',
        careerDay: 'Talk to a counselor or therapist about their work.'
    },

    'Clinical Officer': {
        cluster: 'Healthcare',
        icon: '🏥',
        description: 'Examine patients, diagnose common illnesses, prescribe treatments, and manage health clinics in rural and urban areas of Zambia.',
        requiredSubjects: ['Mathematics', 'Science', 'English'],
        recommendedSubjects: ['Biology', 'Chemistry'],
        institutions: ['Chainama Hills College', 'Ndola College of Biomedical Sciences', 'Kabwe School of Nursing'],
        salaryLocal: 'K3,500 - K6,000 per month',
        salaryGlobal: 'Not typically recognized internationally - pathway through further studies',
        outlook: '🔥 High Demand in Zambia',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other SADC countries with certification'],
        scholarships: ['Government bursaries', 'ZAMFA'],
        pathwayAbroad: [
            'Complete Clinical Officer training in Zambia',
            'Gain experience in Zambian health facilities',
            'For international roles: upgrade to full medical degree or specialized diplomas'
        ],
        story: 'Mr. Banda works at a clinic in a rural area. He treats hundreds of patients every month and is the only medical professional for 50km.',
        careerDay: 'Visit a local clinic and ask the clinical officer about their typical day.'
    },

    'Dentist': {
        cluster: 'Healthcare',
        icon: '🦷',
        description: 'Diagnose and treat problems with teeth, gums, and mouths. Work in dental clinics, hospitals, and community health programs.',
        requiredSubjects: ['Science', 'Biology', 'English'],
        recommendedSubjects: ['Chemistry', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)'],
        salaryLocal: 'K5,000 - K10,000 per month',
        salaryGlobal: '$50,000 - $100,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Dentistry from UNZA',
            'Complete internship and register with the Health Professions Council of Zambia',
            'Gain experience in dental practice',
            'Apply for international licensing and roles'
        ],
        story: 'Dr. Phiri runs a dental clinic in Lusaka that provides affordable dental care to low-income families. He also educates communities about oral hygiene.',
        careerDay: 'Visit a dental clinic and learn about oral health.'
    },

    'Radiographer': {
        cluster: 'Healthcare',
        icon: '📷',
        description: 'Operate X-ray and MRI machines to create images of the inside of the body. Help doctors diagnose injuries and illnesses.',
        requiredSubjects: ['Science', 'Mathematics', 'English'],
        recommendedSubjects: ['Biology', 'Physics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$40,000 - $75,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Complete radiography training in Zambia',
            'Register with the Health Professions Council of Zambia',
            'Gain experience in Zambian healthcare facilities',
            'Apply for international radiography roles'
        ],
        story: 'Mrs. Chiluba is a radiographer at a hospital in Ndola. She uses X-ray technology to help doctors diagnose broken bones and other injuries.',
        careerDay: 'Visit a hospital radiology department.'
    },

    'Laboratory Technician': {
        cluster: 'Healthcare',
        icon: '🧫',
        description: 'Perform lab tests on blood, tissue, and other samples to help doctors diagnose diseases and monitor treatment.',
        requiredSubjects: ['Science', 'Biology', 'Chemistry'],
        recommendedSubjects: ['Mathematics', 'English'],
        institutions: ['Evelyn Hone College', 'Ndola College of Biomedical Sciences'],
        salaryLocal: 'K3,000 - K6,000 per month',
        salaryGlobal: '$35,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Canada', 'Australia', 'USA'],
        scholarships: ['Government bursaries', 'ZAMFA', 'Commonwealth'],
        pathwayAbroad: [
            'Complete laboratory technician training in Zambia',
            'Register with the Health Professions Council of Zambia',
            'Gain experience in Zambian laboratories',
            'Apply for international laboratory roles'
        ],
        story: 'Mr. Banda works in a hospital lab in Lusaka. He tests blood samples for malaria, HIV, and other diseases, helping doctors save lives.',
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
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$45,000 - $85,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'ACCA Scholarships'],
        pathwayAbroad: [
            'Get a degree in Accounting or related field',
            'Complete professional certifications (ZICA, ACCA, CIMA)',
            'Gain experience in Zambian organizations',
            'Apply for international accounting roles'
        ],
        story: 'Mutale studied accounting at UNZA and became a ZICA member. She now works for an international mining company in Zambia.',
        careerDay: 'Help a local business track their expenses for a day.'
    },

    'Entrepreneur': {
        cluster: 'Business',
        icon: '🚀',
        description: 'Start and run your own business, creating jobs and solving problems in Zambia\'s economy.',
        requiredSkills: ['Business skills', 'Creativity', 'Leadership', 'Financial management', 'Communication'], // No academic prerequisites - uses skills
        recommendedSubjects: ['English', 'Mathematics', 'Business Studies'],
        institutions: ['Self-employed - skills can be developed anywhere'],
        salaryLocal: 'Varies widely - K2,000 to K50,000+ per month',
        salaryGlobal: 'Varies widely - global income potential',
        outlook: 'Varies by industry',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Anywhere with opportunity'],
        scholarships: ['Tony Elumelu Foundation', 'Zambia Youth Enterprise Fund', 'UNDP Youth Entrepreneurship'],
        pathwayAbroad: [
            'Start a small business in Zambia to gain experience',
            'Learn business skills through online courses and practical experience',
            'Network with other entrepreneurs',
            'Expand your business to other markets'
        ],
        story: 'Lungowe started selling vegetables in the market. She now runs a catering business that employs 15 people and supplies schools and events.',
        careerDay: 'Start a small business selling snacks or crafts for a week.'
    },

    'Banker': {
        cluster: 'Business',
        icon: '🏦',
        description: 'Manage financial transactions, provide banking services to customers, and help people and businesses grow their money.',
        requiredSubjects: ['Mathematics', 'English'],
        recommendedSubjects: ['Business Studies', 'Economics'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K4,500 - K8,000 per month',
        salaryGlobal: '$40,000 - $75,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'USA', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Finance, Economics, or Business',
            'Gain experience in Zambian banking sector',
            'Get professional certifications (ACCA, CIMA)',
            'Apply for international banking roles'
        ],
        story: 'Charles started as a teller in a Lusaka bank. He worked hard, got promoted, and is now a branch manager at 30.',
        careerDay: 'Visit a bank and ask about different career paths in banking.'
    },

    'Tax Attorney': {
        cluster: 'Business',
        icon: '⚖️',
        description: 'Specialize in tax law. Help individuals and businesses understand their tax obligations, minimize tax liability, and resolve tax disputes.',
        requiredSubjects: ['Mathematics', 'English', 'Civic Education'],
        recommendedSubjects: ['Business Studies', 'History'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K6,000 - K12,000 per month',
        salaryGlobal: '$60,000 - $120,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Law from UNZA or CBU',
            'Complete legal training and bar exam',
            'Specialize in tax law through further study or experience',
            'Apply for international tax law roles'
        ],
        story: 'Mr. Mwansa is a tax attorney in Lusaka. He helps mining companies and small businesses navigate Zambia\'s tax system and avoid legal issues.',
        careerDay: 'Talk to a lawyer or visit a law firm to learn about legal careers.'
    },

    'Economist': {
        cluster: 'Business',
        icon: '📈',
        description: 'Study how economies work, analyze data, and provide advice on economic policy, business strategy, and financial decisions.',
        requiredSubjects: ['Mathematics', 'English', 'Economics'],
        recommendedSubjects: ['Business Studies', 'Geography'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K4,500 - K9,000 per month',
        salaryGlobal: '$50,000 - $100,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Economics or related field',
            'Gain experience through research or internships',
            'Get professional certifications or further education',
            'Apply for international economic policy or analysis roles'
        ],
        story: 'Dr. Chibwe is an economist who advises the Zambian government on economic policy. Her work helps shape the country\'s financial future.',
        careerDay: 'Read about Zambian economics and discuss it with someone in the field.'
    },

    'Human Resources': {
        cluster: 'Business',
        icon: '👥',
        description: 'Manage recruitment, training, employee relations, and workplace policies for organizations in Zambia.',
        requiredSubjects: ['English', 'Business Studies', 'Civic Education'],
        recommendedSubjects: ['Mathematics', 'Psychology'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K3,500 - K7,000 per month',
        salaryGlobal: '$35,000 - $70,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Canada', 'Australia', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Human Resources, Business, or Psychology',
            'Gain experience in HR roles in Zambia',
            'Get professional certifications (CIPD, SHRM)',
            'Apply for international HR roles'
        ],
        story: 'Mrs. Banda is an HR manager for a company in Lusaka. She ensures employees are happy, trained, and treated fairly.',
        careerDay: 'Talk to an HR professional about their work.'
    },

    'Marketing Manager': {
        cluster: 'Business',
        icon: '📣',
        description: 'Develop and implement strategies to promote products and services, build brand awareness, and reach customers in Zambia and beyond.',
        requiredSubjects: ['English', 'Business Studies'],
        recommendedSubjects: ['Art', 'ICT/Computer Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'ZCAS University'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $80,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'USA', 'South Africa', 'Australia', 'Canada'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Marketing, Business, or Communications',
            'Gain experience in marketing roles in Zambia',
            'Build a portfolio of marketing campaigns',
            'Apply for international marketing roles'
        ],
        story: 'Chanda is a marketing manager for a Zambian company. He uses social media, TV ads, and events to promote products and grow the brand.',
        careerDay: 'Design a marketing campaign for a school event.'
    },

    'Logistics Manager': {
        cluster: 'Business',
        icon: '📦',
        description: 'Manage the movement of goods and products, ensuring efficient transportation, warehousing, and distribution in Zambia and internationally.',
        requiredSubjects: ['Mathematics', 'English', 'Geography'],
        recommendedSubjects: ['Business Studies', 'ICT/Computer Studies'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $80,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'Australia', 'Canada', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Logistics, Supply Chain, or Business',
            'Gain experience in logistics roles in Zambia',
            'Get professional certifications (CILT, APICS)',
            'Apply for international logistics roles'
        ],
        story: 'Mr. Phiri manages supply chains for a major company. He ensures products get from suppliers to customers efficiently and cost-effectively.',
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
        salaryLocal: 'K2,500 - K5,500 per month',
        salaryGlobal: '$40,000 - $75,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'South Africa', 'Australia'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Build a portfolio of design work',
            'Get formal training in graphic design',
            'Learn design software (Adobe Suite, Figma, etc.)',
            'Apply for international freelance or full-time roles'
        ],
        story: 'Emma from Kitwe taught herself graphic design online. She now works remotely for a South African media company and has clients worldwide.',
        careerDay: 'Design a poster or logo for a school event.'
    },

    'Animator': {
        cluster: 'Creative',
        icon: '🎬',
        description: 'Create moving images and visual effects for movies, TV shows, video games, and advertisements using computer software.',
        requiredSubjects: ['Art', 'ICT/Computer Studies', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Mathematics'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'ZCAS University'],
        salaryLocal: 'K3,000 - K6,000 per month',
        salaryGlobal: '$45,000 - $85,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get formal training in animation (degree or diploma)',
            'Build a portfolio of animation work',
            'Learn animation software (Maya, Blender, After Effects)',
            'Apply for international animation roles'
        ],
        story: 'David from Lusaka creates animated videos for Zambian companies. His work is gaining recognition and he hopes to work with international studios.',
        careerDay: 'Create a simple animation using free software like Pivot or Blender.'
    },

    'Journalist': {
        cluster: 'Creative',
        icon: '📰',
        description: 'Research and report news stories for television, radio, newspapers, and online platforms, keeping Zambians informed about important issues.',
        requiredSubjects: ['English', 'History'],
        recommendedSubjects: ['Civic Education', 'Geography'],
        institutions: ['University of Zambia (UNZA)', 'Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'K3,000 - K6,000 per month',
        salaryGlobal: '$35,000 - $70,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'USA', 'Australia'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'Fulbright (USA)'],
        pathwayAbroad: [
            'Get a degree in Journalism or Communication Studies',
            'Gain experience in Zambian media houses',
            'Build a portfolio of published work',
            'Apply for international media roles or fellowships'
        ],
        story: 'Sandra started as a radio presenter in her hometown. She now works for a major television network and reports on national issues.',
        careerDay: 'Write a news article about an event in your school or community.'
    },

    'Author': {
        cluster: 'Creative',
        icon: '✍️',
        description: 'Write books, articles, or other content for publication. Authors can write fiction, non-fiction, academic texts, or creative works.',
        requiredSkills: ['Writing skills', 'Creativity', 'Research skills', 'Communication'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'History', 'Art'],
        institutions: ['Self-employed - skills can be developed anywhere'],
        salaryLocal: 'Varies widely - K1,000 - K10,000+ per month',
        salaryGlobal: 'Varies widely - $20,000 - $100,000+ per year',
        outlook: 'Varies by genre',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with publishing opportunities'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'Fulbright (USA)'],
        pathwayAbroad: [
            'Write regularly to build a portfolio',
            'Study creative writing or journalism',
            'Publish work independently or with publishers',
            'Apply for international writing residencies or fellowships'
        ],
        story: 'Mrs. Mwansa is a Zambian author who writes children\'s books about Zambian history and culture. Her books are used in schools across the country.',
        careerDay: 'Write a short story or poem and share it with others.'
    },

    'Actor': {
        cluster: 'Creative',
        icon: '🎭',
        description: 'Perform in theatre, film, or television productions, bringing characters to life through acting and performance.',
        requiredSkills: ['Performance skills', 'Creativity', 'Communication', 'Confidence'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'Drama', 'History'],
        institutions: ['Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'Varies widely - K1,000 - K20,000+ per month',
        salaryGlobal: 'Varies widely - $20,000 - $100,000+ per year',
        outlook: 'Varies by project',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with film and theatre industries'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)'],
        pathwayAbroad: [
            'Take acting classes or join a theatre group',
            'Build a portfolio of performances',
            'Audition for roles in film, TV, and theatre',
            'Apply for international acting roles or training programs'
        ],
        story: 'Lungowe is a Zambian actor who started in school plays. She now stars in Zambian TV shows and has performed in South African productions.',
        careerDay: 'Perform a monologue or scene from a play.'
    },

    'Designer': {
        cluster: 'Creative',
        icon: '✏️',
        description: 'Create designs for products, spaces, or visual communications. Designers work in fashion, interior design, product design, and more.',
        requiredSubjects: ['Art', 'English'],
        recommendedSubjects: ['ICT/Computer Studies', 'Mathematics'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'K2,500 - K6,000 per month',
        salaryGlobal: '$35,000 - $75,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'South Africa', 'USA', 'Australia', 'Canada'],
        scholarships: ['DAAD (Germany)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get formal training in design (fashion, interior, or product)',
            'Build a portfolio of design work',
            'Learn design software and techniques',
            'Apply for international design roles'
        ],
        story: 'Chisi is a fashion designer in Lusaka who creates modern Zambian clothing. Her designs have been featured in fashion shows across Africa.',
        careerDay: 'Design a piece of clothing or an interior space on paper.'
    },

    'Model': {
        cluster: 'Creative',
        icon: '📸',
        description: 'Model clothing and products for fashion shows, photo shoots, and advertising campaigns. Models represent brands and showcase fashion.',
        requiredSkills: ['Confidence', 'Posing skills', 'Communication', 'Professionalism'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'Art'],
        institutions: ['Not typically needed - skills can be developed through practice'],
        salaryLocal: 'Varies widely - K2,000 - K20,000+ per month',
        salaryGlobal: 'Varies widely - $25,000 - $100,000+ per year',
        outlook: 'Competitive',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with fashion and advertising industries'],
        scholarships: ['Not typically available for modeling careers'],
        pathwayAbroad: [
            'Build a portfolio of professional photos',
            'Sign with a modeling agency in Zambia',
            'Gain experience in local fashion shows and shoots',
            'Apply for international modeling roles or agencies'
        ],
        story: 'Mwansa is a Zambian model who has worked for local designers and appeared in campaigns for international brands. She now mentors young models.',
        careerDay: 'Practice posing for photos and learn about the fashion industry.'
    },

    'Photographer': {
        cluster: 'Creative',
        icon: '📷',
        description: 'Capture images for personal or professional use, working in areas like journalism, advertising, weddings, or fine art.',
        requiredSkills: ['Photography skills', 'Creativity', 'Technical skills', 'Communication'], // Uses skills instead of subjects
        recommendedSubjects: ['Art', 'ICT/Computer Studies', 'English'],
        institutions: ['Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'K2,000 - K6,000 per month',
        salaryGlobal: '$30,000 - $70,000 per year',
        outlook: 'Competitive',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with visual media needs'],
        scholarships: ['Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Build a portfolio of photographs',
            'Learn photography techniques and editing software',
            'Gain experience through commissions or internships',
            'Apply for international photography roles'
        ],
        story: 'Chanda is a photographer who captures the beauty of Zambia\'s landscapes and wildlife. His photos have been published in magazines worldwide.',
        careerDay: 'Take photos of your surroundings and practice editing them.'
    },

    'Musician': {
        cluster: 'Creative',
        icon: '🎵',
        description: 'Create, perform, and produce music across genres. Musicians can be solo artists, band members, composers, or producers.',
        requiredSkills: ['Musical talent', 'Creativity', 'Practice discipline', 'Performance skills'], // Uses skills instead of subjects
        recommendedSubjects: ['Music', 'English'],
        institutions: ['Evelyn Hone College', 'Zambia Institute of Mass Communication (ZAMCOM)'],
        salaryLocal: 'Varies widely - K1,000 - K50,000+ per month',
        salaryGlobal: 'Varies widely - $20,000 - $1,000,000+ per year',
        outlook: 'Varies by genre and success',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Anywhere with music industries'],
        scholarships: ['Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Practice and develop your musical skills',
            'Build a portfolio of original music',
            'Perform in local venues and build a following',
            'Apply for international music opportunities and recording deals'
        ],
        story: 'Sauti Sol is a famous band that started in Kenya and now performs worldwide. Zambian musicians like Pompi and Mampi have also achieved international success.',
        careerDay: 'Learn to play an instrument or write a song.'
    },

    'Fashion Designer': {
        cluster: 'Creative',
        icon: '👗',
        description: 'Design and create clothing and accessories, combining creativity with practical skills to produce wearable art.',
        requiredSkills: ['Design skills', 'Creativity', 'Sewing skills', 'Fashion sense'], // Uses skills instead of subjects
        requiredSubjects: ['Art', 'English'],
        recommendedSubjects: ['Business Studies', 'ICT/Computer Studies'],
        institutions: ['Evelyn Hone College', 'University of Zambia (UNZA)'],
        salaryLocal: 'K2,500 - K8,000 per month',
        salaryGlobal: '$35,000 - $80,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'UK', 'USA', 'France', 'Italy'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get formal training in fashion design',
            'Build a portfolio of designs',
            'Gain experience through internships or apprenticeships',
            'Apply for international fashion roles or design programs'
        ],
        story: 'Sandra is a Zambian fashion designer who creates chitenge-inspired clothing. Her brand is known across Zambia and she now exports to other countries.',
        careerDay: 'Design and make a simple piece of clothing.'
    },

    'Toymaker': {
        cluster: 'Creative',
        icon: '🧸',
        description: 'Design and create toys for children and adults. Toymakers can work in small workshops, for companies, or as independent artisans.',
        requiredSkills: ['Creativity', 'Craftsmanship', 'Design skills', 'Attention to detail'], // Uses skills instead of subjects
        recommendedSubjects: ['Art', 'Design and Technology'],
        institutions: ['Self-employed - skills can be developed through practice and training'],
        salaryLocal: 'K2,000 - K5,000 per month',
        salaryGlobal: '$25,000 - $60,000 per year',
        outlook: 'Niche market',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other countries with toy manufacturing industries'],
        scholarships: ['Not typically available for this career'],
        pathwayAbroad: [
            'Develop toy-making skills through practice and training',
            'Build a portfolio of toy designs',
            'Start a small business selling toys locally',
            'Explore international markets through exports or online sales'
        ],
        story: 'Mr. Banda makes wooden toys in his workshop in Lusaka. His toys are sold in markets and tourist shops across Zambia.',
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
        salaryLocal: 'K3,500 - K6,000 per month',
        salaryGlobal: 'Varies widely by country',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'SADC region with certification transfer'],
        scholarships: ['Government bursaries', 'Chevening (UK)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a teaching qualification (Degree or Diploma)',
            'Register with the Teaching Council of Zambia',
            'Teach in Zambian schools for experience',
            'For international roles: get additional certifications or teach in Zambian international schools'
        ],
        story: 'Mr. Phiri has been teaching for 20 years at a rural school. He\'s inspired thousands of students and helped many go to university.',
        careerDay: 'Help a younger student with their homework or tutoring.'
    },

    'Social Worker': {
        cluster: 'Helping',
        icon: '🤝',
        description: 'Help people in difficult situations—children, families, the elderly, and people with disabilities—access support and services.',
        requiredSubjects: ['English', 'Civic Education', 'Science'],
        recommendedSubjects: ['History', 'Geography'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K3,000 - K5,500 per month',
        salaryGlobal: '$40,000 - $70,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'NGO roles in other countries'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNDP Scholarships'],
        pathwayAbroad: [
            'Get a degree in Social Work',
            'Register with the Social Work Council of Zambia',
            'Gain experience in community-based organizations',
            'Apply for international NGO roles'
        ],
        story: 'Grace works with street children in Lusaka. She helps them get education, food, and shelter, and has changed many lives.',
        careerDay: 'Visit a community organization and see how they help people.'
    },

    'Guidance Counselor': {
        cluster: 'Helping',
        icon: '🧑‍🏫',
        description: 'Help students with academic, personal, and career development. Work in schools, colleges, and community organizations.',
        requiredSubjects: ['English', 'Civic Education', 'Science'],
        recommendedSubjects: ['Psychology', 'History'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K3,500 - K6,000 per month',
        salaryGlobal: '$40,000 - $75,000 per year',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['UK', 'Canada', 'South Africa', 'Australia', 'USA'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Counseling, Psychology, or Education',
            'Complete professional training and supervision',
            'Register with relevant professional bodies in Zambia',
            'Apply for international counseling roles'
        ],
        story: 'Mrs. Mwansa is a guidance counselor at a school in Lusaka. She helps students with their subject choices, personal challenges, and future planning.',
        careerDay: 'Talk to a school counselor about their work.'
    },

    'Community Development Officer': {
        cluster: 'Helping',
        icon: '🏘️',
        description: 'Work with communities to identify their needs and develop projects that improve their lives. Focus on health, education, and economic development.',
        requiredSubjects: ['English', 'Civic Education', 'Geography'],
        recommendedSubjects: ['History', 'Social Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K3,000 - K6,000 per month',
        salaryGlobal: '$35,000 - $65,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'NGO roles in other African countries'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'UNDP Scholarships'],
        pathwayAbroad: [
            'Get a degree in Community Development, Social Work, or Development Studies',
            'Gain experience in community projects in Zambia',
            'Build a portfolio of community development work',
            'Apply for international NGO roles'
        ],
        story: 'Mr. Phiri works with rural communities in Zambia, helping them start farming cooperatives and improve access to clean water.',
        careerDay: 'Volunteer with a community organization.'
    },

    'Priest': {
        cluster: 'Helping',
        icon: '⛪',
        description: 'Lead religious services, provide spiritual guidance, and support communities through pastoral care. Priests work in churches and religious organizations.',
        requiredSkills: ['Leadership', 'Communication', 'Compassion', 'Spiritual knowledge'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'Civic Education', 'History'],
        institutions: ['St. Augustine University', 'Zambia Catholic University', 'Theological Colleges'],
        salaryLocal: 'K2,000 - K5,000 per month',
        salaryGlobal: 'Varies widely by denomination and country',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Zambia (primary)', 'Other countries with religious communities'],
        scholarships: ['Church scholarships', 'Religious organizations'],
        pathwayAbroad: [
            'Complete theological training and formation',
            'Serve in a local parish or religious community',
            'Gain experience in pastoral care and leadership',
            'Apply for international religious roles or missionary work'
        ],
        story: 'Father Banda has served a church in Lusaka for 15 years. He has counseled hundreds of families and helped build schools and health centers.',
        careerDay: 'Talk to a religious leader about their work and community role.'
    },

    'Lawyer': {
        cluster: 'Helping',
        icon: '⚖️',
        description: 'Advise and represent clients in legal matters. Lawyers work in areas like criminal law, civil law, human rights, and corporate law in Zambia and beyond.',
        requiredSubjects: ['English', 'Civic Education', 'History'],
        recommendedSubjects: ['Mathematics', 'Business Studies'],
        institutions: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        salaryLocal: 'K5,000 - K15,000 per month',
        salaryGlobal: '$50,000 - $150,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'South Africa', 'Australia'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Commonwealth'],
        pathwayAbroad: [
            'Get a degree in Law from UNZA or CBU',
            'Complete legal training and bar exam',
            'Practice law in Zambia to gain experience',
            'Apply for international legal roles or further studies'
        ],
        story: 'Mrs. Chirwa is a human rights lawyer in Zambia. She represents vulnerable people who cannot afford legal representation and advocates for justice.',
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
        salaryLocal: 'K2,500 - K5,000 per month (+ tips)',
        salaryGlobal: '$25,000 - $50,000 per year (varies by country)',
        outlook: 'Growing Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with certification transfer'],
        scholarships: ['Zambia Tourism Board', 'UNWTO Scholarships'],
        pathwayAbroad: [
            'Get training in tourism and hospitality',
            'Gain experience in Zambian tourism sector',
            'Get certified as a professional tour guide',
            'Apply for international tour guide roles or eco-tourism projects'
        ],
        story: 'Chifundo works at Victoria Falls and South Luangwa. He has guided thousands of tourists and speaks five languages.',
        careerDay: 'Visit a local tourist attraction and learn about its history.'
    },

    'Farmer': {
        cluster: 'Outdoor',
        icon: '🌾',
        description: 'Grow crops and raise animals for food, helping feed Zambia and contribute to the country\'s agricultural economy.',
        requiredSubjects: ['Agriculture', 'Science', 'English'],
        recommendedSubjects: ['Geography', 'Mathematics'],
        institutions: ['Natural Resources Development College (NRDC)', 'Mulungushi University'],
        salaryLocal: 'Varies widely - K2,000 to K15,000+ per month',
        salaryGlobal: 'Varies widely by country',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'SADC region with agricultural experience'],
        scholarships: ['Zambia Agricultural Research Institute', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get training in agriculture (Diploma or Degree)',
            'Gain practical farming experience',
            'Learn modern farming techniques (agtech, irrigation, etc.)',
            'Apply for international agricultural projects or research roles'
        ],
        story: 'Mrs. Zulu started farming with one hectare. She now grows maize and soybeans on 20 hectares and supplies major millers.',
        careerDay: 'Visit a farm and learn about what crops are grown.'
    },

    'Game Ranger': {
        cluster: 'Outdoor',
        icon: '🐘',
        description: 'Protect wildlife and natural habitats in Zambia\'s national parks, monitoring animals, managing conservation, and educating visitors.',
        requiredSubjects: ['Biology', 'Geography', 'English'],
        recommendedSubjects: ['Science', 'Agriculture'],
        institutions: ['Zambia Wildlife Authority (ZAWA)', 'Natural Resources Development College (NRDC)'],
        salaryLocal: 'K3,000 - K5,500 per month',
        salaryGlobal: '$30,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with conservation experience'],
        scholarships: ['World Wildlife Fund (WWF)', 'Conservation International', 'BirdLife Zambia'],
        pathwayAbroad: [
            'Get training in wildlife management or conservation',
            'Gain experience in Zambian national parks',
            'Get additional certifications in conservation',
            'Apply for international conservation roles'
        ],
        story: 'James is a game ranger in South Luangwa. He protects elephants and rhinos from poachers and educates communities about conservation.',
        careerDay: 'Visit a national park or nature reserve and talk to a ranger.'
    },

    'Forest Ranger': {
        cluster: 'Outdoor',
        icon: '🌳',
        description: 'Manage and protect forest resources, prevent illegal logging, monitor wildlife, and promote sustainable forestry practices.',
        requiredSubjects: ['Geography', 'Biology', 'English'],
        recommendedSubjects: ['Science', 'Agriculture'],
        institutions: ['Natural Resources Development College (NRDC)', 'Zambia Forestry Department Training'],
        salaryLocal: 'K3,000 - K5,000 per month',
        salaryGlobal: '$30,000 - $50,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with forestry sectors'],
        scholarships: ['Government bursaries', 'World Wildlife Fund (WWF)'],
        pathwayAbroad: [
            'Get training in forestry or environmental science',
            'Gain experience in Zambian forestry sector',
            'Get additional certifications in conservation',
            'Apply for international forestry or conservation roles'
        ],
        story: 'Mrs. Mwansa is a forest ranger in Zambia. She works to protect forests from illegal logging and promotes reforestation.',
        careerDay: 'Visit a forest or learn about tree planting.'
    },

    'Fishery Officer': {
        cluster: 'Outdoor',
        icon: '🐟',
        description: 'Manage and protect fish populations in rivers and lakes, monitor fishing practices, and promote sustainable fishing in Zambia.',
        requiredSubjects: ['Science', 'Biology', 'Geography'],
        recommendedSubjects: ['Agriculture', 'English'],
        institutions: ['Natural Resources Development College (NRDC)'],
        salaryLocal: 'K3,000 - K5,500 per month',
        salaryGlobal: '$30,000 - $55,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)', 'Other African countries with fisheries'],
        scholarships: ['Government bursaries', 'FAO Scholarships'],
        pathwayAbroad: [
            'Get training in fisheries or aquatic sciences',
            'Gain experience in Zambian fisheries sector',
            'Get additional certifications in fisheries management',
            'Apply for international fisheries roles'
        ],
        story: 'Mr. Banda is a fishery officer who monitors fish populations in Lake Kariba. His work helps ensure a sustainable fishing industry in Zambia.',
        careerDay: 'Visit a fish farm or talk to a fisherman.'
    },

    'Surveyor': {
        cluster: 'Outdoor',
        icon: '📏',
        description: 'Measure and map land boundaries, topographic features, and infrastructure. Surveyors work in construction, mining, and land management.',
        requiredSubjects: ['Mathematics', 'Geography', 'English'],
        recommendedSubjects: ['Physics', 'ICT/Computer Studies'],
        institutions: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)'],
        salaryLocal: 'K4,000 - K8,000 per month',
        salaryGlobal: '$40,000 - $80,000 per year',
        outlook: 'Moderate Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['South Africa', 'Australia', 'Canada', 'UK', 'USA'],
        scholarships: ['Chevening (UK)', 'Commonwealth', 'DAAD (Germany)'],
        pathwayAbroad: [
            'Get a degree in Surveying or Geomatics',
            'Register with the Surveyors Institute of Zambia',
            'Gain experience in surveying projects',
            'Apply for international surveying roles'
        ],
        story: 'Mr. Chanda is a surveyor who maps land for development projects in Zambia. His work ensures roads and buildings are built in the right places.',
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
        pathwayAbroad: [
            'Get a degree in Public Administration, Law, or Political Science',
            'Gain experience in government or public service',
            'Build a track record of leadership and service',
            'Consider international exchange programs or further studies'
        ],
        story: 'Ms. Mwansa is a governor who has transformed her province by investing in education and infrastructure. She is an inspiration to young women.',
        careerDay: 'Attend a community meeting or talk to a local government official.'
    },

    'Army': {
        cluster: 'Public Service',
        icon: '🪖',
        description: 'Serve in the Zambian Army, protecting the country\'s security, participating in peacekeeping missions, and supporting communities.',
        requiredSkills: ['Physical fitness', 'Discipline', 'Leadership', 'Teamwork', 'Patriotism'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'Civic Education', 'Physical Education'],
        institutions: ['Zambia National Service', 'Zambian Army Training Schools'],
        salaryLocal: 'K3,000 - K8,000 per month',
        salaryGlobal: '$25,000 - $60,000 per year (international peacekeeping)',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: true,
        countries: ['Zambia (primary)', 'Peacekeeping missions worldwide'],
        scholarships: ['Government bursaries'],
        pathwayAbroad: [
            'Meet physical and educational requirements for army recruitment',
            'Complete basic training in the Zambian Army',
            'Advance through training and promotions',
            'Apply for international peacekeeping missions'
        ],
        story: 'Captain Phiri has served in the Zambian Army for 10 years and participated in UN peacekeeping missions in other African countries.',
        careerDay: 'Talk to a soldier or visit a military training facility.'
    },

    'Firefighter': {
        cluster: 'Public Service',
        icon: '🚒',
        description: 'Respond to fires and emergencies, rescue people, and educate communities about fire safety and prevention.',
        requiredSkills: ['Physical fitness', 'Bravery', 'Teamwork', 'Quick thinking', 'Communication'], // Uses skills instead of subjects
        recommendedSubjects: ['Physical Education', 'English', 'Science'],
        institutions: ['Zambia Fire Service Training School'],
        salaryLocal: 'K2,500 - K5,500 per month',
        salaryGlobal: '$30,000 - $65,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries'],
        pathwayAbroad: [
            'Meet physical and educational requirements for recruitment',
            'Complete firefighter training in Zambia',
            'Gain experience in emergency response',
            'Apply for international firefighter exchanges or roles'
        ],
        story: 'Mr. Banda is a firefighter in Lusaka. He has saved lives and properties in fires and other emergencies.',
        careerDay: 'Visit a fire station and learn about fire safety.'
    },

    'Police Officer': {
        cluster: 'Public Service',
        icon: '👮',
        description: 'Protect people and property, enforce laws, investigate crimes, and support community safety in Zambia.',
        requiredSkills: ['Physical fitness', 'Integrity', 'Communication', 'Problem-solving', 'Courage'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'Civic Education', 'Physical Education'],
        institutions: ['Zambia Police Training School'],
        salaryLocal: 'K3,000 - K6,000 per month',
        salaryGlobal: '$30,000 - $65,000 per year',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Government bursaries'],
        pathwayAbroad: [
            'Meet physical and educational requirements for recruitment',
            'Complete police training in Zambia',
            'Gain experience in community policing and law enforcement',
            'Apply for international police exchanges or roles'
        ],
        story: 'Sergeant Chilufya has served in the Zambia Police Service for 8 years and works to build trust between police and communities.',
        careerDay: 'Talk to a police officer about their work or visit a police station.'
    },

    'Security Guard': {
        cluster: 'Public Service',
        icon: '🛡️',
        description: 'Protect buildings, people, and property by monitoring access, responding to incidents, and maintaining security in Zambia.',
        requiredSkills: ['Alertness', 'Communication', 'Physical fitness', 'Dependability'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'Physical Education'],
        institutions: ['Private security training companies'],
        salaryLocal: 'K1,500 - K3,500 per month',
        salaryGlobal: 'Varies by country',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Not typically available for this career'],
        pathwayAbroad: [
            'Complete security training in Zambia',
            'Gain experience in security roles',
            'Get additional certifications in security',
            'Apply for private security roles internationally'
        ],
        story: 'Mr. Mwansa works as a security guard at a bank in Lusaka. He ensures the safety of employees and customers and prevents incidents.',
        careerDay: 'Talk to a security guard about their work and safety skills.'
    },

    'Pilot': {
        cluster: 'Public Service',
        icon: '✈️',
        description: 'Fly aircraft for commercial airlines, cargo companies, or private operators. Pilots transport passengers and goods safely across Zambia and the world.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Geography', 'Science'],
        institutions: ['Zambia National Airline Training School', 'African Pilot Training Center'],
        salaryLocal: 'K8,000 - K20,000 per month',
        salaryGlobal: '$50,000 - $150,000 per year',
        outlook: 'High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['USA', 'UK', 'Canada', 'Australia', 'South Africa'],
        scholarships: ['Chevening (UK)', 'Fulbright (USA)', 'Airline training programs'],
        pathwayAbroad: [
            'Complete pilot training in Zambia or abroad',
            'Build flying hours (private, commercial, airline transport)',
            'Get licensed by the Zambia Civil Aviation Authority',
            'Apply for international pilot roles'
        ],
        story: 'Captain Mwansa is a commercial pilot who flies for an international airline. He started his career with a small Zambian airline and worked his way up.',
        careerDay: 'Visit an airport and talk to a pilot about their career.'
    },

    // =============================================================
    // SKILLED TRADES CLUSTER - Hands-on technical and craft careers
    // =============================================================

    'Carpenter': {
        cluster: 'Skilled Trades',
        icon: '🪚',
        description: 'Build and repair structures made of wood, including furniture, buildings, and fixtures using hand tools and power tools.',
        requiredSkills: ['Hand skills', 'Physical strength', 'Creativity', 'Measurement skills'], // Uses skills instead of subjects
        recommendedSubjects: ['Mathematics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K2,000 - K6,000 per month',
        salaryGlobal: '$25,000 - $60,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'UK', 'Canada', 'Australia'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathwayAbroad: [
            'Complete carpentry training in Zambia',
            'Gain practical experience on the job',
            'Get professional certifications in carpentry',
            'Apply for international carpentry roles'
        ],
        story: 'Mr. Banda is a carpenter who runs his own workshop in Lusaka. He creates custom furniture and has built many homes.',
        careerDay: 'Build a small wooden object like a birdhouse or picture frame.'
    },

    'Welder': {
        cluster: 'Skilled Trades',
        icon: '🔥',
        description: 'Join metal parts together using heat and specialized tools. Welders work in construction, manufacturing, and mining industries.',
        requiredSkills: ['Precision', 'Hand-eye coordination', 'Physical strength', 'Attention to detail'], // Uses skills instead of subjects
        recommendedSubjects: ['Mathematics', 'Physics'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K2,500 - K6,000 per month',
        salaryGlobal: '$30,000 - $65,000 per year',
        outlook: 'High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Canada', 'Australia', 'USA'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathwayAbroad: [
            'Complete welding training in Zambia',
            'Gain practical experience on the job',
            'Get professional certifications in welding',
            'Apply for international welding roles'
        ],
        story: 'Mr. Chanda is a welder who works on construction projects in Lusaka. His skill in joining metal is essential for building strong structures.',
        careerDay: 'Visit a workshop or construction site to see welding in action.'
    },

    'Maid': {
        cluster: 'Skilled Trades',
        icon: '🧹',
        description: 'Provide cleaning, laundry, and household support services in homes, hotels, and businesses. Work in Zambia\'s hospitality and service sectors.',
        requiredSkills: ['Attention to detail', 'Organization', 'Time management', 'Physical energy'], // Uses skills instead of subjects
        recommendedSubjects: ['English', 'Home Economics'],
        institutions: ['On-the-job training and experience'],
        salaryLocal: 'K1,500 - K3,500 per month',
        salaryGlobal: 'Varies by country',
        outlook: 'Stable Demand',
        globalDemand: 'Low',
        globalReady: false,
        countries: ['Zambia (primary)'],
        scholarships: ['Not typically available for this career'],
        pathwayAbroad: [
            'Gain experience in housekeeping and cleaning services',
            'Build a reputation for reliability and quality',
            'Apply for domestic or hospitality work internationally'
        ],
        story: 'Mrs. Banda has worked as a maid for 15 years, caring for homes and supporting families in Zambia.',
        careerDay: 'Help with household cleaning and organization.'
    },

    'Electrician': {
        cluster: 'Skilled Trades',
        icon: '💡',
        description: 'Install, maintain, and repair electrical systems in homes, businesses, and industrial facilities in Zambia.',
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        recommendedSubjects: ['Science', 'ICT/Computer Studies'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K3,000 - K7,000 per month',
        salaryGlobal: '$30,000 - $70,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'High',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathwayAbroad: [
            'Complete electrical training in Zambia',
            'Complete apprenticeship and gain experience',
            'Get professional certification as an electrician',
            'Apply for international electrical roles'
        ],
        story: 'Mr. Mulenga is an electrician who has worked on major construction projects in Zambia. His skill ensures buildings are safe and well-lit.',
        careerDay: 'Learn about electrical safety and how circuits work.'
    },

    'Mechanic': {
        cluster: 'Skilled Trades',
        icon: '🔧',
        description: 'Repair and maintain vehicles, including cars, trucks, and buses. Mechanics work in garages, dealerships, and transport companies.',
        requiredSkills: ['Hand skills', 'Problem-solving', 'Physical strength', 'Diagnostic skills'], // Uses skills instead of subjects
        recommendedSubjects: ['Mathematics', 'Physics', 'Design and Technology'],
        institutions: ['Northern Technical College (NORTEC)', 'Various vocational training centers'],
        salaryLocal: 'K2,500 - K6,000 per month',
        salaryGlobal: '$30,000 - $65,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'UK'],
        scholarships: ['TEVET scholarships', 'Government bursaries'],
        pathwayAbroad: [
            'Complete mechanical training in Zambia',
            'Gain practical experience in garages',
            'Get professional certifications in automotive repair',
            'Apply for international mechanic roles'
        ],
        story: 'Mr. Phiri is a mechanic who runs a busy garage in Kitwe. He repairs all types of vehicles and is known for his expertise.',
        careerDay: 'Learn how to do simple vehicle maintenance.'
    },

    'Miner': {
        cluster: 'Skilled Trades',
        icon: '⛏️',
        description: 'Work in mines extracting valuable minerals and metals. Miners operate machinery, drill, and ensure safety in Zambia\'s mining industry.',
        requiredSkills: ['Physical fitness', 'Safety awareness', 'Teamwork', 'Technical skills'], // Uses skills instead of subjects
        recommendedSubjects: ['Mathematics', 'Science', 'Physical Education'],
        institutions: ['Zambia Mines Training School', 'On-the-job training'],
        salaryLocal: 'K4,000 - K10,000 per month',
        salaryGlobal: '$40,000 - $80,000 per year',
        outlook: '🔥 High Demand',
        globalDemand: 'Moderate',
        globalReady: true,
        countries: ['Zambia (primary)', 'South Africa', 'Australia', 'Canada', 'Chile'],
        scholarships: ['Government bursaries', 'Mining company scholarships'],
        pathwayAbroad: [
            'Complete mining training in Zambia',
            'Gain experience in Zambian mines',
            'Get professional certifications in mining safety',
            'Apply for international mining roles'
        ],
        story: 'Mr. Banda works in a copper mine in Zambia. His work is essential to Zambia\'s economy and provides a good living for his family.',
        careerDay: 'Learn about mining safety and the mining process.'
    }
};

// ================================================================
// SECTION 2: PER-CAREER TRAIT TAGS FOR SMART SCORING
// ================================================================
// These tags help the AI match students to careers based on
// personality traits and preferences beyond just cluster scores.
// ================================================================

const careerTraits = {
    // STEM careers
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
    
    // Healthcare careers
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
    
    // Business careers
    "Accountant": ["analytical", "detailOriented", "indoor", "independent", "business", "highSalary"],
    "Entrepreneur": ["leadership", "creative", "riskTaker", "business", "independent", "highSalary"],
    "Banker": ["analytical", "business", "indoor", "professional", "highSalary", "detailOriented"],
    "Tax Attorney": ["analytical", "business", "indoor", "leadership", "highSalary", "communication"],
    "Economist": ["analytical", "business", "indoor", "research", "highSalary", "curiosity"],
    "Human Resources": ["peoplePerson", "communication", "helping", "indoor", "teamwork", "organized"],
    "Marketing Manager": ["creative", "communication", "leadership", "business", "teamwork", "highSalary"],
    "Logistics Manager": ["analytical", "business", "organized", "problemSolving", "teamwork", "leadership"],
    
    // Creative careers
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
    
    // Helping careers
    "Teacher": ["helping", "communication", "patience", "leadership", "community", "planning"],
    "Social Worker": ["helping", "compassion", "community", "communication", "patience", "resilience"],
    "Guidance Counselor": ["helping", "communication", "patience", "indoor", "empathy", "counseling"],
    "Community Development Officer": ["helping", "community", "leadership", "outdoor", "compassion", "planning"],
    "Priest": ["helping", "communication", "compassion", "leadership", "community", "spiritual"],
    "Lawyer": ["helping", "analytical", "communication", "leadership", "highSalary", "advocacy"],
    
    // Outdoor careers
    "Tour Guide": ["communication", "outdoor", "peoplePerson", "flexible", "enthusiasm", "knowledge"],
    "Farmer": ["outdoor", "independent", "physical", "patience", "practical", "business"],
    "Game Ranger": ["outdoor", "physical", "independent", "nature", "conservation", "resilience"],
    "Forest Ranger": ["outdoor", "nature", "conservation", "physical", "independent", "patience"],
    "Fishery Officer": ["outdoor", "nature", "conservation", "science", "physical", "community"],
    "Surveyor": ["outdoor", "analytical", "technology", "independence", "precision", "physical"],
    
    // Public Service careers
    "Governor": ["leadership", "communication", "public", "community", "highSalary", "decisionMaking"],
    "Army": ["physical", "discipline", "teamwork", "leadership", "patriotism", "resilience"],
    "Firefighter": ["physical", "bravery", "teamwork", "quickThinking", "helping", "outdoor"],
    "Police Officer": ["physical", "integrity", "communication", "problemSolving", "courage", "community"],
    "Security Guard": ["alertness", "communication", "physical", "dependability", "observation", "patience"],
    "Pilot": ["analytical", "highPressure", "leadership", "technical", "travel", "highSalary"],
    
    // Skilled Trades careers
    "Carpenter": ["handcraft", "physical", "creativity", "precision", "practical", "independence"],
    "Welder": ["precision", "handEyeCoordination", "physical", "attentionToDetail", "technical", "practical"],
    "Maid": ["attentionToDetail", "organization", "timeManagement", "physical", "dependability", "practical"],
    "Electrician": ["analytical", "technical", "physical", "problemSolving", "indoor", "highSalary"],
    "Mechanic": ["handcraft", "problemSolving", "physical", "diagnostic", "technical", "practical"],
    "Miner": ["physical", "safety", "teamwork", "technical", "outdoor", "highSalary"]
};

// ================================================================
// SECTION 3: QUESTION TRAIT MAPPING
// Maps each answer option to personality traits
// ================================================================

// This maps question IDs and options to traits
// Used by the scoring engine to calculate trait matches
const questionTraits = {
    // Question 1: Academic interests
    "1": {
        "Mathematics and Science": ["analytical", "science", "technical", "logical"],
        "English and Creative Writing": ["communication", "writing", "creative", "expression"],
        "History and Geography": ["knowledge", "curiosity", "analytical", "research"],
        "Art and Design": ["creative", "visual", "artistic", "imagination"],
        "ICT and Computers": ["technical", "technology", "analytical", "problemSolving"],
        "Agriculture and Biology": ["outdoor", "science", "practical", "nature"],
        "Business Studies": ["business", "analytical", "leadership", "practical"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 2: Activities
    "2": {
        "Building, fixing, or taking things apart": ["technical", "physical", "analytical", "practical"],
        "Helping people or volunteering": ["helping", "compassion", "community", "teamwork"],
        "Drawing, painting, or creative projects": ["creative", "visual", "artistic", "imagination"],
        "Solving puzzles or playing strategy games": ["analytical", "problemSolving", "strategic", "logical"],
        "Working outdoors or gardening": ["outdoor", "nature", "physical", "practical"],
        "Using computers or learning new technology": ["technical", "technology", "curiosity", "analytical"],
        "I enjoy a bit of everything": ["versatile", "curiosity", "openMind", "exploring"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 3: Work environment
    "3": {
        "Office or indoor setting": ["indoor", "professional", "structured", "organized"],
        "Outdoors in nature": ["outdoor", "nature", "physical", "adventure"],
        "Hospital, clinic, or lab": ["medical", "science", "helping", "structured"],
        "Workshop or factory": ["technical", "physical", "practical", "handsOn"],
        "School or classroom": ["helping", "communication", "planning", "structured"],
        "Travel or remote work": ["flexible", "adventure", "independent", "travel"],
        "I'm flexible": ["versatile", "adaptable", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 4: People vs things
    "4": {
        "Working with people - I love helping and interacting": ["peoplePerson", "communication", "teamwork", "helping"],
        "Working with things - I prefer tasks and projects": ["independent", "analytical", "technical", "focused"],
        "Both equally": ["versatile", "teamwork", "analytical", "balanced"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 5: Salary importance
    "5": {
        "Very important - I want to earn a high salary": ["highSalary", "ambitious", "business", "driven"],
        "Somewhat important - I want a comfortable salary": ["practical", "balanced", "realistic"],
        "Not very important - I care more about enjoyment": ["passion", "creative", "fulfillment", "purpose"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 6: Ideal job
    "6": {
        "Helping others or making a difference": ["helping", "compassion", "community", "purpose"],
        "Building things or solving problems": ["technical", "analytical", "problemSolving", "practical"],
        "Teaching or guiding others": ["helping", "communication", "leadership", "patience"],
        "Creating art or designs": ["creative", "visual", "artistic", "expression"],
        "Managing people or businesses": ["leadership", "business", "strategic", "organized"],
        "Researching or discovering new things": ["analytical", "curiosity", "science", "independent"],
        "I haven't thought about it yet": ["curiosity", "exploring", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 7: Location preference
    "7": {
        "In Zambia only - I want to stay here": ["community", "local", "patriotism", "home"],
        "In Zambia and abroad - I'm open to both": ["ambitious", "flexible", "exploring", "global"],
        "Outside Zambia only - I want to travel": ["adventure", "travel", "ambitious", "global"],
        "I'm flexible - anywhere is fine": ["versatile", "adaptable", "adventure", "openMind"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 8: Leadership
    "8": {
        "Leader - I like taking charge and guiding others": ["leadership", "confident", "strategic", "decisive"],
        "Follower - I prefer being part of a team": ["teamwork", "supportive", "reliable", "collaborative"],
        "Both - I can lead and follow when needed": ["versatile", "adaptive", "balanced", "teamwork"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 9: Analytical vs Creative
    "9": {
        "Analytical - I like logic, numbers, and problem-solving": ["analytical", "logical", "problemSolving", "criticalThinker"],
        "Creative - I like imagination, ideas, and expression": ["creative", "imaginative", "expression", "artistic"],
        "Both - I have a balance of analytical and creative skills": ["versatile", "balanced", "creative", "analytical"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 10: Routine vs Variety
    "10": {
        "Routine - I like predictable, stable work": ["structured", "organized", "stable", "methodical"],
        "Variety - I like new challenges every day": ["flexible", "adaptive", "dynamic", "adventure"],
        "A mix of both": ["balanced", "versatile", "adaptive", "practical"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 11: Impact preference
    "11": {
        "Help individuals directly (one-on-one)": ["helping", "compassion", "personal", "empathy"],
        "Help my community": ["community", "helping", "local", "social"],
        "Help the environment": ["nature", "conservation", "outdoor", "science"],
        "Help businesses succeed": ["business", "analytical", "strategic", "professional"],
        "Help the country of Zambia": ["leadership", "community", "patriotism", "public"],
        "I want to help in any way I can": ["helping", "versatile", "compassion", "community"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 12: Work style
    "12": {
        "Alone - I concentrate better by myself": ["independent", "focused", "introverted", "selfMotivated"],
        "With others - I enjoy teamwork and collaboration": ["teamwork", "peoplePerson", "extroverted", "collaborative"],
        "Both - I can work alone or with a team": ["versatile", "adaptive", "balanced", "flexible"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 13: Skill preferences
    "13": {
        "Technical skills (building, fixing, engineering)": ["technical", "analytical", "practical", "handsOn"],
        "Medical skills (healthcare, treating patients)": ["medical", "helping", "science", "compassion"],
        "Business skills (finance, management, leadership)": ["business", "leadership", "analytical", "strategic"],
        "Creative skills (art, design, writing)": ["creative", "visual", "writing", "imagination"],
        "Teaching skills (education, training)": ["helping", "communication", "patience", "leadership"],
        "Environmental skills (farming, conservation)": ["outdoor", "nature", "practical", "conservation"],
        "All of the above - I want to learn many things": ["versatile", "curiosity", "openMind", "ambitious"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 14: Independence
    "14": {
        "Myself - I want to be my own boss and start a business": ["entrepreneurial", "riskTaker", "leadership", "independent"],
        "Someone else - I prefer a job with a set role": ["structured", "stable", "reliable", "teamwork"],
        "Either - I'm open to both": ["versatile", "flexible", "balanced", "adaptable"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    },
    // Question 15: Pressure handling
    "15": {
        "I thrive under pressure - I work well with deadlines": ["highPressure", "resilient", "ambitious", "driven"],
        "I prefer a calm, steady work pace": ["patient", "methodical", "stable", "balanced"],
        "I can handle some pressure, but not too much": ["balanced", "practical", "realistic", "flexible"],
        "Not sure yet 🤷": ["curiosity", "openMind", "exploring"]
    }
};

// ================================================================
// SECTION 4: ALL TRAITS LIST
// ================================================================

const ALL_TRAITS = [
    "analytical", "technical", "outdoor", "leadership", "physical", "highSalary",
    "teamwork", "creative", "independent", "indoor", "detailOriented", "helping",
    "highPressure", "dedication", "shiftWork", "compassion", "practical", "science",
    "medical", "community", "business", "riskTaker", "professional", "visual",
    "technology", "flexible", "communication", "curiosity", "writing", "patience",
    "planning", "resilience", "peoplePerson", "enthusiasm", "knowledge", "nature",
    "conservation", "artistic", "versatile", "problemSolving", "strategic", "structured",
    "adventure", "handsOn", "travel", "adaptable", "focused", "ambitious", "balanced",
    "passion", "fulfillment", "purpose", "expression", "organized", "exploring",
    "local", "confident", "supportive", "reliable", "adaptive", "logical", "imaginative",
    "stable", "dynamic", "personal", "patriotism", "introverted", "extroverted",
    "entrepreneurial", "resilient", "patient", "methodical", "precision", "handEyeCoordination",
    "attentionToDetail", "handcraft", "craftsmanship", "empathy", "animalLover", "advocacy",
    "decisionMaking", "courage", "observation", "selfMotivated", "collaborative",
    "criticalThinker", "research", "openMind", "global", "home", "social", "public",
    "spiritual", "counseling", "advocacy", "bravery", "quickThinking", "integrity",
    "dependability", "diagnostic", "safety", "precision"
];

// ================================================================
// SECTION 5: QUESTIONS - All with MULTI-SELECT support
// ================================================================

const questions = [
    {
        id: 1,
        text: 'What school subjects do you enjoy the most? (Select all that apply)',
        multiSelect: true, // Allows multiple selections
        options: [
            'Mathematics and Science',
            'English and Creative Writing',
            'History and Geography',
            'Art and Design',
            'ICT and Computers',
            'Agriculture and Biology',
            'Business Studies',
            'Not sure yet 🤷'
        ],
        // Weights: how much this question affects each career cluster
        weights: {
            'Mathematics and Science': { 'STEM': 4, 'Healthcare': 3, 'Business': 2, 'Creative': 1, 'Helping': 2, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 3 },
            'English and Creative Writing': { 'STEM': 1, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 4, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'History and Geography': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 3, 'Helping': 3, 'Outdoor': 4, 'Public Service': 4, 'Skilled Trades': 1 },
            'Art and Design': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 3 },
            'ICT and Computers': { 'STEM': 5, 'Healthcare': 1, 'Business': 3, 'Creative': 3, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Agriculture and Biology': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 1, 'Helping': 2, 'Outdoor': 5, 'Public Service': 1, 'Skilled Trades': 2 },
            'Business Studies': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 2,
        text: 'What kind of activities do you enjoy doing in your free time? (Select all that apply)',
        multiSelect: true,
        options: [
            'Building, fixing, or taking things apart',
            'Helping people or volunteering',
            'Drawing, painting, or creative projects',
            'Solving puzzles or playing strategy games',
            'Working outdoors or gardening',
            'Using computers or learning new technology',
            'Reading, writing, or storytelling',
            'Not sure yet 🤷'
        ],
        weights: {
            'Building, fixing, or taking things apart': { 'STEM': 5, 'Healthcare': 1, 'Business': 2, 'Creative': 2, 'Helping': 1, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 5 },
            'Helping people or volunteering': { 'STEM': 1, 'Healthcare': 4, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'Drawing, painting, or creative projects': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 3 },
            'Solving puzzles or playing strategy games': { 'STEM': 4, 'Healthcare': 2, 'Business': 3, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Working outdoors or gardening': { 'STEM': 2, 'Healthcare': 2, 'Business': 1, 'Creative': 1, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 3 },
            'Using computers or learning new technology': { 'STEM': 5, 'Healthcare': 1, 'Business': 3, 'Creative': 3, 'Helping': 1, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Reading, writing, or storytelling': { 'STEM': 2, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 3,
        text: 'What kind of work environment do you prefer? (Select all that apply)',
        multiSelect: true,
        options: [
            'Office or indoor setting',
            'Outdoors in nature',
            'Hospital, clinic, or lab',
            'Workshop or factory',
            'School or classroom',
            'Travel or remote work',
            'I\'m flexible',
            'Not sure yet 🤷'
        ],
        weights: {
            'Office or indoor setting': { 'STEM': 3, 'Healthcare': 2, 'Business': 5, 'Creative': 4, 'Helping': 2, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Outdoors in nature': { 'STEM': 3, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 2, 'Outdoor': 5, 'Public Service': 3, 'Skilled Trades': 3 },
            'Hospital, clinic, or lab': { 'STEM': 2, 'Healthcare': 5, 'Business': 1, 'Creative': 1, 'Helping': 4, 'Outdoor': 1, 'Public Service': 1, 'Skilled Trades': 1 },
            'Workshop or factory': { 'STEM': 4, 'Healthcare': 1, 'Business': 2, 'Creative': 2, 'Helping': 1, 'Outdoor': 3, 'Public Service': 1, 'Skilled Trades': 5 },
            'School or classroom': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 3, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 1 },
            'Travel or remote work': { 'STEM': 3, 'Healthcare': 2, 'Business': 3, 'Creative': 4, 'Helping': 2, 'Outdoor': 4, 'Public Service': 3, 'Skilled Trades': 2 },
            'I\'m flexible': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 4,
        text: 'Do you prefer working with people or things? (Select all that apply)',
        multiSelect: true,
        options: [
            'Working with people - I love helping and interacting',
            'Working with things - I prefer tasks and projects',
            'Both equally',
            'Not sure yet 🤷'
        ],
        weights: {
            'Working with people - I love helping and interacting': { 'STEM': 2, 'Healthcare': 4, 'Business': 4, 'Creative': 3, 'Helping': 5, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'Working with things - I prefer tasks and projects': { 'STEM': 5, 'Healthcare': 2, 'Business': 2, 'Creative': 3, 'Helping': 1, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 4 },
            'Both equally': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 5,
        text: 'How important is salary to you? (Select all that apply)',
        multiSelect: true,
        options: [
            'Very important - I want to earn a high salary',
            'Somewhat important - I want a comfortable salary',
            'Not very important - I care more about enjoyment',
            'Not sure yet 🤷'
        ],
        weights: {
            'Very important - I want to earn a high salary': { 'STEM': 4, 'Healthcare': 4, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Somewhat important - I want a comfortable salary': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not very important - I care more about enjoyment': { 'STEM': 2, 'Healthcare': 2, 'Business': 1, 'Creative': 4, 'Helping': 4, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 6,
        text: 'What does your ideal job look like? (Select all that apply)',
        multiSelect: true,
        options: [
            'Helping others or making a difference',
            'Building things or solving problems',
            'Teaching or guiding others',
            'Creating art or designs',
            'Managing people or businesses',
            'Researching or discovering new things',
            'I haven\'t thought about it yet',
            'Not sure yet 🤷'
        ],
        weights: {
            'Helping others or making a difference': { 'STEM': 1, 'Healthcare': 5, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 1 },
            'Building things or solving problems': { 'STEM': 5, 'Healthcare': 2, 'Business': 3, 'Creative': 2, 'Helping': 1, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 4 },
            'Teaching or guiding others': { 'STEM': 2, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Creating art or designs': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 3 },
            'Managing people or businesses': { 'STEM': 2, 'Healthcare': 2, 'Business': 5, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Researching or discovering new things': { 'STEM': 4, 'Healthcare': 3, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 1 },
            'I haven\'t thought about it yet': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 7,
        text: 'Where would you like to work? (Select all that apply)',
        multiSelect: true,
        options: [
            'In Zambia only - I want to stay here',
            'In Zambia and abroad - I\'m open to both',
            'Outside Zambia only - I want to travel',
            'I\'m flexible - anywhere is fine',
            'Not sure yet 🤷'
        ],
        weights: {
            'In Zambia only - I want to stay here': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 3 },
            'In Zambia and abroad - I\'m open to both': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Outside Zambia only - I want to travel': { 'STEM': 4, 'Healthcare': 4, 'Business': 3, 'Creative': 4, 'Helping': 2, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'I\'m flexible - anywhere is fine': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 4, 'Outdoor': 4, 'Public Service': 4, 'Skilled Trades': 4 },
            'Not sure yet 🤷': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 8,
        text: 'Do you see yourself as a leader or a follower? (Select all that apply)',
        multiSelect: true,
        options: [
            'Leader - I like taking charge and guiding others',
            'Follower - I prefer being part of a team',
            'Both - I can lead and follow when needed',
            'Not sure yet 🤷'
        ],
        weights: {
            'Leader - I like taking charge and guiding others': { 'STEM': 3, 'Healthcare': 3, 'Business': 5, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 5, 'Skilled Trades': 3 },
            'Follower - I prefer being part of a team': { 'STEM': 3, 'Healthcare': 4, 'Business': 2, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 4 },
            'Both - I can lead and follow when needed': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 4, 'Helping': 4, 'Outdoor': 4, 'Public Service': 4, 'Skilled Trades': 4 },
            'Not sure yet 🤷': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 9,
        text: 'Are you more analytical or creative? (Select all that apply)',
        multiSelect: true,
        options: [
            'Analytical - I like logic, numbers, and problem-solving',
            'Creative - I like imagination, ideas, and expression',
            'Both - I have a balance of analytical and creative skills',
            'Not sure yet 🤷'
        ],
        weights: {
            'Analytical - I like logic, numbers, and problem-solving': { 'STEM': 5, 'Healthcare': 3, 'Business': 4, 'Creative': 1, 'Helping': 2, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 3 },
            'Creative - I like imagination, ideas, and expression': { 'STEM': 1, 'Healthcare': 2, 'Business': 2, 'Creative': 5, 'Helping': 3, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 3 },
            'Both - I have a balance of analytical and creative skills': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 10,
        text: 'Do you prefer routine or variety in your work? (Select all that apply)',
        multiSelect: true,
        options: [
            'Routine - I like predictable, stable work',
            'Variety - I like new challenges every day',
            'A mix of both',
            'Not sure yet 🤷'
        ],
        weights: {
            'Routine - I like predictable, stable work': { 'STEM': 3, 'Healthcare': 3, 'Business': 4, 'Creative': 2, 'Helping': 3, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 4 },
            'Variety - I like new challenges every day': { 'STEM': 3, 'Healthcare': 3, 'Business': 2, 'Creative': 4, 'Helping': 3, 'Outdoor': 4, 'Public Service': 3, 'Skilled Trades': 3 },
            'A mix of both': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 11,
        text: 'What kind of impact do you want to make? (Select all that apply)',
        multiSelect: true,
        options: [
            'Help individuals directly (one-on-one)',
            'Help my community',
            'Help the environment',
            'Help businesses succeed',
            'Help the country of Zambia',
            'I want to help in any way I can',
            'Not sure yet 🤷'
        ],
        weights: {
            'Help individuals directly (one-on-one)': { 'STEM': 1, 'Healthcare': 4, 'Business': 2, 'Creative': 2, 'Helping': 5, 'Outdoor': 2, 'Public Service': 3, 'Skilled Trades': 2 },
            'Help my community': { 'STEM': 2, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 2 },
            'Help the environment': { 'STEM': 3, 'Healthcare': 2, 'Business': 1, 'Creative': 2, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 2 },
            'Help businesses succeed': { 'STEM': 3, 'Healthcare': 1, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 1, 'Public Service': 2, 'Skilled Trades': 2 },
            'Help the country of Zambia': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 5, 'Skilled Trades': 3 },
            'I want to help in any way I can': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 12,
        text: 'Do you prefer working alone or with others? (Select all that apply)',
        multiSelect: true,
        options: [
            'Alone - I concentrate better by myself',
            'With others - I enjoy teamwork and collaboration',
            'Both - I can work alone or with a team',
            'Not sure yet 🤷'
        ],
        weights: {
            'Alone - I concentrate better by myself': { 'STEM': 3, 'Healthcare': 2, 'Business': 2, 'Creative': 4, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 3 },
            'With others - I enjoy teamwork and collaboration': { 'STEM': 3, 'Healthcare': 4, 'Business': 4, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 3 },
            'Both - I can work alone or with a team': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 13,
        text: 'What kind of skills do you want to develop? (Select all that apply)',
        multiSelect: true,
        options: [
            'Technical skills (building, fixing, engineering)',
            'Medical skills (healthcare, treating patients)',
            'Business skills (finance, management, leadership)',
            'Creative skills (art, design, writing)',
            'Teaching skills (education, training)',
            'Environmental skills (farming, conservation)',
            'All of the above - I want to learn many things',
            'Not sure yet 🤷'
        ],
        weights: {
            'Technical skills (building, fixing, engineering)': { 'STEM': 5, 'Healthcare': 1, 'Business': 2, 'Creative': 2, 'Helping': 1, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 5 },
            'Medical skills (healthcare, treating patients)': { 'STEM': 2, 'Healthcare': 5, 'Business': 1, 'Creative': 1, 'Helping': 4, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 1 },
            'Business skills (finance, management, leadership)': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 2, 'Helping': 2, 'Outdoor': 1, 'Public Service': 3, 'Skilled Trades': 2 },
            'Creative skills (art, design, writing)': { 'STEM': 2, 'Healthcare': 1, 'Business': 2, 'Creative': 5, 'Helping': 2, 'Outdoor': 2, 'Public Service': 1, 'Skilled Trades': 3 },
            'Teaching skills (education, training)': { 'STEM': 2, 'Healthcare': 2, 'Business': 3, 'Creative': 3, 'Helping': 5, 'Outdoor': 2, 'Public Service': 4, 'Skilled Trades': 2 },
            'Environmental skills (farming, conservation)': { 'STEM': 3, 'Healthcare': 1, 'Business': 1, 'Creative': 2, 'Helping': 2, 'Outdoor': 5, 'Public Service': 2, 'Skilled Trades': 3 },
            'All of the above - I want to learn many things': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 14,
        text: 'Do you want to work for yourself or for someone else? (Select all that apply)',
        multiSelect: true,
        options: [
            'Myself - I want to be my own boss and start a business',
            'Someone else - I prefer a job with a set role',
            'Either - I\'m open to both',
            'Not sure yet 🤷'
        ],
        weights: {
            'Myself - I want to be my own boss and start a business': { 'STEM': 2, 'Healthcare': 1, 'Business': 5, 'Creative': 4, 'Helping': 2, 'Outdoor': 3, 'Public Service': 2, 'Skilled Trades': 4 },
            'Someone else - I prefer a job with a set role': { 'STEM': 4, 'Healthcare': 4, 'Business': 3, 'Creative': 3, 'Helping': 4, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 3 },
            'Either - I\'m open to both': { 'STEM': 3, 'Healthcare': 3, 'Business': 4, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    },
    {
        id: 15,
        text: 'How do you handle pressure and deadlines? (Select all that apply)',
        multiSelect: true,
        options: [
            'I thrive under pressure - I work well with deadlines',
            'I prefer a calm, steady work pace',
            'I can handle some pressure, but not too much',
            'Not sure yet 🤷'
        ],
        weights: {
            'I thrive under pressure - I work well with deadlines': { 'STEM': 4, 'Healthcare': 4, 'Business': 4, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 4, 'Skilled Trades': 3 },
            'I prefer a calm, steady work pace': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 4, 'Helping': 4, 'Outdoor': 4, 'Public Service': 2, 'Skilled Trades': 4 },
            'I can handle some pressure, but not too much': { 'STEM': 3, 'Healthcare': 3, 'Business': 3, 'Creative': 3, 'Helping': 3, 'Outdoor': 3, 'Public Service': 3, 'Skilled Trades': 3 },
            'Not sure yet 🤷': { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 }
        },
        defaultWeight: { 'STEM': 2, 'Healthcare': 2, 'Business': 2, 'Creative': 2, 'Helping': 2, 'Outdoor': 2, 'Public Service': 2, 'Skilled Trades': 2 },
        isNotSure: false
    }
];

// ================================================================
// SECTION 6: APPLICATION STATE
// ================================================================

const STORAGE_KEY = 'career_quest_state';
const THEME_KEY = 'career_quest_theme';

let state = {
    currentQuestion: 0,
    answers: [], // Now stores arrays for multi-select
    quizStarted: false,
    quizCompleted: false,
    results: null,
    careerScores: {},
    isDiscoveryMode: false,
    colorMode: 'color',
    activeFilter: 'all',
    searchQuery: '',
    darkMode: false,
    kbFocusIndex: -1
};

// ================================================================
// SECTION 7: DOM REFERENCES
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
    filterChips: document.getElementById('filter-chips'),
    careerMatches: document.getElementById('career-matches'),
    subjectList: document.getElementById('subject-list'),
    careerClusters: document.getElementById('career-clusters'),
    comparisonSelectors: document.getElementById('comparison-selectors'),
    comparisonTable: document.getElementById('comparison-table'),
    downloadPdfBtn: document.getElementById('download-pdf-btn'),
    printBtn: document.getElementById('print-btn'),
    retakeBtn: document.getElementById('retake-btn'),
    discoveryMode: document.getElementById('discovery-mode'),
    discoveryContent: document.getElementById('discovery-content'),
    careerModal: document.getElementById('career-modal'),
    careerDetailContent: document.getElementById('career-detail-content'),
    modalClose: document.querySelector('.modal-close'),
    backToTop: document.getElementById('back-to-top'),
    confettiCanvas: document.getElementById('confetti-canvas'),
    toastContainer: document.getElementById('toast-container'),
    colorModeRadios: document.querySelectorAll('input[name="color-mode"]')
};

// ================================================================
// SECTION 8: UTILITY FUNCTIONS
// ================================================================

// Show a toast notification popup
function showToast(message, duration) {
    duration = duration || 3000; // Default 3 seconds
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);
    setTimeout(function() { toast.remove(); }, duration);
}

// Debounce function to limit how often a function is called
function debounce(fn, delay) {
    let timer;
    return function() {
        const args = arguments;
        const ctx = this;
        clearTimeout(timer);
        timer = setTimeout(function() { fn.apply(ctx, args); }, delay);
    };
}

// Check if an answer is "Not Sure"
function isNotSureAnswer(answer) {
    return !answer || answer.indexOf('Not sure') !== -1 || answer.indexOf('🤷') !== -1;
}

// Save state to localStorage
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
            timestamp: Date.now()
        }));
    } catch (e) {}
}

// Load saved state from localStorage
function loadSavedState() {
    try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        var data = JSON.parse(raw);
        // Expire after 7 days
        if (data.timestamp && Date.now() - data.timestamp > 7 * 24 * 60 * 60 * 1000) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return data;
    } catch (e) { return null; }
}

// Clear saved state from localStorage
function clearSavedState() {
    try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
}

// Save theme preference
function saveTheme(isDark) {
    try { localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light'); } catch(e) {}
}

// Load theme preference
function loadTheme() {
    try {
        var t = localStorage.getItem(THEME_KEY);
        if (t === 'dark') return true;
        if (t === 'light') return false;
    } catch(e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// ================================================================
// SECTION 9: SCREEN MANAGEMENT
// ================================================================

// Show a specific screen and hide all others
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    // Show the target screen
    var target = document.getElementById(screenName);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ================================================================
// SECTION 10: DARK MODE
// ================================================================

// Toggle dark mode on/off
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    applyTheme();
    saveTheme(state.darkMode);
}

// Apply the current theme to the page
function applyTheme() {
    document.body.classList.toggle('dark-mode', state.darkMode);
    DOM.themeIcon.textContent = state.darkMode ? '☀️' : '🌙';
    DOM.themeLabel.textContent = state.darkMode ? 'Light' : 'Dark';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = state.darkMode ? '#0f172a' : '#008000';
}

// ================================================================
// SECTION 11: QUIZ LOGIC
// ================================================================

// Start the quiz with optional restore state
function startQuiz(restoreState) {
    state.quizStarted = true;
    state.isDiscoveryMode = false;
    // If not restoring, reset everything
    if (!restoreState || !state.answers.length) {
        state.currentQuestion = 0;
        state.answers = [];
        state.quizCompleted = false;
        state.results = null;
        state.careerScores = {};
    }
    showScreen('quiz-screen');
    renderQuestion();
}

// Start discovery mode for indecisive students
function startDiscoveryMode() {
    state.isDiscoveryMode = true;
    state.quizStarted = true;
    showScreen('results-screen');
    generateDiscoveryResults();
}

// Render the current question
function renderQuestion() {
    var question = questions[state.currentQuestion];
    var qNum = state.currentQuestion + 1;
    var total = questions.length;

    // Update question counter
    DOM.questionCounter.textContent = 'Question ' + qNum + ' of ' + total;
    // Update progress bar
    var pct = Math.round((qNum / total) * 100);
    DOM.progressFill.style.width = pct + '%';
    DOM.progressBar.setAttribute('aria-valuenow', pct);

    // Animate question transition
    DOM.questionContainer.classList.remove('question-enter');
    void DOM.questionContainer.offsetWidth; // Force reflow
    DOM.questionContainer.classList.add('question-enter');

    // Set question text
    DOM.questionText.textContent = question.text;

    // Show/hide multi-select hint
    if (question.multiSelect) {
        DOM.multiSelectHint.style.display = 'block';
    } else {
        DOM.multiSelectHint.style.display = 'none';
    }

    // Build options with DocumentFragment for better performance
    var fragment = document.createDocumentFragment();
    var letters = 'ABCDEFGHIJKLMNOP';

    question.options.forEach(function(option, index) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.setAttribute('role', 'checkbox');
        btn.dataset.index = index;

        // Check if this option is selected (for multi-select)
        var answerArray = state.answers[state.currentQuestion] || [];
        var isSelected = answerArray.indexOf(option) !== -1;
        if (isSelected) {
            btn.classList.add('selected');
            btn.setAttribute('aria-checked', 'true');
        } else {
            btn.setAttribute('aria-checked', 'false');
        }

        // Add "not sure" class for special styling
        if (isNotSureAnswer(option)) btn.classList.add('not-sure');

        // Letter indicator
        var letter = document.createElement('span');
        letter.className = 'option-letter';
        letter.textContent = letters[index] || String(index + 1);
        letter.setAttribute('aria-hidden', 'true');

        // Text content
        var text = document.createElement('span');
        text.textContent = option;

        btn.appendChild(letter);
        btn.appendChild(text);
        fragment.appendChild(btn);
    });

    DOM.optionsContainer.innerHTML = '';
    DOM.optionsContainer.appendChild(fragment);

    // Show/hide previous button
    DOM.prevBtn.style.display = state.currentQuestion === 0 ? 'none' : 'inline-block';
    // Update next button text
    DOM.nextBtn.textContent = state.currentQuestion === questions.length - 1 ? '📊 See Results' : '➡ Next';
    // Enable/disable next button
    var currentAnswer = state.answers[state.currentQuestion] || [];
    DOM.nextBtn.disabled = currentAnswer.length === 0;

    state.kbFocusIndex = -1;
    saveState();
}

// ================================================================
// SECTION 12: MULTI-SELECT LOGIC
// ================================================================

// Toggle an option selection (for multi-select)
function toggleOption(button) {
    var question = questions[state.currentQuestion];
    var isMultiSelect = question.multiSelect || false;

    if (isMultiSelect) {
        // Multi-select: toggle the selected class
        button.classList.toggle('selected');
        var isNowSelected = button.classList.contains('selected');
        button.setAttribute('aria-checked', isNowSelected ? 'true' : 'false');
        // Update the answer array
        updateMultiSelectAnswer();
    } else {
        // Single select: remove all selections and select this one
        var allOptions = DOM.optionsContainer.querySelectorAll('.option-btn');
        allOptions.forEach(function(btn) {
            btn.classList.remove('selected');
            btn.setAttribute('aria-checked', 'false');
        });
        button.classList.add('selected');
        button.setAttribute('aria-checked', 'true');
        // Update the answer array
        updateSingleSelectAnswer(button);
    }

    // Enable the next button if at least one option is selected
    updateNextButtonState();
    saveState();

    // Auto-advance for single-select questions after a delay
    if (!isMultiSelect && state.currentQuestion < questions.length - 1) {
        setTimeout(nextQuestion, 400);
    }
}

// Update answer for multi-select questions
function updateMultiSelectAnswer() {
    // Get all selected options
    var selected = DOM.optionsContainer.querySelectorAll('.option-btn.selected');
    // Store the selected option texts in the answers array
    state.answers[state.currentQuestion] = Array.from(selected).map(function(btn) {
        // Get the text from the span (not the letter)
        var spans = btn.querySelectorAll('span');
        return spans[spans.length - 1].textContent;
    });
}

// Update answer for single-select questions
function updateSingleSelectAnswer(button) {
    var spans = button.querySelectorAll('span');
    state.answers[state.currentQuestion] = [spans[spans.length - 1].textContent];
}

// Update the next button state based on whether the current question is answered
function updateNextButtonState() {
    var currentAnswer = state.answers[state.currentQuestion] || [];
    DOM.nextBtn.disabled = currentAnswer.length === 0;
}

// ================================================================
// SECTION 13: NAVIGATION
// ================================================================

// Go to the next question or show results
function nextQuestion() {
    // Check if current question is answered
    var currentAnswer = state.answers[state.currentQuestion] || [];
    if (currentAnswer.length === 0) {
        showToast('Please select at least one answer before continuing.');
        return;
    }

    // If this is the last question, calculate results
    if (state.currentQuestion === questions.length - 1) {
        calculateResults();
        state.quizCompleted = true;
        saveState();
        showScreen('results-screen');
        displayResults();
        return;
    }

    // Move to the next question
    state.currentQuestion++;
    renderQuestion();
}

// Go to the previous question
function prevQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        renderQuestion();
    }
}

// ================================================================
// SECTION 14: KEYBOARD NAVIGATION
// ================================================================

// Handle keyboard navigation for the quiz
function handleKeyboardNav(e) {
    // Only work on the quiz screen
    if (!DOM.quizScreen.classList.contains('active')) return;

    var options = DOM.optionsContainer.querySelectorAll('.option-btn');
    if (!options.length) return;

    // Number keys 1-9 select options
    var num = parseInt(e.key);
    if (num >= 1 && num <= options.length) {
        e.preventDefault();
        toggleOption(options[num - 1]);
        return;
    }

    // Arrow keys for navigation
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

// Update keyboard focus indicator on options
function updateKbFocus(options) {
    options.forEach(function(opt, i) {
        opt.classList.toggle('kb-focus', i === state.kbFocusIndex);
        if (i === state.kbFocusIndex) {
            opt.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    });
}

// ================================================================
// SECTION 15: SMART SCORING ENGINE
// Layer 1: Cluster weights from questions
// Layer 2: Trait matching from career traits
// ================================================================

function calculateResults() {
    // Initialize cluster scores
    var clusterScores = { 'STEM': 0, 'Healthcare': 0, 'Business': 0, 'Creative': 0, 'Helping': 0, 'Outdoor': 0, 'Public Service': 0, 'Skilled Trades': 0 };
    var clusterCounts = { 'STEM': 0, 'Healthcare': 0, 'Business': 0, 'Creative': 0, 'Helping': 0, 'Outdoor': 0, 'Public Service': 0, 'Skilled Trades': 0 };

    // Initialize trait scores
    var traitScores = {};
    var traitCounts = {};
    ALL_TRAITS.forEach(function(t) { traitScores[t] = 0; traitCounts[t] = 0; });

    // Process each answer (which may be an array for multi-select)
    state.answers.forEach(function(answer, index) {
        if (!answer || !answer.length) return; // Skip unanswered questions

        var question = questions[index];
        // If answer is an array (multi-select), process each selected option
        if (Array.isArray(answer)) {
            answer.forEach(function(selectedOption) {
                if (!selectedOption) return;
                var nsq = isNotSureAnswer(selectedOption);

                // Layer 1: Cluster weights
                var weights = nsq ? question.defaultWeight : (question.weights[selectedOption] || question.defaultWeight);
                for (var cluster in weights) {
                    if (clusterScores.hasOwnProperty(cluster)) {
                        clusterScores[cluster] += weights[cluster];
                        clusterCounts[cluster]++;
                    }
                }

                // Layer 2: Trait relevance
                if (!nsq) {
                    var qTraits = questionTraits[index + 1];
                    if (qTraits) {
                        var matchedTraits = qTraits[selectedOption];
                        if (matchedTraits) {
                            matchedTraits.forEach(function(t) {
                                if (traitScores.hasOwnProperty(t)) {
                                    traitScores[t] += 2;
                                    traitCounts[t]++;
                                }
                            });
                        }
                    }
                }
            });
        } else {
            // Single-select fallback (shouldn't happen with new design)
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

    // Normalize cluster scores (average per cluster)
    var avgCluster = {};
    for (var c in clusterScores) {
        avgCluster[c] = clusterCounts[c] > 0 ? clusterScores[c] / clusterCounts[c] : 2;
    }

    // Normalize trait scores (average per trait)
    var avgTrait = {};
    for (var t in traitScores) {
        avgTrait[t] = traitCounts[t] > 0 ? traitScores[t] / traitCounts[t] : 0;
    }

    // Combine: 60% cluster + 40% trait for each career
    var scores = {};
    for (var name in careers) {
        var career = careers[name];
        var clusterScore = avgCluster[career.cluster] || 2;
        var traits = careerTraits[name] || [];

        // Calculate trait match for this career
        var traitTotal = 0;
        var traitCount = 0;
        traits.forEach(function(tr) {
            if (avgTrait[tr] > 0) {
                traitTotal += avgTrait[tr];
                traitCount++;
            }
        });
        var traitMatch = traitCount > 0 ? traitTotal / traitCount : 0;

        // Normalize trait from 0-2 range to 0-5 for fair weighting
        var normalizedTrait = (traitMatch / 2) * 5;
        var combined = (clusterScore * 0.6) + (normalizedTrait * 0.4);

        // Convert to percentage (0-100)
        var pct = Math.round((combined / 5) * 100);
        pct = Math.max(0, Math.min(100, pct));

        // Small deterministic jitter to break ties
        var seed = 0;
        for (var ci = 0; ci < name.length; ci++) seed += name.charCodeAt(ci);
        var jitter = (seed % 3) - 1;
        pct = Math.max(0, Math.min(100, pct + jitter));

        scores[name] = pct;
    }

    // Store scores and sorted results
    state.careerScores = scores;
    state.results = Object.keys(scores).sort(function(a, b) { return scores[b] - scores[a]; });
}

// ================================================================
// SECTION 16: RESULTS DISPLAY
// ================================================================

function displayResults() {
    // Check if in discovery mode
    if (state.isDiscoveryMode) { generateDiscoveryResults(); return; }

    var topCareers = state.results.slice(0, 10);
    var topName = topCareers[0];
    var topScore = state.careerScores[topName];

    // Update subtitle
    DOM.resultsSubtitle.textContent = 'Your #1 match is ' + topName + ' at ' + topScore + '%! Here are your top career matches.';

    // Render all results components
    renderStatsSummary(topCareers);
    renderFilterChips();
    renderCareerCards(topCareers);
    displaySubjectRecommendations();
    displayCareerClusters();
    displayComparisonTool();

    // Hide discovery mode
    DOM.discoveryMode.style.display = 'none';
    // Launch celebration animation
    launchConfetti();
    clearSavedState();
}

// Render statistics summary cards
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

    var avgScore = Math.round(totalScore / topCareers.length);
    var clusterCount = Object.keys(clusters).length;

    DOM.statsSummary.innerHTML =
        '<div class="stat-card"><span class="stat-value">' + topCareers.length + '</span><span class="stat-label">Top Matches</span></div>' +
        '<div class="stat-card"><span class="stat-value">' + clusterCount + '</span><span class="stat-label">Clusters</span></div>' +
        '<div class="stat-card"><span class="stat-value">' + avgScore + '%</span><span class="stat-label">Avg Match</span></div>' +
        '<div class="stat-card"><span class="stat-value">' + globalCount + '</span><span class="stat-label">Global Ready</span></div>';
}

// Render filter chips
function renderFilterChips() {
    var clusters = ['all', 'STEM', 'Healthcare', 'Business', 'Creative', 'Helping', 'Outdoor', 'Public Service', 'Skilled Trades'];
    var icons = { all: '🎯', STEM: '🔬', Healthcare: '🏥', Business: '💼', Creative: '🎨', Helping: '🤝', Outdoor: '🌿', 'Public Service': '🏛️', 'Skilled Trades': '🔧' };

    DOM.filterChips.innerHTML = clusters.map(function(c) {
        return '<button class="filter-chip' + (state.activeFilter === c ? ' active' : '') + '" data-filter="' + c + '">' + (icons[c] || '📌') + ' ' + c;
    }).join('');
}

// Render career cards with search/filter
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
        DOM.careerMatches.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><p>No careers match your search. Try different keywords or clear the filter.</p></div>';
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
                '<button class="view-details-btn" data-career="' + careerName + '" aria-label="View details for ' + careerName + '">Details</button>' +
            '</div>';

        fragment.appendChild(card);

        // Staggered reveal animation
        setTimeout(function() {
            card.classList.add('revealed');
            var fill = card.querySelector('.score-fill');
            if (fill) fill.style.width = score + '%';
        }, 80 * index);
    });

    DOM.careerMatches.innerHTML = '';
    DOM.careerMatches.appendChild(fragment);
}

// Handle career search input
function handleCareerSearch(e) {
    state.searchQuery = e.target.value;
    renderCareerCards(state.results.slice(0, 10));
}

// Handle filter chip click
function handleFilterClick(e) {
    var chip = e.target.closest('.filter-chip');
    if (!chip) return;
    state.activeFilter = chip.dataset.filter;
    renderFilterChips();
    renderCareerCards(state.results.slice(0, 10));
}

// ================================================================
// SECTION 17: SUBJECT RECOMMENDATIONS
// ================================================================

function displaySubjectRecommendations() {
    var topCareers = state.results.slice(0, 5);
    var required = {};
    var recommended = {};

    topCareers.forEach(function(name) {
        var c = careers[name];
        if (!c) return;
        // Check if career uses requiredSubjects or requiredSkills
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
        html += '<div class="subject-section-label">⭐ MUST HAVE:</div><div class="subject-tags-row">';
        sortedReq.forEach(function(s) {
            var isSkill = s.indexOf('Skill: ') === 0;
            var displayName = isSkill ? s.replace('Skill: ', '') : s;
            html += '<span class="subject-tag required">' + displayName + (isSkill ? ' 🛠️' : '') + '</span>';
        });
        html += '</div>';
    }
    if (sortedRec.length) {
        html += '<div class="subject-section-label">👍 RECOMMENDED:</div><div class="subject-tags-row">';
        sortedRec.forEach(function(s) { html += '<span class="subject-tag">' + s + '</span>'; });
        html += '</div>';
    }
    if (!html) html = '<p>No subject recommendations available.</p>';
    DOM.subjectList.innerHTML = html;
}

// ================================================================
// SECTION 18: CAREER CLUSTERS (Web Map)
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
            careersInCluster.map(function(n) { return '<a class="cluster-career-item" data-career="' + n + '">• ' + n + '</a>'; }).join('') +
            '</div></div>';
    }
    DOM.careerClusters.innerHTML = html;
}

// ================================================================
// SECTION 19: COMPARISON TOOL
// ================================================================

function displayComparisonTool() {
    var topCareers = state.results.slice(0, 10);
    var html = '';
    for (var i = 1; i <= 3; i++) {
        html += '<select class="comparison-select" id="compare-' + i + '" aria-label="Select career ' + i + '">' +
            '<option value="">Select Career ' + i + '</option>' +
            topCareers.map(function(n) { return '<option value="' + n + '">' + n + '</option>'; }).join('') +
            '</select>';
    }
    DOM.comparisonSelectors.innerHTML = html;
    updateComparison();
}

function updateComparison() {
    var selected = [];
    for (var i = 1; i <= 3; i++) {
        var sel = document.getElementById('compare-' + i);
        if (sel && sel.value) selected.push(sel.value);
    }

    if (!selected.length) {
        DOM.comparisonTable.innerHTML = '<p style="padding:20px;text-align:center;color:var(--text-muted);">Select careers above to compare them.</p>';
        return;
    }

    var features = [
        { key: 'icon', label: 'Icon' },
        { key: 'cluster', label: 'Cluster' },
        { key: 'salaryLocal', label: 'Salary (Zambia)' },
        { key: 'salaryGlobal', label: 'Salary (Global)' },
        { key: 'outlook', label: 'Job Outlook' },
        { key: 'globalDemand', label: 'Global Demand' }
    ];

    var html = '<table class="comparison-table"><thead><tr><th>Feature</th>';
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

    // Add subjects/skills row
    html += '<tr><td><strong>Requirements</strong></td>';
    selected.forEach(function(n) {
        var c = careers[n];
        var reqs = [];
        if (c && c.requiredSubjects) reqs = c.requiredSubjects;
        else if (c && c.requiredSkills) reqs = c.requiredSkills.map(function(s) { return '🛠️ ' + s; });
        html += '<td>' + (reqs.length ? reqs.join(', ') : '—') + '</td>';
    });
    html += '</tr>';

    html += '</tbody></table>';
    DOM.comparisonTable.innerHTML = html;
}

// ================================================================
// SECTION 20: DISCOVERY MODE
// ================================================================

function generateDiscoveryResults() {
    DOM.discoveryMode.style.display = 'block';
    DOM.resultsSubtitle.textContent = "That's okay! Let's explore all your options together.";
    DOM.careerMatches.innerHTML = '';
    DOM.statsSummary.innerHTML = '';

    var clusterInfo = {
        'STEM': { icon: '🔬', name: 'STEM', description: 'Science, Technology, Engineering & Math', activity: 'Try building a small project using recycled materials. This helps develop engineering thinking!' },
        'Healthcare': { icon: '🏥', name: 'Healthcare', description: 'Medical and health-related careers', activity: 'Visit a clinic and ask if you can observe a nurse or doctor for a day.' },
        'Business': { icon: '💼', name: 'Business', description: 'Finance, management, and entrepreneurship', activity: 'Start a small "business" selling snacks or crafts for one week.' },
        'Creative': { icon: '🎨', name: 'Creative', description: 'Arts, media, and design', activity: 'Write a short story or draw a picture about your dream career.' },
        'Helping': { icon: '🤝', name: 'Helping', description: 'Teaching, social work, and community', activity: 'Help a younger student with their homework or tutor a classmate.' },
        'Outdoor': { icon: '🌿', name: 'Outdoor', description: 'Agriculture, conservation, and tourism', activity: 'Spend a day outdoors and observe what you enjoy most.' },
        'Public Service': { icon: '🏛️', name: 'Public Service', description: 'Government, military, and emergency services', activity: 'Visit a government office or talk to a public servant about their work.' },
        'Skilled Trades': { icon: '🔧', name: 'Skilled Trades', description: 'Hands-on technical and craft careers', activity: 'Try building or fixing something with your hands.' }
    };

    var html = '<div style="grid-column:1/-1;text-align:center;margin-bottom:12px;color:var(--text-muted);font-size:14px;">Click on any cluster to explore careers and try the suggested activity!</div>';

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

    html += '<div class="discovery-next-steps"><h3>💡 Your Next Steps</h3><ol>' +
        '<li>Read about careers that interest you by clicking on the cluster cards above.</li>' +
        '<li>Try one of the "Try It Out" activities.</li>' +
        '<li>Talk to people in careers you find interesting.</li>' +
        '<li>Come back in 2-4 weeks and retake the quiz with new insights.</li>' +
        '</ol>' +
        '<p class="italic-note">🎯 Remember: It\'s okay to not know yet! The most important thing is to keep exploring.</p>' +
        '<button onclick="startQuiz(false)" class="btn-primary" style="margin-top:10px;">🔄 Retake Quiz</button>' +
        '</div>';

    DOM.discoveryContent.innerHTML = html;
    displaySubjectRecommendations();
    displayCareerClusters();
    displayComparisonTool();
}

// Toggle discovery careers on click
function toggleDiscoveryCareers(cluster, cardEl) {
    var existing = cardEl.querySelector('.discovery-career-list');
    if (existing) { existing.remove(); return; }

    // Remove any other open lists
    document.querySelectorAll('.discovery-career-list').forEach(function(el) { el.remove(); });

    var careersInCluster = Object.keys(careers).filter(function(n) { return careers[n] && careers[n].cluster === cluster; });
    var list = document.createElement('div');
    list.className = 'discovery-career-list';

    careersInCluster.forEach(function(name) {
        var c = careers[name];
        if (!c) return;
        var reqs = c.requiredSubjects || c.requiredSkills || ['Various'];
        var reqDisplay = reqs.slice(0, 3).join(', ') + (reqs.length > 3 ? ' +' + (reqs.length - 3) + ' more' : '');

        var item = document.createElement('div');
        item.className = 'discovery-career-item';
        item.innerHTML =
            '<h5 data-career="' + name + '">' + c.icon + ' ' + name + '</h5>' +
            '<p>' + c.description.substring(0, 120) + '...</p>' +
            '<p><strong>Requirements:</strong> ' + reqDisplay + '</p>' +
            '<p><strong>Where:</strong> ' + (c.institutions ? c.institutions.join(', ') : 'On-the-job training') + '</p>' +
            '<div class="career-tags"><span>' + c.outlook + '</span><span>' + c.salaryLocal + '</span>' +
            (c.globalReady ? '<span>🌍 Global Ready</span>' : '') + '</div>';
        list.appendChild(item);
    });

    cardEl.appendChild(list);
}

// ================================================================
// SECTION 21: CAREER DETAILS MODAL
// ================================================================

function showCareerDetails(careerName) {
    var career = careers[careerName];
    if (!career) return;

    // Determine requirements display
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

    var html =
        '<span class="detail-icon" aria-hidden="true">' + (career.icon || '🎯') + '</span>' +
        '<h2 id="modal-career-name">' + careerName + '</h2>' +
        '<div class="detail-tags">' +
            '<span class="detail-tag">' + career.cluster + '</span>' +
            '<span class="detail-tag outlook">' + career.outlook + '</span>' +
            (career.globalReady ? '<span class="detail-tag global">🌍 Global Ready</span>' : '') +
        '</div>' +

        '<div class="detail-section"><h4>📋 What They Do</h4><p>' + career.description + '</p></div>' +
        '<div class="detail-section"><h4>📚 Requirements</h4>' + reqText + '</div>' +
        '<div class="detail-section"><h4>🏫 Where to Study</h4><p>' + institutionsText + '</p></div>' +
        '<div class="detail-section"><h4>💰 Salary</h4>' +
            '<p><strong>Zambia:</strong> ' + career.salaryLocal + '</p>' +
            (career.salaryGlobal ? '<p><strong>International:</strong> ' + career.salaryGlobal + '</p>' : '') + '</div>';

    // Add international section if applicable
    if (career.globalReady) {
        html += '<div class="detail-section international"><h4>🌍 International Opportunities</h4>' +
            '<p><strong>Global Demand:</strong> ' + career.globalDemand + '</p>' +
            (career.countries ? '<p><strong>Countries:</strong> ' + career.countries.join(', ') : '') +
            (career.scholarships ? '<p><strong>Scholarships:</strong> ' + career.scholarships.join(', ') : '') +
            (career.pathwayAbroad ? '<p><strong>Pathway abroad:</strong></p><ol>' +
                career.pathwayAbroad.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' : '') +
            '</div>';
    }

    // Add career story
    if (career.story) {
        html += '<div class="detail-section story"><h4>🌟 Career Story</h4>' +
            '<p style="font-style:italic;">' + career.story + '</p></div>';
    }

    // Add career day activity
    if (career.careerDay) {
        html += '<div class="detail-section activity"><h4>🔍 Career Day Activity</h4>' +
            '<p>' + career.careerDay + '</p></div>';
    }

    DOM.careerDetailContent.innerHTML = html;
    DOM.careerModal.classList.add('active');
    DOM.modalClose.focus();
    document.body.style.overflow = 'hidden';
}

// Close the career details modal
function closeCareerModal() {
    DOM.careerModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ================================================================
// SECTION 22: CONFETTI ANIMATION
// ================================================================

function launchConfetti() {
    // Check if user prefers reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var canvas = DOM.confettiCanvas;
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var particles = [];
    var colors = ['#008000', '#DE2010', '#EF7D00', '#00b800', '#ffd700', '#3b82f6', '#a855f7', '#22c55e'];

    // Create particles
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
// SECTION 23: PDF GENERATION & PRINTING
// ================================================================

function generatePDF() {
    // Check if libraries are loaded
    if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
        showToast('PDF libraries not loaded. Please check your internet connection and try again.');
        return;
    }

    var selectedMode = document.querySelector('input[name="color-mode"]:checked');
    var isColor = selectedMode ? selectedMode.value === 'color' : true;

    var originalText = DOM.downloadPdfBtn.textContent;
    DOM.downloadPdfBtn.textContent = '⏳ Generating PDF...';
    DOM.downloadPdfBtn.disabled = true;

    // Ensure all score fills are properly displayed for capture
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

        // Handle multi-page PDFs if content is tall
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
// SECTION 24: BACK TO TOP
// ================================================================

function handleScroll() {
    DOM.backToTop.classList.toggle('visible', window.scrollY > 400);
}

// ================================================================
// SECTION 25: SAVED PROGRESS BANNER
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
            showScreen('results-screen');
            displayResults();
        });
    }
}

// ================================================================
// SECTION 26: EVENT LISTENERS
// ================================================================

// Welcome screen buttons
DOM.startQuizBtn.addEventListener('click', function() { startQuiz(false); });
DOM.iDontKnowBtn.addEventListener('click', startDiscoveryMode);

// Quiz navigation
DOM.prevBtn.addEventListener('click', prevQuestion);
DOM.nextBtn.addEventListener('click', nextQuestion);

// Quiz options - event delegation for multi-select
DOM.optionsContainer.addEventListener('click', function(e) {
    var btn = e.target.closest('.option-btn');
    if (btn) toggleOption(btn);
});

// Results actions
DOM.downloadPdfBtn.addEventListener('click', generatePDF);
DOM.printBtn.addEventListener('click', printResults);
DOM.retakeBtn.addEventListener('click', function() {
    // Reset state but keep theme and color mode
    var dm = state.darkMode;
    var cm = state.colorMode;
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
        kbFocusIndex: -1
    };
    clearSavedState();
    showScreen('welcome-screen');
    checkSavedProgress();
});

// Career matches - event delegation for details button and card click
DOM.careerMatches.addEventListener('click', function(e) {
    var detailBtn = e.target.closest('.view-details-btn');
    if (detailBtn) { e.stopPropagation(); showCareerDetails(detailBtn.dataset.career); return; }
    var card = e.target.closest('.career-card');
    if (card && card.dataset.career) showCareerDetails(card.dataset.career);
});

// Career clusters - event delegation
DOM.careerClusters.addEventListener('click', function(e) {
    var clusterCard = e.target.closest('.cluster-card');
    if (clusterCard) {
        var careersList = document.getElementById('cluster-' + clusterCard.dataset.cluster);
        if (careersList) careersList.classList.toggle('show');
        return;
    }
    var careerLink = e.target.closest('.cluster-career-item');
    if (careerLink) showCareerDetails(careerLink.dataset.career);
});

// Discovery mode - event delegation
DOM.discoveryContent.addEventListener('click', function(e) {
    var discoveryCard = e.target.closest('.discovery-card');
    if (discoveryCard && discoveryCard.dataset.discoveryCluster) {
        toggleDiscoveryCareers(discoveryCard.dataset.discoveryCluster, discoveryCard);
        return;
    }
    var careerEl = e.target.closest('[data-career]');
    if (careerEl) showCareerDetails(careerEl.dataset.career);
});

// Comparison - event delegation with debounce
DOM.comparisonSelectors.addEventListener('change', debounce(updateComparison, 200));

// Search & filter
DOM.careerSearch.addEventListener('input', debounce(handleCareerSearch, 250));
DOM.filterChips.addEventListener('click', handleFilterClick);

// Modal
DOM.modalClose.addEventListener('click', closeCareerModal);
DOM.careerModal.addEventListener('click', function(e) {
    if (e.target === DOM.careerModal) closeCareerModal();
});

// Dark mode
DOM.darkModeToggle.addEventListener('click', toggleDarkMode);

// Back to top
DOM.backToTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// Scroll handler
window.addEventListener('scroll', handleScroll, { passive: true });

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeCareerModal();
    handleKeyboardNav(e);
});

// Color mode for PDF
DOM.colorModeRadios.forEach(function(r) {
    r.addEventListener('change', function() { state.colorMode = this.value; });
});

// Window resize for confetti
window.addEventListener('resize', function() {
    DOM.confettiCanvas.width = window.innerWidth;
    DOM.confettiCanvas.height = window.innerHeight;
});

// ================================================================
// SECTION 27: INITIALIZATION
// ================================================================

function init() {
    // Load and apply theme
    state.darkMode = loadTheme();
    applyTheme();

    // Show welcome screen
    showScreen('welcome-screen');

    // Check for saved progress
    checkSavedProgress();

    // Log to console for debugging
    if (typeof console !== 'undefined') {
        console.log('🇿🇲 Career Quest initialized successfully!');
        console.log('📚 Loaded ' + Object.keys(careers).length + ' careers across 8 clusters');
        console.log('📝 Loaded ' + questions.length + ' questions with multi-select support');
        console.log('🧠 Loaded ' + ALL_TRAITS.length + ' personality traits for smart scoring');
    }
}

// Initialize the app when the DOM is ready
document.addEventListener('DOMContentLoaded', init);

// ================================================================
// END OF SCRIPT
// ================================================================