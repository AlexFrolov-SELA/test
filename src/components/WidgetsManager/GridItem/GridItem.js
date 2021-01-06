import React, { Suspense, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { Wrapper } from './styles';
import ErrorBoundary from './ErrorBoundary';
import GridItemHeader from './GridItemHeader';
import GridItemContent from './GridItemContent';
import LoadingWidget from './LoadingWidget';

const GridItem = (props) => {
  const { title, actions, componentName } = props;

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

  const Component = useMemo(() => {
    return React.lazy(() => import(`./../../../${componentName}`));
  }, [componentName]);

  return (
    <Wrapper className='grid-item'>
      <GridItemHeader title={title} actions={_actions} />
      <GridItemContent>
        <ErrorBoundary>
          <Suspense fallback={<LoadingWidget />}>
            <Component />
          </Suspense>
        </ErrorBoundary>
      </GridItemContent>
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
