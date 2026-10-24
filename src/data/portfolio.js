export const portfolio = {
  name: 'Jordan Rivera',
  initials: 'JR',
  email: 'hello@example.com',
  intro: 'I’m a final-year computer science student who enjoys turning complex ideas into clear, useful software.',
  about: [
    'I like working where thoughtful engineering meets a real human need. My favorite projects start with a messy problem, a curious question, and room to make something simpler.',
    'At university, I’ve explored full-stack development, data systems, and interface design. Outside class, I’m usually learning a new tool, sketching product ideas, or sharing notes with my study group.',
  ],
  skills: [
    { title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'SQL'] },
    { title: 'Development', items: ['React', 'Node.js', 'REST APIs', 'HTML & CSS'] },
    { title: 'Tools & practice', items: ['Git', 'PostgreSQL', 'Figma', 'Agile teamwork'] },
  ],
  projects: [
    {
      number: '01', category: 'Collaboration tool', name: 'StudyRoom',
      description: 'A shared study space for classmates to organize focus sessions, exchange notes, and keep group work moving.',
      tags: ['React', 'Node.js', 'Socket.IO'], visual: 'study', visualLabel: 'Shared study workspace preview',
    },
    {
      number: '02', category: 'Mapping & data', name: 'GreenRoute',
      description: 'A route-planning concept that compares public transit and walking options with clear, easy-to-read journey details.',
      tags: ['Python', 'Flask', 'PostgreSQL'], visual: 'route', visualLabel: 'Route planner interface preview',
    },
    {
      number: '03', category: 'Student productivity', name: 'Course Compass',
      description: 'A lightweight course planner for mapping prerequisites, tracking semester plans, and keeping degree requirements in view.',
      tags: ['JavaScript', 'React', 'CSS'], visual: 'course', visualLabel: 'Course planner interface preview',
    },
  ],
  education: {
    degree: 'B.S. in Computer Science', school: 'Northstar University', date: 'Expected 2026',
    detail: 'Relevant study: data structures, databases, software engineering, and human-computer interaction.',
  },
}