import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  login: (userData: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;