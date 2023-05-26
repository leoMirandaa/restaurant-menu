import Head from "next/head"
import { Navbar } from "../ui"

export const ShopLayout = ({ children, title, pageDescription, imageUrl }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ pageDescription }/>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {
          imageUrl && (
            <meta name="og:image" content={ imageUrl }/>
          )
        }
      </Head>

      <nav>
        <Navbar >
          { children }
        </Navbar>
      </nav>

      {/* <main>
        { children }
      </main> */}

      <footer>
      </footer>
    </>
  )
}