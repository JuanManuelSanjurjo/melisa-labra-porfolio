import React from 'react'
import SubNav from '@/components/SubNav'
import { adultBooks } from '@/lib/nav-links'


export const metadata = {
  title: '+18 - Melisa Labra',
  description: '+18 - Melisa Labra',
}

function Adult({ children }) {
  return (
    <>
      <SubNav navLinks={adultBooks} />
      {children}
    </>
  )
}
export default Adult