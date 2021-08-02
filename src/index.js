import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Frame } from 'chrome-sidebar'
import { url } from './setting'
import reportWebVitals from './reportWebVitals';

if (Frame.isReady()) {
  Frame.toggle()
} else {
  boot()
}

function boot() {
  const root = document.createElement('div')
  document.body.appendChild(root)

  const App = (
    <Frame url={url} />
  )

  ReactDOM.render(App, root)
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
