import React from 'react';
import { hot } from 'react-hot-loader';
import { getSources } from './api/news';
import NewsWidget from './components/NewsWidget';

const App = () => {
  // getNews();
  getSources().then(result => console.log(result));
  return (
    <div>
      <h1> Hello, World! </h1>
      <NewsWidget />
    </div>
  );
};

export default hot(module)(App);
