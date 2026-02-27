// Content data for Saturdata website

export interface HostMember {
  name: string
  pronouns: string
  title: string
  image?: string
  description: string
  linkedin_link?: string
  website_link?: string
}

// Single interface for both episodes and appearances (identical structure)
export interface ContentItem {
  title: string
  type: string
  image?: string
  description: string
  youtube_link: string
  spotify_link: string
  schedule_release?: string  // ISO 8601 with UTC offset, e.g. "2025-03-01T09:00:00-08:00"
  season?: number
}

export interface ContentSection<T> {
  id: string
  type: string
  title: string
  items: T[]
}

export interface ContentData {
  about: ContentSection<HostMember>
  episodes: ContentSection<ContentItem>
  appearances: ContentSection<ContentItem>
}

export const SaturdataContent: ContentData = {
  // About Section Data
  about: {
    id: 'about',
    type: 'about',
    title: 'About',
    items: [
      {
        name: 'Shifra Williams',
        pronouns: 'she/they',
        title: 'Co-host',
        image: '/assets/images/about/shif.png',
        description: `Shifra is a Developer Relations Engineer and Data Scientist whose career has been defined by one core mission: making complex technical concepts click for real people.
Their journey spans data science, technical writing, and community building, all tied together by her passion for creating those crucial "aha!" moments that transform confusion into confidence.
<br/><br/>
Now at Render, she operates at the intersection of tech, education, and connection. What energizes them most is connecting technical experts with early-career learners and creating meaningful educational experiences. 
Through her work across platforms, she's reached over 135K learners and contributed to projects that serve 100K+ users.`,
        linkedin_link: 'https://www.linkedin.com/in/shifra-williams/',
        website_link: 'https://ho1yshif.github.io/'
      },
      {
        name: 'Sam LaFell',
        pronouns: 'he/him',
        title: 'Co-host',
        image: '/assets/images/about/sam.jpeg',
        description: `Sam is a Data Engineer, MLOps Enthusiast, and builder of smarter data pipelines. He started his career as a Data Scientist, but quickly realized that messy data and inefficient pipelines were the real bottlenecks.
<br/><br/>
Now, as a Data Engineer, he focuses on building scalable, reliable, and efficient data systems that empower organizations to make smarter decisions. Sam works across Python, SQL, and cloud platforms like AWS and Azure to build resilient data solutions. 
He bridges the gap between Data Science and Engineering by building and deploying models to deliver business value. Sam believes data should be an asset, not a liability, and he's also building his own business to help organizations level up their data infrastructure.`,
        linkedin_link: 'https://www.linkedin.com/in/samlafell/',
        website_link: 'https://www.samlafell.com/'
      },
      {
        name: 'Eli Akselrod',
        pronouns: 'she/her',
        title: 'Post-production editor',
        image: '/assets/images/about/eli.jpg',
        description: `Eli is an Emmy and Golden Reel-nominated audio engineer who brings extensive expertise in post-production and dialogue editing from the world of film and television. 
Her impressive portfolio spans high-profile projects including HBO's Emmy-nominated "100 Foot Wave," the critically acclaimed documentary "Bill Russell: Legend," Netflix's sports documentary series "Full Swing," and the HBO comedy series "Boys But Girls."
<br/><br/>
With Saturdata, Eli ventures into new creative territory beyond the silver screen. She masterfully applies her audio storytelling expertise to the podcasting medium, crafting an engaging listening experience that transforms complex technical topics into accessible and entertaining content for audiences.`,
        linkedin_link: 'https://www.linkedin.com/in/eli-akselrod/',
        website_link: 'https://elisfx.com/#/'
      }
    ]
  },

  // Episodes Section Data
  episodes: {
    id: 'episodes',
    type: 'episodes',
    title: 'Episodes',
    items: [
      {
        title: 'Hello world: welcome to Saturdata',
        type: 'episode',
        season: 0,
        image: '/assets/images/episodes/season-0/hello-world.png',
        description: 'Join hosts Shifra Williams and Sam LaFell as they introduce Saturdata - your weekend data community. Learn about their backgrounds, the mission of the podcast, and what you can expect from future episodes as they humanize the data world for the next generation.',
        youtube_link: 'https://youtu.be/pBvuqiyRIG8?si=HHX52WFaXHms7UlF',
        spotify_link: 'https://open.spotify.com/episode/59Ji4HMwEV4CzxkOvACQgX?si=lSWD-wstSAm-_fVuwEYhGA'
      },
      {
        title: 'Day in the life of a data engineer',
        type: 'episode',
        season: 0,
        image: '/assets/images/episodes/season-0/ditl-data-eng.png',
        description: 'Join hosts Sam and Shifra as they explore the realities of data roles. Sam discusses a day in the life of a data engineer. From the glamorous perceptions to the day-to-day challenges, they discuss the skills, stakeholders, and the importance of understanding the "why" behind data projects.',
        youtube_link: 'https://www.youtube.com/watch?v=HI0jUmXiEgQ',
        spotify_link: 'https://open.spotify.com/episode/5zxJxAz57GOWCqieeiuZzf?si=6a094e38dec3408f'
      },
      {
        title: 'Day in the life of a data scientist',
        type: 'episode',
        season: 0,
        image: '/assets/images/episodes/season-0/ditl-data-sci.png',
        description: 'Join hosts Sam and Shifra as they explore what it really means to be a data scientist. From building predictive models to translating complex insights for stakeholders, they discuss the balance between ad hoc requests, dashboard creation, and meaningful machine learning work.',
        youtube_link: 'https://youtu.be/jrP-U7-0gAk?feature=shared',
        spotify_link: 'https://open.spotify.com/episode/1cAy3QmwP6PIwI5JLg3Eus?si=d8ecc591eea34a3a'
      },
      {
        title: 'Data interviews: From ghosting to guidance',
        type: 'episode',
        season: 0,
        image: '/assets/images/episodes/season-0/interviews-1.png',
        description: 'Interviews don\'t have to suck! Join Sam and Shifra as they break down everything you need to know about data career interviews. From the good and the bad to the downright ridiculous, they share real talk about what actually works in the interview process.',
        youtube_link: 'https://youtu.be/2hwU_jBwQZs?feature=shared',
        spotify_link: 'https://open.spotify.com/episode/5QkUuMrzBL1lDCoJAldLtC?si=8bcc9f9647124157'
      },
      {
        title: 'Data interviews: The good, the bad, and the hilarious',
        type: 'episode',
        season: 0,
        image: '/assets/images/episodes/season-0/interviews-2.png',
        description: 'If we didn\'t get the job, at least we got a story out of it! Join Sam and Shifra as they break down the most popular interview questions, the wildest interview stories, and the benefits of the Zumba council. Maybe the real interviews were the friends we made along the way?',
        youtube_link: 'https://youtu.be/_EB-kWDrjtM',
        spotify_link: 'https://open.spotify.com/episode/6q8cO5iCVqc3X279SY2fyQ?si=4da281179e484786'
      },
      {
        title: 'Unlocking opportunities: The power of LinkedIn networking with Sai Bysani',
        type: 'episode',
        season: 0,
        image: '/assets/images/episodes/season-0/sai.png',
        description: '[Sai Bysani](https://www.linkedin.com/in/saibysani18) shares the LinkedIn strategy that transformed his career. Learn practical tips for content creation, comment strategies, and why starting where you are beats waiting for perfection.',
        youtube_link: 'https://www.youtube.com/watch?v=Xt559oTBuMk',
        spotify_link: 'https://open.spotify.com/episode/1TxKPQNad3KX26RdF8aZtd?si=b9a5999af7c54f3b',
      },
      {
        title: 'Data skills nobody taught you',
        type: 'episode',
        season: 1,
        image: '/assets/images/episodes/season-1/auxiliary_data_skills.png',
        description: 'Your SQL is great. But can you actually ship? Sam and Shifra kick off Season 1 (since Saturdata is zero-indexed) by covering the unsung skills that separate someone who writes queries from someone who builds things: terminal literacy, dependency management, Git, notebooks, and why UV might be Python\'s best friend right now. Plus, a deep dive into Marimo, the notebook tool that fixes everything you hate about Jupyter.',
        youtube_link: 'https://youtu.be/UX9y42JF9Zs',
        spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo',
        schedule_release: '2026-02-28T08:00:00-07:00' 
      },
      {
        title: 'Why your SQL costs more than you think',
        type: 'episode',
        season: 1,
        image: '/assets/images/episodes/season-1/sql.png',
        description: 'Think you know SQL? Sam and Shifra break down what separates a query writer from a true data thinker, from basic selects all the way to distributed systems, query plans, and the four pillars of production-ready code. Plus: why your data provider\'s incentives are working against you, how a 1,400-line monolith hid millions in overstated revenue, and the one approach that will save you from silent, soul-crushing data failures.',
        youtube_link: 'https://youtu.be/FDL5WeKUfMc',
        spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo',
        schedule_release: '2026-03-07T08:00:00-07:00' 
      },
      {
        title: 'Statistics 101 at work',
        type: 'episode',
        season: 1,
        image: '/assets/images/episodes/season-1/statistical_testing.png',
        description: 'What if your A/B test needed 67 years to reach statistical significance? Sam found out the hard way. Join Sam and Shifra as they demystify statistical testing for the real world of data work, where the stakes are lower, the data is messier, and your stakeholders definitely do not know what a p-value is.',
        youtube_link: 'https://youtu.be/rFVcREG63xo',
        spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo',
        schedule_release: '2026-03-14T08:00:00-07:00' 
      },
      {
        title: 'Data storytelling: the good, the bad, and the pie chart',
        type: 'episode',
        season: 1,
        image: '/assets/images/episodes/season-1/data_viz_and_storytelling.png',
        description: 'Your chart is full of information. So why does no one know what it means? Sam and Shifra break down everything you need to know about data visualization and storytelling, from picking the right Python library to presenting charts your exec will actually understand. Spoiler: the pie chart doesn\'t make it out alive.',
        youtube_link: 'https://youtu.be/Znvt0mSDvNo',
        spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo',
        schedule_release: '2026-03-21T08:00:00-07:00' 
      },
      {
        title: 'From spaghetti to clean code: pandas, Polars and DuckDB explained',
        type: 'episode',
        season: 1,
        image: '/assets/images/episodes/season-1/pandas_polars_duckdb.png',
        description: 'Is your Python code held together with duct tape and prayers? Sam and Shifra untangle the spaghetti and walk you through what it actually means to write clean, maintainable data code, and which tools will get you there. From the humble origins of Pandas to the blazing speed of Polars and the SQL simplicity of DuckDB, this episode is your guide to leveling up without burning down your codebase.',
        youtube_link: 'https://youtu.be/2n0SgV0gzCE',
        spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo',
        schedule_release: '2026-03-28T08:00:00-07:00' 
      },
      {
        title: 'We\'re making up AI as we go',
        type: 'episode',
        season: 1,
        image: '/assets/images/episodes/season-1/ai.png',
        description: 'What happens when you train an evil AI and it just lies really confidently? [Joey Yudelson](https://www.linkedin.com/in/joseph-yudelson/), AI safety researcher at Redwood Research, joins Sam and Shifra to break down why 300 people standing between us and a catastrophic AI future might not be enough, and what data folks can actually do about it.',
        youtube_link: 'https://youtu.be/K2Z2mG_bFTA',
        spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo',
        schedule_release: '2026-04-04T08:00:00-07:00' 
      },
      {
        title: 'More episodes coming soon',
        type: 'episode',
        season: 1,
        image: '/assets/images/logos/saturdata.png',
        description: 'We\'re just getting started! New episodes dropping on terminal mastery, SQL fundamentals, Python essentials, performance optimization, and AI safety. Subscribe to stay updated on technical deep-dives, career guidance, and special guest appearances.',
        youtube_link: 'https://www.youtube.com/@SaturdataPod',
        spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo',
      },
    ]
  },

  // Guest Appearances Section Data
  appearances: {
    id: 'guest-appearances',
    type: 'appearances',
    title: 'Guest appearances',
    items: [
      {
        title: 'Data science masterclass for finance professionals',
        type: 'appearance',
        image: '/assets/images/appearances/fpa-today.png',
        description: 'Shifra joins FP&A Today with Glenn Hopper to break down data science methods for finance professionals, from data ingestion to machine learning and ARIMA models in Excel.',
        youtube_link: 'https://youtu.be/lWFpcwcSmQg?si=EUMoEd4Idw_wWrfo',
        spotify_link: 'https://open.spotify.com/episode/0D3BaBiRxY4hAAGB1IITfQ?si=a6a09d5af2ea4da9'
      },
      {
        title: 'How to get hired as a data engineer',
        type: 'appearance',
        image: '/assets/images/appearances/sam-rsd.png',
        description: 'Sam joins Ready Set Do with Naman Pandey to share his experience breaking into data engineering and the key strategies for landing data engineering roles.',
        youtube_link: 'https://youtu.be/JtF8b7k8nO8?si=Vhj1iO7c9itUbx_3',
        spotify_link: 'https://open.spotify.com/episode/6cn5CoLiUalZCxnFOmWRiK?si=c9a4cc190234451a'
      },
      {
        title: 'Why LinkedIn is your secret weapon',
        type: 'appearance',
        image: '/assets/images/appearances/shif-rsd-li.png',
        description: 'Shifra joins Ready Set Do with Naman Pandey to share how professionals can leverage LinkedIn to grow their careers, build networks, and create opportunities for advancement.',
        youtube_link: 'https://www.youtube.com/watch?v=wphrAyEr6dY',
        spotify_link: 'https://open.spotify.com/episode/5uxbUxZ46GYLQUfRi9O4TK?si=162be73fdd494380'
      },
      {
        title: 'From music to data: How anyone can pivot to a tech career',
        type: 'appearance',
        image: '/assets/images/appearances/shif-rsd-music.png',
        description: 'Shifra joins Ready Set Do with Naman Pandey to share their journey from music to data and practical strategies for transitioning to tech from any background.',
        youtube_link: 'https://youtu.be/d9HULEWeCmk?si=-arO55XF-T2nEKiM',
        spotify_link: 'https://open.spotify.com/episode/73CdAVvQLlVdEtvWuiPNKe?si=9c9c7ef7e0344a83'
      },
      {
        title: 'Data science in healthcare: navigating insights and challenges',
        type: 'appearance',
        image: '/assets/images/appearances/net-result.jpg',
        description: 'Shifra and Sam join the Net Result with Ben Smith to discuss the transformative role of data science in the healthcare industry. Discover how cutting-edge data analytics is reshaping patient care, streamlining operations, and driving innovation.',
        youtube_link: 'https://www.youtube.com/watch?v=8h4Qo-qQDu8',
        spotify_link: 'https://open.spotify.com/episode/3MriuFJvzQUoNrYFZNBc0F?si=9825ae5fae1843f6'
      },
    ]
  }
}

