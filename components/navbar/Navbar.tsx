
'use client'; 

import { Suspense } from "react"
import Container from "../home/Container"
import CartButton from "./CartButton"
import DarkMode from "./DarkMode"
import LinksDropdown from "./LinksDropdown"
import Logo from "./Logo"
import NavSearch from "./NavSearch"

interface NavbarProps {
  userIconSlot: React.ReactNode,
  isAdmin:boolean 
}

const Navbar = ({ userIconSlot,isAdmin }: NavbarProps) => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <Suspense>
            <LinksDropdown userIconSlot={userIconSlot} isAdmin = {isAdmin}/>
          </Suspense>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar;
