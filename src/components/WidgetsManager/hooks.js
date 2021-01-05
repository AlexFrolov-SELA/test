import { useEffect, useRef, useState } from 'react';

export const useLayout = (name, layout, enableAutoSave) => {
  const layoutName = `ws-widgets-manager-layout__${name}`;
  const [layoutState, setLayoutState] = useState(layout);
  const prevLayoutState = usePrev(layoutState);
  const prevPropsLayout = usePrev(layout);

  useEffect(() => {
    const savedLayout = enableAutoSave ? getFromLs() : null;

    //savedLayout && console.log("Saved layout: ", savedLayout);

    savedLayout && updateLayout(savedLayout || layout);
    return () => {};
  }, []);

  useEffect(() => {
    saveToLs(layout);
    prevPropsLayout !== null && layout && updateLayout(layout);
  }, [layout]);

  useEffect(() => {
    prevLayoutState !== null && layoutState && saveToLs(layoutState);
  }, [layoutState]);

  const saveToLs = (data) => {
    enableAutoSave && localStorage.setItem(layoutName, JSON.stringify(data));
  };

  const getFromLs = () => {
    return JSON.parse(localStorage.getItem(layoutName) || null);
  };

  const updateLayout = (layout) => {
    //console.log("updating layout: ", layout);
    //localStorage.setItem(layoutName, JSON.stringify(layout));
    setLayoutState(layout.map((l) => ({ ...l })));
    //setLayoutState(layout);
  };

  return {
    layoutState,
    prevLayoutState,
    prevPropsLayout,
    setLayoutState: updateLayout,
  };
};

export const usePrev = (value) => {
  const prevValue = useRef(null);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return prevValue.current;
};
