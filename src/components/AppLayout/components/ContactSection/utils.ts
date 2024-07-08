import { GITHUB, LINKEDIN, MEDIUM, PATREON } from '../../../../constants';
import { SocialMedia } from '../../../../types';

export const getPlatformUrl = (platform: SocialMedia): string => {
  switch (platform) {
    case 'Patreon':
      return PATREON;

    case 'LinkedIn':
      return LINKEDIN;

    case 'Github':
      return GITHUB;

    case 'Medium':
      return MEDIUM;

    default:
      return '';
  }
};
