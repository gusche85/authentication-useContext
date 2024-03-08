import React from 'react';
import { useAuth } from './AuthContext';

export const UserProfile = () => {
const { user, signOut } = useAuth();

  return (
    <>
      {user ? (
        <>
          <h2>User Profile</h2>
          <p>
            Username: {user.username}
          </p>
          <p>
            Email: {user.email}
          </p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
      <>
        <h2>Sign In</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSignIn}>Sign In</button>
        <p>Please sign in to view your profile.</p>
      </>
      )}
    </>
  );
  };

  //export default UserProfile;
