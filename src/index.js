import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import statisticalData from './statistical-data.json';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<App />, document.querySelector('#root'));

// function Statistics(props) {
//   const { label, percentage } = props;
//   return (
//     <section class="statistics">
//       <h2 class="title">Upload stats</h2>

//       <ul class="stat-list">
//         <li class="item">
//           <span class="label">{slabel}</span>
//           <span class="percentage">{spercentage}%</span>
//         </li>
//         <li class="item">
//           <span class="label">{slabel}</span>
//           <span class="percentage">{spercentage}%</span>
//         </li>
//         <li class="item">
//           <span class="label">{slabel}</span>
//           <span class="percentage">{spercentage}%</span>
//         </li>
//         <li class="item">
//           <span class="label">{slabel}</span>
//           <span class="percentage">{spercentage}%</span>
//         </li>
//       </ul>
//     </section>
//   );
// }

// ReactDOM.render(
//   <Statistics
//     label={statisticalData.label}
//     percentage={statisticalData.percentage}
//   />,
//   document.querySelector('#root'),
// );

// ====================================================================

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
