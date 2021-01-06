import { useEffect, useRef, useState } from 'react';
import { areObjectArraysEqual } from './helpers';

const saveToLs = (name, data) => {
  //console.log('Saving layout to LS: ', data);
  localStorage.setItem(name, JSON.stringify(data));
};

const getFromLs = (name) => {
  return JSON.parse(localStorage.getItem(name) || null);
};

export const useLayout = (name, layout, enableAutoSave) => {
  const layoutName = `ws-widgets-manager-layout__${name}`;
  const savedLayout = getFromLs(layoutName) || [];
  const [layoutState, setLayoutState] = useState(
    enableAutoSave && savedLayout.length ? savedLayout : layout
  );
  const prevLayoutState = usePrev(layoutState);
  const prevPropsLayout = usePrev(layout);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    const areEqual = areObjectArraysEqual(prevPropsLayout, layout);
    if (areEqual) return;
    //console.log('Savig changed layout');
    
    updateLayout(layout);
  }, [layout]);

  useEffect(() => {
    /* console.log(
      'layoutState changed: ',
      prevLayoutState,
      layoutState,
      enableAutoSave
    ); */

    enableAutoSave && saveToLs(layoutName, layoutState);
  }, [layoutState]);

  const updateLayout = (layout) => {
    //console.log("updating layout: ", layout);
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
  const prevValue = useRef(value);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return prevValue.current;
};
