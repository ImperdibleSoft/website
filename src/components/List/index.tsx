import React from 'react';
import { ListItemLabel, Principle, Skill } from '../../types';
import { getItemColor, renderIcon } from '../../utils';
import {
  Description,
  EmptyWrapper,
  Link,
  ListItem as ListItemStyled,
  ListWrapper
} from './styles';

export interface ListItem {
  href?: string;
  label: string;
  onClick?: () => void;
  target?: string;
}

interface Props {
  iconList?: boolean;
  items: ListItem[];
  text?: boolean;
}

const List = ({ iconList = false, items, text }: Props): JSX.Element => (
  <ListWrapper $icons={iconList}>
    {items.map(({ href, label, onClick, target }, index) => {
      const Wrapper = href ? Link : EmptyWrapper;

      return (
        <ListItemStyled
          key={index}
          $icons={iconList}
          style={{ color: getItemColor(label as ListItemLabel) }}
        >
          <Wrapper href={href} onClick={onClick} target={target}>
            {iconList && renderIcon(label as ListItemLabel, true)}
            {text && (
              <Description $icons={false} skill={label as Skill | Principle} />
            )}
          </Wrapper>
        </ListItemStyled>
      );
    })}
  </ListWrapper>
);

export default List;
