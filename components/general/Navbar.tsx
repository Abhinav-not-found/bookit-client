import Link from "next/link"
import ThemeToggle from "../ui/theme-toggle"
import Image from "next/image"
import Logo from "@/public/image/logo.png"
import Search from "@/components/general/Search"

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center h-18 px-2 md:px-28 border-b shadow-md">
      <Link href={"/"} className="flex gap-0 items-end">
        <Image src={Logo} alt="logo" className="h-auto w-28" />
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Search />
      </div>
    </header>
  )
}

export default Navbar
