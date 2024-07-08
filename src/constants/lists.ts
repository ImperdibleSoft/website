import { Principle, Skill } from '../types';
import { skills } from './technologies';

export const {
  backend,
  framework,
  highlightedSkills,
  language,
  relevant,
  styling,
  testing,
  tools
} = skills.reduce(
  (aggr, { category, highlighted, name, relevant }) => {
    if (highlighted) {
      aggr.highlightedSkills.push(name);
    }

    if (relevant) {
      aggr.relevant.push(name);
      return aggr;
    }

    aggr[category].push(name);

    return aggr;
  },
  {
    highlightedSkills: [] as Skill[],
    relevant: [] as Skill[],
    framework: [] as Skill[],
    language: [] as Skill[],
    styling: [] as Skill[],
    testing: [] as Skill[],
    tools: [] as Skill[],
    backend: [] as Skill[]
  }
);

export const principles: Principle[] = [
  'Responsive design',
  'Mobile first',
  'Progressive Web App',
  'Continuous integration',
  'Agile methodologies'
];

export const hobbies = [
  'Any tech stuff',
  'Coding',
  'Driving',
  'Visual Design, UX',
  'Traveling',
  'Videogames'
];
