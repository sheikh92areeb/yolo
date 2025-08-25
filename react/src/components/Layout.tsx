import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"


const Layout = () => {
  return (
    <>
        <Header />
        <main className="min-h-100">
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout
