import Topbar from 'src/components/Topbar/Topbar'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen flex-col">
      <Topbar></Topbar>
      <main className="grow">{children}</main>
    </div>
  )
}

export default MainLayout
