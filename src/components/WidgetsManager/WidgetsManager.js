import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
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
  const { manager, widgets } = config;
  const { name, flags } = manager;
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
    //console.log(prevLayoutState);
    //if (!prevLayoutState || fullScreen !== null) return;

    const areLayoutsEqual = areObjectArraysEqual(layoutState, newLayout);

    //console.log('onLayoutChange fired: ', newLayout);

    if (!areLayoutsEqual) {
      //console.log('Layout changed');
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

  //console.log("Renders: ", renders.current);
  //console.log("children: ", filteredChildren.length);

  const gridItems = layoutState.map((widgetLayout) => {
    const key = widgetLayout.i;
    const widget = widgets.find((w) => w.layout.i === key);
    const { layout, ...widgetProps } = widget;

    return (
      <div key={key} data-grid={widgetLayout} className='grid-item-container'>
        <GridItem
          key={key}
          setFullscreen={() => toggleFullscreen(key)}
          removeItem={() => removeItem(key)}
          {...widgetProps}
        ></GridItem>
      </div>
    );
  });

  //console.log('GridItems: ', gridItems);

  return (
    <Wrapper>
      <ResponsiveReactGridLayout
        className='widgets-manager'
        draggableHandle='.grid-item-drag-handle'
        /* autoSize={false}
        resizeHandles={['w', 'e', 's', 'se', 'sw']} */
        autoSize={config.manager.flags.autoSize || false}
        /* layout={augmentedLayout} */
        compactType={config.manager.flags.compactType || 'vertical'}
        onLayoutChange={onLayoutChange}
      >
        {gridItems}
      </ResponsiveReactGridLayout>
      {/* <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3}}>

      </div> */}
      {!layoutState.length && <NoWidgets />}
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
