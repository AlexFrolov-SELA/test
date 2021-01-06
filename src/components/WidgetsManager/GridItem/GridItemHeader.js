import React from 'react';
import PropTypes from 'prop-types';
import { Title, Header, DragHandle, Actions } from './styles';

const GridItemHeader = (props) => {
  const { title, actions, meta } = props;
  return (
    <Header>
      <DragHandle className='grid-item-drag-handle'>
        <Title>{title}</Title>
      </DragHandle>
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
  title: '',
  actions: [],
  meta: {},
};

GridItemHeader.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.object,
};

export default GridItemHeader;
