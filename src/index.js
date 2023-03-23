import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//이 부분에서 동적으로 리액트 코드를 실제 HTML에 렌더링 합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

