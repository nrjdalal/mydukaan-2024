import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Icons } from './icons'

export const Nabvar = () => {
  return (
    <div className="left-0 top-0 h-screen w-56 bg-[#1E2640] py-4 text-white lg:fixed">
      <div className="flex h-full w-full flex-col items-center gap-4">
        {/* Nav Top */}
        <div className="flex h-full flex-col items-center gap-6">
          {/* Company */}
          <div className="flex w-48 items-center justify-between gap-3">
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="relative size-10 rounded bg-white">
                <Image
                  className="absolute left-[0.5px] top-[0.5px] rounded"
                  src="/nishyan.png"
                  alt="Logo"
                  width={39}
                  height={39}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium leading-[22px]">
                  Nishyan
                </h3>
                <p className="font-alt text-[13px] leading-[16px] underline opacity-80">
                  Visit store
                </p>
              </div>
            </div>
            {/* Right */}
            <div className="hidden lg:block">
              <Icons.Down />
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex w-52 flex-col gap-1">
            <NavItem Icon={Icons.Home} title="Home" selected={false} />
            <NavItem Icon={Icons.Orders} title="Orders" selected={false} />
            <NavItem Icon={Icons.Products} title="Products" selected={false} />
            <NavItem Icon={Icons.Delivery} title="Delivery" selected={false} />
            <NavItem
              Icon={Icons.Marketing}
              title="Marketing"
              selected={false}
            />
            <NavItem
              Icon={Icons.Analytics}
              title="Analytics"
              selected={false}
            />
            <NavItem Icon={Icons.Payouts} title="Payouts" selected={true} />
            <NavItem
              Icon={Icons.Discounts}
              title="Discounts"
              selected={false}
            />
            <NavItem Icon={Icons.Audience} title="Audience" selected={false} />
            <NavItem
              Icon={Icons.Appearance}
              title="Appearance"
              selected={false}
            />
            <NavItem Icon={Icons.Plugins} title="Plugins" selected={false} />
          </div>
        </div>
        {/* Nav Bottom */}
        <div className="flex w-48 items-center gap-3 rounded bg-[#353C53] px-3 py-1.5">
          <div className="rounded bg-white/10 p-1.5">
            <Icons.Wallet />
          </div>
          <div>
            <p className="text-[13px] leading-4 opacity-80">
              Available credits
            </p>
            <p className="font-medium leading-6">222.10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavItem = ({
  Icon,
  title,
  selected,
}: {
  Icon: any
  title: string
  selected: boolean
}) => {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-3 rounded px-4 py-2 hover:bg-white/10',
        selected && 'bg-white/10',
      )}
    >
      <Icon />
      <p className="text-sm font-medium opacity-80 hover:opacity-100">
        {title}
      </p>
    </div>
  )
}
