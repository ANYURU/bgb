import { useContext, useState, useEffect, createContext } from 'react';
import { supabase } from '../helpers/supabase/supabase';

// create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // create signUp, signIn, signOut functions, toggleDarkMode
  const value = {
    signUp: data => supabase.auth.signUp(data),
    signIn: data => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user, setUser
  };

  // use a provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  );
};

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};