import React from 'react';
import { Toaster } from 'react-hot-toast';
import { CssBaseline } from '@material-ui/core';
import Content from './components/Content';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Toaster position={'top-center'} />
      <Content />
    </>
  );
};

export default App;
