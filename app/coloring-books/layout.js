import React from 'react'
import SubNav from '@/components/SubNav'
import { coloringNavLinks } from "@/lib/nav-links"

export const metadata = {
  title: 'Coloring Books - Melisa Labra',
  description: 'Coloring Books - Melisa Labra',
}

function ColoringBooks({ children }) {
  return (
    <>
      <SubNav navLinks={coloringNavLinks}/>
      {children}
    </>
  )
}
export default ColoringBooks