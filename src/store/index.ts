import { create } from 'zustand';
const useStore = create((set) => ({
  initialState: 'light',
  isLogin: false,
  setIsLogin: (props: any) => set({ isLogin: props }),
  setInitialState: (pros: any) => set({ initialState: pros })
}));

export default useStore;