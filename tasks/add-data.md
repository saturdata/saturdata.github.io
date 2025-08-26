# Comprehensive Portfolio Data Integration Prompt

## Task Overview
Transform the existing portfolio website to showcase Shifra Williams' complete professional profile using the structured data provided. Replace all placeholder content with authentic, detailed information while maintaining the website's modern design and functionality.

## Key Integration Requirements

### 1. Personal Information & Branding
- **Name**: Update all instances of "Your Name" and generic titles to "Shifra Williams"
- **Title**: Change "Data Scientist Portfolio" to reflect her current role as "Founding Developer Relations Advocate"
- **Logo**: Update the "DS" logo to "SW" for Shifra Williams
- **Profile Image**: Reference the correct profile image path when available

### 2. Hero Section Transformation
- **Main Headline**: Craft a compelling headline that reflects her unique blend of data science, developer relations, and technical writing expertise
- **Subtitle**: Write a professional summary highlighting her experience in data science, technical writing, and developer advocacy
- **CTA Buttons**: Ensure the resume download link points to her actual resume file

### 3. About Section - Complete Rewrite
Replace the generic about content with:
- **Personal Story**: Craft a narrative showcasing her journey from data science to developer relations
- **Key Achievements**: Highlight major accomplishments like:
  - $750K savings at Annalect/Nissan
  - 135K+ YouTube views for Crash Course series
  - 100+ documentation pieces for Ascend.io
  - 7.7M+ visits to Lua Learning game
- **Values**: Update the three value pillars to reflect her actual work style and approach

### 4. Work Experience Integration
Transform the experience data into a comprehensive experience timeline:
- **Current Role**: Prominently feature her current position at Ascend.io
- **Career Progression**: Show the logical progression from data analyst roles to developer advocacy
- **Key Metrics**: Include quantifiable achievements from each role
- **Timeline Visual**: Consider adding a visual timeline component
- **Role Descriptions**: Use the detailed descriptions provided, formatting them for web display

### 5. Projects Section Overhaul
Replace all placeholder projects with her actual projects:
- **Crash Course Study Hall**: Feature prominently with YouTube link and GitHub repository
- **DataLemur**: Highlight her role in building the platform that reached 100K+ users
- **Classification of Fall Out Boy Eras**: Academic research project with publication link
- **Lua Learning**: Educational game with 7.7M+ visits
- **Technical Projects**: Include Shakespeare GPT, NJ Flood Prediction, Snow It All, and Dinner Planner
- **Project Cards**: Each should include live demo links, GitHub repositories, tech stacks, and key metrics
- **Filtering**: Update project categories to match her actual work (Technical Writing, Data Science, AI/ML, Education)

### 6. Skills Section Enhancement
Replace generic tech icons with her specific skill set:
- **Programming Languages**: Python, R, Java, Lua, SQL
- **Data Tools**: Pandas, NumPy, PyTorch, Snowflake, BigQuery, Redshift, MySQL, PostgreSQL
- **Analytics & BI**: Tableau, Looker, Excel, A/B Testing, ETL
- **Cloud & DevOps**: AWS S3 CLI, Git, GitHub, Linux
- **Collaboration**: Jira, Confluence
- **Visual Representation**: Use the provided icon components and color schemes from the data file

### 7. Social Media & Contact Integration
Update all contact information:
- **LinkedIn**: https://www.linkedin.com/in/shifra-isaacs/
- **GitHub**: https://github.com/Ho1yShif/
- **Donation Link**: Include the PayPal donation link for her educational content
- **Email**: Update with her professional email address
- **Professional Status**: Update availability status based on current role

### 8. Content Tone & Voice
- **Professional yet Approachable**: Reflect her role in developer relations and education
- **Achievement-Focused**: Highlight quantifiable impacts and results
- **Technical Expertise**: Demonstrate deep knowledge while remaining accessible
- **Educational Passion**: Emphasize her commitment to teaching and knowledge sharing

### 9. SEO & Meta Information
- **Title Tags**: Update to include her name and key skills
- **Meta Descriptions**: Write compelling descriptions highlighting her unique background
- **Alt Text**: Provide descriptive alt text for all images
- **Keywords**: Include relevant terms like "developer relations", "data science", "technical writing"

### 10. Technical Implementation Notes
- **Data Structure**: Use the provided JavaScript data structures for easy maintenance
- **Icon Libraries**: Implement the specified icon libraries (Font Awesome, Simple Icons, etc.)
- **Responsive Design**: Ensure all new content works across all device sizes
- **Performance**: Optimize images and assets for fast loading
- **Accessibility**: Maintain proper heading hierarchy and ARIA labels

