import { Nabvar } from '@/components/navbar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Icons } from './icons'

export const Header = () => {
  return (
    <div className="sticky top-0 border-b border-b-[#D9D9D9] bg-white">
      <div className="flex h-16 items-center justify-between gap-8 px-4 py-3 lg:px-8 xl:gap-4">
        <div className="flex w-full items-center gap-4">
          <h2 className="font-alt text-xl font-medium text-[#1A181E]">
            Payouts
          </h2>
          <div className="flex items-center gap-1.5">
            <Icons.Help />
            <p className="hidden font-alt text-xs text-[#4D4D4D] sm:block">
              How it works
            </p>
          </div>
        </div>
        <div className="hidden h-full w-full min-w-72 items-center gap-2 rounded-md bg-[#F2F2F2] px-4 md:flex">
          <Icons.Search />
          <p className="font-alt text-[15px] leading-[22px] text-[#808080]">
            Search features, tutorials, etc.
          </p>
        </div>
        <div className="flex h-full w-full justify-end gap-3">
          <div className="flex size-10 items-center justify-center gap-6 rounded-full bg-[#E6E6E6]">
            <Icons.Message />
          </div>
          <Icons.Menu />
          <Sheet>
            <SheetTrigger className="flex size-10 items-center justify-center rounded-full bg-[#146EB4] text-white shadow-sm lg:hidden">
              <HamburgerMenuIcon className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent className="w-max border-0 p-0 lg:hidden">
              <Nabvar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Mobile search */}
      <div className="flex h-16 items-center justify-between px-4 py-3 md:hidden">
        <div className="flex h-full w-full items-center gap-2 rounded-md bg-[#F2F2F2] px-4">
          <Icons.Search />
          <p className="font-alt text-[15px] leading-[22px] text-[#808080]">
            Search features, tutorials, etc.
          </p>
        </div>
      </div>
    </div>
  )
}
