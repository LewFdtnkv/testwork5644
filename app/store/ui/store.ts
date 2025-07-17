import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState } from '../types/StoreTypes';

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      username: null,
      isAuthenticated: false,
      login: (token, username) => {
        localStorage.setItem('authToken', token);
        set({ token, username, isAuthenticated: true });
      },
      logout: () => {
        localStorage.removeItem('authToken');
        set({ token: null, username: null, isAuthenticated: false });
      },
      validateToken: () => {
        if (
          typeof window === 'undefined' ||
          typeof localStorage === 'undefined'
        ) {
          return false;
        }
        const token = localStorage.getItem('authToken');

        if (!token) return false;

        try {
          const decoded = jwtDecode(token) as { exp: number };
          const currentTime = Date.now() / 1000;
          const isValid = decoded.exp > currentTime;

          if (!isValid) {
            get().logout();
          }

          return isValid;
        } catch (e) {
          get().logout();
          console.error(e)
          return false;
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
