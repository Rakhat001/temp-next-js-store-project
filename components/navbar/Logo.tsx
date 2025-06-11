'use client'
import { IoHome } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button asChild size={'icon'}>
      <Link href={'/'}>
        <IoHome className="w-6 h-6" />
      </Link>
    </Button>
  )
}

export default Logo
