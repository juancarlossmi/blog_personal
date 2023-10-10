import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react"
import Error404 from "containers/errors/Error404"


function Blog() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <Layout>
            <Helmet>
            <title>Jcsmi | Blog</title>
            {/* Esto aparece en google cuando alguien busca la pagina */}
            <meta name='description' content='Agencia de paginas web, solicita una cotizacion'/>
            <meta name='keywords' content='paginas web, agencia marketing, react, python'/>
            <meta name='robots' content='all'/>
            <meta name='author' content='jcsmi'/>
            <link rel='canonical' href='http://www.jcsmi.com/'/>

            {/* SEO para redes sociales  */}
            <meta name='og:title' content='http://www.jcsmi.com/'/>
            <meta name='og:description' content='Agencia de paginas web, solicita una cotizacion'/>
            <meta name='og:url' content='http://www.jcsmi.com/'/>
            <meta name='og:image' content='https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg'/>
            <meta name='twitter:title' content='Agencia de paginas web, solicita una cotizacion'/>
            <meta name='twitter:description' content='paginas web, agencia marketing, react, python'/>
            <meta name='twitter:image' content='https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg'/>
            <meta name='twitter:card' content='summary_large_image'/>

          </Helmet>
            <Navbar />
                <Error404/>
            <Footer />
        </Layout>
    )
}
export default Blog