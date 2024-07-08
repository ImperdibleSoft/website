import { Skill } from './skills';

export * from './skills';

export type ContactMethod = 'Email' | 'Phone';

export type Principle =
  | 'Responsive design'
  | 'Mobile first'
  | 'Progressive Web App'
  | 'Agile methodologies'
  | 'Continuous integration';

export type SocialMedia = 'Patreon' | 'LinkedIn' | 'Github' | 'Medium';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ListItemLabel =
  | ContactMethod
  | Principle
  | Skill
  | SocialMedia
  | 'calendar'
  | 'link'
  | 'location'
  | 'ImperdibleSoft'
  | 'Download my CV';

export interface ProjectEntry {
  children: JSX.Element;
  date: string;
  location: string;
  picture: string;
  pictureSize: number[];
  skills: Skill[];
  title: string;
  url?: string;
}
