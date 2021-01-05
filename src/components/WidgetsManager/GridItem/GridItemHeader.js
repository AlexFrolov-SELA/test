import React from "react";
import PropTypes from "prop-types";
import { Title, Header, DragHandle, Actions } from "./styles";

const GridItemHeader = (props) => {
  const { title, actions, meta } = props;
  return (
    <Header>
      <Title>{title}</Title>
      <DragHandle className="grid-item-drag-handle" />
      <Actions>
        {actions.reverse().map((action, idx) => {
          const Icon = action.icon;
          return (
            <Icon
              title={action.tooltip}
              key={idx}
              onClick={() => action.cb(meta)}
            />
          );
        })}
      </Actions>
    </Header>
  );
};

GridItemHeader.defaultProps = {
  title: "",
  actions: [],
  meta: {},
};

GridItemHeader.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.object,
};

export default GridItemHeader;
