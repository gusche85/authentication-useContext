import './App.css'
import React from 'react';
import { AuthProvider } from './AuthContext';
import { SignInPage } from './SignInPage';


const App = () => {
  return (
    <AuthProvider>
      <SignInPage />
    </AuthProvider>
  );
};

export default App;


  