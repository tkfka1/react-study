import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}

// isSpecial 값이 true 라면 <b>*</b> 를, 그렇지 않다면 null 을 렌더링합니다.

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;