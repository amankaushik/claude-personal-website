import React from 'react'

function Skills() {
  const skills = [
    'Java', 'Python', 'C++', 'TypeScript', 'ReactJS', 'Lambda', 'DynamoDB',
    'API Gateway', 'AppSync', 'MySQL', 'RDS', 'SQS', 'SNS', 'EventBridge',
    'CloudWatch', 'StepFunctions', 'Kinesis', 'S3', 'CloudFront', 'VPC',
    'KMS', 'CDK', 'CI/CD', 'GraphQL', 'Jest', 'Mockito'
  ]

  return (
    <section className="section skills-section animate-on-scroll">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`skill-tag animate-scale stagger-${Math.min((index % 5) + 1, 5)}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
