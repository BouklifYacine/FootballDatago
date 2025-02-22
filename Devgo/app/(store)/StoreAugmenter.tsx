import { create } from "zustand"
import { persist } from 'zustand/middleware'

interface StoreTS {
    compteur : number , 
    augmenter : () => void ,
    reset : () => void
}

interface storepersist {
    chiffre : number , 
    plusfort : () => void ,
    zero : () => void
}

export const useAugmenter = create<StoreTS>()(
    persist(
        (set) => ({
            compteur: 0,
            augmenter: () => set((state) => ({ compteur: state.compteur + 1 })),
            reset: () => set({ compteur: 0 }),
        }),
        {
            name: "compteur-storage" 
        }
    )
);


export const fdp = create<storepersist>()(
    persist(
      (set) => ({
        chiffre : 0, 
        plusfort : () => set((state) => ({chiffre : state.chiffre + 1})), 
        zero : () => set({chiffre : 0})
      }), 
      { name : "fdpstorage"}
    ), 
  
)