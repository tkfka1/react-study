import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

// 이 코드는 리액트 패키지에서 useState 라는 함수를 불러와줍니다.
// 주의 사항 onClick={onIncrease()} 이렇게 하면 안됨 처음 랜더때 함수가 실행이 됨

export default Counter;