import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { differenceWith, find, isBuffer, isEqual } from "lodash";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Wrapper } from "./styles";
import GridItem from "./GridItem/GridItem";
import NoWidgets from "./NoWidgets/NoWidgets";

const ResponsiveReactGridLayout = WidthProvider(GridLayout);

const useLayout = (name, layout) => {
  const layoutName = `ws-widgets-manager-layout__${name}`;
  const [layoutState, setLayoutState] = useState(layout);

  useEffect(() => {
    const savedLayout = JSON.parse(localStorage.getItem(layoutName));

    savedLayout && console.log("Saved layout: ", savedLayout);

    savedLayout && updateLayout(savedLayout);
    return () => {};
  }, []);

  const updateLayout = (layout) => {
    console.log("updating layout: ", layout);
    localStorage.setItem(layoutName, JSON.stringify(layout));
    setLayoutState(layout.map((l) => ({ ...l })));
    //setLayoutState(layout);
  };

  return [layoutState, updateLayout];
};

const usePrev = (value) => {
  const prevValue = useRef(null);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return prevValue.current;
};

const WidgetsManager = ({ children, ...props }) => {
  const { name, layout } = props;
  const [layoutState, setLayoutState] = useLayout(name, layout);
  const [fullScreen, setFullscreen] = useState(null);
  const prevStateLayout = usePrev(layoutState);
  const prevLayout = usePrev(layout);
  const renders = useRef(1);

  const onLayoutChange = (layout) => {
    if (!prevStateLayout || fullScreen !== null) return;
    console.log("onLayoutChange fired");
    const mergedLayoutState = layoutState.map((obj, idx) => {
      return {
        ...layout[idx],
        ...obj,
      };
    });

    const diff = differenceWith(layout, mergedLayoutState, isEqual);
    if (diff.length !== 0) {
      console.log(
        "onLayoutChange: ",
        layout,
        mergedLayoutState,
        diff,
        prevLayout
      );

      setLayoutState(layout);
    }
  };

  const toggleFullscreen = (key) => {
    const value = fullScreen === null ? key.toString() : null;
    console.log(fullScreen, value);
    setFullscreen(value);
  };

  const removeItem = (key) => {
    props.removeItem(key);
  };

  useEffect(() => {
    console.log(layout, layoutState, prevLayout);
    prevLayout !== null && layout && setLayoutState(layout);
    setFullscreen(null);
  }, [layout]);

  useEffect(() => {
    console.log("Fullscreen changed to: ", fullScreen);
  }, [fullScreen]);

  useEffect(() => {
    renders.current++;
  });

  const getGridItem = (child, key) => {
    console.log(child, key);
    return (
      <div key={key} className="grid-item-container">
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
    console.log("calculating layout: ", layout, layoutState);
    const filtered = layout.filter((item) =>
      fullScreen !== null ? item.i === fullScreen : true
    );

    if (fullScreen) {
      console.log("Maximized: ", filtered);
      return [{ ...filtered[0], x: 0, y: 0, w: 12, h: 6 }];
    }

    return filtered;
  }, [fullScreen, layout]);

  const filteredChildren = useMemo(() => {
    console.log("calculating children: ", children, augmentedLayout);
    if (fullScreen !== null) {
      const key = augmentedLayout[0].i;
      const child = children.find((child) => child.key === key);
      return [getGridItem(child, key)];
    }
    return children.map((child, idx) => {
      const key = augmentedLayout[idx].i;
      return getGridItem(child, key);
    });
  }, [fullScreen, layout]);

  console.log("Renders: ", renders.current);
  console.log('children: ', filteredChildren.length);

  return (
    <Wrapper>
      <ResponsiveReactGridLayout
        className="widgets-manager"
        draggableHandle=".grid-item-drag-handle"
        autoSize={false}
        resizeHandles={["se", "sw"]}
        layout={augmentedLayout}
        compactType={props.compactType || "vertical"}
        onLayoutChange={onLayoutChange}
      >
        {filteredChildren}
      </ResponsiveReactGridLayout>
      {!filteredChildren.length && <NoWidgets />}
    </Wrapper>
  );
};

WidgetsManager.defaultProps = {};

WidgetsManager.propTypes = {
  name: PropTypes.string.isRequired,
  layout: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WidgetsManager;
