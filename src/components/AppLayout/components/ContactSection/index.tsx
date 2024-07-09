import React from 'react';
import { EMAIL, PHONE } from '../../../../constants';
import { SocialMedia } from '../../../../types';
import { contactTracking, logClick, socialTracking } from '../../../../utils';
import AppSection from '../../../AppSection';
import Heading from '../../../Heading';
import List from '../../../List';
import { getPlatformUrl } from './utils';

const platforms: SocialMedia[] = ['Patreon', 'LinkedIn', 'Github', 'Medium'];

const ContactSection = (): JSX.Element => (
  <AppSection>
    <Heading $size="lg">Want to know more?</Heading>
    <List
      iconList
      items={platforms.map((label) => ({
        href: getPlatformUrl(label),
        label,
        onClick: () => {
          logClick({ ...socialTracking, label });
        }
      }))}
      text
    />

    <Heading $size="lg">Contact</Heading>
    <List
      iconList
      items={[
        {
          href: `mailto:${EMAIL}`,
          label: 'Email',
          onClick: () => {
            logClick({ ...contactTracking, label: 'Email' });
          }
        },
        {
          href: `tel:${PHONE}`,
          label: 'Phone',
          onClick: () => {
            logClick({ ...contactTracking, label: 'Phone' });
          }
        }
      ]}
      text
    />
  </AppSection>
);

export default ContactSection;
