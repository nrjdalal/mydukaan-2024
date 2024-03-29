import { Content } from '@/components/content'
import { Header } from '@/components/header'
import { Nabvar } from '@/components/navbar'

const Page = () => {
  return (
    <div className="relative grid min-h-dvh lg:grid-cols-[224px_1fr]">
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
