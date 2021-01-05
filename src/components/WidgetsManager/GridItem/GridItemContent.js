import React from 'react';
import { Content } from './styles';

const GridItemContent = (props) => {
  const { children } = props;
  return <Content>{children}</Content>;
};

export default GridItemContent;