## Specific Data Points to Integrate

### Experience Highlights
- **10 Professional Roles**: From Cross River Bank intern to current Ascend.io position
- **Quantified Achievements**: $750K savings, 135K+ views, 100+ docs, 7.7M+ game visits
- **Industry Diversity**: Finance, Marketing, Education, SaaS, Gaming
- **Timeline**: 2021-Present career progression

### Project Portfolio
- **8 Major Projects**: Each with unique tech stack and measurable impact
- **Publication**: Academic paper in Rutgers journal
- **Educational Content**: YouTube series and Roblox game
- **Open Source**: Multiple GitHub repositories

### Technical Expertise
- **25+ Technologies**: Comprehensive skill set across data science, cloud, and development tools
- **Specializations**: Machine Learning, Data Analytics, Technical Writing, Developer Relations

## Expected Output
A fully personalized, professional portfolio website that:
1. Accurately represents Shifra Williams' career and achievements
2. Maintains the existing modern design aesthetic
3. Provides clear navigation to key information
4. Demonstrates her expertise through specific examples and metrics
5. Facilitates professional networking and opportunity discovery
6. Showcases her unique combination of technical and communication skills

## Success Metrics
- All placeholder content replaced with authentic information
- Professional narrative that clearly communicates her value proposition
- Functional links to all external resources (GitHub, LinkedIn, YouTube, etc.)
- Responsive design that works across all devices
- Fast loading times and optimal user experience
- Clear call-to-actions for potential collaborators or employers

This comprehensive integration will transform a generic data science portfolio into a compelling showcase of Shifra Williams' unique professional journey and expertise.

Specific data:

## Info
- Name: Shifra Williams
- Headline: Data Scientist turned DevRel

## Work Experience
- export const ExperienceData = [
	{
		organization: "Ascend.io",
		role: "Founding Developer Relations Advocate",
		from_date: "March 2025",
		to_date: "Present",
		description:
		  `● Wrote 100+ docs to launch a new documentation site, improving product readiness and onboarding
       ● Automated release notes pipeline with Python, AI, and GitHub Actions, reducing manual work by 90%
       ● Led GTM strategy with data evangelists and creators to drive launch awareness and team engagement
		  `,
	},
  {
		organization: "Sigma Computing",
		role: "Data Analyst & Technical Support Engineer",
		from_date: "May 2024",
		to_date: "March 2025",
		description:
		  `● Developing Snowflake SQL dashboard to identify improvement areas in customer satisfaction (CSAT)
      ● Leading CSAT analysis to improve satisfaction scores while accommodating a 50% rise in chat volume
      ● Writing external documentation for embedding applications using TypeScript, APIs, and authentication
      ● Ensuring 96% CSAT and <1 minute response time while consulting on data models and infrastructure
		  `,
	},
	{
    organization: "Annalect | Client: Nissan",
    role: "Data Scientist",
    from_date: "January 2023",
    to_date: "May 2024",
    description:
      `● Achieved $750K savings by developing methodology to diagnose and QA discrepancies in CPM pricing
      ● Facilitated million-dollar marketing pitches through efficient data ETL, securing high-value contracts
      ● Leveraged logistic regression machine learning modeling to build custom Nissan marketing audiences
      ● Automated first-party Nissan sales data load using Python, achieving a 92% reduction in lead time
      ● Owned and leveraging B2B data with 250M rows in Redshift, delivering targeted marketing audiences
      ● Led Confluence documentation of new processes and maintenance of existing datasets and scripts
      ● Desiged Tableau dashboards to track MoM Nissan model market demographics and uncover insights
      ● Managed client expectations, translating business needs into data solutions that drive team decisions
      `,

  },
  {
    organization: "Crash Course: Code and Programming for Beginners",
    role: "Technical Script Writer",
    from_date: "November 2022",
    to_date: "November 2023",
    description:
      `● Authored 9 episodes of the hit YouTube series, amassing 135K+ views and 10K+ hours of watch time
       ● Crash Course Playlist Link:
       https://www.youtube.com/watch?v=yBFu9HxiD88&list=PLID58IQe16nFgbHGRCj5QEXKUpVIilpDN&index=29
      `,
  },
  {
    organization: "Torpedo Software LLC",
    role: "Educational Curriculum Designer",
    from_date: "January 2023",
    to_date: "Present",
    description:
      `● Designing curriculum and writing lessons for Lua Learning, an award-winning Roblox game with 7.7M+ visits and 115K monthly active users
       ● Lua Learning Link: https://www.roblox.com/games/1334669864/Lua-Learning
      `,
  },
  {
    organization: "DataLemur",
    role: "Technical Writer & Product Manager",
    from_date: "August 2022",
    to_date: "January 2023",
    description:
      `● Supported author Nick Singh’s data science platform and achieved 100K+ users within 10 months
      ● Documented, tested, and improved 200+ SQL and mathematics problems, solutions, and hints
      ● Instituted metadata tagging system and SQL style conventions to standardize the platform
      `,
  },
  {
    organization: "JPMorgan Chase & Co.",
    role: "AI & Data Science Summer Analyst",
    from_date: "June 2022",
    to_date: "August 2022",
    description:
      `● Leveraged XGBoost algorithm in Python to improve wallet estimation regression model by 94.1%
      ● Won 2022 Housing Affordability Challenge among 140 interns by implementing PCA and projecting HPI
      ● Conducted literature review to research machine learning methods and strategies for wallet estimation
      `,
  },
  {
    organization: "Prose",
    role: "Growth Data Analyst Intern",
    from_date: "January 2022",
    to_date: "May 2022",
    description:
      `● Built last-click attribution model in BigQuery to track $40M annual marketing spend across channels
      ● Automated Looker dashboard based on attribution model to report WoW and MoM channel metrics
      ● Tested gift products to determine their impact on customer churn and drive stakeholder decisions
      `,
  },
  {
    organization: "Podium Education",
    role: "Data Programming Team Lead",
    from_date: "May 2023",
    to_date: "August 2023",
    description:
      `● Facilitated classroom instruction to college students, teaching introductory SQL, Tableau, and Python for practical data science
      ● Graded weekly coding assignments and final projects for a diverse cohort of 60+ students, demonstrating strong organizational skills
      ● Provided personalized one-on-one guidance during office hours to address individual learning needs
      `,
  },
  {
    organization: "Cross River Bank",
    role: "Data Technology Analyst Intern",
    from_date: "June 2021",
    to_date: "August 2021",
    description:
      `● Created Capacity Planning Model to streamline project costing for the entire IT department
      ● Developed multinomial logistic regression model for loan classification in Python
      ● Presented accomplishments throughout summer internship to CEO and C-Level managers
      `,
  }
]

