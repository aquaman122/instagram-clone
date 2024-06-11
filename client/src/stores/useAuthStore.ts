import create from 'zustand';

interface UserData {
  email: string;
  name: string;
}

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (userData: UserData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;