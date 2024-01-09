import { Icons } from './icons'
import { Transactions } from './transactions'

export const Content = () => {
  return (
    <div className="h-full w-full bg-[#FAFAFA] p-8">
      {/* Overview */}
      <div className="mb-6 flex w-full items-center justify-between">
        <h3 className="font-alt text-lg font-medium text-[#1a181e]">
          Overview
        </h3>
        <div className="flex items-center gap-1.5 rounded border border-[#D9D9D9] px-3.5 py-1.5">
          <p className="text-[#4D4D4D]">This Month</p>
          <Icons.Arrow />
        </div>
      </div>
      {/* Cards */}
      <div className="mb-8 grid grid-cols-2 items-start gap-5 xl:grid-cols-3">
        {/* Next Payout */}
        <div className="w-full overflow-hidden rounded-lg bg-[#146EB4]">
          <div className="w-full p-5 text-white">
            <div className="mb-4 flex items-center gap-2">
              <p>Next Payout</p>
              <Icons.Ask />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-alt text-[32px] font-medium leading-[38px]">
                ₹2,312.23
              </p>
              <div className="flex items-center">
                <p className="font-alt font-medium underline">23 orders</p>
                <Icons.Right />
              </div>
            </div>
          </div>
          <div className="font-alt flex w-full justify-between rounded-lg bg-[#0E4F82] px-6 py-2 text-sm text-[#F2F2F2]">
            <p>Next Payout Date</p>
            <p className="font-medium">Today, 04:00PM</p>
          </div>
        </div>

        {/* Amount Pending */}
        <div className="w-full rounded-lg bg-white p-5 shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
          <div className="mb-4 flex items-center gap-2">
            <p className="text-[#4D4D4D]">Amount Pending</p>
            <Icons.AskOnWhite />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-alt text-[32px] font-medium leading-[38px] text-[#1A181E]">
              ₹92,312.20
            </p>
            <div className="flex items-center">
              <p className="font-alt font-medium text-[#146EB4] underline">
                13 orders
              </p>
              <Icons.RightOnWhite />
            </div>
          </div>
        </div>
        {/* Amount Processing */}
        <div className="w-full rounded-lg bg-white p-5 shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
          <div className="mb-4 flex items-center gap-2">
            <p className="text-[#4D4D4D]">Amount Processing</p>
            <Icons.AskOnWhite />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-alt text-[32px] font-medium leading-[38px] text-[#1A181E]">
              ₹23,92,312.19
            </p>
          </div>
        </div>
      </div>
      {/* This Month */}
      <div className="mb-6 flex w-full items-center justify-between">
        <h3 className="font-alt text-lg font-medium text-[#1a181e]">
          Transactions | This Month
        </h3>
      </div>
      {/* Bubbles */}
      <div className="mb-6 flex gap-3">
        <div className="rounded-[40px] bg-[#E6E6E6] px-4 py-1.5">
          <p className="text-sm font-medium text-[#808080]">Payout (22)</p>
        </div>
        <div className="rounded-[40px] bg-[#146EB4] px-4 py-1.5">
          <p className="text-sm font-medium text-white">Refunds (6)</p>
        </div>
      </div>
      {/* Transactions */}
      <div className="w-full rounded-lg bg-white p-3 pb-2 shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
        {/* Toolbar */}
        <div className="mb-3 flex w-full justify-between">
          <div className="flex w-[248px] items-center gap-2 rounded border border-[#D9D9D9] px-4 py-2.5">
            <Icons.SearchMini />
            <p className="font-alt text-sm text-[#999999]">
              Order ID or transaction ID
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 rounded border border-[#D9D9D9] px-3 py-1.5">
              <p className="text-[#4D4D4D]">Sort</p>
              <Icons.UpDown />
            </div>
            <div className="flex items-center gap-1.5 rounded border border-[#D9D9D9] p-2">
              <Icons.Download />
            </div>
          </div>
        </div>
        {/* Transactions Items */}
        <Transactions />
      </div>
    </div>
  )
}
