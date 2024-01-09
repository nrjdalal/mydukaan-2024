import { Icons } from './icons'

export const Header = () => {
  return (
    <div className="sticky top-0 flex h-16 items-center justify-between gap-8 border-b border-b-[#D9D9D9] bg-white px-8 py-3 xl:gap-4">
      <div className="flex w-full items-center gap-4">
        <h2 className="font-alt text-xl font-medium text-[#1A181E]">Payouts</h2>
        <div className="flex items-center gap-1.5">
          <Icons.Help />
          <p className="hidden font-alt text-xs text-[#4D4D4D] md:block">
            How it works
          </p>
        </div>
      </div>
      <div className="flex h-full w-full items-center gap-2 rounded-md bg-[#F2F2F2] px-4">
        <Icons.Search />
        <p className="hidden font-alt text-[15px] leading-[22px] text-[#808080] lg:block">
          Search features, tutorials, etc.
        </p>
        <p className="font-alt text-[15px] leading-[22px] text-[#808080] lg:hidden">
          Search site
        </p>
      </div>
      <div className="hidden h-full w-full justify-end gap-3 xl:flex">
        <div className="flex size-10 items-center justify-center gap-6 rounded-full bg-[#E6E6E6]">
          <Icons.Message />
        </div>
        <Icons.Menu />
      </div>
    </div>
  )
}
