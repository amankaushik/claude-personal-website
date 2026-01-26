import React from 'react'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C++', 'TypeScript', 'ReactJS', 'GraphQL', 'SQL']
    },
    {
      title: 'AWS Cloud',
      skills: ['Lambda', 'DynamoDB', 'API Gateway', 'AppSync', 'RDS', 'SQS', 'SNS', 'EventBridge', 'CloudWatch', 'StepFunctions', 'Kinesis', 'S3', 'CloudFront', 'VPC', 'KMS', 'CDK']
    },
    {
      title: 'Tools & Practices',
      skills: ['CI/CD', 'Jest', 'Mockito']
    }
  ]

  return (
    <section className="section skills-section animate-on-scroll">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`skill-tag animate-scale stagger-${Math.min((index % 5) + 1, 5)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
