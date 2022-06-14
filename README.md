Reverting to React 17

npx create-react-app app
Replace

Step 1 - Update package.json

"react": "^18.1.0",
"react-dom": "^18.1.0",
copy
with

"react": "^17.0.2",
"react-dom": "^17.0.2",

Step 2 - Update index.js

Inside the folder labeled src you will find your index.js file. Replace

import ReactDOM from 'react-dom/client'copy
with

import ReactDOM from 'react-dom';copy
Additionally replace this below statement

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
    <React.StrictMode> 
    	<App /> 
    </React.StrictMode> 
);copy
with

ReactDOM.render( 
    <React.StrictMode> 
    	<App /> 
    </React.StrictMode>, 
    document.getElementById('root') 
);

Step 3 - Reinstall node_modules

Reinstall your node_modules by navigating into app and running npm install. It should pick up the modified package.json from Step 1 and install React 17.

npm install react-router-dom@5

Inside of App.js
import React from "react";
import {
  BrowserRouter,
  Link 
} from "react-router-dom";