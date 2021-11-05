import React from 'react';
import DocumentationContextProvaider from './context/DocumentationContext';
import Routes from './Routes';
import './App.css'

const App = () => {
  return (
    <DocumentationContextProvaider>
      <Routes />
    </DocumentationContextProvaider>
      
    
  );
};

export default App;
