import React from 'react';
import CustomButton from '../../Components/Elements/Button';
import Header from '../../Components/Header';
import '../../styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CustomButton color="secondary"/>
    </div>
  );
}

export default App;
