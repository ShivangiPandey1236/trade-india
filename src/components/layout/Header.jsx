import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown, Headset, Store, User, UserCircle, Search } from "lucide-react"
import logo from "@/assets/utpaad-n.png"
import PostBuyReqModal from "@/components/shared/PostBuyReqModal"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200 text-sm py-1">
        <div className="px-4 flex justify-between items-center w-full">
          {/* Left: User Actions */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Welcome User!</span>
            <Button variant="outline" size="sm" className="h-7 text-primary border-primary hover:bg-primary/10 hover:text-primary px-3 py-0">
              Sign In
            </Button>
            <Button size="sm" className="h-7 px-3 py-0">
              Join Free
            </Button>
          </div>

          {/* Center: Contact Info */}
          <div className="hidden md:flex items-center space-x-4 text-gray-600 text-xs">
            <span>Sales : +91-9953717914</span>
            <span className="text-gray-300">|</span>
            <span>Support : +91-9700318318</span>
          </div>

          {/* Right: Links */}
          <div className="hidden sm:flex items-center space-x-6 text-gray-600">
            <div className="flex items-center cursor-pointer hover:text-primary group">
              <UserCircle className="w-4 h-4 mr-1 text-gray-500 group-hover:text-primary" />
              <span>For Buyer</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </div>
            <div className="flex items-center cursor-pointer hover:text-primary group">
              <Store className="w-4 h-4 mr-1 text-gray-500 group-hover:text-primary" />
              <span>For Seller</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </div>
            <div className="flex items-center cursor-pointer hover:text-primary group">
              <Headset className="w-4 h-4 mr-1 text-gray-500 group-hover:text-primary" />
              <span>Help</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 py-3 sm:py-4 shadow-sm">
        <div className="px-4 flex flex-col lg:flex-row justify-between items-center w-full gap-3 lg:gap-6">
          
          {/* Logo & Mobile Action Wrapper */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 select-none">
              <img src={logo} alt="Trade India Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>

            {/* Mobile Post Buy CTA */}
            <div className="lg:hidden shrink-0">
              <Button onClick={() => setIsModalOpen(true)} size="sm" className="h-8 sm:h-9 px-3 sm:px-4 rounded-full font-semibold text-xs shadow transition-all">
                Post Req
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:flex-1 lg:max-w-3xl flex px-0 lg:px-4">
            <div className="flex w-full rounded-full border-2 border-primary overflow-hidden shadow-sm h-10 sm:h-11 items-stretch bg-white">
              {/* Category selector - hidden on mobile, visible on sm and up */}
              <div className="hidden sm:flex w-40 h-full border-r border-gray-200 bg-gray-50/50 items-center shrink-0">
                <Select defaultValue="Products / Services">
                  <SelectTrigger className="w-full border-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 shadow-none bg-transparent hover:bg-transparent text-gray-600 font-semibold px-4 h-full cursor-pointer focus:outline-none text-sm">
                    <SelectValue placeholder="Products" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Products / Services">Products / Services</SelectItem>
                    <SelectItem value="Companies">Companies</SelectItem>
                    <SelectItem value="Leads">By Leads</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input 
                type="text" 
                placeholder="Search products, brands or services..." 
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 shadow-none rounded-none h-full px-3 sm:px-4 text-slate-700 placeholder-gray-400 text-xs sm:text-sm outline-none bg-transparent"
              />
              <Button className="border-0 py-0 leading-none rounded-none h-full px-4 sm:px-8 font-bold transition-all shrink-0 text-sm flex items-center justify-center cursor-pointer">
                <Search className="w-4.5 h-4.5 sm:hidden" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden lg:block shrink-0">
            <Button onClick={() => setIsModalOpen(true)} className="h-11 px-6 rounded-full font-medium text-base shadow-md transition-all ">
              Post Buy Requirement
            </Button>
          </div>
        </div>
      </div>
      
      <PostBuyReqModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}
