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
    date: 'Yesterday, 3:00 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281207',
    status: 'Successful',
    tid: '131634495747',
    date: 'Today, 08:45 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281206',
    status: 'Successful',
    tid: '131634495747',
    date: 'Today, 08:45 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281205',
    status: 'Successful',
    tid: '131634495747',
    date: 'Today, 08:45 PM',
    amount: '₹1,125.00',
  },
  {
    id: '#281204',
    status: 'Successful',
    tid: '131634495747',
    date: 'Today, 08:45 PM',
    amount: '₹1,125.00',
  },
]

export function Transactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="font-alt border-none py-2.5 text-sm font-medium text-[#4D4D4D]">
          <TableHead className="w-1/5 rounded-l bg-[#F2F2F2]">
            Order ID
          </TableHead>
          <TableHead className="w-1/5 bg-[#F2F2F2]">Status</TableHead>
          <TableHead className="w-1/5 bg-[#F2F2F2]">Transaction ID</TableHead>
          <TableHead className="w-1/5 bg-[#F2F2F2]">Refund Date</TableHead>
          <TableHead className="w-[10%]] rounded-r bg-[#F2F2F2] text-right">
            Order Amount
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
              <div className="flex items-center gap-1.5">
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
              {invoice.date}
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
