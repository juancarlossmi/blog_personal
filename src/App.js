// BrowserRouter = se encarga del Manejo de rutas organizacion de las rutas creadas para el proyecto
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
// importacin del archivo store
import store from './store'
// 
import { Provider } from 'react-redux'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import AnimatedRoutes from 'AnimatedRoutes';

function App() {
  
  return (
    // instalacion de redux con store almacenaremos ahi los estados de los componentes
    <HelmetProvider>
      <Helmet>
        <title>jcsmi | marketing agency</title>
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
      <Provider store={store}>
        <Router>        
          <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;