import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './components/BooksList.js';
import 'whatwg-fetch';


fetch('./books.json').then(function(response){
  return response.json()
}).then(function(json) {

  ReactDOM.render(
      <BooksList list={json} />,
      document.getElementById('comps')
  );

}).catch(function(ex) {
  console.log('parsing failed', ex)
});
