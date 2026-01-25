import React from 'react'

function Experience() {
  const experiences = [
    {
      company: 'Amazon',
      location: 'Seattle',
      period: 'Dec 2020 - Present',
      roles: [
        {
          title: 'Software Development Engineer II',
          period: 'July 2022 - Present',
          highlights: [
            {
              title: 'Conversion',
              description: <>Led a team of 5 engineers to build a scalable internal transfer system that reduced average associate conversion time from 30 min to 90s. A <strong>95% reduction</strong>, saving <strong>2000+ business hours</strong> per year. This was an asynchronous lambda-based solution processing <strong>5K conversions</strong> per request reducing manual ToT (time-on-task) by <strong>78%</strong>.</>
            },
            {
              title: 'Self Service UI',
              description: <>Automated the process of expanding the transfer product to a new business and associate population. Saving an average of <strong>6 weeks per expansion</strong> for an average of <strong>24 weeks per year</strong> in development time.</>
            },
            {
              title: 'Event Driven Data Vending',
              description: 'Led a team of 3 engineers to design and build an event driven data vending system allowing downstream systems to receive real time events. The system also allowed new clients to be onboard within a few hours.'
            },
            {
              title: 'Labor Planning Automation',
              description: <>Integrated with an internal system to create a two way data sharing system consisting of async state machines and synchronous APIs backed by API gateway scaling to <strong>120+ burst TPS</strong>. The system served both business and associates, saving <strong>1500+ of business hours</strong> per year by eliminating manual planning work and providing heatmaps to associates resulting in more informed transfer decisions.</>
            }
          ]
        },
        {
          title: 'Performance',
          achievements: [
            'Removed latency bottlenecks using AWS CloudWatch metrics (latency, cache hit/miss, total time v/s API time, AppSync compression, DynamoDB Accelerator) and web vital metrics (TTI, TTFB).',
            <>Reduced TTI (time-to-interaction) by <strong>52%</strong> via critical feature decoupling and optimizing AppSync queries.</>,
            'Empirically proved that the cost of DAX outweighed the latency gains by building a PoC and benchmarking the system.'
          ]
        },
        {
          title: 'Operational Excellence',
          achievements: [
            <>Built a custom load testing framework with built-in production safety. This reduced testing time from <strong>16 hrs to 1 hr</strong></>,
            'Authored the production readiness document detailing the process for devs, pms, tpms & sdms, detailing each development stage to ensure consistency, stable releases, and smooth stakeholder collaboration.'
          ]
        },
        {
          title: 'Developer Productivity',
          achievements: [
            'Implemented tooling for code review size limits, improving review speed and participation.',
            'Established a design review process optimizing senior engineer bandwidth and increasing organizational visibility.'
          ]
        },
        {
          title: 'Hiring and Mentorship',
          achievements: [
            'Mentored two L4 SDE interns to successful completion of their internships.',
            'Mentored two L4 SDEs to be promoted to an L5 SDE.'
          ]
        }
      ]
    },
    {
      company: 'Amazon',
      location: 'Seattle',
      period: 'Dec 2020 - July 2022',
      roles: [
        {
          title: 'Software Development Engineer',
          description: <>Designed, built and scaled a critical eligibility service responsible for calculating eligibility for each user. The service handled <strong>50 TPS</strong> and <strong>200K+ daily requests</strong>. It allowed complex rules to be created and existing rules to be updated by business without dev intervention.</>
        }
      ]
    },
    {
      company: 'Fractal Analytics',
      location: 'NCR, India',
      period: 'April 2016 - July 2018',
      roles: [
        {
          title: 'Software Engineer',
          description: <>Worked on their flagship product TrialRun. Re-architecturing API level code using Celery, RabbitMQ and Redis caching to handle a <strong>95x increase</strong> in size for user request.</>
        }
      ]
    },
    {
      company: 'S&P Global',
      location: 'NCR, India',
      period: 'Jun 2015 - Apr 2016',
      roles: [
        {
          title: 'Software Engineer',
          description: 'Worked as part of XpressFeed and Index Ingestion team, delivering financial and index data feeds to clients.'
        }
      ]
    }
  ]

  return (
    <section className="section experience-section animate-on-scroll">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((job, index) => (
          <div key={index} className={`timeline-item animate-slide-${index % 2 === 0 ? 'left' : 'right'}`}>

            <div className="timeline-content">
              <div className="job-header">
                <h3 className="company-name">{job.company}</h3>
                <span className="job-location">{job.location}</span>
                <span className="job-period">{job.period}</span>
              </div>
              {job.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="role">
                  <h4 className="role-title">{role.title}</h4>
                  {role.period && <span className="role-period">{role.period}</span>}
                  {role.description && <p className="role-description">{role.description}</p>}
                  {role.highlights && (
                    <div className="highlights">
                      {role.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="highlight-item">
                          <h5 className="highlight-title">{highlight.title}</h5>
                          <p className="highlight-description">{highlight.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {role.achievements && (
                    <ul className="achievements">
                      {role.achievements.map((achievement, aIndex) => (
                        <li key={aIndex}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
