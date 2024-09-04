import {create} from 'zustand';

export const useLoginStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (value) => set({ isLoggedIn: value }),
}));
