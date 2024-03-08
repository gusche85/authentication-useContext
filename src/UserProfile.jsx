import React from 'react';
import { useAuth } from './AuthContext';

export const UserProfile = () => {
const { user, signOut } = useAuth();

  return (
        <>
          <h2>User Profile</h2>
          <container>
          <p>
            Username: {user.username}
          </p>
          <p>
            Email: {user.email}
          </p>
          </container>
          <button onClick={signOut}>Sign Out</button>
        </>
);
}

