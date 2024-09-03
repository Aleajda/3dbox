import React, { useRef, useState } from 'react';
import Cube from './cube'; // Убедитесь, что имя файла Cube соответствует регистру
import './App.css';

interface CubeDimensions {
  width: number;
  height: number;
  length: number;
}

const App: React.FC = () => {
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);
  const lengthRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<CubeDimensions>({ width: 25, height: 25, length: 25 });

  const submit = () => {
    if (widthRef.current && heightRef.current && lengthRef.current) {
      setState({
        width: Number(widthRef.current.value),
        height: Number(heightRef.current.value),
        length: Number(lengthRef.current.value),
      });
      console.log(state);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Куб с помощью Three.js и React</h1>
        <div className='cubWrapper'>
          <div className='form'>
            <div>
              <label>Ширина </label>
              <input ref={widthRef} placeholder='width' />
            </div>
            <div>
              <label>Высота </label>
              <input ref={heightRef} placeholder='height' />
            </div>
            <div>
              <label>Длина </label>
              <input ref={lengthRef} placeholder='length' />
            </div>
            <button onClick={submit}>Создать</button>
          </div>
          <Cube width={state.width} height={state.height} length={state.length} />
        </div>
      </div>
    </div>
  );
};

export default App;
