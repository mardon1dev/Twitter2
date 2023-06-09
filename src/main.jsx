import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from '../src/assets/twitter/getusers/GeetUsers';
import { TweetProvider } from '../src/assets/twitter/AddTweet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <TweetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TweetProvider>
    </UserProvider>
  </React.StrictMode>,
)
