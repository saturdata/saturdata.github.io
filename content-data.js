// Content Data for Saturdata Website
// This file contains all the content data for the about, episodes, and appearances sections

const SaturdataContent = {
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
                image: 'assets/images/about/shif.jpeg',
                description: 'Shifra is a Developer Advocate whose career has been defined by one core mission: making complex technical concepts click for real people. Their journey spans data science, technical writing, and community building, all tied together by her passion for creating those crucial "aha!" moments that transform confusion into confidence.\n\nNow at Ascend.io, she operates at the intersection of agentic data engineering and developer success. What energizes them most is community building—connecting technical experts with early-career learners and creating educational experiences that stick. Through her work across platforms, she&apos;s reached over 135K learners and contributed to projects that serve 100K+ users.',
                social_links: [
                    {
                        platform: 'linkedin',
                        url: 'https://www.linkedin.com/in/shifra-williams/',
                        label: 'LinkedIn'
                    },
                    {
                        platform: 'website',
                        url: 'https://ho1yshif.github.io/',
                        label: 'Website'
                    }
                ]
            },
            {
                name: 'Sam LaFell',
                pronouns: 'he/him',
                title: 'Co-host',
                image: 'assets/images/about/sam.jpeg',
                description: 'Sam is a Data Engineer, MLOps Enthusiast, and builder of smarter data pipelines. He started his career as a Data Scientist, but quickly realized that messy data and inefficient pipelines were the real bottlenecks. Now, as a Data Engineer, he focuses on building scalable, reliable, and efficient data systems that empower organizations to make smarter decisions.\n\nSam works across Python, SQL, and cloud platforms like AWS & Azure to build resilient data solutions. He bridges the gap between Data Science & Engineering, ensuring models don&apos;t just get built—they get deployed and deliver real value. Sam believes data should be an asset, not a liability, and he&apos;s also building his own business, helping organizations level up their data infrastructure.',
                social_links: [
                    {
                        platform: 'linkedin',
                        url: 'https://www.linkedin.com/in/samlafell/',
                        label: 'LinkedIn'
                    },
                    {
                        platform: 'website',
                        url: 'https://www.samlafell.com/',
                        label: 'Website'
                    }
                ]
            },
            {
                name: 'Eli Akselrod',
                pronouns: 'she/her',
                title: 'Post-production editor',
                image: 'assets/images/about/eli.jpg',
                description: 'Eli is an Emmy and Golden Reel-nominated audio engineer with expertise in post-production and dialogue editing. \n\n Saturdata is a break from Eli&apos;s usual work on the silver screen, and she enjoys telling the hosts&apos; stories through podcasting.',
                social_links: [
                    {
                        platform: 'linkedin',
                        url: 'https://www.linkedin.com/in/eli-akselrod/',
                        label: 'LinkedIn'
                    },
                    {
                        platform: 'website',
                        url: 'https://elisfx.com/#/',
                        label: 'Website'
                    }
                ]
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
                image: 'assets/images/episodes/hello-world.png',
                description: 'Join hosts Shifra Williams and Sam LaFell as they introduce Saturdata - your weekend data community. Learn about their backgrounds, the mission of the podcast, and what you can expect from future episodes as they humanize the data world for the next generation.',
                youtube_link: 'https://youtu.be/pBvuqiyRIG8?si=HHX52WFaXHms7UlF',
                spotify_link: 'https://open.spotify.com/episode/59Ji4HMwEV4CzxkOvACQgX?si=lSWD-wstSAm-_fVuwEYhGA'
            },
            {
                title: 'Day in the life of a data engineer',
                type: 'episode',
                image: 'assets/images/episodes/ditl-data-eng.png',
                description: 'Join hosts Sam and Shifra as they explore the realities of data roles. Sam discusses a day in the life of a data engineer. From the glamorous perceptions to the day-to-day challenges, they discuss the skills, stakeholders, and the importance of understanding the "why" behind data projects.',
                youtube_link: 'https://www.youtube.com/watch?v=HI0jUmXiEgQ',
                spotify_link: 'https://open.spotify.com/episode/5zxJxAz57GOWCqieeiuZzf?si=6a094e38dec3408f'
            },
            {
                title: 'Day in the life of a data scientist',
                type: 'episode',
                image: 'assets/images/episodes/ditl-data-sci.png',
                description: 'Join hosts Sam and Shifra as they explore what it really means to be a data scientist. From building predictive models to translating complex insights for stakeholders, they discuss the balance between ad hoc requests, dashboard creation, and meaningful machine learning work.',
                youtube_link: 'https://youtu.be/jrP-U7-0gAk?feature=shared',
                spotify_link: 'https://open.spotify.com/episode/1cAy3QmwP6PIwI5JLg3Eus?si=d8ecc591eea34a3a'
            },
            {
                title: 'Data interviews: From ghosting to guidance',
                type: 'episode',
                image: 'assets/images/episodes/interviews-1.png',
                description: 'Interviews don&apos;t have to suck! Join Sam and Shifra as they break down everything you need to know about data career interviews. From the good and the bad to the downright ridiculous, they share real talk about what actually works in the interview process.',
                youtube_link: 'https://youtu.be/2hwU_jBwQZs?feature=shared',
                spotify_link: 'https://open.spotify.com/episode/5QkUuMrzBL1lDCoJAldLtC?si=8bcc9f9647124157'
            },
            {
                title: 'Data interviews: The good, the bad, and the hilarious',
                type: 'episode',
                image: 'assets/images/episodes/interviews-2.png',
                description: 'If we didn&apos;t get the job, at least we got a story out of it! Join Sam and Shifra as they break down the most popular interview questions the wildest interview stories, and the benefits of the Zumba council. Maybe the real interviews were the friends we made along the way?',
                youtube_link: 'hhttps://youtu.be/_EB-kWDrjtM?si=PyleFbgITf8u9dS6',
                spotify_link: 'https://open.spotify.com/episode/6q8cO5iCVqc3X279SY2fyQ?si=4da281179e484786'
            },
            {
                title: 'More episodes coming soon',
                type: 'episode',
                image: 'assets/images/logos/saturdata.png',
                description: 'We&apos;re just getting started! Subscribe to stay updated on new episodes, behind-the-scenes content, and special guest appearances.',
                youtube_link: 'https://www.youtube.com/@SaturdataPod',
                spotify_link: 'https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo'
            }
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
                image: 'assets/images/appearances/fpa-today.png',
                description: 'Shifra joins FP&A Today with Glenn Hopper to break down data science methods for finance professionals, from data ingestion to machine learning and ARIMA models in Excel.',
                links: [
                    {
                        platform: 'youtube',
                        url: 'https://youtu.be/lWFpcwcSmQg?si=EUMoEd4Idw_wWrfo',
                        text: 'YouTube'
                    },
                    {
                        platform: 'spotify',
                        url: 'https://open.spotify.com/episode/0D3BaBiRxY4hAAGB1IITfQ?si=a6a09d5af2ea4da9',
                        text: 'Spotify'
                    }
                ]
            },
            {
                title: 'How to get hired as a data engineer',
                type: 'appearance',
                image: 'assets/images/appearances/sam-rsd.png',
                description: 'Sam joins Ready Set Do with Naman Pandey to share his experience breaking into data engineering and the key strategies for landing data engineering roles.',
                links: [
                    {
                        platform: 'youtube',
                        url: 'https://youtu.be/JtF8b7k8nO8?si=Vhj1iO7c9itUbx_3',
                        text: 'YouTube'
                    },
                    {
                        platform: 'spotify',
                        url: 'https://open.spotify.com/episode/6cn5CoLiUalZCxnFOmWRiK?si=c9a4cc190234451a',
                        text: 'Spotify'
                    }
                ]
            },
            {
                title: 'Why LinkedIn is your secret weapon',
                type: 'appearance',
                image: 'assets/images/appearances/shif-rsd-li.png',
                description: 'Shifra joins Ready Set Do with Naman Pandey to share how professionals can leverage LinkedIn to grow their careers, build networks, and create opportunities for advancement.',
                links: [
                    {
                        platform: 'youtube',
                        url: 'https://www.youtube.com/watch?v=wphrAyEr6dY',
                        text: 'YouTube'
                    },
                    {
                        platform: 'spotify',
                        url: 'https://open.spotify.com/episode/5uxbUxZ46GYLQUfRi9O4TK?si=162be73fdd494380',
                        text: 'Spotify'
                    }
                ]
            },
            {
                title: 'From music to data: How anyone can pivot to a tech career',
                type: 'appearance',
                image: 'assets/images/appearances/shif-rsd-music.png',
                description: 'Shifra joins Ready Set Do with Naman Pandey to share their journey from music to data and practical strategies for transitioning to tech from any background.',
                links: [
                    {
                        platform: 'youtube',
                        url: 'https://youtu.be/d9HULEWeCmk?si=-arO55XF-T2nEKiM',
                        text: 'YouTube'
                    },
                    {
                        platform: 'spotify',
                        url: 'https://open.spotify.com/episode/73CdAVvQLlVdEtvWuiPNKe?si=9c9c7ef7e0344a83',
                        text: 'Spotify'
                    }
                ]
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SaturdataContent;
}
