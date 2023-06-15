import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}

// 삼항연산자를 통한 isSpecial 값이 true 라면 <b>*</b> 를, 그렇지 않다면 null 을 렌더링합니다.

// function Hello({ color, name, isSpecial }) {
//     return (
//       <div style={{ color }}>
//         {isSpecial && <b>*</b>}
//         안녕하세요 {name}
//       </div>
//     );
//   }

//isSpecial && <b>*</b> 의 결과는 isSpecial 이 false 일땐 false 이고, isSpecial이 true 일 땐 <b>*</b> 가 됩니다


//  props 의 기본값 설정
Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;