import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import App from  './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

//if function is Component -> with UpLetter
function App1(){
  //return JSX -> return ()
  return (
    <article>
    <h1>Hi</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repudiandae.</p>
  </article>
  )
  
}
const code = (
  <article>
    <h1>Hi</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repudiandae.</p>
  </article>
)

//call Component -> {component_name}
//call function -> <Function_name />
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
