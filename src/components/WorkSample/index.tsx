import React, { PropsWithChildren } from 'react';
import { skills } from '../../constants';
import { Principle, Skill } from '../../types';
import { logClick, navigationTracking, renderIcon } from '../../utils';
import Avatar from '../Avatar';
import Heading from '../Heading';
import Link from '../Link';
import SkillTag from '../SkillTag';
import SplittedSection from '../SplittedSection';
import { WorkSampleWrapper } from './styles';

interface Props {
  date: string;
  location: string;
  picture: string;
  pictureSize: number[];
  right?: boolean;
  skills: (Skill | Principle)[];
  title: string;
  url?: string;
}

const WorkSample = ({
  children,
  date,
  location,
  picture,
  pictureSize,
  right = false,
  skills: projectSkills,
  title,
  url
}: PropsWithChildren<Props>): JSX.Element => {
  const sortedSkills = skills.filter((t) => projectSkills.includes(t.name));

  return (
    <WorkSampleWrapper $right={right}>
      <SplittedSection>
        <Avatar
          background
          isLogo
          {...{ height: pictureSize[1], url: picture, width: pictureSize[0] }}
        />
      </SplittedSection>

      <SplittedSection $large>
        <Heading $size="xs">{title}</Heading>

        <p>
          {renderIcon('calendar')} {date} - {renderIcon('location')} {location}
        </p>

        {!!url && (
          <p>
            {/* @ts-ignore */}
            {renderIcon('link')}{' '}
            <Link
              href={url}
              onClick={() => {
                logClick({ ...navigationTracking, label: title });
              }}
              target="_blank"
            >
              {url}
            </Link>
          </p>
        )}

        {children}

        <p style={{ lineHeight: 1.7 }}>
          {sortedSkills.map(({ name }) => (
            <SkillTag key={name} margin right={right} skill={name} />
          ))}
        </p>
      </SplittedSection>
    </WorkSampleWrapper>
  );
};

export default WorkSample;
