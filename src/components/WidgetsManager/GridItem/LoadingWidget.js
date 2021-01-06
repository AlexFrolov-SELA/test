import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.h3``;

const LoadingWidget = () => {
  return (
    <Wrapper>
      <Content>Loading widget</Content>
    </Wrapper>
  );
};

export default LoadingWidget;
