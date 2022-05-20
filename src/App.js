import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(0);

  const onClickIncrement = () => setCount(count + 1);
  const onClickDecrement = () => setCount(count - 1);

  const onClickIncrement2 = () => setCount(previouseCount => previouseCount + 1);
  const onClickDecrement2 = () => setCount(previouseCount => previouseCount - 1);

  const onClickDelete = () => setCount(0);

  const onClickDoubled = () => setCount(count * 2)

  const onClickDivide = () => setCount( count =>
    count % 3 === 0 ? count / 3 : count
  );

  return (
    <>
      <div>count : {count}</div>
      <div>
        <button onClick={onClickIncrement}>+1</button>
        <button onClick={onClickDecrement}>-1</button>
      </div>
      <div>
        <button onClick={onClickIncrement2}>+1</button>
        <button onClick={onClickDecrement2}>-1</button>
      </div>
      <div>
        <button onClick={onClickDelete}>Reset</button>
        <button onClick={onClickDoubled}>X2</button>
        <button onClick={onClickDivide}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App;
