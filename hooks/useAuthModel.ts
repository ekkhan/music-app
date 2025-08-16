import {create} from "zustand";

interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

//(set) => ({ ... })
// is a func you pass to create 
// that returns the initial state + methods
const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false}),
}));

export default useAuthModal;