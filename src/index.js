import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Welcome from './Welcome';


ReactDOM.render(
  <Welcome name="harrisking"/>,
  document.getElementById('root')
)








// // 时间的代码：
// function tick(){
//   const element = (
//     <div>
//       <h1>this is a clock modules!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick,1000);
