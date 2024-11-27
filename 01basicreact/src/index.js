import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const reactElement1 = (
  <a href = 'https://google.com' target = '_blank'>Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {href : 'https://google.com',target : '_blank'},
    'Click to Visit Google'
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // reactElement1
  reactElement
);
