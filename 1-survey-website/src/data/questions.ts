type Question = {
  id: number;
  question: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    question: 'What is your profession?',
    options: ['Student', 'Software Engineer', 'Teacher', 'Others']
  },
  {
    id: 2,
    question: 'What are your interests?',
    options: ['DSA', 'Full Stack Development', 'Data Science', 'Competitive Programming', 'Others']
  },
  {
    id: 3,
    question: 'Where did you hear about us?',
    options: ['Newspaper', 'LinkedIn', 'Instagram', 'Others']
  },
];


export default questions;