import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { Wrapper } from './styles';
import GridItemHeader from './GridItemHeader';
import GridItemContent from './GridItemContent';

const GridItem = (props) => {
  const { title, actions } = props;

  const _actions = [
    ...actions,
    {
      tooltip: 'Fullscreen',
      icon: BsArrowsFullscreen,
      cb: props.setFullscreen,
    },
    {
      tooltip: 'Remove',
      icon: VscChromeClose,
      cb: props.removeItem,
    },
  ];

  return (
    <Wrapper className='grid-item'>
      <GridItemHeader title={title} actions={_actions} />
      <GridItemContent>{props.children}</GridItemContent>
    </Wrapper>
  );
};

GridItem.defaultProps = {
  title: '',
  actions: [],
};

GridItem.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
};

export default GridItem;
