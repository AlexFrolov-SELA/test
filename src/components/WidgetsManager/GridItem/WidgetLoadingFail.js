import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.h3``;

const WidgetLoadingFail = ({ widgetName }) => {
  return (
    <Wrapper>
      <Content>Failed to load widget {widgetName && `: ${widgetName}`}</Content>
    </Wrapper>
  );
};

export default WidgetLoadingFail;
