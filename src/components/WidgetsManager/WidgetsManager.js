import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Wrapper } from './styles';
import GridItem from './GridItem/GridItem';
import NoWidgets from './NoWidgets/NoWidgets';
import { useLayout } from './hooks';
import { areObjectArraysEqual, getLayoutFromConfig } from './helpers';

const ResponsiveReactGridLayout = WidthProvider(GridLayout);

const WidgetsManager = ({ children, ...props }) => {
  const { config, removeItem } = props;
  const { name, flags } = config.manager;
  const layout = useMemo(() => {
    return getLayoutFromConfig(config);
  }, [config]);
  const { layoutState, prevLayoutState, setLayoutState } = useLayout(
    name,
    layout,
    flags.enableAutoSave || true
  );
  const [fullScreen, setFullscreen] = useState(null);
  const renders = useRef(1);

  useEffect(() => {
    //console.log(layout, layoutState, prevLayoutProps);
    setFullscreen(null);
  }, [layout]);

  useEffect(() => {
    //console.log("Fullscreen changed to: ", fullScreen);
  }, [fullScreen]);

  useEffect(() => {
    renders.current++;
  });

  const onLayoutChange = (newLayout) => {
    if (!prevLayoutState || fullScreen !== null) return;

    const areLayoutsEqual = areObjectArraysEqual(layoutState, newLayout);

    //console.log("onLayoutChange fired");

    if (!areLayoutsEqual) {
      console.log('Layout changed');
      /* console.log(
        "onLayoutChange: ",
        newLayout,
        mergedLayoutState,
        diff,
        prevLayoutProps
      ); */

      setLayoutState(newLayout);
    }
  };

  const toggleFullscreen = (key) => {
    const value = fullScreen === null ? key.toString() : null;
    //console.log(fullScreen, value);
    setFullscreen(value);
  };

  const getGridItem = (child, key) => {
    //console.log(child, key);
    return (
      <div key={key} className='grid-item-container'>
        <GridItem
          key={key}
          title={child.props.title}
          actions={child.props.actions}
          setFullscreen={() => toggleFullscreen(key)}
          removeItem={() => removeItem(key)}
        >
          {child}
        </GridItem>
      </div>
    );
  };

  const augmentedLayout = useMemo(() => {
    //console.log("calculating layout: ", layout, layoutState);
    const filtered = layoutState.filter((item) =>
      fullScreen !== null ? item.i === fullScreen : true
    );

    if (fullScreen) {
      //console.log("Maximized: ", filtered);
      return [{ ...filtered[0], x: 0, y: 0, w: 12, h: 6 }];
    }

    return filtered;
  }, [fullScreen, layoutState]);

  const filteredChildren = useMemo(() => {
    //console.log("calculating children: ", children, augmentedLayout);
    if (fullScreen !== null) {
      const key = augmentedLayout[0].i;
      const child = children.find((child) => child.key === key);
      return [getGridItem(child, key)];
    }
    return children.map((child, idx) => {
      const key = augmentedLayout[idx].i;
      return getGridItem(child, key);
    });
  }, [fullScreen, layoutState]);

  //console.log("Renders: ", renders.current);
  //console.log("children: ", filteredChildren.length);

  return (
    <Wrapper>
      <ResponsiveReactGridLayout
        className='widgets-manager'
        draggableHandle='.grid-item-drag-handle'
        /* autoSize={false}
        resizeHandles={['w', 'e', 's', 'se', 'sw']} */
        autoSize={config.manager.flags.autoSize || false}
        layout={augmentedLayout}
        compactType={config.manager.flags.compactType || 'vertical'}
        onLayoutChange={onLayoutChange}
      >
        {filteredChildren}
      </ResponsiveReactGridLayout>
      {/* <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3}}>

      </div> */}
      {!filteredChildren.length && <NoWidgets />}
    </Wrapper>
  );
};

WidgetsManager.WidgetContainer = GridItem;

WidgetsManager.defaultProps = {
  children: [],
};

WidgetsManager.propTypes = {
  config: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  layout: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func,
};

export default WidgetsManager;
