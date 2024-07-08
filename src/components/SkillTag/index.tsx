import React from 'react';
import styled, { css } from 'styled-components';
import { Principle, Skill } from '../../types';
import { getItemColor, renderIcon } from '../../utils';
import { TABLET } from '../../constants';

interface StyledTagProps {
  $margin?: boolean;
  $right?: boolean;
}

const StyledTag = styled.span<StyledTagProps>`
  font-weight: 700;
  vertical-align: top;

  & > div {
    margin-right: 4px;
  }

  ${({ $margin, $right }) => {
    const position = $right ? 'first' : 'last';
    const side = $right ? 'left' : 'right';

    return css`
      align-items: center;
      display: inline-flex;

      ${$margin &&
      css`
        margin-right: 16px;
  
        &:last-of-type {
          margin-right: 0;
        }

        ${TABLET} {
          margin-right: 0;
          margin-${side}: 16px;
    
          &:${position}-of-type {
            margin-${side}: 0;
          }
        }
      `}
    `;
  }}
`;
StyledTag.displayName = 'StyledTag';

interface Props {
  className?: string;
  icon?: boolean;
  large?: boolean;
  margin?: boolean;
  right?: boolean;
  skill: Skill | Principle;
}

const SkillTag = ({
  className,
  icon = false,
  large,
  margin,
  right,
  skill
}: Props): JSX.Element => (
  <StyledTag
    className={className}
    $margin={margin}
    $right={right}
    style={{ color: getItemColor(skill) }}
  >
    {icon && renderIcon(skill, large)}
    {skill}
  </StyledTag>
);

export default SkillTag;
