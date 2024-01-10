import { Content } from '@/components/content'
import { Header } from '@/components/header'
import { Nabvar } from '@/components/navbar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const Page = () => {
  return (
    <div className="relative grid min-h-dvh lg:grid-cols-[224px_1fr]">
      <Sheet>
        <SheetTrigger className="fixed bottom-4 right-4 z-50 rounded-full border border-white bg-[#146EB4] p-3 text-white shadow-sm lg:hidden">
          <HamburgerMenuIcon className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent className="w-max border-0 p-0 lg:hidden">
          <Nabvar />
        </SheetContent>
      </Sheet>

      <div className="hidden lg:block">
        <Nabvar />
      </div>

      <div className="relative flex h-full w-full flex-col">
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default Page
