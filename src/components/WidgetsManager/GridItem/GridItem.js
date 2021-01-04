import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { BsArrowsFullscreen } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { Wrapper, Header, Content, Actions, Title, DragHandle } from "./styles";

const GridItem = (props) => {
  const { title, actions } = props;
  const completeActions = [
    ...actions,
    {
      tooltip: "Fullscreen",
      icon: BsArrowsFullscreen,
      cb: props.setFullscreen,
    },
    {
      tooltip: "Remove",
      icon: VscChromeClose,
      cb: props.removeItem,
    },
  ];

  return (
    <Wrapper className="grid-item">
      <Header>
        <Title>{title}</Title>
        <DragHandle className="grid-item-drag-handle" />
        <Actions>
          {completeActions.reverse().map((action, idx) => {
            const Icon = action.icon;
            return (
              <Icon
                title={action.tooltip}
                key={idx}
                onClick={() => action.cb(props)}
              />
            );
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
