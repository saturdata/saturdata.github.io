# Add Professional Experience Section

## Objective
Create a new "Experience" section for the portfolio website that displays professional work history in an expandable/collapsible format to maintain clean UI while providing detailed information when needed.

## Requirements

### 1. Section Placement
- Add as a new standalone section between "About" and "Projects" sections
- Update navigation menu to include "Experience" link
- Ensure smooth scrolling navigation works properly

### 2. Design Specifications
- **Section Title**: "Professional Experience" 
- **Layout**: Timeline-style layout with expandable cards
- **Default State**: Show only organization, role, and date range
- **Expanded State**: Reveal full job description and career track tags
- **Styling**: Match existing design system (colors, fonts, spacing, shadows)
- **Responsive**: Mobile-friendly collapsible design

### 3. Functionality
- **Click to Expand**: Users can click on any experience card to expand/collapse
- **Smooth Animation**: Use CSS transitions for expand/collapse (0.3s ease)
- **One at a Time**: Optional - only one card expanded at a time (accordion style)
- **Accessibility**: Proper ARIA labels and keyboard navigation support

### 4. Data Structure
Use the following experience data (already formatted as JavaScript object):

```javascript
export const ExperienceData = [
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
		  "career_track": ["Data Engineering", "AI",  "Software Engineering", "Product Management", "Technical Writing", "Marketing", "Technical Support"]
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
		  "career_track": ["Technical Support", "Data Analytics", "Data Engineering", "Software Engineering", "Business Intelligence", "Consulting"]
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
      "career_track": ["Data Science", "Machine Learning", "Data Analytics", "Data Engineering", "Marketing", "Consulting", "Technical Writing"]
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
      "career_track": ["Technical Writing", "Software Engineering", "Education"]
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
      "career_track": ["Technical Writing", "Software Engineering", "Game Development", "Education"]
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
      "career_track": ["Technical Writing", "Data Science", "Data Analytics", "Product Management", "Education"]
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
      "career_track": ["Data Science", "AI", "Machine Learning", "Product Management", "Finance"]
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
      "career_track": ["Data Analytics", "Marketing"]
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
      "career_track": ["Data Analytics", "Data Science", "Education"]
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
      "career_track": ["Data Science", "Machine Learning", "Finance", "Business Intelligence"]
  }
]
```

### 5. Implementation Steps

#### Step 1: Update HTML Structure
1. Add experience section in `index.html` between about and projects sections:
```html
<section id="experience" class="experience">
    <div class="container">
        <h2 class="section-title">Professional Experience</h2>
        <div class="experience-timeline" id="experience-timeline">
            <!-- Experience cards will be dynamically generated -->
        </div>
    </div>
</section>
```

2. Update navigation menu to include Experience link:
```html
<li class="nav-item">
    <a href="#experience" class="nav-link">Experience</a>
</li>
```

#### Step 2: Add CSS Styles
Add the following styles to `styles.css`:

```css
/* Experience Section */
.experience {
    background: var(--bg-color);
}

.experience-timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.experience-timeline::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
}

.experience-card {
    position: relative;
    margin-bottom: 2rem;
    padding-left: 80px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.experience-card::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 3px solid var(--bg-color);
    box-shadow: 0 0 0 3px var(--primary-color);
}

.experience-header {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.experience-card:hover .experience-header {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
}

.experience-meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
}

.experience-title h3 {
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.experience-title h4 {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 500;
}

.experience-dates {
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
}

.experience-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    background: var(--bg-color);
    border-radius: 0 0 0.5rem 0.5rem;
    border: 1px solid var(--border-color);
    border-top: none;
}

.experience-card.expanded .experience-content {
    max-height: 500px;
    padding: 1.5rem;
}

.experience-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
    white-space: pre-line;
}

.experience-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.experience-tag {
    padding: 0.25rem 0.75rem;
    background: var(--bg-secondary);
    color: var(--primary-color);
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid var(--primary-color);
}

.expand-indicator {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.experience-card.expanded .expand-indicator {
    transform: translateY(-50%) rotate(180deg);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .experience-timeline::before {
        left: 15px;
    }
    
    .experience-card {
        padding-left: 50px;
    }
    
    .experience-card::before {
        left: 7px;
        width: 12px;
        height: 12px;
    }
    
    .experience-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .experience-dates {
        white-space: normal;
    }
}
```

#### Step 3: Add JavaScript Functionality
Add the following functions to `script.js`:

```javascript
// Experience section functionality
function initializeExperience() {
    generateExperienceCards();
    setupExperienceInteractions();
}

function generateExperienceCards() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;
    
    const experienceHTML = ExperienceData.map((exp, index) => `
        <div class="experience-card" data-index="${index}" role="button" tabindex="0" 
             aria-expanded="false" aria-controls="exp-content-${index}">
            <div class="experience-header">
                <div class="experience-meta">
                    <div class="experience-title">
                        <h3>${exp.organization}</h3>
                        <h4>${exp.role}</h4>
                    </div>
                    <div class="experience-dates">
                        ${exp.from_date} - ${exp.to_date}
                    </div>
                </div>
                <div class="expand-indicator">▼</div>
            </div>
            <div class="experience-content" id="exp-content-${index}">
                <div class="experience-description">${exp.description}</div>
                <div class="experience-tags">
                    ${exp.career_track.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    timeline.innerHTML = experienceHTML;
}

function setupExperienceInteractions() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach(card => {
        card.addEventListener('click', toggleExperienceCard);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleExperienceCard.call(card, e);
            }
        });
    });
}

function toggleExperienceCard(e) {
    const card = this;
    const isExpanded = card.classList.contains('expanded');
    
    // Optional: Close other cards (accordion behavior)
    // document.querySelectorAll('.experience-card.expanded').forEach(otherCard => {
    //     if (otherCard !== card) {
    //         otherCard.classList.remove('expanded');
    //         otherCard.setAttribute('aria-expanded', 'false');
    //     }
    // });
    
    // Toggle current card
    card.classList.toggle('expanded');
    card.setAttribute('aria-expanded', !isExpanded);
}

// Add experience data at the top of script.js
const ExperienceData = [
    // ... (copy the experience data from this file)
];
```

#### Step 4: Update Main Initialization
Update the `initializeApp()` function in `script.js`:

```javascript
function initializeApp() {
    // ... existing initializations
    initializeExperience();
}
```

### 6. Testing Checklist
- [ ] Experience section displays correctly between About and Projects
- [ ] Navigation menu includes Experience link and scrolls properly
- [ ] Experience cards expand/collapse smoothly on click
- [ ] Mobile responsive design works properly
- [ ] Keyboard navigation works (Enter/Space to expand)
- [ ] Screen reader accessibility (ARIA labels)
- [ ] Timeline design displays correctly
- [ ] Career track tags display properly
- [ ] Consistent styling with rest of site

### 7. Optional Enhancements
- Add search/filter functionality by career track
- Add date sorting options
- Include company logos/icons
- Add animation effects for timeline appearance
- Implement lazy loading for descriptions

---

**Note**: This implementation creates a professional timeline-style experience section that maintains the existing design system while providing an intuitive expandable interface for detailed job information.