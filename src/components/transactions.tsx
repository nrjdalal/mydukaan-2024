import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  {
    id: '#281209',
    status: 'Successful',
    tid: '131634495747',
    date: 'Today, 08:45 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281208',
    status: 'Processing',
    tid: '131634495747',
    date: 'Yesterday, 03:00 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281207',
    status: 'Successful',
    tid: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281206',
    status: 'Successful',
    tid: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281205',
    status: 'Successful',
    tid: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281204',
    status: 'Successful',
    tid: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  },
]

export function Transactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-none py-2.5 font-alt text-sm font-medium text-[#4D4D4D]">
          <TableHead className="w-max rounded-l bg-[#F2F2F2] lg:w-1/6 xl:w-1/5">
            <p className="lg:hidden">ID</p>
            <p className="hidden lg:block">Order ID</p>
          </TableHead>
          <TableHead className="w-max bg-[#F2F2F2] lg:w-1/6 xl:w-1/5">
            Status
          </TableHead>
          <TableHead className="w-max bg-[#F2F2F2] lg:w-1/6 xl:w-1/5">
            <p className="lg:hidden">Tx. ID</p>
            <p className="hidden lg:block">Transaction ID</p>
          </TableHead>
          <TableHead className="w-max bg-[#F2F2F2] lg:w-1/5">
            <p className="lg:hidden">Refunded</p>
            <p className="hidden lg:block">Refund Date</p>
          </TableHead>
          <TableHead className="w-max rounded-r bg-[#F2F2F2] text-right md:w-1/6 xl:w-[10%]">
            <p className="md:hidden">Amount</p>
            <p className="hidden md:block">Order Amount</p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow className="h-12 text-sm" key={invoice.id}>
            <TableCell className="font-alt font-medium text-[#146EB4]">
              {invoice.id}
            </TableCell>
            <TableCell>
              <div className="mb-0.5 flex items-center gap-1.5">
                {invoice.status === 'Successful' ? (
                  <div className="size-2.5 rounded-full bg-[#17B31B]" />
                ) : (
                  <div className="size-2.5 rounded-full bg-[#999999]" />
                )}
                <p className="#1A181E">{invoice.status}</p>
              </div>
            </TableCell>
            <TableCell className="font-alt text-[#4D4D4D]">
              {invoice.tid}
            </TableCell>
            <TableCell className="font-alt text-[#4D4D4D]">
              <p className="md:hidden">
                {invoice.date.replace('2023', '23').split(', ')[0]}
                <br />
                {invoice.date.replace('2023', '23').split(', ')[1]}
              </p>
              <p className="hidden md:block">{invoice.date}</p>
            </TableCell>
            <TableCell className="text-right text-[#1A181E]">
              {invoice.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
