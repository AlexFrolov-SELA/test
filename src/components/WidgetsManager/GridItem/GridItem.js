import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Wrapper, Header, Content, Actions, Title, DragHandle } from "./styles";

const GridItem = (props) => {
  const { title, actions } = props;
  const completeActions = [
    ...actions,
    {
      icon: BsArrowsFullscreen,
      cb: props.setFullscreen,
    },
  ];

  return (
    <Wrapper className="grid-item">
      <Header>
        <Title>{title}</Title>
        <DragHandle className="grid-item-drag-handle" />
        <Actions>
          {completeActions.map((action, idx) => {
            const Icon = action.icon;
            return <Icon key={idx} onClick={action.cb} />;
          })}
        </Actions>
      </Header>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

GridItem.defaultProps = {
  actions: [],
};

export default GridItem;