## Projects Data
export const ProjectsData = [
    {
        projectName: "Crash Course Study Hall: Code and Programming for Beginners",
        liveUrl: "https://www.youtube.com/watch?v=n3egiMIpv7c&list=PLID58IQe16nFgbHGRCj5QEXKUpVIilpDN&index=26",
        githubUrl: "https://github.com/Ho1yShif/Crash_Course_Study_Hall_Code_and_Programming_for_Beginners",
        projectImage: {
            imageUrl: "/images/shif_images/OOP_Thumbnail.jpeg"
        },
        techs: ["Java", "Technical Writing", "OOP", "Data Structures", "Defensive Programming"]
    },
    {
        projectName: "DataLemur",
        liveUrl: "https://DataLemur.com",
        githubUrl: "",
        projectImage: {
            imageUrl: "/images/shif_images/DataLemur.png"
        },
        techs: ["PostgreSQL", "Technical Writing", "Data Analytics", "Data Science", "Mathematics", "Probability"]
    },
    {
        projectName: "Classification of Fall Out Boy Eras",
        liveUrl: "https://arestyrurj.libraries.rutgers.edu/index.php/arestyrurj/article/view/232",
        githubUrl: "https://github.com/Ho1yShif/FOB_LR_Public",
        projectImage: {
            imageUrl: "/images/shif_images/FOB.jpg"
        },
        techs: ["Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "APIs", "Logistic Regression", "Statistical Testing"]
    },
    {
        projectName: "Lua Learning",
        liveUrl: "https://www.roblox.com/games/1334669864/Lua-Learning",
        projectImage: {
            imageUrl: "/images/shif_images/Lua_Learning.png"
        },
        techs: ["Lua", "Technical Writing"]
    },
    {
        projectName: "Snow It All",
        liveUrl: "https://docs.google.com/presentation/d/1keW7NyoTF-HZtHlXJzlhkUlBpfOyG7t9466k-EC8AHA/edit?usp=sharing",
        githubUrl: "https://github.com/Ho1yShif/Snow-It-All",
        projectImage: {
            imageUrl: "https://www.weather.gov/images/nws/snowy-road.jpg"
        },
        techs: ["Python", "AI", "LLMs", "Chatbot"]
    },
    {
        projectName: "Shakespeare GPT",
        githubUrl: "https://github.com/Ho1yShif/nanogpt",
        projectImage: {
            imageUrl: "/images/shif_images/Shakespeare_GPT.webp"
        },
        techs: ["Python", "AI", "GPT", "LLMs", "PyTorch", "Machine Learning"]
    },
    {
        projectName: "NJ Flood Prediction and Mitigation",
        liveUrl: "https://docs.google.com/presentation/d/1_0ddFciVmtjiIOLNdVsPbGIlbC8DeLVuO9G7LaevThA/edit?usp=sharing",
        githubUrl: "https://github.com/Ho1yShif/cgi_flood_prediction_mitigation",
        projectImage: {
            imageUrl: "/images/shif_images/flood_nj.jpeg"
        },
        techs: ["Python", "Time Series", "ArcGIS", "XGBoost", "LSTM"]
    },
    {
        projectName: "Dinner Planner",
        githubUrl: "https://github.com/Ho1yShif/dinner",
        projectImage: {
            imageUrl: "/images/shif_images/Dinner.png"
        },
        techs: ["Python", "GCP", "APIs"]
    }
]

## Skills
 name: "Python",
    icon: <FaPython className="md:text-4xl text-2xl" color="#3776AB" />
  },
  {
    name: "Pandas",
    icon: <SiPandas className="md:text-4xl text-2xl" color="#150458" />
  },
  {
    name: "NumPy",
    icon: <SiNumpy className="md:text-4xl text-2xl" color="#013243" />
  },
  {
    name: "PyTorch",
    icon: <SiPytorch className="md:text-4xl text-2xl" color="#EE4C2C" />
  },
  {
    name: "R",
    icon: <SiR className="md:text-4xl text-2xl" color="#276DC3" />
  },
  {
    name: "Java",
    icon: <FaJava className="md:text-4xl text-2xl" color="#276DC3" />
  },
  {
    name: "Lua",
    icon: <SiLua className="md:text-4xl text-2xl" color="#000080" />
  },
  {
    name: "Snowflake",
    icon: <SiSnowflake className="md:text-4xl text-2xl" color="#4285F4" />
  },
  {
    name: "BigQuery",
    icon: <SiGooglebigquery className="md:text-4xl text-2xl" color="#4285F4" />
  },
  {
    name: "Redshift",
    icon: <SiAmazonredshift className="md:text-4xl text-2xl" color="#276DC3" />
  },
  {
  name: "MySQL",
  icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />
},
{
  name: "PostgreSQL",
  icon: <SiPostgresql className="md:text-4xl text-2xl" color="#336791" />
},
{
  name: "A/B Testing",
  icon: <LuTestTubes className="md:text-4xl text-2xl" color="black" />
},
{
  name: "ETL",
  icon: <BsTable className="md:text-4xl text-2xl" color="#000000" />
},
{
  name: "AWS S3 CLI",
  icon: <SiAmazons3 className="md:text-4xl text-2xl" color="#FF9900" />
},
{
  name: "Git",
  icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />
},
{
  name: "GitHub",
  icon: <BsGithub className="md:text-4xl text-2xl" color="black" />
},
{
  name: "Linux",
  icon: <FaLinux className="md:text-4xl text-2xl" color="#000000" />
},
{
  name: "Tableau",
  icon: <SiTableau className="md:text-4xl text-2xl" color="#E97627" />
},
{
  name: "Excel",
  icon: <SiMicrosoftexcel className="md:text-4xl text-2xl" color="#217346" />
},
{
  name: "Looker",
  icon: <SiLooker className="md:text-4xl text-2xl" color="#000000" />
},
{
  name: "Jira",
  icon: <FaJira className="md:text-4xl text-2xl" color="#0052CC" />
},
{
  name: "Confluence",
  icon: <SiConfluence className="md:text-4xl text-2xl" color="#172B4D" />
}
];

## Social media

export const SocialMediaData = [
  {
    icon: <div className="p-2"><FaLinkedinIn /></div>,
    name: "LinkedIn",
    color: "black",
    link: "https://www.linkedin.com/in/shifra-isaacs/",
  },
  {
    icon: <div className="p-2"><BsGithub /></div>,
    name: "GitHub",
    color: "black",
    link: "https://github.com/Ho1yShif/",
  },
  {
    icon: <div className="p-2">< FaDonate /></div>,
    name: "Donate",
    color: "black",
    link: "https://www.paypal.com/donate/?business=L8U6544C9D2ML&no_recurring=0&item_name=Creating+informative+content+to+help+students+and+early-career+tech+professionals+achieve+their+fullest+potential&currency_code=USD",
  },
];