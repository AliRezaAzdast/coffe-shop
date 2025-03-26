import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'


export default function Header({ cart }) {
  return (
    <>
    <DesktopHeader cart={cart}/>
    <MobileHeader cart={cart}/>
    </>
  )
}
