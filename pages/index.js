import Layout from '../components/layout'
import Banner from '../components/home/banner'
import Reel from '../components/home/reel'
// import MediaCreativity from '../components/home/media-creativity'
// import NextSteps from '../components/home/next-steps'
// import OpenBold from '../components/home/open-bold'

export default function Home() {
     return (
          <>
               <Layout
                    title={'Digitas Perú'}
                    description={'Digitas Perú :: Somos Digitas Perú'}
               >
                    <Banner />
                    <Reel />
                    {/* <MediaCreativity />
                    <NextSteps />
                    <OpenBold /> */}
               </Layout>
          </>
     )
}
