import { create } from "zustand"

interface StoreTS {
    compteur : number , 
    augmenter : () => void ,
    reset : () => void
}

export const useAugmenter = create<StoreTS>((set) => ({
    compteur  : 1 , 
    augmenter : () => set((state ) => ({ compteur : state.compteur + 1 })), 
    reset : () => set(() => ({ compteur : 0}))
}))