import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Videos from './components/Videos';
import FavouriteLists from './components/FavouriteLists';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import VideosForm from './components/VideosForm';
import FavouriteListForm from './components/FavouriteListForm'


ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<FavouriteLists />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/favouriteLists" element={<FavouriteLists />} />
      <Route path="/videos/:videoId" element={<VideosForm />} />
      <Route path="/favouriteLists/:favouriteListId" element={<FavouriteListForm/>} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
