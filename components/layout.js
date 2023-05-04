import Head from "next/head"
import Header from './header'
import Footer from './footer'
export default function Layout({children,title='',description=''}) {
     return (
          <>
               <Head>
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta name="description" content={description} />
                    {/* <meta
                         http-equiv="Content-Security-Policy"
                         content="default-src 'self'; img-src https://*; child-src 'none';" 
                    /> */}
               </Head>
               <Header />
               {children}
               <Footer />
          </>
     )
}