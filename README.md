# react-recoil

## Todo List

- Framework: React
- State Management: Recoil

## Recoil

> 주의: recoil 빌드는 ES5로 트랜스파일 되지 않기 때문에 ES6와 사용하는 것을 권장한다. 만약 Babel로 코드를 컴파일하더라도 문제가 발생할 수 있다. 특히 Recoil은 React처럼 Map과 Set에 의존한다.

### RecoilRoot

recoil 상태를 사용하기 위해 루트 컴포넌트에 RecoilRoot를 씌워준다.

### Atom

Atom은 상태의 일부를 나타낸다. Atom은 어떤 컴포넌트에서나 읽고 쓸 수 있는데, atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 subscribe한다. 따라서 atom에 변화가 발생하면 해당 atom을 subscribe하고 있는 모든 컴포넌트들이 재렌더링된다.

컴포넌트가 atom을 읽고 쓸 수 있도록 하기 위해서는 `useRecoilState()`를 사용하면 된다.

### Selector

Selector는 변경된 상태값을 반환해준다. 컴포넌트에서 사용하기 위해서는 `useRecoilValue()`를 사용하면 된다.
