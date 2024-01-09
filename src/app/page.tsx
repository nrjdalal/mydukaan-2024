import { Content } from '@/components/content'
import { Header } from '@/components/header'
import { Nabvar } from '@/components/navbar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const Page = () => {
  return (
    <div className="relative grid min-h-dvh lg:grid-cols-[224px_1fr]">
      <Sheet>
        <SheetTrigger className="fixed right-4 top-4 z-10 rounded-xl border-2 bg-white p-4 text-blue-700 shadow-sm lg:hidden">
          <HamburgerMenuIcon />
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
