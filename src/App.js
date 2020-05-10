import React from 'react';
import './App.css';
import '../src/assets/css/style.css';

import Header from './components/Header';
import Search from './components/Search';
import RankTable from './components/RankTable';

function App() {
  return (
    <div className="container">
      <Header />    
      <Search />
      <RankTable />
    </div>
  );
}

export default App;
