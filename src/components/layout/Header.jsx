import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown, Headset, Store, User, UserCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200 text-sm py-1">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          {/* Left: User Actions */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Welcome User!</span>
            <Button variant="outline" size="sm" className="h-7 text-primary border-primary hover:bg-primary/10 hover:text-primary px-3 py-0">
              Sign In
            </Button>
            <Button size="sm" className="h-7 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-0">
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
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center max-w-7xl gap-4 lg:gap-6">
          
          {/* Logo & Mobile Action Wrapper */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            {/* Logo */}
            <div className="flex flex-col flex-shrink-0">
              <div className="flex items-center">
                {/* Fake logo icon */}
                <div className="relative flex items-center justify-center mr-2">
                  <span className="text-4xl italic font-bold text-primary leading-none">e</span>
                  <div className="w-2 h-2 rounded-full bg-destructive absolute top-1 right-[-4px]"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-primary tracking-tight">Exporters</span>
                    <span className="text-2xl font-bold text-destructive tracking-tight">India</span>
                    <span className="text-2xl font-bold text-primary tracking-tight">.com</span>
                  </div>
                  <span className="text-[10px] text-gray-500 tracking-wide mt-[-2px]">Largest Searchable B2B Marketplace</span>
                </div>
              </div>
            </div>

            {/* Mobile Post Buy CTA */}
            <div className="lg:hidden shrink-0">
              <Button size="sm" className="h-9 px-4 rounded-full bg-destructive hover:bg-destructive/95 text-white font-semibold text-xs shadow transition-all">
                Post Requirement
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:flex-1 lg:max-w-3xl flex px-0 lg:px-4">
            <div className="flex w-full rounded-full border-2 border-primary overflow-hidden shadow-sm h-11 items-center bg-white">
              <div className="w-32 sm:w-44 h-full border-r border-gray-200 bg-gray-50/50 flex items-center shrink-0">
                <Select defaultValue="products">
                  <SelectTrigger className="w-full border-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 shadow-none bg-transparent hover:bg-transparent text-gray-600 font-semibold px-2 sm:px-4 h-full cursor-pointer focus:outline-none text-xs sm:text-sm">
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
                placeholder="Enter product / service to search" 
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 shadow-none rounded-none h-full px-3 text-slate-700 placeholder-gray-400 text-xs sm:text-sm outline-none bg-transparent"
              />
              <Button className="rounded-none h-full px-4 sm:px-8 bg-primary hover:bg-primary/95 text-primary-foreground font-bold transition-all shrink-0 text-xs sm:text-sm">
                Search
              </Button>
            </div>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden lg:block shrink-0">
            <Button className="h-11 px-6 rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-medium text-base shadow-md transition-all">
              Post Buy Requirement
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
