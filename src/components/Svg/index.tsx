import React, { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.div`
  &,
  & > * {
    height: auto !important;
    max-width: 100%;
  }
`;
SvgWrapper.displayName = 'SvgWrapper';

interface Props {
  className?: string;
  src: string;
  style?: CSSProperties;
}

const Svg = ({ className, src, style }: Props): JSX.Element => {
  const [value, setValue] = useState('');

  const download = async (source: string) => {
    const res = await fetch(source, { method: 'get' });
    const html = await res.text();
    setValue(html);
  };

  useEffect(() => {
    download(src);
  }, [src]);

  return (
    <SvgWrapper
      className={className}
      dangerouslySetInnerHTML={{ __html: value }}
      style={style}
    />
  );
};

export default Svg;
