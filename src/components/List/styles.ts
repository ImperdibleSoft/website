import styled, { css } from 'styled-components';
import { MOBILE_L, MOBILE_XL, TABLET } from '../../constants';
import SkillTag from '../SkillTag';

interface ListWrapperProps {
  $icons: boolean;
}

export const ListWrapper = styled.ul<ListWrapperProps>`
  ${({ $icons }) => {
    if ($icons) {
      return css`
        display: inline-block;
        font-size: 2rem;
        list-style: none;
        margin: 8px auto;
        text-align: center;
        width: 100%;
      `;
    }

    return css`
      margin 20px auto;
      text-align: left;
    `;
  }}
`;
ListWrapper.displayName = 'ListWrapper';

export const ListItem = styled.li<ListWrapperProps>`
  ${({ $icons }) => {
    if ($icons) {
      return css`
        display: inline-block;
        margin: 12px 0;
        padding: 0 8px;
        vertical-align: middle;
        width: 50%;

        ${MOBILE_L} {
          width: 33.33%;
        }

        ${MOBILE_XL} {
          width: 25%;
        }

        ${TABLET} {
          margin: 24px;
          width: auto;
        }
      `;
    }

    return css`
      margin-left: 16px;
      vertical-align: top;
    `;
  }}
`;
ListItem.displayName = 'ListItem';

export const EmptyWrapper = styled.span`
  cursor: default;
  text-align: center;
`;
EmptyWrapper.displayName = 'EmptyWrapper';

export const Link = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferer'
}))`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;
Link.displayName = 'Link';

export const Description = styled(SkillTag)<ListWrapperProps>`
  cursor: inherit;
  display: block;
  font-size: ${({ $icons }) => ($icons ? '0.5rem' : '1rem')};
  line-height: 1.7rem;
`;
Description.displayName = 'Description';
