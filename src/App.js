import './App.css';
import WidgetsManager from './components/WidgetsManager/WidgetsManager';
import { map, range } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import GridItem from './components/WidgetsManager/GridItem/GridItem';
import config from './config';

const MockComponent = (props) => {
  const renders = useRef(1);

  useEffect(() => {
    renders.current++;
  });
  return (
    <div>
      <div>{props.name || props.children}</div>
      <div>Renders: {renders.current}</div>
    </div>
  );
};

const getLayout = () => {
  return map(range(0, 4), function (item, i) {
    const x = i % 2 ? 6 : 0;
    const w = 6;
    const y = i % 2 ? 1 : 0;
    const h = 3;
    return {
      x,
      y,
      w,
      h,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
};

/**
 * CONFIG STRUCTURE:
 *
 *  {
 *
 *  }
 */

function App() {
  const [layout, setLayout] = useState(getLayout());
  const [selected, setSelected] = useState(0);
  const [increment, setIncrement] = useState(true);

  const getWidget = useCallback(
    (layout) => (
      <MockComponent
        key={layout.i}
        title={`Component ${layout.i}`}
        actions={[]}
      >
        <span>Widget {layout.i}</span>
      </MockComponent>
    ),
    [layout]
  );

  const changeLayoutX = () => {
    const rndLayout = layout[selected];

    increment
      ? rndLayout.x < 12
        ? rndLayout.x++
        : (rndLayout.x = rndLayout.x)
      : rndLayout.x > 0
      ? rndLayout.x--
      : (rndLayout.x = rndLayout.x);
    setLayout([...layout]);
  };
  const changeLayoutWidth = () => {
    const rndLayout = layout[selected];

    increment
      ? rndLayout.w < 12
        ? rndLayout.w++
        : (rndLayout.w = rndLayout.w)
      : rndLayout.w > 0
      ? rndLayout.w--
      : (rndLayout.w = rndLayout.w);
    setLayout([...layout]);
  };

  const resetLayout = () => {
    setLayout(getLayout());
  };

  const removeItem = (key) => {
    console.log(`removing: ${key} from `, layout);
    const newLayout = layout.filter((l) => l.i !== key.toString());
    console.log('new layout: ', newLayout);
    setLayout(newLayout);
  };

  return (
    <div className='App'>
      <label>{increment ? 'Increment' : 'Decrement'}</label>
      <input
        type='checkbox'
        checked={increment}
        onChange={() => setIncrement(!increment)}
      />
      <select value={selected} onChange={(v) => setSelected(v.target.value)}>
        {range(0, 4).map((num, idx) => {
          return (
            <option key={idx} value={idx}>
              {num}
            </option>
          );
        })}
      </select>
      <button onClick={changeLayoutX}>Change X</button>
      <button onClick={changeLayoutWidth}>Change W</button>
      <button onClick={resetLayout}>Reset Layout</button>
      <WidgetsManager
        name='WidgetsManager-1'
        layout={layout}
        removeItem={removeItem}
        config={config}
      >
        {/* {layout.map((l) => getWidget(l))} */}
        {/* <GridItem>
          <Component />
        </GridItem> */}
      </WidgetsManager>
    </div>
  );
}

export default App;
