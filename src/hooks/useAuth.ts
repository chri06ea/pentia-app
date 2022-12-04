import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

export type User = {
  name: string;
};

// Handles authentication
export default function useAuth() {
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    // Make sure user state is updated
    const unsubscribe = auth().onAuthStateChanged(firebaseUser =>
      setUser(
        firebaseUser ? {name: firebaseUser.displayName ?? 'Guest'} : null,
      ),
    );
    return () => unsubscribe();
  }, []);
  return {
    user,
    // Authenticate with facebook oauth. Will launch a pop up
    authWithFacebook: () => {
      return new Promise((resolve, reject) => {
        reject('Not implemented');
      });
    },
    // Authenticate with google oauth. Will launch a pop up
    authWithGoogle: () => {
      return new Promise((resolve, reject) => {
        reject('Not implemented');
      });
    },
    // Sign in as anonymously/a guest
    authAnonymously: () => auth().signInAnonymously(),
    // Log out
    logout: () => auth().signOut(),
  };
}
