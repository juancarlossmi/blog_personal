import Features from "components/careers/Features"
import Header from "components/careers/Header"
import PositionList from "components/careers/PositionList"
import Testimonial from "components/careers/Testimonial"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async'

function Careers() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <Layout>
            <Navbar />
            <Helmet>
                <title>Jcsmi | Careers</title>
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
            <div className="pt-28">
                <Header />
                <Testimonial />
                <div className="bg-white">
                
                <div className="mx-12 pt-24 pb-12">
                    <h3 className="text-4xl font-bold tracking-tight text-gray-900">Work with top notch companies</h3>
                </div>

                <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Transistor"
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"
                        />
                    </div>
                    </div>
                </div>
                </div>
                <Features />
                <PositionList />
            </div>
            <Footer />
        </Layout>
    )
}
export default Careers