import React, { PropsWithChildren } from 'react';
import { iconTracking, logClick } from '../../utils';
import AppSection from '../AppSection';
import Heading from '../Heading';
import List from '../List';

interface Props {
  list: string[];
  title: string;
}

const SkillList = ({
  children,
  list,
  title
}: PropsWithChildren<Props>): JSX.Element => (
  <AppSection>
    <Heading $size="xs">{title}</Heading>

    {children}

    <List
      iconList
      items={list.map((label) => ({
        label,
        onClick: () => {
          logClick({ ...iconTracking, label });
        }
      }))}
      text
    />
  </AppSection>
);

export default SkillList;
