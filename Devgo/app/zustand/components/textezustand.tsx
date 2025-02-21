"use client"

import { useAugmenter } from '@/app/(store)/StoreAugmenter'
import React from 'react'

export default function Textezustand() {

    const { compteur } = useAugmenter()
  return (
    <>
    <span>{compteur}</span>
    </>
  )
}
