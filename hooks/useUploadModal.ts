import {create} from "zustand";

interface UploadModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

//(set) => ({ ... })
// is a func you pass to create 
// that returns the initial state + methods
const useUploadModal = create<UploadModalStore>((set) => ({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false}),
}));

export default useUploadModal;