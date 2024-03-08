import './App.css'
import React from 'react';
import { AuthProvider } from './AuthContext';
import { SignInPage } from './SignInPage';


const App = () => {
  return (
    <main>
    <AuthProvider>
      <SignInPage />
    </AuthProvider>
    </main>
  );
};

export default App;


  