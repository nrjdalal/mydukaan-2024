import { Content } from '@/components/content'
import { Header } from '@/components/header'
import { Nabvar } from '@/components/navbar'

const Page = () => {
  return (
    <div className="grid min-h-dvh grid-cols-[224px_1fr]">
      <Nabvar />
      <div className="flex h-full w-full flex-col">
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default Page
